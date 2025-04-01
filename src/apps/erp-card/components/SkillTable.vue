<script setup lang="ts">
import { computed, nextTick } from 'vue';
import type { ChildSkill } from '../types/skill';
import type { SkillGroup, SkillGroups } from '../types/formattedSkill';
import type { ERPPCSkill, SkillPoint } from '../types/character';
import type { Suggestion } from '../types/suggestion';
import { dynamicInitFormulas } from '../models/skill';
import { usePC, useViewData, usePageData } from '../hooks/useProviders';

import SkillTdLabel from './SkillTdLabel.vue';
import SkillTdInput from './SkillTdInput.vue';

interface Props {
  data: SkillGroups<string>;
  autoFillCount?: number;
  suggestion?: Suggestion;
}
const props = defineProps<Props>();

const pc = usePC();
const viewData = useViewData();
const pageData = usePageData();

interface TableRowData {
  // group info (optional)
  isGroupStart?: boolean;
  groupName?: string;
  groupSize?: number;
  isSpecialGroup?: boolean;
  // skill info
  key: string;
  skillName: string;
  skillKey: ERPPCSkill;
  comments?: string;
  init: number;
  initPlaceholder?: string;
  points: SkillPoint;
  total: number;
  totalSeparation: [number, number, number]; // 100/50/20
  showTotal: boolean;
  // child skill info
  childSkillData?: {
    name: string;
    place: number;
    list?: ChildSkill[];
  };
  // combine
  combine?: {
    name: string;
    init?: number;
  }[];
}

function getTableData(data: SkillGroups<string>, autoFillCount?: number, suggestion?: Suggestion) {
  const tableData = data.reduce<TableRowData[]>((result: any, skillGroup: SkillGroup<string>) => {
    const rows: TableRowData[] = skillGroup.groupSkills.reduce<TableRowData[]>(
      (rows, skill, index) => {
        const isSpecialGroup = skillGroup.groupName === '特殊';
        let init = skill.init;
        if (pc && skill.name in dynamicInitFormulas) {
          init = dynamicInitFormulas[skill.name](pc.value);
        }
        const isGroupStart = isSpecialGroup || index === 0;
        // simple skill row
        const skillKey = skill.name;
        const skillPoint = findSkillPoints(skillKey);
        const points = skillPoint?.[1] || {};
        // 信用评级范围
        const [w0, w1] = suggestion?.wealth ?? [-1, -1];
        const comments = skillKey === '信用评级' && w0 >= 0 && w1 >= 0 ? `(${w0}~${w1})` : '';
        const total = getTotal(points, init);
        const combine =
          skill.combine &&
          Array.from({ length: 4 }).map((_, i) => {
            return skill.combine!.show[i] || { name: '', index: 20 };
          });
        let rowData: TableRowData = {
          key: skill.name,
          skillName: skill.name,
          skillKey: skill.name,
          comments,
          init,
          initPlaceholder: skill.initPlaceholder,
          points,
          total,
          totalSeparation: [total, ~~(total / 2), ~~(total / 5)],
          showTotal: total > 0 && (total !== init || total === points.b),
          ...(isGroupStart
            ? {
                isGroupStart,
                groupName: skillGroup.groupName,
                groupSize: skillGroup.groupSkills.length,
              }
            : {}),
          ...(isSpecialGroup ? { isSpecialGroup, groupSize: 1 } : {}),
          ...(skill.combine ? { combine } : {}),
        };
        let resultRows: TableRowData[] = [...rows];
        let added = [rowData];
        // multi skill rows
        if (skill.group) {
          let length = skill.group.show.length;
          let show = skill.group.show;
          if (!skill.name && autoFillCount) {
            length += autoFillCount;
            show = show.concat(Array(autoFillCount).fill(''));
          }
          const groupRow = resultRows.find((row) => row.isGroupStart) || rowData;
          // increase groupSize
          groupRow.groupSize! += length - 1;
          added = show.map((placeName, childIndex) => {
            const childSkillName =
              viewData?.showingChildSkills[skill.name]?.[childIndex] ?? placeName;
            const childSkill = skill.group?.skills.find(({ name }) => name === childSkillName);
            let init = childSkill?.init ?? rowData.init;
            const skillKey: ERPPCSkill = [skill.name, childSkillName, childIndex];
            const skillPoint = findSkillPoints(skillKey);
            const points = skillPoint?.[1] || {};
            const total = getTotal(points, init);
            if (pc && !skill.name) {
              init = points.b || 0;
            }
            return {
              ...rowData,
              // group info
              isGroupStart: childIndex ? false : rowData.isGroupStart,
              // skill info
              key: `${skill.name}:_:${childIndex}`,
              skillKey,
              init,
              points,
              total,
              totalSeparation: [total, ~~(total / 2), ~~(total / 5)],
              showTotal: total > 0 && (total !== init || total === points.b),
              // child skill info
              childSkillData: {
                name: childSkillName,
                place: childIndex,
                list: skill.group?.skills,
              },
            };
          });
        }
        return [...resultRows, ...added];
      },
      [],
    );
    return [...result, ...rows];
  }, []);
  return tableData;
}

const tableData = computed(() => getTableData(props.data, props.autoFillCount, props.suggestion));

function findSkillPoints(skillInfo: ERPPCSkill) {
  if (!pc) return;
  return pc.value.skillPoints.find((skillPoint) => {
    const [pointSkill] = skillPoint;
    if (typeof skillInfo === 'string') {
      return skillInfo === pointSkill;
    }
    const [name, _, place] = pointSkill;
    const [skillName, __, skillPlace] = skillInfo;
    return name === skillName && place === skillPlace;
  });
}

function updateSkillPoint(
  skillKey: ERPPCSkill,
  pointName: keyof SkillPoint,
  value: string | boolean,
) {
  if (!pc) return;
  let skillPoint = findSkillPoints(skillKey);
  if (!skillPoint) {
    const key = typeof skillKey === 'string' ? skillKey : ([...skillKey] as ERPPCSkill);
    skillPoint = [key, {}];
    pc.value.skillPoints.push(skillPoint);
  }
  const points = skillPoint[1];
  if (typeof value === 'boolean') {
    points.c = value;
  } else {
    const name = pointName as Exclude<keyof SkillPoint, 'c'>;
    if (value) {
      if (!Number.isNaN(Number(value))) {
        points[name] = Number(value);
      } else {
        points[name] = 0;
        nextTick(() => {
          delete points[name];
        });
      }
    } else {
      delete points[name];
    }
  }
}

function getTotal(points: SkillPoint, init: number) {
  const { b, p = 0, i = 0, g = 0 } = points;
  return (b ?? init) + Number(p) + Number(i) + Number(g);
}
</script>

<template>
  <table class="skill-table">
    <thead>
      <tr>
        <th class="skill-th th-deep"></th>
        <th class="skill-th th-deep">技能</th>
        <th class="skill-th th-light">基础</th>
        <th class="skill-th th-deep">分配</th>
        <th class="skill-th th-light">
          <div class="th-grow">成长</div>
        </th>
        <th class="skill-th th-deep">成功率%</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row, index) in tableData"
        :key="row.skillName"
      >
        <td
          v-if="row.isGroupStart"
          :rowspan="row.groupSize"
          class="skill-td td-group-name"
          :class="{
            'td-group-name-visible': !row.isSpecialGroup,
            'td-color-1': row.isSpecialGroup && index % 2,
            'td-color-2': row.isSpecialGroup && (index + 1) % 2,
          }"
        >
          {{ row.isSpecialGroup ? '' : row.groupName }}
        </td>
        <td
          v-if="row.combine"
          colspan="5"
          class="skill-td td-combine"
          :class="{
            'td-color-0': index % 2,
            'td-color-1': (index + 1) % 2,
          }"
        >
          <div class="td-combine-row">
            <!-- <SkillTdInput
              v-for="cSkill in row.combine"
              :key="cSkill.name"
              checkable
              :value="cSkill.name ? `${cSkill.name}(${cSkill.init || 20})` : ''"
            /> -->
            <SkillTdLabel
              v-for="cSkill in row.combine"
              showCheckbox
              :key="cSkill.name"
              :skillName="
                cSkill.name ? `${cSkill.name}${cSkill.init ? `(${cSkill.init})` : ''}` : ''
              "
              :childSkillData="cSkill.name ? undefined : { name: '', place: 0 }"
            />
          </div>
        </td>
        <template v-else>
          <td
            class="skill-td td-skill-name"
            :class="{
              'td-skill-name-special': row.isSpecialGroup,
              'td-color-1': index % 2,
              'td-color-2': (index + 1) % 2,
            }"
          >
            <SkillTdLabel
              :skillName="row.skillName"
              :comments="row.comments"
              :childSkillData="row.childSkillData"
            />
          </td>
          <td
            class="skill-td"
            :class="{
              'td-color-0': index % 2,
              'td-color-1': (index + 1) % 2,
            }"
          >
            <div
              v-if="!row.init && row.initPlaceholder"
              class="init-placeholder"
            >
              <span class="init-placeholder-content">
                {{ row.initPlaceholder }}
              </span>
            </div>
            <span v-else-if="row.skillName !== ''">
              {{ row.init }}
            </span>
            <!-- pro point -->
            <SkillTdInput
              v-else
              :value="`${row.points.b ?? ''}`"
              @input="(v) => updateSkillPoint(row.skillKey, 'b', v)"
            />
          </td>
          <td
            class="skill-td"
            :class="{
              'td-color-1': index % 2,
              'td-color-2': (index + 1) % 2,
            }"
          >
            <!-- pro point -->
            <SkillTdInput
              :value="`${row.points.p ?? ''}`"
              @input="(v) => updateSkillPoint(row.skillKey, 'p', v)"
            />
          </td>
          <td
            class="skill-td"
            :class="{
              'td-color-0': index % 2,
              'td-color-1': (index + 1) % 2,
            }"
          >
            <!-- grow point -->
            <SkillTdInput
              :checkable="true"
              :checked="row.points.c"
              :value="`${row.points.g ?? ''}`"
              @input="(v) => updateSkillPoint(row.skillKey, 'g', v)"
              @check="(v) => updateSkillPoint(row.skillKey, 'c', v)"
            />
          </td>
          <td
            class="skill-td"
            :class="{
              'td-color-1': index % 2,
              'td-color-2': (index + 1) % 2,
            }"
          >
            <span
              v-if="pageData?.showTotalSeparation"
              class="total-separation"
            >
              <span
                v-for="(sep, i) in row.totalSeparation"
                :key="i"
                class="total-sep"
              >
                {{ sep }}
              </span>
            </span>
            <span v-else-if="row.showTotal">{{ row.total }}</span>
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
.skill-table {
  flex: 1;
  color: var(--color-black);

  --td-color-0: hsl(0, 0%, 100%);
  --td-color-1: hsl(0, 0%, 93%);
  --td-color-2: hsl(0, 0%, 86%);
  --td-color-3: hsl(0, 0%, 79%);
  --sep-color: #aaa;
  --td-line-height: 1.66em;
  --th-line-height: calc(var(--td-line-height) + 0.1em);
}

.skill-th {
  line-height: var(--th-line-height);
}
.th-deep {
  background-color: var(--td-color-3);
}
.th-light {
  background-color: var(--td-color-2);
}
.th-skill {
  line-height: 0;
  text-align: left;
  vertical-align: top;
}
.th-skill-label {
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
}
.th-skill-label-pro {
  --pro-font-base: 0.66;
  /* font-size: calc(var(--pro-font-base) * 1em); */
  width: calc(var(--th-line-height));
  height: calc(var(--th-line-height));
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);
}
.th-skill-label-pro-text {
  display: inline-block;
  transform: scale(var(--pro-font-base));
  line-height: 1;
  width: calc(var(--th-line-height) / 2);
  height: calc(var(--th-line-height) / 2);
  text-align: center;
}
.th-grow {
  padding: 0 0.24em;
}

.td-color-0 {
  --cur-td-color: var(--td-color-0);
}
.td-color-1 {
  --cur-td-color: var(--td-color-1);
}
.td-color-2 {
  --cur-td-color: var(--td-color-2);
}

.skill-td {
  position: relative;
  text-align: center;
  line-height: var(--td-line-height);
  border: none;
  background-color: var(--cur-td-color);
}
.td-group-name {
  border-style: none;
  width: 2.8em;
  padding: 0.2em;
  line-height: 1.6em;
}
.td-group-name-visible {
  border: 1pt solid var(--color-black);
  border-left: none;
  border-bottom: none;
}
.td-skill-name {
  text-align: left;
  width: 7.5em;
}
.td-skill-name-special :deep(.skill-td-checkbox-label) {
  visibility: hidden;
  pointer-events: none;
}
.td-combine-row {
  height: var(--td-line-height);
  padding: 0 0.2em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  .skill-td-label {
    margin: 0 0.1em;
  }
}

.init-placeholder {
  color: var(--color-placeholder);
  display: inline-flex;
  width: 0;
  justify-content: center;
}
.init-placeholder-content {
  display: block;
  transform: scale(0.88);
  transform-origin: center center;
  white-space: nowrap;
}

.total-separation {
  display: flex;
  justify-content: center;
}
.total-sep {
  flex: 1 1 0.2em;

  & + & {
    border-left: 1pt solid var(--sep-color);
  }
}
</style>
