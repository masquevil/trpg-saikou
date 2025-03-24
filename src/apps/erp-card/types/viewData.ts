import type { JobSkills } from './job';

export interface ERPCardViewData {
  showingChildSkills: Record<string, string[]>;
  jobSkills?: JobSkills;
  skillLimits: {
    pro: number;
    interest: number;
  };
}
