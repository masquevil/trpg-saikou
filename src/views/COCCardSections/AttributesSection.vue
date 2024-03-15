<script setup lang="ts">
import { computed } from 'vue';

// components
import PaperSection from '@/components/coc-card/PaperSection.vue';
import WritableRow from '@/components/coc-card/WritableRow.vue';

// models
import type { COCAttributesKey } from '@/types/coc-card/character';

import { usePC } from '@/hooks/useCOCCardProviders';

interface Props {
  cheating?: boolean;
}
defineProps<Props>();

const pc = usePC();

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
          label="力量"
          hint="STR"
          :readonly="cheating"
          :modelValue="`${pc?.attributes.str ?? ''}`"
          @update:modelValue="(newValue) => updateAttr('str', newValue)"
        />
        <WritableRow
          label="体质"
          hint="CON"
          :readonly="cheating"
          :modelValue="`${pc?.attributes.con ?? ''}`"
          @update:modelValue="(newValue) => updateAttr('con', newValue)"
        />
        <WritableRow
          label="敏捷"
          hint="DEX"
          :readonly="cheating"
          :modelValue="`${pc?.attributes.dex ?? ''}`"
          @update:modelValue="(newValue) => updateAttr('dex', newValue)"
        />
        <WritableRow
          label="外貌"
          hint="APP"
          :readonly="cheating"
          :modelValue="`${pc?.attributes.app ?? ''}`"
          @update:modelValue="(newValue) => updateAttr('app', newValue)"
        />
        <WritableRow
          label="意志"
          hint="POW"
          :readonly="cheating"
          :modelValue="`${pc?.attributes.pow ?? ''}`"
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
          :modelValue="`${pc?.attributes.siz ?? ''}`"
          @update:modelValue="(newValue) => updateAttr('siz', newValue)"
        />
        <WritableRow
          label="教育"
          hint="知识 EDU"
          :readonly="cheating"
          :modelValue="`${pc?.attributes.edu ?? ''}`"
          @update:modelValue="(newValue) => updateAttr('edu', newValue)"
        />
        <WritableRow
          label="智力"
          hint="灵感 INT"
          :readonly="cheating"
          :modelValue="`${pc?.attributes.int ?? ''}`"
          @update:modelValue="(newValue) => updateAttr('int', newValue)"
        />
        <div class="attributes-actions">
          <div
            v-if="!sum"
            class="ponits-hint web-only"
          >
            请点左下角“Roll点”
          </div>
          <template v-else>
            <div
              class="ponits-sum"
              v-if="cheating"
            >
              已开启灌铅模式
            </div>
            <div class="ponits-sum">总点数 {{ sum }}</div>
          </template>
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
  gap: 0.2em;

  & :deep(.label) {
    flex: 0 1 2.8em;
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
.ponits-hint {
  color: #777;
  font-size: 0.8em;
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
