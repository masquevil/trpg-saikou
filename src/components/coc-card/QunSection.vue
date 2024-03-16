<script setup lang="ts">
import groupQrWechat from '@/assets/group-qr-wechat.jpg';
</script>

<template>
  <div class="qun-section">
    <div class="qun-section-title">扫码加入交流群，报 Bug，提需求，约团！</div>
    <div class="qun-list">
      <div class="qun-item">
        <img
          class="qun-image"
          :src="groupQrWechat"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.qun-section {
  margin-top: 16px;
}
.qun-section-title {
  margin-bottom: 16px;
  line-height: 1;
  text-align: center;
}
.qun-list {
  display: flex;
  gap: 8px;
  justify-content: center;
}
.qun-item {
  flex: 1 1 auto;
  max-width: 200px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}
.qun-image {
  height: 100%;
}
</style>
