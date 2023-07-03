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
  </PaperLayout>
</template>

<style scoped lang="scss">
.section-row {
  display: flex;
  gap: 1em;
  align-items: stretch;
}
</style>
