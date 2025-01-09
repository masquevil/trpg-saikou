<script setup lang="ts">
import { reactive, provide, ref } from 'vue';
import qs from 'qs';

import { createPC } from '../coc-card/models/character';
import { createViewData } from '../coc-card/models/viewData';

import type { COCPlayerCharacter } from '../coc-card/types/character';
import type { COCCardViewData } from '../coc-card/types/viewData';
import type { PageData } from '../coc-card/types/pageData';

import useDerives from '../coc-card/hooks/useDerives';
import useAppLs from '../coc-card/hooks/useAppLs';

import ControlSection from './ControlSection.vue';
import PaperOne from './PaperOne.vue';

const qsObject = qs.parse(location.search.slice(1));
const pcRef = ref<COCPlayerCharacter>(createPC());
const ls = useAppLs();
const viewData = reactive<COCCardViewData>(createViewData(qsObject));
const pageData = reactive<PageData>({
  paperInFront: true,
  printing: false,
  importing: false,
  showTotalSeparation: ls.getItem('showTotalSeparation') || false,
});

useDerives(pcRef);

provide('pc', pcRef);
provide('viewData', viewData);
provide('pageData', pageData);

const paperEls = reactive<HTMLElement[]>([]);
const numberOfPapers = ref(1);

// window.xx = { pc: pcRef, viewData, pageData };
</script>

<template>
  <main class="page theme-dark">
    <h1 class="title web-only">无限技能表（内部使用版）</h1>
    <div class="paper-container theme-light">
      <div class="papers-animation-container papers-editing web-only">
        <PaperOne
          v-for="i in numberOfPapers"
          :key="i"
          :hiddenKey="i"
        />
      </div>
      <div
        class="papers-printing"
        :class="{
          'papers-printing-active': pageData.printing,
        }"
      >
        <PaperOne
          :setRef="
            (el) => {
              paperEls[0] = el as HTMLElement;
            }
          "
          v-for="i in numberOfPapers"
          :key="i"
          :hiddenKey="i"
        />
      </div>
    </div>
    <div class="sticky-footer web-only">
      <ControlSection
        :paperEls="paperEls"
        @add-paper="() => (numberOfPapers += 1)"
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
  /* 一个奇怪的 ios bug，必须同时存在这两条才不会出现横向滚动条 */
  perspective: 900em;
  overflow: hidden;
}
.papers-animation-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
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
  .papers-animation-container {
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
