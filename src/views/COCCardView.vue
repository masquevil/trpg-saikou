<script setup lang="ts">
import { reactive, provide, ref } from 'vue';
import qs from 'qs';
import { ElMessage } from 'element-plus';

import { createPC } from '@/models/coc-card/character';

import type { COCPlayerCharacter } from '@/types/coc-card/character';
import type { COCCardViewData } from '@/types/coc-card/viewData';
import type { PageData } from '@/types/coc-card/pageData';

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
const pageData = reactive<PageData>({
  printing: qsObject.debug === 'true',
  showTotalSeparation: qsObject.sep === 'true',
});
const paperInFront = ref(qsObject.turn === 'back' ? false : true);
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
    <div class="paper-container theme-light">
      <div class="papers-animation-container papers-editing web-only">
        <Transition name="swipe-paper">
          <KeepAlive>
            <PaperFront
              v-if="paperInFront"
              :cheating="cheating"
            />
            <PaperBack v-else />
          </KeepAlive>
        </Transition>
      </div>
      <div
        class="papers-animation-container papers-printing"
        :class="{
          'papers-printing-active': pageData.printing,
        }"
      >
        <PaperFront
          :setRef="
            (el) => {
              paperEls.front = el as HTMLElement;
            }
          "
          :cheating="cheating"
        />
        <PaperBack
          :setRef="
            (el) => {
              paperEls.back = el as HTMLElement;
            }
          "
        />
      </div>
    </div>
    <div class="sticky-footer web-only">
      <ControlSection
        :paperEls="paperEls"
        :cheating="cheating"
        @switch-paper="() => (paperInFront = !paperInFront)"
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

.paper-container {
  perspective: 900em;
}
.papers-animation-container.papers-editing {
  width: 65.625em; // 210mm / 3.2mm
  min-height: 92.8125em; // 297mm / 3.2mm
  margin: auto;
}
.papers-editing {
  --base-size: 15px;
}
.papers-printing {
  --base-size: 3.2mm;
  display: none;
}
.papers-printing-active {
  display: block;
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
  .papers-animation-container.papers-editing {
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
  .paper-container {
    margin: auto;
  }
  .web-only {
    display: none;
  }
  .papers-printing {
    display: block;
  }
}
</style>
