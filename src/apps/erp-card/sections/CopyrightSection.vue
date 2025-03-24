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
  margin-top: -0.24em;
  height: 0;
  line-height: 0;
  display: flex;
  justify-content: space-between;
  color: #4b4e53;
  white-space: nowrap;
}

.commercial-info {
  margin-right: -10em;
  width: 0;
  flex: 1 0 0;
  transform: scale(0.72);
  transform-origin: left bottom;
  line-height: 1em;
}
.commercial-link {
  color: inherit;
}

.copyright {
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 0.6em;
  line-height: 1em;
  transform: scale(0.72);
  transform-origin: right bottom;
}
.footprint {
  opacity: 0.5;
}

@media screen and (max-width: 1024px) {
  .copyright-section {
    height: auto;
  }
}
</style>

<style lang="scss">
@media screen and (max-width: 1024px) {
  .papers-editing {
    .copyright-section {
      flex-direction: column;

      .commercial-info {
        width: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 0.2em 1em;
      }

      .copyright {
        width: 0;
        transform-origin: left bottom;
      }
    }
  }
}
</style>
