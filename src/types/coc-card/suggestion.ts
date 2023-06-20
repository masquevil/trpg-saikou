export interface SuggestionGroupSkill {
  name: string;
  childName?: string;
}

export type SuggestionMultiSkillItem = string | SuggestionGroupSkill;
export type SuggestionMultiSkill = SuggestionMultiSkillItem[];

export interface Suggestion {
  text: string;
  multiSkills: SuggestionMultiSkill[];
  wealth: [number, number];
  point: number;
}
