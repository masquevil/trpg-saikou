# Markdown TRPG Scenario Syntax Highlighting

为使用 Markdown 书写的 TRPG 模组「」提供自定义语法和配套的的高亮支持。

## 功能特性

- 提供自定义语法：`npc-card` 和 `npc-summary` 代码块
- 为自定义语法提供语法高亮

## 支持的语法

### NPC Card 语法

```markdown
\`\`\`npc-card
name: 角色名称
role: 角色身份  
avatar: 图片文件地址.jpg / 图片网络地址
summary: 角色简介，可以多行

:自定义字段名
字段内容可以是多行文本

:另一个自定义字段
多行文本：
- 项目1
- 项目2
\`\`\`
```

### NPC Summary 语法

```markdown
\`\`\`npc-summary
name: 角色名称
\`\`\`
```

## 颜色自定义

可以通过 VS Code 的设置来自定义各作用域的颜色：

```json
{
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": "support.class.field.standard.trpg-scenario.npc-card",
        "settings": {
          "foreground": "#C586C0"
        }
      },
      {
        "scope": "variable.parameter.field.custom.trpg-scenario.npc-card",
        "settings": {
          "foreground": "#4EC9B0",
          "fontStyle": "bold"
        }
      }
    ]
  }
}
```
