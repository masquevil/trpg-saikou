<script setup lang="ts">
import { reactive } from 'vue';

// types & constants
import type { Period } from '../types/story';
import { periodTexts } from '../models/story';

interface Props {
  period: Period;
  welcome?: boolean;
}
const props = defineProps<Props>();
const { period, welcome } = reactive(props);

const periodClassName = `period-label-${welcome ? 'welcome' : period}`;
const periodText = welcome ? '入门' : periodTexts[props.period];
</script>

<template>
  <div
    class="period-label"
    :class="periodClassName"
  >
    {{ periodText }}
  </div>
</template>

<style scoped lang="scss">
.period-label {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 14px;
  width: 44px;
  display: inline-block;
  color: var(--period-text-color, #eee);
  background-color: var(--period-label-color, #666);

  &-welcome {
    --period-label-color: #468;
  }
  &-short {
    --period-label-color: #486;
  }
  &-medium {
    --period-label-color: #873;
  }
  &-long {
    --period-label-color: #855;
  }
  &-battle {
    --period-label-color: #733;
  }
}
</style>
