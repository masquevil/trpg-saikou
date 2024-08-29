<script setup lang="ts">
import { computed } from 'vue';

import type { Weapon } from '../types/weapon';

import PaperSection from '../components/PaperSection.vue';
import WeaponSectionRow from '../components/WeaponSectionRow.vue';

import { usePC } from '../hooks/useProviders';

const pc = usePC();

const localWeapons = computed<(Weapon | undefined)[]>(() => {
  return Array.from({ length: 5 }).map((_, index) => {
    return pc?.value.weapons[index] || undefined;
  });
});
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
        <div class="wp-th th-deep">%</div>
        <div class="wp-th th-light">伤害</div>
        <div class="wp-th th-deep">射程</div>
        <div class="wp-th th-light">贯穿</div>
        <div class="wp-th th-deep">次数</div>
        <div class="wp-th th-light">装弹量</div>
        <div class="wp-th th-deep">故障</div>
      </div>
      <WeaponSectionRow
        class="weapon-section-row"
        v-for="(weapon, index) in localWeapons"
        :key="index"
        :index="index"
        :weapon="weapon"
      />
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.weapon-section-body {
  color: var(--color-black);
  --wp-color-0: hsl(0, 0%, 100%);
  --wp-color-1: hsl(0, 0%, 93%);
  --wp-color-2: hsl(0, 0%, 86%);
  --wp-color-3: hsl(0, 0%, 79%);
}
.weapon-section-row {
  display: grid;
  grid-template-columns: 13fr 6fr 2fr 8fr 4fr 2fr 6fr 5fr 2fr;
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
</style>

<style lang="scss">
@media screen and (max-width: 1024px) {
  .papers-editing {
    .weapon-section-body {
      overflow: auto;
    }
    .weapon-section-row {
      min-width: 68em; // 210mm / 3.2mm - 1.8em * 2 + 余量
    }
  }
}
</style>
