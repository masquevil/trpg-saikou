<script setup lang="ts">
import { computed } from 'vue';

import PaperSection from '@/components/coc-card/PaperSection.vue';
import WritableUnit from '@/components/coc-card/WritableUnit.vue';
import WritableDivider from '@/components/coc-card/WritableDivider.vue';
import StatusCheckbox from '@/components/coc-card/StatusCheckbox.vue';
// models
import type { COCDeriveAttributes } from '@/types/coc-card/character';

import { usePC } from '@/hooks/useCOCCardProviders';

const pc = usePC();

function updateAttr(
  key: keyof COCDeriveAttributes,
  cKey: 'now' | 'start',
  value: string
): void {
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
.computed-sections {
  display: flex;
  gap: 1em;
  align-items: stretch;
}

.units-section {
  padding: 0.4em 0.6em;
  display: flex;
  gap: 0.4em;
}

.body-status-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: var(--color-black);

  & > .status-checkbox {
    background-color: hsl(0, 0%, 96%);
    &:nth-child(2),
    &:nth-child(3) {
      background-color: hsl(0, 0%, 88%);
    }
  }
}
.san-status-section {
  display: grid;
  grid-template:
    '1 2'
    '3 .' / 6fr 5fr;
  color: var(--color-black);

  & > .status-checkbox {
    background-color: #f5f5f5;
    &:nth-child(2),
    &:nth-child(3) {
      background-color: #ddd;
    }
  }
}
</style>
