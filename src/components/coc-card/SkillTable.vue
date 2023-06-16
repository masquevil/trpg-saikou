<script setup lang="ts">
import { reactive, computed, inject } from 'vue';
import type { ChildSkill } from '@/types/coc-card/skill';
import type { SkillGroup, SkillGroups } from '@/types/coc-card/formattedSkill';
import type { COCCardViewData } from '@/types/coc-card/viewData';

import SkillTdLabel from './SkillTdLabel.vue';

interface Props {
  data: SkillGroups;
}
const props = defineProps<Props>();

const viewData = inject<COCCardViewData>('viewData');

interface TableRowData {
  isGroupStart?: boolean;
  groupSize?: number;
  isSpecialGroup?: boolean;
  groupName?: string;
  groupIndex: number;
  skillName: string;
  init: number;
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
        const rowData: TableRowData = {
          isSpecialGroup,
          isGroupStart: isSpecialGroup || index === 0,
          groupSize: isSpecialGroup ? 1 : skillGroup.groupSkills.length,
          groupName: skillGroup.groupName,
          groupIndex,
          skillName: skill.name,
          init: skill.init,
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
const specialRowsJump = computed(() => {
  const count = tableData.value.filter((row) => row.isSpecialGroup).length;
  return count ? count + 1 : 0;
});
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
            // 'td-color-1':
            //   (row.isSpecialGroup ? index : row.groupIndex + specialRowsJump) %
            //   2,
            // 'td-color-2':
            //   ((row.isSpecialGroup ? index : row.groupIndex + specialRowsJump) +
            //     1) %
            //   2,
          }"
        >
          {{ row.isSpecialGroup ? '' : row.groupName }}
        </td>
        <td
          class="skill-td td-skill-name"
          :class="{
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
          {{ row.init }}
        </td>
        <td
          class="skill-td"
          :class="{
            'td-color-1': index % 2,
            'td-color-2': (index + 1) % 2,
          }"
        ></td>
        <td
          class="skill-td"
          :class="{
            'td-color-0': index % 2,
            'td-color-1': (index + 1) % 2,
          }"
        ></td>
        <td
          class="skill-td"
          :class="{
            'td-color-1': index % 2,
            'td-color-2': (index + 1) % 2,
          }"
        ></td>
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
</style>
