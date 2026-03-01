<script setup lang="ts">
import { Lollipop } from '@element-plus/icons-vue';

interface Emits {
  (event: 'click', evt?: MouseEvent): void;
}
defineEmits<Emits>();
</script>

<template>
  <button
    class="rand-button"
    @click="$emit('click', $event)"
  >
    <el-icon size="1.3em">
      <Lollipop />
    </el-icon>
  </button>
</template>

<style scoped lang="scss">
.rand-button {
  --color-button-bg: #fff;
  --color-button-bg-hover: #fafafa;
  --color-button-bg-active: #f5f5f5;
  --color-button-border: #b2b2b2;
  
  width: 22px;
  height: 22px;
  border: 1px solid var(--color-button-border);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 6px;
  background-color: var(--color-button-bg);

  &:hover {
    background-color: var(--color-button-bg-hover);
  }
  &:active {
    background-color: var(--color-button-bg-active);
  }
}
</style>