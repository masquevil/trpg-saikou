import { 
  APPEARANCE_DESCRIPTIONS,
  BELIEFS,
  IMPORTANT_PERSON_TYPES,
  IMPORTANT_PERSON_REASONS,
  MEANINGFUL_PLACES,
  PRECIOUS_ITEMS,
  TRAITS,
  LIVING_STANDARDS
} from '../constants/story';
import { getRandomArrayItem } from '../utils';

/**
 * 随机生成形象描述
 * 使用随机三个词语的组合
 */
export function randAppearance(): string {
  const shuffled = [...APPEARANCE_DESCRIPTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3).join(' ');
}

/**
 * 随机生成思想与信念
 */
export function randBelief(): string {
  return getRandomArrayItem(BELIEFS);
}

/**
 * 随机生成重要之人
 * 返回角色类型 + 原因的组合
 */
export function randImportantPerson(): string {
  const personType = getRandomArrayItem(IMPORTANT_PERSON_TYPES);
  const reason = getRandomArrayItem(IMPORTANT_PERSON_REASONS);
  return `${personType} ${reason}`;
}

/**
 * 随机生成意义非凡之地
 */
export function randMeaningfulPlace(): string {
  return getRandomArrayItem(MEANINGFUL_PLACES);
}

/**
 * 随机生成宝贵之物
 */
export function randPreciousItem(): string {
  return getRandomArrayItem(PRECIOUS_ITEMS);
}

/**
 * 随机生成特质
 */
export function randTrait(): string {
  return getRandomArrayItem(TRAITS);
}


/**
 * 根据信用评级随机生成生活水平描述
 * @param creditRating 信用评级数值
 */
export function randLivingStandard(creditRating: number): string {
  const standard = LIVING_STANDARDS.find(
    item => creditRating >= item.min && creditRating <= item.max
  );
  
  if (!standard) {
    return '生活水平描述暂缺';
  }
  
  return `${standard.name}：${standard.description} 住所：${standard.residence || '暂无'} 旅行：${standard.travel || '暂无'}`;
}

/**
 * 随机生成完整的故事背景（仅包含已有内容的字段）
 */
export function randStoryBackground(): {
  app: string;
  belief: string;
  IPerson: string;
  IPlace: string;
  IItem: string;
  trait: string;
} {
  return {
    app: randAppearance(),
    belief: randBelief(),
    IPerson: randImportantPerson(),
    IPlace: randMeaningfulPlace(),
    IItem: randPreciousItem(),
    trait: randTrait()
  };
}