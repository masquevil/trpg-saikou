import { Marked } from 'marked';
import NpcDataManager from './npc-block/npcDataManager';
import createNpcBlockExtensions from './npc-block/extensions';
import type { MarkdownParseResult } from './types';
import type { NpcBlockTypes } from './types';

export type CustomRenderers = NpcBlockTypes.ExtensionRenderers;

interface ScenarioParserOptions {
  resolveAvatar: NpcBlockTypes.ResolveAvatarFn;
  renderers: CustomRenderers;
}

const marked = new Marked({ breaks: true, gfm: true, async: false });

// common extensions
marked.use({
  renderer: {
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens);
      return `<h${depth} id="${text.replace(/\s+/g, '-')}" class="md-h${depth}">${text}</h${depth}>`;
    },
    paragraph({ tokens }) {
      const text = this.parser.parseInline(tokens);
      return `<p class="md-p">${text}</p>`;
    },
  },
});

let initialized = false;
const npcManager = new NpcDataManager();

export default function useScenarioParser({ renderers, resolveAvatar }: ScenarioParserOptions) {
  if (!initialized) {
    initialized = true;
    // npc block extensions
    marked.use(createNpcBlockExtensions({ npcManager, renderers, resolveAvatar }));
  }

  return {
    parse(moduleName: string, content: string): MarkdownParseResult {
      npcManager.reset(moduleName);
      const html = marked.parse(content, { async: false });
      return { html, npcCards: npcManager.getAllCards() };
    },
  };
}
