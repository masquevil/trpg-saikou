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
      <div
        v-if="cardData.avatar"
        class="avatar-container"
      >
        <img
          :src="cardData.avatar"
          :alt="`${cardData.name} 头像`"
          class="npc-avatar"
        />
      </div>
      <div class="header-info">
        <h3 class="npc-name">{{ cardData.name }}</h3>
        <div class="npc-role">{{ cardData.role }}</div>
      </div>
    </div>

    <div class="card-body">
      <div class="section">
        <p class="summary">{{ cardData.summary }}</p>
      </div>

      <!-- 渲染所有自定义字段 -->
      <div
        v-for="field in customFields"
        :key="field.key"
        class="section"
      >
        <h4 class="section-title">{{ field.key }}</h4>
        <div class="custom-content">
          <pre
            v-if="
              typeof field.value === 'string' &&
              (field.value.includes('\n- ') || field.value.includes('\n* '))
            "
            class="custom-text"
            >{{ field.value }}</pre
          >
          <p
            v-else
            class="custom-text"
          >
            {{ formatCustomContent(field.value) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.npc-card {
  background: white;
  border: 1px solid #999;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: none;
  page-break-inside: avoid;
  break-inside: avoid;

  .section-title {
    font-size: 14px;
    font-weight: 700;
    margin: 0 0 6px 0;
    color: #333;
  }

  .summary,
  .custom-text {
    font-size: 12px;
    white-space: pre-wrap;
  }
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.avatar-container {
  flex-shrink: 0;
  margin-right: 12px;
}

.npc-avatar {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #fff;
}

.header-info {
  flex: 1;
}

.npc-name {
  margin: 0 0 4px;
  font-size: 16px;
  font-weight: bold;
}

.npc-role {
  font-size: 12px;
  opacity: 0.9;
}

.card-body {
  padding: 12px;
}

.section {
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
}

.section-title {
  margin: 0 0 8px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.summary {
  margin: 0;
  line-height: 1.5;
  color: #444;
  white-space: pre-wrap;
}

.custom-content {
  .custom-text {
    margin: 0;
    line-height: 1.5;
    color: #444;

    &.pre {
      white-space: pre-wrap;
      font-family: monospace;
    }
  }
}
</style>
