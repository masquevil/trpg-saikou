import type { ERPPlayerCharacter } from '../types/character';

import { weapons, createWeapon } from './weapon';

export function createPC(override?: Partial<ERPPlayerCharacter>): ERPPlayerCharacter {
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
    deriveAttributes: {
      sanity: {},
      hp: {},
      mp: {},
    },
    battleAttributes: {},
    pointValues: {},
    proSkills: [],
    skillPoints: [],
    weapons: [createWeapon(weapons[0])],
    stories: {
      app: '',
      belief: '',
      IPerson: '',
      IPlace: '',
      IItem: '',
      trait: '',
      scar: '',
      mad: '',
      desc: '',
    },
    // assets
    assets: {
      cash: '',
      consumption: '',
      assets: '',
      items: '',
      magicItems: '',
      magics: '',
      touches: '',
    },
    experiencedModules: '',
    friends: '',
    ...override,
  };
}
