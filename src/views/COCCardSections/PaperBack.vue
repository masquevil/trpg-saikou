<script setup lang="ts">
import type { VNodeRef } from 'vue';

import PaperLayout from './PaperLayout.vue';
import StorySection from './StorySection.vue';
import AssetsSection from './AssetsSection.vue';
import ItemSection from './ItemSection.vue';
import MythosSection from './MythosSection.vue';
import FriendSection from './FriendSection.vue';
import ExperienceSection from './ExperienceSection.vue';

interface Props {
  setRef?: VNodeRef;
}
defineProps<Props>();
</script>

<template>
  <PaperLayout :setRef="setRef">
    <StorySection />
    <div class="section-row">
      <AssetsSection />
      <ItemSection class="col-0" />
      <MythosSection />
    </div>
    <div class="section-row">
      <FriendSection class="col-0" />
      <ExperienceSection />
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
