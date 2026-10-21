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
    class="button-default rand-name-option"
    @click="$emit('click', $event)"
  >
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
.rand-name-option {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
}
</style>
