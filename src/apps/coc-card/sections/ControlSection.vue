<script setup lang="ts">
import { computed, nextTick, ref, watch, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import LZString from 'lz-string';
import copy from 'copy-to-clipboard';

import {
  Reading,
  Download,
  More,
  Scissor,
  Refresh,
  DocumentCopy,
  IceCream,
  Brush,
  Mug,
} from '@element-plus/icons-vue';

// components
import ControlButton from '../components/ControlButton.vue';
import ControlDialog from '../components/ControlDialog.vue';
import DownloaderItem from '../components/DownloaderItem.vue';
import BuyPointsButton from '../components/control-section-parts/buy-points/BuyPointsButton.vue';
import GuidePaneContent from '../components/GuidePaneContent.vue';
import QunSection from '../components/QunSection.vue';
import JobList from '../components/JobList.vue';
import WeaponList from '../components/WeaponList.vue';
import DiceMaid from '../components/control-section-parts/dice-maid/DiceMaid.vue';
// import NoticeBoardButton from '../components/control-section-parts/notice-board/NoticeBoardButton.vue';

// models
import { modifyAttributesByAge } from '../models/attribute';
import { createPC } from '../models/character';
import { resetViewData } from '../models/viewData';
import LA, { LAEventID, FeatureNames } from '@/plugins/51la';

import { usePC, useViewData, usePageData } from '../hooks/useProviders';
import usePrintPaper from '../hooks/usePrintPaper';
import useAppLs from '../hooks/useAppLs';
import { downloadFile } from '@/utils/file';

import type { COCCardViewData } from '../types/viewData';
import qrWechat from '@/assets/images/qr-wechat.jpg';
import qrAlipay from '@/assets/images/qr-alipay.jpg';
import cardPdf from '../assets/coc-card-empty.pdf';

interface Props {
  paperEls: {
    front?: HTMLElement;
    back?: HTMLElement;
  };
}
const props = defineProps<Props>();

interface Emits {
  (event: 'switch-paper'): void;
}
const emit = defineEmits<Emits>();

const ls = useAppLs();
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
const rewardModalVisible = ref(false);
const morePanelVisible = ref(false);
const morePanelActiveTab = ref('features');

function onTabChange(tabName: string | number) {
  const map = {
    features: FeatureNames.TAB_MORE,
    jobs: FeatureNames.TAB_JOB_LIST,
    weapons: FeatureNames.TAB_WEAPON_LIST,
    guide: FeatureNames.TAB_GUIDE,
  };
  LA?.track(LAEventID.FEATURE, { name: map[tabName as keyof typeof map] });
}

function actSwitchPaper() {
  emit('switch-paper');
  LA?.track(LAEventID.FEATURE, { name: FeatureNames.F_SWITCH_PAPER });
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

  if (!paperKey) {
    LA?.track(LAEventID.FEATURE, { name: FeatureNames.F_SAVE });
  } else {
    LA?.track(LAEventID.FEATURE, {
      name: FeatureNames.CA_SAVE_REGEN,
      file: paperKey,
    });
  }
}
function onDownloadFile(name: string) {
  LA?.track(LAEventID.FEATURE, {
    name: FeatureNames.CA_SAVE_DOWNLOAD,
    file: name,
  });
}

function actToggleMorePanel() {
  morePanelVisible.value = !morePanelVisible.value;
  if (morePanelVisible.value) {
    LA?.track(LAEventID.FEATURE, { name: FeatureNames.F_MORE });
  }
}

function actAgeGrow() {
  if (!pc?.value) return;
  if (!pc.value.age || pc.value.age === '0') {
    ElMessage.error('请先在人物卡中填写年龄');
    LA?.track(LAEventID.FEATURE, {
      name: FeatureNames.MORE_AGE,
      success: false,
    });
    return;
  }
  pc.value.attributes = modifyAttributesByAge(pc.value.attributes, Number(pc.value.age || 0));
  ElMessage.success('已为您进行年龄修正！');
  LA?.track(LAEventID.FEATURE, { name: FeatureNames.MORE_AGE, success: true });
}

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
  LA?.track(LAEventID.FEATURE, { name: FeatureNames.MORE_RESET });
}

function actOpenInOutModal() {
  inOutModalVisible.value = true;
  LA?.track(LAEventID.FEATURE, { name: FeatureNames.MORE_INOUT });
}
function copyOutData() {
  copy(outData.value);
  ElMessage.success('已复制到剪贴板');
  LA?.track(LAEventID.FEATURE, { name: FeatureNames.CA_INOUT_EXPORT });
}
function applyInData() {
  const json = LZString.decompressFromEncodedURIComponent(inData.value);
  const data = JSON.parse(json);
  pageData && (pageData.importing = true);
  if (data && data.viewData && data.pc && viewData && pc) {
    try {
      pc.value = data.pc;
      viewData.showingChildSkills = new Map(Object.entries(data.viewData.showingChildSkills));
      const restKeys: (keyof COCCardViewData)[] = ['jobSkills', 'skillLimits'];
      restKeys.forEach((key) => {
        viewData[key] = data.viewData[key];
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
  LA?.track(LAEventID.FEATURE, { name: FeatureNames.CA_INOUT_IMPORT });
  pageData && (pageData.importing = false);
}

function actDownloadEmptyCard() {
  downloadFile(cardPdf, '【TRPG 赛高】空白卡.pdf');
  LA?.track(LAEventID.FEATURE, { name: FeatureNames.MORE_EMPTY });
}

function switchTotalMode() {
  if (!pageData) return;
  pageData.showTotalSeparation = !pageData.showTotalSeparation;
  ElMessage.info(
    `已切换成功率显示方式为：${
      pageData.showTotalSeparation ? '全面（普通 | 困难 | 极难）' : '极简'
    }`,
  );
  morePanelVisible.value = false;
  LA?.track(LAEventID.FEATURE, {
    name: FeatureNames.MORE_TOTAL_MODE,
    mode: pageData.showTotalSeparation ? 'full' : 'simple',
  });
}

function actReward() {
  rewardModalVisible.value = true;
  LA?.track(LAEventID.FEATURE, { name: FeatureNames.MORE_REWARD });
}

// preload qr codes when more panel is opened
const cleanPreloadFn = watch(morePanelVisible, (visible) => {
  if (visible) {
    const img = new Image();
    img.src = qrWechat;
    nextTick(() => {
      img.src = qrAlipay;
    });
    cleanPreloadFn();
  }
});
</script>

<template>
  <div class="control-section">
    <div class="main-controls">
      <BuyPointsButton />
      <ControlButton
        label="翻面"
        :icon="Reading"
        @click="actSwitchPaper"
      />
      <ControlButton
        label="保存"
        :icon="Download"
        @click="() => actPrintPaper()"
      />
      <ControlButton
        label="更多"
        :icon="More"
        @click="actToggleMorePanel"
      />
    </div>

    <el-tabs
      v-if="morePanelVisible"
      class="more-container"
      v-model="morePanelActiveTab"
      @tabChange="onTabChange"
    >
      <el-tab-pane
        class="more-pane"
        label="更多功能"
        name="features"
      >
        <div class="more-controls">
          <ControlButton
            label="快速年龄修正"
            :icon="Scissor"
            @click="actAgeGrow"
          />
          <ControlButton
            label="重置人物卡"
            :icon="Refresh"
            @click="actResetCard"
          />
          <ControlButton
            label="导入/导出数据"
            :icon="DocumentCopy"
            @click="actOpenInOutModal"
          />
          <DiceMaid />
          <ControlButton
            label="下载空白卡PDF"
            :icon="Brush"
            @click="actDownloadEmptyCard"
          />
          <ControlButton
            label="切换成功率模式"
            :icon="Mug"
            @click="switchTotalMode"
          />
          <ControlButton
            label="投喂作者"
            :icon="IceCream"
            @click="actReward"
          />
          <!-- <NoticeBoardButton /> -->
        </div>
        <!-- <IssueRow /> -->
        <QunSection />
      </el-tab-pane>
      <el-tab-pane
        class="more-pane more-pane-less"
        label="职业列表"
        name="jobs"
      >
        <JobList />
      </el-tab-pane>
      <el-tab-pane
        class="more-pane more-pane-less"
        label="武器列表"
        name="weapons"
      >
        <WeaponList />
      </el-tab-pane>
      <el-tab-pane
        class="more-pane"
        label="使用指南"
        name="guide"
      >
        <GuidePaneContent />
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
            @downloaded="() => onDownloadFile('front')"
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
            @downloaded="() => onDownloadFile('back')"
          />
          <DownloaderItem
            title="车卡数据"
            :download="{
              url: outDataUrl,
              name: downloadName,
              type: 'txt',
            }"
            @downloaded="() => onDownloadFile('data')"
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

    <!--  -->

    <ControlDialog
      v-model="rewardModalVisible"
      title="投喂作者"
    >
      <div class="reward-modal-body">
        <div class="reward-texts">
          <div>喜欢这个工具？欢迎投喂！</div>
          <div>本项目为 github pages 纯前端项目，所以不用担心停运哦！</div>
        </div>
        <div class="reward-qr-container">
          <img
            class="reward-qr"
            :src="qrWechat"
          />
        </div>
        <div class="reward-qr-container">
          <img
            class="reward-qr"
            :src="qrAlipay"
          />
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
