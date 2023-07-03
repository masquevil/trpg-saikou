<script setup lang="ts">
import { ref, inject, computed } from 'vue';
// @ts-ignore
import vClickOutside from '@/directives/clickOutside';
import { usePC } from '@/hooks/useCOCCardProviders';
import type { ChildSkill } from '@/types/coc-card/skill';
import type { COCCardViewData } from '@/types/coc-card/viewData';
import type { COCPCSkill } from '@/types/coc-card/character';

import SoxCheckbox from './SoxCheckbox.vue';

interface Props {
  skillName: string;
  childSkillData?: {
    name: string;
    place: number;
    list?: ChildSkill[];
  };
}
const props = defineProps<Props>();

const pc = usePC();
const viewData = inject<COCCardViewData>('viewData');

interface Emits {
  (event: 'selectChildSkill', childSkill: ChildSkill): void;
}
const emit = defineEmits<Emits>();

const isOptionsShowing = ref(false);
const currentData = computed(() =>
  viewData?.showingChildSkills.get(props.skillName)
);
const existedData = computed(() => {
  if (['母语', '外语'].includes(props.skillName)) {
    return [
      ...(viewData?.showingChildSkills.get('母语') || []),
      ...(viewData?.showingChildSkills.get('外语') || []),
    ];
  }
  return currentData.value;
});
// select skill as pro (checkbox)
const isProSkill = computed(() => {
  if (!pc || !viewData) return false;

  return pc.value.proSkills.some((skillInfo) => {
    // 基础技能
    if (typeof skillInfo === 'string') {
      return skillInfo === props.skillName;
    }
    // 二级技能
    const [skillName, _, childSkillPlace] = skillInfo;
    return (
      skillName === props.skillName &&
      childSkillPlace === props.childSkillData?.place
    );
  });
});

function updateCurrentData(value: string) {
  if (!props.childSkillData || !currentData.value) return;
  // update pro data
  if (isProSkill.value && pc) {
    const skillInfo = pc.value.proSkills.find(
      ([skillName, _, childSkillPlace]) => {
        return (
          skillName === props.skillName &&
          childSkillPlace === props.childSkillData?.place
        );
      }
    );
    if (skillInfo && typeof skillInfo !== 'string') {
      skillInfo[1] = value;
    }
  }
  // update view data
  currentData.value[props.childSkillData.place] = value;
}
function selectChildSkill(childSkill: ChildSkill) {
  updateCurrentData(childSkill.name);
  emit('selectChildSkill', childSkill);
  isOptionsShowing.value = false;
}

function changeProSkill(value: boolean) {
  if (!pc) return;
  if (value) {
    let skillInfo: COCPCSkill = props.skillName;
    if (props.childSkillData)
      skillInfo = [
        props.skillName,
        props.childSkillData.name,
        props.childSkillData.place,
      ];
    pc.value.proSkills.push(skillInfo);
  } else {
    pc.value.proSkills = pc.value.proSkills.filter((skillInfo) => {
      if (!props.childSkillData) return skillInfo !== props.skillName;
      const [skillName, _, childSkillPlace] = skillInfo;
      return (
        skillName !== props.skillName ||
        childSkillPlace !== props.childSkillData.place
      );
    });
  }
}
</script>

<template>
  <div class="skill-td-label">
    <label class="skill-td-checkbox-label">
      <SoxCheckbox
        :checked="isProSkill"
        @check="changeProSkill"
      />
    </label>
    <div>{{ skillName }}</div>
    <div
      v-if="!!childSkillData"
      class="child-skill-display"
    >
      <div v-if="skillName">:</div>
      <div
        class="child-skill-input-container"
        v-click-outside="() => (isOptionsShowing = false)"
      >
        <input
          type="text"
          class="child-skill-input"
          :value="currentData?.[childSkillData.place]"
          @input="updateCurrentData(($event.target as HTMLInputElement).value)"
          @focus="isOptionsShowing = true"
        />
        <div
          class="child-skill-options"
          v-if="childSkillData.list?.length"
          v-show="isOptionsShowing"
        >
          <div
            v-for="childSkill in childSkillData.list"
            :key="childSkill.name"
            class="child-skill-option"
            :class="{
              'child-skill-option-existed': existedData?.includes(
                childSkill.name
              ),
            }"
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
  margin-right: 0.6em;
  white-space: nowrap;

  --color-line: #8a8a8a;
}
.skill-td-checkbox-label {
  width: var(--th-line-height);
  height: var(--td-line-height);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 0.12em;
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
    opacity: 1;
    background-color: var(--color-background-mute);
  }
}
.child-skill-option-existed {
  opacity: 0.8;
  background-color: var(--color-background-mute);
  color: var(--color-line);
}
</style>
