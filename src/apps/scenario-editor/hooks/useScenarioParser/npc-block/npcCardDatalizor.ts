import { findEntry } from './utils';

interface TokenData {
  name: string;
  role: string;
  summary: string;
  avatar?: string;
  content: [key: string, value: string][];
}

// 解析 NPC Card 内容
export default function npcCardDatalizor(content: string): TokenData | undefined {
  const lines = content.split('\n');
  const data: Partial<TokenData> = {
    content: [],
  };

  // 先解析结构化字段 (key: value 格式)
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    const { isEntry, key, value } = findEntry(line);
    // 跳过空行或者意外插入的行
    if (!isEntry) continue;
    if (['name', 'role'].indexOf(key) >= 0) {
      data[key as 'name' | 'role'] = value;
    } else if (key === 'avatar') {
      data.avatar = value.trim();
    } else if (key === 'summary') {
      const summaryLines = [value];
      let j = i + 1;
      let { isEntry } = findEntry(lines[j]);
      while (j < lines.length && !isEntry) {
        summaryLines.push(lines[j]);
        j++;
        isEntry = findEntry(lines[j]).isEntry;
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
    const line = lines[i].trim();
    const { isEntry, value } = findEntry(line);

    if (isEntry) {
      // 保存之前的段落
      if (currentSection && currentContent.length > 0) {
        data.content!.push([currentSection, currentContent.join('\n')]);
      }
      // 开始新的段落
      currentSection = value;
      currentContent = [];
    } else if (line && currentSection) {
      // 添加普通文本行
      currentContent.push(line);
    }
  }

  // 保存最后一个段落
  if (currentSection && currentContent.length > 0) {
    data.content!.push([currentSection, currentContent.join('\n')]);
  }

  if (!data.name || !data.role || !data.summary) {
    return;
  }

  return data as TokenData;
}
