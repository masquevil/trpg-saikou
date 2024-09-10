import type { JobSkills } from './job';

export interface COCCardViewData {
  showingChildSkills: Record<string, string[]>;
  jobSkills?: JobSkills;
  skillLimits: {
    pro: number;
    interest: number;
  };
}
