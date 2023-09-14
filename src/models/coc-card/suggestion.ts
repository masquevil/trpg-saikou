import formattedJobs from '@/models/coc-card/job';
import { countTexts } from '@/constants/coc-card/texts';

import type {
  Suggestion,
  SuggestionMultiSkill,
} from '@/types/coc-card/suggestion';

export function getDefaultSuggestion(
  override?: Partial<Suggestion>
): Suggestion {
  return {
    wealth: [-1, -1],
    text: '',
    multiSkills: [],
    multiSkillTexts: [],
    ...override,
  };
}

export function getJobSuggestion(jobName: string): Suggestion {
  const { jobs } = formattedJobs;
  const suggestion = getDefaultSuggestion();

  const job = jobs.get(jobName);
  const sugMap = new Map<string, number>();
  if (!job) return suggestion;
  // wealth
  suggestion.wealth = [...job.wealth];
  // handle suggest skills
  job.skills.forEach((skillKey) => {
    // 普通技能
    if (typeof skillKey === 'string') {
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
  // set suggestion
  const restCount = 8 - job.skills.length;
  suggestion.text = [
    ...sugMap.entries(),
    ...(restCount ? [['其他个人或时代特长', restCount]] : []),
  ]
    .map(
      ([key, count]) => `${key}${count ? `(任${countTexts[`${count}`]})` : ''}`
    )
    .join('、');
  // set mutil skill texts
  suggestion.multiSkillTexts = getMultiSkillTexts(suggestion);

  return suggestion;
}

function getMultiSkillTexts(suggestion: Suggestion) {
  const multiSkillsInfo: [SuggestionMultiSkill, number, string][] = [];
  suggestion.multiSkills.forEach((multiSkill) => {
    const eIndex = multiSkillsInfo.findIndex(([eMultiSkill]) => {
      const isSame = eMultiSkill.every((eMultiSkillItem, index) => {
        const multiSkillItem = multiSkill[index];
        if (typeof eMultiSkillItem === 'string')
          return eMultiSkillItem === multiSkillItem;
        if (typeof multiSkillItem === 'string') return false;
        return (
          eMultiSkillItem.name === multiSkillItem.name &&
          eMultiSkillItem.childName === multiSkillItem.childName
        );
      });
      return isSame;
    });
    if (eIndex === -1) {
      multiSkillsInfo.push([multiSkill, 1, countTexts[`${multiSkill.length}`]]);
    } else {
      multiSkillsInfo[eIndex][1] += 1;
    }
  });

  const multiSkillsTexts = multiSkillsInfo.map((info) => {
    const skillInfos = info[0];
    const skillText = skillInfos.map((skillInfo) => {
      let skillName = skillInfo;
      if (typeof skillInfo !== 'string') {
        skillName = `${skillInfo.name}:${skillInfo.childName || '任一'}`;
        if (skillInfo.name === '母语') skillName = '母语';
      }
      return skillName;
    });
    return `${info[2]}选${countTexts[`${info[1]}`]}(${skillText})`;
  });

  return multiSkillsTexts;
}
