export interface Skill {
  // 技能名
  name: string;
  // 如果没有技能名，需要一个 key
  hidden?: string;
  // 文本介绍
  intro: string;
  // 初始值
  init: number;
  // 初始值的 placeholder，为 0 则显示
  // 是为了 母语 = 教育 和 闪避 = 1/2敏捷
  initPlaceholder?: string;
  // 如果是分组，则有这一项
  group?: {
    // 该分组默认显示的技能，数量为显示的行数，数字为子技能的索引，-1 不选择
    show: string[];
    // 该分组内包含的技能
    skills: ChildSkill[];
  };
}

export interface ChildSkill {
  // 子技能名
  name: string;
  // 初始值，默认与父技能相同
  init?: number;
}
