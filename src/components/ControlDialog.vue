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
.control-dialog {
  max-width: 720px;
  background-color: rgba(0, 0, 0, 0.88);
  --el-dialog-width: 80%;
  --el-text-color-primary: var(--color-white);
  --color-border: #8a8a8a;
  --color-action-bg: #3a3a3a;
  --color-action-bg-hover: #444;
  --color-action-bg-active: #4b4e53;
}
</style>
