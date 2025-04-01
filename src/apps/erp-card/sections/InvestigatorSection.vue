<script setup lang="ts">
import { ref, computed } from 'vue';

// components
import PaperSection from '../components/PaperSection.vue';
import WritableRow from '../components/WritableRow.vue';
import WritableSelect from '../components/WritableSelect.vue';
import FlattenTree from '../components/FlattenTree.vue';
import RandNameRow from '../components/control-section-parts/rand-name/RandNameRow.vue';

// models
import formattedJobs from '../models/job';
import LA, { LAEventID, FeatureNames } from '@/plugins/51la';

// @ts-ignore
import vClickOutside from '@/directives/clickOutside';
import { usePC, usePageData } from '../hooks/useProviders';

import type { FlattenTreeData } from '../types/flattenTree';

const pc = usePC();
const pageData = usePageData();

const { jobGroups } = formattedJobs;

const jobSearchInput = ref('');

const jobTree = computed(() => {
  const filterText = jobSearchInput.value;
  const filteredData = jobGroups.reduce((result, jobGroup) => {
    const { name: groupName, pinyin: groupPinyin, jobs } = jobGroup;
    const filteredChildren = jobs.reduce(
      (result, job) => {
        if (
          !filterText ||
          groupName.includes(filterText) ||
          groupPinyin.includes(filterText) ||
          job.name.includes(filterText) ||
          job.pinyin.includes(filterText)
        ) {
          result.push({ label: job.name, key: job.name });
        }
        return result;
      },
      [] as { label: string; key: string }[],
    );
    if (filteredChildren.length) {
      result.push({
        label: groupName,
        key: groupName,
        children: filteredChildren,
      });
    }
    return result;
  }, [] as FlattenTreeData);
  return filteredData;
});

function onSelectJob(jobName: string, closeOptions?: () => void) {
  if (!pc) return;
  pc.value.job = jobName;
  closeOptions?.();
  LA?.track(LAEventID.FEATURE, {
    name: FeatureNames.PAPER_USE_JOB,
    job: jobName,
  });
}
</script>

<template>
  <PaperSection
    title="角色"
    subTitle="Character"
    v-if="pc"
  >
    <div
      class="info-section"
      :class="{
        'printing-image': pageData?.printing,
      }"
    >
      <div class="name-row">
        <div class="col-0">
          <WritableRow
            label="姓名"
            placeholder="角色姓名"
            v-model="pc.name"
          />
        </div>
        <RandNameRow />
      </div>
      <WritableRow
        label="玩家"
        placeholder="玩家昵称"
        v-model="pc.playerName"
      />
      <!-- pc job selector -->
      <div class="rel only-wide">
        <WritableSelect
          label="人设"
          v-model="pc.job"
          placeholder="关键特征，比如职业和爱好"
          transitionName="slide-up"
          v-slot="{ showing, closeOptions }"
          @closeOptions="jobSearchInput = ''"
        >
          <div
            v-if="showing"
            class="job-selector"
          >
            <div class="job-selector-header">
              <input
                class="job-search-input"
                type="text"
                placeholder="输入职业名称或拼音可以进行搜索"
                v-model="jobSearchInput"
              />
            </div>
            <FlattenTree
              :tree="jobTree"
              @select="(item) => onSelectJob(item.label, closeOptions)"
            />
          </div>
        </WritableSelect>
      </div>
      <!-- mobile job selector -->
      <div class="only-compact">
        <WritableRow
          label="职业"
          v-model="pc.job"
          placeholder="自定义或从“更多”→“职业列表”中选择"
        />
      </div>
      <div class="info-row">
        <WritableSelect
          label="世设"
          :char="6"
          v-model="pc.location"
          :options="[
            '纯/近现实',
            '克苏鲁',
            '西式幻想',
            '中式幻想',
            '日式幻想',
            '东方project',
            '赛博朋克',
          ]"
        />
        <WritableRow
          label="种族"
          :char="6"
          v-model="pc.location"
        />
      </div>
      <div class="info-row">
        <WritableRow
          label="年龄"
          :char="6"
          v-model="pc.age"
        />
        <WritableRow
          label="性别"
          :char="6"
          v-model="pc.gender"
        />
      </div>
      <div class="info-row">
        <WritableRow
          label="时代"
          :char="6"
          v-model="pc.time"
        />
        <WritableRow
          label="故乡"
          :char="6"
          v-model="pc.hometown"
        />
      </div>
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.info-row {
  display: flex;
  gap: 1em;

  & :deep(.writable-row) {
    flex: 1 1 auto;
  }
}

.info-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.2em;
  padding: 0.4em 0.6em 0.6em;
}

.name-row {
  display: flex;
  gap: 0.6em;
  align-items: center;
}

.job-selector {
  position: absolute;
  width: calc(65.625em - 2em); // 210mm - 2em
  left: -1.6em;
  margin-top: 1em;
  border: 1px solid #777;
  padding: 1em;
  background-color: #fff;
  z-index: 1;
}

.job-selector-header {
  padding-bottom: 1em;
  margin-bottom: 1em;
  border-bottom: 1px solid var(--color-border);
}
.job-search-input {
  border: 1px solid var(--color-border);
  width: 100%;
  padding: 0.6em 0.8em;
}

.only-compact {
  display: none;
}

@media screen and (max-width: 1024px) {
  .only-compact {
    display: block;
  }
  .only-wide {
    display: none;
  }
}

/* when print image & print */
@mixin printing-styles {
  .job-selector {
    display: none;
  }
}
.printing-image {
  @include printing-styles;
}
@media print {
  @include printing-styles;
}
</style>

<style lang="scss">
@media screen and (max-width: 1024px) {
  .papers-editing {
    .job-selector {
      display: none;
    }
  }
}
</style>
