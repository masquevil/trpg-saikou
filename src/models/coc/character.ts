import type { COCAttributes } from './attribute';

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
}

export function createPC(override?: Partial<COCPlayerCharacter>) {
  return {
    name: '',
    playerName: '',
    time: '',
    job: '',
    age: '',
    gender: '',
    location: '',
    hometown: '',
    attributes: {},
    ...override,
  };
}
