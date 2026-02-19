import { findEntry } from './utils';

interface TokenData {
  name: string;
}

// 解析 NPC Summary 内容
export default function npcSummaryDatalizor(content: string): TokenData | undefined {
  const lines = content.split('\n');
  const data: Partial<TokenData> = {};

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const entry = findEntry(line);
    if (entry && entry.key === 'name') {
      data.name = entry.value;
    }
  }

  if (!data.name) return;

  return data as TokenData;
}
