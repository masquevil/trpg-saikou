<script setup lang="ts">
import PaperSection from '@/components/coc-card/PaperSection.vue';
import WritableArea from '@/components/coc-card/WritableArea.vue';

import { usePC } from '@/hooks/useCOCCardProviders';

const pc = usePC();
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
          label="形象描述"
          v-model="pc.stories.app"
          :maxlength="3 * 29 - 5"
        />
        <WritableArea
          label="思想与信念"
          v-model="pc.stories.belief"
          :maxlength="3 * 29 - 6"
        />
        <WritableArea
          label="重要之人"
          v-model="pc.stories.IPerson"
          :maxlength="3 * 29 - 5"
        />
        <WritableArea
          label="意义非凡之地"
          v-model="pc.stories.IPlace"
          :maxlength="3 * 29 - 7"
        />
        <WritableArea
          label="宝贵之物"
          v-model="pc.stories.IItem"
          :maxlength="3 * 29 - 5"
        />
        <WritableArea
          label="特质"
          v-model="pc.stories.trait"
          :maxlength="3 * 29 - 3"
        />
      </div>
      <div class="story-section-column">
        <WritableArea
          label="伤口与疤痕"
          v-model="pc.stories.scar"
          :maxlength="3 * 29 - 6"
        />
        <WritableArea
          label="精神症状"
          v-model="pc.stories.mad"
          :maxlength="3 * 29 - 5"
        />
        <WritableArea
          label="个人介绍"
          :rows="12"
          v-model="pc.stories.desc"
          :maxlength="12 * 29 - 5"
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
