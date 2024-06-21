<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue';
import { ElMessage, MessageHandler } from 'element-plus';

import PaperSection from '../components/PaperSection.vue';
import WritableArea from '../components/WritableArea.vue';

import { usePC, usePageData } from '../hooks/useProviders';

import type { COCPlayerCharacter } from '../types/character';

interface AreaConfig {
  label: string;
  fieldName: keyof COCPlayerCharacter['stories'];
  size?: 'small' | 'base';
}

const pc = usePC();
const pageData = usePageData();

const BASE_ROWS = 3;
const SMALL_ROWS = 4;
const leftConfigs: AreaConfig[] = reactive([
  { label: '形象描述', fieldName: 'app' },
  { label: '思想与信念', fieldName: 'belief' },
  { label: '重要之人', fieldName: 'IPerson' },
  { label: '意义非凡之地', fieldName: 'IPlace' },
  { label: '宝贵之物', fieldName: 'IItem' },
  { label: '特质', fieldName: 'trait' },
  { label: '伤口与疤痕', fieldName: 'scar' },
  { label: '精神症状', fieldName: 'mad' },
]);
const rightConfigs: AreaConfig[] = reactive([]);
const restConfig = reactive<Partial<AreaConfig>>({ fieldName: 'desc', size: 'base' });
const restRows = computed(() => {
  const configLength = leftConfigs.length - rightConfigs.length;
  return (
    configLength * ~~(restConfig.size === 'base' ? BASE_ROWS : SMALL_ROWS) + ~~(configLength / 6)
  );
});

const showingAlert = ref<MessageHandler>();
function onResizeConfig(config: Partial<AreaConfig>) {
  showingAlert.value?.close();
  if (!pageData?.printing) {
    if (config.size === 'small') {
      showingAlert.value = ElMessage.error('文字内容超出可显示的尺寸，如需打印，建议删减内容');
    } else {
      showingAlert.value = ElMessage.warning('检测到内容较多，已为您调整文字为小尺寸');
    }
  }
  config.size = 'small';
}

watch(
  () => pc?.value.stories,
  () => {
    [...leftConfigs, ...rightConfigs, restConfig].forEach((config) => {
      if (config.fieldName && !pc?.value.stories[config.fieldName]) {
        config.size = 'base';
      }
    });
  },
  {
    deep: true,
  },
);
</script>

<template>
  <PaperSection
    v-if="pc"
    title="背景故事"
    subTitle="Story"
  >
    <div class="story-section-body">
      <div class="story-section-column col-2">
        <!-- :maxlength="config.rows * 23 - config.label.length - 1" -->
        <WritableArea
          v-for="config in leftConfigs"
          :key="config.fieldName"
          :label="config.label"
          v-model="pc.stories[config.fieldName]"
          :rows="config.size === 'small' ? SMALL_ROWS : BASE_ROWS"
          :size="config.size"
          @oversize="() => onResizeConfig(config)"
        />
      </div>
      <div class="story-section-column col-3">
        <WritableArea
          v-for="config in rightConfigs"
          :key="config.fieldName"
          :label="config.label"
          v-model="pc.stories[config.fieldName]"
          :rows="config.size === 'small' ? SMALL_ROWS : BASE_ROWS"
          :size="config.size"
        />
        <!-- :maxlength="restRows * 29 - 5" -->
        <WritableArea
          label="个人介绍"
          v-model="pc.stories.desc"
          :rows="restRows"
          :size="restConfig.size"
          @oversize="() => onResizeConfig(restConfig)"
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
