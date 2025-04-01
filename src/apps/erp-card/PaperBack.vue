<script setup lang="ts">
import type { VNodeRef } from 'vue';

import PaperLayout from './layouts/PaperLayout.vue';
import StorySection from './sections/StorySection.vue';
import AssetsSection from './sections/AssetsSection.vue';
import ItemSection from './sections/ItemSection.vue';
import MythosSection from './sections/MythosSection.vue';
import FriendSection from './sections/FriendSection.vue';
import RuleSection from './sections/RuleSection.vue';
import ExperienceSection from './sections/ExperienceSection.vue';

interface Props {
  setRef?: VNodeRef;
}
defineProps<Props>();
</script>

<template>
  <PaperLayout :setRef="setRef">
    <StorySection />
    <div class="section-row">
      <ItemSection class="col-1" />
      <AssetsSection class="col-1" />
      <MythosSection class="col-1" />
    </div>
    <div class="section-row">
      <FriendSection class="col-1" />
      <RuleSection class="col-1" />
      <ExperienceSection class="col-1" />
    </div>
    <div class="inspiration-row">
      <div class="inspiration-item special-thanks"></div>
      <div class="inspiration-item copyright">「自由角色扮演」测试版人物卡 Copyright 侠小然</div>
    </div>
  </PaperLayout>
</template>

<style scoped lang="scss">
.section-row {
  display: flex;
  gap: 1em;
  align-items: stretch;
}
.section-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.8em;
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
