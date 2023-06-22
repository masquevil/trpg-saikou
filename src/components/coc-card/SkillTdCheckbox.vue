<script setup lang="ts">
interface Props {
  checked?: boolean;
}
withDefaults(defineProps<Props>(), {
  checked: false,
});

interface Emits {
  (event: 'change', value: boolean): void;
}
defineEmits<Emits>();
</script>

<template>
  <input
    type="checkbox"
    class="skill-td-checkbox"
    :checked="checked"
    @change="$emit('change', ($event.target as HTMLInputElement).checked)"
  />
</template>

<style scoped lang="scss">
.skill-td-checkbox {
  --color-line: #8a8a8a;

  flex: 0 0 auto;
  width: 0.9em;
  height: 0.9em;
  font-size: 1.12em;
  line-height: 1;
  border: 1px solid var(--color-line);
  background-color: var(--color-white);
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
