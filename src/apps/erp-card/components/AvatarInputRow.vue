<script setup lang="ts">
import { reactive } from 'vue';

interface Props {
  label: string;
  placeholder?: string;
  char?: number;
  modelValue?: string;
  readonly?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  char: 5,
  modelValue: '',
});

interface Emits {
  (event: 'update:modelValue', modelValue: string): void;
  (event: 'focus'): void;
  (event: 'blur'): void;
}
defineEmits<Emits>();

const inputStyle = reactive({
  width: `calc(${props.char}em + 4px)`,
});
</script>

<template>
  <div class="avatar-input-row">
    <div class="label">{{ label }}</div>
    <input
      type="text"
      class="input"
      :style="inputStyle"
      :placeholder="placeholder"
      :readonly="readonly"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    />
  </div>
</template>

<style scoped lang="scss">
.avatar-input-row {
  display: flex;
  align-items: center;
  gap: 2px;
  line-height: 1;

  --color-line: #b2b2b2;
  --color-line-hover: #ddd;
  --color-placeholder: rgba(255, 255, 255, 0.5);
}

.label {
  padding-top: 0.2em;
}

.input {
  flex: 1 1 auto;
  border-bottom: 1px solid var(--color-line);
  padding: 2px;
  font-size: 1em;
  color: var(--color-text);
  background-color: transparent;

  &:hover,
  &:focus {
    border-color: var(--color-line-hover);
  }
  &:read-only {
    cursor: not-allowed;
  }

  &::placeholder {
    color: var(--color-placeholder);
  }
}
</style>
