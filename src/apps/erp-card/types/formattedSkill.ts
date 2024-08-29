import type { Skill } from './skill';

export interface SkillGroup<GroupName extends string> {
  groupName: GroupName;
  groupSkills: Skill[];
}

export type SkillGroups<GroupName extends string> = SkillGroup<GroupName>[];
