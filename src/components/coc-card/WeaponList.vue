<script setup lang="ts">
import { computed, ref } from 'vue';
import { Upload } from '@element-plus/icons-vue';

// models
import {
  weapons,
  weaponGroups,
  weaponGroupOrders,
} from '@/models/coc-card/weapon';
import type { Weapon } from '@/types/coc-card/weapon';

import { usePC } from '@/hooks/useCOCCardProviders';

interface Props {
  label?: string;
}
defineProps<Props>();

const pc = usePC();

const collapseActiveNames = ref(
  weaponGroupOrders.map(([groupKey]) => groupKey)
);

const list = computed(() => {
  const weaponsMap = new Map(
    weapons.map((weapon) => [
      weapon.name,
      {
        ...weapon,
        range:
          `${Number(weapon.range)}` === weapon.range
            ? `${weapon.range}m`
            : weapon.range,
      },
    ])
  );
  return weaponGroupOrders.map(([groupKey, groupName]) => {
    return {
      name: groupName,
      groupKey,
      items: weaponGroups[groupKey].map((weaponName) => {
        const weapon = weaponsMap.get(weaponName)!;

        return weapon;
      }),
    };
  });
});

function getDisplayedWeaponRange(range: string) {
  if (`${Number(range)}` === range) return `${range}m`;
  return range || 'N/A';
}

function applyWeapon(weapon: Weapon, index: number) {
  if (!pc) return;
  pc.value.weapons[index] = weapon;
}
</script>

<template>
  <div>
    <el-collapse
      class="weapon-list"
      v-model="collapseActiveNames"
    >
      <el-collapse-item
        v-for="group in list"
        :key="group.groupKey"
        :title="group.name"
        :name="group.groupKey"
      >
        <div class="weapons-container">
          <div
            v-for="weapon in group.items"
            :key="weapon.name"
            class="weapon-card"
          >
            <div class="weapon-card-header">
              <span>【{{ weapon.name }}】{{ weapon.skill }}</span>

              <el-popover
                placement="left-start"
                trigger="click"
                :width="200"
                popper-class="weapon-card-places-container"
                :auto-close="2400"
              >
                <template #reference>
                  <a class="job-card-action job-card-action-use">
                    <el-icon size="0.9em">
                      <Upload />
                    </el-icon>
                    使用
                  </a>
                </template>
                <a
                  v-for="i in 5"
                  :key="i"
                  class="job-card-action"
                  @click="applyWeapon(weapon, i - 1)"
                >
                  {{ i }}
                </a>
              </el-popover>
            </div>
            <div class="weapon-card-row">
              <span>伤害：{{ weapon.dam }}</span>
              <span>次数：{{ weapon.round || 'N/A' }}</span>
              <span>{{ weapon.tho ? '贯穿' : '非贯穿' }}</span>
            </div>
            <div class="weapon-card-row">
              <span>射程：{{ getDisplayedWeaponRange(weapon.range) }}</span>
              <span>装弹量：{{ weapon.num || 'N/A' }}</span>
              <span>故障率：{{ weapon.err || 'N/A' }}</span>
            </div>
            <div class="weapon-card-row weapon-card-row-4">
              <span>年代：{{ weapon.time }}</span>
              <span>价格：{{ weapon.price || 'N/A' }}</span>
            </div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style scoped lang="scss">
.weapon-list {
  --el-collapse-border-color: var(--color-border);
  --el-collapse-header-height: 32px;
  --el-collapse-header-bg-color: transparent;
  --el-collapse-header-text-color: var(--color-white);
  --el-collapse-header-font-size: 14px;
  --el-collapse-content-bg-color: transparent;
  --el-collapse-content-font-size: 12px;
  --el-collapse-content-text-color: var(--color-text);
}

.weapons-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
}
.weapon-card {
  border: 1px solid var(--color-border);
  padding: 6px 12px 6px 4px;
  font-size: 12px;
  line-height: 1.6;
  background-color: rgba(0, 0, 0, 0.18);
}
.weapon-card-header {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
}
.weapon-card-row {
  margin-left: 1em;
  display: grid;
  grid-template-columns: 3fr 3fr 2fr;
  gap: 4px;
}
.weapon-card-row-4 {
  grid-template-columns: 3fr 5fr;
}

.job-card-action {
  padding: 6px 12px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.9);
  line-height: 1;
  color: var(--color-text);
  cursor: pointer;
  &:hover {
    background-color: rgba(16, 16, 16, 0.9);
  }
  &:active {
    background-color: rgba(32, 32, 32, 0.9);
  }
}
.job-card-action-use {
  display: flex;
  align-items: center;
  margin: -2px -6px;
  padding: 2px 6px;
}

@media screen and (max-width: 1024px) {
  .weapons-container {
    grid-template-columns: 1fr;
  }
}
</style>

<style lang="scss">
.weapon-list {
  & .el-collapse-item__content {
    padding-bottom: 8px;
  }
}
.weapon-card-places-container.el-popover.el-popper {
  padding: 2px 4px;
  --el-bg-color-overlay: rgba(96, 96, 96, 0.9);
  display: flex;
  justify-content: space-between;
}
</style>
