<script setup lang="ts">
import { ref } from 'vue';

import { Cpu } from '@element-plus/icons-vue';

// components
import ControlButton from '../../ControlButton.vue';
import SimpleRollModal from './SimpleRollModal.vue';

// models
import LA, { LAEventID, FeatureNames } from '@/plugins/51la';

const modalVisible = ref(false);

function onButtonClick() {
  modalVisible.value = true;
  LA?.track(LAEventID.FEATURE, { name: FeatureNames.MORE_SIMPLE_ROLL });
}
</script>

<template>
  <ControlButton
    label="简易骰子"
    :icon="Cpu"
    @click="onButtonClick"
  />

  <SimpleRollModal
    :isOpen="modalVisible"
    @close="modalVisible = false"
  />
</template>

<style scoped lang="scss"></style>
