<script setup lang="ts">
import { reactive, provide, ref } from 'vue';
import qs from 'qs';
import { ElMessage } from 'element-plus';

import { createPC } from '@/models/coc-card/character';

import type { COCPlayerCharacter } from '@/types/coc-card/character';
import type { COCCardViewData } from '@/types/coc-card/viewData';

import useDerives from '@/hooks/useDerives';
import useSuggestion from '@/hooks/useSuggestion';

import ControlSection from './COCCardSections/ControlSection.vue';
import PaperFront from './COCCardSections/PaperFront.vue';
import PaperBack from './COCCardSections/PaperBack.vue';

const qsObject = qs.parse(location.search.slice(1));
const pcRef = ref<COCPlayerCharacter>(createPC());
const viewData = reactive<COCCardViewData>({
  showingChildSkills: new Map(),
});
const pageData = reactive({
  printing: qsObject.debug === 'true',
});
const cheating = ref(qsObject.cheating === 'true');

useDerives(pcRef);
const suggestion = useSuggestion(pcRef, viewData);

provide('pc', pcRef);
provide('viewData', viewData);
provide('pageData', pageData);
provide('suggestion', suggestion);

const paperEls = reactive<{ front?: HTMLElement; back?: HTMLElement }>({});

function resetCard() {
  pcRef.value = reactive(createPC());
  ElMessage.info('已重置人物卡');
}

function switchCheating() {
  cheating.value = !cheating.value;
  pcRef.value.attributes = {};
  ElMessage.info(`灌铅模式已${cheating.value ? '开启' : '关闭'}`);
}

// window.xx = { pc: pcRef, viewData, pageData };
</script>

<template>
  <main class="page theme-dark">
    <h1 class="title web-only">COC 7版人物卡 车卡工具</h1>
    <div class="papers-container theme-light">
      <div
        class="papers"
        :class="{
          'papers-editing': !pageData.printing,
          'papers-printing': pageData.printing,
        }"
      >
        <PaperFront
          :cheating="cheating"
          :setRef="(el) => {paperEls.front = el as HTMLElement}"
        />
        <h2 class="paper-title web-only">正面 —— 调查员属性 ↑</h2>
        <h2 class="paper-title web-only">↓ 背面 —— 调查员故事</h2>
        <PaperBack :setRef="(el) => {paperEls.back = el as HTMLElement}" />
      </div>
    </div>
    <div class="sticky-footer web-only">
      <ControlSection
        :paperEls="paperEls"
        :cheating="cheating"
        @switch-cheating="switchCheating"
        @reset-card="resetCard"
      />
    </div>
  </main>
</template>

<style scoped lang="scss">
.page {
  min-height: 100vh;
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  margin-top: constant(safe-area-inset-top);
  margin-top: env(safe-area-inset-top);
}
.title {
  font-size: 28px;
  line-height: 1.2;
  text-align: center;
  margin: 18px;
}

.papers {
  width: 65.625em; // 210mm / 3.2mm
  min-height: 92.8125em; // 297mm / 3.2mm
  margin: auto;
  font-size: var(--base-size);
}
.papers-editing {
  --base-size: 15px;
}
.papers-printing {
  --base-size: 3.2mm;
}
.paper-title {
  font-size: 20px;
  text-align: center;
  margin: 64px auto 0;
  line-height: 1;

  & + & {
    margin-top: 16px;
  }
  &:last-of-type {
    margin-bottom: 64px;
  }
}

.sticky-footer {
  position: sticky;
  left: 0;
  bottom: 0;
  width: 100%;
  margin-top: 24px;
  background-color: rgba(22, 22, 22, 0.92);
}

@media screen and (max-width: 1024px) {
  .papers-editing {
    width: auto;
    height: auto;
  }
}

/* when print */
@media print {
  .page {
    width: auto;
    min-width: auto;
    display: block;
    padding: 0;
  }
  .papers-container {
    margin: auto;
  }
  .papers {
    --base-size: 3.2mm;
  }
  .web-only {
    display: none;
  }
}
</style>
