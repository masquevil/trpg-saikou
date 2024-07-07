<script setup lang="ts">
import { ref, computed } from 'vue';
import { useIntervalFn } from '@vueuse/core';
import speak from './speak';

const settingMinute = ref();
const settingSecond = ref();
const workingTime = ref(0);
const speedUpSecond = ref();
const stopTip = ref();

const speakSpeeds = {
  slow: 1,
  normal: 1.2,
  fast: 1.4,
};

function getTimeInfo(time: number) {
  const minute = Math.floor(time / 60);
  const second = time % 60;
  return { minute, second };
}
function getSpeekTime(minute: number, second: number) {
  return `${minute ? `${minute}分` : ''}${second ? `${second}秒` : '钟'}`;
}
function getDisplayTime(minute: number, second: number) {
  return `${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`;
}

const workingTimeInfo = computed(() => {
  return {
    minute: Math.floor(workingTime.value / 60),
    second: workingTime.value % 60,
  };
});
const speekWorkingTime = computed(() => {
  return getSpeekTime(workingTimeInfo.value.minute, workingTimeInfo.value.second);
});
const displayWorkingTime = computed(() => {
  return getDisplayTime(workingTimeInfo.value.minute, workingTimeInfo.value.second);
});

const { isActive, pause, resume } = useIntervalFn(
  () => {
    workingTime.value -= 1;
    if (workingTime.value <= 0) {
      workingTime.value = 0;
      speak(stopTip.value || '计时结束', { rate: speakSpeeds.normal });
      pause();
    } else if (workingTime.value % 60 === 0) {
      speak(`剩余${speekWorkingTime.value}`, { rate: speakSpeeds.normal });
    } else if (workingTime.value === 30) {
      speak(`剩余${speekWorkingTime.value}`, { rate: speakSpeeds.normal });
    } else if (workingTime.value === 10) {
      speak(`${speekWorkingTime.value}`, { rate: speakSpeeds.normal });
    } else if (workingTime.value <= 3) {
      speak(`${workingTime.value}`, { rate: speakSpeeds.fast });
    }
  },
  1000,
  { immediate: false },
);

function onSetMinute() {
  if (isNaN(settingMinute.value) && isNaN(settingSecond.value)) {
    return speak('请输入数字', { rate: speakSpeeds.normal });
  }
  const time = (settingMinute.value || 0) * 60 + (settingSecond.value || 0);
  if (time <= 0) {
    return speak('请大于0', { rate: speakSpeeds.normal });
  }
  const { minute, second } = getTimeInfo(time);
  const speekTime = getSpeekTime(minute, second);
  speak(`开始计时${speekTime}`, { rate: speakSpeeds.fast });
  workingTime.value = time;
  resume();
}
function onSpeedUp() {
  const time = Number(speedUpSecond.value);
  if (isNaN(time)) {
    return speak('请输入数字', { rate: speakSpeeds.normal });
  }
  workingTime.value -= time;
  speak(`剩余${speekWorkingTime.value}`, { rate: speakSpeeds.fast });
}
function onPauseOrResume() {
  if (isActive.value) {
    pause();
    speak('暂停计时', { rate: speakSpeeds.normal });
  } else {
    resume();
    speak(`恢复计时${speekWorkingTime.value}`, { rate: speakSpeeds.fast });
  }
}
function onStop() {
  workingTime.value = 0;
  speak('停止计时', { rate: speakSpeeds.normal });
  pause();
}
</script>

<template>
  <main class="page">
    <div class="timer">
      <div>{{ displayWorkingTime }}</div>
    </div>
    <div class="action-row">
      <form
        class="action-card"
        @submit.prevent="onSetMinute"
      >
        <div class="action-card-title">设置倒计时</div>
        <div class="action-card-action">
          <el-input
            type="number"
            size="large"
            v-model="settingMinute"
            placeholder="输入分钟数"
          />
          <el-input
            type="number"
            size="large"
            v-model="settingSecond"
            placeholder="输入秒数"
          />
          <el-button
            type="default"
            size="large"
            nativeType="submit"
          >
            开始计时
          </el-button>
        </div>
      </form>
      <form
        class="action-card"
        @submit.prevent="onSpeedUp"
      >
        <div class="action-card-title">为倒计时加速</div>
        <div class="action-card-action">
          <el-input
            type="number"
            size="large"
            v-model="speedUpSecond"
            placeholder="输入秒数"
          />
          <el-button
            type="default"
            size="large"
            nativeType="submit"
          >
            立刻加速
          </el-button>
        </div>
      </form>
      <div class="action-card">
        <div class="action-card-title">倒计时控制器</div>
        <div class="action-card-action">
          <el-input
            type="string"
            size="large"
            v-model="stopTip"
            placeholder="计时结束后的提示"
          />
          <el-button
            type="default"
            size="large"
            :disabled="workingTime <= 0"
            @click="onPauseOrResume"
          >
            <template v-if="workingTime <= 0">计时已停止</template>
            <template v-else>{{ isActive ? '暂停' : '恢复' }}</template>
          </el-button>
          <el-button
            type="default"
            size="large"
            v-if="workingTime > 0"
            :style="{ marginLeft: '0' }"
            @click="onStop"
          >
            停止
          </el-button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.page {
  max-width: 1120px;
  margin: auto;
  padding: 12px;
  font-size: 14px;
}

.timer {
  --timer-wide-height: calc(100vh - 100px - 48px);
  --timer-compact-height: calc(80vw - 40px);
  --timer-height: min(var(--timer-wide-height), var(--timer-compact-height));

  margin-bottom: 12px;
  width: 100%;
  height: var(--timer-height);
  font-size: min(var(--timer-height), 30vw);
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.action-row {
  display: flex;
  align-items: center;
  gap: 12px;
}
.action-card {
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background-color: var(--color-bg);
}
.action-card-title {
  font-size: 16px;
}
.action-card-action {
  display: flex;
  align-items: center;
  gap: 8px;
}

@media screen and (max-width: 720px) {
  .action-row {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  .action-card {
    max-width: 100%;
  }
}
</style>
