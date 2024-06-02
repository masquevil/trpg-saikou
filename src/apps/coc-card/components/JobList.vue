<script setup lang="ts">
import { computed, ref } from 'vue';
import { Upload } from '@element-plus/icons-vue';

// models
import formattedJobs, { getProPointByJobAndAttrs } from '../models/job';
import { getJobSuggestion } from '../models/suggestion';
import LA, { LAEventID, FeatureNames } from '@/plugins/51la';

import { usePC } from '../hooks/useProviders';

interface Props {
  label?: string;
}
defineProps<Props>();

const { jobGroups, jobs } = formattedJobs;
const pc = usePC();

const collapseActiveNames = ref([]);

const list = computed(() => {
  return jobGroups.map((group) => {
    return {
      name: group.name,
      items: group.jobs.map((jobInfo) => {
        const job = jobs.get(jobInfo.name)!;
        const suggestion = getJobSuggestion(job.name);

        const skillText =
          suggestion.multiSkillTexts.map((t) => `${t}、`).join('') + suggestion.text;

        const { point: pointValue, text: pointText } = getProPointByJobAndAttrs(
          job.name,
          pc?.value.attributes,
        );

        return {
          name: job.name,
          wealth: job.wealth,
          skillText,
          pointText,
          pointValue,
        };
      }),
    };
  });
});

function applyJob(jobName: string) {
  if (!pc) return;
  pc.value.job = jobName;
  LA?.track(LAEventID.FEATURE, {
    name: FeatureNames.PANE_USE_JOB,
    job: jobName,
  });
}
</script>

<template>
  <div>
    <el-collapse
      class="job-list"
      v-model="collapseActiveNames"
    >
      <el-collapse-item
        v-for="group in list"
        :key="group.name"
        :title="group.name"
        :name="group.name"
      >
        <div class="jobs-container">
          <div
            v-for="item in group.items"
            :key="item.name"
            class="job-card"
          >
            <div class="job-card-header">
              <span>{{ item.name }}</span>
              <span>信用评级：{{ item.wealth[0] }}~{{ item.wealth[1] }}</span>
              <a
                class="job-card-action-use"
                @click="() => applyJob(item.name)"
              >
                <el-icon size="0.9em">
                  <Upload />
                </el-icon>
                使用
              </a>
            </div>
            <div class="job-card-row">
              <span>职业点数：{{ item.pointText }}</span>
              <span v-if="item.pointValue"> (当前结果: {{ item.pointValue }}) </span>
            </div>
            <div class="job-card-row">本职技能：{{ item.skillText }}</div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style scoped lang="scss">
.job-list {
  --el-collapse-border-color: var(--color-border);
  --el-collapse-header-height: 32px;
  --el-collapse-header-bg-color: transparent;
  --el-collapse-header-text-color: var(--color-white);
  --el-collapse-header-font-size: 14px;
  --el-collapse-content-bg-color: transparent;
  --el-collapse-content-font-size: 12px;
  --el-collapse-content-text-color: var(--color-text);
}

.jobs-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.job-card {
  border: 1px solid var(--color-border);
  padding: 6px 12px;
  line-height: 1.6;
  background-color: rgba(0, 0, 0, 0.18);
  font-size: 12px;
}
.job-card-header {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 16px;
}
.job-card-row {
  display: flex;
  gap: 8px;
}
.job-card-action-use {
  display: flex;
  align-items: center;
  line-height: 1;
  padding: 2px 6px;
  margin: -2px -6px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.9);
  cursor: pointer;
  &:hover {
    background-color: rgba(16, 16, 16, 0.9);
  }
  &:active {
    background-color: rgba(32, 32, 32, 0.9);
  }
}

@media screen and (max-width: 1024px) {
  .jobs-container {
    grid-template-columns: 1fr;
  }
}
</style>

<style lang="scss">
.job-list {
  & .el-collapse-item__content {
    padding-bottom: 8px;
  }
}
</style>
