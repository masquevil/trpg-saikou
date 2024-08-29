import { inject } from 'vue';
import type { Ref, ComputedRef } from 'vue';

import type { Suggestion } from '../types/suggestion';
import type { PageData } from '../types/pageData';
import type { COCPlayerCharacter } from '../types/character';
import type { COCCardViewData } from '../types/viewData';

export function usePC() {
  const pc = inject<Ref<COCPlayerCharacter>>('pc');
  return pc;
}

export function usePageData() {
  const pageData = inject<PageData>('pageData');
  return pageData;
}

export function useViewData() {
  const viewData = inject<COCCardViewData>('viewData');
  return viewData;
}

export function useSuggestion() {
  const suggestion = inject<ComputedRef<Suggestion>>('suggestion');
  return suggestion;
}
