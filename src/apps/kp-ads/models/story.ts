import type { Story } from '../types/story';
import { storyInfoOverrides } from '../tables/storyInfoOverrides';
import { dicechoStoryInfos } from '../tables/dicechoStory';

export default class StoryModel {
  static getStoriesByKeyOrTitle(list: [string?, string?][]): Story[] {
    return list
      .map((item) => {
        const [idMatcher, titleMatcher] = item;
        const storyOverride = storyInfoOverrides.find((info) => {
          return info.id === idMatcher || info.title === titleMatcher;
        });
        if (!storyOverride) return;

        const { id, coverUrl, playerNumber = [4, 6], ...rest } = storyOverride;
        const dicechoStory = dicechoStoryInfos.find((info) => info._id === id);
        const { cnmodsAliaseId, rateAvg, tags, validRateCount } = dicechoStory || {};
        return {
          id,
          coverUrl: coverUrl || dicechoStory?.coverUrl || '',
          playerNumber,
          ...rest,
          isDicecho: !id.startsWith('sox-id-'),
          cnmodsAliaseId,
          rateAvg,
          tags,
          validRateCount,
        };
      })
      .filter((story) => !!story);
  }
}
