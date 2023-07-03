import type { COCPlayerCharacter } from '@/types/coc-card/character';

import { createWeapon } from './weapon';

export function createPC(
  override?: Partial<COCPlayerCharacter>
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
    proSkills: [],
    skillPoints: [],
    weapons: [
      createWeapon({
        name: '徒手格斗',
        skill: '格斗(斗殴)',
        dam: '1D3 + DB',
        range: '/',
        round: '/',
        num: '/',
        err: '/',
      }),
    ],
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
    ...override,
  };
}
