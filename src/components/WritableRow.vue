<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  label: string;
  hint?: string;
  placeholder?: string;
  char?: number;
  modelValue?: string;
}
const props = withDefaults(defineProps<Props>(), {
  char: 5,
  modelValue: '',
});

interface Emits {
  (event: 'update:modelValue', modelValue: string): void;
  (event: 'focus', modelValue: string): void;
  (event: 'blur', modelValue: string): void;
}
defineEmits<Emits>();

const inputStyle = ref({
  width: `${props.char}em`,
});
</script>

<template>
  <div class="writable-row">
    <div class="label">
      {{ label }}
    </div>
    <input
      type="text"
      class="input"
      :style="inputStyle"
      :placeholder="placeholder"
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
.writable-row {
  display: flex;
  align-items: flex-end;
  gap: 0.4em;
  line-height: 1;

  --color-line: #b2b2b2;
}

.label {
  padding-bottom: 0.2em;
}

.input {
  flex: 1 1 auto;
  border-bottom: 1px solid var(--color-line);
  padding: 0.2em;
  font-size: 1em;
}

@media print {
  .input {
    text-align: center;
  }
}
</style>
