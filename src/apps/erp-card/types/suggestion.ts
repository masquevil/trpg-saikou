export interface SuggestionGroupSkill {
  name: string;
  childName?: string;
}

export type SuggestionMultiSkillItem = string | SuggestionGroupSkill;
export type SuggestionMultiSkill = SuggestionMultiSkillItem[];

export interface Suggestion {
  wealth: [number, number];
  text: string;
  multiSkills: SuggestionMultiSkill[];
  multiSkillTexts: string[];
}
