import { ref } from 'vue';
import { Marked } from 'marked';
import NpcDataManager from '../../models/npcDataManager';
import createNpcBlockExtensions, { NpcBlockRenderers } from './npc-block/extensions';

export type CustomRenderers = NpcBlockRenderers;

const marked = new Marked({
  breaks: true,
  gfm: true,
});

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

export default function useScenarioParser(
  moduleName: string,
  content: string,
  renderers: CustomRenderers,
) {
  const npcManager = ref(new NpcDataManager(moduleName));
  if (!initialized) {
    initialized = true;
    // npc block extensions
    marked.use(createNpcBlockExtensions({ npcManager }, renderers));
  }

  return {
    parse: async () => marked.parse(content),
  };
}
