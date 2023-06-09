<script setup lang="ts">
</script>

<template>
  <main class="page">
    <h1 class="heading">一些与 TRPG 相关的东西</h1>
    <div class="links">
      <RouterLink class="link" to="/coc-card">COC车卡</RouterLink>
      <RouterLink class="link" to="/stories">听枫馆模组列表</RouterLink>
      <RouterLink class="link" to="/self">我的记录</RouterLink>
    </div>
  </main>
</template>

<style scoped lang="scss">
.page {
  max-width: 960px;
  margin: auto;
  padding: 2em;
}

.heading {
  font-size: 22px;
  color: var(--color-heading);
  margin: 0;
}

.links {
  display: flex;
  flex-direction: column;
}
</style>
