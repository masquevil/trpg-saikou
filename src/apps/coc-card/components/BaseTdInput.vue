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
@use '@/assets/themes/light/theme-part-paper' as paper;

.base-td-input {
  @include paper.tokens;
  width: 100%;
  font-size: 1em;
  background-color: transparent;
  text-align: center;

  &:hover,
  &:focus {
    /* box-shadow: 0 0 1px 1px var(--color-paper-focus-shadow); */
    border-bottom: 1px solid var(--color-paper-input-border);
    margin-bottom: -1px;
  }
}
</style>
