<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import type { VNodeRef } from 'vue';
import { RefreshLeft, DArrowRight, DArrowLeft } from '@element-plus/icons-vue';

import { ThrowDiceDetailOptions } from '../../types/dice';
import { groupThrowDiceDetail, getGroupThrowDiceTitle } from '../../utils/random';

import ActionCard from './ActionCard.vue';
import { diceList } from './constants';
import type { DiyRollResult } from './types';

interface Props {
  setRef?: VNodeRef;
  defaultGroupCount?: number;
  defaultOptions?: ThrowDiceDetailOptions;
}
const props = defineProps<Props>();

interface Emits {
  (event: 'roll', result: DiyRollResult): void;
  (event: 'scroll', delta: number): void;
}
const emit = defineEmits<Emits>();

const { defaultGroupCount = 5, defaultOptions = { dice: 6, times: 3 } } = props;
const groupCount = ref(defaultGroupCount);
const options = reactive(defaultOptions);
const diceListIndex = ref(3);

function onDiceListIndexChange(delta: number) {
  diceListIndex.value = (diceListIndex.value + delta + diceList.length) % diceList.length;
}

function handleRoll() {
  const resultContent = groupThrowDiceDetail(groupCount.value, options).text;
  const result = {
    title: getGroupThrowDiceTitle('', groupCount.value, options),
    content: resultContent,
    time: new Date().toLocaleTimeString(),
    timestamp: Date.now(),
  };
  emit('roll', result);
}

const optionTitle = computed(() => {
  return getGroupThrowDiceTitle('', groupCount.value, options);
});
</script>

<template>
  <ActionCard
    class="diy-card-container"
    :title="`自定义投掷（当前：${optionTitle}）`"
    :setRef="setRef"
  >
    <el-form
      label-width="auto"
      @submit.prevent="handleRoll"
    >
      <el-form-item label="几组">
        <div class="card-row">
          <el-input
            class="col-1"
            type="number"
            v-model="groupCount"
            :min="1"
          />
          <el-button-group v-model="groupCount">
            <el-button @click="groupCount = 1"> 1 </el-button>
            <el-button @click="groupCount = 5"> 5 </el-button>
            <el-button @click="groupCount -= 1"> -1 </el-button>
            <el-button @click="groupCount += 1"> +1 </el-button>
          </el-button-group>
        </div>
      </el-form-item>
      <el-form-item label="D">
        <div class="card-row">
          <el-button @click="onDiceListIndexChange(-3)"> ← </el-button>
          <el-radio-group v-model="options.dice">
            <el-radio-button
              v-for="dice in diceList.slice(diceListIndex, diceListIndex + 3)"
              :key="dice"
              :label="`D${dice}`"
              :value="dice"
            />
          </el-radio-group>
          <el-button @click="onDiceListIndexChange(3)"> → </el-button>
        </div>
      </el-form-item>
      <el-form-item label="几颗">
        <div class="card-row">
          <el-input
            type="number"
            v-model="options.times"
            :min="1"
          >
            <template #append>
              <el-button
                :icon="RefreshLeft"
                @click="options.times = 1"
              />
            </template>
          </el-input>
          选
          <el-input
            type="number"
            placeholder="几颗最 +大/-小 的"
            :modelValue="options.pick"
            @update:modelValue="options.pick = Number($event)"
          />
        </div>
      </el-form-item>
      <el-form-item label="加值">
        <el-input
          type="number"
          v-model="options.plus"
        />
      </el-form-item>
      <div class="footer">
        <el-button
          type="default"
          size="large"
          nativeType="submit"
        >
          投掷
        </el-button>
        <div class="footer-hint">
          <el-button
            type="default"
            @click="() => emit('scroll', -1)"
            :icon="DArrowLeft"
            circle
          />
          <div>可横向滚动</div>
          <el-button
            type="default"
            @click="() => emit('scroll', 1)"
            :icon="DArrowRight"
            circle
          />
        </div>
      </div>
    </el-form>
  </ActionCard>
</template>

<style scoped lang="scss">
.diy-card-container {
  .el-form-item {
    margin-bottom: 12px;
  }
}
.card-row {
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
}
.footer {
  display: flex;
  gap: 8px;
  align-items: flex-end;
  justify-content: space-between;
}
.footer-hint {
  display: flex;
  align-items: center;
  gap: 4px;
  opacity: 0.6;
}
</style>
