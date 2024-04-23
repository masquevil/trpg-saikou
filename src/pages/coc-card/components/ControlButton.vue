<script setup lang="ts">
import type { Component } from 'vue';

import ActionButton from './ActionButton.vue';

interface Props {
  label: string;
  icon: Component;
}
defineProps<Props>();

interface Emits {
  (event: 'click', evt?: MouseEvent): void;
}
defineEmits<Emits>();
</script>

<template>
  <ActionButton
    class="control-button"
    @click="$emit('click', $event)"
  >
    <el-icon size="0.9em">
      <component :is="icon" />
    </el-icon>
    {{ label }}
  </ActionButton>
</template>

<style scoped lang="scss">
.control-button {
  flex: 0 1 160px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
