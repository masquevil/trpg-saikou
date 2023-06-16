import { throwDice, growPoint } from '@/utils/coc';

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

const normalAttrs: COCAttributesKey[] = ['str', 'dex', 'con', 'app', 'pow'];
const higherAttrs: COCAttributesKey[] = ['siz', 'edu', 'int'];
const otherAttrs: COCAttributesKey[] = ['luc'];

export function generateRandomAttributes(age?: number) {
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
  return modifyAttributesByAge(attributes as COCAttributes, age || 0);
}

function modifyAttributesByAge(
  attributes: COCAttributes,
  age: number
): COCAttributes {
  let results = attributes;
  if (age < 15) {
    results = attributes;
  } else if (age < 20) {
    // 15 ~ 19
    results = minusAttributes(attributes, ['str', 'siz'], 5);
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

function minusAttributes(
  attributes: COCAttributes,
  keys: COCAttributesKey[],
  total: number
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
