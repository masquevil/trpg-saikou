<script setup lang="ts">
interface Emits {
  (event: 'click', evt?: MouseEvent): void;
}
defineEmits<Emits>();
</script>

<template>
  <button
    class="attr-section-button"
    @click="$emit('click', $event)"
  >
    <div class="attr-section-button-text">
      <slot></slot>
    </div>
  </button>
</template>

<style scoped lang="scss">
.attr-section-button {
  --color-button-border: #b2b2b2;
  --color-button-border-hover: #9a9a9a;
  --color-button-bg: #fff;
  --color-button-bg-hover: #fafafa;
  --color-button-bg-active: #f5f5f5;
  --color-button-text: #4b4e53;
  --color-button-text-hover: #2e2e2e;
}
.attr-section-button {
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
.attr-section-button-text {
  transform: scale(0.88);
}
</style>
