<script setup lang="ts">
import { reactive, watch } from 'vue';

import PaperSection from '../coc-card/components/PaperSection.vue';
import SkillTable from '../coc-card/components/SkillTable.vue';
import WritableRow from '../coc-card/components/WritableRow.vue';
// models
import type { SkillGroups } from '../coc-card/types/formattedSkill';

import { usePC, useViewData, usePageData } from '../coc-card/hooks/useProviders';

interface Props {
  hiddenKey: number;
}
const props = defineProps<Props>();

const skillTableSeparateIndex = 1;

const pc = usePC();
const viewData = useViewData();
const pageData = usePageData();

watch(
  () => viewData,
  () => {
    if (!viewData) return;
    viewData.showingChildSkills[`_h${props.hiddenKey}l`] = [];
    viewData.showingChildSkills[`_h${props.hiddenKey}r`] = [];
  },
  { immediate: true },
);

const skillGroups = reactive<SkillGroups>([
  {
    groupName: '其它',
    groupSkills: [
      {
        init: 0,
        intro: '自定义技能',
        name: '',
        hidden: `_h${props.hiddenKey}l`,
        group: {
          show: Array(51).fill(''),
          skills: [],
        },
      },
    ],
  },
  {
    groupName: '其它',
    groupSkills: [
      {
        init: 0,
        intro: '自定义技能',
        name: '',
        hidden: `_h${props.hiddenKey}r`,
        group: {
          show: Array(51).fill(''),
          skills: [],
        },
      },
    ],
  },
]);
</script>

<template>
  <PaperSection
    class="skill-section"
    :class="{
      'printing-image': pageData?.printing,
    }"
  >
    <template v-slot:header>
      <div class="header">
        <h1 class="heading">
          <span class="title">无限技能表</span>
          <span class="subtitle">Infinity Skills</span>
        </h1>
        <div class="point-container">
          <WritableRow
            class="point-writer"
            label="角色名"
            :modelValue="`${pc?.name ?? ''}`"
            @update:modelValue="
              (v) => {
                if (pc) pc.name = v;
              }
            "
          />
        </div>
      </div>
    </template>
    <div class="skill-section-body">
      <SkillTable :data="skillGroups.slice(0, skillTableSeparateIndex)" />
      <div class="divider"></div>
      <SkillTable :data="skillGroups.slice(skillTableSeparateIndex)" />
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.header {
  flex: 1 1 0;
  padding: 0.4em 0.8em;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left {
  flex: 1 1 0;
  display: flex;
}

.header-right {
  flex: 1 1 0;
  display: flex;
  justify-content: flex-end;
}

.heading {
  display: flex;
  gap: 0.4em;
  align-items: baseline;
  font-size: 1em;
}

.title {
  font-size: 1.15em;
}

.subtitle {
  font-size: 0.9em;
}

.points-container {
  gap: 0.6em;
  align-items: center;
  font-size: 0.88em;
}

.point-container {
  background-color: white;
  color: var(--color-black);
  display: flex;
  align-items: center;
  gap: 0.4em;
  font-size: 0.96em;
  line-height: 1;
  padding: 0 0.5em 0.1em;
}

.point-writer {
  display: flex;
  align-items: center;

  & :deep(.label-title) {
    padding-bottom: 0;
  }

  & :deep(.input) {
    padding: 0.1em 0.2em;
  }
}

.point-rest {
  font-size: 0.88em;
  color: #777;
}

.skill-section-body {
  display: flex;
}

.divider {
  border-right: 1px solid var(--color-black);
  height: 100%;
}

.border-stabler {
  border-top: 1px solid transparent;
  width: 100%;
  align-self: stretch;
}

/* when print image & print */
@mixin printing-styles {
  .point-rest {
    display: none;
  }
}

.printing-image {
  @include printing-styles;
}

@media print {
  @include printing-styles;
}
</style>

<style lang="scss">
@media screen and (max-width: 1024px) {
  .papers-editing {
    .header {
      flex-direction: column;
      gap: 0.4em;
    }

    .skill-section-body {
      flex-direction: column;
      flex-wrap: wrap;
      overflow: auto;

      .divider {
        border: none;
        border-top: 1px solid var(--color-black);
        align-self: stretch;
      }
    }

    .skill-table {
      min-width: 31em; // 210mm / 3.2mm - 1.8em * 2
    }
  }
}
</style>
