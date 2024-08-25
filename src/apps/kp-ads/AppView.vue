<script setup lang="ts">
import { ref, computed } from 'vue';
import qs from 'qs';

import StoryCard from './components/StoryCard.vue';

import keeperGroupTable from './tables/keeperGroup';
import KeeperGroupModel from './models/keeperGroup';
import type { KeeperGroupTableField_List } from './types/keeperGroup';
import { storyInfoOverrides } from './tables/storyInfoOverrides';

interface QsObjectByDynamicList {
  'dl-t'?: string;
  // overrides index list, format: `0-1-2`
  'dl-oil'?: string;
}

const qsObject = qs.parse(location.search.slice(1));
const currentKey = ref('sox');

// TODO: move to model
const dynamicList = computed(() => {
  const { 'dl-t': title, 'dl-oil': overridesIndexListStr } = qsObject as QsObjectByDynamicList;
  if (!title || !overridesIndexListStr) return;
  const overridesIndexList = overridesIndexListStr.split('-').map(Number) as number[];
  const dynamicList: KeeperGroupTableField_List = {
    key: '$dynamic',
    title,
    stories: overridesIndexList.map((index) => ['', storyInfoOverrides[index].title]),
  };
  return dynamicList;
});

const keeperGroup = computed(() => {
  const keeperGroupRow = keeperGroupTable.find((row) => row.key === currentKey.value);
  return (
    keeperGroupRow &&
    new KeeperGroupModel({
      ...keeperGroupRow,
      lists: dynamicList.value
        ? [dynamicList.value, ...keeperGroupRow.lists]
        : keeperGroupRow.lists,
    })
  );
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
