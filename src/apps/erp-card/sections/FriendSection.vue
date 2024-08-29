<script setup lang="ts">
import PaperSection from '../components/PaperSection.vue';
import WritableArea from '../components/WritableArea.vue';

import { usePC } from '../hooks/useProviders';

const pc = usePC();
</script>

<template>
  <PaperSection
    v-if="pc"
    title="人物关系"
    subTitle="Relationships"
  >
    <div class="section-body">
      <WritableArea
        label=""
        :rows="11"
        v-model="pc.friends"
        placeholder="角色  玩家  职业  关系 —— 懒得结构化了，应该不会有人在网上车卡时候就填吧？"
      />
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.section-body {
  padding: 0.4em 0.6em 0.6em;
}
</style>
