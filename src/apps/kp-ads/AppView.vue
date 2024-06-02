<script setup lang="ts">
import { ref, computed } from 'vue';

import StoryCard from './components/StoryCard.vue';

import StoryModel from './models/story';
import type { Story } from './types/story';

const kpGroups = [
  {
    key: 'sox',
    type: 'personal',
    name: '侠小然',
  },
];
const currentGroupIndex = ref(0);
const currentGroup = computed(() => kpGroups[currentGroupIndex.value]);

const preparedStories = ref<Story[]>(StoryModel.getPreparedStories());
const preparingStories = ref<Story[]>(StoryModel.getPreparingStories());
</script>

<template>
  <main class="page">
    <h1 class="heading">
      找 <b>{{ currentGroup.name }}</b> 跑团！
    </h1>
    <div class="sections">
      <div class="section">
        <div class="section-title">随时能带的</div>
        <div class="stories">
          <StoryCard
            v-for="story in preparedStories"
            :key="story.id"
            :story="story"
          />
        </div>
      </div>
      <div class="section">
        <div class="section-title">在考虑带的</div>
        <div class="stories">
          <StoryCard
            v-for="story in preparingStories"
            :key="story.id"
            :story="story"
          />
        </div>
      </div>
    </div>
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
