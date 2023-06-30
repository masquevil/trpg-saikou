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
  // attributes
  attributes: Partial<COCAttributes>;
  deriveAttributes?: COCDeriveAttributes;
  battleAttributes: COCBattleAttributes;
  // 技能与点数
  proSkills: COCPCSkill[];
  skillPoints: [COCPCSkill, SkillPoint][];
  // weapons
  weapons: Weapon[];
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
    max?: string;
  };
  hp: {
    now?: string;
    max?: string;
  };
  mp: {
    now?: string;
    max?: string;
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
  p?: number;
  i?: number;
  g?: number;
  c?: boolean;
}
