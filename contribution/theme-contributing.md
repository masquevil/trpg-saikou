# 主题使用与贡献指南

界面与交互决策见 [UI/UE 设计规范](ui-ux-guidelines.md)。本文件解释主题实现、使用与改动流程；色值以源码为准。

## 1. 运行入口与结构

入口链路：`src/main.ts` → `src/assets/main.scss` → `src/assets/base.scss` → `src/assets/themes/index.scss`。以下路径均相对仓库根目录。

```text
src/assets/themes/
├── index.scss
├── shared/
│   └── palette.scss
├── dark/
│   ├── index.scss
│   ├── palette.scss
│   ├── surface.scss
│   ├── button.scss
│   ├── element-override.scss
│   └── theme-part-paper.scss
└── light/
    └── 与 dark 相同的分组
```

| 文件 | 职责 |
| - | - |
| 总 `index.scss` | 明暗作用域，引用浅色反馈样式；不直接定义变量或书写 Element 组件样式 |
| 明暗 `index.scss` | 组合本主题各模块的 `tokens` mixin；不直接定义色值，不自动输出全局规则 |
| `shared/palette.scss` | 明暗主题共用的 primary、success、warning、danger、info、muted 色阶，唯一维护位置 |
| 明暗 `palette.scss` | 引用共享色阶；保留各主题的基础色、文字、边框、占位和链接映射 |
| `surface.scss` | 页面背景与卡片、面板、标题带、边框、阴影和表面交互 |
| `button.scss` | 跨组件的通用按钮色系，不包含 ActionButton 私有颜色 |
| `element-override.scss` | 项目变量到 `--el-*` 的桥接；浅色文件额外导出 `component-styles`，封装普通实底按钮和 Message / MessageBox 规则 |
| `theme-part-paper.scss` | 纸张相关可选部分，按容器显式注入，不进入全局 token 集合 |

固定浅色的纸张定义通过转发复用。仅供组件内部使用的变量应声明在组件根元素，而不是加入 paper 分组。

共享色阶应包含在每个主题的 `tokens` 中，保证嵌套主题与独立弹层获得完整定义。明暗主题可以引用不同的链接色阶，但色阶值只在共享 palette 中维护。

主题目录只放实现文件；使用说明与贡献规则统一放在 `contribution`。修改主题时，以本节列出的运行入口及其引用模块为准。

## 2. 先判断变量属于哪里

| 使用范围 | 放置位置 |
| - | - |
| 全站通用语义 | 明暗主题对应的 palette / surface / button 等分组 |
| 多 app 共用的固定纸张用途 | 明暗 `theme-part-paper.scss`，通过适合的 mixin 注入 |
| 仅某 app 使用 | 对应 `src/apps/<app>/theme.scss`；没有实际跨 app 需求不提升到全局 |
| 仅某组件的内部状态 | 组件自身 scoped 样式中的局部变量 |
| 第三方 API | 保留 `--el-*` 等接口名，在适配层引用项目变量，不复制第三方整套样式 |

同一组件的外观通过组件复用；跨组件的通用外观通过样式类复用。不要为少量组件私有状态创建全局色板。

同值不必同变量，同名也不一定同作用域。新增变量前先确认语义、继承链、交互状态和使用范围。

## 3. 使用通用 token

组件只消费运行入口已经提供的变量，无需再次导入整个主题：

```scss
.tool-card {
  color: var(--color-text);
  background: var(--color-surface);
  border: 1px solid var(--color-surface-border);
}

```

通用按钮直接添加对应样式类，组件类只补充尺寸和布局：

```html
<button class="button-default feature-button">执行操作</button>
```

需要另一种主题时使用容器类。CSS 自定义属性会继承，但实际 `color` / `background` 并不会因为定义了 token 就自动应用到容器。

## 4. 使用 paper 与 app 局部部分

```scss
@use '@/assets/themes/light/theme-part-paper' as paper;

.paper-content {
  @include paper.tokens;
  color: var(--color-paper-text);
  background: var(--color-paper-bg);
}

```

只有真实消费 paper 语义变量的容器或独立组件才注入 `paper.tokens`。组件私有变量在根元素声明，语义匹配时引用基础主题变量，否则保留局部值。

按钮的通用外观由 `src/assets/button.scss` 提供 `.button-default`、`.button-primary`、`.button-success` 等类，统一处理颜色、边框及状态。组件添加对应类后只保留自身布局、尺寸等差异，不重复写颜色规则，也不为按钮注入整套 paper token。

app 的 `theme.scss` 可以包装共享 mixin 或提供自己的 app token，但不在文件中输出 `:root`。在 app 容器或真实消费组件中显式 include。

## 5. Teleport 与 Element

使用命令式 Element API 时，在调用模块中显式导入对应样式：

```ts
import { ElMessage } from 'element-plus';
import 'element-plus/es/components/message/style/css';
```

模板组件交给自动导入配置处理，无需逐个手写注册和样式导入。

Teleport 到 body 的弹层不再继承原 app 容器。暗色业务 Dialog 应在自身选择器中建立主题：

```scss
@use '@/assets/themes/dark' as dark;

.feature-dialog {
  @include dark.tokens;
  // 组件自己的背景，不是全局 Dialog 配色规则。
  background: rgba(0, 0, 0, 0.88);
}
```

- 不为所有 `.el-dialog` 统一设置浅色背景。
- 提示和确认框样式统一在 `element-override.scss` 中维护；业务确认框需要暗色时，通过 `customClass: 'theme-dark'` 显式指定。
- 只覆盖有明确设计需求的 Element 组件变量，不整套映射其色板。按钮使用局部 `--el-button-*`；消息使用局部 `--el-message-*`，避免影响无关组件。
- 普通实底按钮引用项目按钮色系；plain、text、link、disabled 等变体有独立行为，调整前需分别验证。
- Element 的 `light-N` 是组件库接口，不能假定与项目的 OKLCH `light-N` 等价；按实际主题和用途桥接。
- 模块内部避免反向引用主题 index，尤其 `element-override` 不要导入已引用自己的 index，防止 Sass 循环依赖。

## 6. 新增或修改分组

1. 先按使用范围决定归属，不先创建全局变量再寻找用途。
2. 通用新分组在 dark / light 下分别实现 `tokens` mixin，并在各主题 index 中组合。例如真正需要通用 label 时，再新增 `label.scss`。
3. 两主题保持对应的公共接口；固定浅色用途可显式转发，不能遗漏另一主题而依赖偶然继承。
4. 保留语义命名：`--color-{name}`、`--color-{name}-light-N/dark-N`、`--color-{用途}-{状态}`。使用 `color`，不引入拼写变体。
5. 普通边框复用 muted，焦点直接 primary。不要新建没有额外语义的同义别名。
6. 文字层级与 muted 不等值时保留独立色值；如转成 OKLCH，注释原 hex 并检查转换前后外观。
7. 替换所有实际引用后再删旧定义，注意另一套角色卡、共享头像、打印与 Teleport 分支。
8. 更新设计规范或本指南；不要留下临时审计表、重复主题快照或失效迁移建议作为长期文档。

## 7. 验证清单

- [ ] 搜索旧变量、旧 import 与缺失定义；新增组件变量未泄漏到 `:root`。
- [ ] 检查浅暗主题、嵌套纸张、业务弹窗和提示反馈，没有白底白字或错误语义色。
- [ ] 检查默认 / hover / active / focus-visible / disabled；default 按钮默认仍为纯白。
- [ ] 两套角色卡、无限技能表、头像/树、控制区和模组正文涉及的分支均覆盖。
- [ ] 涉及纸张样式时，实际检查打印和 JPEG 导出。
- [ ] 在实际合成背景上验证对比度，参考 [设计规范的验收要求](ui-ux-guidelines.md#7-可读性与验收)。
- [ ] 运行 `pnpm run build`（包含类型检查）及 `git diff --check`。
- [ ] 检查构建工具自动更新的类型声明等文件，不将无关生成改动混入主题变更。

纯样式归位可额外比较改动前后 Sass 编译输出，确认没有意外视觉变化。文档修改则检查路径、链接和示例是否与代码一致。
