import type { COCPlayerCharacter } from '../types/character';

import { weapons, createWeapon } from './weapon';

export function createPC(
  override?: Partial<COCPlayerCharacter>,
): COCPlayerCharacter {
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
