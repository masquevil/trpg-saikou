<script setup lang="ts">
import { ref, watch } from 'vue';
import NpcCard from './NpcCard.vue';
import type { NpcCardData } from '../types';
import useScenarioParser, { ContentItem } from '../hooks/useScenarioParser';

interface Props {
  moduleName: string;
  content: string;
}

interface Emits {
  (e: 'npcCardsExtracted', cards: NpcCardData[]): void;
}

const props = withDefaults(defineProps<Props>(), {});
const emit = defineEmits<Emits>();

const contentItems = ref<ContentItem[]>([]);

const { parse } = useScenarioParser(props.moduleName);

watch(
  () => props.content,
  async () => {
    const result = await parse(props.content);
    if (!result) return;
    contentItems.value = result.contentItems;
  },
  { immediate: true },
);
</script>

<template>
  <div class="markdown-renderer">
    <div class="content-wrapper">
      <template
        v-for="(item, index) in contentItems"
        :key="index"
      >
        <div
          v-if="item.type === 'text'"
          class="markdown-content"
          v-html="item.content"
        ></div>
        <div
          v-else-if="item.type === 'card'"
          class="inline-npc-card"
        >
          <NpcCard :card-data="item.data!" />
        </div>
        <div
          v-else-if="item.type === 'summary'"
          class="inline-npc-summary"
        >
          <NpcCard
            v-if="item.summaryData"
            :card-data="item.summaryData"
            class="summary-card"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.markdown-renderer {
  --color-title: var(--color-heading);
  --color-title-small: var(--color-text);
  --color-p: var(--color-text);

  // 容器
  .content-wrapper {
    max-width: 600px;
    margin: 0 auto;
  }

  // 基础的 markdown 内容
  .markdown-content {
    color: var(--color-p);
    // line-height: 1.7;

    :deep(.md-h1) {
      color: var(--color-title);
      margin: 48px 0 32px;
      font-size: 48px;
      font-weight: 700;
    }

    :deep(.md-h2) {
      color: var(--color-title);
      margin: 14px 0 20px;
      font-size: 28px;
      font-weight: 600;
    }

    :deep(.md-h3) {
      color: var(--color-title);
      margin: 40px 0 12px;
      font-size: 20px;
      font-weight: 600;
    }

    :deep(.md-h4) {
      color: var(--color-title-small);
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
  }
}

.inline-npc-card,
.inline-npc-summary {
  margin: 20px 0;
  break-inside: avoid;
  page-break-inside: avoid;
}

.inline-npc-card {
  margin-top: 0;
}

/* when print */
@mixin printing-styles {
  .markdown-renderer {
    --color-bg-print: #fff;
    --color-title-print: #000;
    --color-title-small-print: #000;
    --color-p-print: #4b4e53;
    background-color: var(--color-bg-print);

    .content-wrapper {
      --color-bg-print: #fff;
      --color-title-print: #000;
      --color-title-small-print: #000;
      --color-p-print: #4b4e53;
      column-count: 2;
      column-gap: 30px;
      column-fill: auto; // 让内容优先填满第一列
      max-width: 800px;
      orphans: 2; // 防止段落开头孤立
      widows: 2; // 防止段落结尾孤立
    }

    .markdown-content {
      color: var(--color-p-print);

      // 特别处理标题后的短内容
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
        color: var(--color-title-print);
      }

      :deep(.md-h2) {
        column-span: all;
        break-before: column;
        page-break-before: always;
        color: var(--color-title-print);
      }

      :deep(.md-h3) {
        color: var(--color-title-print);
      }

      :deep(.md-h4) {
        color: var(--color-title-small-print);
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
