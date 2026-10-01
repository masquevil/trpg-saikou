<script setup lang="ts">
import type { VNodeRef } from 'vue';

import PaperLayout from '@/apps/coc-card/layouts/PaperLayout.vue';
import SkillSection from './SkillSection.vue';
import CopyrightSection from '@/apps/coc-card/sections/CopyrightSection.vue';

interface Props {
  setRef?: VNodeRef;
  hiddenKey: number;
}
defineProps<Props>();
</script>

<template>
  <PaperLayout :setRef="setRef">
    <SkillSection :hiddenKey="hiddenKey" />
    <CopyrightSection />
  </PaperLayout>
</template>
