<script setup lang="ts">
import { ref, computed } from 'vue';

import PaperSection from '@/components/PaperSection.vue';
import WritableRow from '@/components/WritableRow.vue';
import JobGroupTree from '@/components/JobGroupTree.vue';
import useTheme from '@/hooks/useTheme';

import formattedJobs from '@/models/coc/job';

useTheme('light');

const { jobs, jobGroups } = formattedJobs;

const data = jobGroups.map(({ name, jobs }) => ({
  label: name,
  children: jobs.map(({ name }) => ({ label: name })),
}));

</script>

<template>
  <main class="page">
    <div class="paper">
      <div class="row section-row">
        <PaperSection title="调查员" subTitle="Investigator">
          <div class="info-section">
            <WritableRow label="姓名"></WritableRow>
            <WritableRow label="玩家"></WritableRow>
            <WritableRow label="职业" placeholder="输入自定义职业或选择预设"></WritableRow>
            <div class="row">
              <WritableRow label="年龄"></WritableRow>
              <WritableRow label="性别"></WritableRow>
            </div>
            <div class="row">
              <WritableRow label="住地"></WritableRow>
              <WritableRow label="故乡"></WritableRow>
            </div>
          </div>
        </PaperSection>
        <PaperSection title="属性" subTitle="Attributes">test</PaperSection>
      </div>
      <JobGroupTree :tree="data"></JobGroupTree>
    </div>
  </main>
</template>

<style scoped lang="scss">
.page {
  width: 960px;
  margin: 32px auto;
}

.paper {
  border: 1px dashed #eee;
  box-sizing: padding-box;
  width: 210mm;
  height: 297mm;
  padding: 5mm 6mm;
  font-size: 3.2mm;
}

.row {
  display: flex;
  gap: 0.4em;
}

.section-row {
  gap: 1em;
}

.info-section {
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  padding: 0.4em 0.6em 0.6em;
}

@media print {
  .page {
    width: auto;
    margin: auto;
  }

  .paper {
    border: 0;
  }
}
</style>
