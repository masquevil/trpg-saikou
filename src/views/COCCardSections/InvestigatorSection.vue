<script setup lang="ts">
import { ref, computed, watch, inject } from 'vue';
import vClickOutside from '@/directives/clickOutside';

// components
import PaperSection from '@/components/PaperSection.vue';
import WritableRow from '@/components/WritableRow.vue';
import JobGroupTree from '@/components/JobGroupTree.vue';
import type { Props as JobGroupTreeProps } from '@/components/JobGroupTree.vue';

// models
import type { COCPlayerCharacter } from '@/models/coc/character';
import formattedJobs from '@/models/coc/job';

const { jobs, jobGroups } = formattedJobs;

const isJobInputFocus = ref(false);
const isJobSeletorShowing = ref(false);
const jobSearchInput = ref('');
const pc = inject<COCPlayerCharacter>('pc');

function openJobSelector() {
  isJobInputFocus.value = true;
  isJobSeletorShowing.value = true;
}
function closeJobSelector() {
  isJobSeletorShowing.value = false;
}
watch(
  () => isJobInputFocus.value || isJobSeletorShowing.value,
  () => {
    jobSearchInput.value = '';
  }
);

const jobTree = computed(() => {
  const filterText = jobSearchInput.value;
  const filteredData = jobGroups.reduce((result, jobGroup) => {
    const { name: groupName, pinyin: groupPinyin, jobs } = jobGroup;
    const filteredChildren = jobs.reduce((result, job) => {
      if (
        !filterText ||
        groupName.includes(filterText) ||
        groupPinyin.includes(filterText) ||
        job.name.includes(filterText) ||
        job.pinyin.includes(filterText)
      ) {
        result.push({ label: job.name });
      }
      return result;
    }, [] as { label: string }[]);
    if (filteredChildren.length) {
      result.push({
        label: groupName,
        children: filteredChildren,
      });
    }
    return result;
  }, [] as JobGroupTreeProps['tree']);
  return filteredData;
});
</script>

<template>
  <PaperSection
    title="调查员"
    subTitle="Investigator"
    v-if="pc"
  >
    <div class="info-section">
      <WritableRow
        label="姓名"
        v-model="pc.name"
      />
      <WritableRow
        label="玩家"
        v-model="pc.playerName"
      />
      <WritableRow
        label="时代"
        v-model="pc.time"
        @focus="closeJobSelector"
      />
      <div
        class="rel"
        v-click-outside="closeJobSelector"
      >
        <WritableRow
          label="职业"
          v-model="pc.job"
          placeholder="自定义职业或选择预设职业"
          @focus="openJobSelector"
          @blur="isJobInputFocus = false"
        />
        <Transition name="slide-up">
          <div
            v-if="isJobInputFocus || isJobSeletorShowing"
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
            <JobGroupTree :tree="jobTree"></JobGroupTree>
          </div>
        </Transition>
      </div>
      <div class="row">
        <WritableRow
          label="年龄"
          :char="6"
          v-model="pc.age"
          @focus="closeJobSelector"
        />
        <WritableRow
          label="性别"
          :char="6"
          v-model="pc.gender"
        />
      </div>
      <div class="row">
        <WritableRow
          label="住地"
          :char="6"
          v-model="pc.location"
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
.row {
  display: flex;
  gap: 1em;
}

.info-section {
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  padding: 0.4em 0.6em 0.6em;
}

.job-selector {
  position: absolute;
  width: calc(210mm - 2em);
  left: -2em;
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

@media print {
  .job-selector {
    display: none;
  }
  .info-section ::placeholder {
    color: transparent;
  }
}
</style>
