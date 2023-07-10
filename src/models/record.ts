import type StoryNames from '@/types/name';
import type { Record, FormattedRecord } from '@/types/record';
import myUserData from '@/local/record';
import experiences from './experience';

/* story user data handlers */
function formatStoryUserData(data: Record): [StoryNames, FormattedRecord] {
  const [name, prefer, isPlayed] = data;

  return [
    name,
    {
      prefer,
      isPlayed: isPlayed,
    },
  ];
}

const records = new Map(myUserData.map(formatStoryUserData));

experiences.forEach((_, name) => {
  if (!records.has(name)) {
    records.set(name, { prefer: 0, isPlayed: true });
  }
});

export default records;
