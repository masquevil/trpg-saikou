import type { Skill } from './skill';

// 使用 skill table 的原始数据
export interface SkillTableResource<SkillGroupName extends string> {
  // 全部技能列表
  skills: Skill[];
  // 技能分组
  groups: Record<SkillGroupName, string[]>;
  // 技能分组顺序
  groupOrder: SkillGroupName[];
  // 技能别名
  skillNameAlias?: Record<string, string[]>;
}
