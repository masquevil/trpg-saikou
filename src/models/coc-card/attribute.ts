import { throwDice, growPoint } from '@/utils/coc';

import type {
  COCAttributes,
  COCAttributesKey,
} from '@/types/coc-card/character';

const normalAttrs: COCAttributesKey[] = ['str', 'dex', 'con', 'app', 'pow'];
const higherAttrs: COCAttributesKey[] = ['siz', 'edu', 'int'];
const otherAttrs: COCAttributesKey[] = ['luc'];

export function generateRandomAttributes() {
  const attributes: Partial<COCAttributes> = {};
  normalAttrs.forEach((key) => {
    attributes[key] = throwDice(6, 3) * 5;
  });
  higherAttrs.forEach((key) => {
    attributes[key] = throwDice(6, 2, 6) * 5;
  });
  otherAttrs.forEach((key) => {
    attributes[key] = throwDice(6, 3) * 5;
  });
  return attributes as COCAttributes;
}

export function modifyAttributesByAge(
  attributes: Partial<COCAttributes>,
  age: number,
): COCAttributes {
  let results = withDefaultAttributes(attributes);
  if (age < 15) {
    // ignore this
  } else if (age < 20) {
    // 15 ~ 19
    results = minusAttributes(results, ['str', 'siz'], 5);
    results.luc = Math.max(results.luc, throwDice(6, 3) * 5);
  } else if (age < 40) {
    // 20 ~ 39
    results.edu = growPoint(results.edu);
  } else if (age < 50) {
    // 40 ~ 49
    results = minusAttributes(results, ['str', 'con', 'dex'], 5);
    results.app = results.app - 5;
    results.edu = growPoint(results.edu, 2);
  } else if (age < 60) {
    // 50 ~ 59
    results = minusAttributes(results, ['str', 'con', 'dex'], 10);
    results.app = results.app - 10;
    results.edu = growPoint(results.edu, 3);
  } else if (age < 70) {
    // 60 ~ 69
    results = minusAttributes(results, ['str', 'con', 'dex'], 20);
    results.app = results.app - 15;
    results.edu = growPoint(results.edu, 4);
  } else if (age < 80) {
    // 70 ~ 79
    results = minusAttributes(results, ['str', 'con', 'dex'], 40);
    results.app = results.app - 20;
    results.edu = growPoint(results.edu, 4);
  } else if (age < 90) {
    // 80 ~ 89
    results = minusAttributes(results, ['str', 'con', 'dex'], 80);
    results.app = results.app - 25;
    results.edu = growPoint(results.edu, 4);
  }
  results.app = Math.max(results.app, 5);
  results.edu = Math.min(results.edu, 99);
  return results;
}

export function getAttributesSum(attributes: COCAttributes) {
  const { str, con, dex, app, pow, siz, edu, int } = attributes;
  const vals = [str, con, dex, app, pow, siz, edu, int];
  return vals.reduce<number>((sum, cur) => sum + cur, 0);
}

export function getLuckAttributesSum(attributes: COCAttributes) {
  const { luc } = attributes;
  return getAttributesSum(attributes) + luc;
}

export function withDefaultAttributes(
  attributes: Partial<COCAttributes>,
): COCAttributes {
  return {
    str: 0,
    dex: 0,
    con: 0,
    app: 0,
    pow: 0,
    siz: 0,
    edu: 0,
    int: 0,
    luc: 0,
    ...attributes,
  };
}

function minusAttributes(
  attributes: COCAttributes,
  keys: COCAttributesKey[],
  total: number,
): COCAttributes {
  const results = { ...attributes };
  const sum = keys.reduce((sum, key) => sum + results[key], 0);

  // 如果年龄过大，数值过小
  if (sum < total + keys.length * 5) {
    keys.forEach((key) => (results[key] = 5));
    return results;
  }

  let rest = total;
  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      if (results[key] - rest < 5) {
        return minusAttributes(results, keys, rest);
      }
      results[key] = results[key] - rest;
    } else {
      let minus = throwDice(rest + 1) - 1;
      if (results[key] - minus < 5) minus = results[key] - 5;
      rest = rest - minus;
      results[key] = results[key] - minus;
    }
  });
  return results;
}
