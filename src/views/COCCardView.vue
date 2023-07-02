<script setup lang="ts">
import { reactive, provide, ref } from 'vue';
import { toPng } from 'html-to-image';

import { createPC } from '@/models/coc-card/character';

import type { COCPlayerCharacter } from '@/types/coc-card/character';
import type { COCCardViewData } from '@/types/coc-card/viewData';

import useDerives from '@/hooks/useDerives';
import useSuggestion from '@/hooks/useSuggestion';
import { downloadImage } from '@/utils/image';
import { applyPrintStyles, resetPrintStyles } from '@/utils/print';

import ControlSection from './COCCardSections/ControlSection.vue';
import InvestigatorSection from './COCCardSections/InvestigatorSection.vue';
import AttributesSection from './COCCardSections/AttributesSection.vue';
import LuckSection from './COCCardSections/LuckSection.vue';
import AvatarSection from './COCCardSections/AvatarSection.vue';
import DeriveSections from './COCCardSections/DeriveSections.vue';
import HintSection from './COCCardSections/HintSection.vue';
import SkillSection from './COCCardSections/SkillSection.vue';
import WeaponSection from './COCCardSections/WeaponSection.vue';
import BattleSection from './COCCardSections/BattleSection.vue';

const pc = reactive<COCPlayerCharacter>(createPC());
const pcRef = ref(pc);
const viewData = reactive<COCCardViewData>({
  showingChildSkills: new Map(),
});
const pageData = reactive({
  printing: false,
});
const paperInFront = ref(true);

useDerives(pcRef);
const suggestion = useSuggestion(pcRef, viewData);

provide('pc', pcRef);
provide('viewData', viewData);
provide('pageData', pageData);
provide('suggestion', suggestion);

const paper = ref<HTMLElement | null>(null);
const paperImage = reactive({
  front: '',
  back: '',
});
async function printPaper() {
  if (!paper.value) return;

  // prepare
  applyPrintStyles();
  pageData.printing = true;

  // do proint
  const href = await toPng(paper.value, {
    canvasWidth: 210 * 6,
    canvasHeight: 297 * 6,
  });
  const imageName = [pc.name, pc.playerName, '正面'].filter((v) => v).join('-');
  downloadImage(href, imageName);
  paperImage.front = href;

  // reset
  resetPrintStyles();
  pageData.printing = false;
  return href;
}

function resetCard() {
  pcRef.value = reactive(createPC());
}

// @ts-expect-error
window.xx = { pc: pcRef, viewData, suggestion, printPaper };
</script>

<template>
  <main
    class="page"
    :print-ignore="pageData.printing ? true : undefined"
  >
    <div
      class="left-bar web-only"
      :print-ignore="pageData.printing ? true : undefined"
    >
      <ControlSection
        :paperInFront="paperInFront"
        :paperImage="paperImage"
        @switch-paper="(v) => (paperInFront = v)"
        @print-paper="printPaper"
        @reset-card="resetCard"
      />
    </div>
    <div
      class="paper-container"
      :print-ignore="pageData.printing ? true : undefined"
    >
      <Transition name="swipe-paper">
        <div
          class="paper theme-light"
          v-if="paperInFront"
        >
          <div
            class="paper-content"
            ref="paper"
          >
            <div class="section-row">
              <InvestigatorSection />
              <AttributesSection />
              <LuckSection class="col-0" />
              <AvatarSection />
            </div>
            <DeriveSections />
            <HintSection />
            <SkillSection />
            <div class="section-row">
              <WeaponSection class="col-0" />
              <BattleSection />
            </div>
          </div>
        </div>
        <div
          class="paper theme-light"
          v-else
        >
          <div class="paper-content">TODO</div>
        </div>
      </Transition>
    </div>
    <div class="web-only"></div>
  </main>
</template>

<style scoped lang="scss">
.page {
  min-width: 1440px;
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
.paper {
  --base-size: 15px; // 3.2mm * n
  /* --base-size: 3.2mm; */
  font-size: var(--base-size);
  width: 65.625em; // 210mm / 3.2mm
  height: 92.8125em; // 297mm / 3.2mm
  /* margin: auto; */
}
.paper-content {
  box-sizing: border-box;
  padding: 1.5em 1.8em;
  width: 100%;
  height: 100%;
  color: var(--color-text);
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.6em;
}

.section-row {
  display: flex;
  gap: 1em;
  align-items: stretch;
}

@media screen and (max-width: 960px) {
  .paper {
    --base-size: 16px;
  }
}

@media print {
  .page:not(.page[print-ignore]) {
    width: auto;
    display: block;
  }
  .paper-container:not(.paper-container[print-ignore]) {
    margin: auto;
  }
  .paper {
    --base-size: 3.6mm;
  }
  .web-only:not(.web-only[print-ignore]) {
    display: none;
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
