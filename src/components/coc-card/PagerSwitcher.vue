<script setup lang="ts">
import { Aim } from '@element-plus/icons-vue';
import { computed } from 'vue';

interface Props {
  on?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  on: false,
});

interface Emits {
  (event: 'change', value: boolean): void;
}
defineEmits<Emits>();

const INPUT_NAME = 'page-switcher';
const options = computed<[string, string, boolean][]>(() => [
  ['正面', '调查员属性', true],
  ['背面', '调查员故事', false],
]);
</script>

<template>
  <div class="pager-switcher">
    <div class="header">正在编辑：{{ on ? '正面' : '背面' }}</div>
    <div class="swicher">
      <label
        v-for="option in options"
        :key="option[0]"
        class="swicher-option"
        :class="{ 'swicher-option-inactive': on !== option[2] }"
      >
        <div class="swicher-option-title">
          <input
            type="radio"
            class="switcher-radio"
            :name="INPUT_NAME"
            :checked="on === option[2]"
            @change="$emit('change', option[2])"
          />
          <el-icon
            size="0.9em"
            v-if="on !== option[2]"
          >
            <Aim />
          </el-icon>
          <span>{{ option[0] }}</span>
        </div>
        <div>{{ option[1] }}</div>
      </label>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pager-switcher {
  --color-bg-opp: rgba(255, 255, 255, 0.1);
  --color-bg-opp-hover: rgba(255, 255, 255, 0.06);
  --color-bg-opp-active: rgba(255, 255, 255, 0.03);

  border-radius: 1em;
  overflow: hidden;
  border: 1px solid var(--color-border);
  background-color: var(--color-control-bg);
  color: var(--color-text);
  display: flex;
  flex-direction: column;
}
.header {
  padding: 0.6em 0.8em 0.2em;
  line-height: 1;
  text-align: center;
}
.swicher {
  display: flex;
}
.swicher-option {
  padding: 0.6em 0.8em;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.4s;
}
.swicher-option-inactive {
  background-color: var(--color-bg-opp);
  padding: 0.2em 0.6em;
  margin: 0.4em 0.2em;
  border-radius: 1em;

  &:hover {
    background-color: var(--color-bg-opp-hover);
  }
  &:active {
    background-color: var(--color-bg-opp-active);
  }
}
.swicher-option-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2em;
}
.switcher-radio {
  appearance: none;
}
</style>
