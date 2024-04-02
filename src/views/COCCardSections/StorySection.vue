<script setup lang="ts">
import PaperSection from '@/components/coc-card/PaperSection.vue';
import WritableArea from '@/components/coc-card/WritableArea.vue';

import { usePC } from '@/hooks/useCOCCardProviders';

import type { COCPlayerCharacter } from '@/types/coc-card/character';

interface AreaConfig {
  label: string;
  fieldName: keyof COCPlayerCharacter['stories'];
  rows: number;
}

const pc = usePC();

const leftConfigs: AreaConfig[] = [
  { label: '形象描述', fieldName: 'app', rows: 3 },
  { label: '思想与信念', fieldName: 'belief', rows: 3 },
  { label: '重要之人', fieldName: 'IPerson', rows: 3 },
  { label: '意义非凡之地', fieldName: 'IPlace', rows: 3 },
  { label: '宝贵之物', fieldName: 'IItem', rows: 3 },
  { label: '特质', fieldName: 'trait', rows: 3 },
  { label: '伤口与疤痕', fieldName: 'scar', rows: 3 },
  { label: '精神症状', fieldName: 'mad', rows: 3 },
];
const rightConfigs: AreaConfig[] = [];
const restRows =
  leftConfigs.reduce((acc, cur) => acc + cur.rows, 0) -
  rightConfigs.reduce((acc, cur) => acc + cur.rows, 0);
</script>

<template>
  <PaperSection
    v-if="pc"
    title="背景故事"
    subTitle="Story"
  >
    <div class="story-section-body">
      <div class="story-section-column">
        <WritableArea
          v-for="config in leftConfigs"
          :key="config.fieldName"
          :label="config.label"
          v-model="pc.stories[config.fieldName]"
          :rows="config.rows"
          :maxlength="config.rows * 29 - config.label.length - 1"
        />
      </div>
      <div class="story-section-column">
        <WritableArea
          v-for="config in rightConfigs"
          :key="config.fieldName"
          :label="config.label"
          v-model="pc.stories[config.fieldName]"
          :rows="config.rows"
          :maxlength="config.rows * 29 - config.label.length - 1"
        />
        <WritableArea
          label="个人介绍"
          v-model="pc.stories.desc"
          :rows="restRows"
          :maxlength="restRows * 29 - 5"
        />
      </div>
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.story-section-body {
  padding: 0.4em 0.6em 0.6em;
  display: flex;
  gap: 1em;
}
.story-section-column {
  flex: 1 1 0;
}
</style>

<style lang="scss">
@media screen and (max-width: 1024px) {
  .papers-editing {
    .story-section-body {
      flex-direction: column;
      gap: 0;
    }
  }
}
</style>
