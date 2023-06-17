<script setup lang="ts">
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
    <input
      type="checkbox"
      v-if="checkable"
      class="skill-td-input-checkbox"
      :checked="checked"
      @change="$emit('check', ($event.target as HTMLInputElement).checked)"
    />
    <input
      type="text"
      class="skill-td-input-input"
      :value="value"
      @input="$emit('input', ($event.target as HTMLInputElement).value)"
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
  padding: 0 0.3em;
}
.skill-td-input-input {
  flex: 1 1 0;
  width: 0;
  font-size: 1em;
  background-color: transparent;
  text-align: center;
  &:hover,
  &:focus {
    box-shadow: 0 0 1px 1px #702ad2;
  }
}
.skill-td-input-checkbox {
  --color-line: #8a8a8a;

  flex: 0 0 auto;
  width: 0.9em;
  height: 0.9em;
  font-size: 0.9em;
  line-height: 1;
  border: 1px solid var(--color-line);
  background-color: var(--color-white);
  margin-right: 0.1em;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: var(--color-black);
  }
  &:active {
    background-color: var(--color-background-mute);
  }

  &:checked::before {
    content: '✓';
  }
}
</style>
