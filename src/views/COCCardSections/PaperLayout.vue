<script setup lang="ts">
import type { VNodeRef } from 'vue';

import { usePageData } from '@/hooks/useCOCCardProviders';

const pageData = usePageData();

interface Props {
  setRef?: VNodeRef;
}
withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div
    class="paper theme-light"
    :class="{
      'printing-image': pageData?.printing,
    }"
  >
    <div
      class="paper-content"
      :ref="setRef"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.paper {
  /* --base-size: 3.2mm; */
  font-size: var(--base-size, 15px); // 3.2mm * n
  width: 65.625em; // 210mm / 3.2mm
  height: 92.8125em; // 297mm / 3.2mm
}
.paper-content {
  box-sizing: border-box;
  padding: 1.5em 1.8em;
  width: 100%;
  height: 100%;
  color: var(--color-text);
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.6em;
}
</style>
