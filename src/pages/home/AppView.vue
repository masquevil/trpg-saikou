<script setup lang="ts">
// preview images
import cocCardPreview from '@/assets/images/tools-preview/coc-card.jpg';
import recordPreview from '@/assets/images/tools-preview/record.png';

const appsOnline = [
  {
    key: 'coc-card',
    name: 'COC7版车卡工具',
    path: '/coc-card',
    preview: cocCardPreview,
  },
];

const appsOffline = [
  {
    key: 'record',
    name: '听枫馆模组列表（短期内不再维护）',
    path: '/stories',
    preview: recordPreview,
  },
];
</script>

<template>
  <main class="page">
    <h1 class="heading">一些与 TRPG 相关的东西</h1>
    <h2 class="section-title">在线功能</h2>
    <div class="tools">
      <router-link
        v-for="app in appsOnline"
        :key="app.key"
        class="tool-card"
        :to="app.path"
      >
        <div class="tool-card-header">{{ app.name }}</div>
        <div class="tool-card-preview">
          <img
            class="tool-card-preview-image"
            :src="app.preview"
            :alt="app.name"
          />
        </div>
      </router-link>
    </div>

    <h2 class="section-title">需要 git clone 在本地修改后才能使用的功能</h2>
    <div class="tools">
      <router-link
        v-for="app in appsOffline"
        :key="app.key"
        class="tool-card"
        :to="app.path"
      >
        <div class="tool-card-header">{{ app.name }}</div>
        <div class="tool-card-preview">
          <img
            class="tool-card-preview-image"
            :src="app.preview"
            :alt="app.name"
          />
        </div>
      </router-link>
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
  margin: 0 0 10px;
}

.section-title {
  font-size: 16px;
  color: var(--color-heading);
  margin: 28px 0 4px;
}

.tools {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}
.tool-card {
  border: 1px solid var(--color-section-border);
  border-radius: 4px;
  overflow: hidden;
  background-color: var(--color-section-bg);
  color: var(--color-white);
  cursor: pointer;
  transition: all 0.2s;
}
.tool-card:hover {
  box-shadow: 2px 2px 8px var(--color-section-shadow);
  transform: translate(-1px, -1px);
}
.tool-card-header {
  padding: 8px 12px;
  border-bottom: 1px solid var(--color-section-border);
  background-color: var(--color-section-header-bg);
  color: var(--color-white);
  font-size: 16px;
}
.tool-card-preview {
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 4 / 3;
}
.tool-card-preview-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
