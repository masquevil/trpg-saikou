<script setup lang="ts">
import type { VNodeRef } from 'vue';

import PaperLayout from './layouts/PaperLayout.vue';
import InvestigatorSection from './sections/InvestigatorSection.vue';
import AttributesSection from './sections/AttributesSection.vue';
import LuckSection from './sections/LuckSection.vue';
import AvatarSection from './sections/AvatarSection.vue';
import DeriveSections from './sections/DeriveSections.vue';
import HintSection from './sections/HintSection.vue';
import SkillSection from './sections/SkillSection.vue';
import WeaponSection from './sections/WeaponSection.vue';
import BattleSection from './sections/BattleSection.vue';
import CopyrightSection from './sections/CopyrightSection.vue';

interface Props {
  setRef?: VNodeRef;
}
defineProps<Props>();
</script>

<template>
  <PaperLayout :setRef="setRef">
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
    <CopyrightSection />
  </PaperLayout>
</template>

<style scoped lang="scss">
.section-row {
  display: flex;
  gap: 0.8em;
  align-items: stretch;
  flex-wrap: wrap;
}
</style>
