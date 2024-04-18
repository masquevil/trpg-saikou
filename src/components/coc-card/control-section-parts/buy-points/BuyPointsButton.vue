<script setup lang="ts">
import { ref } from 'vue';

import { Bicycle } from '@element-plus/icons-vue';

// components
import ControlButton from '@/components/coc-card/ControlButton.vue';
import BuyPointsModal from './BuyPointsModal.vue';

// models
import LA, { LAEventID, FeatureNames } from '@/plugins/51la';

const modalVisible = ref(false);

function onButtonClick() {
  modalVisible.value = true;
  LA.track(LAEventID.FEATURE, { name: FeatureNames.POINT_METHOD }); // FIXME: deprecated
  LA.track(LAEventID.FEATURE, { name: FeatureNames.F_POINT });
}
</script>

<template>
  <ControlButton
    label="属性点"
    :icon="Bicycle"
    @click="onButtonClick"
  />

  <BuyPointsModal
    :isOpen="modalVisible"
    @close="modalVisible = false"
  />
</template>

<style scoped lang="scss">
.ponits-button {
  --color-button-border: #b2b2b2;
  --color-button-border-hover: #9a9a9a;
  --color-button-bg: #fff;
  --color-button-bg-hover: #fafafa;
  --color-button-bg-active: #f5f5f5;
  --color-button-text: #4b4e53;
  --color-button-text-hover: #2e2e2e;
}
.ponits-button {
  border: 1px solid var(--color-button-border);
  padding: 0.2em 0.3em;
  border-radius: 0.2em;
  line-height: 1;
  color: var(--color-button-text);
  background-color: var(--color-button-bg);
  cursor: pointer;
  &:hover {
    border-color: var(--color-button-border-hover);
    background-color: var(--color-button-bg-hover);
    color: var(--color-button-text-hover);
  }
  &:active {
    background-color: var(--color-button-bg-active);
  }
}
.ponits-button-text {
  transform: scale(0.88);
}
</style>
