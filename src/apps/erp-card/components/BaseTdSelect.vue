<script setup lang="ts">
interface Props {
  value?: string;
  options?: {
    value: string;
    label: string;
  }[];
}
withDefaults(defineProps<Props>(), {
  value: '',
});

interface Emits {
  (event: 'change', value: string): void;
}
defineEmits<Emits>();
</script>

<template>
  <select
    class="base-td-select"
    :value="value"
    @change="$emit('change', ($event.target as HTMLInputElement).value)"
  >
    <option value=""></option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<style scoped lang="scss">
.base-td-select {
  width: 100%;
  font-size: 0.88em;
  line-height: 1;
  background-color: transparent;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0 0 1px 1px #534565;
  }

  &::after {
    content: '';
    display: none;
  }
}
</style>
