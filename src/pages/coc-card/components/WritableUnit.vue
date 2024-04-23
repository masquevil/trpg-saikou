<script setup lang="ts">
interface Props {
  label: string;
  modelValue?: string;
  readonly?: boolean;
}
withDefaults(defineProps<Props>(), {
  modelValue: '',
  readonly: false,
});

interface Emits {
  (event: 'update:modelValue', modelValue: string): void;
}
defineEmits<Emits>();
</script>

<template>
  <div class="writable-unit">
    <div class="label">{{ label }}</div>
    <input
      type="text"
      class="input"
      :value="modelValue"
      :readonly="readonly"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
  </div>
</template>

<style scoped lang="scss">
.writable-unit {
  --local-var-gap: var(--writable-unit-gap, 0.2em);
  --local-var-label-font-size: var(--writable-unit-label-font-size, 0.8em);
  --local-var-input-padding: var(--writable-unit-input-padding, 0.2em);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--local-var-gap);
  line-height: 1;

  --color-line: #b2b2b2;
}
.label {
  font-size: var(--local-var-label-font-size);
}

.input {
  flex: 1 1 auto;
  width: 4em;
  border-bottom: 1px solid var(--color-line);
  padding: var(--local-var-input-padding);
  font-size: 1em;
  text-align: center;

  &:hover,
  &:focus {
    border-color: var(--color-black);
  }
}
</style>
