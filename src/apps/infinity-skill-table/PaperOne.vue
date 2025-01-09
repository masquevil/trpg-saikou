<script setup lang="ts">
import type { VNodeRef } from 'vue';

import PaperLayout from '../coc-card/layouts/PaperLayout.vue';
import SkillSection from './SkillSection.vue';
import CopyrightSection from '../coc-card/sections/CopyrightSection.vue';

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
