import type { ERPAttributesKey } from './character';

export type PointAttr = ERPAttributesKey;
// 属性计算方式的单元。如 ['edu', 2] => 教育×2
type PointCalculatorUnit = [PointAttr, number];
// 属性计算方式。如 [[['edu', 2]], [['str', 2], ['dex', 2]]] => 教育×2 + 力量或敏捷×2
type PointCalculator = PointCalculatorUnit[][];
// 职业所包含的一个技能，如果是数组则是多选一
// 子技能：{ 格斗: '斗殴' } 格式
type JobSkillUnit = string | { [key: string]: string };
type JobSkillKey = JobSkillUnit | JobSkillUnit[];
export type JobSkills = JobSkillKey[];

export interface Job {
  // 职业名
  name: string;
  // 属性计算方式。
  point: PointCalculator;
  // 信用评级范围。如：'[30, 70]'
  wealth: [number, number];
  // 默认的技能列表。例子：（实际非数字，而是文本）
  // [54, 55]：本职技能为 54,55，任选 6 个
  // [1, [3, 4, 5, 6]]：本职技能为 1，四选一（3,4,5,6），任选 6 个
  // [1, [3, 4, 5, 6], [3, 4, 5, 6]] 本职技能为 1，四选二（3,4,5,6），任选 5 个
  skills: JobSkills;
}
