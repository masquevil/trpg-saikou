<script setup lang="ts">
interface Props {
  fullWidth?: boolean;
  disabled?: boolean;
}
withDefaults(defineProps<Props>(), { fullWidth: false, disabled: false });

interface Emits {
  (event: 'click', evt?: MouseEvent): void;
}
defineEmits<Emits>();
</script>

<template>
  <button
    class="action-button"
    :class="{
      'action-button-full-width': fullWidth,
    }"
    @click="$emit('click', $event)"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
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
  &:disabled {
    cursor: not-allowed;
    background-color: var(--color-control-bg);
    opacity: 0.6;
  }
}

.action-button-full-width {
  width: 100%;
  text-align: center;
}
</style>
