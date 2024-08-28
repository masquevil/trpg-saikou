<script setup lang="ts">
import RollTool from './RollTool.vue';
</script>

<template>
  <main class="page">
    <RollTool />
  </main>
</template>

<style scoped lang="scss">
.page {
  max-width: 1120px;
  height: 100vh;
  margin: auto;
  padding: 12px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
