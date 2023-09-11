<script setup lang="ts">
import type { VNodeRef } from 'vue';

import PaperLayout from './PaperLayout.vue';
import InvestigatorSection from './InvestigatorSection.vue';
import AttributesSection from './AttributesSection.vue';
import LuckSection from './LuckSection.vue';
import AvatarSection from './AvatarSection.vue';
import DeriveSections from './DeriveSections.vue';
import HintSection from './HintSection.vue';
import SkillSection from './SkillSection.vue';
import WeaponSection from './WeaponSection.vue';
import BattleSection from './BattleSection.vue';
import CopyrightSection from './CopyrightSection.vue';

interface Props {
  setRef?: VNodeRef;
  cheating?: boolean;
}
defineProps<Props>();
</script>

<template>
  <PaperLayout :setRef="setRef">
    <div class="section-row">
      <InvestigatorSection />
      <AttributesSection :cheating="cheating" />
      <LuckSection class="col-0" />
      <AvatarSection />
    </div>
    <DeriveSections />
    <HintSection />
    <SkillSection />
    <div
      class="section-row"
      style="gap: 0.8em"
    >
      <WeaponSection class="col-0" />
      <BattleSection />
    </div>
    <CopyrightSection />
  </PaperLayout>
</template>

<style scoped lang="scss">
.section-row {
  display: flex;
  gap: 1em;
  align-items: stretch;
}
</style>
