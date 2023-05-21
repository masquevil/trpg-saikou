import type StoryNames from '../types/name';
import type { Record, FormattedRecord } from '../types/record';
import myUserData from '../local/record';

/* story user data handlers */
function formatStoryUserData(data: Record): [StoryNames, FormattedRecord] {
  const [name, prefer, isPlayed] = data;

  return [
    name,
    {
      prefer,
      isPlayed,
    }
  ];
}

export default new Map(myUserData.map(formatStoryUserData));
