<script setup lang="ts">
import { computed, nextTick, ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import LZString from 'lz-string';
import copy from 'copy-to-clipboard';

import { Plus, Download, Refresh, DocumentCopy } from '@element-plus/icons-vue';

// components
import ControlButton from '../coc-card/components/ControlButton.vue';
import ControlDialog from '../coc-card/components/ControlDialog.vue';
import DownloaderItem from '../coc-card/components/DownloaderItem.vue';

// models
import { createPC } from '../coc-card/models/character';
import { resetViewData } from '../coc-card/models/viewData';

import { usePC, useViewData, usePageData } from '../coc-card/hooks/useProviders';
import { printEl } from '../coc-card/hooks/usePrintPaper';
import useAppLs from '../coc-card/hooks/useAppLs';

import type { COCCardViewData } from '../coc-card/types/viewData';

interface Props {
  paperEls: HTMLElement[];
}
const props = defineProps<Props>();

interface Emits {
  (event: 'add-paper'): void;
}
const emit = defineEmits<Emits>();

const ls = useAppLs();
const pc = usePC();
const viewData = useViewData();
const pageData = usePageData();

const inData = ref('');
const outData = computed(() => {
  const json = JSON.stringify({
    pc: pc?.value,
    viewData: {
      ...viewData,
    },
  });
  const str = LZString.compressToEncodedURIComponent(json);
  return str;
});
const outDataUrl = computed(() => {
  const file = new Blob([outData.value], { type: 'text/plain;charset=utf-8' });
  return URL.createObjectURL(file);
});

const inOutModalVisible = ref(false);
const downloadModalVisible = ref(false);
const morePanelVisible = ref(false);

// add paper flow
function actAddPaper() {
  emit('add-paper');
}

// reset card flow
function actResetCard() {
  if (!pc || !viewData) return;
  // reset pc
  pc.value = reactive(createPC());
  // reset viewData
  resetViewData(viewData);
  // remove auto saved
  nextTick(() => {
    ls.removeItem('autoSaved');
  });

  ElMessage.info('已重置人物卡');
  morePanelVisible.value = false;
}

// print paper flow
const paperImages = reactive<string[]>([]);
async function printPaper(index?: number) {
  if (!props.paperEls.length) throw 'Setup Error: `paperEls` not exists';
  const isPrintAll = typeof index !== 'number';

  if (isPrintAll) {
    paperImages.splice(0, paperImages.length);
  }

  for (let i = 0; i < props.paperEls.length; i++) {
    const el = props.paperEls[i];
    if (!isPrintAll && i !== index) continue;
    const image = await printEl(el);
    if (!isPrintAll) {
      paperImages[index] = image;
      break;
    } else {
      paperImages.push(image);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

const downloadName = computed(() => {
  const { name, playerName } = pc?.value || {};
  const prefix = '【TRPG赛高】';
  const suffix = [name, playerName].filter((v) => v).join('-');
  return `${prefix}${suffix}${suffix ? '-' : ''}`;
});
function actPrintPaper(index?: number) {
  if (!pageData) return;
  if (pageData.printing) {
    ElMessage.info('已经在运行啦，请不要同时多次生成图片');
    return;
  }
  pageData.printing = true;

  ElMessage.info({
    message: '图片生成中，页面会有轻微抖动，请稍候…',
    duration: 1000,
    onClose() {
      printPaper(index).then(() => {
        downloadModalVisible.value = true;
        pageData.printing = false;
      });
    },
  });
}

function actOpenInOutModal() {
  inOutModalVisible.value = true;
}
function copyOutData() {
  copy(outData.value);
  ElMessage.success('已复制到剪贴板');
}
function applyInData() {
  const json = LZString.decompressFromEncodedURIComponent(inData.value);
  const data = JSON.parse(json);
  pageData && (pageData.importing = true);
  if (data && data.viewData && data.pc && viewData && pc) {
    try {
      pc.value = data.pc;
      Object.keys(data.viewData).forEach((key) => {
        const k = key as keyof COCCardViewData;
        viewData[k] = data.viewData[k];
      });
      ElMessage.success('已成功导入');
      inOutModalVisible.value = false;
      morePanelVisible.value = false;
    } catch (_) {
      ElMessage.error('数据有误，无法导入。页面可能因此受损，建议刷新');
    }
  } else {
    ElMessage.error('数据有误，无法导入');
  }
  pageData && (pageData.importing = false);
}
</script>

<template>
  <div class="control-section">
    <div class="main-controls">
      <ControlButton
        label="增加一页"
        :icon="Plus"
        @click="actAddPaper"
      />
      <ControlButton
        label="重置"
        :icon="Refresh"
        @click="actResetCard"
      />
      <ControlButton
        label="导入/导出数据"
        :icon="DocumentCopy"
        @click="actOpenInOutModal"
      />
      <ControlButton
        label="保存"
        :icon="Download"
        @click="() => actPrintPaper()"
      />
    </div>

    <ControlDialog
      v-model="downloadModalVisible"
      title="下载图片/数据"
    >
      <div class="downloader-body">
        <div class="downloader-items">
          <DownloaderItem
            v-for="(image, index) in paperImages"
            :key="index"
            :title="`无限技能表${index + 1}`"
            refreshable
            :previewImage="image"
            :download="{
              url: image,
              name: downloadName,
              type: 'jpg',
            }"
            @refresh="() => actPrintPaper(index)"
          />
          <DownloaderItem
            title="无限技能表数据"
            :download="{
              url: outDataUrl,
              name: downloadName,
              type: 'txt',
            }"
          />
        </div>
        <div class="downloader-hints">
          <div>建议 PC 端使用，移动端兼容性较差：</div>
          <div>· 如果头像未加载，重新生成几次即可</div>
        </div>
      </div>
    </ControlDialog>

    <ControlDialog
      v-model="inOutModalVisible"
      title="导入/导出数据"
      @closed="inData = ''"
    >
      <div class="in-out-modal-body">
        <div class="in-out-modal-panel">
          <el-input
            type="textarea"
            :value="outData"
            :rows="16"
            :readonly="true"
            resize="none"
          />
          <el-button
            type="primary"
            @click="copyOutData"
          >
            复制以上内容
          </el-button>
        </div>
        <div class="in-out-modal-panel">
          <el-input
            type="textarea"
            v-model="inData"
            :rows="16"
            placeholder="将文本粘贴到这里"
            resize="none"
          />
          <el-button
            type="primary"
            @click="applyInData"
          >
            导入以上内容
          </el-button>
        </div>
      </div>
    </ControlDialog>
  </div>
</template>

<style scoped lang="scss">
.control-section {
  --color-border: #8a8a8a;

  max-width: 65.625em;
  margin: auto;
  margin-bottom: constant(safe-area-inset-bottom);
  margin-bottom: env(safe-area-inset-bottom);

  display: flex;
  flex-direction: column-reverse;
}

.main-controls {
  height: 64px;
  padding: 8px 12px;
  max-width: 65.625em;
  display: flex;
  gap: 16px;
  justify-content: space-between;
}

.more-container {
  margin: 16px 12px 4px;
  padding: 4px 12px 12px;
  border: 1px solid var(--color-border);

  --el-color-primary: var(--color-white);
  --el-text-color-primary: var(--color-text);
  --el-border-color-light: var(--color-border);
}
.more-pane {
  max-height: 64vh;
  overflow: auto;
}
.more-pane-less {
  max-height: 32vh;
}
.more-controls {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
}

.downloader-body {
  margin: -10px 0;
}
.downloader-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px 8px;
}
.downloader-hints {
  margin: 16px 0 0;
  color: var(--color-text);
  opacity: 0.88;
}

.in-out-modal-body {
  display: flex;
  gap: 20px;
}
.in-out-modal-panel {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.reward-modal-body {
  display: grid;
  grid-template-areas:
    'text text'
    'qr1 qr2';
  grid-template-columns: 1fr 1fr;
  gap: 8px 32px;
  color: var(--color-text);
}
.reward-texts {
  grid-area: text;
}
.reward-qr-container {
  width: 100%;
  aspect-ratio: 1/1;
  max-width: 280px;
  justify-self: center;
}
.reward-qr {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media screen and (min-width: 1024px) {
  .downloader-hints {
    display: none;
  }
}
@media screen and (max-width: 1024px) {
  .reward-modal-body {
    grid-template-areas:
      'text'
      'qr1'
      'qr2';
    grid-template-columns: 1fr;
  }
}
</style>
