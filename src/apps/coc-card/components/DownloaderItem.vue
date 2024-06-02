<script setup lang="ts">
import { ref, computed } from 'vue';

import ControlDialog from '../components/ControlDialog.vue';
import { downloadImage } from '@/utils/image';

interface Props {
  title: string;
  previewImage?: string;
  refreshable?: boolean;
  download?: {
    url: string;
    type: 'jpg' | 'txt';
    name?: string;
  };
}
const props = defineProps<Props>();

interface Emits {
  (event: 'refresh'): void;
  (event: 'downloaded'): void;
}
const emit = defineEmits<Emits>();

const previewImageModalVisible = ref(false);

const fileName = computed(() => {
  if (!props.download) return '';
  const { name, type } = props.download;
  return `${name}${props.title}.${type}`;
});

function downloadFile() {
  if (!props.download) return;
  const { url } = props.download;
  downloadImage(url, fileName.value);
  emit('downloaded');
}

function openModal() {
  previewImageModalVisible.value = true;
}
</script>

<template>
  <div class="downloader-item">
    <div class="downloader-item-preview">
      <img
        v-if="previewImage"
        class="downloader-item-image"
        :src="previewImage"
        @click="openModal"
      />
      <div
        v-else-if="download?.type === 'txt'"
        class="downloader-item-file"
      >
        {{ fileName }}
      </div>
      <div v-else>预览图加载失败，这不应该，请尝试刷新</div>
    </div>

    <div class="downloader-item-info">
      <div class="downloader-item-title">{{ title }}</div>
      <div
        class="downloader-item-button"
        @click="downloadFile"
      >
        下载
      </div>
      <div
        v-if="refreshable"
        class="downloader-item-button"
        @click="$emit('refresh')"
      >
        重新生成
      </div>
    </div>

    <ControlDialog
      v-model="previewImageModalVisible"
      title="预览大图"
    >
      <div class="preview-full-image-container">
        <img
          v-if="previewImage"
          class="preview-full-image"
          :src="previewImage"
        />
      </div>
    </ControlDialog>
  </div>
</template>

<style scoped lang="scss">
.downloader-item {
  flex: 0 1 auto;
  width: fix-content;
  display: flex;
  gap: 12px;
}
.downloader-item-preview {
  width: 100px;
  display: flex;
  align-items: flex-start;
}
.downloader-item-image {
  width: 100px;
  height: 140px;
}
.downloader-item-file {
  width: 100px;
  border: 1px solid var(--color-border);
  padding: 4px 8px;
  color: var(--color-text);
  background-color: rgba(255, 255, 255, 0.08);
}
.downloader-item-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.downloader-item-title {
  font-size: 1.2em;
  color: var(--color-white);
}
.downloader-item-button {
  width: 100px;
  padding: 8px;
  border-radius: 8px;
  text-align: center;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  background-color: var(--color-action-bg);
  cursor: pointer;
  font-size: 14px;
  line-height: 1;

  &:hover {
    background-color: var(--color-action-bg-hover);
  }
  &:active {
    background-color: var(--color-action-bg-active);
  }
}

.preview-full-image-container {
  margin: -16px -8px;
}
.preview-full-image {
  width: 100%;
}
</style>
