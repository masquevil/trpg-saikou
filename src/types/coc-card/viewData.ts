import type { JobSkills } from './job';

export interface COCCardViewData {
  showingChildSkills: Map<string, string[]>;
  jobSkills?: JobSkills;
}
