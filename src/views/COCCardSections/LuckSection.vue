<script setup lang="ts">
import PaperSection from '@/components/coc-card/PaperSection.vue';
import WritableRow from '@/components/coc-card/WritableRow.vue';

import usePC from '@/hooks/usePC';
import qr from '@/assets/coc-card-qr.png';

const pc = usePC();
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
        <img
          class="qr-code"
          :src="qr"
        />
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
  flex-direction: row;
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
  width: 9em;
  height: 9em;
}
</style>
