import { computed, watch } from 'vue';
import type { ComputedRef, Ref } from 'vue';

import formattedJobs from '@/models/coc-card/job';
import { getJobSuggestion } from '@/models/coc-card/suggestion';
import { resetShowingChildSkills } from '@/models/coc-card/skill';

import type { COCPlayerCharacter } from '@/types/coc-card/character';
import type { COCCardViewData } from '@/types/coc-card/viewData';
import type { Suggestion } from '@/types/coc-card/suggestion';

// calculate suggestion: pro skills, wealth
export default function useSuggestion(
  pc: Ref<COCPlayerCharacter>,
  viewData: COCCardViewData,
): ComputedRef<Suggestion> {
  const { jobs } = formattedJobs;

  const suggestion = computed(() => {
    return getJobSuggestion(pc.value.job);
  });

  watch(
    () => pc.value.job,
    () => {
      const job = jobs.get(pc.value.job);
      if (!job) return;
      // pick skills
      viewData.jobSkills = [...job.skills];
      resetShowingChildSkills(viewData);
      pc.value.proSkills = [];
      const placedGroupSkill: Record<string, number> = {};
      job.skills.forEach((skillKey) => {
        // 普通技能
        if (typeof skillKey === 'string') {
          pc.value.proSkills.push(skillKey);
        } else if (!Array.isArray(skillKey)) {
          // 二级技能
          const [skillNameDesc, childSkillName] = Object.entries(skillKey)[0];
          let skillName = skillNameDesc;
          const isDescribedName = skillNameDesc.includes('(');
          if (isDescribedName) {
            skillName = skillName.split('(')[0];
          }
          // set view data (suggested child skill names)
          const currentData = viewData.showingChildSkills.get(skillName);
          if (!currentData) return;
          let cIndex = -1;
          if (childSkillName) {
            // 技能 - Name:ChildName
            cIndex = currentData.findIndex((cName) => cName === childSkillName);
            if (cIndex === -1) {
              cIndex = currentData.findIndex((cName) => !cName);
              currentData[cIndex] = childSkillName;
            }
          } else {
            // 技能 - Name:any
            const count = placedGroupSkill[skillName] || 0;
            let skip = count;
            cIndex = currentData.findIndex((cName) => {
              if (cName) return false;
              return skip-- === 0;
            });
            placedGroupSkill[skillName] = count + 1;
          }
          if (cIndex === -1) return;
          // set pc data
          pc.value.proSkills.push([skillName, childSkillName, cIndex]);
        }
      });
      delete viewData.jobSkills;
    },
  );

  return suggestion;
}
