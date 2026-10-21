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
@use '../theme' as theme;

.period-label {
  @include theme.tokens;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 14px;
  width: 44px;
  display: inline-block;
  color: var(--color-period-text);
  background-color: var(--period-label-color, var(--color-period-bg));

  &-welcome {
    --period-label-color: var(--color-period-welcome-bg);
  }
  &-short {
    --period-label-color: var(--color-period-short-bg);
  }
  &-medium {
    --period-label-color: var(--color-period-medium-bg);
  }
  &-long {
    --period-label-color: var(--color-period-long-bg);
  }
  &-battle {
    --period-label-color: var(--color-period-battle-bg);
  }
}
</style>
