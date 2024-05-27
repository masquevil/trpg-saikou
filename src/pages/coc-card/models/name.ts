import { RandNameScope } from '../types/name';
import { namesEnSources, namesZhSources } from '../constants/name';
import { getRatioResult, getRandomArrayItem } from '../utils';

type NameMethodKey = 'en' | 'zh' | 'en-zh';
type SexKey = 'female' | 'male' | 'all';

export function randName(scope: RandNameScope = 'all', sex: SexKey = 'all'): string {
  const usingMethodKey: NameMethodKey = scope === 'all' ? randMethod() : scope;
  switch (usingMethodKey) {
    case 'zh':
      return randNameZh(sex);
    case 'en':
      return randNameEn(1, sex);
    case 'en-zh':
      return randNameEn(0, sex);
    default:
      return '';
  }
}

function randMethod(): NameMethodKey {
  const ratio = {
    zh: 4,
    'en-zh': 5,
    en: 1,
  };
  return getRatioResult(ratio);
}

function randNameEn(langIndex: 0 | 1, sex: SexKey): string {
  const { lastNames, femaleNames, maleNames } = namesEnSources;
  const firstNames = {
    all: [...femaleNames, ...maleNames],
    male: maleNames,
    female: femaleNames,
  }[sex];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  return `${firstName[langIndex]}·${lastName[langIndex]}`;
}

function getRandomLastName(lastNames: string[]): string {
  return lastNames[Math.floor(Math.pow(Math.random(), 1.4) * lastNames.length)];
}

const nameZhMethods: { [key: string]: (sex: SexKey) => string } = {
  rare() {
    return getRandomArrayItem(namesZhSources.rareGroups);
  },
  // 张 三
  ln1(sex: SexKey) {
    const { lastNames, maleNames1, femaleNames1 } = namesZhSources;
    const firstNames = {
      all: [...femaleNames1, ...maleNames1],
      male: maleNames1,
      female: femaleNames1,
    }[sex];
    const lastName = getRandomLastName(lastNames);
    const firstName = getRandomArrayItem(firstNames);
    return `${lastName}${firstName}`;
  },
  // 张 文婷
  ln2(sex: SexKey) {
    const { lastNames, femaleNames2, maleNames2 } = namesZhSources;
    const firstNames = {
      all: [...femaleNames2, ...maleNames2],
      male: maleNames2,
      female: femaleNames2,
    }[sex];
    const lastName = getRandomLastName(lastNames);
    const firstName = getRandomArrayItem(firstNames);
    return `${lastName}${firstName}`;
  },
  // 刘 娜 娜
  lnn(sex: SexKey) {
    const { lastNames, maleNames1, femaleNames1 } = namesZhSources;
    const firstNames = {
      all: [...maleNames1, ...femaleNames1],
      male: maleNames1,
      female: femaleNames1,
    }[sex];
    const lastName = getRandomLastName(lastNames);
    const firstName = getRandomArrayItem(firstNames);
    return `${lastName}${firstName}${firstName}`;
  },
  // 赵 欣 兰
  lmn(sex: SexKey) {
    const { lastNames, maleNames1, femaleNames1 } = namesZhSources;
    const firstNames = {
      all: [...maleNames1, ...femaleNames1],
      male: maleNames1,
      female: femaleNames1,
    }[sex];
    const lastName = getRandomLastName(lastNames);
    const firstName1 = getRandomArrayItem(firstNames);
    const firstName2 = getRandomArrayItem(firstNames);
    return `${lastName}${firstName1}${firstName2}`;
  },
  // 张 王 欣 兰
  abmn(sex: SexKey) {
    const { lastNames, maleNames1, femaleNames1 } = namesZhSources;
    const firstNames = {
      all: [...maleNames1, ...femaleNames1],
      male: maleNames1,
      female: femaleNames1,
    }[sex];
    const singleLastNames = lastNames.filter((name) => name.length === 1);
    const lastName1 = getRandomLastName(singleLastNames);
    const lastName2 = getRandomLastName(singleLastNames);
    const firstName1 = getRandomArrayItem(firstNames);
    const firstName2 = getRandomArrayItem(firstNames);
    return `${lastName1}${lastName2}${firstName1}${firstName2}`;
  },
};

function randZhMethod(): string {
  const ratio = {
    ln2: 450,
    lmn: 280,
    lnn: 120,
    ln1: 140,
    abmn: 8,
    rare: 2,
  };
  return getRatioResult(ratio);
}

function randNameZh(sex: SexKey): string {
  const method = randZhMethod();
  return nameZhMethods[method](sex);
}
