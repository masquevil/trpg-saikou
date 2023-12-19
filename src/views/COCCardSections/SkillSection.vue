<script setup lang="ts">
import { computed, reactive, watch } from 'vue';

import PaperSection from '@/components/coc-card/PaperSection.vue';
import SkillTable from '@/components/coc-card/SkillTable.vue';
import WritableRow from '@/components/coc-card/WritableRow.vue';
// models
import { skillGroups } from '@/models/coc-card/skill';
import { getProPointByJobAndAttrs } from '@/models/coc-card/job';

import { usePC, useSuggestion, usePageData } from '@/hooks/useCOCCardProviders';

const skillTableSeparateIndex = 5;

const pc = usePC();
const suggestion = useSuggestion();
const pageData = usePageData();

function getValues() {
  const { pro, interest } = pc?.value.pointValues || {};
  return {
    pro: {
      point: Number(pro || 0),
      str: pro || '',
    },
    interest: {
      point: Number(interest || 0),
      str: interest || '',
    },
  };
}
const values = reactive(getValues());
const rests = computed(() => {
  let p = 0;
  let i = 0;
  pc?.value.skillPoints.forEach(([_, point]) => {
    p += point.p || 0;
    i += point.i || 0;
  });
  return {
    proPoint: values.pro.point - p,
    interestPoint: values.interest.point - i,
  };
});

function updateLocalValue(key: 'pro' | 'interest', value: string = '') {
  const data = values[key];
  const customValue = pc?.value.pointValues[key];
  data.str = customValue ? customValue : value;
  if (data.str) {
    const num = Number(data.str);
    data.point = !Number.isNaN(num) ? num : 0;
  } else {
    data.point = 0;
  }
}

function updatePointValue(key: 'pro' | 'interest', value: string) {
  if (pc && pc.value.pointValues[key] !== value) {
    pc.value.pointValues[key] = value;
  }
}

// watch attributes & job change
watch(
  () => ({
    job: pc?.value.job,
    attributes: pc?.value.attributes,
  }),
  ({ job: jobName, attributes }) => {
    const { point: newPro } = getProPointByJobAndAttrs(jobName, attributes);
    if (newPro) {
      updateLocalValue('pro', `${newPro > 0 ? newPro : ''}`);
    }

    const int = attributes?.int;
    const newInterest = int ? `${int * 2}` : '';
    if (newInterest) {
      updateLocalValue('interest', newInterest);
    }
  },
  { deep: true }
);

// watch pc values change
watch(
  () => ({
    pointValues: pc?.value.pointValues,
    pro: pc?.value.pointValues.pro,
    interest: pc?.value.pointValues.interest,
  }),
  (
    { pointValues: newPointValues, pro: newPro, interest: newInterest },
    { pointValues: oldPointValues, pro: oldPro, interest: oldInterest }
  ) => {
    // import from txt
    if (newPointValues !== oldPointValues) {
      updateLocalValue('pro', newPro);
      updateLocalValue('interest', newInterest);
      return;
    }
    if (newPro !== oldPro) {
      updateLocalValue('pro', newPro);
    }
    if (newInterest !== oldInterest) {
      updateLocalValue('interest', newInterest);
    }
  },
  { deep: true }
);
</script>

<template>
  <PaperSection
    class="skill-section"
    :class="{
      'printing-image': pageData?.printing,
    }"
  >
    <template v-slot:header>
      <div class="header">
        <div class="header-left points-container">
          <div class="point-container">
            <WritableRow
              class="point-writer"
              label="职业点数"
              :placeholder="pc?.job ? '问KP' : ''"
              :char="3"
              :modelValue="values.pro.str"
              @update:modelValue="(v) => updatePointValue('pro', v)"
            />
            <div
              v-if="values.pro.point > 0"
              class="point-rest"
            >
              剩余: {{ rests.proPoint }}
            </div>
          </div>
          <div class="point-container">
            <WritableRow
              class="point-writer"
              label="兴趣点数"
              :char="3"
              :modelValue="values.interest.str"
              @update:modelValue="(v) => updatePointValue('interest', v)"
            />
            <div
              v-if="values.interest.point > 0"
              class="point-rest"
            >
              剩余: {{ rests.interestPoint }}
            </div>
          </div>
        </div>
        <h1 class="heading">
          <span class="title">技能表</span>
          <span class="subtitle">Skill</span>
        </h1>
        <div class="header-right points-container">
          <div>技能成功率上限</div>
          <div class="point-container">
            <WritableRow
              class="point-writer"
              label="本职"
              :char="2"
              modelValue="70"
            />
          </div>
          <div class="point-container">
            <WritableRow
              class="point-writer"
              label="其它"
              :char="2"
              modelValue="50"
            />
          </div>
        </div>
      </div>
    </template>
    <div class="skill-section-body">
      <SkillTable
        :data="skillGroups.slice(0, skillTableSeparateIndex)"
        :suggestion="suggestion"
      />
      <div class="divider"></div>
      <SkillTable :data="skillGroups.slice(skillTableSeparateIndex)" />
    </div>
    <!-- <div class="border-stabler"></div> -->
  </PaperSection>
</template>

<style scoped lang="scss">
.header {
  flex: 1 1 0;
  padding: 0.4em 0.8em;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-left {
  flex: 1 1 0;
  display: flex;
}
.header-right {
  flex: 1 1 0;
  display: flex;
  justify-content: flex-end;
}
.heading {
  display: flex;
  gap: 0.4em;
  align-items: baseline;
  font-size: 1em;
}
.title {
  font-size: 1.15em;
}
.subtitle {
  font-size: 0.9em;
}

.points-container {
  gap: 0.6em;
  align-items: center;
  font-size: 0.88em;
}
.point-container {
  background-color: white;
  color: var(--color-black);
  display: flex;
  align-items: center;
  gap: 0.4em;
  font-size: 0.96em;
  line-height: 1;
  padding: 0 0.5em 0.1em;
}
.point-writer {
  display: flex;
  align-items: center;

  & :deep(.label-title) {
    padding-bottom: 0;
  }
  & :deep(.input) {
    padding: 0.1em 0.2em;
  }
}
.point-rest {
  font-size: 0.88em;
  color: #777;
}

.skill-section-body {
  display: flex;
}
.divider {
  border-right: 1px solid var(--color-black);
  height: 100%;
}
.border-stabler {
  border-top: 1px solid transparent;
  width: 100%;
  align-self: stretch;
}

/* when print image & print */
@mixin printing-styles {
  .point-rest {
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
    .header {
      flex-direction: column;
      gap: 0.4em;
    }
    .skill-section-body {
      flex-direction: column;
      flex-wrap: wrap;
      overflow: auto;

      .divider {
        border: none;
        border-top: 1px solid var(--color-black);
        align-self: stretch;
      }
    }
    .skill-table {
      min-width: 31em; // 210mm / 3.2mm - 1.8em * 2
    }
  }
}
</style>
