<script setup lang="ts">
import { computed, reactive, watch } from 'vue';

import { countTexts } from '@/constants/coc-card/countTexts';

import type { SuggestionMultiSkill } from '@/types/coc-card/suggestion';

import { useSuggestion, usePageData } from '@/hooks/useCOCCardProviders';

const suggestion = useSuggestion();
const pageData = usePageData();

const multiSkillsInfo = reactive<[SuggestionMultiSkill, number, string][]>([]);
watch(
  () => suggestion,
  () => {
    if (!suggestion) return;
    multiSkillsInfo.splice(0);
    suggestion.value.multiSkills.forEach((multiSkill) => {
      const eIndex = multiSkillsInfo.findIndex(([eMultiSkill]) => {
        const isSame = eMultiSkill.every((eMultiSkillItem, index) => {
          const multiSkillItem = multiSkill[index];
          if (typeof eMultiSkillItem === 'string')
            return eMultiSkillItem === multiSkillItem;
          if (typeof multiSkillItem === 'string') return false;
          return (
            eMultiSkillItem.name === multiSkillItem.name &&
            eMultiSkillItem.childName === multiSkillItem.childName
          );
        });
        return isSame;
      });
      if (eIndex === -1) {
        multiSkillsInfo.push([
          multiSkill,
          1,
          countTexts[`${multiSkill.length}`],
        ]);
      } else {
        multiSkillsInfo[eIndex][1] += 1;
      }
    });
  },
  { deep: true }
);
const multiSkillsTexts = computed(() => {
  return multiSkillsInfo.map((info) => {
    const skillInfos = info[0];
    const skillText = skillInfos.map((skillInfo) => {
      let skillName = skillInfo;
      if (typeof skillInfo !== 'string') {
        skillName = `${skillInfo.name}:${skillInfo.childName || '任一'}`;
        if (skillInfo.name === '母语') skillName = '母语';
      }
      return skillName;
    });
    return `${info[2]}选${countTexts[`${info[1]}`]}(${skillText})`;
  });
});
</script>

<template>
  <div
    class="hint-section"
    :class="{
      'printing-image': pageData?.printing,
    }"
  >
    <div
      class="suggestion-content"
      v-if="suggestion?.text"
    >
      <span>默认本职技能：</span>
      <template
        v-for="text in multiSkillsTexts"
        :key="text"
      >
        <span class="multi-skill-text">{{ text }}</span>
        <span>、</span>
      </template>
      <span>{{ suggestion.text }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hint-section {
  margin: -0.44em 0;
  height: 0.8em;
  line-height: 0.8em;
  flex: 0 0 auto;
  color: var(--vt-c-text-light-2);
  white-space: nowrap;
  display: flex;
}

.suggestion-content {
  flex: 1 1 0;
  width: 0;
  display: flex;
  transform: scale(0.72);
  transform-origin: left center;
}
.multi-skill-text {
  color: #9148db;
}

/* when print */
.hint-section.printing-image {
  display: none;
}
@media print {
  .hint-section {
    display: none;
  }
}
</style>

<style lang="scss">
@media screen and (max-width: 1024px) {
  .papers-editing {
    .hint-section {
      white-space: normal;
      line-height: 1.2em;
      height: auto;
    }
    .suggestion-content {
      display: block;
      transform: none;
      font-size: 12px;
    }
  }
}
</style>
