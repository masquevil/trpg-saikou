<script setup lang="ts">
import { MagicStick } from '@element-plus/icons-vue';

import type { Message } from '../types/message';
import MessageCommon from './MessageCommon.vue';

interface Props {
  sailer: {
    displayedName: string;
    textAvatar: string;
    avatar?: string;
  };
  message: Message;
}
defineProps<Props>();
</script>

<template>
  <!-- simple -->
  <MessageCommon
    v-if="message.type === 's'"
    v-bind="sailer"
  >
    <div class="message-content">{{ message.text }}</div>
  </MessageCommon>
  <!-- system -->
  <div
    v-else-if="message.type === 'system'"
    class="message-card-system"
  >
    {{ message.text }}
  </div>
  <!-- dice -->
  <MessageCommon
    v-else-if="message.type === 'd'"
    v-bind="sailer"
  >
    <div class="dice-message-content">
      <span class="dice-message-icon">
        <el-icon><MagicStick /></el-icon>
      </span>
      <span>投掷 {{ message.pkey }} 的结果：</span>
      <span>{{ message.text || message.res }}</span>
    </div>
  </MessageCommon>
</template>

<style scoped lang="scss">
.message-content {
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 20px;
  background-color: var(--color-black);
}

.message-card-system {
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  text-align: center;
}

.dice-message-content {
  margin-top: 4px;
  font-size: 14px;
  line-height: 20px;
}
.dice-message-icon {
  display: inline-flex;
  margin: 3px 4px 0 0;
  line-height: 0;
  vertical-align: top;
}
</style>
