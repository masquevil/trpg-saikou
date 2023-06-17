import type { Skill } from '@/types/coc-card/skill';
import type { SkillGroupName } from '@/types/coc-card/skillGroup';
import type { SkillGroups } from '@/types/coc-card/formattedSkill';
import type { COCPlayerCharacter } from '@/types/coc-card/character';

import { skills } from '@/constants/coc-card/skill';
import {
  skillGroups as groups,
  skillGroupOrder,
} from '@/constants/coc-card/skillGroup';

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

export const dynamicInitFormulas: Record<
  string,
  (pc: COCPlayerCharacter) => number
> = {
  母语: (pc) => pc.attributes.edu || 0,
  闪避: (pc) => Math.floor((pc.attributes.dex || 0) / 2),
};
