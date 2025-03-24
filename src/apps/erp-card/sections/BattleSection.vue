<script setup lang="ts">
import { watch } from 'vue';

import PaperSection from '../components/PaperSection.vue';
import WritableRow from '../components/WritableRow.vue';

import { usePC } from '../hooks/useProviders';

const pc = usePC();

watch(
  () => pc?.value.attributes,
  () => {
    if (!pc) return;
    const { str, dex, con } = pc.value.attributes;
    // calculate DB
    if (str) {
      const value = str;
      if (value < 20) {
        pc.value.battleAttributes.db = '1';
        pc.value.battleAttributes.size = '-2';
      } else if (value < 40) {
        pc.value.battleAttributes.db = '1d3';
        pc.value.battleAttributes.size = '-1';
      } else if (value < 60) {
        pc.value.battleAttributes.db = '2d3';
        pc.value.battleAttributes.size = '0';
      } else if (value < 80) {
        pc.value.battleAttributes.db = '2D4';
        pc.value.battleAttributes.size = '1';
      } else if (value < 120) {
        pc.value.battleAttributes.db = '2D6';
        pc.value.battleAttributes.size = '2';
      } else {
        const rate = Math.floor(value / 40);
        pc.value.battleAttributes.db = `${rate}D6`;
        pc.value.battleAttributes.size = `${rate}`;
      }
    }
    // calculate mov
    if (str && dex && con) {
      const move = Math.floor((Math.min(str, dex) + con / 2) / 10);
      pc.value.battleAttributes.mov = `${move}`;
    }
  },
  { deep: true },
);
</script>

<template>
  <PaperSection
    title="战斗"
    subTitle="Combat"
  >
    <div
      class="battle-section-body"
      v-if="pc"
    >
      <WritableRow
        label="伤害加值"
        hint="DB"
        v-model="pc.battleAttributes.db"
        :char="4"
      />
      <WritableRow
        label="体格"
        v-model="pc.battleAttributes.size"
        :char="4"
      />
      <WritableRow
        label="护甲"
        v-model="pc.battleAttributes.armor"
        :char="4"
      />
      <WritableRow
        label="移动力"
        v-model="pc.battleAttributes.mov"
        :char="4"
      />
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.battle-section-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.3em;
  padding: 0.6em 0.6em 1.2em 0.2em;

  &:deep(.label) {
    width: 4.4em;
    flex: 0 1 auto;
  }
}
</style>
