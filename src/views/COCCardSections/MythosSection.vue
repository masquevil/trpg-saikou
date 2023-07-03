<script setup lang="ts">
import PaperSection from '@/components/coc-card/PaperSection.vue';
import WritableRow from '@/components/coc-card/WritableRow.vue';

import { usePC } from '@/hooks/useCOCCardProviders';

const pc = usePC();
</script>

<template>
  <PaperSection
    v-if="pc"
    title="克苏鲁神话"
    subTitle="Cthulu Mythos"
  >
    <div class="story-section-body">TODO</div>
  </PaperSection>
</template>

<style scoped lang="scss">
.story-section-body {
  padding: 0.4em 0.6em 0.6em;
}
</style>
