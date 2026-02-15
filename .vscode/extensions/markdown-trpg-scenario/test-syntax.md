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
4. **验证代码块**：检查代码块整体应有 `meta.embedded.block.trpg-scenario.npc-card` 作用域
5. **验证标准字段**：点击 `name:`，应显示对应的作用域
6. **验证自定义字段**：点击 `:外观`，应显示对应的作用域
