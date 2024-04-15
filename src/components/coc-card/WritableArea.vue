<script setup lang="ts">
import { usePageData } from '@/hooks/useCOCCardProviders';

interface Props {
  label: string;
  rows?: number;
  placeholder?: string;
  modelValue?: string;
  maxlength?: number;
  readonly?: boolean;
}
withDefaults(defineProps<Props>(), {
  rows: 3,
  modelValue: '',
  readonly: false,
});

interface Emits {
  (event: 'update:modelValue', modelValue: string): void;
}
defineEmits<Emits>();

const pageData = usePageData();
</script>

<template>
  <div
    class="writable-area"
    :class="{
      'printing-image': pageData?.printing,
    }"
  >
    <div class="label">{{ label }}</div>
    <textarea
      class="input"
      :style="{
        textIndent: label.length ? `${label.length + 0.4}em` : undefined,
      }"
      :rows="rows"
      :placeholder="pageData?.printing ? '' : placeholder"
      :value="modelValue"
      :maxlength="maxlength"
      :readonly="readonly"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    ></textarea>
    <div class="lines">
      <div class="line-row"></div>
      <div
        class="line-row"
        v-for="row in rows"
        :key="row"
      >
        <div
          class="line-row-label"
          v-if="row === 1 && label"
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
  --line-height: 1.66em;
  --padding-h: 0.4em;

  position: relative;
  line-height: 0;
}

.label {
  position: absolute;
  z-index: 10;
  font-weight: 900;
  padding: 0 calc(var(--padding-h) / 2);
  line-height: var(--line-height);
  color: var(--color-black);
}

.input {
  width: 100%;
  padding: 0 var(--padding-h);
  resize: none;
  border: none;
  border-radius: 0;
  font-size: 1em;
  line-height: var(--line-height);
  color: var(--color-text);
  overflow: hidden;
  font-family: inherit;
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
  transform: translateY(calc(var(--line-height) * -0.1));
  width: 100%;
  height: 100%;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.line-row {
  display: flex;
  align-items: flex-end;
}
.line-row-label {
  margin-right: var(--padding-h);
}
.line {
  flex: 1 1 0;
  height: 1px;
  border-bottom: 1px solid var(--color-line);
}

/* when print image & print */
@mixin printing-styles {
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
