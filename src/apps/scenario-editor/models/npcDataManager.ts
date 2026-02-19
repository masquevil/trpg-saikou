import { NpcCardData } from '../types';

// 动态导入所有头像图片
const avatarModules = import.meta.glob<true, 'url', string>(
  '../scenarios/*/avatars/*.{jpg,jpeg,png,gif,webp}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  },
);

// NPC 数据管理器，用于关联 Card 和 Summary
export class NpcDataManager {
  private _moduleName: string;
  private cards: Map<string, NpcCardData> = new Map();

  constructor(moduleName: string) {
    this._moduleName = moduleName;
  }

  addCard(card: NpcCardData) {
    const avatarFileName = card.avatar?.trim();
    if (avatarFileName) {
      const avatarPath = `../scenarios/${this._moduleName}/avatars/${avatarFileName}`;
      const importedAvatar = avatarModules[avatarPath];
      if (importedAvatar) {
        card.avatar = importedAvatar; // 使用Vite处理后的图片URL
      } else {
        console.warn(`找不到头像文件: ${avatarPath}`);
        card.avatar = avatarFileName; // fallback到文件名
      }
    }
    this.cards.set(card.name, { ...card });
    return card;
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

export default NpcDataManager;
