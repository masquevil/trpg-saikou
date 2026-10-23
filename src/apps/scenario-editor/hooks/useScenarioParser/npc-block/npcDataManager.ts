import type { NpcCardData } from './types';

// 只负责当前模组标识及 Card 与 Summary 的数据关联。
export default class NpcDataManager {
  private _moduleName = '';
  private cards = new Map<string, NpcCardData>();

  getModuleName() {
    return this._moduleName;
  }

  addCard(card: NpcCardData) {
    this.cards.set(card.name, { ...card });
  }

  getCardByName(name: string): NpcCardData | undefined {
    return this.cards.get(name);
  }

  getAllCards(): NpcCardData[] {
    return Array.from(this.cards.values(), (card) => ({
      ...card,
      content: card.content.map(([key, value]) => [key, value]),
    }));
  }

  reset(moduleName: string) {
    this._moduleName = moduleName;
    this.cards.clear();
  }
}
