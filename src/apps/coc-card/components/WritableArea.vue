<script setup lang="ts">
import { ref, computed, nextTick, watch } from 'vue';
import { usePageData } from '../hooks/useProviders';

interface Props {
  label: string;
  modelValue?: string;
  size?: 'small' | 'base';
  rows?: number;
  placeholder?: string;
  maxlength?: number;
  readonly?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  rows: 3,
  modelValue: '',
  size: 'base',
  readonly: false,
});

interface Emits {
  (event: 'update:modelValue', modelValue: string): void;
  (event: 'oversize'): void;
}
const emit = defineEmits<Emits>();

const pageData = usePageData();

const inputStyle = computed(() => {
  const labelLength = props.label.length;
  const indent = props.size === 'small' ? labelLength / 0.8 : labelLength;
  return {
    textIndent: indent ? `${indent + 0.4}em` : undefined,
  };
});

const inputEl = ref<HTMLTextAreaElement | null>(null);
function checkOverSize(stop: boolean = false) {
  const el = inputEl.value;
  if (!el) return;
  nextTick(() => {
    if (el.scrollHeight > el.clientHeight) {
      emit('oversize');
      if (!stop) checkOverSize(true);
    }
  });
}
watch(
  () => [props.modelValue, pageData?.printing],
  () => checkOverSize(),
);
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
      :class="{
        'input-size-small': props.size === 'small',
      }"
      ref="inputEl"
      :style="inputStyle"
      :rows="rows"
      :placeholder="pageData?.printing ? '' : placeholder"
      :value="modelValue"
      :maxlength="maxlength"
      :readonly="readonly"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    ></textarea>
    <div
      class="lines"
      :class="{
        'lines-size-small': props.size === 'small',
      }"
    >
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
  overflow: auto;
  font-family: inherit;
  word-break: break-all;

  &:hover,
  &:focus {
    border-color: var(--color-black);
    outline: none;
  }
}
.input-size-small {
  font-size: 0.8em;
  padding-top: 0.25em;
  line-height: 1.48em;
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
.lines-size-small {
  padding-top: 0.25em;
  transform: none;
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
