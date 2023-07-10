<script setup lang="ts">
import { ref, watch } from 'vue';
import { CloseBold, Select } from '@element-plus/icons-vue';

interface Props {
  checked?: boolean;
  xOnFalse?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  checked: false,
  xOnFalse: false,
});

interface Emits {
  (event: 'check', value: boolean, $event: Event): void;
  (event: 'change', $event: Event): void;
}
const emit = defineEmits<Emits>();

const localChecked = ref(props.checked);

watch(
  () => props.checked,
  () => {
    localChecked.value = props.checked;
  }
);

function onChange($event: Event) {
  const value = ($event.target as HTMLInputElement).checked;
  localChecked.value = value;
  emit('check', value, $event);
  emit('change', $event);
}
</script>

<template>
  <label class="sox-checkbox">
    <el-icon size="0.9em">
      <Select v-if="localChecked" />
      <CloseBold v-if="!localChecked && xOnFalse" />
    </el-icon>
    <input
      type="checkbox"
      class="sox-checkbox-input"
      :checked="localChecked"
      @change="onChange"
    />
  </label>
</template>

<style scoped lang="scss">
.sox-checkbox {
  --color-line: #8a8a8a;
  --color-font: var(--color-black);

  font-size: 1em;
  line-height: 1em;
  width: 0.9em;
  height: 0.9em;
  display: inline-block;
  outline: 1px solid var(--color-line);
  background-color: var(--color-white);
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  color: var(--color-font);

  &:hover,
  &:focus {
    outline-color: var(--color-black);
  }
  &:active {
    background-color: var(--vt-c-white-mute);
  }
}
.sox-checkbox-input {
  visibility: hidden;
  position: absolute;
  z-index: -1;
  pointer-events: none;
}
</style>
