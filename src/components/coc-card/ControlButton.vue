<script setup lang="ts">
import type { DefineComponent } from 'vue';

interface Props {
  label: string;
  icon: DefineComponent;
}
defineProps<Props>();

interface Emits {
  (event: 'click'): void;
}
defineEmits<Emits>();
</script>

<template>
  <div
    class="control-button"
    @click="$emit('click', $event)"
  >
    <el-icon size="0.9em">
      <component :is="icon" />
    </el-icon>
    {{ label }}
  </div>
</template>

<style scoped lang="scss">
.control-button {
  flex: 0 1 160px;
  height: 48px;
  padding: 8px;
  border-radius: 8px;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  background-color: var(--color-control-bg);
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: var(--color-control-bg-hover);
  }
  &:active {
    background-color: var(--color-control-bg-active);
  }
}
</style>
