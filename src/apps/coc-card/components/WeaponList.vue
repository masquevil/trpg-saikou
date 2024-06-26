<script setup lang="ts">
import { ref, computed } from 'vue';
import { Upload } from '@element-plus/icons-vue';
import { ClickOutside } from 'element-plus';

// models
import { weapons, weaponGroups, weaponGroupOrders } from '../models/weapon';
import type { Weapon } from '../types/weapon';
import LA, { LAEventID, FeatureNames } from '@/plugins/51la';

import { usePC } from '../hooks/useProviders';

interface Props {
  label?: string;
}
defineProps<Props>();

interface listItem {
  name: string;
  groupKey: string;
  items: Weapon[];
}

// This import is never used as a value and must use 'import type' because 'importsNotUsedAsValues' is set to 'error'.
// import { ClickOutside as vClickOutside } from 'element-plus';
const vClickOutside = ClickOutside;
const pc = usePC();

const collapseActiveNames = ref([]);

const list = computed<listItem[]>(() => {
  const weaponsMap = new Map(
    weapons.map((weapon) => [
      weapon.name,
      {
        ...weapon,
        range: `${Number(weapon.range)}` === weapon.range ? `${weapon.range}m` : weapon.range,
      },
    ]),
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

const applyButtonRefs = ref<{ el: HTMLElement; weapon: Weapon }[]>([]);
const applyTriggerIndex = ref(-1);
const applyPopoverVisible = ref(false);
function onApplyButtonClick(event: MouseEvent) {
  const target = event.target as HTMLElement;
  const index = applyButtonRefs.value.findIndex((item) => item.el === target);
  if (index === -1) return;
  applyTriggerIndex.value = index;
  applyPopoverVisible.value = true;
}
function onHideApplyPopover() {
  applyPopoverVisible.value = false;
}
function applyWeapon(index: number, weapon?: Weapon) {
  if (!pc || !weapon) return;
  pc.value.weapons[index] = weapon;
  LA?.track(LAEventID.FEATURE, {
    name: FeatureNames.PANE_USE_WEAPON,
    weapon: weapon.name,
  });
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

              <a
                class="job-card-action job-card-action-use"
                :ref="
                  (el) => {
                    applyButtonRefs.push({
                      el: el as HTMLElement,
                      weapon,
                    });
                  }
                "
                @click="onApplyButtonClick"
                v-click-outside="onHideApplyPopover"
              >
                <el-icon
                  size="0.9em"
                  class="job-card-action-use-icon"
                >
                  <Upload />
                </el-icon>
                使用
              </a>
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

    <el-popover
      placement="left-start"
      popper-class="weapon-card-places-container"
      trigger="click"
      virtual-triggering
      :visible="applyPopoverVisible"
      :width="200"
      :virtual-ref="applyButtonRefs[applyTriggerIndex]?.el"
    >
      <a
        v-for="i in 5"
        :key="i"
        class="job-card-action"
        @click="applyWeapon(i - 1, applyButtonRefs[applyTriggerIndex]?.weapon)"
      >
        {{ i }}
      </a>
    </el-popover>
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
.job-card-action-use-icon {
  pointer-events: none;
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
