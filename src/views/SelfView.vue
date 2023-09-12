<script setup lang="ts">
import { ref } from 'vue';
import PeriodLabel from '@/components/PeriodLabel.vue';

import useTheme from '@/hooks/useTheme';

// types & constants
import stories from '@/models/story';
import records from '@/models/record';
import experiences from '@/models/experience';

useTheme('dark');

const privateMode = ref(false);

const list = stories.map((story) => ({
  story,
  record: records.get(story.name),
  experience: experiences.get(story.name),
}));

const wantedList = list
  .filter((item) => item.record?.prefer)
  .sort((a, b) => (b.record?.prefer || 0) - (a.record?.prefer || 0));
const playedList = list
  .filter((item) => item.record?.isPlayed || item.experience)
  .sort(
    (a, b) =>
      (b.experience?.experienceScore || 0) -
      (a.experience?.experienceScore || 0)
  )
  .sort(
    (a, b) => (b.experience?.storyScore || 0) - (a.experience?.storyScore || 0)
  );
</script>

<template>
  <main class="page">
    <div class="layout">
      <div class="section section-wanted">
        <div class="section-header">
          <h1 class="section-title">我想玩的</h1>
        </div>
        <div>
          <div
            v-for="{ story, record } in wantedList"
            :key="story.name"
            class="wanted-card"
          >
            <PeriodLabel
              :period="story.period"
              :welcome="story.options?.welcome"
            />
            <span>{{ story.name }}</span>
            <span
              class="prefer-label"
              v-if="record?.prefer"
            >
              <template
                v-for="(_, i) in Array.from({ length: record.prefer })"
                :key="i"
              >
                <span>♡</span>
              </template>
            </span>
          </div>
        </div>
      </div>
      <div class="section section-played">
        <div class="section-header">
          <h1 class="section-title">我玩过的</h1>
          <label>
            <input
              type="checkbox"
              v-model="privateMode"
            />
            隐藏主观评价
          </label>
        </div>
        <div>
          <div
            v-for="{ story, experience } in playedList"
            :key="story.name"
            class="played-card"
          >
            <div class="played-card-header">
              <PeriodLabel
                :period="story.period"
                :welcome="story.options?.welcome"
              />
              <span class="played-card-name">{{ story.name }}</span>
              <span v-if="!experience">暂无评价</span>
              <template v-else>
                <span>
                  体验评分:
                  {{ !privateMode ? experience?.experienceScore : '*' }}
                </span>
                <span>模组评分: {{ experience?.storyScore }}</span>
              </template>
            </div>
            <div class="experience-comments">
              {{
                !privateMode
                  ? experience?.comments
                  : Array.from({
                      length: experience?.comments.length || 0,
                    })
                      .map(() => '*')
                      .join('')
              }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.page {
  margin: auto;
  width: 960px;
  padding: 32px 0;
  font-size: 16px;
}

.layout {
  display: flex;
  gap: 80px;
}

.section {
  flex: 1;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
}

.section-title {
  font-size: 22px;
  color: var(--color-heading);
  margin: 0;
}

.section-wanted {
  flex: 3;
}

.wanted-card {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border);
}

.section-played {
  flex: 5;
}

.played-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border);
}

.played-card-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.played-card-name {
  flex: 1;
}

.experience-comments {
  word-break: break-all;
}
</style>
