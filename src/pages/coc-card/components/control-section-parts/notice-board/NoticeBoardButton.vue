<script setup lang="ts">
import { ref } from 'vue';

import { IceCream } from '@element-plus/icons-vue';

// components
import ControlButton from '../../ControlButton.vue';
import NoticeBoardModal from './NoticeBoardModal.vue';

// models
import LA, { LAEventID, FeatureNames } from '@/plugins/51la';

// const modalVisible = ref(false);
const modalVisible = ref(true);

function onButtonClick() {
  modalVisible.value = true;
  LA?.track(LAEventID.FEATURE, { name: FeatureNames.MORE_NOTICE_BOARD });
}
</script>

<template>
  <ControlButton
    label="公告栏"
    :icon="IceCream"
    @click="onButtonClick"
  />

  <NoticeBoardModal
    :isOpen="modalVisible"
    @close="modalVisible = false"
  />
</template>

<style scoped lang="scss"></style>
