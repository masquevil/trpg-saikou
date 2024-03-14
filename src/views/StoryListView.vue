<script setup lang="ts">
import { ref, computed } from 'vue';

import PeriodLabel from '@/components/PeriodLabel.vue';
import SoxCheckbox from '@/components/sox/SoxCheckbox.vue';

// types & constants
import type { Period, FormattedStory } from '@/types/story';
import type { FormattedRecord } from '@/types/record';
import type { FormattedExperience } from '@/types/experience';
import stories, { periodTexts } from '@/models/story';
import records from '@/models/record';
import experiences from '@/models/experience';

interface listItem {
  story: FormattedStory;
  record?: FormattedRecord;
  experience?: FormattedExperience;
}

/* list handlers */
function getListMapper() {
  return (story: FormattedStory): listItem => {
    const { name } = story;
    const experience = experiences.get(name);
    const record = records.get(name);
    return {
      story,
      experience,
      record,
    };
  };
}

const periodOrder: Period[] = ['short', 'medium', 'long', 'battle'];
// 排序逻辑: 玩过 - 倾向 - 时长 - 年代 - 年份 - 国家
function sortList(list: listItem[]) {
  const sorters: ((a: listItem, b: listItem) => number)[] = [
    // 玩过的，靠前
    (a, b) =>
      Number(b.record?.isPlayed || false) - Number(a.record?.isPlayed || false),
    // 更想玩的，靠前
    (a, b) => (b.record?.prefer || 0) - (a.record?.prefer || 0),
    // 时间短的，靠前
    (a, b) =>
      periodOrder.indexOf(a.story.period) - periodOrder.indexOf(b.story.period),
    // 年代早的，靠前；同年代，按具体时间排序，没有具体时间的靠后
    (a, b) => {
      const da = a.story.decade.decade;
      const db = b.story.decade.decade;
      if (!db) return -1;
      if (!da) return 1;
      if (da !== db) return da > db ? 1 : -1;
      const dai = a.story.decade.decadeInt;
      const dbi = b.story.decade.decadeInt;
      if (!dbi) return -1;
      if (!dai) return 1;
      return dai - dbi;
    },
    // 按国家和城市聚合，只比较第一个
    (a, b) => {
      const ca = a.story.area[0].country;
      const cb = b.story.area[0].country;
      if (ca !== cb) return ca > cb ? -1 : 1;
      return (a.story.area[0].city || '') > (b.story.area[0].city || '')
        ? -1
        : 1;
    },
  ];
  const sorttedList = [...list]
    .filter((item: listItem) => !item.story.options?.inactive)
    .filter((item: listItem) => !item.story.options?.removed);
  sorters.reverse().forEach((sorter) => sorttedList.sort(sorter));
  return sorttedList;
}

const list = sortList([...stories.map(getListMapper())]);

const periodOptions = periodOrder.map(
  (key) => [key, periodTexts[key]] as [Period, string]
);
const countryOptions = computed(() => {
  const countries = new Map<string, number>();
  list.forEach((item) => {
    item.story.area.forEach((place) => {
      countries.set(place.country, (countries.get(place.country) || 0) + 1);
    });
  });
  return [...countries.entries()].sort((a, b) => b[1] - a[1]);
});
const filters = ref({
  showPlayed: 1,
  showWelcome: 1,
  period: new Set<Period>(),
  decade: '',
  country: '',
});
const filterPeriodValue = ref<Period | ''>('');
function onPeriodChange(newPeriod: Period | '') {
  if (newPeriod && !filters.value.period.has(newPeriod)) {
    filters.value.period.add(newPeriod);
  }
  filterPeriodValue.value = '';
}

const computedList = computed(() => {
  return list.filter(({ story, record }) => {
    const { showPlayed, showWelcome, period, decade, country } = filters.value;
    if (!showPlayed && record?.isPlayed) return false;
    if (!showWelcome && story.options?.welcome) return false;
    if (period.size > 0 && !period.has(story.period)) return false;
    if (decade && !story.decade.decade?.startsWith(decade)) return false;
    if (country && !story.area.some((place) => place.country === country))
      return false;
    return true;
  });
});
</script>

<template>
  <main class="page">
    <div class="header">
      <h1 class="title">听枫馆打卡记录</h1>
      <RouterLink
        class="link"
        to="/self"
      >
        我的记录
      </RouterLink>
    </div>
    <div class="filter-section">
      <select
        v-model="filters.showPlayed"
        class="filter-control"
      >
        <option :value="1">显示玩过的</option>
        <option :value="0">隐藏玩过的</option>
      </select>
      <select
        v-model="filters.showWelcome"
        class="filter-control"
      >
        <option :value="1">显示入门模组</option>
        <option :value="0">隐藏入门模组</option>
      </select>
      <div class="filter-multi-container filter-of-period">
        <select
          v-model="filterPeriodValue"
          @change="onPeriodChange(filterPeriodValue)"
          class="filter-control"
        >
          <option
            value
            disabled
            selected
          >
            选择时长
          </option>
          <option
            value
            hidden
          >
            重置
          </option>
          <option
            v-for="option in periodOptions"
            :key="option[0]"
            :value="option[0]"
          >
            {{ option[1] }}
          </option>
        </select>
        <div class="filter-multi-values">
          <PeriodLabel
            v-for="selectedPeriod in periodOrder.filter((p) =>
              filters.period.has(p)
            )"
            :key="selectedPeriod"
            class="period-label-filter-value"
            :period="selectedPeriod"
            @click="filters.period.delete(selectedPeriod)"
          />
        </div>
      </div>
      <select
        v-model="filters.decade"
        class="filter-control"
      >
        <option value>全年代</option>
        <option value="20">2000+</option>
        <option value="19">1900+</option>
      </select>
      <select
        v-model="filters.country"
        class="filter-control"
      >
        <option value>全世界</option>
        <option
          v-for="countryOption in countryOptions"
          :key="countryOption[0]"
          :value="countryOption[0]"
        >
          仅{{ countryOption[0] }} ({{ countryOption[1] }})
        </option>
      </select>
    </div>
    <div class="list">
      <div
        class="item"
        v-for="{ story, record, experience } in computedList"
        :key="story.name"
      >
        <div class="item-mark">
          <SoxCheckbox :checked="record?.isPlayed" />
        </div>
        <div class="item-name">
          <PeriodLabel
            :period="story.period"
            :welcome="story.options?.welcome"
          />
          <span>
            {{ story.name }}
            {{ story.options?.store ? ` (${story.options.store})` : '' }}
          </span>
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
          <div
            class="item-comments-container"
            v-if="experience"
          >
            <div class="item-comments-icon">📝</div>
            <div class="item-comments-panel">
              <div>
                <span>
                  模组{{ experience.storyScore }}分/体验{{
                    experience.experienceScore
                  }}分
                </span>
                <span>{{ experience.comments }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="item-decade">{{ story.decade.decadeText }}</div>
        <div class="item-areas">
          <template
            v-for="(area, index) in story.area"
            :key="area.city"
          >
            <span v-if="index"> / </span>
            <span class="area-info">
              {{ `${area.country}${area.city ?? ''}` }}
            </span>
          </template>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.page {
  width: 960px;
  margin: auto;
  padding: 32px 0;
  font-size: 16px;
}

.header {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
}

.title {
  font-size: 22px;
  color: var(--color-heading);
  margin: 0;
}

.period-label-filter-value {
  cursor: pointer;

  &::after {
    content: '×';
    margin-left: 4px;
  }
}

/* filters */
.filter-section {
  display: flex;
  gap: 12px;
  align-items: center;
}

.filter-control {
  padding: 8px 12px;
}

.filter-multi-container {
  display: flex;
  align-items: center;
  gap: 12px;
}

.filter-of-period {
  flex: 1 1 auto;
}

.filter-multi-values {
  display: flex;
  align-items: center;
  gap: 4px;
}

/* story list */
.list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 24px;
  margin-top: 16px;
}

.item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid var(--color-border);
}

.item-mark {
  flex: 0 0 auto;
  line-height: 0;
}

.item-name {
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2px 8px;
}

.prefer-label {
  font-size: 12px;
}

.item-comments-container {
  position: relative;
}

.item-comments-panel {
  position: absolute;
  width: 320px;
  padding: 8px 16px;
  margin-left: -16px;
  background-color: var(--color-background-mute);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  box-shadow: 0 0 2px -1px #fff;
  z-index: 1;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s;

  .item-comments-container:hover & {
    opacity: 1;
    pointer-events: initial;
    border: 1px solid var(--color-border-hover);
  }
}

.item-comments-icon {
  cursor: pointer;
}

.item-decade {
  flex: 0 0 48px;
}

.item-areas {
  flex: 0 1 100px;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.area-info {
  white-space: nowrap;
  display: inline-block;
}
</style>
