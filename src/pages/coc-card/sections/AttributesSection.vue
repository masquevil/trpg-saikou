<script setup lang="ts">
import { ref, computed } from 'vue';
import { ElMessage } from 'element-plus';

// components
import PaperSection from '../components/PaperSection.vue';
import WritableRow from '../components/WritableRow.vue';
import AttrSectionButton from '../components/AttrSectionButton.vue';

// models
import LA, { LAEventID, FeatureNames } from '@/plugins/51la';
import {
  generateRandomAttributes,
  getAttributesSum,
} from '../models/attribute';
import type { COCAttributesKey } from '../types/character';

import { usePC } from '../hooks/useProviders';

const pc = usePC();

interface RenderListItem {
  key: COCAttributesKey;
  label: string;
  hint: string;
}
const leftList: RenderListItem[] = [
  { key: 'str', label: '力量', hint: 'STR' },
  { key: 'con', label: '体质', hint: 'CON' },
  { key: 'dex', label: '敏捷', hint: 'DEX' },
  { key: 'app', label: '外貌', hint: 'APP' },
  { key: 'pow', label: '意志', hint: 'POW' },
];
const rightList: RenderListItem[] = [
  { key: 'siz', label: '体型', hint: 'SIZ' },
  { key: 'edu', label: '教育', hint: '知识 EDU' },
  { key: 'int', label: '智力', hint: '灵感 INT' },
];

const sum = computed(() => {
  if (!pc) return 0;
  const { str, con, dex, app, pow, siz, edu, int } = pc.value.attributes;
  const vals = [str, con, dex, app, pow, siz, edu, int];
  const filled = vals.every((v) => v);
  if (!filled) return 0;
  return vals.reduce<number>((sum, cur) => sum + (cur || 0), 0);
});

function updateAttr(key: COCAttributesKey, value: string) {
  if (!pc) return;
  pc.value.attributes[key] = value ? +value : undefined;
}

// 一发入魂
const generateTimes = ref(0);
function actRoll() {
  if (!pc) return;

  // 多次 roll 点取最高，增加 roll 点体验
  const attrs = Array.from({
    length: (generateTimes.value % 3) + 1,
  })
    .map(() => generateRandomAttributes())
    .sort((a, b) => getAttributesSum(b) - getAttributesSum(a))[0];
  pc.value.attributes = attrs;
  ElMessage.success('已为您生成一组数据，看看符不符合心意吧！');
  generateTimes.value++;
  LA.track(LAEventID.FEATURE, { name: FeatureNames.PAPER_ROLL });
}
</script>

<template>
  <PaperSection
    title="属性"
    subTitle="Characteristics"
    v-if="pc"
  >
    <div class="info-section">
      <div class="attributes-group">
        <div class="dice-hint">🎲 3D6×5</div>
        <WritableRow
          v-for="item in leftList"
          :key="item.key"
          :label="item.label"
          :hint="item.hint"
          :modelValue="`${pc?.attributes[item.key] ?? ''}`"
          @update:modelValue="(newValue) => updateAttr(item.key, newValue)"
        />
      </div>
      <div class="divider"></div>
      <div class="attributes-group">
        <div class="dice-hint">🎲 (2D6+6)×5</div>
        <WritableRow
          v-for="item in rightList"
          :key="item.key"
          :label="item.label"
          :hint="item.hint"
          :modelValue="`${pc?.attributes[item.key] ?? ''}`"
          @update:modelValue="(newValue) => updateAttr(item.key, newValue)"
        />
        <div class="attributes-actions">
          <template v-if="sum">
            <div class="ponits-sum">总点数 {{ sum }}</div>
          </template>
          <div class="web-only">
            <AttrSectionButton @click="actRoll">一发入魂</AttrSectionButton>
          </div>
        </div>
      </div>
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.info-section {
  display: flex;
  padding: 0.4em 0.6em 0.6em;
  gap: 0.8em;
}
.divider {
  border-right: 1px solid var(--color-border);
}
.attributes-group {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2em;

  & :deep(.label) {
    flex: 0 1 2.8em;
  }
}
.dice-hint {
  align-self: flex-start;
  font-size: 0.8em;
  margin: 0 0 -0.3em 0.6em;
}

.attributes-actions {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.4em;
  width: 0;
  white-space: nowrap;

  --color-button-border: #b2b2b2;
  --color-button-border-hover: #9a9a9a;
  --color-button-bg: #fff;
  --color-button-bg-hover: #fafafa;
  --color-button-bg-active: #f5f5f5;
  --color-button-text: #4b4e53;
  --color-button-text-hover: #2e2e2e;
}
.ponits-sum {
  text-align: center;
  opacity: 0.8;
  line-height: 1;
  transform: scale(0.88);
  transform-origin: center bottom;
}

/* when print */
@mixin printing-styles {
  .web-only {
    display: none;
  }
}
.printing-image {
  @include printing-styles;
}
@media print {
  @include printing-styles;
}
</style>
