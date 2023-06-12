<script setup lang="ts">
import { inject } from 'vue';

// components
import PaperSection from '@/components/PaperSection.vue';
import WritableRow from '@/components/WritableRow.vue';

// models
import { generateRandomAttributes } from '@/models/coc/attribute';
import type { COCPlayerCharacter } from '@/models/coc/character';

const pc = inject<COCPlayerCharacter>('pc');

function generate() {
  if (!pc) return;
  pc.attributes = generateRandomAttributes(Number(pc.age));
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
        <div>🎲 3D6×5</div>
        <WritableRow
          label="力量"
          :modelValue="`${pc.attributes.str ?? ''}`"
          @update:modelValue="(newValue) => (pc!.attributes.str = +newValue)"
        />
        <WritableRow
          label="体质"
          :modelValue="`${pc.attributes.con ?? ''}`"
          @update:modelValue="(newValue) => (pc!.attributes.con = +newValue)"
        />
        <WritableRow
          label="敏捷"
          :modelValue="`${pc.attributes.dex ?? ''}`"
          @update:modelValue="(newValue) => (pc!.attributes.dex = +newValue)"
        />
        <WritableRow
          label="外貌"
          :modelValue="`${pc.attributes.app ?? ''}`"
          @update:modelValue="(newValue) => (pc!.attributes.app = +newValue)"
        />
        <WritableRow
          label="意志"
          :modelValue="`${pc.attributes.pow ?? ''}`"
          @update:modelValue="(newValue) => (pc!.attributes.pow = +newValue)"
        />
      </div>
      <div class="divider"></div>
      <div class="attributes-group">
        <div>🎲 (2D6+6)×5</div>
        <WritableRow
          label="体型"
          :modelValue="`${pc.attributes.siz ?? ''}`"
          @update:modelValue="(newValue) => (pc!.attributes.siz = +newValue)"
        />
        <WritableRow
          label="教育"
          :modelValue="`${pc.attributes.edu ?? ''}`"
          @update:modelValue="(newValue) => (pc!.attributes.edu = +newValue)"
        />
        <WritableRow
          label="智力"
          :modelValue="`${pc.attributes.int ?? ''}`"
          @update:modelValue="(newValue) => (pc!.attributes.int = +newValue)"
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
  padding: 0.4em 0.6em 0.6em;
  gap: 0.8em;
}
.divider {
  border-right: 1px solid var(--color-border);
}
.attributes-group {
  display: flex;
  flex-direction: column;
  gap: 0.2em;
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
