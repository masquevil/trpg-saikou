import { resetShowingChildSkills } from '../models/skill';

import type { COCCardViewData } from '../types/viewData';

interface ViewDataCreateOption {
  limitp: number;
  limiti: number;
}

const storedOption: ViewDataCreateOption = {
  limitp: 75,
  limiti: 50,
};

function defaultViewData(): COCCardViewData {
  return {
    showingChildSkills: resetShowingChildSkills(),
    skillLimits: {
      pro: storedOption.limitp,
      interest: storedOption.limiti,
    },
  };
}

export function createViewData(option?: Partial<ViewDataCreateOption>): COCCardViewData {
  Object.assign(storedOption, option);
  return defaultViewData();
}

export function resetViewData(viewData: COCCardViewData) {
  Object.assign(viewData, defaultViewData());
}
