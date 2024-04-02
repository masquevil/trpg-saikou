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
      <!-- TODO: FriendSection 留出一半空间，给可选规则/村规 -->
      <ExperienceSection class="col-1" />
    </div>
    <div class="inspiration-row">
      <div class="inspiration-item special-thanks">
        Special Thanks 听枫馆·枫笛(北京)
      </div>
      <div class="inspiration-item inspiration">
        Inspired By 猫爷TRPG 人格解体
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
  line-height: 1;
}
.inspiration-item {
  white-space: nowrap;
  overflow: visible;
  width: 0px;
  transform: scale(0.8);
  transform-origin: left bottom;
}
.special-thanks {
  flex: 3 0 0;
}
.inspiration {
  flex: 3 0 0;
  text-align: right;
  transform-origin: center bottom;
}
.copyright {
  flex: 4 0 0;
  text-align: right;
  transform-origin: right bottom;
}
</style>

<style lang="scss">
@media screen and (max-width: 1024px) {
  .papers-editing {
    .inspiration-row {
      display: flex;
      flex-direction: column;
      gap: 0;
      align-items: center;
      /* align-items: flex-start; */

      .inspiration-item {
        flex: 1 1 0;
        width: 125%;
        transform-origin: center bottom;
        text-align: center;
      }
    }
  }
  .papers-editing {
    .section-row {
      flex-wrap: wrap;
    }
  }
}
</style>
