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
  // deriveAttributes
  deriveAttributes?: COCDeriveAttributes;
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

export type COCAttributesKey = keyof COCAttributes;
