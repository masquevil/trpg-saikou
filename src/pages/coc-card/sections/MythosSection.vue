<script setup lang="ts">
import PaperSection from '../components/PaperSection.vue';
import WritableArea from '../components/WritableArea.vue';

import { usePC } from '../hooks/useProviders';

const pc = usePC();
</script>

<template>
  <PaperSection
    v-if="pc"
    title="克苏鲁神话"
    subTitle="Cthulu Mythos"
  >
    <div class="section-body">
      <WritableArea
        label="魔法物品与典籍"
        :rows="4"
        :maxlength="18 * 4 - 8"
        v-model="pc.assets.magicItems"
      />
      <WritableArea
        label="法术"
        :rows="4"
        :maxlength="18 * 4 - 3"
        v-model="pc.assets.magics"
      />
      <WritableArea
        label="第三类接触"
        :rows="4"
        :maxlength="18 * 4 - 6"
        v-model="pc.assets.touches"
      />
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.section-body {
  padding: 0.4em 0.6em 0.6em;
}
</style>
