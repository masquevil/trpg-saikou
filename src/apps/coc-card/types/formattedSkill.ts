import type { Skill } from './skill';
import type { SkillGroupName } from './skillGroup';

export interface SkillGroup {
  groupName: SkillGroupName;
  groupSkills: Skill[];
}

export type SkillGroups = SkillGroup[];
