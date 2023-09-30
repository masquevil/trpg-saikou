import type { Weapon } from './weapon';

export interface COCPlayerCharacter {
  // basic infos
  name: string;
  playerName: string;
  time: string;
  job: string;
  age: string;
  gender: string;
  location: string;
  hometown: string;
  avatar?: string;
  sdAvatar?: string;
  // attributes
  attributes: Partial<COCAttributes>;
  deriveAttributes?: COCDeriveAttributes;
  battleAttributes: COCBattleAttributes;
  // 技能与点数
  pointValues: {
    pro: string;
    interest: string;
  };
  proSkills: COCPCSkill[];
  skillPoints: [COCPCSkill, SkillPoint][];
  // weapons
  weapons: Weapon[];
  // stories
  stories: {
    app: string; // 形象描述
    belief: string; // 思想与信念
    IPerson: string; // 重要之人
    IPlace: string; // 意义非凡之地
    IItem: string; // 宝贵之物
    trait: string; // 特质
    scar: string; // 伤口与疤痕
    mad: string; // 精神症状
    desc: string; // 个人介绍
  };
  // assets
  assets: {
    cash: string; // 现金
    consumption: string; // 消费水平
    assets: string; // 资产
    items: string; // 物品
    magicItems: string; // 魔法物品与典籍
    magics: string; // 法术
    touches: string; // 第三类接触
  };
  // 经历过的模组
  experiencedModules: string;
  // 人物关系
  friends: string;
}

export interface COCAttributes {
  str: number;
  dex: number;
  con: number;
  app: number;
  pow: number;
  siz: number;
  edu: number;
  int: number;
  luc: number;
}

export type COCAttributesKey = keyof COCAttributes;

export interface COCDeriveAttributes {
  sanity: {
    now?: string;
    start?: string;
  };
  hp: {
    now?: string;
    start?: string;
  };
  mp: {
    now?: string;
    start?: string;
  };
}

export interface COCBattleAttributes {
  db?: string;
  size?: string;
  armor?: string;
  mov?: string;
}

// 技能名 | 技能名, 子技能名, 子技能位置
// 子技能名 仅作为占位，实际使用 viewData 作为 source of truth
export type COCPCSkill = string | [string, string, number];

export interface SkillPoint {
  b?: number;
  p?: number;
  i?: number;
  g?: number;
  c?: boolean;
}
