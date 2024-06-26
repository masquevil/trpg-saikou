<script setup lang="ts">
import { computed } from 'vue';

import SoxCheckbox from '@/components/SoxCheckbox.vue';
import BaseTdInput from '../components/BaseTdInput.vue';
import BaseTdSelect from '../components/BaseTdSelect.vue';
import FlattenTree from '../components/FlattenTree.vue';

import type { Weapon } from '../types/weapon';
import type { FlattenTreeData } from '../types/flattenTree';

import { createWeapon, weapons, weaponGroups, weaponGroupOrders } from '../models/weapon';
import { skillGroups } from '../models/skill';
import LA, { LAEventID, FeatureNames } from '@/plugins/51la';

import { useToggle } from '@/utils/ui';
import { usePC } from '../hooks/useProviders';
// @ts-ignore
import vClickOutside from '@/directives/clickOutside';

interface Props {
  index: number;
  weapon?: Weapon;
}
const props = withDefaults(defineProps<Props>(), {});

interface Emits {
  (event: 'input', value: string): void;
  (event: 'focus', $event: FocusEvent): void;
}
defineEmits<Emits>();

interface BattleSkill {
  // format: 战斗(斗殴) or 投掷
  name: string;
  init: number;
}

const pc = usePC();

function getTDClass(row: number, col: number) {
  const rowBase = row % 2 ? 0 : 1;
  const colBase = col % 2 ? 0 : 1;
  return `td-color-${rowBase + colBase}`;
}

function getPoint(skillName: string) {
  const [name, childName] = skillName.split(')')[0].split('(');
  const initPoint =
    battleSkills.value.find((battleSkill) => {
      return battleSkill.name === skillName;
    })?.init || 0;
  let plusPoint = 0;
  // get pc point
  pc?.value.skillPoints.some((skillPoint) => {
    const matched =
      // 投掷
      (!childName && name === skillPoint[0]) ||
      // 格斗 or 射击
      (childName &&
        typeof skillPoint[0] !== 'string' &&
        name === skillPoint[0][0] &&
        childName === skillPoint[0][1]);
    if (matched) {
      const { p = 0, i = 0, g = 0 } = skillPoint[1];
      plusPoint = p + i + g;
    }
    return matched;
  });
  return {
    initPoint,
    result: plusPoint ? `${initPoint + plusPoint}` : '',
  };
}

const weapon = computed(() => props.weapon || createWeapon());
const point = computed(() => getPoint(weapon.value.skill));

const battleSkills = computed<BattleSkill[]>(() => {
  const skills = skillGroups
    .find(({ groupName }) => groupName === '战斗')!
    .groupSkills.filter(({ name }) => name !== '闪避');
  return skills.reduce<BattleSkill[]>((result, skill) => {
    const { name, init, group } = skill;
    const added: BattleSkill[] = !group
      ? [{ name, init }]
      : group.skills.map((childSkill) => ({
          name: `${name}(${childSkill.name})`,
          init: childSkill.init || init,
        }));
    return [...result, ...added];
  }, []);
});

const battleSkillOptions = computed(() => {
  return battleSkills.value.map(({ name }) => ({
    value: name,
    label: name,
  }));
});

const {
  value: isWeaponSeletorShowing,
  setTrue: showWeaponSeletor,
  setFalse: hideWeaponSeletor,
} = useToggle();

const weaponTree = computed<FlattenTreeData>(() => {
  return weaponGroupOrders.map(([key, label]) => ({
    key,
    label,
    children: weaponGroups[key].map((weaponGroup) => ({
      key: weaponGroup,
      label: weaponGroup,
    })),
  }));
});

function updatePCWeapon(updates: Partial<Weapon>) {
  if (!pc) return;
  if (!pc.value.weapons[props.index]) pc.value.weapons[props.index] = createWeapon();
  const weapon = pc.value.weapons[props.index];
  Object.assign(weapon, updates);
}

function onSelectWeapon(name: string) {
  const data = weapons.find((data) => data.name === name);
  if (!data) return;
  const { price, time, ...rest } = data;
  updatePCWeapon({
    ...rest,
  });
  hideWeaponSeletor();
  LA?.track(LAEventID.FEATURE, {
    name: FeatureNames.PAPER_USE_WEAPON,
    weapon: name,
  });
}
</script>

<template>
  <div class="weapon-section-row">
    <div
      class="wp-td"
      :class="{
        [getTDClass(index, 0)]: true,
      }"
    >
      <div
        class="weapon-td-name"
        v-click-outside="hideWeaponSeletor"
      >
        <BaseTdInput
          :value="weapon.name"
          @input="(val) => updatePCWeapon({ name: val })"
          @focus="() => showWeaponSeletor()"
        />
        <Transition name="slide-down">
          <div
            v-show="isWeaponSeletorShowing"
            class="weapon-selector"
          >
            <FlattenTree
              :tree="weaponTree"
              @select="(item) => onSelectWeapon(item.label)"
            />
          </div>
        </Transition>
      </div>
    </div>
    <div
      class="wp-td"
      :class="{
        [getTDClass(index, 1)]: true,
      }"
    >
      <span class="show-in-print">{{ weapon.skill }}</span>
      <BaseTdSelect
        class="hide-in-print"
        :value="weapon.skill"
        :options="battleSkillOptions"
        @change="(val) => updatePCWeapon({ skill: val })"
      />
    </div>
    <div
      class="wp-td"
      :class="{
        [getTDClass(index, 2)]: true,
      }"
    >
      {{ point.result }}
      <span
        v-if="!point.result && point.initPoint"
        class="wp-point-placeholder"
      >
        {{ point.initPoint }}
      </span>
    </div>
    <div
      class="wp-td"
      :class="{
        [getTDClass(index, 3)]: true,
      }"
    >
      <BaseTdInput
        :value="weapon.dam"
        @input="(val) => updatePCWeapon({ dam: val })"
      />
    </div>
    <div
      class="wp-td"
      :class="{
        [getTDClass(index, 4)]: true,
      }"
    >
      <BaseTdInput
        :value="weapon.range"
        @input="(val) => updatePCWeapon({ range: val })"
      />
    </div>
    <div
      class="wp-td"
      :class="{
        [getTDClass(index, 5)]: true,
      }"
    >
      <SoxCheckbox
        :xOnFalse="!!weapon.name"
        :checked="Boolean(weapon.tho)"
        @check="(val) => updatePCWeapon({ tho: +val })"
      />
    </div>
    <div
      class="wp-td"
      :class="{
        [getTDClass(index, 6)]: true,
      }"
    >
      <BaseTdInput
        :value="weapon.round"
        @input="(val) => updatePCWeapon({ round: val })"
      />
    </div>
    <div
      class="wp-td"
      :class="{
        [getTDClass(index, 7)]: true,
      }"
    >
      <BaseTdInput
        :value="weapon.num"
        @input="(val) => updatePCWeapon({ num: val })"
      />
    </div>
    <div
      class="wp-td"
      :class="{
        [getTDClass(index, 8)]: true,
      }"
    >
      <BaseTdInput
        :value="weapon.err"
        @input="(val) => updatePCWeapon({ err: val })"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.wp-td {
  line-height: 1.88em;
  padding: 0 0.2em;
  font-size: 0.92em;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
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

.weapon-td-name {
  position: relative;
  flex: 1 1 auto;
}
.weapon-selector {
  position: absolute;
  width: calc(64 * var(--base-size)); // 210mm - 2em
  left: -1.6em;
  bottom: 100%;
  margin-bottom: 0.4em;
  padding: 1em;
  border: 1px solid #777;
  background-color: #fff;
  z-index: 1;

  &:deep(.flatten-tree) {
    font-size: 0.88em;
  }
  &:deep(.flatten-tree .group-label) {
    line-height: 1.8em;
  }
  &:deep(.flatten-tree .option) {
    padding: 0.24em 0.48em;
  }
}

.wp-point-placeholder {
  color: var(--color-placeholder);
}

.show-in-print {
  display: none;
}

/* when print image & print */
@mixin printing-styles {
  .wp-point-placeholder {
    display: none;
  }
  .show-in-print {
    display: block;
  }
  .hide-in-print {
    display: none;
  }
}
.printing-image {
  @include printing-styles;
}
@media print {
  @include printing-styles;
}
</style>

<style lang="scss">
@media screen and (max-width: 1024px) {
  .papers-editing {
    .weapon-selector {
      display: none;
    }
  }
}
</style>
