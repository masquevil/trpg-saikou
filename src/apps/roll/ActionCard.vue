<script setup lang="ts">
import type { VNodeRef } from 'vue';

interface Props {
  setRef?: VNodeRef;
  title: string;
}
defineProps<Props>();
</script>

<template>
  <div
    class="action-card"
    :ref="setRef"
  >
    <div class="action-card-title">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.action-card {
  flex: 0 0 auto;
  width: 600px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
}
.action-card-title {
  font-size: 16px;
}
</style>
