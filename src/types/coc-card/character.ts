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
  // 技能与点数
  proSkills: COCPCSkill[];
  // skillPoints: Record<string, SkillPoint>;
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

// 技能名 | 技能名, 子技能名, 子技能位置
export type COCPCSkill = string | [string, string, number];

export interface SkillPoint {
  p?: number;
  i?: number;
  g?: number;
  c?: boolean;
}
