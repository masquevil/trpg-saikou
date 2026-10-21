<script setup lang="ts">
import type { NpcCardData, NpcSummaryData } from '../types';

interface Props {
  cardData: NpcCardData | NpcSummaryData;
}

defineProps<Props>();
</script>

<template>
  <div class="npc-card">
    <div class="card-header">
      <div class="card-header-left">
        <h3 class="npc-name">{{ cardData.name }}</h3>
        <div class="npc-role">{{ cardData.role }}</div>
        <div class="npc-summary">
          {{ cardData.summary }}
        </div>
      </div>
      <div
        v-if="cardData.avatar"
        class="card-header-right"
      >
        <img
          :src="cardData.avatar"
          :alt="`${cardData.name} 立绘`"
          class="npc-illustration"
        />
      </div>
    </div>

    <div class="card-body">
      <template v-if="'content' in cardData">
        <div
          v-for="[title, value] in cardData.content"
          :key="title"
          class="npc-info-section"
        >
          <h4 class="npc-info-section-title">{{ title }}</h4>
          <div class="npc-info-section-content">
            {{ value }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../theme' as theme;

.npc-card {
  @include theme.tokens;
  background: var(--color-npc-bg);
  max-width: 400px;
  margin: auto;
  border: 1px solid var(--color-npc-border);
  border-radius: 8px;
  overflow: hidden;
  break-inside: avoid;
  page-break-inside: avoid;
}

.card-header {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  background: linear-gradient(
    135deg,
    var(--color-npc-header-start) 0%,
    var(--color-npc-header-end) 100%
  );
  color: var(--color-npc-header-text);
}
.card-header-left {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.npc-name {
  font-size: 20px;
  font-weight: bold;
}
.npc-role {
  font-size: 12px;
  opacity: 0.8;
}
.npc-summary {
  font-size: 12px;
  line-height: 1.5;
  opacity: 0.95;
  margin-top: 16px;
  flex: 1;
  white-space: pre-wrap;

  &:empty {
    display: none;
  }
}
.card-header-right {
  flex-shrink: 0;
  width: 120px;
  height: 160px;
  background: var(--color-npc-avatar-bg);
  border-radius: 8px;
  overflow: hidden;
}
.npc-illustration {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.card-body {
  padding: 12px;

  &:empty {
    padding: 0;
    display: none;
  }
}

.npc-info-section {
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
}
.npc-info-section-title {
  margin: 0 0 8px;
  font-size: 14px;
  font-weight: 700;
  color: var(--color-npc-title);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.npc-info-section-content {
  font-size: 12px;
  line-height: 1.5;
  color: var(--color-npc-text);
  white-space: pre-wrap;
}
</style>
