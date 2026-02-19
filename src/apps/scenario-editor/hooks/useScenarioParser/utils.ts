import { CodeCustomToken } from 'marked';

// 创建一个自定义的 marked tokenizer
export function getToken<T extends CodeCustomToken>(
  type: T['type'],
  rule: RegExp,
  src: string,
  datalizor: (content: string) => Omit<T, 'type' | 'raw' | 'text'> | undefined,
): T | undefined {
  const match = rule.exec(src);
  if (match) {
    const [raw, text] = match;
    const data = datalizor(text.trim());
    if (!data) return;
    const token = {
      type,
      raw,
      text,
      ...data,
    } as T;
    console.log('xxx1', match, token);
    return token;
  }
}
