<script setup lang="ts">
import { inject, computed, reactive } from 'vue';

import PaperSection from '@/components/coc-card/PaperSection.vue';
import SkillTable from '@/components/coc-card/SkillTable.vue';
// models
import type { COCPlayerCharacter } from '@/types/coc-card/character';

import { skillGroups } from '@/models/coc-card/skill';

const pc = inject<COCPlayerCharacter>('pc');
</script>

<template>
  <PaperSection
    title="技能表"
    subTitle="Skill"
    class="skill-section"
  >
    <div class="skill-section-body">
      <SkillTable :data="skillGroups.slice(0, 6)" />
      <div class="divider"></div>
      <SkillTable :data="skillGroups.slice(6)" />
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.skill-section {
  margin-top: 0.6em;
}
.skill-section-body {
  display: flex;
}
.divider {
  border-right: 1px solid var(--color-black);
}

@media print {
  /* .avatar-placeholder {
    display: none;
  } */
}
</style>