<script setup lang="ts">
import PaperSection from '../components/PaperSection.vue';
import WritableArea from '../components/WritableArea.vue';

import { usePC } from '../hooks/useProviders';

const pc = usePC();
</script>

<template>
  <PaperSection
    v-if="pc"
    title="物品与装备"
    subTitle="Possessions"
  >
    <div class="section-body">
      <WritableArea
        label=""
        :rows="12"
        :maxlength="18 * 12"
        v-model="pc.assets.items"
      />
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.section-body {
  padding: 0.4em 0.6em 0.6em;
}
</style>
