<script setup lang="ts">
import { useSuggestion, usePageData } from '../hooks/useProviders';

const suggestion = useSuggestion();
const pageData = usePageData();
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
        v-for="text in suggestion.multiSkillTexts"
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
@use '@/assets/themes/light/theme-part-paper' as paper;

.hint-section {
  @include paper.tokens;
  margin: -0.44em 0;
  height: 0.8em;
  line-height: 0.8em;
  flex: 0 0 auto;
  color: var(--color-paper-text-secondary);
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
  color: var(--color-paper-hint-accent);
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
