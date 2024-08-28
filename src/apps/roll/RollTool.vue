<script setup lang="ts">
import { ref, reactive, computed } from 'vue';

import { RefreshLeft } from '@element-plus/icons-vue';

import { ThrowDiceDetailOptions } from '../../types/dice';
import { groupThrowDiceDetail, getGroupThrowDiceTitle, throwDice } from '../../utils/random';

interface Props {
  hideDiy?: boolean;
}
defineProps<Props>();

interface Result {
  title: string;
  content?: string;
  time: string;
  timestamp: number;
}

interface GroupForm {
  // input
  groupCount: number;
  options: ThrowDiceDetailOptions;
  // view data
  diceListIndex: number;
  // action
  onDiceListIndexChange: (delta: number) => void;
  onRoll: () => void;
}

const diceList = [2, 3, 4, 6, 8, 10, 12, 20, 100];

const results = ref<Result[]>([]);
const lastResult = computed(() => results.value[0]);

const group = reactive<GroupForm>({
  groupCount: 5,
  options: {
    dice: 6,
    times: 3,
  },
  diceListIndex: 3,
  onDiceListIndexChange(delta: number) {
    group.diceListIndex = (group.diceListIndex + delta + diceList.length) % diceList.length;
  },
  onRoll() {
    const resultContent = groupThrowDiceDetail(this.groupCount, this.options).text;
    results.value = [
      {
        title: getGroupThrowDiceTitle('', this.groupCount, this.options),
        content: resultContent,
        time: new Date().toLocaleTimeString(),
        timestamp: Date.now(),
      },
      ...results.value,
    ];
  },
});

const optionTitle = computed(() => {
  return getGroupThrowDiceTitle('', group.groupCount, group.options);
});

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
    <div class="action-card">
      <div class="action-card-title">简单投掷（点击即骰）</div>
      <div class="simple-dice-container">
        <div
          v-for="dice in diceList"
          :key="dice"
        >
          <el-button @click="onSimpleRoll(dice)"> D{{ dice }} </el-button>
        </div>
      </div>
    </div>
    <div
      class="action-card"
      v-if="!hideDiy"
    >
      <div class="action-card-title">自定义投掷（当前：{{ optionTitle }}）</div>
      <el-form
        label-width="auto"
        :model="group"
        @submit.prevent="() => group.onRoll()"
      >
        <el-form-item label="几组">
          <div class="action-card-row">
            <el-input
              class="col-1"
              type="number"
              v-model="group.groupCount"
              :min="1"
            />
            <el-button-group v-model="group.groupCount">
              <el-button @click="group.groupCount = 1"> 1 </el-button>
              <el-button @click="group.groupCount = 5"> 5 </el-button>
              <el-button @click="group.groupCount -= 1"> -1 </el-button>
              <el-button @click="group.groupCount += 1"> +1 </el-button>
            </el-button-group>
          </div>
        </el-form-item>
        <el-form-item label="D">
          <div class="action-card-row">
            <el-button @click="group.onDiceListIndexChange(-3)"> ← </el-button>
            <el-radio-group v-model="group.options.dice">
              <el-radio-button
                v-for="dice in diceList.slice(group.diceListIndex, group.diceListIndex + 3)"
                :key="dice"
                :label="`D${dice}`"
                :value="dice"
              />
            </el-radio-group>
            <el-button @click="group.onDiceListIndexChange(3)"> → </el-button>
          </div>
        </el-form-item>
        <el-form-item label="几颗">
          <div class="action-card-row">
            <el-input
              type="number"
              v-model="group.options.times"
              :min="1"
            >
              <template #append>
                <el-button
                  :icon="RefreshLeft"
                  @click="group.options.times = 1"
                />
              </template>
            </el-input>
            选
            <el-input
              type="number"
              placeholder="几颗最 +大/-小 的"
              :modelValue="group.options.pick"
              @update:modelValue="group.options.pick = Number($event)"
            />
          </div>
        </el-form-item>
        <el-form-item label="加值">
          <el-input
            type="number"
            v-model="group.options.plus"
          />
        </el-form-item>
        <el-button
          type="default"
          size="large"
          nativeType="submit"
        >
          投掷
        </el-button>
      </el-form>
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

.action-card {
  width: 100%;
  max-width: 600px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background-color: var(--color-bg);

  .el-form-item {
    margin-bottom: 12px;
  }
}
.action-card-title {
  font-size: 16px;
}
.action-card-row {
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
}

.simple-dice-container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 8px;
  justify-content: space-between;
}

@media screen and (max-width: 720px) {
  .action-card {
    max-width: 100%;
  }
}
</style>
