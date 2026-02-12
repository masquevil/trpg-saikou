import { Marked, Renderer } from 'marked';
import type { NpcCardData, NpcSummaryData } from '../types';
import { NpcDataManager } from '../types';
import { ref } from 'vue';

export interface ContentItem {
  type: 'text' | 'card' | 'summary';
  content?: string;
  data?: NpcCardData;
  summaryData?: NpcSummaryData;
}

const renderer = new Renderer();
renderer.heading = function ({ tokens, depth }) {
  const text = this.parser.parseInline(tokens);
  const className = `md-h${depth}`;
  return `<h${depth} class="${className}">${text}</h${depth}>`;
};
renderer.paragraph = function ({ tokens }) {
  const text = this.parser.parseInline(tokens);
  return `<p class="md-p">${text}</p>`;
};
const marked = new Marked({
  renderer,
  breaks: true,
  gfm: true,
});

export default function useScenarioParser(currentModuleName?: string) {
  let npcManager = ref<NpcDataManager>();
  if (!npcManager.value) npcManager.value = new NpcDataManager();

  // 动态导入所有头像图片
  const avatarModules = import.meta.glob('../scenarios/*/avatars/*.{jpg,jpeg,png,gif,webp}', {
    eager: true,
    as: 'url',
  });

  const parseContent = async (content: string) => {
    npcManager.value!.reset();

    // 首先提取所有npc-card数据
    const cardMatches = [];
    const cardRegex = /```npc-card\s*([\s\S]*?)```/g;
    let match;
    while ((match = cardRegex.exec(content)) !== null) {
      cardMatches.push({
        index: match.index,
        length: match[0].length,
        content: match[1].trim(),
      });
    }

    // 解析所有卡片
    const parsedCards = [];
    for (const cardMatch of cardMatches) {
      const cardData = parseNpcCardContent(cardMatch.content, currentModuleName);
      if (cardData) {
        npcManager.value!.addCard(cardData);
        parsedCards.push({
          match: cardMatch,
          data: cardData,
        });
      }
    }

    // 然后处理文本内容，替换卡片为占位符
    let processedContent = content;
    // 从后往前替换，避免索引偏移
    for (let i = parsedCards.length - 1; i >= 0; i--) {
      const card = parsedCards[i];
      const placeholder = `<!--NPC_CARD_COMPONENT_${card.data.name}-->`;
      processedContent =
        processedContent.slice(0, card.match.index) +
        placeholder +
        processedContent.slice(card.match.index + card.match.length);
    }

    // 解析包含摘要的文本
    const items: ContentItem[] = [];
    const summaryRegex = /```npc-summary\s*([\s\S]*?)```/g;
    let lastIndex = 0;

    while ((match = summaryRegex.exec(processedContent)) !== null) {
      // 添加摘要前的文本
      if (match.index > lastIndex) {
        const textBefore = processedContent.slice(lastIndex, match.index);
        const html = await marked.parse(textBefore);
        items.push({ type: 'text', content: html });
      }

      // 解析摘要
      const summaryData = parseNpcSummaryContent(match[1].trim());
      if (summaryData) {
        items.push({
          type: 'summary',
          summaryData: summaryData,
        });
      }

      lastIndex = match.index + match[0].length;
    }

    // 添加剩余文本
    if (lastIndex < processedContent.length) {
      const remainingText = processedContent.slice(lastIndex);
      const html = await marked.parse(remainingText);
      items.push({ type: 'text', content: html });
    }

    // 插入卡片组件
    const finalItems: ContentItem[] = [];
    for (const item of items) {
      if (item.type === 'text' && item.content) {
        // 查找卡片占位符并替换为卡片组件
        const cardComponentRegex = /<!--NPC_CARD_COMPONENT_(.*?)-->/g;
        let lastIndex = 0;
        let match;

        while ((match = cardComponentRegex.exec(item.content)) !== null) {
          // 添加占位符前的文本
          if (match.index > lastIndex) {
            const textBefore = item.content.slice(lastIndex, match.index);
            finalItems.push({ type: 'text', content: textBefore });
          }

          // 创建卡片组件
          const cardName = match[1];
          const cardData = npcManager.value!.getCardByName(cardName);
          if (cardData) {
            finalItems.push({
              type: 'card',
              data: cardData,
            });
          }

          lastIndex = match.index + match[0].length;
        }

        // 添加剩余文本
        if (lastIndex < item.content.length) {
          const remainingText = item.content.slice(lastIndex);
          finalItems.push({ type: 'text', content: remainingText });
        }
      } else {
        finalItems.push(item);
      }
    }

    return {
      contentItems: finalItems,
    };
  };

  const parseNpcCardContent = (content: string, moduleName?: string): NpcCardData | null => {
    try {
      const lines = content.split('\n');
      const data: Partial<NpcCardData> = {};

      // 解析必需字段 (key: value 格式)
      let i = 0;
      while (i < lines.length) {
        const line = lines[i].trim();
        if (line.startsWith('name:')) {
          data.name = line.slice(5).trim();
        } else if (line.startsWith('role:')) {
          data.role = line.slice(5).trim();
        } else if (line.startsWith('avatar:')) {
          // 在解析阶段就处理头像路径，使用动态导入的图片
          const avatarFileName = line.slice(7).trim();
          if (avatarFileName && moduleName) {
            // 构建图片路径并查找对应的导入模块
            const avatarPath = `../scenarios/${moduleName}/avatars/${avatarFileName}`;
            const importedAvatar = avatarModules[avatarPath];
            if (importedAvatar) {
              data.avatar = importedAvatar; // 使用Vite处理后的图片URL
            } else {
              console.warn(`找不到头像文件: ${avatarPath}`);
              data.avatar = avatarFileName; // fallback到文件名
            }
          } else {
            data.avatar = avatarFileName; // 如果没有模块名，保持原样
          }
        } else if (line.startsWith('summary:')) {
          // 新模式：summary支持多行，直到遇到:开头的标签
          const summaryLines = [];
          let j = i + 1;
          while (j < lines.length && !lines[j].trim().startsWith(':')) {
            summaryLines.push(lines[j]);
            j++;
          }
          data.summary = summaryLines.join('\n').trim();
          i = j - 1; // 调整索引到下一个标签开始位置
        } else {
          break; // 遇到非结构化字段时停止
        }
        i++;
      }

      // 解析自定义字段 (:标签 + 无前缀内容)
      let currentSection = '';
      let currentContent: string[] = [];

      for (; i < lines.length; i++) {
        const line = lines[i];
        const trimmedLine = line.trim();

        if (trimmedLine.startsWith(':')) {
          // 保存之前的段落
          if (currentSection && currentContent.length > 0) {
            data[currentSection] = currentContent.join('\n');
          }
          // 开始新的段落（去掉:前缀）
          currentSection = trimmedLine.slice(1).trim();
          currentContent = [];
        } else if (trimmedLine && currentSection) {
          // 添加普通文本行（无需前缀）
          currentContent.push(trimmedLine);
        }
      }

      // 保存最后一个段落
      if (currentSection && currentContent.length > 0) {
        data[currentSection] = currentContent.join('\n');
      }

      if (!data.name || !data.role || !data.summary) {
        return null;
      }

      return data as NpcCardData;
    } catch (error) {
      return null;
    }
  };

  const parseNpcSummaryContent = (content: string): NpcSummaryData | null => {
    try {
      const lines = content.split('\n');
      const firstLine = lines[0]?.trim();
      if (firstLine && firstLine.startsWith('name:')) {
        const name = firstLine.slice(5).trim();
        const card = npcManager.value!.getCardByName(name);
        if (card) {
          const { role, summary, avatar } = card;
          return {
            name,
            role,
            summary,
            avatar, // 包含头像信息
          };
        }
      }
      return null;
    } catch (error) {
      return null;
    }
  };

  return {
    parse: parseContent,
  };
}
