<script setup lang="ts">
import { computed, inject } from 'vue';

import type { COCPlayerCharacter } from '@/types/coc-card/character';
import type { Weapon } from '@/types/coc-card/weapon';

import PaperSection from '@/components/coc-card/PaperSection.vue';
import WeaponSectionRow from '@/components/coc-card/WeaponSectionRow.vue';

const pc = inject<COCPlayerCharacter>('pc');

const localWeapons = computed<(Weapon | undefined)[]>(() => {
  return Array.from({ length: 5 }).map((_, index) => {
    return pc?.weapons[index] || undefined;
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
        <div class="wp-th th-deep">成功率%</div>
        <div class="wp-th th-light">伤害</div>
        <div class="wp-th th-deep">射程</div>
        <div class="wp-th th-light">贯穿</div>
        <div class="wp-th th-deep">次数</div>
        <div class="wp-th th-light">装弹量</div>
        <div class="wp-th th-deep">故障值</div>
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
  --wp-color-1: hsl(0, 0%, 92%);
  --wp-color-2: hsl(0, 0%, 84%);
  --wp-color-3: hsl(0, 0%, 76%);
}
.weapon-section-row {
  display: grid;
  grid-template-columns: 12fr 5fr 4fr 4fr 2fr 2fr 5fr 3fr 3fr;
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
