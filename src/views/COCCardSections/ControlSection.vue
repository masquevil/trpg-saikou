<script setup lang="ts">
import { computed, ref } from 'vue';
import { ElMessage } from 'element-plus';
import LZString from 'lz-string';
import copy from 'copy-to-clipboard';

import {
  Reading,
  Bicycle,
  Download,
  More,
  Scissor,
  Refresh,
  DocumentCopy,
  KnifeFork,
} from '@element-plus/icons-vue';

// components
import ControlButton from '@/components/coc-card/ControlButton.vue';
import ControlDialog from '@/components/coc-card/ControlDialog.vue';
import DownloaderItem from '@/components/coc-card/DownloaderItem.vue';

// models
import {
  generateRandomAttributes,
  modifyAttributesByAge,
  getAttributesSum,
} from '@/models/coc-card/attribute';

import { usePC, useViewData, usePageData } from '@/hooks/useCOCCardProviders';
import usePrintPaper from '@/hooks/usePrintPaper';

import type { COCCardViewData } from '@/types/coc-card/viewData';

interface Props {
  paperEls: {
    front?: HTMLElement;
    back?: HTMLElement;
  };
  cheating?: boolean;
}
const props = withDefaults(defineProps<Props>(), { cheating: false });

interface Emits {
  (event: 'switch-paper', value: boolean): void;
  (event: 'switch-cheating', value: boolean): void;
  (event: 'reset-card'): void;
}
const emit = defineEmits<Emits>();

const pc = usePC();
const viewData = useViewData();
const pageData = usePageData();

const inData = ref('');
const outData = computed(() => {
  const showingChildSkills: Record<string, string[]> = {};
  viewData?.showingChildSkills.forEach((value, key) => {
    showingChildSkills[key] = value;
  });
  const json = JSON.stringify({
    pc: pc?.value,
    viewData: {
      ...viewData,
      showingChildSkills,
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

const generateTimes = ref(0);
function actGenerate() {
  if (!pc) return;

  // 多次 roll 点取最高，增加 roll 点体验
  const attrs = Array.from({
    length: props.cheating ? 5 : (generateTimes.value % 3) + 1,
  })
    .map(() => generateRandomAttributes())
    .sort((a, b) => getAttributesSum(b) - getAttributesSum(a))[0];
  pc.value.attributes = attrs;
  ElMessage.success('已为您生成一组数据，看看符不符合心意吧！');
  generateTimes.value++;
}

const { paperImages, printPaper } = usePrintPaper(props.paperEls);
const downloadName = computed(() => {
  const { name, playerName } = pc?.value || {};
  const prefix = '【TRPG赛高】';
  const suffix = [name, playerName].filter((v) => v).join('-');
  return `${prefix}${suffix}${suffix ? '-' : ''}`;
});
function actPrintPaper(paperKey?: 'front' | 'back') {
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
      printPaper(paperKey).then(() => {
        downloadModalVisible.value = true;
        pageData.printing = false;
      });
    },
  });
}

function actAgeGrow() {
  if (!pc?.value) return;
  if (!pc.value.age || pc.value.age === '0') {
    ElMessage.error('请先在人物卡中填写年龄');
    return;
  }
  pc.value.attributes = modifyAttributesByAge(
    pc.value.attributes,
    Number(pc.value.age || 0)
  );
  ElMessage.success('已为您进行年龄修正！');
}

function copyOutData() {
  copy(outData.value);
  ElMessage.success('已复制到剪贴板');
}

function applyInData() {
  const json = LZString.decompressFromEncodedURIComponent(inData.value);
  const data = JSON.parse(json);
  if (data && data.viewData && data.pc && viewData && pc) {
    try {
      pc.value = data.pc;
      viewData.showingChildSkills = new Map(
        Object.entries(data.viewData.showingChildSkills)
      );
      const restKeys: (keyof COCCardViewData)[] = ['jobSkills'];
      restKeys.forEach((key) => {
        viewData[key] = data.viewData[key];
      });
      ElMessage.success('已成功导入');
      inOutModalVisible.value = false;
    } catch (_) {
      ElMessage.error('数据有误，无法导入。页面可能因此受损，建议刷新');
    }
  } else {
    ElMessage.error('数据有误，无法导入');
  }
}
</script>

<template>
  <div class="control-section">
    <div class="main-controls">
      <ControlButton
        label="Roll点"
        :icon="Bicycle"
        @click="actGenerate"
      />
      <ControlButton
        label="翻面"
        :icon="Reading"
        @click="$emit('switch-paper')"
      />
      <ControlButton
        label="保存"
        :icon="Download"
        @click="() => actPrintPaper()"
      />
      <ControlButton
        label="更多"
        :icon="More"
        @click="morePanelVisible = !morePanelVisible"
      />
    </div>

    <el-tabs
      v-if="morePanelVisible"
      class="more-container"
    >
      <el-tab-pane label="更多功能">
        <div class="more-controls">
          <ControlButton
            label="快速年龄修正"
            :icon="Scissor"
            @click="actAgeGrow"
          />
          <ControlButton
            label="重置人物卡"
            :icon="Refresh"
            @click="$emit('reset-card')"
          />
          <ControlButton
            label="导入/导出数据"
            :icon="DocumentCopy"
            @click="inOutModalVisible = true"
          />
          <ControlButton
            :label="`${cheating ? '关闭' : '开启'}灌铅模式`"
            :icon="KnifeFork"
            @click="$emit('switch-cheating')"
          />
        </div>
        <div class="issue-row">
          <img
            class="issue-icon"
            src="https://github.githubassets.com/favicons/favicon-dark.png"
          />
          <a
            class="issue-link"
            href="https://github.com/masquevil/trpg-saikou#商业使用"
            target="_blank"
          >
            交流 反馈 商业合作：点这里
          </a>
        </div>
      </el-tab-pane>
      <el-tab-pane label="职业列表">开发中…</el-tab-pane>
      <el-tab-pane label="武器列表">开发中…</el-tab-pane>
      <el-tab-pane
        label="使用指南"
        class="more-pane"
      >
        <div class="guide-group-title">基本说明：</div>
        <ol class="guide-ol">
          <li>本工具生成的人物卡可以用 A4 纸双面打印。</li>
          <li>可以打印空白卡手写，也可以在线车卡。</li>
          <li>除了生成图片外，也可以直接打印（Ctrl + P）</li>
          <li>推荐 PC 端使用，移动端存在兼容性问题。</li>
        </ol>
        <div class="guide-group-title">以下为目前已有的功能介绍：</div>
        <ol class="guide-ol">
          <li>Roll 点：随机生成一组属性。</li>
          <li>翻面：正面为调查员属性，背面为调查员故事。</li>
          <li>
            保存：生成 A4 纸大小的正反面两张图，可以手动保存。
            还有当前人物卡全部数据的 txt，可以通过“导入”再次使用。
          </li>
          <li>
            快速年龄修正：根据你的年龄自动进行教育成长判定，同时按照规则随机调整基础属性。
          </li>
          <li>重置人物卡：清空当前填写的全部内容。</li>
          <li>
            <div>导入/导出数据：</div>
            <ol class="guide-ol">
              <li>导出：将当前所填写的全部内容压缩后以文本形式储存到本地。</li>
              <li>导入：将数据导入回来继续修改。</li>
            </ol>
          </li>
          <li>
            开启灌铅模式：每次 Roll 点会随机 5 次数据，选取其中最高的一次结果。
          </li>
        </ol>
        <div class="guide-group-title">其它说明：</div>
        <ol class="guide-ol">
          <li>支持 iOS 设备的“添加到主屏幕”功能。</li>
        </ol>
        <div class="issue-row">
          <img
            class="issue-icon"
            src="https://github.githubassets.com/favicons/favicon-dark.png"
          />
          <a
            class="issue-link"
            href="https://github.com/masquevil/trpg-saikou#商业使用"
            target="_blank"
          >
            交流 反馈 商业合作：点这里
          </a>
        </div>
      </el-tab-pane>
    </el-tabs>

    <ControlDialog
      v-model="downloadModalVisible"
      title="下载图片/数据"
    >
      <div class="downloader-body">
        <div class="downloader-items">
          <DownloaderItem
            title="正面"
            refreshable
            :previewImage="paperImages.front"
            :download="{
              url: paperImages.front,
              name: downloadName,
              type: 'jpg',
            }"
            @refresh="() => actPrintPaper('front')"
          />
          <DownloaderItem
            title="背面"
            refreshable
            :previewImage="paperImages.back"
            :download="{
              url: paperImages.back,
              name: downloadName,
              type: 'jpg',
            }"
            @refresh="() => actPrintPaper('back')"
          />
          <DownloaderItem
            title="车卡数据"
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
  --color-control-bg: #3a3a3a;
  --color-control-bg-hover: #444;
  --color-control-bg-active: #4b4e53;

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
  max-height: 24vh;
  overflow: auto;
}
.more-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.guide-group-title {
  margin: 12px 0 6px;
  &:first-child {
    margin-top: 0;
  }
}
.guide-ol {
  padding-left: 1.8em;
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
  margin-top: -24px;
  display: flex;
  gap: 20px;
}
.in-out-modal-panel {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.issue-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  line-height: 1;
  margin-top: 16px;
}
.issue-link {
  color: var(--color-white);
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.9;
  }
}
.issue-icon {
  width: 1em;
  height: 1em;
}

@media screen and (min-width: 1024px) {
  .downloader-hints {
    display: none;
  }
}
</style>
