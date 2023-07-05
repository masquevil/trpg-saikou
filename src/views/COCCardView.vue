<script setup lang="ts">
import { reactive, provide, ref, nextTick } from 'vue';
import { toJpeg } from 'html-to-image';

import { createPC } from '@/models/coc-card/character';

import type { COCPlayerCharacter } from '@/types/coc-card/character';
import type { COCCardViewData } from '@/types/coc-card/viewData';

import useDerives from '@/hooks/useDerives';
import useSuggestion from '@/hooks/useSuggestion';
import { downloadImage } from '@/utils/image';

import ControlSection from './COCCardSections/ControlSection.vue';
import PaperFront from './COCCardSections/PaperFront.vue';
import PaperBack from './COCCardSections/PaperBack.vue';

const pc = reactive<COCPlayerCharacter>(createPC());
const pcRef = ref(pc);
const viewData = reactive<COCCardViewData>({
  showingChildSkills: new Map(),
});
const pageData = reactive({
  printing: false,
});
const paperInFront = ref(location.search.includes('turn=back') ? false : true);

useDerives(pcRef);
const suggestion = useSuggestion(pcRef, viewData);

provide('pc', pcRef);
provide('viewData', viewData);
provide('pageData', pageData);
provide('suggestion', suggestion);

const paperEls = reactive<HTMLElement[]>([]);
const paperImage = reactive({
  front: '',
  back: '',
});
function printPaper(debug: boolean = false) {
  if (!paperEls.length) return;
  // prepare
  pageData.printing = true;

  if (debug) return;

  nextTick(async () => {
    if (!paperEls.length) return;
    // do proint
    const hrefs = await Promise.all(
      paperEls.map(async (el) => {
        if (!el) return '';
        return await toJpeg(el, {
          canvasWidth: 210 * 8,
          canvasHeight: 297 * 8,
          pixelRatio: 1,
          quality: 0.5,
        });
      })
    );
    paperImage.front = hrefs[0];
    paperImage.back = hrefs[1];
    // auto download
    const data = [
      ['正面', hrefs[0]],
      ['背面', hrefs[1]],
    ];
    data.forEach(([name, href]) => {
      const imageName = [pc.name, pc.playerName, name]
        .filter((v) => v)
        .join('-');
      if (!href) return;
      downloadImage(href, `${imageName}.jpg`);
    });
    // reset
    pageData.printing = false;
  });
}

function resetCard() {
  pcRef.value = reactive(createPC());
}

// window.xx = { pc: pcRef, viewData, pageData, printPaper };
</script>

<template>
  <main class="page">
    <div class="left-bar web-only">
      <ControlSection
        :paperInFront="paperInFront"
        :paperImage="paperImage"
        @switch-paper="(v) => (paperInFront = v)"
        @print-paper="printPaper"
        @reset-card="resetCard"
      />
    </div>
    <div class="paper-container">
      <div class="papers-editing web-only">
        <Transition name="swipe-paper">
          <PaperFront v-if="paperInFront" />
          <PaperBack v-else />
        </Transition>
      </div>
      <div
        class="papers-printing"
        :class="{
          'papers-printing-active': pageData.printing,
        }"
      >
        <PaperFront :setRef="(el) => {paperEls[0] = el as HTMLElement}" />
        <PaperBack :setRef="(el) => {paperEls[1] = el as HTMLElement}" />
      </div>
    </div>
    <div class="web-only"></div>
  </main>
</template>

<style scoped lang="scss">
.page {
  min-width: 1300px;
  color: var(--color-text);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
}

.left-bar {
  position: sticky;
  top: 0;
  height: 100vh;
  width: 200px;
}

.paper-container {
  margin: 32px 0;
  perspective: 900em;
}
.papers-printing {
  --base-size: 3.2mm;
  display: none;
}
.papers-printing-active {
  display: block;
}

/* when print */
@media print {
  .page {
    width: auto;
    min-width: auto;
    display: block;
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

<style lang="scss">
body {
  --color-background: var(--color-black);
}
.el-message--error {
  --el-message-border-color: hsl(350, 60%, 80%);
  --el-message-text-color: hsl(350, 100%, 35%);
}
.el-message--success {
  --el-message-border-color: hsl(150, 60%, 30%);
  --el-message-text-color: hsl(150, 100%, 20%);
}
.el-message--info {
  --el-message-border-color: hsl(190, 60%, 30%);
  --el-message-text-color: hsl(190, 100%, 20%);
}
</style>
