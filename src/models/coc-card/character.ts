import type { COCPlayerCharacter } from '@/types/coc-card/character';

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
    proSkills: [],
    ...override,
  };
}
