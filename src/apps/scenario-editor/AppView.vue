<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import ModuleList from './components/ModuleList.vue';

const router = useRouter();
const modules = ref<Array<{ name: string; path: string }>>([]);
const isLoading = ref(true);

onMounted(async () => {
  try {
    // 动态导入所有 scenarios 目录下的 mod.md 文件
    const scenarioModules = import.meta.glob('./scenarios/**/mod.md', {
      eager: true,
      as: 'raw',
    });

    // 从文件路径中提取模块名称
    const moduleEntries = Object.entries(scenarioModules);
    modules.value = moduleEntries.map(([filePath]) => {
      // 从路径中提取模块名，例如: ../../scenarios/古堡的秘密/mod.md -> 古堡的秘密
      const moduleName = filePath.split('/').slice(-2, -1)[0];
      return {
        name: moduleName.toUpperCase(),
        path: `/scenario-editor/module/${encodeURIComponent(moduleName)}`,
      };
    });
  } catch (error) {
    console.error('读取模组列表失败:', error);
  } finally {
    isLoading.value = false;
  }
});

const handleModuleSelect = (modulePath: string) => {
  router.push(modulePath);
};
</script>

<template>
  <div class="module-browser">
    <header class="browser-header">
      <h1>模组浏览器</h1>
      <p class="header-subtitle">选择一个模组开始浏览</p>
    </header>

    <div class="modules-container">
      <div
        v-if="isLoading"
        class="loading-message"
      >
        正在加载模组列表...
      </div>
      <div
        v-else-if="modules.length === 0"
        class="loading-message"
      >
        暂无可用模组
      </div>
      <ModuleList
        v-else
        :modules="modules"
        @module-select="handleModuleSelect"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.module-browser {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
}

.browser-header {
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--color-section-border);

  h1 {
    margin: 0 0 10px;
    color: var(--color-heading);
    font-size: 28px;
  }
}

.header-subtitle {
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 16px;
}

.modules-container {
  display: flex;
  justify-content: center;
}

.loading-message {
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 16px;
  padding: 40px;
}

@media print {
  .browser-header {
    display: none;
  }

  .module-browser {
    padding: 0;
    max-width: none;
  }
}
</style>
