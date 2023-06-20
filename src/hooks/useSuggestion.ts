import { computed } from 'vue';
import type { ComputedRef } from 'vue';

import formattedJobs from '@/models/coc-card/job';
import { getDefaultSuggestion } from '@/models/coc-card/suggestion';
import { skills } from '@/constants/coc-card/skill';
import { countTexts } from '@/constants/coc-card/countTexts';

import type { COCPlayerCharacter } from '@/types/coc-card/character';
import type { COCCardViewData } from '@/types/coc-card/viewData';
import type { Suggestion } from '@/types/coc-card/suggestion';

// calculate suggestion: pro skills, point, wealth
export default function useSuggestion(
  pc: COCPlayerCharacter,
  viewData: COCCardViewData
): ComputedRef<Suggestion> {
  resetShowingChildSkills(viewData);
  const { jobs } = formattedJobs;

  const suggestion = computed(() => {
    const suggestion = getDefaultSuggestion();
    const job = jobs.get(pc.job);
    const sugMap = new Map<string, number>();
    if (!job) return suggestion;
    // wealth
    suggestion.wealth = [...job.wealth];
    // point
    suggestion.point = job.point.reduce((sum, formula) => {
      const values = formula.map(
        ([key, rate]) => (pc.attributes[key] || 0) * rate
      );
      return sum + Math.max(...values);
    }, 0);
    // pick skills and handle suggest skills
    viewData.jobSkills = [...job.skills];
    resetShowingChildSkills(viewData);
    pc.proSkills = [];
    const placedGroupSkill: Record<string, number> = {};
    job.skills.forEach((skillKey) => {
      // 普通技能
      if (typeof skillKey === 'string') {
        pc.proSkills.push(skillKey);
        sugMap.set(skillKey, 0);
      } else if (Array.isArray(skillKey)) {
        // 多选技能
        suggestion.multiSkills.push(
          skillKey.map((skillKey) => {
            if (typeof skillKey === 'string') return skillKey;
            const [name, childName] = Object.entries(skillKey)[0];
            return { name, childName };
          })
        );
      } else {
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
        pc.proSkills.push([skillName, childSkillName, cIndex]);
        // set suggestion item
        let sugKey = skillName;
        if (childSkillName) sugKey = `${skillName}(${childSkillName})`;
        if (isDescribedName) sugKey = skillNameDesc;
        sugMap.set(
          sugKey,
          isDescribedName || childSkillName ? 0 : (sugMap.get(sugKey) || 0) + 1
        );
      }
    });
    delete viewData.jobSkills;
    // set suggestion
    const restCount = 8 - job.skills.length;
    suggestion.text = [
      ...sugMap.entries(),
      ...(restCount ? [['其他个人或时代特长', restCount]] : []),
    ]
      .map(
        ([key, count]) =>
          `${key}${count ? `(任${countTexts[`${count}`]})` : ''}`
      )
      .join('、');
    return suggestion;
  });

  return suggestion;
}

function resetShowingChildSkills(viewData: COCCardViewData) {
  skills.forEach((skill) => {
    if (!skill.group) return;
    viewData.showingChildSkills.set(skill.name, [...skill.group.show]);
  });
}
