import type { SkillGroupName } from '@/types/COCMetaData/skillGroup';
import type { Skill } from '@/types/COC/skill';
import type { SkillGroups } from '@/types/COC/formattedSkill';

import { skills } from '@/constants/COC/skill';
import {
  skillGroups as groups,
  skillGroupOrder,
} from '@/constants/COCMetaData/skillGroup';

function getFormattedSkillGroups({
  skills,
  groups,
  groupOrder,
}: {
  skills: Skill[];
  groups: Record<SkillGroupName, string[]>;
  groupOrder: SkillGroupName[];
}): SkillGroups {
  const skillsMap = new Map<string, Skill>();
  skills.forEach((skill) => {
    skillsMap.set(skill.name, skill);
  });

  const table = groupOrder.map((groupName) => {
    const groupSkillNames = groups[groupName];
    const groupSkills = groupSkillNames.map((skillName) => {
      return skillsMap.get(skillName)!;
    });
    return {
      groupName,
      groupSkills,
    };
  });
  return table;
}

export const skillGroups = getFormattedSkillGroups({
  skills,
  groups: groups,
  groupOrder: skillGroupOrder,
});
