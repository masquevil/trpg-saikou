<script setup lang="ts">
import { computed, reactive, watch } from 'vue';

import PaperSection from '@/components/coc-card/PaperSection.vue';
import SkillTable from '@/components/coc-card/SkillTable.vue';
import WritableRow from '@/components/coc-card/WritableRow.vue';
// models
import { skillGroups } from '@/models/coc-card/skill';

import { usePC, useSuggestion, usePageData } from '@/hooks/useCOCCardProviders';

const pc = usePC();
const suggestion = useSuggestion();
const pageData = usePageData();

const values = reactive({
  pro: {
    point: 0,
    str: pc?.value.pointValues.pro || '',
  },
  interest: {
    point: 0,
    str: pc?.value.pointValues.interest || '',
  },
});
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

function updatePointValue(key: 'pro' | 'interest', value: string) {
  const data = values[key];
  data.str = value;
  if (value) {
    const num = Number(value);
    data.point = !Number.isNaN(num) ? num : 0;
  } else {
    data.point = 0;
  }
  if (pc) {
    pc.value.pointValues[key] = value;
  }
}

// watch suggestion change
watch(
  () => [suggestion, pc?.value.attributes.int],
  () => {
    if (suggestion?.value.point) {
      const v = suggestion.value.point > 0 ? suggestion.value.point : 0;
      updatePointValue('pro', `${v > 0 ? v : ''}`);
    }
  },
  { deep: true }
);

// watch pc int change
watch(
  () => pc?.value.attributes.int,
  () => {
    const int = pc?.value.attributes.int;
    const str = typeof int === 'number' ? `${int * 2}` : '';
    updatePointValue('interest', str);
  }
);

// watch pc values change
watch(
  () => [pc?.value.pointValues],
  () => {
    if (!pc) return;
    if (pc.value.pointValues.pro !== values.pro.str) {
      updatePointValue('pro', pc.value.pointValues.pro);
    }
    if (pc.value.pointValues.interest !== values.interest.str) {
      updatePointValue('interest', pc.value.pointValues.interest);
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
      <SkillTable :data="skillGroups.slice(0, 6)" />
      <div class="divider"></div>
      <SkillTable :data="skillGroups.slice(6)" />
    </div>
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
  font-size: 0.88em;
  line-height: 1;
  padding: 0.1em 0.6em;
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
