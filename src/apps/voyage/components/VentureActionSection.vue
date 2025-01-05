<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';
import { throwDice, throwDiceDetail } from '@/utils/random';

import { throwDiceMetrics } from '../utils/throwDice';

interface Emits {
  (event: 'message', message: string): void;
  (event: 'dice', pkey: string, result: number, text?: string): void;
}
const emit = defineEmits<Emits>();

const input = ref('');
const inputEl = ref<HTMLTextAreaElement | null>(null);
const diceList = [2, 3, 4, 6, 8, 10, 12, 20, 100];
const showingMetric = ref(throwDiceMetrics[0]);

function handleSubmitMessage() {
  if (!input.value) return;
  emit('message', input.value);
  input.value = '';
}
function handleEnter() {
  input.value = `${input.value}\n`;
  nextTick(() => {
    if (inputEl.value) {
      inputEl.value.scrollTop = inputEl.value.scrollHeight;
    }
  });
}

function onSimpleRoll(dice: number) {
  const result = throwDice(dice);
  emit('dice', `D${dice}`, result);
}

function onPresetRoll() {
  const result = throwDiceDetail({
    ...showingMetric.value.param,
    align: false,
  });
  emit('dice', showingMetric.value.key, result.result, result.text);
}

function onChangeMetric(key: string) {
  showingMetric.value = throwDiceMetrics.find((metric) => metric.key === key)!;
}

watch(input, () => {
  nextTick(() => {
    if (!inputEl.value) return;
    inputEl.value.style.height = 'auto';
    let height = inputEl.value.scrollHeight + 2;
    height = Math.max(height, 38);
    height = Math.min(height, 200);
    inputEl.value.style.height = `${height}px`;
  });
});
</script>

<template>
  <div class="action-section">
    <div class="dice-row">
      <el-button
        v-for="dice in diceList"
        :key="dice"
        size="small"
        @click="onSimpleRoll(dice)"
      >
        D{{ dice }}
      </el-button>
      <el-dropdown
        split-button
        size="small"
        placement="top-end"
        trigger="click"
        :show-timeout="0"
        :hide-timeout="0"
        @click="onPresetRoll"
        @command="onChangeMetric"
      >
        {{ showingMetric.key }}
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="metric in throwDiceMetrics"
              :key="metric.key"
              :command="metric.key"
              :disabled="metric.key === showingMetric.key"
            >
              {{ metric.key }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="input-group">
      <textarea
        type="text"
        class="message-input"
        :rows="1"
        v-model="input"
        ref="inputEl"
        @keydown.enter.exact.prevent="handleSubmitMessage"
        @keydown.alt.enter="handleEnter"
      ></textarea>
      <button
        class="message-button"
        @click="handleSubmitMessage"
      >
        发送
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.action-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
}

.dice-row {
  margin-bottom: 8px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  .el-button {
    margin-left: 0;
  }
}

.input-group {
  width: 100%;
  display: flex;
}
.message-input {
  flex: 1 1 auto;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 20px;
  border: 1px solid var(--color-border);
  border-right: none;
  background-color: var(--color-bg);
  outline: none;
  resize: none;

  &:hover,
  &:focus {
    border-color: var(--color-border-hover);
  }
}
.message-button {
  padding: 8px 24px;
  font-size: 16px;
  line-height: 1;
  background-color: var(--color-border);
  cursor: pointer;

  &:hover {
    background-color: var(--color-border-hover);
  }
}
</style>
