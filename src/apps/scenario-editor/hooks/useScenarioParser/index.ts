import { ref } from 'vue';
import { Marked, Renderer } from 'marked';
import NpcDataManager from '../../models/npcDataManager';
import createNpcBlockExtensions, { NpcBlockRenderers } from './npc-block/extensions';

export type CustomRenderers = NpcBlockRenderers;

// 自定义渲染器
const renderer = new Renderer();

// 重写 heading 渲染器
renderer.heading = function ({ tokens, depth }) {
  const text = this.parser.parseInline(tokens);
  const className = `md-h${depth}`;
  return `<h${depth} id="${text.replace(/\s+/g, '-')}" class="${className}">${text}</h${depth}>`;
};

// 重写 paragraph 渲染器
renderer.paragraph = function ({ tokens }) {
  const text = this.parser.parseInline(tokens);
  return `<p class="md-p">${text}</p>`;
};

// 创建 Marked 实例并注册扩展
const marked = new Marked({
  renderer,
  breaks: true,
  gfm: true,
});

export default function useScenarioParser(
  moduleName: string,
  content: string,
  renderers: CustomRenderers,
) {
  const npcManager = ref(new NpcDataManager(moduleName));
  marked.use(createNpcBlockExtensions({ npcManager }, renderers));

  return {
    parse: async () => marked.parse(content),
  };
}
