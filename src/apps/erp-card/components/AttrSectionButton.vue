<script setup lang="ts">
interface Emits {
  (event: 'click', evt?: MouseEvent): void;
}
defineEmits<Emits>();
</script>

<template>
  <button
    class="button-default attr-section-button"
    @click="$emit('click', $event)"
  >
    <div class="attr-section-button-text">
      <slot></slot>
    </div>
  </button>
</template>

<style scoped lang="scss">
.attr-section-button {
  padding: 0.2em 0.3em;
  border-radius: 0.2em;
  line-height: 1;
}
.attr-section-button-text {
  transform: scale(0.88);
}
</style>
