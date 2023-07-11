<script setup lang="ts">
import PaperSection from '@/components/coc-card/PaperSection.vue';
import WritableArea from '@/components/coc-card/WritableArea.vue';

import { usePC } from '@/hooks/useCOCCardProviders';

const pc = usePC();
</script>

<template>
  <PaperSection
    v-if="pc"
    title="经历过的模组"
    subTitle="Experienced Modules"
  >
    <div class="section-body">
      <WritableArea
        label=""
        :rows="9"
        :maxlength="18 * 9"
        v-model="pc.experiencedModules"
      />
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.section-body {
  padding: 0.4em 0.6em 0.6em;
}
</style>
