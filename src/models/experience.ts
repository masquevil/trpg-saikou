import type { Experience, FormattedExperience } from '../types/experience';
import type StoryNames from '../types/name';
import myExperiences from '../local/experiences';

/* experience handlers */
function formatExperienceEntry(experience: Experience): [StoryNames, FormattedExperience] {
  const [name, experienceScore, storyScore, comments] = experience;

  return [
    name,
    {
      experienceScore,
      storyScore,
      comments,
    }
  ];
}

export default new Map(myExperiences.map(formatExperienceEntry));
