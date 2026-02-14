# NPC语法高亮测试文件

## 测试标准字段和自定义字段

```npc-card
name: 艾莉娅
role: 王国骑士
avatar: elia.jpg
summary: 年轻的女骑士

:外观
金色长发，翠绿色眼眸，身高170cm

:人际关系
导师: 马库斯爵士
好友: 阿尔弗雷德
```

## 测试边界情况

```npc-card
name: 测试角色
role: 王国骑士
:测试字段
这是测试内容
:另一个测试
内容包含:冒号
:数字测试
等级: 5
年龄: 25
```

## 测试npc-summary代码块

```npc-summary
name: 阿尔弗雷德
```

## 验证步骤

1. **重启 VS Code** 让新配置生效
2. **打开此测试文件**
3. **使用调试工具**：`Ctrl+Shift+P` → "Inspect Editor Tokens and Scopes"
4. **验证标准字段**：点击 `name:`，应显示作用域 `keyword.control.npc-card.field`，颜色为紫色
5. **验证自定义字段**：点击 `:外观`，应显示作用域 `variable.parameter.custom-field.npc-card`，颜色为浅蓝色
6. **对比Markdown标题**：确认自定义字段颜色与标题颜色有所区别

## 颜色选择说明

- 标准字段保持 `keyword.control` 的紫色，与VS Code默认主题一致
- 自定义字段使用 `variable.parameter` 的浅蓝色，既区别于标题又保持协调
- 两种颜色在视觉上有明显区分，便于快速识别不同类型的字段
