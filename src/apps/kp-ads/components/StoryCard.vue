<script setup lang="ts">
import type { Story } from '../types/story';

interface Props {
  story: Story;
}

defineProps<Props>();
</script>

<template>
  <div class="story-card">
    <div
      class="row"
      style="align-items: stretch; gap: 12px"
    >
      <div style="flex: 0 0 90px; line-height: 0">
        <img
          class="story-card-cover-image"
          :src="story.coverUrl"
        />
      </div>
      <div
        class="row-vertical"
        style="gap: 8px"
      >
        <div class="story-card-header">
          <div class="story-card-title">{{ story.title }}</div>
          <div class="story-card-labels">
            <div class="story-card-label">{{ story.time }}</div>
            <div class="story-card-label">{{ story.place }}</div>
          </div>
        </div>
        <div
          class="col-1 row-vertical"
          style="justify-content: space-between"
        >
          <div class="story-card-adds">{{ story.adds }}</div>
          <div
            v-if="story.comments"
            class="story-card-comments"
          >
            * {{ story.comments }}
          </div>
        </div>
      </div>
    </div>

    <div class="story-card-infos">
      <div class="story-card-tags">
        <div>时长：{{ `${story.duration[0]}-${story.duration[1]}` }}小时</div>
        <div
          v-for="tag in story.labels"
          :key="tag"
        >
          {{ tag }}
        </div>
      </div>
      <div
        v-if="story.isDicecho"
        class="dicecho-row"
      >
        <a class="dicecho-banner dicecho-link">
          <img
            class="dicecho-icon"
            src="https://www.dicecho.com/favicon.ico"
          />
          骰声回响
        </a>
        <div>评分：{{ story.rateAvg }}</div>
        <a
          class="dicecho-link"
          :href="`https://www.dicecho.com/module/${story.id}`"
        >
          链接
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.story-card {
  --color-label-text: var(--color-text);
  --color-label-bg: #335355;
  --color-text-comments: #999;
  /* dicecho */
  --color-dicecho-text: #cacbfc;
  --color-dicecho-link: #9496f7;
  --color-dicecho-link-hover: #8789f7;
  --color-dicecho-link-active: #7c7ef0;
}
.story-card {
  padding: 12px;
  border: 1px solid var(--color-section-border);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: var(--color-section-bg);
}
.story-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.story-card-labels {
  display: flex;
  gap: 4px;
}
.story-card-label {
  line-height: 1;
  padding: 4px 6px;
  border-radius: 2px;
  background-color: var(--color-label-bg);
  color: var(--color-label-text);
  font-size: 12px;
}
.story-card-cover-image {
  width: 100%;
  height: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
}
.story-card-title {
  color: var(--color-heading);
}
.story-card-adds {
  line-height: 1.4;
}
.story-card-comments {
  color: var(--color-text-comments);
}
.story-card-infos {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 1;
}
.story-card-tags {
  display: flex;
  gap: 8px;
}

.dicecho-row {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 4px;
  line-height: 1;
  color: var(--color-dicecho-text);
}
.dicecho-banner {
  display: flex;
  align-items: center;
  gap: 2px;
}
.dicecho-link {
  color: var(--color-dicecho-link);
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: var(--color-dicecho-link-hover);
  }
  &:active {
    color: var(--color-dicecho-link-active);
  }
}
.dicecho-icon {
  width: 1em;
  height: 1em;
  transform: translateY(1px);
}
</style>
