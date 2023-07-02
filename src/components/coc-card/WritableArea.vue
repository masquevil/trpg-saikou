<script setup lang="ts">
import { ref, inject } from 'vue';

interface Props {
  label: string;
  rows?: number;
  placeholder?: string;
  modelValue?: string;
}
const props = withDefaults(defineProps<Props>(), {
  rows: 3,
  modelValue: '',
});

interface Emits {
  (event: 'update:modelValue', modelValue: string): void;
}
defineEmits<Emits>();

const pageData = inject<{ printing: boolean }>('pageData');
</script>

<template>
  <div class="writable-area">
    <div class="label">{{ label }}</div>
    <textarea
      class="input"
      :style="{
        textIndent: `${label.length + 0.4}em`,
      }"
      :rows="rows"
      :placeholder="pageData?.printing ? '' : placeholder"
      :value="modelValue"
      :maxlength="rows * 29 - 5"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    ></textarea>
    <div class="lines">
      <div
        class="line-row"
        v-for="row in rows"
        :key="row"
      >
        <div
          class="line-row-label"
          v-if="row === 1"
          :style="{
            width: `${label.length}em`,
          }"
        ></div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.writable-area {
  --color-line: #b2b2b2;
  --line-height: 2em;
  --padding-h: 0.4em;

  position: relative;
  line-height: 0;
}

.label {
  position: absolute;
  z-index: 10;
  font-weight: 900;
  padding: 0 calc(var(--padding-h) / 2);
  transform: translateY(calc(var(--line-height) * 0.1));
  line-height: var(--line-height);
  color: var(--color-black);
}

.input {
  width: 100%;
  padding: 0 var(--padding-h);
  transform: translateY(calc(var(--line-height) * 0.1));
  resize: none;
  border: none;
  border-radius: 0;
  font-size: 1em;
  line-height: var(--line-height);
  color: var(--color-text);
  overflow: hidden;
  word-break: break-all;

  &:hover,
  &:focus {
    border-color: var(--color-black);
    outline: none;
  }
}

.lines {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.line-row {
  display: flex;
  height: var(--line-height);
  align-items: stretch;
}
.line-row-label {
  box-sizing: content-box;
  padding-right: var(--padding-h);
}
.line {
  flex: 1 1 0;
  border-bottom: 1px solid var(--color-line);
}

@media print {
  .input::placeholder {
    display: none;
    visibility: hidden;
    color: transparent;
    opacity: 0;
  }
}
</style>
