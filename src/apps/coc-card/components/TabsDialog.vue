<script setup lang="ts">
interface Props {
  modelValue?: boolean;
}
defineProps<Props>();

interface Emits {
  (event: 'update:modelValue', value: boolean): void;
}
defineEmits<Emits>();

const slots = defineSlots();
console.log('xxx slots', slots.default());
</script>

<template>
  <el-dialog
    class="tabs-dialog"
    append-to-body
    align-center
    close-on-press-escape
    :show-close="false"
    :modelValue="$props.modelValue"
    @update:modelValue="(value: boolean) => $emit('update:modelValue', value)"
  >
    <slot></slot>
  </el-dialog>
</template>

<style lang="scss">
@use '@/assets/themes/dark' as dark;

.tabs-dialog {
  @include dark.tokens;
  max-width: 720px;
  background-color: rgba(0, 0, 0, 0.88);
  display: flex;
  flex-direction: row-reverse;

  --el-dialog-width: 80%;
  --el-text-color-primary: var(--color-heading);

  .el-dialog__body {
    flex: 1;
  }
}
</style>
