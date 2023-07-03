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
        <WritableArea label="形象描述" />
        <WritableArea label="思想与信念" />
        <WritableArea label="重要之人" />
        <WritableArea label="意义非凡之地" />
        <WritableArea label="宝贵之物" />
        <WritableArea label="特质" />
      </div>
      <div class="story-section-column">
        <WritableArea label="伤口与疤痕" />
        <WritableArea label="精神症状" />
        <WritableArea
          label="个人介绍"
          :rows="12"
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
