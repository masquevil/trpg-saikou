<script setup lang="ts">
import { computed, ref } from 'vue';

// components
import RandNameButton from './RandNameButton.vue';
import RandNameOption from './RandNameOption.vue';

// models
import LA, { LAEventID, FeatureNames } from '@/plugins/51la';
import { usePC, usePageData } from '../../../hooks/useProviders';
import { randName } from '../../../models/name';
import { RandNameScope } from '../../../types/name';

const options: { label: string; scope: RandNameScope }[] = [
  { label: '随', scope: 'all' },
  { label: '中', scope: 'zh' },
  { label: '英', scope: 'en-zh' },
  { label: 'En', scope: 'en' },
];

const pc = usePC();
const pageData = usePageData();

const selectedOptionIndex = ref(0);
const selectedOption = computed(() => options[selectedOptionIndex.value]);

function switchOption() {
  selectedOptionIndex.value = (selectedOptionIndex.value + 1) % options.length;
}

function onButtonClick() {
  if (!pc?.value) return;
  const gender = pc.value.gender[0];
  const sex = gender === '男' ? 'male' : gender === '女' ? 'female' : 'all';
  pc.value.name = randName(selectedOption.value.scope, sex);
  LA?.track(LAEventID.FEATURE, { name: FeatureNames.PAPER_RAND_NAME });
}
</script>

<template>
  <div
    class="rand-name-row"
    :class="{
      'printing-image': pageData?.printing,
    }"
  >
    <RandNameOption
      :label="selectedOption.label"
      @click="switchOption"
    />
    <RandNameButton
      :scope="selectedOption.scope"
      @click="onButtonClick"
    />
  </div>
</template>

<style scoped lang="scss">
.rand-name-row {
  display: flex;
  gap: 2px;
  align-items: center;
}

/* when print */
.rand-name-row.printing-image {
  display: none;
}
@media print {
  .rand-name-row {
    display: none;
  }
}
</style>
