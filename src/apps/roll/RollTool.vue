<script setup lang="ts">
import { ref, computed } from 'vue';
import { Plus } from '@element-plus/icons-vue';

import { ThrowDiceDetailOptions } from '../../types/dice';
import { throwDice } from '../../utils/random';

import ActionCard from './ActionCard.vue';
import DiyActionCard from './DiyActionCard.vue';
import { diceList } from './constants';
import type { DiyRollResult } from './types';

interface Props {
  hideDiy?: boolean;
}
defineProps<Props>();

interface GroupForm {
  groupCount?: number;
  options?: ThrowDiceDetailOptions;
}

const results = ref<DiyRollResult[]>([]);
const lastResult = computed(() => results.value[0]);

/* part: simple roll */
function onSimpleRoll(dice: number) {
  const result = throwDice(dice);
  results.value = [
    {
      title: `D${dice} = ${result}`,
      time: new Date().toLocaleTimeString(),
      timestamp: Date.now(),
    },
    ...results.value,
  ];
}

/* part: diy roll */
const groups = ref<GroupForm[]>([{}]);
const diyContainer = ref<HTMLElement | null>(null);
const diyCardRefs = ref<HTMLElement[]>([]);
const cardWidth = computed(() => diyCardRefs.value[0]?.offsetWidth || 0);
const gapWidth = 8;

function onDiyRoll(result: DiyRollResult) {
  results.value = [result, ...results.value];
}
function onDiyScroll(delta: number) {
  if (!diyContainer.value) return;
  diyContainer.value.scrollTo({
    left: diyContainer.value.scrollLeft + delta * (cardWidth.value + gapWidth),
    behavior: 'smooth',
  });
}
</script>

<template>
  <div class="container">
    <div class="result-section">
      <div class="result-section-title">投掷结果：</div>
      <div class="result-cards">
        <div
          class="result-card"
          v-if="lastResult"
        >
          <div class="result-card-title">{{ lastResult.title }}</div>
          <div class="result-card-content">{{ lastResult.content }}</div>
        </div>
      </div>
      <div
        class="result-section-title"
        v-if="results.length > 1"
      >
        历史投掷结果：
      </div>
      <div class="result-cards">
        <div
          class="result-card"
          v-for="result in results.slice(1)"
          :key="result.timestamp"
        >
          <div class="result-card-time">{{ result.time }}</div>
          <div class="result-card-title">{{ result.title }}</div>
          <div class="result-card-content">{{ result.content }}</div>
        </div>
      </div>
    </div>
    <ActionCard title="简单投掷（点击即骰）">
      <div class="simple-dice-container">
        <div
          v-for="dice in diceList"
          :key="dice"
        >
          <el-button @click="onSimpleRoll(dice)"> D{{ dice }} </el-button>
        </div>
      </div>
    </ActionCard>
    <div
      class="diy-container"
      v-if="!hideDiy"
      ref="diyContainer"
    >
      <DiyActionCard
        v-for="(group, index) in groups"
        :key="index"
        :setRef="(el) => diyCardRefs.push(el as HTMLElement)"
        :defaultGroupCount="group.groupCount"
        :defaultOptions="group.options"
        @roll="onDiyRoll"
        @scroll="onDiyScroll"
      />
      <div
        class="add-diy-button"
        @click="groups.push({})"
      >
        <el-icon><Plus /></el-icon>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.result-section {
  flex: 1;
  width: 100%;
  border: 1px solid var(--color-border);
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: auto;
}
.result-section-title {
  font-size: 16px;
}
.result-cards {
  flex: 0 0 auto;
  margin-bottom: 4px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  overflow-x: auto;
}
.result-card {
  flex: 0 0 auto;
  border: 1px solid var(--color-border);
  padding: 6px 12px;
  line-height: 1.4;
  font-family: monospace;
  white-space: pre-wrap;
}
.result-card-time {
  font-size: 12px;
  opacity: 0.6;
}
.result-card-title {
  font-weight: bold;
  margin-bottom: 2px;
}
.result-card-content {
  margin-left: 2px;
  opacity: 0.8;
}

.simple-dice-container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 8px;
  justify-content: space-between;
}

.diy-container {
  flex: 0 0 auto;
  width: fit-content;
  max-width: 100%;
  display: flex;
  gap: 8px;
  overflow-x: auto;
}
.add-diy-button {
  --color-bg-hover: rgba(0, 0, 0, 0.1);
  --color-bg-active: rgba(0, 0, 0, 0.18);
  flex: 0 0 auto;
  width: 80px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-bg-hover);
  }
  &:active {
    background-color: var(--color-bg-active);
  }
}
</style>
