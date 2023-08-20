<script setup lang="ts">
import PaperSection from '@/components/coc-card/PaperSection.vue';
import WritableArea from '@/components/coc-card/WritableArea.vue';

import { usePC } from '@/hooks/useCOCCardProviders';
import { computed } from 'vue';

const pc = usePC();

const wealth = computed(() => {
  const point =
    pc?.value.skillPoints.find(([name]) => name === '信用评级')?.[1] || {};
  if (Object.keys(point).length === 0) return '';
  const { p = 0, i = 0, g = 0 } = point;
  return `${p + i + g}`;
});
</script>

<template>
  <PaperSection
    v-if="pc"
    title="资产"
    subTitle="Cash & Assets"
  >
    <div class="section-body">
      <WritableArea
        label="信用评级"
        :rows="1"
        :modelValue="wealth"
        readonly
      />
      <WritableArea
        label="现金"
        :rows="1"
        :maxlength="15"
        v-model="pc.assets.cash"
      />
      <WritableArea
        label="消费水平"
        :rows="1"
        :maxlength="13"
        v-model="pc.assets.consumption"
      />
      <WritableArea
        label="资产"
        :rows="9"
        :maxlength="17 * 9 - 2"
        v-model="pc.assets.assets"
      />
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.section-body {
  padding: 0.4em 0.6em 0.6em;
}
</style>
