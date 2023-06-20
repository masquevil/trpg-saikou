<script setup lang="ts">
import { reactive, provide } from 'vue';

import { createPC } from '@/models/coc-card/character';

import type { COCPlayerCharacter } from '@/types/coc-card/character';
import type { COCCardViewData } from '@/types/coc-card/viewData';

import useDerives from '@/hooks/useDerives';
import useSuggestion from '@/hooks/useSuggestion';

import InvestigatorSection from './COCCardSections/InvestigatorSection.vue';
import AttributesSection from './COCCardSections/AttributesSection.vue';
import LuckSection from './COCCardSections/LuckSection.vue';
import AvatarSection from './COCCardSections/AvatarSection.vue';
import DeriveSections from './COCCardSections/DeriveSections.vue';
import HintSection from './COCCardSections/HintSection.vue';
import SkillSection from './COCCardSections/SkillSection.vue';

const pc = reactive<COCPlayerCharacter>(createPC());
const viewData = reactive<COCCardViewData>({
  showingChildSkills: new Map(),
});

useDerives(pc);
const suggestion = useSuggestion(pc, viewData);

provide('pc', pc);
provide('viewData', viewData);
provide('suggestion', suggestion);

// @ts-expect-error
window.xx = { pc, viewData, suggestion };
</script>

<template>
  <main class="page theme-light">
    <div class="paper">
      <div class="section-row">
        <InvestigatorSection />
        <AttributesSection />
        <LuckSection class="col-0" />
        <AvatarSection />
      </div>
      <DeriveSections />
      <HintSection />
      <SkillSection />
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
  box-sizing: border-box;
  width: 65.625em; // 210mm / 3.2mm
  height: 92.8125em; // 297mm / 3.2mm
  padding: 1.5em 1.8em;
  margin: auto;
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
  .paper {
    font-size: 3.2mm;
    width: 210mm;
    height: 297mm;
    padding: 5mm 6mm;
  }
}
</style>
