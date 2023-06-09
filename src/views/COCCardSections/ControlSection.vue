<script setup lang="ts">
import { computed, ref } from 'vue';
import { ElMessage } from 'element-plus';
import LZString from 'lz-string';
import copy from 'copy-to-clipboard';

// components
import PagerSwitcher from '@/components/coc-card/PagerSwitcher.vue';

// models
import {
  generateRandomAttributes,
  modifyAttributesByAge,
  getAttributesSum,
} from '@/models/coc-card/attribute';

import { usePC, useViewData } from '@/hooks/useCOCCardProviders';

interface Props {
  paperInFront: boolean;
  paperImage: {
    front: string;
    back: string;
  };
}
const props = defineProps<Props>();

interface Emits {
  (event: 'switch-paper', value: boolean): void;
  (event: 'print-paper'): void;
  (event: 'reset-card'): void;
}
const emit = defineEmits<Emits>();

const pc = usePC();
const viewData = useViewData();

const inOutModalVisible = ref(false);
const inData = ref('');
const outData = computed(() => {
  const json = JSON.stringify({ pc: pc?.value, viewData: viewData });
  const str = LZString.compressToEncodedURIComponent(json);
  return str;
});
const isDownHelperShowing = computed(() => {
  return Boolean(props.paperImage.front || props.paperImage.back);
});
const generateTimes = ref(0);

function generate() {
  if (!pc) return;
  // 多次 roll 点取最高，增加 roll 点体验
  const attrs = Array.from({ length: (generateTimes.value % 3) + 1 })
    .map(() => generateRandomAttributes())
    .sort((a, b) => getAttributesSum(b) - getAttributesSum(a))[0];
  pc.value.attributes = attrs;
  ElMessage.success('已为您生成一组数据，看看符不符合心意吧！');
  generateTimes.value++;
}

function ageGrow() {
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

function printPaper() {
  ElMessage.info({
    message: '图片生成中，页面会有轻微抖动，请稍候…',
    onClose() {
      emit('print-paper');
    },
  });
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
      viewData.showingChildSkills = new Map(Object.entries(data.viewData));
      viewData.jobSkills = data.viewData.jobSkills;
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
    <h1 class="title">COC 7版人物卡</h1>
    <PagerSwitcher
      class="page-switcher"
      :on="paperInFront"
      @change="(v) => $emit('switch-paper', v)"
    />
    <div class="guide">
      <div>使用指南：</div>
      <ol class="guide-ol">
        <li>生成图片（建议电脑端使用）</li>
        <li>手写空白卡 or 在线车卡</li>
        <li>直接打印（Ctrl + P）</li>
      </ol>
    </div>
    <button
      class="control-button"
      @click="generate"
    >
      随机生成属性
    </button>
    <button
      class="control-button"
      @click="ageGrow"
    >
      进行年龄修正
    </button>
    <button
      class="control-button"
      @click="$emit('reset-card')"
    >
      重置人物卡
    </button>
    <div class="row">
      <button
        class="control-button col-0"
        @click="inOutModalVisible = true"
      >
        导入/导出数据
      </button>
      <el-dialog
        v-model="inOutModalVisible"
        title="Shipping address"
        :append-to-body="true"
        align-center
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
      </el-dialog>
    </div>
    <!-- <div class="guide">
      TODO actions:
      <div>二维码分享</div>
    </div> -->
    <div class="col-0"></div>
    <div
      v-if="isDownHelperShowing"
      class="down-helper"
    >
      <div class="guide">如果 IOS 设备无法自动保存图片，可以长按此处保存：</div>
      <div class="down-helper-images">
        <div
          class="down-helper-image-container"
          data-content="正面"
          v-if="paperImage.front"
        >
          <img
            class="down-helper-image"
            :src="paperImage.front"
          />
        </div>
        <div
          class="down-helper-image-container"
          data-content="背面"
          v-if="paperImage.back"
        >
          <img
            class="down-helper-image"
            :src="paperImage.back"
          />
        </div>
      </div>
    </div>
    <button
      class="control-button"
      @click="printPaper"
    >
      生成图片
    </button>
    <div class="guide issue-row">
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
  </div>
</template>

<style scoped lang="scss">
.control-section {
  --color-border: #8a8a8a;
  --color-control-bg: #3a3a3a;
  --color-control-bg-hover: #444;
  --color-control-bg-active: #4b4e53;

  padding: 32px 0;
  padding-bottom: calc(env(safe-area-inset-bottom) + 32px);
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 0.6em;
}
.title {
  font-size: 1.6em;
  line-height: 1.2;
}

.page-switcher {
  flex: 0 0 auto;
}

.guide {
  font-size: 0.84em;
  opacity: 0.82;
}
.guide-ol {
  padding-left: 1.8em;
}

.control-button {
  padding: 0.3em 0.4em;
  border-radius: 0.6em;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  background-color: var(--color-control-bg);
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: var(--color-control-bg-hover);
  }
  &:active {
    background-color: var(--color-control-bg-active);
  }
}

.down-helper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  line-height: 1.4;
}
.down-helper-images {
  display: flex;
  justify-content: space-around;
}
.down-helper-image-container {
  flex: 0 1 auto;
  width: 75px;
  height: 105px;
  position: relative;

  &::after {
    content: attr(data-content);
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    pointer-events: none;
  }
}
.down-helper-image {
  width: 100%;
  height: 100%;
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
  gap: 0.4em;
  line-height: 1;
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
</style>
