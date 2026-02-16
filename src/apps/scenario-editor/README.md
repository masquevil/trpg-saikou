# 模组编辑器 (Module Editor)

一个专门用于 TRPG 模组管理和打印的工具，支持 Markdown 格式和智能 NPC 数据管理。

## 功能特点

- 📚 **模组管理**：浏览和查看本地模组
- 📝 **Markdown 支持**：完全支持标准 Markdown 语法
- 🎭 **智能 NPC 管理**：NPC Card 和 NPC Summary 自动关联
- 🖨️ **打印优化**：默认双列布局，专为 A4 纸打印设计
- 📁 **本地文件**：直接读取项目中的 Markdown 文件

## 核心概念

### NPC Card vs NPC Summary

**NPC Card** - 完整的 NPC 信息卡片，建议在模组末尾汇总显示

```npc-card
name: 古堡主人
role: 神秘的贵族
avatar: avatar-path-or-url.jpg
summary: 一位看起来年约五十的贵族男子...

:外观
神秘的外观

:性格
神秘的性格
```

**NPC Summary** - NPC 的核心信息摘要，在正文中标注显示

```npc-summary
name: 古堡主人
```

**工作机制**：

- 同一名字的 NPC Card 和 Summary 会自动关联
- Summary 会以内嵌卡片的形式显示在正文中
- 所有 NPC Card 建议放在模组末尾统一汇总显示
- 减少重复工作，提高写作效率

## 使用方法

### 1. 访问应用

访问 `/scenario-editor` 路径使用模组编辑器。

### 2. 浏览模组

- 首页显示所有可用模组
- 点击模组卡片进入详情页面

### 3. 查看模组

- 模组内容以优化的打印格式显示
- 正文中的 NPC Summary 以内嵌卡片形式展示
- 模组末尾自动汇总所有 NPC Card

### 4. 打印

- Ctrl+P 直接打印或保存为 PDF
- 内容已针对打印进行了优化

## 文件结构

模组文件存放在 `scenario` 目录下：

```sh
scenario/
├── example/
│   └── mod.md
└── 古堡的秘密/
    └── mod.md
```

每个模组目录包含：

- `mod.md`：模组的主要内容文件
- 其他附件文件（图片等）

## 自定义语法

### NPC 卡片 (npc-card)

```npc-card
name: 角色姓名
role: 角色身份
avatar: （可选）头像图片路径
summary: 用于在摘要中展示的描述，可以是多行

:自定义字段
任何内容，可以是多行
```

### NPC 摘要 (npc-summary)

```npc-summary
name: 角色姓名（必须与 npc-card 中的名字相同）
```

## 打印特性

### 双列布局

- 内容默认分为两列显示
- 适合 A4 纸张打印
- 便于阅读和参考

### 版面控制

- 标题 (`h2`) 自动穿透双列布局
- 分隔线 (`---`) 穿透双列布局
- NPC 卡片区段独立显示
- 避免分页断开重要内容

### 打印优化

- 字体大小针对打印优化
- 适当的行间距和段落间距
- 卡片有明确的边界和分页控制
- 移除了屏幕显示专用的控件

## 添加新模组

1. 在 `scenario` 目录下创建新的模组文件夹
2. 在文件夹中创建 `mod.md` 文件
3. 按照 Markdown 语法编写模组内容
4. 可以添加自定义 NPC 卡片和摘要
5. 刷新页面即可看到新模组

## 模组共享协议

待实现。

1. 模组作者可以通过 [CC License Chooser](https://creativecommons.org/chooser/) 和 [CC Licenses](https://creativecommons.org/share-your-work/cclicenses/) 查看可用的许可协议
2. 模组作者可以自由选择并使用其中的协议
3. 在 markdown 中使用自定义语法块，可以将协议的概述信息展示到文档的第二页（封面背面）
4. 展示信息会使用 [CC Licenses](https://creativecommons.org/share-your-work/cclicenses/) 中的图例和 [协议deed示例](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh-hans) 中的简要描述和协议标题

## 技术实现

- **框架**：Vue 3 + TypeScript
- **Markdown 解析**：marked
- **HTML 清理**：DOMPurify
- **UI 组件**：Element Plus
- **样式**：SCSS

## 最佳实践

1. **命名一致性**：确保 npc-card 和 npc-summary 使用相同的 name 字段
2. **信息层次**：在 card 中提供完整信息，在 summary 中提供核心要点
3. **合理分布**：重要的 NPC 在首次出现时使用 summary，详细信息在末尾查看 card
4. **打印预览**：写作时可以随时打印预览效果

## 注意事项

1. 模组文件必须使用 UTF-8 编码
2. 所有自定义语法块必须正确闭合
3. 打印时建议使用 Chrome 浏览器获得最佳效果
4. 模组目录名将直接显示为模组名称
