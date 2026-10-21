<script setup lang="ts">
import { Lollipop } from '@element-plus/icons-vue';

interface Emits {
  (event: 'click', evt?: MouseEvent): void;
}
defineEmits<Emits>();
</script>

<template>
  <button
    class="button-default rand-button"
    @click="$emit('click', $event)"
  >
    <el-icon size="1.3em">
      <Lollipop />
    </el-icon>
  </button>
</template>

<style scoped lang="scss">
.rand-button {
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
}
</style>
