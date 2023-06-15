<script setup lang="ts">
import { inject } from 'vue';

// components
import PaperSection from '@/components/PaperSection.vue';
import WritableRow from '@/components/WritableRow.vue';

// models
import { generateRandomAttributes } from '@/models/coc/attribute';
import type { COCAttributesKey } from '@/models/coc/attribute';
import type { COCPlayerCharacter } from '@/models/coc/character';

const pc = inject<COCPlayerCharacter>('pc');

function generate() {
  if (!pc) return;
  pc.attributes = generateRandomAttributes(Number(pc.age));
}

function updateAttr(key: COCAttributesKey, value: string) {
  if (!pc) return;
  pc.attributes[key] = value ? +value : undefined;
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
          :modelValue="`${pc.attributes.str ?? ''}`"
          @update:modelValue="(newValue) => updateAttr('str', newValue)"
        />
        <WritableRow
          label="体质"
          hint="CON"
          :modelValue="`${pc.attributes.con ?? ''}`"
          @update:modelValue="(newValue) => updateAttr('con', newValue)"
        />
        <WritableRow
          label="敏捷"
          hint="DEX"
          :modelValue="`${pc.attributes.dex ?? ''}`"
          @update:modelValue="(newValue) => updateAttr('dex', newValue)"
        />
        <WritableRow
          label="外貌"
          hint="APP"
          :modelValue="`${pc.attributes.app ?? ''}`"
          @update:modelValue="(newValue) => updateAttr('app', newValue)"
        />
        <WritableRow
          label="意志"
          hint="POW"
          :modelValue="`${pc.attributes.pow ?? ''}`"
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
          :modelValue="`${pc.attributes.siz ?? ''}`"
          @update:modelValue="(newValue) => updateAttr('siz', newValue)"
        />
        <WritableRow
          label="教育"
          hint="知识 EDU"
          :modelValue="`${pc.attributes.edu ?? ''}`"
          @update:modelValue="(newValue) => updateAttr('edu', newValue)"
        />
        <WritableRow
          label="智力"
          hint="灵感 INT"
          :modelValue="`${pc.attributes.int ?? ''}`"
          @update:modelValue="(newValue) => updateAttr('int', newValue)"
        />
        <div class="attributes-actions">
          <button
            class="button attributes-action"
            @click="generate"
          >
            随机生成属性<br />含年龄修正
          </button>
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
    flex: 1 1 2.8em;
  }
}
.dice-hint {
  font-size: 0.8em;
  margin: 0 0 0.1em 0.6em;
}
.attributes-actions {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.attributes-action {
  font-size: 0.9em;
  letter-spacing: 0.05em;
  line-height: 1.4em;
  padding: 0.1em;
  cursor: pointer;
  border-radius: 0.2em;
  border: 1px solid #777;
  color: var(--color-black);
  background-color: var(--color-white);
  &:hover {
    background-color: var(--color-background-soft);
  }
  &:active {
    background-color: var(--color-background-mute);
  }
}
@media print {
  .attributes-actions {
    display: none;
  }
}
</style>
