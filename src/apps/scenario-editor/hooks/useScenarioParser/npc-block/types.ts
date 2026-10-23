import type { Tokens } from 'marked';
import type NpcDataManager from './npcDataManager';

// NPC Data Manager
export interface NpcSummaryData {
  name: string;
  role: string;
  summary: string;
  avatar?: string;
}
export interface NpcCardData extends NpcSummaryData {
  // 其他自定义字段
  content: [key: string, value: string][];
}

// NPC Block Extension Options
export interface ResolveAvatarFn {
  (avatar: string, context: { moduleName: string }): string;
}
export interface ExtensionRenderers {
  npcCard: (data: Tokens.CodeCustomNpcCard) => string;
  npcSummary: (data: Tokens.CodeCustomNpcSummary) => string;
}
export interface ExtensionOptions {
  resolveAvatar: ResolveAvatarFn;
  renderers: ExtensionRenderers;
  npcManager: NpcDataManager;
}
