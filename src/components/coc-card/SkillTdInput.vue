<script setup lang="ts">
import SoxCheckbox from '../sox/SoxCheckbox.vue';
import BaseTdInput from './BaseTdInput.vue';

interface Props {
  value?: string;
  checkable?: boolean;
  checked?: boolean;
}
withDefaults(defineProps<Props>(), {
  value: '',
  checkable: false,
  checked: false,
});

interface Emits {
  (event: 'input', value: string): void;
  (event: 'check', value: boolean): void;
}
defineEmits<Emits>();
</script>

<template>
  <div class="skill-td-input">
    <SoxCheckbox
      v-if="checkable"
      class="skill-td-input-checkbox"
      :checked="checked"
      @check="(value) => $emit('check', value)"
    />
    <BaseTdInput
      class="skill-td-input-input"
      :value="value"
      @input="(val) => $emit('input', val)"
    />
  </div>
</template>

<style scoped lang="scss">
.skill-td-input {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 0.2em;
  padding: 0 0.3em;
}
.skill-td-input-checkbox {
  flex: 0 0 auto;
}
.skill-td-input-input {
  flex: 1 1 0;
  width: 0;
}
</style>
