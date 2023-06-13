<script setup lang="ts">
import { inject, computed, reactive } from 'vue';

import PaperSection from '@/components/PaperSection.vue';
import WritableUnit from '@/components/WritableUnit.vue';
import WritableDivider from '@/components/WritableDivider.vue';
import StatusCheckbox from '@/components/StatusCheckbox.vue';
// models
import type { COCPlayerCharacter } from '@/models/coc/character';

const pc = inject<COCPlayerCharacter>('pc');

const sanInit = computed(() => pc?.attributes.pow);
// TODO
const sanMax = computed(() => (pc?.attributes.pow ? 99 : undefined));
const HPMax = computed(() => {
  const { con, siz } = reactive(pc?.attributes || {});
  if (con && siz) return Math.floor((con + siz) / 10);
  return undefined;
});
const MPMax = computed(() =>
  pc?.attributes.pow ? pc?.attributes.pow / 5 : undefined
);
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
        <WritableUnit label="当前理智" />
        <WritableDivider />
        <WritableUnit
          label="起始理智"
          :value="`${sanInit ?? ''}`"
        />
        <WritableDivider />
        <WritableUnit
          label="最大理智"
          :value="`${sanMax ?? ''}`"
        />
      </div>
    </PaperSection>
    <PaperSection
      title="生命值"
      subTitle="HP"
    >
      <div class="units-section">
        <WritableUnit label="当前生命" />
        <WritableDivider />
        <WritableUnit
          label="最大生命"
          :value="`${HPMax ?? ''}`"
        />
      </div>
    </PaperSection>
    <PaperSection
      title="魔法值"
      subTitle="MP"
    >
      <div class="units-section">
        <WritableUnit label="当前魔法" />
        <WritableDivider />
        <WritableUnit
          label="最大魔法"
          :value="`${MPMax ?? ''}`"
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
  margin-top: 1em;
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
    background-color: #f5f5f5;
    &:nth-child(2),
    &:nth-child(3) {
      background-color: #ddd;
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

@media print {
  /* .avatar-placeholder {
    display: none;
  } */
}
</style>
