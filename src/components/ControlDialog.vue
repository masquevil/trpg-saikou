<script setup lang="ts">
interface Props {
  title: string;
  modelValue?: boolean;
}
defineProps<Props>();

interface Emits {
  (event: 'update:modelValue', value: boolean): void;
}
defineEmits<Emits>();
</script>

<template>
  <el-dialog
    class="control-dialog"
    append-to-body
    align-center
    :title="$props.title"
    :modelValue="$props.modelValue"
    @update:modelValue="(value: boolean) => $emit('update:modelValue', value)"
  >
    <slot></slot>
  </el-dialog>
</template>

<style lang="scss">
@use '@/assets/themes/dark' as dark;

.control-dialog {
  @include dark.tokens;
  max-width: 720px;
  background-color: rgba(0, 0, 0, 0.88);
  --el-dialog-width: 80%;
  --el-text-color-primary: var(--color-heading);
}
</style>
