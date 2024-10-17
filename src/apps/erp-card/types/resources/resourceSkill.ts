export interface ResourceSkill {
  // 技能名
  name: string;
  // 文本介绍
  intro?: string;
  // 初始值
  init: number;
  // 初始值的 placeholder，为 0 则显示（TODO: 默认都是 0，不要用 1 了）
  // 是为了 母语 = 教育 和 闪避 = 1/2敏捷
  initPlaceholder?: string;
  // 如果是分组，则有这一项
  group?: {
    // 该分组默认显示的技能，数量为显示的行数，名称则显示，空字符串则不显示
    show: string[];
    // 该分组内包含的技能
    skills: ResourceChildSkill[];
  };
}

export interface ResourceChildSkill {
  // 子技能名
  name: string;
  // 初始值，默认与父技能相同
  init?: number;
  // 文本介绍
  intro?: string;
}

export interface ResourceSkillPack {
  // 技能包名
  name: string;
  // 系统性学习加值，为 0 则不可系统性学习
  initPlus: number;
  // 技能列表
  skills: ResourceSkill[];
}
