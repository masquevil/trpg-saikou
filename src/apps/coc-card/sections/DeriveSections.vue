<script setup lang="ts">
import { computed } from 'vue';

import PaperSection from '../components/PaperSection.vue';
import WritableUnit from '../components/WritableUnit.vue';
import WritableDivider from '../components/WritableDivider.vue';
import StatusCheckbox from '../components/StatusCheckbox.vue';
// models
import type { COCDeriveAttributes } from '../types/character';

import { usePC } from '../hooks/useProviders';

const pc = usePC();

function updateAttr(key: keyof COCDeriveAttributes, cKey: 'now' | 'start', value: string): void {
  if (!pc || !pc.value.deriveAttributes) return;
  pc.value.deriveAttributes[key][cKey] = value ? value : undefined;
}

const sanMax = computed(() => {
  if (!pc) return '';
  if (!pc.value.attributes.pow) return '';
  const cthulu = pc.value.skillPoints.find(([name]) => {
    return name === '克苏鲁神话';
  })?.[1];
  const { p = 0, i = 0, g = 0 } = cthulu || {};
  const cthuluPoint = cthulu ? p + i + g : 0;
  return `${99 - cthuluPoint}`;
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
          label="最大理智"
          :modelValue="sanMax"
          readonly
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
    <PaperSection title="身体状态">
      <div class="body-status-section">
        <StatusCheckbox label="重伤" />
        <StatusCheckbox label="昏迷" />
        <StatusCheckbox label="濒死" />
        <StatusCheckbox label="死亡" />
      </div>
    </PaperSection>
    <PaperSection
      title="精神状态"
      class="col-0"
    >
      <div class="san-status-section">
        <StatusCheckbox label="临时疯狂" />
        <StatusCheckbox label="永久疯狂" />
        <StatusCheckbox label="不定期疯狂" />
      </div>
    </PaperSection>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/themes/light/theme-part-paper' as paper;

.computed-sections {
  @include paper.tokens;
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

.body-status-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: var(--color-paper-ink);

  & > .status-checkbox {
    background-color: var(--color-paper-status-bg);
    &:nth-child(2),
    &:nth-child(3) {
      background-color: var(--color-paper-status-bg-alt);
    }
  }
}
.san-status-section {
  display: grid;
  grid-template:
    '1 2'
    '3 .' / 6fr 5fr;
  color: var(--color-paper-ink);

  & > .status-checkbox {
    background-color: var(--color-paper-san-bg);
    &:nth-child(2),
    &:nth-child(3) {
      background-color: var(--color-paper-san-bg-alt);
    }
  }
}
</style>
