import { resetShowingChildSkills } from '@/models/coc-card/skill';

import type { COCCardViewData } from '@/types/coc-card/viewData';

interface ViewDataCreateOption {
  limitp?: number;
  limiti?: number;
}

const storedOption: ViewDataCreateOption = {
  limitp: 70,
  limiti: 50,
};

function defaultViewData(): COCCardViewData {
  return {
    showingChildSkills: resetShowingChildSkills(),
    skillLimits: {
      pro: storedOption?.limitp || 70,
      interest: storedOption?.limiti || 50,
    },
  };
}

export function createViewData(
  option?: Partial<ViewDataCreateOption>,
): COCCardViewData {
  Object.assign(storedOption, option);
  return defaultViewData();
}

export function resetViewData(viewData: COCCardViewData) {
  Object.assign(viewData, defaultViewData());
}
