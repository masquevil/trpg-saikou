<script setup lang="ts"></script>

<template>
  <div class="copyright-section">
    <div class="commercial-info">
      商业合作请联系:
      <a
        class="link commercial-link"
        href="mailto:masquevil@gmail.com"
      >
        masquevil@gmail.com (侠小然)
      </a>
      <a
        class="link commercial-link"
        href="mailto:705422032@qq.com"
      >
        705422032@qq.com (枫笛)
      </a>
    </div>
    <div class="copyright">
      <span>©「克苏鲁的呼唤」7版人物卡</span>
      <span>Copyright 侠小然 {{ new Date().getFullYear() }}</span>
      <span class="footprint">🐾</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.copyright-section {
  margin-top: -0.44em;
  line-height: 1;
  display: flex;
  justify-content: space-between;
  color: #777;
  white-space: nowrap;
}

.commercial-info {
  width: 0;
  flex: 1 0 0;
  transform: scale(0.72);
  transform-origin: left bottom;
}
.commercial-link {
  color: inherit;
}

.copyright {
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 0.6em;
  transform: scale(0.72);
  transform-origin: right bottom;
}
.footprint {
  opacity: 0.5;
}
</style>
