import { resetShowingChildSkills } from '../models/skill';

import type { ERPCardViewData } from '../types/viewData';

interface ViewDataCreateOption {
  limitp: number;
  limiti: number;
}

const storedOption: ViewDataCreateOption = {
  limitp: 75,
  limiti: 50,
};

function defaultViewData(): ERPCardViewData {
  return {
    showingChildSkills: resetShowingChildSkills(),
    skillLimits: {
      pro: storedOption.limitp,
      interest: storedOption.limiti,
    },
  };
}

export function createViewData(option?: Partial<ViewDataCreateOption>): ERPCardViewData {
  Object.assign(storedOption, option);
  return defaultViewData();
}

export function resetViewData(viewData: ERPCardViewData) {
  Object.assign(viewData, defaultViewData());
}
