# useScenarioParser

基于 Marked.js 的 Markdown 解析器，提供以下功能：

1. 自定义语法：
   1. **npc-block** - 管理 npc 数据，自定义 npc 卡片样式 (`npc-card` `npc-summary`)
2. **CSS Class** - 为元素添加类名便于样式定制

## 使用

```typescript
import useScenarioParser from '../hooks/useScenarioParser';
import { resolveScenarioAvatar } from '../utils/scenarioResources';

const { parse } = useScenarioParser({
  resolveAvatar: resolveScenarioAvatar,
  renderers: {
    npcCard: (token) => {...},
    npcSummary: (token) => {...},
  },
});
const { html, npcCards } = parse('moduleName', '# Markdown\n\nContent');
```

## npc-card

### 语法格式

````markdown
```npc-card
name: 【必填】NPC 名称
role: 【必填】身份概述
avatar: 【可选】NPC 立绘相对路径（avatars 目录下）
summary: 【必填】
相关介绍。
可换行。

:结构化条目，可多条
结构化条目具体内容，可换行
```
````

### 示例

````markdown
```npc-card
name: 阿尔弗雷德
role: 学者，古代文明研究专家
summary:
来自遥远东方的学者，专门研究古代文明和失落的知识。戴着圆框眼镜，总是背着装满各种仪器的背包。

:性格
- 博学但书呆子气，好奇心极强，喜欢收集古董和文献

:背景
学者世家，从小接受良好教育
```
````

示意渲染结果：

```html
<div class="npc-card-wrapper">
  <div class="npc-card">
    <div class="card-header">
      <div class="card-header-left">
        <h3 class="npc-name">阿尔弗雷德</h3>
        <div class="npc-role">学者，古代文明研究专家</div>
        <div class="npc-summary">来自遥远东方的学者，专门研究古代文明和失落的知识。戴着圆框眼镜，总是背着装满各种仪器的背包。</div>
      </div>
    </div>
    <div class="card-body">
      <div class="npc-info-section">
        <h4 class="npc-info-section-title">性格</h4>
        <div class="npc-info-section-content">- 博学但书呆子气，好奇心极强，喜欢收集古董和文献</div>
      </div>
      <div class="npc-info-section">
        <h4  class="npc-info-section-title">背景</h4>
        <div  class="npc-info-section-content">学者世家，从小接受良好教育</div>
      </div>
    </div>
  </div>
</div>
```

## npc-summary

自动检索文档中同名 npc-card 获取数据，渲染概括

````markdown
```npc-summary
name: 阿尔弗雷德
```
````

示意渲染结果：

```html
<div class="npc-card-wrapper">
  <div class="npc-card">
    <div class="card-header">
      <div class="card-header-left">
        <h3 class="npc-name">阿尔弗雷德</h3>
        <div class="npc-role">学者，古代文明研究专家</div>
        <div class="npc-summary">来自遥远东方的学者，专门研究古代文明和失落的知识。戴着圆框眼镜，总是背着装满各种仪器的背包。</div>
      </div>
    </div>
  </div>
</div>
```

## CSS 类名

- 标题：`md-h1` ~ `md-h6`（含 id 属性）
- 段落：`md-p`

## VS Code 语法高亮

项目提供了 VS Code 扩展，为 `npc-card` 和 `npc-summary` 代码块提供语法高亮支持。

### 安装方法

在项目根目录的 `.vscode/extensions.json` 中已配置推荐扩展，VS Code 会自动提示安装。

或手动启用：

1. 按 `Ctrl+Shift+P`（Mac: `Cmd+Shift+P`）
2. 输入 "Extensions: Show Recommended Extensions"
3. 找到并安装本地扩展

### 验证安装

打开 [`test-syntax.md`](../../../../../.vscode/extensions/markdown-trpg-scenario/test-syntax.md) 文件，检查代码块语法高亮。

详见 [扩展说明文档](../../../../../.vscode/extensions/markdown-trpg-scenario/README.md)。
