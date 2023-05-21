import type StoryNames from './name';

/**
 * [模组名, 想玩程度 1-5 (越大越想玩), 是否玩过]
 */
export type Record = [StoryNames, number?, boolean?];
export interface FormattedRecord {
  prefer?: number; // 我想玩的 1 - 5，越大越想玩
  isPlayed?: boolean; // 是否玩过
}
