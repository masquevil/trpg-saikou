export interface NpcSummaryData {
  name: string;
  role: string;
  summary: string;
  avatar?: string;
}
export type NpcCardData = NpcSummaryData & {
  // 其他自定义字段
  content: [key: string, value: string][];
};

export interface MarkdownParseResult {
  html: string;
  npcCards: NpcCardData[];
}
