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
@use '@/assets/themes/light/theme-part-paper' as paper;

.status-checkbox {
  @include paper.tokens;
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
  border: 1px solid var(--color-paper-ink);
  font-size: 1em;
  line-height: 1;
  background-color: var(--color-paper-bg);
  cursor: pointer;

  &:checked::before {
    content: '✓';
  }

  .status-checkbox:hover & {
    background-color: var(--color-paper-checkbox-bg-hover);
  }
  .status-checkbox:active & {
    background-color: var(--color-paper-checkbox-bg-active);
  }
}
</style>
