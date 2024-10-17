<script setup lang="ts">
import { reactive } from 'vue';

import { usePageData } from '../hooks/useProviders';

interface Props {
  label: string;
  hint?: string;
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

const pageData = usePageData();

const inputStyle = reactive({
  width: `${props.char}em`,
});
</script>

<template>
  <div
    class="writable-row"
    :class="{
      'writable-row-with-hint': !!hint,
      'printing-image': pageData?.printing,
    }"
  >
    <div
      class="label"
      v-if="label"
    >
      <div class="label-title">{{ label }}</div>
      <div
        v-if="hint"
        class="label-hint"
      >
        {{ hint }}
      </div>
    </div>
    <input
      type="text"
      class="input"
      :style="inputStyle"
      :placeholder="pageData?.printing ? '' : placeholder"
      :readonly="readonly"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
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
.writable-row-with-hint {
  & .label {
    margin: 0.3em 0;
  }
}

.label {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.label-title {
  padding-top: 0.2em;
}
.label-hint {
  /* font-size: 0.6em; */
  position: absolute;
  top: 100%;
  margin-top: -0.1em;
  transform: scale(0.6);
  transform: top center;
  white-space: nowrap;
}

.input {
  flex: 1 1 auto;
  border-bottom: 1px solid var(--color-line);
  padding: 0.2em;
  font-size: 1em;

  &:hover,
  &:focus {
    border-color: var(--color-black);
  }
  &:read-only {
    cursor: not-allowed;
  }
}

/* when print image & print */
@mixin printing-styles {
  .input {
    text-align: center;
  }
  .input::placeholder {
    display: none;
    visibility: hidden;
    color: transparent;
    opacity: 0;
  }
}
.printing-image {
  @include printing-styles;
}
@media print {
  @include printing-styles;
}
</style>
