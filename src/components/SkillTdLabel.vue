<script setup lang="ts">
import { ref } from 'vue';
import type { ChildSkill } from '@/types/COC/skill';
import vClickOutside from '@/directives/clickOutside';

import SkillTdCheckbox from './SkillTdCheckbox.vue';

interface Props {
  skillName: string;
  isChildSkill?: boolean;
  childSkillName?: string;
  childSkillList?: ChildSkill[];
}
const props = withDefaults(defineProps<Props>(), {
  isChildSkill: false,
  childSkillName: '',
});

interface Emits {
  (event: 'selectChildSkill', childSkill: ChildSkill): void;
}
const emit = defineEmits<Emits>();

const isOptionsShowing = ref(false);
const localChildSkillName = ref(props.childSkillName);

function selectChildSkill(childSkill: ChildSkill) {
  localChildSkillName.value = childSkill.name;
  emit('selectChildSkill', childSkill);
  isOptionsShowing.value = false;
}
</script>

<template>
  <div class="skill-td-label">
    <SkillTdCheckbox />
    <div>{{ skillName }}</div>
    <div
      v-if="isChildSkill"
      class="child-skill-display"
    >
      <div v-if="skillName">:</div>
      <div
        class="child-skill-input-container"
        v-click-outside="() => (isOptionsShowing = false)"
      >
        <input
          class="child-skill-input"
          v-model="localChildSkillName"
          @focus="isOptionsShowing = true"
        />
        <div
          class="child-skill-options"
          v-if="childSkillList?.length"
          v-show="isOptionsShowing"
        >
          <div
            v-for="childSkill in childSkillList"
            :key="childSkill.name"
            class="child-skill-option"
            @click="selectChildSkill(childSkill)"
          >
            {{ childSkill.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.skill-td-label {
  display: flex;
  align-items: center;
  margin-left: 0.3em;
  margin-right: 0.6em;
  white-space: nowrap;

  --color-line: #8a8a8a;
}
.checkbox {
  flex: 0 0 auto;
  width: 0.9em;
  height: 0.9em;
  font-size: 0.9em;
  line-height: 1;
  border: 1px solid var(--color-line);
  background-color: var(--color-white);
  margin-right: 0.3em;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: var(--color-black);
  }
  &:active {
    background-color: var(--color-background-mute);
  }

  &:checked::before {
    content: '✓';
  }
}
.child-skill-display {
  flex: 1 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  position: relative;
}
.child-skill-input-container {
  position: relative;
  flex: 1 1 4em;
  width: 4em;
  display: flex;
}
.child-skill-input {
  flex: 1 1 4em;
  width: 4em;
  font-size: 0.96em;
  line-height: 1.2em;
  background-color: transparent;
  border-bottom: 1px solid var(--color-line);

  &:hover,
  &:focus {
    border-color: var(--color-black);
  }
}

.child-skill-options {
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 1;
  box-sizing: content-box;
  width: 14.4em;
  margin: 0 -5em;
  text-align: center;
  background-color: var(--color-white);
  border: 1px solid var(--color-black);
  display: flex;
  flex-wrap: wrap;
}
.child-skill-option {
  box-sizing: content-box;
  width: 4em;
  padding: 0 0.4em;
  cursor: pointer;
  &:hover {
    background-color: var(--color-background-mute);
  }
}
</style>
