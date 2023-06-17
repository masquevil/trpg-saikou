<script setup lang="ts">
interface Props {
  label?: string;
  checked?: boolean;
}
withDefaults(defineProps<Props>(), {
  checked: false,
});
</script>

<template>
  <label class="status-checkbox">
    <input
      type="checkbox"
      class="checkbox"
      :checked="checked"
    />
    <div class="label">{{ label }}</div>
  </label>
</template>

<style scoped lang="scss">
.status-checkbox {
  padding: 0.35em;
  display: flex;
  gap: 0.4em;
  line-height: 1;
  cursor: pointer;
}
.label {
  font-size: var(--local-var-label-font-size);
}

.checkbox {
  width: 1em;
  height: 1em;
  border: 1px solid var(--color-black);
  font-size: 1em;
  line-height: 1;
  background-color: var(--color-white);
  cursor: pointer;

  &:checked::before {
    content: '✓';
  }

  .status-checkbox:hover & {
    background-color: #efe8f8;
  }
  .status-checkbox:active & {
    background-color: #e8dcf8;
  }
}
</style>
