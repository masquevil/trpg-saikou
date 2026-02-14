# Markdown NPC Card Syntax Highlighting

这是一个 VS Code 插件，为 Markdown 文件中的 `npc-card` 和 `npc-summary` 代码块提供语法高亮支持。

## 功能特性

- 为 `npc-card` 代码块提供完整的语法高亮
- 为 `npc-summary` 代码块提供基础语法高亮
- 支持标准字段高亮（name, role, avatar, summary）
- 支持自定义标签高亮（以冒号开头的标签）
- 支持数字常量、图片格式等元素高亮
- 提供美观的背景色区分不同代码块

## 语法支持

### NPC Card 语法

```markdown
```npc-card
name: 角色名称
role: 角色身份
avatar: 头像文件名.jpg
summary: 角色简介

:自定义标签
标签内容

:外观
详细外观描述
```

### NPC Summary 语法

```markdown
```npc-summary
name: 角色名称
```

## 安装方法

1. 将整个 `markdown-npc-card` 文件夹复制到你的 VS Code extensions 目录：
   - Windows: `%USERPROFILE%\.vscode\extensions\`
   - macOS/Linux: `~/.vscode/extensions/`

2. 重启 VS Code

## 验证插件是否工作

1. 打开 `test-syntax.md` 文件
2. 查看 `npc-card` 和 `npc-summary` 代码块是否有了语法高亮
3. 使用 VS Code 的 "Developer: Inspect Editor Tokens and Scopes" 命令来检查语法作用域

## 故障排除

### 语法高亮不生效

1. 确认插件已正确安装到 `./.vscode/extensions/markdown-npc-card/`
2. 重启 VS Code
3. 检查文件扩展名是否为 `.md`
4. 确保代码块使用正确的语法 (```npc-card)

### 插件更新后不生效

1. 重启 VS Code
2. 清除 VS Code 缓存（如果需要）

## 技术说明

这个插件使用 TextMate 语法注入技术：

- **injectionSelector**: `L:text.html.markdown` - 匹配 Markdown 文档语言
- **作用域命名**: 遵循 TextMate 规范，使用特异性命名确保正确识别
- **正则表达式**: 精确匹配各种语法元素
- **颜色显示**: 实际颜色由 VS Code 主题决定，作用域前缀确保语法分类正确

### 核心配置文件

- `injection.json`: 定义语法注入规则和正则表达式模式
- `settings.json`: 定义作用域映射（颜色由主题决定）
- `test-syntax.md`: 测试文件，验证语法高亮效果

## 自定义配置

如果你想要自定义高亮效果，建议：

1. 使用 "Inspect Editor Tokens and Scopes" 查看当前应用的作用域
2. 根据作用域类型理解语法分类
3. 如需修改颜色，需要通过 VS Code 主题或更深层的配置实现

## 开发者信息

- 使用 TextMate 语法注入技术
- 支持标准字段和自定义标签的区分高亮
- 可扩展的配置体系
- 易于维护和定制

## 许可证

MIT License
