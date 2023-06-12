<script setup lang="ts">
import { inject } from 'vue';

// components
import PaperSection from '@/components/PaperSection.vue';
import WritableRow from '@/components/WritableRow.vue';

// models
import type { COCPlayerCharacter } from '@/models/coc/character';

const pc = inject<COCPlayerCharacter>('pc');
</script>

<template>
  <div class="luck-section-group">
    <PaperSection
      v-if="pc"
      title="幸运"
      subTitle="Luck"
    >
      <div class="luck-section">
        <WritableRow
          label="幸运"
          :modelValue="`${pc.attributes.luc ?? ''}`"
          @update:modelValue="(newValue) => (pc!.attributes.luc = +newValue)"
        />
      </div>
    </PaperSection>
    <PaperSection class="qr-section">
      <template v-slot:header>
        <div class="qr-section-header">扫码车卡</div>
      </template>
      <div class="qr-container">
        <div class="qr-code"></div>
      </div>
    </PaperSection>
  </div>
</template>

<style scoped lang="scss">
.luck-section-group {
  display: flex;
  flex-direction: column;
  gap: 0.6em;
}
.luck-section {
  padding: 0.4em 0.6em 0.6em;
}
.qr-section {
  flex: 1;
  display: flex;
}
.qr-section-header {
  word-break: break-all;
  width: 1.8em;
  padding: 0.4em;
  display: flex;
  align-items: center;
}
.qr-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}
.qr-code {
  width: 8.2em;
  height: 8.2em;
  border: 1px solid var(--color-border);
}
</style>
