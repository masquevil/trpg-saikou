<script setup lang="ts">
import { CloseBold, Select } from '@element-plus/icons-vue';

interface Props {
  checked?: boolean;
  xOnFalse?: boolean;
}
withDefaults(defineProps<Props>(), {
  checked: false,
  xOnFalse: false,
});

interface Emits {
  (event: 'check', value: boolean, $event: Event): void;
  (event: 'change', $event: Event): void;
}
const emit = defineEmits<Emits>();

function onChange($event: Event) {
  emit('check', ($event.target as HTMLInputElement).checked, $event);
  emit('change', $event);
}
</script>

<template>
  <label class="sox-checkbox">
    <el-icon size="0.9em">
      <Select v-if="checked" />
      <CloseBold v-if="!checked && xOnFalse" />
    </el-icon>
    <input
      type="checkbox"
      class="sox-checkbox-input"
      :checked="checked"
      @change="onChange"
    />
  </label>
</template>

<style scoped lang="scss">
.sox-checkbox {
  --color-line: #8a8a8a;

  font-size: 1em;
  line-height: 1em;
  width: 0.9em;
  height: 0.9em;
  outline: 1px solid var(--color-line);
  background-color: var(--color-white);
  text-align: center;
  cursor: pointer;
  overflow: hidden;

  &:hover,
  &:focus {
    outline-color: var(--color-black);
  }
  &:active {
    background-color: var(--color-background-mute);
  }
}
.sox-checkbox-input {
  visibility: hidden;
  position: absolute;
  z-index: -1;
  pointer-events: none;
}
</style>
