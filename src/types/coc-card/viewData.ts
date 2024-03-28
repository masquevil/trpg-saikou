import type { JobSkills } from './job';

export interface COCCardViewData {
  showingChildSkills: Map<string, string[]>;
  jobSkills?: JobSkills;
  skillLimits: {
    pro: number;
    interest: number;
  };
}
