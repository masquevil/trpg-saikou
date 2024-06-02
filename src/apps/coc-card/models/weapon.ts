import type { Weapon } from '../types/weapon';

export { weapons, weaponGroups, weaponGroupOrders } from '../constants/weapon';

export function createWeapon(override?: Partial<Weapon>): Weapon {
  return {
    name: '',
    skill: '',
    dam: '',
    tho: 0,
    range: '',
    round: '',
    num: '',
    err: '',
    ...override,
  };
}
