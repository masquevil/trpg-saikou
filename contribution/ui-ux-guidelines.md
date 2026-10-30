# TRPG 赛高 UI/UE 设计规范

本文件说明本项目的界面设计原则、主题变量用途与使用规则。主题实现、组件接入和贡献方式见 [主题使用与贡献指南](theme-contributing.md)。具体色值以运行主题代码为准，不在文档中重复维护整套色板。

## 1. 设计原则

- **按语义选色**：背景、文字、边框、品牌和状态各有职责，不能因为色值相近就互相替代。
- **按使用范围管理**：全站共用规则归通用主题；app 专用定义留在 app；组件私有状态归组件自身。
- **保持主题边界**：暗色外壳、浅色纸张、暗色业务弹窗可以同时存在，不能一次全局替换全部背景。
- **反馈语义明确**：成功、错误、提示与业务分类分开；不要仅靠颜色表达状态。
- **保留可操作性**：hover、active、键盘焦点、disabled 分别处理；打印和图片导出不应受界面主题干扰。

## 2. 明暗主题与容器

| 场景 | 规则 |
| - | - |
| 应用默认外壳 | 暗色；路由可显式切换浅色 |
| 浅色容器 | 使用 `.light` 或 `.theme-light` |
| 暗色容器 | 使用 `.dark` 或 `.theme-dark` |
| 角色卡、无限技能表 | 暗色外壳内保留浅色纸张 |
| 设置形象、简易骰子、属性点等业务 Dialog | 保留暗色背景；Teleport 后在弹窗自身建立主题作用域 |
| Element Message、默认 MessageBox | 浅色反馈；业务确认框可显式选择暗色，不改变其它弹窗的主题 |
| 模组正文与 NPC | 正文遵循实际容器主题；NPC 卡片保留其固定浅色与原有渐变 |
| 打印、纸张图片导出 | 固定纸张配色，白底深色字；不要只依赖 `@media print`，图片导出也要检查 |

嵌套主题时，不仅要定义变量，还必须将 `color`、`background` 应用到需要承载内容的容器，避免浅色页面底上出现暗色主题的亮色文字。

## 3. 色彩语义

### 主题变量的分类与选用顺序

这套主题通过 CSS 自定义属性（如 `--color-text`，下文称“主题变量”）提供颜色，用 SCSS mixin 组织和注入明暗配色。以下分类说明变量的职责，不是额外的技术或依赖。

| 层 | 回答的问题 | 示例 |
| - | - | - |
| 基础色与色阶 | 有哪些颜色可选？ | `--color-white`、`--color-primary-dark-1` |
| 语义角色 | 颜色在界面中承担什么用途？ | `--color-text`、`--color-link`、`--color-surface` |
| 控件与专用用途 | 控件的哪个部位、状态？ | `--color-button-primary-hover`、`--color-paper-line` |

组件优先使用对应界面用途或控件状态的变量，主题再将其映射到基础色阶；不要在组件里判断明暗后分别写 hex。用途独立的变量可以保留独立色值，不要求每一层都增加别名。

命名使用 `--color-{name}`、`--color-{name}-light-N/dark-N`、`--color-{用途}-{部位或状态}`；按钮使用 `--color-button-{系列}-{部位或状态}`。同值不代表同用途，也不代表应合并变量。新增变量前先判断全站、共享可选部分、app 或组件作用域。

### 按角色选择颜色

| 分类 | 使用规则 |
| - | - |
| 基础色 | `--color-white`、`--color-black` 为基础常量；black 不代表纯黑，不用于等值替代所有黑色遮罩 |
| 页面与卡片 | 页面使用 `--color-bg`；卡片、面板使用 `--color-surface` 及其 header、border、shadow、hover、active 系列 |
| 文字 | heading、text、secondary、tertiary、disabled 表达信息层级；不要把 muted 色阶当作所有文字色的替代品 |
| 边框 | `--color-border` 引用 muted；卡片边框使用 surface 系列；焦点直接使用 primary，不另建 border-active 别名 |
| 占位文字 | 通用 placeholder；纸张与头像有专用用途时使用对应部分的变量 |
| 品牌 | `primary`：主要操作与品牌强调 |
| 状态 | `success`、`warning`、`danger`、`info` 分别表达成功、警告、失败/危险和信息 |
| 中性 | `muted`：中性边框、控件状态等，不代表业务成功或失败 |
| 链接 | 使用 link / link-hover / link-active，由各主题引用适用的 primary 色阶 |

Primary 与语义色共用 `src/assets/themes/shared/palette.scss`，不在 dark/light 中分别维护。基础色阶提供主色、5 级亮色阶和 5 级暗色阶；前五级保持色相和 chroma，仅改变明度。Primary、success、warning、danger、info 另有降低 chroma 的 `light-6` 扩展，以源码定义为准。亮暗后缀描述**色值明度**，不是“只用于浅色/暗色主题”。

### 色阶规则与用途

OKLCH 的 L 是感知明度，C 是彩度（不是 HSL 饱和度），H 是色相角。当前基准 L 为 66%；primary 的 C/H 为 0.15/280，success 为 0.12/150，warning 为 0.12/90，danger 为 0.12/20，info 为 0.06/250，muted 为 0.005/320。

| 后缀 | 当前规则 | 使用边界 |
| - | - | - |
| light-1 → light-5 | L 为 72%、78%、84%、90%、96%，C/H 不变 | 更亮的颜色，不是浅色主题专用接口 |
| dark-1 → dark-5 | L 为 60%、54%、48%、42%、36%，C/H 不变 | 更暗的颜色，不是暗色主题专用接口 |
| light-6 | L 仍为 96%；primary 的 C 为 0.07，success/warning/danger 为 0.06，info 为 0.03 | 低彩度扩展，不比 light-5 更亮；muted 无此级 |
| dark-plain-1 → dark-plain-5 | 对应 dark 色阶，alpha 为 0.4 | 仅 primary、muted 提供，当前用于 Element 按钮适配 |

浅色消息当前使用同语义 light-6 背景、dark-3 文字和 light-2 边框。色阶编号只描述色板，不能推导任意前景/背景都可读，也不能套用其他设计系统的编号含义。

### 表面与链接的映射

| 主题变量 | 用途或映射 |
| - | - |
| `--color-surface-header-bg` | 标题带，当前引用 surface-elevated |
| `--color-surface-border` / `-border-hover` | 表面默认 / 悬停边框 |
| `--color-surface-bg-hover` / `-bg-active` | 表面交互背景，含透明度，需检查下层背景 |
| `--color-surface-shadow` | 仅阴影颜色，不包含偏移或模糊尺寸 |
| `--color-link` / `-hover` / `-active` | 暗色引用 primary-light-1/3/5，浅色引用 primary-dark-1/3/5 |

当前 bg → surface → surface-elevated 在暗色中为 `#2e2e2e` → `#242424` → `#121212`，浅色为白色 → `#f8f8f8` → `#f2f2f2`，均逐渐变暗。elevated 不代表“越浮起越亮”；组件应按表面用途选择变量，而非依赖亮度顺序。

链接复用 `.link` 类处理颜色状态；active 是按下，不是键盘焦点。正文内链接应再用下划线等方式与相邻正文区分，当前 `.link` 没有统一提供下划线。placeholder 不能代替持久标签，secondary/tertiary 也不能仅凭名称就视为满足正文对比度。

### 色值格式

- 品牌与语义色阶使用 OKLCH。
- 文字保持独立层级，不强行匹配 muted。新增或调整时，优先使用 OKLCH 并保留可读的 hex 注释，但不为统一格式擅自改变色值。
- 基础常量、表面、固定纸张色可保留 hex；透明遮罩可保留 rgba。
- 文档不要求为每个硬编码值建立全局变量；先判断它是否属于通用、app、组件或固定资源。

## 4. 按钮与标签

### 通用按钮

`button.scss` 按 default、primary、success、warning、danger、info、muted 分组。

- `--color-button-{name}` 表示背景；`-text`、`-border`、`-hover`、`-active` 表示对应部位和状态。
- **Default 固定纯白底**，边框、文字与交互态使用 muted。纸张上的随机姓名、“一发入魂”等使用该系列，不能把默认底换成浅灰。
- 状态按钮使用对应语义系列，hover / active 按各自定义，不以整体透明度代替所有状态。
- **ActionButton 不是通用色系**：其暗色三态归各个 `ActionButton.vue` 的局部样式；其它功能需要相同按钮时优先复用组件，不从父容器借用其私有变量。

当前语义按钮默认背景为同名基准色，hover / active 为 dark-1 / dark-2，文字为白色；默认 / hover 边框为基准色 / dark-1。**白字是当前映射，不是对比度保证**，调整配色时须逐一验证，必要时调整前景或背景。

Default 的 hover / active 背景为 muted-light-5 / light-4，默认 / hover 文字为 muted-dark-4 / dark-5；仅该系列有额外的 `-text-hover`。不要假定所有按钮系列都具有相同扩展接口。

### 标签与分类

- 暗底亮字标签可使用同一语义的 `dark-5` 背景与 `light-4` 文字，仍需检查实际对比度。
- 标签配色按 app 的业务含义选择，并在 app 内统一维护。
- 记录页 Period Label 保留业务分类色。分类不天然等于状态，不能把“长篇”“战斗”自动理解为错误。
- app 专用标签变量留在 app，不提前增加全局 label 色板；出现稳定的跨 app 需求后再抽取。

## 5. 纸张与编辑器

- 纸张正文、深色墨色、标题带、横线、表格灰阶、说明、copyright 分别保留语义，不因同为灰色合并。
- Copyright 与商业链接保留深灰；链接默认继承版权文字色。足迹等既有透明度不因换色丢失。
- Tree 和 Avatar 是纸张关联组件，但其私有颜色变量留在组件根元素，能匹配基础语义的值引用主题变量；不为集中管理而抽取整套 avatar/tree mixin，也不将整个头像弹窗变浅。
- 底栏、下载预览、加点结果 hover、职业/武器列表和 Dialog 背景由各自组件维护，不属于通用 paper 或通用控制区色板。
- NPC 的固定配色、Markdown 打印色属于模组编辑器，留在该 app。

## 6. 交互与反馈

- **Hover** 表示指针悬停，**active** 表示按下，**focus-visible** 表示键盘焦点，不能混为一种状态。
- 使用全局 primary 焦点轮廓；组件若自行重置 outline，须提供等价且可见的焦点提示。
- Disabled 保留明显的不可用反馈，不仅修改文字或背景色；不可操作行为也应正确禁用。
- 完成反馈使用 success；普通说明用 info；失败用 danger/error。API 类型与反馈语义一致，不通过错误类型追求近似颜色。
- 反馈应有可读文字，不能只显示颜色。错误和警告避免与普通业务分类混淆。
- 透明背景、`currentColor`、继承和动画 opacity 有各自用途，不应机械改成实色。

当前原生通用按钮以 `disabled` 禁用行为，同时设置 `cursor: not-allowed` 和 `opacity: 0.6`，排除 hover / active 规则；没有独立的禁用态颜色变量。选中态（selected / checked）也没有全站统一的颜色变量，须按控件明确设计，不能用短暂的 active 代替持久选择状态。

## 7. 可读性与验收

- 普通文字以 4.5:1、大字号文字以 3:1 对比度为检查目标；必要的非文本边界、焦点提示以 3:1 为目标。禁用态按实际用途判断。
- 在实际背景和透明合成结果上检查，不将 OKLCH 的明度或色阶编号当成对比度保证。
- 检查暗色外壳、浅色纸张、Teleport 弹窗、明暗路由切换，以及 hover / active / focus-visible / disabled。
- 同时检查打印预览与纸张图片导出；仅构建通过不等于视觉验收完成。
- 高明度 OKLCH 色阶应检查浏览器色域映射，必要时调整并重新验证。

## 8. 尚未统一的规范

当前未建立全站统一的字号、间距、圆角、断点和动效时长尺度；实现时遵循相邻组件已有约定，不在文档中虚构已生效的标准。后续统一这些内容时，应补充本规范并同步实际代码。

## 9. 社区参考与取舍

| 来源 | 借鉴方法 | 本项目的取舍 |
| - | - | - |
| [Atlassian：设计变量文档](https://atlassian.design/foundations/tokens) | 设计决策作为单一来源，分开概念与使用说明 | 本文解释颜色用途与设计规则，贡献指南解释实现与使用 |
| [Carbon：Color usage](https://carbondesignsystem.com/elements/color/usage/) | 层级角色、上下文与局部明暗主题 | 明确表面和容器边界，不声称已有自动层级机制 |
| [Radix：Understanding the scale](https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale) | 分别说明背景、交互、边框和文字用途 | 借鉴用途组织，不套用其 12 级编号或继承其对比度结论 |
| [WCAG：文字对比度](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)与[非文本对比度](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) | 量化阈值、使用条件与例外 | 用于实际验收，不仅凭色板宣称达标 |

以上借鉴的是规则的组织与说明方式，不照搬其它系统的变量名、色阶编号或对比度承诺。本项目的固定纸张、ActionButton 与业务分类属于具体界面约定，不作为通用配色规则。
