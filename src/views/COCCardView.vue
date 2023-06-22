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
const viewData = reactive<COCCardViewData>({
  showingChildSkills: new Map(),
});
const pageData = reactive({
  printing: false,
});

useDerives(pc);
const suggestion = useSuggestion(pc, viewData);

provide('pc', pc);
provide('viewData', viewData);
provide('pageData', pageData);
provide('suggestion', suggestion);

const paper = ref<HTMLElement | null>(null);
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

  // reset
  resetPrintStyles();
  pageData.printing = false;
  return href;
}

// @ts-expect-error
window.xx = { pc, viewData, suggestion, printPaper };
</script>

<template>
  <main class="page">
    <div class="paper theme-light">
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
  </main>
</template>

<style scoped lang="scss">
.page {
  padding: 32px;
  background-color: var(--color-black);
  color: var(--color-text);
}

.paper {
  --base-size: 4.2mm; // 3.2mm * n
  /* --base-size: 3.2mm; */
  font-size: var(--base-size);
  width: 65.625em; // 210mm / 3.2mm
  height: 92.8125em; // 297mm / 3.2mm
  margin: auto;
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

@media print {
  .page {
    width: auto;
    padding: 0;
  }
}
</style>
