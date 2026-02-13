<script setup lang="ts">
import { computed } from 'vue';
import type { NpcCardData } from '../types';

interface Props {
  cardData: NpcCardData;
}

const props = defineProps<Props>();

const customFields = computed(() => {
  const fields = [];
  const excludeFields = ['id', 'name', 'role', 'summary', 'avatar'];

  for (const [key, value] of Object.entries(props.cardData)) {
    if (!excludeFields.includes(key) && value) {
      fields.push({ key, value });
    }
  }

  return fields;
});

const formatCustomContent = (content: any): string => {
  if (typeof content === 'string') {
    return content;
  }
  return String(content);
};
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
      <!-- 渲染所有自定义字段 -->
      <div
        v-for="field in customFields"
        :key="field.key"
        class="npc-info-section"
      >
        <h4 class="npc-info-section-title">{{ field.key }}</h4>
        <div class="npc-info-section-content">
          {{ formatCustomContent(field.value) }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.npc-card {
  background: #fff;
  max-width: 400px;
  margin: auto;
  border: 1px solid #999;
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
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
  background: rgba(255, 255, 255, 0.1);
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
  color: #333;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.npc-info-section-content {
  font-size: 12px;
  line-height: 1.5;
  color: #444;
  white-space: pre-wrap;
}
</style>
