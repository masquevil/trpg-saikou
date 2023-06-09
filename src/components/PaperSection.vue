<script setup lang="ts">
import { reactive } from 'vue';

interface Props {
  title: string;
  subTitle?: string;
  centered?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  centered: true,
});
const { title, subTitle, centered } = reactive(props);
</script>

<template>
  <div class="paper-section">
    <div class="header" :class="{
      'header-centered': centered,
    }">
      <slot name="header">
        <h1 class="heading">
          <span class="title">{{ title }}</span>
          <span class="subtitle">{{ subTitle }}</span>
        </h1>
      </slot>
    </div>
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.paper-section {
  border: 1px solid var(--color-black);
}

.header {
  padding: 0.4em 0.8em;
  display: flex;
  color: white;
  background-color: var(--color-black);

  &-centered {
    justify-content: center;
  }
}

.heading {
  line-height: 1;
  display: flex;
  gap: 0.4em;
  align-items: baseline;
}

.title {
  font-size: 1.15em;
}

.subtitle {
  font-size: 0.9em;
}
</style>
