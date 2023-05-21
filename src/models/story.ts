import type { Story, Period, FormattedStory } from '../types/story';
import stories from '../constants/stories';

/* story handlers */
export const periodTexts: Record<Period, string> = {
  short: '短篇',
  medium: '中篇',
  long: '长篇',
  battle: '战役',
};

function parseDecade(decadeString: string) {
  const decadeInt = parseInt(decadeString);
  let decade, decadeYear, decadeText;
  if (Number.isNaN(decadeInt)) {
    // 文本
    decadeText = decadeString;
    if (decadeString === '现代') {
      // 粗略的按照 2020 计算
      decadeYear = 2020;
      decade = '2020s';
    }
  } else if (`${decadeInt}` !== decadeString) {
    // 1920s, NNNNs
    decade = `${decadeString.slice(0, -2)}0s`;
    decadeText = decade;
  } else {
    // 具体年份，如 2003
    decade = `${decadeString.slice(0, -1)}0s`;
    decadeYear = decadeInt;
    decadeText = `${decadeInt}`;
  }
  return { decade, decadeYear, decadeText };
}

function parseArea(areaString: string) {
  return areaString.split('/').map(area => ({
    country: area.split('-')[0],
    city: area.split('-')[1],
  }))
}

function formatStory(story: Story): FormattedStory {
  const [name, decadeString, areaString, playTime, options] = story;

  const max = playTime[1];
  const period: Period = max <= 6 ? 'short' : max <= 10 ? 'medium' : max <= 50 ? 'long' : 'battle';
  const periodText = periodTexts[period];

  return {
    name,
    decade: parseDecade(decadeString),
    area: parseArea(areaString),
    playTime,
    period,
    periodText: options?.welcome ? '入门' : periodText,
    options,
  };
}

export default stories.map(formatStory);
