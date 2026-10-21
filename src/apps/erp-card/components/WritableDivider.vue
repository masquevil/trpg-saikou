<script setup lang="ts"></script>

<template>
  <div class="writable-divider">
    <div class="writable-divider-line"></div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/themes/light/theme-part-paper' as paper;

.writable-divider {
  @include paper.tokens;
  --local-var-gap: var(--writable-unit-gap, 0.2em);
  --local-var-label-font-size: var(--writable-unit-label-font-size, 0.8em);
  --local-var-input-padding: var(--writable-unit-input-padding, 0.2em);
}
.writable-divider-line {
  border-right: 1px solid var(--color-paper-divider);
  height: calc(1em + var(--local-var-input-padding));
  margin-top: calc(var(--local-var-gap) + var(--local-var-label-font-size));
}
</style>
