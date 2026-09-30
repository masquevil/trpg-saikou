<template>
  <main class="page">
    <h1 class="code">404</h1>
    <h2 class="subtitle">你可能使用了错误的地址</h2>
    <p class="hint">
      👀 我猜你在找
      <router-link
        class="link"
        :to="{ name: 'coc-card' }"
      >
        COC 7版 车卡工具
      </router-link>
    </p>
    <p class="hint">
      你也可以
      <router-link
        class="link"
        :to="{ name: 'home' }"
      >
        回到首页
      </router-link>
      看看所有工具
    </p>
  </main>
</template>

<style scoped lang="scss">
.page {
  max-width: 720px;
  margin: 0 auto;
  padding: 48px 24px 60px;
  text-align: center;
}

.code {
  font-size: 120px;
  line-height: 1;
  margin-bottom: 40px;
  color: var(--color-heading);
}

.subtitle {
  font-size: 24px;
  color: var(--color-heading);
  margin-bottom: 24px;
}

.hint {
  line-height: 2;
  color: var(--color-text);
}

@media screen and (max-width: 720px) {
  .code {
    font-size: 88px;
    margin-bottom: 28px;
  }

  .subtitle {
    font-size: 20px;
  }
}
</style>
