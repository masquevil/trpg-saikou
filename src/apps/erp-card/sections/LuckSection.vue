<script setup lang="ts">
import PaperSection from '../components/PaperSection.vue';
// import WritableRow from '../components/WritableRow.vue';

// import { usePC } from '../hooks/useProviders';

import qr from '../assets/erp-card-qr.png';

// const pc = usePC();
</script>

<template>
  <div class="luck-section-group">
    <PaperSection
      class="qr-section"
      title="扫码车卡"
    >
      <div class="qr-container">
        <img
          class="qr-code"
          :src="qr"
          alt="二维码渲染失败，请手动访问 https://masquevil.github.io/trpg-saikou/#/erp-card"
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
  /* display: flex; */
  /* flex-direction: row; */
}
.qr-section-header {
  /* word-break: break-all; */
  /* width: 1.8em; */
  padding: 0.4em;
  /* display: flex; */
  /* align-items: center; */
}
.qr-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 9.36em;
}
.qr-code {
  width: 8.6em;
  height: 8.6em;
}
</style>
