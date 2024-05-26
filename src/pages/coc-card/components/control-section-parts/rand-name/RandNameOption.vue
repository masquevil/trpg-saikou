<script setup lang="ts">
interface Props {
  label: string;
}
defineProps<Props>();

interface Emits {
  (event: 'click', evt?: MouseEvent): void;
}
defineEmits<Emits>();
</script>

<template>
  <button
    class="rand-name-option"
    @click="$emit('click', $event)"
  >
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
.rand-name-option {
  --color-button-bg: #fff;
  --color-button-bg-hover: #f5f5f5;
  --color-button-bg-active: #eee;
  --color-label: #4b4e53;
}
.rand-name-option {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid #4b4e53; */
  color: var(--color-label);
  cursor: pointer;
  background-color: var(--color-background);

  &:hover {
    background-color: var(--color-button-bg-hover);
  }
  &:active {
    background-color: var(--color-button-bg-active);
  }
}
</style>
