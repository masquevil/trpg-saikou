import {} from 'marked';

// 扩展 Tokens 命名空间，添加自定义 token 类型
declare module 'marked' {
  namespace Tokens {
    interface CodeCustomGeneric {
      type: string;
      raw: string;
      text: string;
    }

    interface CodeCustomNpcCard extends CodeCustomGeneric {
      type: 'code-custom-npc-card';
      name: string;
      role: string;
      avatar?: string;
      summary: string;
      content: [key: string, value: string][];
    }

    interface CodeCustomNpcSummary extends CodeCustomGeneric {
      type: 'code-custom-npc-summary';
      name: string;
      data?: {
        role: string;
        summary: string;
        avatar?: string;
      };
    }
  }

  export type CodeCustomToken = Tokens.CodeCustomNpcCard | Tokens.CodeCustomNpcSummary;
}
