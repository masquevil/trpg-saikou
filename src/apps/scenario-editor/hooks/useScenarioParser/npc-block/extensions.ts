import type { Tokens, TokenizerAndRendererExtension, MarkedExtension } from 'marked';
import { getToken } from '../utils';
import npcCardDatalizor from './npcCardDatalizor';
import npcSummaryDatalizor from './npcSummaryDatalizor';
import type { ExtensionOptions } from './types';

export default function createNpcBlockExtensions({
  npcManager,
  renderers,
  resolveAvatar,
}: ExtensionOptions): MarkedExtension {
  const npcBlockExtensions: TokenizerAndRendererExtension[] = [
    // 自定义 NPC Card 扩展
    {
      name: 'code-custom-npc-card',
      level: 'block' as const,
      tokenizer(src: string): Tokens.CodeCustomNpcCard | undefined {
        const token = getToken<Tokens.CodeCustomNpcCard>(
          'code-custom-npc-card',
          /^```npc-card\s*\n([\s\S]*?)\n```/,
          src,
          npcCardDatalizor,
        );
        if (!token) return;
        if (token.avatar && resolveAvatar) {
          token.avatar = resolveAvatar(token.avatar, { moduleName: npcManager.getModuleName() });
        }
        const { name, role, avatar, summary, content } = token;
        npcManager.addCard({ name, role, avatar, summary, content });
        return token;
      },
      renderer(token) {
        return renderers.npcCard(token as Tokens.CodeCustomNpcCard);
      },
    },
    // 自定义 NPC Summary 扩展
    {
      name: 'code-custom-npc-summary',
      level: 'block' as const,
      tokenizer(src: string) {
        return getToken<Tokens.CodeCustomNpcSummary>(
          'code-custom-npc-summary',
          /^```npc-summary\s*\n([\s\S]*?)\n```/,
          src,
          npcSummaryDatalizor,
        );
      },
      renderer(token) {
        return renderers.npcSummary(token as Tokens.CodeCustomNpcSummary);
      },
    },
  ];

  return {
    extensions: npcBlockExtensions,
    // 完整分词后递归关联摘要，支持前向引用和嵌套块。
    walkTokens(token) {
      if (token.type !== 'code-custom-npc-summary') return;
      const summary = token as Tokens.CodeCustomNpcSummary;
      const card = npcManager.getCardByName(summary.name);
      if (card) {
        summary.data = { role: card.role, summary: card.summary, avatar: card.avatar };
      }
    },
  };
}
