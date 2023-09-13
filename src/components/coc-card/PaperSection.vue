<script setup lang="ts">
interface Props {
  title?: string;
  subTitle?: string;
  centered?: boolean;
}
withDefaults(defineProps<Props>(), {
  centered: true,
});
</script>

<template>
  <div class="paper-section">
    <div
      class="header"
      :class="{
        'header-centered': centered,
      }"
    >
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
  display: flex;
  flex-direction: column;
  outline: 1pt solid var(--color-black);
}

.header {
  display: flex;
  color: white;
  background-color: var(--color-black);

  &-centered {
    justify-content: center;
  }
}
.heading {
  padding: 0.4em 0.8em;
  font-size: 1em;
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

.body {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>

<style lang="scss">
@media screen and (max-width: 1024px) {
  .papers-editing {
    .paper-section {
      flex: 1 1 auto;
      max-width: 100%;
    }
  }
}
</style>
