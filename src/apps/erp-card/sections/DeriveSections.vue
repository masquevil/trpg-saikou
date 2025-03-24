<script setup lang="ts">
import { computed } from 'vue';

import PaperSection from '../components/PaperSection.vue';
import WritableUnit from '../components/WritableUnit.vue';
import WritableDivider from '../components/WritableDivider.vue';
import StatusCheckbox from '../components/StatusCheckbox.vue';
// models
import type { ERPDeriveAttributes } from '../types/character';

import { usePC } from '../hooks/useProviders';

const pc = usePC();

function updateAttr(key: keyof ERPDeriveAttributes, cKey: string, value: string): void {
  if (!pc || !pc.value.deriveAttributes) return;
  pc.value.deriveAttributes[key][cKey] = value ? value : undefined;
}

const divinity = computed(() => {
  if (!pc) return '';
  const source = pc.value.deriveAttributes?.sanity?.divinity;
  if (source !== undefined) return source;
  return '';
});
const humanity = computed(() => {
  if (!pc) return '';
  const source = pc.value.deriveAttributes?.sanity?.humanity;
  if (source !== undefined) return source;
  if (`${Number(divinity.value)}` !== divinity.value) return '';
  return `${99 - Number(divinity.value)}`;
});
const level = computed(() => {
  if (!pc) return '';
  const source = pc.value.deriveAttributes?.sanity?.level;
  if (source !== undefined) return source;
  if (`${Number(divinity.value)}` !== divinity.value) return '';
  return `${Math.floor(Number(divinity.value) / 5)}`;
});
</script>

<template>
  <div
    v-if="pc"
    class="computed-sections"
  >
    <PaperSection
      title="理智值"
      subTitle="Sanity"
    >
      <div class="units-section">
        <WritableUnit
          label="当前理智"
          :modelValue="`${pc.deriveAttributes?.sanity?.now ?? ''}`"
          @update:modelValue="(val) => updateAttr('sanity', 'now', val)"
        />
        <WritableDivider />
        <WritableUnit
          label="起始理智"
          :modelValue="`${pc.deriveAttributes?.sanity?.start ?? ''}`"
          @update:modelValue="(val) => updateAttr('sanity', 'start', val)"
        />
        <WritableDivider />
        <WritableUnit
          label="人性"
          :modelValue="humanity"
          @update:modelValue="(val) => updateAttr('sanity', 'humanity', val)"
          placeholder="99 - 神性"
        />
        <WritableDivider />
        <WritableUnit
          label="神性"
          :modelValue="divinity"
          @update:modelValue="(val) => updateAttr('sanity', 'divinity', val)"
        />
        <WritableDivider />
        <WritableUnit
          label="神格"
          :modelValue="level"
          @update:modelValue="(val) => updateAttr('sanity', 'level', val)"
          placeholder="神性 / 5"
        />
      </div>
    </PaperSection>
    <PaperSection
      title="生命值"
      subTitle="HP"
    >
      <div class="units-section">
        <WritableUnit
          label="当前生命"
          :modelValue="`${pc.deriveAttributes?.hp?.now ?? ''}`"
          @update:modelValue="(val) => updateAttr('hp', 'now', val)"
        />
        <WritableDivider />
        <WritableUnit
          label="最大生命"
          :modelValue="`${pc.deriveAttributes?.hp?.start ?? ''}`"
          @update:modelValue="(val) => updateAttr('hp', 'start', val)"
        />
      </div>
    </PaperSection>
    <PaperSection
      title="魔法值"
      subTitle="MP"
    >
      <div class="units-section">
        <WritableUnit
          label="当前魔法"
          :modelValue="`${pc.deriveAttributes?.mp?.now ?? ''}`"
          @update:modelValue="(val) => updateAttr('mp', 'now', val)"
        />
        <WritableDivider />
        <WritableUnit
          label="最大魔法"
          :modelValue="`${pc.deriveAttributes?.mp?.start ?? ''}`"
          @update:modelValue="(val) => updateAttr('mp', 'start', val)"
        />
      </div>
    </PaperSection>
    <PaperSection
      title="特殊状态"
      class="col-0"
    >
      <div class="status-section">
        <StatusCheckbox label="重伤" />
        <StatusCheckbox label="濒死" />
        <StatusCheckbox label="临时疯狂" />
        <StatusCheckbox label="不定期疯狂" />
      </div>
    </PaperSection>
  </div>
</template>

<style scoped lang="scss">
.computed-sections {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8em;
  align-items: stretch;
}

.units-section {
  padding: 0.4em 0.6em;
  display: flex;
  gap: 0.4em;
  justify-content: space-around;
}

.status-section {
  max-height: 4em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: var(--color-black);

  & > .status-checkbox {
    flex: 1 1 fit-content;
    background-color: hsl(0, 0%, 96%);
    &:nth-child(4n + 2),
    &:nth-child(4n + 3) {
      background-color: hsl(0, 0%, 82%);
    }
  }
}
</style>
