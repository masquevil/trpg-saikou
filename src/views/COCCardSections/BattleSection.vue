<script setup lang="ts">
import { watch } from 'vue';

import PaperSection from '@/components/coc-card/PaperSection.vue';
import WritableRow from '@/components/coc-card/WritableRow.vue';

import { usePC } from '@/hooks/useCOCCardProviders';

const pc = usePC();

watch(
  () => pc?.value.attributes,
  () => {
    if (!pc) return;
    const { str, siz, dex } = pc.value.attributes;
    const age = Number(pc.value.age);
    // calculate DB
    if (str && siz) {
      const value = str + siz;
      if (value < 65) {
        pc.value.battleAttributes.db = '-2';
        pc.value.battleAttributes.size = '-2';
      } else if (value < 85) {
        pc.value.battleAttributes.db = '-1';
        pc.value.battleAttributes.size = '-1';
      } else if (value < 125) {
        pc.value.battleAttributes.db = '0';
        pc.value.battleAttributes.size = '0';
      } else if (value < 165) {
        pc.value.battleAttributes.db = '1D4';
        pc.value.battleAttributes.size = '1';
      } else if (value < 205) {
        pc.value.battleAttributes.db = '1D6';
        pc.value.battleAttributes.size = '2';
      } else {
        const rate = Math.floor((value - 205) / 80) + 2;
        pc.value.battleAttributes.db = `${rate}D6`;
        pc.value.battleAttributes.size = `${rate + 1}`;
      }
    }
    // calculate mov
    if (str && siz && dex) {
      let move = 8;
      if (str < siz && dex < siz) move = 7;
      else if (str > siz && dex > siz) move = 9;
      else move = 8;
      if (age >= 40) {
        const rate = Math.floor((age - 40) / 10) + 1;
        move -= rate;
      }
      pc.value.battleAttributes.mov = `${move}`;
    }
  },
  { deep: true }
);
</script>

<template>
  <PaperSection title="战斗">
    <div
      class="battle-section-body"
      v-if="pc"
    >
      <WritableRow
        label="伤害加值"
        hint="DB"
        v-model="pc.battleAttributes.db"
      />
      <WritableRow
        label="体格"
        v-model="pc.battleAttributes.size"
      />
      <WritableRow
        label="护甲"
        v-model="pc.battleAttributes.armor"
      />
      <WritableRow
        label="移动力"
        v-model="pc.battleAttributes.mov"
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
  padding: 0.6em 0.6em 1.2em 0.4em;

  &:deep(.label) {
    width: 4.4em;
    flex: 1 1 auto;
  }
}
</style>
