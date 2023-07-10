<script setup lang="ts">
import { computed, ref } from 'vue';

// components
import PaperSection from '@/components/coc-card/PaperSection.vue';
import WritableRow from '@/components/coc-card/WritableRow.vue';
import SoxCheckbox from '@/components/sox/SoxCheckbox.vue';

// models
import type {
  COCAttributesKey,
  COCAttributes,
} from '@/types/coc-card/character';

import { usePC } from '@/hooks/useCOCCardProviders';
import { generateRandomAttributes } from '@/models/coc-card/attribute';

const pc = usePC();

const cheating = ref(false);

const attributes = computed<Partial<COCAttributes>>(() => {
  const { str, con, dex, app, pow, siz, edu, int } = pc?.value.attributes || {};
  const keys: Exclude<COCAttributesKey, 'luc'>[] = [
    'str',
    'con',
    'dex',
    'app',
    'pow',
    'siz',
    'edu',
    'int',
  ];
  const vals = [str, con, dex, app, pow, siz, edu, int];
  const result = { str, con, dex, app, pow, siz, edu, int };

  if (vals.some((val) => !val)) return result;

  if (cheating.value) {
    const backups = [
      generateRandomAttributes(),
      generateRandomAttributes(),
      generateRandomAttributes(),
      generateRandomAttributes(),
    ];
    keys.forEach((key) => {
      const originValue = pc?.value.attributes[key];
      if (originValue) {
        result[key] = Math.max(
          originValue,
          ...backups.map((backup) => backup[key])
        );
      }
    });
  }

  return result;
});

const sum = computed(() => {
  const { str, con, dex, app, pow, siz, edu, int } = attributes.value;
  const vals = [str, con, dex, app, pow, siz, edu, int];
  const filled = vals.every((v) => v);
  if (!filled) return 0;
  return vals.reduce<number>((sum, cur) => sum + (cur || 0), 0);
});

function updateAttr(key: COCAttributesKey, value: string) {
  if (!pc) return;
  pc.value.attributes[key] = value ? +value : undefined;
}
</script>

<template>
  <PaperSection
    title="属性"
    subTitle="Attributes"
    v-if="pc"
  >
    <div class="info-section">
      <div class="attributes-group">
        <div class="dice-hint">🎲 3D6×5</div>
        <WritableRow
          label="力量"
          hint="STR"
          :readonly="cheating"
          :modelValue="`${attributes.str ?? ''}`"
          @update:modelValue="(newValue) => updateAttr('str', newValue)"
        />
        <WritableRow
          label="体质"
          hint="CON"
          :readonly="cheating"
          :modelValue="`${attributes.con ?? ''}`"
          @update:modelValue="(newValue) => updateAttr('con', newValue)"
        />
        <WritableRow
          label="敏捷"
          hint="DEX"
          :readonly="cheating"
          :modelValue="`${attributes.dex ?? ''}`"
          @update:modelValue="(newValue) => updateAttr('dex', newValue)"
        />
        <WritableRow
          label="外貌"
          hint="APP"
          :readonly="cheating"
          :modelValue="`${attributes.app ?? ''}`"
          @update:modelValue="(newValue) => updateAttr('app', newValue)"
        />
        <WritableRow
          label="意志"
          hint="POW"
          :readonly="cheating"
          :modelValue="`${attributes.pow ?? ''}`"
          @update:modelValue="(newValue) => updateAttr('pow', newValue)"
        />
      </div>
      <div class="divider"></div>
      <div class="attributes-group">
        <div
          class="dice-hint"
          style="margin-left: 1em"
        >
          🎲 (2D6+6)×5
        </div>
        <WritableRow
          label="体型"
          hint="SIZ"
          :readonly="cheating"
          :modelValue="`${attributes.siz ?? ''}`"
          @update:modelValue="(newValue) => updateAttr('siz', newValue)"
        />
        <WritableRow
          label="教育"
          hint="知识 EDU"
          :readonly="cheating"
          :modelValue="`${attributes.edu ?? ''}`"
          @update:modelValue="(newValue) => updateAttr('edu', newValue)"
        />
        <WritableRow
          label="智力"
          hint="灵感 INT"
          :readonly="cheating"
          :modelValue="`${attributes.int ?? ''}`"
          @update:modelValue="(newValue) => updateAttr('int', newValue)"
        />
        <div class="attributes-actions">
          <el-tooltip
            effect="dark"
            placement="top"
          >
            <template #content>
              灌铅的结果仅供娱乐
              <br />
              不会影响你的技能点
              <br />
              生成图片时也会忽略
            </template>
            <label
              class="cheating-row"
              :class="{ 'web-only': !cheating }"
            >
              <SoxCheckbox
                :checked="cheating"
                @check="(v) => (cheating = v)"
              />
              我要灌铅！
            </label>
          </el-tooltip>
          <div
            class="ponits-sum"
            v-if="sum"
          >
            总点数 {{ sum }}
          </div>
        </div>
      </div>
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.info-section {
  display: flex;
  padding: 0.4em 0.6em 0.3em;
  gap: 0.8em;
}
.divider {
  border-right: 1px solid var(--color-border);
}
.attributes-group {
  display: flex;
  flex-direction: column;
  gap: 0.2em;

  & :deep(.label) {
    flex: 1 1 3.4em;
  }
}
.dice-hint {
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
}
.cheating-row {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: auto;
  line-height: 1;
  gap: 0.3em;
  padding-left: 0.3em;
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
