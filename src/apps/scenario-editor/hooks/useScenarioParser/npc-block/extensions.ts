import { Ref } from 'vue';
import { Tokens, RendererThis, TokenizerAndRendererExtension, HooksObject } from 'marked';
import { NpcDataManager } from '../../../models/npcDataManager';
import { getToken } from '../utils';
import npcCardDatalizor from './npcCardDatalizor';
import npcSummaryDatalizor from './npcSummaryDatalizor';

export interface NpcBlockStore {
  npcManager: Ref<NpcDataManager | undefined>;
}

export interface NpcBlockRenderers {
  npcCard: (data: Tokens.CodeCustomNpcCard) => string;
  npcSummary: (data: Tokens.CodeCustomNpcSummary) => string;
}

export default function createNpcBlockExtensions(
  store: NpcBlockStore,
  renderers: NpcBlockRenderers,
) {
  const npcManager = store.npcManager.value;
  if (!npcManager) return {};

  const npcBlockExtensions: TokenizerAndRendererExtension[] = [
    // 自定义 NPC Card 扩展
    {
      name: 'code-custom-npc-card',
      level: 'block' as const,
      tokenizer(src: string): Tokens.CodeCustomNpcCard | undefined {
        this.lexer.state;
        const token = getToken<Tokens.CodeCustomNpcCard>(
          'code-custom-npc-card',
          /^```npc-card\s*\n([\s\S]*?)\n```/,
          src,
          npcCardDatalizor,
        );
        if (!token) return;
        const { name, role, avatar, summary, content } = token;
        const data = npcManager.addCard({
          name,
          role,
          avatar,
          summary,
          content,
        });
        return {
          ...token,
          avatar: data.avatar, // 确保使用处理后的头像URL
        };
      },
      renderer(this: RendererThis, token) {
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
      renderer(this: RendererThis, token) {
        return renderers.npcSummary(token as Tokens.CodeCustomNpcSummary);
      },
    },
  ];

  const npcBlockHooks: HooksObject = {
    processAllTokens(tokens) {
      const newTokens = tokens.map((token) => {
        // 处理 Npc Summary，将其关联的 Card 数据注入到 token 中，方便后续渲染组件时使用
        if (token.type === 'code-custom-npc-summary') {
          const localToken = token as Tokens.CodeCustomNpcSummary;
          const card = npcManager.getCardByName(localToken.name);
          if (card) {
            return {
              ...localToken,
              data: {
                role: card.role,
                summary: card.summary,
                avatar: card.avatar,
              },
            };
          }
        }
        return token;
      });
      return newTokens;
    },
  };

  return {
    extensions: npcBlockExtensions,
    hooks: npcBlockHooks,
  };
}
