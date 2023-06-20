import { ref } from 'vue';

import type { Suggestion } from '@/types/coc-card/suggestion';

export function getDefaultSuggestion(
  override?: Partial<Suggestion>
): Suggestion {
  return {
    text: '',
    multiSkills: [],
    wealth: [-1, -1],
    point: -1,
    ...override,
  };
}
