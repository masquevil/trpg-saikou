import { throwDiceDetail } from '@/utils/random';

import type { ERPAttributes, ERPAttributesKey } from '../types/character';

const attrKeys: ERPAttributesKey[] = ['str', 'dex', 'con', 'app', 'pow', 'int', 'luc', 'cre'];

export function generateRandomAttributes() {
  const attributes: Partial<ERPAttributes> = {};
  attrKeys.forEach((key) => {
    attributes[key] = throwDiceDetail({ dice: 6, times: 4, pick: 3 }).result * 5;
  });
  return attributes as ERPAttributes;
}

export function getAttributesSum(attributes: ERPAttributes) {
  const { str, con, dex, app, pow, cre, luc, int } = attributes;
  const vals = [str, con, dex, app, pow, cre, luc, int];
  return vals.reduce<number>((sum, cur) => sum + cur, 0);
}

export function withDefaultAttributes(attributes: Partial<ERPAttributes>): ERPAttributes {
  return {
    str: 0,
    dex: 0,
    con: 0,
    app: 0,
    pow: 0,
    cre: 0,
    int: 0,
    luc: 0,
    ...attributes,
  };
}
