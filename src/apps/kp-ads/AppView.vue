<script setup lang="ts">
import { ref, computed } from 'vue';

import StoryCard from './components/StoryCard.vue';

import keeperGroupTable from './tables/keeperGroup';
import KeeperGroupModel from './models/keeperGroup';

const currentKey = ref('sox');

const keeperGroup = computed(() => {
  const keeperGroupRow = keeperGroupTable.find((row) => row.key === currentKey.value);
  return keeperGroupRow && new KeeperGroupModel(keeperGroupRow);
});
</script>

<template>
  <main class="page">
    <template v-if="keeperGroup">
      <h1 class="heading">
        找 <b>{{ keeperGroup.name }}</b> 跑团！
      </h1>
      <div class="sections">
        <div
          class="section"
          v-for="list in keeperGroup.lists"
          :key="list.key"
        >
          <div class="section-title">{{ list.title }}</div>
          <div class="stories">
            <StoryCard
              v-for="story in list.stories"
              :key="`${story.id}-${story.title}`"
              :story="story"
            />
          </div>
        </div>
      </div>
    </template>
  </main>
</template>

<style scoped lang="scss">
.page {
  max-width: 1120px;
  margin: auto;
  padding: 12px;
  font-size: 14px;
}
.heading {
  font-size: 22px;
  color: var(--color-heading);
  margin: 0 0 10px;
}

.sections {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.section-title {
  font-size: 18px;
  color: var(--color-heading);
  margin: 0 0 10px;
}

.stories {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(366px, 1fr));
  gap: 12px;
}
</style>
