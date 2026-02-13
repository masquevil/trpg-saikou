export interface NpcSummaryData {
  name: string;
  role: string;
  summary: string;
  avatar?: string;
}
export type NpcCardData = NpcSummaryData & {
  // 其他自定义字段
  [key: string]: string;
};

export interface MarkdownParseResult {
  html: string;
  npcCards: NpcCardData[];
}

// NPC 数据管理器，用于关联 Card 和 Summary
export class NpcDataManager {
  private cards: Map<string, NpcCardData> = new Map();

  addCard(card: NpcCardData) {
    this.cards.set(card.name, {
      ...card,
    });
  }

  getCardByName(name: string): NpcCardData | undefined {
    return this.cards.get(name);
  }

  getAllCards(): NpcCardData[] {
    return Array.from(this.cards.values());
  }

  reset() {
    this.cards.clear();
  }
}
