<script setup lang="ts">
import { inject, computed, reactive } from 'vue';

import PaperSection from '@/components/coc-card/PaperSection.vue';
// models
import type { COCPlayerCharacter } from '@/types/coc-card/character';

const pc = inject<COCPlayerCharacter>('pc');

function getTDClass(row: number, col: number) {
  const rowBase = row % 2 ? 1 : 0;
  const colBase = col % 2 ? 0 : 1;
  return `td-color-${rowBase + colBase}`;
}
</script>

<template>
  <PaperSection
    title="武器"
    subTitle="Weapons"
  >
    <div class="weapon-section-body">
      <div class="weapon-section-row">
        <div class="wp-th th-deep">武器名称</div>
        <div class="wp-th th-light">使用技能</div>
        <div class="wp-th th-deep">成功率%</div>
        <div class="wp-th th-light">伤害</div>
        <div class="wp-th th-deep">射程</div>
        <div class="wp-th th-light">贯穿</div>
        <div class="wp-th th-deep">次数</div>
        <div class="wp-th th-light">装弹量</div>
        <div class="wp-th th-deep">故障值</div>
      </div>
      <div
        class="weapon-section-row"
        v-for="i in 5"
        :key="i"
      >
        <div
          class="wp-td"
          :class="{
            [getTDClass(i, 0)]: true,
          }"
        ></div>
        <div
          class="wp-td"
          :class="{
            [getTDClass(i, 1)]: true,
          }"
        ></div>
        <div
          class="wp-td"
          :class="{
            [getTDClass(i, 2)]: true,
          }"
        ></div>
        <div
          class="wp-td"
          :class="{
            [getTDClass(i, 3)]: true,
          }"
        ></div>
        <div
          class="wp-td"
          :class="{
            [getTDClass(i, 4)]: true,
          }"
        ></div>
        <div
          class="wp-td"
          :class="{
            [getTDClass(i, 5)]: true,
          }"
        ></div>
        <div
          class="wp-td"
          :class="{
            [getTDClass(i, 6)]: true,
          }"
        ></div>
        <div
          class="wp-td"
          :class="{
            [getTDClass(i, 7)]: true,
          }"
        ></div>
        <div
          class="wp-td"
          :class="{
            [getTDClass(i, 8)]: true,
          }"
        ></div>
      </div>
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.weapon-section-body {
  color: var(--color-black);
  --wp-color-0: hsl(0, 0%, 100%);
  --wp-color-1: hsl(0, 0%, 92%);
  --wp-color-2: hsl(0, 0%, 84%);
  --wp-color-3: hsl(0, 0%, 76%);
}
.weapon-section-row {
  display: grid;
  grid-template-columns: 6fr 5fr 4fr 5fr 3fr 2fr 3fr 3fr 3fr;
  text-align: center;
}

.wp-th {
  line-height: 1;
  padding: 0.4em 0;
}
.th-deep {
  background-color: var(--wp-color-3);
}
.th-light {
  background-color: var(--wp-color-2);
}

.wp-td {
  line-height: 1;
  padding: 0.36em 0.4em;
  height: 1.72em;
}
.td-color-0 {
  background-color: var(--wp-color-0);
}
.td-color-1 {
  background-color: var(--wp-color-1);
}
.td-color-2 {
  background-color: var(--wp-color-2);
}
</style>
