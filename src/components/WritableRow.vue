<script setup lang="ts">
import { ref, reactive } from 'vue';

interface Props {
  label: string;
  hint?: string;
  placeholder?: string;
  char?: number;
}
const props = withDefaults(defineProps<Props>(), {
  char: 5,
});
const { label, hint, placeholder, char } = reactive(props);
const inputStyle = ref({
  width: `${char}em`,
});
</script>

<template>
  <div class="writable-row">
    <div class="label">
      {{ label }}
    </div>
    <input type="text" class="input" :style="inputStyle" :placeholder="placeholder" />
  </div>
</template>

<style scoped lang="scss">
.writable-row {
  display: flex;
  align-items: flex-end;
  gap: 0.4em;
  line-height: 1;

  --color-line: #b2b2b2;
}

.label {
  padding-bottom: 0.2em;
}

.input {
  flex: 1 1 auto;
  border-bottom: 1px solid var(--color-line);
  padding: 0.2em;
  font-size: 1em;

  &::placeholder {
    color: #bbb;
  }
}
</style>
