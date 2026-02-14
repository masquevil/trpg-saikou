<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import MarkdownRenderer from './components/MarkdownRenderer.vue';
import type { NpcCardData } from './types';

const route = useRoute();
const router = useRouter();

const moduleName = ref('');
const moduleContent = ref('');
const npcCards = ref<NpcCardData[]>([]);
const isPrintPreview = ref(false);
const isLoading = ref(true);
const error = ref('');

// 使用 import.meta.glob 动态导入所有模组文件
const modules = import.meta.glob<false, 'raw', string>('./scenarios/*/mod.md', {
  query: '?raw',
  import: 'default',
  eager: false,
});

onMounted(async () => {
  moduleName.value = decodeURIComponent(route.params.name as string);
  await loadModuleContent();
});

const loadModuleContent = async () => {
  try {
    isLoading.value = true;
    error.value = '';

    // 构造正确的 glob 模式
    const moduleKey = `./scenarios/${moduleName.value}/mod.md`;

    if (modules[moduleKey]) {
      try {
        const content = await modules[moduleKey]();
        moduleContent.value = content;
      } catch (importError) {
        throw new Error(`无法加载模组: ${moduleName.value}`);
      }
    } else {
      const errorMessage =
        `找不到模组: ${moduleName.value}\n` +
        `可用模块: ${Object.keys(modules).length > 0 ? Object.keys(modules).join(', ') : '无'}`;
      throw new Error(errorMessage);
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : '加载模组失败';
  } finally {
    isLoading.value = false;
  }
};

const handleNpcCardsExtracted = (cards: NpcCardData[]) => {
  npcCards.value = cards;
};

const togglePrintPreview = () => {
  isPrintPreview.value = !isPrintPreview.value;
};

const goBack = () => {
  router.push('/scenario-editor');
};
</script>

<template>
  <div class="module-detail-view theme-dark">
    <div class="header">
      <button
        class="back-button"
        @click="goBack"
      >
        ← 返回模组列表
      </button>
      <h1>{{ moduleName.toUpperCase() }}</h1>
      <button
        class="print-preview-btn"
        @click="togglePrintPreview"
      >
        {{ isPrintPreview ? '退出预览' : '打印预览' }}
      </button>
    </div>

    <div
      v-if="isLoading"
      class="loading"
    >
      加载中...
    </div>

    <div
      v-else-if="error"
      class="error"
    >
      <p>{{ error }}</p>
      <button
        class="back-button"
        @click="goBack"
      >
        返回模组列表
      </button>
    </div>

    <div
      v-else
      class="content"
      :class="{ 'print-preview': isPrintPreview, 'normal-view': !isPrintPreview }"
    >
      <MarkdownRenderer
        :moduleName="moduleName"
        :content="moduleContent"
        @npcCardsExtracted="handleNpcCardsExtracted"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.module-detail-view {
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    margin: 0;
    color: var(--color-heading);
  }
}

.back-button {
  padding: 8px 16px;
  border: 1px solid var(--color-section-border);
  border-radius: 4px;
  background-color: transparent;
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--color-primary);
    background-color: var(--color-hover-bg);
  }
}

.print-preview-btn {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 8px;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  background-color: var(--color-control-bg);
  cursor: pointer;
  font-size: 14px;
  line-height: 1;

  &:hover {
    background-color: var(--color-control-bg-hover);
    border-color: var(--color-border-hover);
  }

  &:active {
    background-color: var(--color-control-bg-active);
  }
}

.loading,
.error {
  text-align: center;
  padding: 40px;
  color: #666;

  button {
    margin-top: 16px;
    padding: 10px 20px;
    border: 1px solid var(--color-section-border);
    border-radius: 4px;
    background-color: var(--color-section-bg);
    color: var(--color-text);
    cursor: pointer;
  }
}

.content {
  flex: 1;
  overflow-y: auto;
  margin-bottom: 30px;
}

@media print {
  .header {
    display: none;
  }

  .module-detail-view {
    padding: 0;
    max-width: none;
    background-color: #fff;
  }
}
</style>

<style>
@page {
  size: A4;
  margin: 1.5cm;
}
@media print {
  body {
    background-color: #fff;
  }
}
</style>
