<script setup lang="ts">
import { computed, inject, reactive, ref } from 'vue';
import type { ChildSkill } from '@/types/coc-card/skill';
import type { SkillGroup, SkillGroups } from '@/types/coc-card/formattedSkill';
import type { COCCardViewData } from '@/types/coc-card/viewData';
import type {
  COCPlayerCharacter,
  COCPCSkill,
  SkillPoint,
} from '@/types/coc-card/character';
import { dynamicInitFormulas } from '@/models/coc-card/skill';

import SkillTdLabel from './SkillTdLabel.vue';
import SkillTdInput from './SkillTdInput.vue';

interface Props {
  data: SkillGroups;
}
const props = defineProps<Props>();

const pc = inject<COCPlayerCharacter>('pc');
const viewData = inject<COCCardViewData>('viewData');

interface TableRowData {
  isGroupStart?: boolean;
  groupSize?: number;
  isSpecialGroup?: boolean;
  groupName?: string;
  groupIndex: number;
  skillName: string;
  init: number;
  initPlaceholder?: string;
  childSkillData?: {
    name: string;
    place: number;
    list?: ChildSkill[];
  };
}

function getTableData(data: SkillGroups) {
  const tableData = data.reduce<TableRowData[]>(
    (result: any, skillGroup: SkillGroup, groupIndex: number) => {
      const rows: TableRowData[] = skillGroup.groupSkills.reduce<
        TableRowData[]
      >((rows, skill, index) => {
        const isSpecialGroup = skillGroup.groupName === '特殊';
        let init = skill.init;
        if (pc && skill.name in dynamicInitFormulas) {
          init = dynamicInitFormulas[skill.name](pc);
        }
        const rowData: TableRowData = {
          isSpecialGroup,
          isGroupStart: isSpecialGroup || index === 0,
          groupSize: isSpecialGroup ? 1 : skillGroup.groupSkills.length,
          groupName: skillGroup.groupName,
          groupIndex,
          skillName: skill.name,
          init,
          initPlaceholder: skill.initPlaceholder,
        };
        let resultRows = [...rows].reverse();
        let added = [rowData];
        if (skill.group) {
          const length = skill.group.show.length;
          const groupRow =
            resultRows.find((row) => row.isGroupStart) || rowData;
          groupRow.groupSize! += length - 1;
          added = skill.group.show.map((placeName, childIndex) => {
            const childSkillName =
              viewData?.showingChildSkills.get(skill.name)?.[childIndex] ??
              placeName;
            const childSkill = skill.group?.skills.find(
              ({ name }) => name === childSkillName
            );
            return {
              ...rowData,
              isGroupStart: childIndex ? false : rowData.isGroupStart,
              init: childSkill?.init ?? rowData.init,
              childSkillData: {
                name: childSkillName,
                place: childIndex,
                list: skill.group?.skills,
              },
            };
          });
        }
        return [...resultRows.reverse(), ...added];
      }, []);
      return [...result, ...rows];
    },
    []
  );
  return tableData;
}

const tableData = computed(() => getTableData(props.data));

interface PCSkillIndexesOfSimple {
  index: number;
}
interface PCSkillIndexesOfGroup {
  isGroupSkill: true;
  indexes: number[];
}
type PCSkillIndexes = PCSkillIndexesOfSimple | PCSkillIndexesOfGroup;
function getPCSkillIndexes() {
  const result: Record<string, PCSkillIndexes> = {};
  tableData.value.forEach((row, index) => {
    let key = row.skillName;
    if (!row.childSkillData) {
      result[key] = {
        index,
      };
    } else {
      if (!result[key]) {
        result[key] = {
          isGroupSkill: true,
          indexes: [],
        };
      }
      (result[key] as PCSkillIndexesOfGroup).indexes[row.childSkillData.place] =
        index;
    }
  });
  return result;
}

const skillIndexes = reactive(getPCSkillIndexes());
// @ts-expect-error
window.skillIndexes = skillIndexes;

function updateSkillPoint(
  skillInfo: COCPCSkill,
  pointName: keyof SkillPoint,
  value: string
) {
  if (!pc) return;
  // pc.skillPoints.
}
</script>

<template>
  <table class="skill-table">
    <thead>
      <tr>
        <th class="th-deep"></th>
        <th class="th-deep th-skill">
          <div class="th-skill-label">
            <div class="th-skill-label-pro">本职技能</div>
            技能
          </div>
        </th>
        <th class="th-light">基础%</th>
        <th class="th-deep">职业%</th>
        <th class="th-light">兴趣%</th>
        <th class="th-deep">成长%</th>
        <th class="th-light">成功率%</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row, index) in tableData"
        :key="row.groupName"
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
          <SkillTdInput />
        </td>
        <td
          class="skill-td"
          :class="{
            'td-color-0': index % 2,
            'td-color-1': (index + 1) % 2,
          }"
        >
          <SkillTdInput />
        </td>
        <td
          class="skill-td"
          :class="{
            'td-color-1': index % 2,
            'td-color-2': (index + 1) % 2,
          }"
        >
          <SkillTdInput :checkable="true" />
        </td>
        <td
          class="skill-td"
          :class="{
            'td-color-0': index % 2,
            'td-color-1': (index + 1) % 2,
          }"
        ></td>
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
  --td-line-height: 1.5em;
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
  font-size: 0.6em;
  width: calc(1.5em / 0.6);
  height: calc(1.5em / 0.6);
  line-height: 1;
  padding: calc(0.15em / 0.6);
  margin-top: 1px;
  background-color: var(--color-white);
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
.td-skill-name-special :deep(.skill-td-checkbox) {
  visibility: hidden;
  pointer-events: none;
}

.init-placeholder {
  color: var(--color-placeholder);
  font-size: 0.86em;
}
</style>
