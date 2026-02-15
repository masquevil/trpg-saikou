# 贡献指南 Contributing

## 🎯 核心原则

### 1. 命名结构

本插件遵循 [TextMate 标准作用域命名规范](https://macromates.com/manual/en/language_grammars#naming_conventions)，并采用域名空间隔离策略避免冲突。

```text
{type}.{qualifier}.{qualifier}....{domain}.{context}
```

### 2. 层级说明

- **type**: 基础类型（`keyword`, `entity`, `constant`, etc.）
- **qualifier**: 修饰符（`control`, `name`, `numeric`, etc.）
- **domain**: 领域标识（`trpg-scenario`）
- **context**: 具体上下文（`npc-card`, `npc-summary`）

## 📋 完整命名体系

### 代码块命名

```text
meta.embedded.block.trpg-scenario.npc-card
meta.embedded.block.trpg-scenario.npc-summary
```

### 标准字段命名

```text
support.class.field.standard.trpg-scenario.npc-card
support.class.field.standard.trpg-scenario.npc-summary
```

### 自定义字段命名（以:开头的字段）

```text
variable.parameter.field.custom.trpg-scenario.npc-card
```

## 📚 参考资料

- [TextMate官方命名规范](https://macromates.com/manual/en/language_grammars#naming_conventions)
- [VS Code语法高亮指南](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide)
- [Sublime Text作用域系统](https://www.sublimetext.com/docs/3/scope_naming.html)
