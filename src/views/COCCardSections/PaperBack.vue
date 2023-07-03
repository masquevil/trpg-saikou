<script setup lang="ts">
import type { VNodeRef } from 'vue';

import PaperLayout from './PaperLayout.vue';
import StorySection from './StorySection.vue';
import AssetsSection from './AssetsSection.vue';
import ItemSection from './ItemSection.vue';
import MythosSection from './MythosSection.vue';
import FriendSection from './FriendSection.vue';
import ExperienceSection from './ExperienceSection.vue';

interface Props {
  setRef?: VNodeRef;
}
defineProps<Props>();
</script>

<template>
  <PaperLayout :setRef="setRef">
    <StorySection />
    <div class="section-row">
      <div class="section-row col-2">
        <ItemSection class="col-0" />
        <AssetsSection class="col-0" />
      </div>
      <MythosSection class="col-1" />
    </div>
    <div class="section-row">
      <FriendSection class="col-2" />
      <ExperienceSection class="col-1" />
    </div>
    <div class="inspiration-row">
      <div class="inspiration-item special-thanks">
        Special Thanks 听枫馆·枫笛(北京)
      </div>
      <div class="inspiration-item inspiration">
        Inspired By 沉世TRPG(上海) 猫爷TRPG(网络) 人格解体(网络)
      </div>
      <div class="inspiration-item copyright">
        「克苏鲁的呼唤」7版人物卡 Copyright 侠小然
      </div>
    </div>
  </PaperLayout>
</template>

<style scoped lang="scss">
.section-row {
  display: flex;
  gap: 1em;
  align-items: stretch;
}
.inspiration-row {
  flex: 1 0 0;
  display: flex;
  align-items: flex-end;
  color: #888;
  /* font-size: 0.88em; */
  line-height: 1;
}
.inspiration-item {
  white-space: nowrap;
  overflow: visible;
  width: 0px;
  transform: scale(0.88);
  transform-origin: left bottom;
}
.special-thanks {
  flex: 3 3 0;
}
.inspiration {
  flex: 5 5 0;
}
.copyright {
  flex: 4 4 0;
  transform-origin: right bottom;
}
</style>
