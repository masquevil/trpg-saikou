<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

// preview images
import cocCardPreview from '@/assets/images/tools-preview/coc-card.jpg';
import recordPreview from '@/assets/images/tools-preview/record.png';
import kpAdsPreview from '@/assets/images/tools-preview/kp-ads.png';
import timerPreview from '@/assets/images/tools-preview/timer.png';
import rollPreview from '@/assets/images/tools-preview/roll.png';

interface AppConfig {
  key: string;
  name: string;
  to: RouteLocationRaw;
  preview?: string;
}

const appConfigs: Record<'online' | 'offline', AppConfig[]> = {
  online: [
    {
      key: 'coc-card',
      name: 'COC7版车卡工具',
      to: {
        name: 'coc-card',
      },
      preview: cocCardPreview,
    },
    {
      key: 'voyage',
      name: '维哲枢纽·在线跑团（开发版）',
      to: {
        name: 'voyage',
      },
    },
    {
      key: 'timer',
      name: '计时器',
      to: {
        name: 'timer',
      },
      preview: timerPreview,
    },
    {
      key: 'roll',
      name: '投掷工具',
      to: {
        name: 'roll',
      },
      preview: rollPreview,
    },
  ],
  offline: [
    {
      key: 'kp-ads',
      name: 'KP招募PL展示器',
      to: {
        name: 'kp-ads',
      },
      preview: kpAdsPreview,
    },
    {
      key: 'erp-card',
      name: 'ERP 车卡工具（开发中）',
      to: {
        name: 'erp-card',
      },
      preview: cocCardPreview,
    },
    {
      key: 'record',
      name: '模组列表（待重构）',
      to: {
        name: 'tfg-stories',
      },
      preview: recordPreview,
    },
  ],
};
</script>

<template>
  <main class="page">
    <h1 class="heading">一些与 TRPG 相关的东西</h1>
    <h2 class="section-title">在线功能</h2>
    <div class="tools">
      <router-link
        v-for="app in appConfigs.online"
        :key="app.key"
        class="tool-card"
        :to="app.to"
      >
        <div class="tool-card-header">{{ app.name }}</div>
        <div class="tool-card-preview">
          <img
            v-if="app.preview"
            class="tool-card-preview-image"
            :src="app.preview"
            :alt="app.name"
          />
          <div
            v-else
            class="tool-card-preview-text"
          >
            {{ app.name }}
          </div>
        </div>
      </router-link>
    </div>

    <h2 class="section-title">其他功能：需要 git clone 在本地修改后才能使用的，或开发中的功能</h2>
    <div class="tools tools-offline">
      <router-link
        v-for="app in appConfigs.offline"
        :key="app.key"
        class="tool-card"
        :to="app.to"
      >
        <div class="tool-card-header">{{ app.name }}</div>
        <div class="tool-card-preview">
          <img
            v-if="app.preview"
            class="tool-card-preview-image"
            :src="app.preview"
            :alt="app.name"
          />
          <div
            v-else
            class="tool-card-preview-text"
          >
            {{ app.name }}
          </div>
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
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}
.tools-offline {
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
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
.tool-card-preview-text {
  font-size: 32px;
}
</style>
