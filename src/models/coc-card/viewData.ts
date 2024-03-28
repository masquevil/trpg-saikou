import { resetShowingChildSkills } from '@/models/coc-card/skill';

import type { COCCardViewData } from '@/types/coc-card/viewData';

interface ViewDataCreateOption {
  limitp?: number;
  limiti?: number;
}

export function defaultViewData(
  option?: ViewDataCreateOption,
): COCCardViewData {
  return {
    showingChildSkills: resetShowingChildSkills(),
    skillLimits: {
      pro: option?.limitp || 70,
      interest: option?.limiti || 50,
    },
  };
}

export function resetViewData(viewData: COCCardViewData) {
  Object.assign(viewData, defaultViewData());
}
