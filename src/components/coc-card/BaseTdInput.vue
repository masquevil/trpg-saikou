<script setup lang="ts">
interface Props {
  value?: string;
}
withDefaults(defineProps<Props>(), {
  value: '',
});

interface Emits {
  (event: 'input', value: string): void;
  (event: 'focus', $event: FocusEvent): void;
}
const emit = defineEmits<Emits>();

function handleFocus(event: FocusEvent) {
  const target = event.target as HTMLInputElement;
  target.select();
  emit('focus', event);
}
</script>

<template>
  <input
    type="text"
    class="base-td-input"
    :value="value"
    @input="$emit('input', ($event.target as HTMLInputElement).value)"
    @focus="handleFocus"
  />
</template>

<style scoped lang="scss">
.base-td-input {
  width: 100%;
  font-size: 1em;
  background-color: transparent;
  text-align: center;

  &:hover,
  &:focus {
    /* box-shadow: 0 0 1px 1px #534565; */
    border-bottom: 1px solid #8a8a8a;
    margin-bottom: -1px;
  }
}
</style>
