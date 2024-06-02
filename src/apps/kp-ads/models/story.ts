import { Story, StoryInfoOverrides } from '../types/story';
import { preparedStories, preparingStories, dicechoStoryInfos } from '../constants/story';

function getStoriesByOverrides(storyOverrides: StoryInfoOverrides[]): Story[] {
  return storyOverrides.map((storyOverride) => {
    const {
      id,
      title,
      duration,
      time,
      place,
      coverUrl,
      adds,
      comments,
      labels,
      playerNumber = [4, 6],
    } = storyOverride;
    const dicechoStory = dicechoStoryInfos.find((info) => info._id === id);
    const { cnmodsAliaseId, tags, rateAvg } = dicechoStory || {};
    return {
      id,
      title: title || dicechoStory?.title || '',
      time,
      place,
      coverUrl: coverUrl || dicechoStory?.coverUrl || '',
      adds: adds || '',
      comments: comments || '',
      duration,
      playerNumber,
      labels,
      isDicecho: !id.startsWith('sox-id-'),
      rateAvg,
      cnmodsAliaseId,
      tags,
    };
  });
}

export default class StoryModel {
  static getPreparedStories(): Story[] {
    return getStoriesByOverrides(preparedStories);
  }

  static getPreparingStories(): Story[] {
    return getStoriesByOverrides(preparingStories);
  }
}
