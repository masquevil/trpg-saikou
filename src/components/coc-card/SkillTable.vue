<script setup lang="ts">
import { computed } from 'vue';
import type { ChildSkill } from '@/types/coc-card/skill';
import type { SkillGroup, SkillGroups } from '@/types/coc-card/formattedSkill';
import type { COCPCSkill, SkillPoint } from '@/types/coc-card/character';
import { dynamicInitFormulas } from '@/models/coc-card/skill';
import { usePC, useViewData } from '@/hooks/useCOCCardProviders';

import SkillTdLabel from './SkillTdLabel.vue';
import SkillTdInput from './SkillTdInput.vue';

interface Props {
  data: SkillGroups;
}
const props = defineProps<Props>();

const pc = usePC();
const viewData = useViewData();

interface TableRowData {
  // group info (optional)
  isGroupStart?: boolean;
  groupName?: string;
  groupSize?: number;
  isSpecialGroup?: boolean;
  // skill info
  key: string;
  skillName: string;
  skillKey: COCPCSkill;
  init: number;
  initPlaceholder?: string;
  points: SkillPoint;
  total: number;
  // child skill info
  childSkillData?: {
    name: string;
    place: number;
    list?: ChildSkill[];
  };
}

function getTableData(data: SkillGroups) {
  const tableData = data.reduce<TableRowData[]>(
    (result: any, skillGroup: SkillGroup) => {
      const rows: TableRowData[] = skillGroup.groupSkills.reduce<
        TableRowData[]
      >((rows, skill, index) => {
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
        let rowData: TableRowData = {
          key: skill.name,
          skillName: skill.name,
          skillKey: skill.name,
          init,
          initPlaceholder: skill.initPlaceholder,
          points,
          total: getTotal(points, init),
          ...(isGroupStart
            ? {
                isGroupStart,
                groupName: skillGroup.groupName,
                groupSize: skillGroup.groupSkills.length,
              }
            : {}),
          ...(isSpecialGroup ? { isSpecialGroup, groupSize: 1 } : {}),
        };
        let resultRows: TableRowData[] = [...rows];
        let added = [rowData];
        // multi skill rows
        if (skill.group) {
          const length = skill.group.show.length;
          const groupRow =
            resultRows.find((row) => row.isGroupStart) || rowData;
          // increase groupSize
          groupRow.groupSize! += length - 1;
          added = skill.group.show.map((placeName, childIndex) => {
            const childSkillName =
              viewData?.showingChildSkills.get(skill.name)?.[childIndex] ??
              placeName;
            const childSkill = skill.group?.skills.find(
              ({ name }) => name === childSkillName
            );
            const init = childSkill?.init ?? rowData.init;
            const skillKey: COCPCSkill = [
              skill.name,
              childSkillName,
              childIndex,
            ];
            const skillPoint = findSkillPoints(skillKey);
            const points = skillPoint?.[1] || {};
            return {
              ...rowData,
              // group info
              isGroupStart: childIndex ? false : rowData.isGroupStart,
              // skill info
              key: `${skill.name}:_:${childIndex}`,
              skillKey,
              init,
              points,
              total: getTotal(points, init),
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
      }, []);
      return [...result, ...rows];
    },
    []
  );
  return tableData;
}

const tableData = computed(() => getTableData(props.data));

function findSkillPoints(skillInfo: COCPCSkill) {
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
  skillKey: COCPCSkill,
  pointName: keyof SkillPoint,
  value: string | boolean
) {
  if (!pc) return;
  let skillPoint = findSkillPoints(skillKey);
  if (!skillPoint) {
    const key =
      typeof skillKey === 'string' ? skillKey : ([...skillKey] as COCPCSkill);
    skillPoint = [key, {}];
    pc.value.skillPoints.push(skillPoint);
  }
  const points = skillPoint[1];
  if (typeof value === 'boolean') {
    points.c = value;
  } else {
    const name = pointName as Exclude<keyof SkillPoint, 'c'>;
    if (value) {
      points[name] = Number(value);
    } else {
      delete points[name];
    }
  }
}

function getTotal(points: SkillPoint, init: number) {
  const { p = 0, i = 0, g = 0 } = points;
  return init + Number(p) + Number(i) + Number(g);
}
</script>

<template>
  <table class="skill-table">
    <thead>
      <tr>
        <th class="skill-th th-deep"></th>
        <th class="skill-th th-deep th-skill">
          <div class="th-skill-label">
            <div class="th-skill-label-pro">
              <span
                class="th-skill-label-pro-text"
                style="transform-origin: 50% 40%"
              >
                本
              </span>
              <span
                class="th-skill-label-pro-text"
                style="transform-origin: 0% 40%"
              >
                职
              </span>
              <span
                class="th-skill-label-pro-text"
                style="transform-origin: 50% 10%"
              >
                技
              </span>
              <span
                class="th-skill-label-pro-text"
                style="transform-origin: 0% 10%"
              >
                能
              </span>
            </div>
            技能
          </div>
        </th>
        <th class="skill-th th-light">基础%</th>
        <th class="skill-th th-deep">职业%</th>
        <th class="skill-th th-light">兴趣%</th>
        <th class="skill-th th-deep">
          <div class="th-grow">成长%</div>
        </th>
        <th class="skill-th th-light">成功率%</th>
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
          class="skill-td td-skill-name"
          :class="{
            'td-skill-name-special': row.isSpecialGroup,
            'td-color-1': index % 2,
            'td-color-2': (index + 1) % 2,
          }"
        >
          <SkillTdLabel
            :skillName="row.skillName"
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
          <span
            v-if="!row.init && row.initPlaceholder"
            class="init-placeholder"
            >{{ row.initPlaceholder }}</span
          >
          <span v-else>{{ row.init }}</span>
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
          <!-- interests point -->
          <SkillTdInput
            :value="`${row.points.i ?? ''}`"
            @input="(v) => updateSkillPoint(row.skillKey, 'i', v)"
          />
        </td>
        <td
          class="skill-td"
          :class="{
            'td-color-1': index % 2,
            'td-color-2': (index + 1) % 2,
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
            'td-color-0': index % 2,
            'td-color-1': (index + 1) % 2,
          }"
        >
          <span v-if="row.total !== row.init">{{ row.total }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
.skill-table {
  flex: 1;
  color: var(--color-black);

  --td-color-0: hsl(0, 0%, 100%);
  --td-color-1: hsl(0, 0%, 92%);
  --td-color-2: hsl(0, 0%, 84%);
  --td-color-3: hsl(0, 0%, 76%);
  --td-line-height: 1.56em;
  --th-line-height: 1.66em;
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
  background-color: var(--td-color-0);
}
.td-color-1 {
  background-color: var(--td-color-1);
}
.td-color-2 {
  background-color: var(--td-color-2);
}

.skill-td {
  text-align: center;
  line-height: var(--td-line-height);
  border: none;
}
.td-group-name {
  width: 1.4em;
  padding: 0.2em;
  line-height: 1.6em;
}
.td-group-name-visible {
  border: 1px solid var(--color-black);
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

.init-placeholder {
  color: var(--color-placeholder);
  font-size: 0.86em;
}
</style>
