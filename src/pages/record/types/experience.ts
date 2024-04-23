import type StoryNames from './name';

/** [模组名, 体验评分, 模组评分, 评价] */
export type Experience = [StoryNames, number, number, string];
export interface FormattedExperience {
  experienceScore?: number; // 体验评分
  storyScore?: number; // 模组评分
  comments: string; // 评价
}

