<script setup lang="ts">
import { withDefaults } from 'vue';

interface Props {
  fullWidth?: boolean;
}
withDefaults(defineProps<Props>(), { fullWidth: false });

interface Emits {
  (event: 'click'): void;
}
defineEmits<Emits>();
</script>

<template>
  <div
    class="action-button"
    :class="{
      'action-button-full-width': fullWidth,
    }"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.action-button {
  display: inline-block;
  padding: 8px 12px;
  border-radius: 8px;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  background-color: var(--color-control-bg);
  cursor: pointer;
  font-size: 14px;
  line-height: 1;

  &:hover {
    background-color: var(--color-control-bg-hover);
  }
  &:active {
    background-color: var(--color-control-bg-active);
  }
}

.action-button-full-width {
  width: 100%;
  text-align: center;
}
</style>
