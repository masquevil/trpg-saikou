<script setup lang="ts">
import { ref } from 'vue';
// @ts-ignore
import vClickOutside from '@/directives/clickOutside';

import { usePageData } from '../hooks/useProviders';
import WritableRow from './WritableRow.vue';

interface Props {
  label: string;
  hint?: string;
  placeholder?: string;
  char?: number;
  modelValue?: string;
  readonly?: boolean;
  transitionName?: string;
  options?: string[];
}
withDefaults(defineProps<Props>(), {
  char: 5,
  modelValue: '',
});

interface Emits {
  (event: 'update:modelValue', modelValue: string): void;
  (event: 'closeOptions'): void;
}
const $emit = defineEmits<Emits>();

const pageData = usePageData();

const isOptionsShowing = ref(false);

function openOptions() {
  isOptionsShowing.value = true;
}
function closeOptions() {
  isOptionsShowing.value = false;
  $emit('closeOptions');
}
</script>

<template>
  <div
    class="writable-select"
    :class="{
      'writable-row-with-hint': !!hint,
      'printing-image': pageData?.printing,
    }"
    v-click-outside="closeOptions"
  >
    <WritableRow
      :label="label"
      :hint="hint"
      :placeholder="pageData?.printing ? '' : placeholder"
      :char="char"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      @focus="openOptions"
      :readonly="readonly"
    />
    <Transition :name="transitionName ?? 'drop-down'">
      <slot
        :showing="isOptionsShowing"
        :closeOptions="closeOptions"
      >
        <div
          v-if="isOptionsShowing"
          class="options-container"
        >
          <div
            v-for="option in options"
            :key="option"
            class="option"
            @click="
              $emit('update:modelValue', option);
              closeOptions();
            "
          >
            {{ option }}
          </div>
        </div>
      </slot>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.writable-select {
  position: relative;
}
.options-container {
  position: absolute;
  width: 100%;
  margin-top: 1em;
  border: 1px solid #777;
  padding: 0.2em 0;
  background-color: #fff;
  z-index: 1;
}
.option {
  padding: 0.4em 1em;
  cursor: pointer;
  &:hover {
    background-color: var(--color-border);
  }
}
</style>
