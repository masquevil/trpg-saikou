<script setup lang="ts">
import { h, render, ref, watch } from 'vue';
import NpcCard from './NpcCard.vue';
import type { NpcCardData, NpcSummaryData } from '../types';
import useScenarioParser from '../hooks/useScenarioParser';

interface Props {
  moduleName: string;
  content: string;
}

interface Emits {
  (e: 'npcCardsExtracted', cards: NpcCardData[]): void;
}

const props = withDefaults(defineProps<Props>(), {});
defineEmits<Emits>();

const { parse } = useScenarioParser(props.moduleName, props.content, {
  npcCard: (token) => {
    const { name, role, summary, avatar, content } = token;
    const cardData: NpcCardData = {
      name,
      role,
      summary,
      avatar,
      content,
    };
    const container = document.createElement('div');
    container.classList.add('npc-card-wrapper');
    render(h(NpcCard, { cardData }), container);
    return container.outerHTML;
  },
  npcSummary: (token) => {
    const { name, data } = token;
    if (!data) return '';
    const { role, summary, avatar } = data;
    const summaryData: NpcSummaryData = {
      name,
      role,
      summary,
      avatar,
    };
    const container = document.createElement('div');
    container.classList.add('npc-summary-wrapper');
    render(h(NpcCard, { cardData: summaryData }), container);
    return container.outerHTML;
  },
});

const html = ref('');
watch(
  () => props.content,
  async () => {
    html.value = await parse();
  },
  { immediate: true },
);
</script>

<template>
  <div class="markdown-renderer">
    <div
      class="content-wrapper"
      v-html="html"
    ></div>
  </div>
</template>

<style scoped lang="scss">
@use '../theme' as theme;

.markdown-renderer {
  @include theme.tokens;

  // 容器
  .content-wrapper {
    max-width: 600px;
    margin: 0 auto;
    color: var(--color-text);

    :deep(.md-h1) {
      color: var(--color-heading);
      margin: 48px 0 32px;
      font-size: 48px;
      font-weight: 700;
    }

    :deep(.md-h2) {
      color: var(--color-heading);
      margin: 14px 0 20px;
      font-size: 28px;
      font-weight: 600;
    }

    :deep(.md-h3) {
      color: var(--color-heading);
      margin: 40px 0 12px;
      font-size: 20px;
      font-weight: 600;
    }

    :deep(.md-h4) {
      color: var(--color-text);
      margin: 12px 0 6px;
      font-size: 16px;
      font-weight: 500;
    }

    :deep(.md-p) {
      font-size: 14px;
      margin-bottom: 12px;
      text-indent: 1.4em;
      line-height: 1.6;
    }

    :deep(.npc-card-wrapper),
    :deep(.npc-summary-wrapper) {
      margin: 20px 0;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    :deep(.npc-card-wrapper) {
      margin-top: 0;
    }
  }
}

/* when print */
@mixin printing-styles {
  .markdown-renderer {
    background-color: var(--color-print-bg);

    .content-wrapper {
      column-count: 2;
      column-gap: 30px;
      column-fill: auto; // 让内容优先填满第一列
      max-width: 800px;
      widows: 2;
      orphans: 1;
      color: var(--color-print-text);

      :deep(.md-h1),
      :deep(.md-h2),
      :deep(.md-h3),
      :deep(.md-h4) {
        break-after: avoid;
        break-inside: avoid;
        page-break-inside: avoid;
      }

      :deep(.md-h1) {
        column-span: all;
        color: var(--color-print-heading);
        text-align: center;
      }

      :deep(.md-h2) {
        column-span: all;
        break-before: column;
        page-break-before: always;
        color: var(--color-print-heading);
        text-align: center;
      }

      :deep(.md-h3) {
        color: var(--color-print-heading);
      }

      :deep(.md-h4) {
        color: var(--color-print-heading);
      }

      :deep(.md-p) {
        break-inside: avoid;
        page-break-inside: avoid;
      }
    }
  }
}

.print-preview {
  @include printing-styles;
}
@media print {
  @include printing-styles;
}
</style>
