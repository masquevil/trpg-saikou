<script setup lang="ts">
import { ref } from 'vue';

import { Bicycle } from '@element-plus/icons-vue';

// components
import ControlButton from '../../ControlButton.vue';
import BuyPointsModal from './BuyPointsModal.vue';

// models
import LA, { LAEventID, FeatureNames } from '@/plugins/51la';

const modalVisible = ref(false);

function onButtonClick() {
  modalVisible.value = true;
  LA?.track(LAEventID.FEATURE, { name: FeatureNames.F_POINT });
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

<style scoped lang="scss"></style>
