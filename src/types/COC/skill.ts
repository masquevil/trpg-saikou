type SkillGroupKey =
  | 'jiyi'
  | 'muyu'
  | 'waiyu'
  | 'jiashi'
  | 'gedou'
  | 'sheji'
  | 'kexue'
  | 'shengcun'
  | 'other';

export interface Skill {
  // 技能名
  name: string;
  // 文本介绍
  intro: string;
  // 初始值
  init: number;
  // 如果是分组，则有这一项
  group?: {
    // 分组 key
    // key: SkillGroupKey;
    // 该分组默认显示的技能，数量为显示的行数，数字为子技能的索引，-1 不选择
    show: number[];
    // 该分组内包含的技能
    skills: ChildSkill[];
  };
  // 暂时保留，老的结构要用
  // num?: number;
  // type?: string;
  // selectValue?: SkillGroupKey;
}

export interface ChildSkill {
  // 子技能名
  name: string;
  // 初始值，默认与父技能相同
  init?: number;
}
