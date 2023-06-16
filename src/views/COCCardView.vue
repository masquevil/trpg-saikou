<script setup lang="ts">
import { reactive, provide, watch } from 'vue';

import formattedJobs from '@/models/coc-card/job';
import { createPC } from '@/models/coc-card/character';

import type { COCPlayerCharacter } from '@/models/coc-card/character';
import type { COCDeriveAttributes } from '@/models/coc-card/attribute';

import InvestigatorSection from './COCCardSections/InvestigatorSection.vue';
import AttributesSection from './COCCardSections/AttributesSection.vue';
import LuckSection from './COCCardSections/LuckSection.vue';
import AvatarSection from './COCCardSections/AvatarSection.vue';
import DeriveSections from './COCCardSections/DeriveSections.vue';
import SkillSection from './COCCardSections/SkillSection.vue';

const { jobs, jobGroups } = formattedJobs;
const pc = reactive<COCPlayerCharacter>(createPC());

provide('pc', pc);

watch(
  () => pc.attributes,
  () => {
    let HPMax = '';
    let MPMax = '';
    const { con, siz, pow } = pc?.attributes || {};
    console.log('xxx 1');
    if (con && siz) HPMax = `${Math.floor((con + siz) / 10)}`;
    if (pow) MPMax = `${pow / 5}`;
    pc.deriveAttributes = {
      sanity: {
        start: `${pow || ''}`,
        // TODO
        max: `${pow ? 99 : ''}`,
      },
      hp: {
        max: HPMax,
      },
      mp: {
        max: MPMax,
      },
    };
  },
  { deep: true }
);
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
  --base-size: 4.8mm; // 3.2mm * 1.5
  font-size: var(--base-size);
  box-sizing: border-box;
  width: 65.625em; // 210mm * 1.5
  height: 92.8125em; // 297mm * 1.5
  padding: 1.5em 1.8em;
  margin: auto;
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
  .paper {
    font-size: 3.2mm;
    width: 210mm;
    height: 297mm;
    padding: 5mm 6mm;
  }
}
</style>
