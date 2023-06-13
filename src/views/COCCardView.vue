<script setup lang="ts">
import { reactive, provide } from 'vue';

import formattedJobs from '@/models/coc/job';
import { createPC } from '@/models/coc/character';

import type { COCPlayerCharacter } from '@/models/coc/character';

import InvestigatorSection from './COCCardSections/InvestigatorSection.vue';
import AttributesSection from './COCCardSections/AttributesSection.vue';
import LuckSection from './COCCardSections/LuckSection.vue';
import AvatarSection from './COCCardSections/AvatarSection.vue';
import ComputedSections from './COCCardSections/ComputedSections.vue';

const { jobs, jobGroups } = formattedJobs;
const pc = reactive<COCPlayerCharacter>(createPC());

provide('pc', pc);
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
      <ComputedSections />
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
  box-sizing: border-box;
  width: 210mm;
  height: 297mm;
  padding: 5mm 6mm;
  margin: auto;
  font-size: 3.2mm;
  background-color: var(--color-white);
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
