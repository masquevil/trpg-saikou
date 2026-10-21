# AI 开发指南

本文件适用于整个仓库，供 AI 编码助手快速定位代码与遵循项目约定。开始任务前先阅读相关实现；UI/UE 的详细规则以 [设计规范](contribution/ui-ux-guidelines.md) 和 [主题使用与贡献指南](contribution/theme-contributing.md) 为准。

## 项目概况

TRPG 赛高是以浏览器端为主的多工具集合，使用 Vue 3 Composition API、TypeScript、Vite、Vue Router 文件路由、SCSS 和 Element Plus。包管理使用 pnpm，依赖版本以 `package.json` 和 `pnpm-lock.yaml` 为准。

| 目录 | 职责 |
| - | - |
| `src/pages/` | 文件路由入口，通常仅包装对应 app；路由元信息放在 SFC 的 `<route lang="json5">` 中 |
| `src/apps/coc-card/` | COC 人物卡：编辑、派生属性、职业/技能/武器、自动保存、打印及图片导出 |
| `src/apps/erp-card/` | 自由角色扮演人物卡，与 COC 卡结构相近但业务类型不同 |
| `src/apps/infinity-skill-table/` | 无限技能表，复用部分 COC 卡组件与模型 |
| `src/apps/voyage/` | PeerJS 在线跑团/聊天室 |
| `src/apps/scenario-editor/` | 本地模组浏览、Marked 自定义语法、NPC 卡片和打印 |
| `src/apps/roll/`、`timer/` | 投骰工具、可朗读倒计时 |
| `src/apps/record/`、`kp-ads/` | 跑团记录、模组招募展示 |
| `src/components/`、`hooks/`、`utils/`、`libs/` | 真正跨 app 的组件、组合函数、工具和功能库 |
| `src/assets/themes/` | 通用主题及共享纸张部分 |
| `src/local/` | 本地配置与个人数据；模板为 `*.example.ts` |
| `contribution/` | 面向贡献者的规范与使用指南，不存放修改流水账 |

## 开发命令

在仓库根目录执行：

```sh
pnpm install
pnpm dev
pnpm type-check
pnpm build
```

- `pnpm build` 同时执行类型检查和生产打包；`pnpm build-only` 只打包；`pnpm preview` 预览构建产物。
- 目前没有配置自动化测试脚本或测试框架。不要声称运行了不存在的测试；业务改动需补充实际页面或可执行逻辑验证。
- `pnpm lint` 带 `--fix`，`pnpm format` 会重写整个 `src/`；不要为小改动运行全仓修复。需要只读检查时使用 `pnpm exec eslint <相关文件>`。
- 开发服务已存在时优先复用，先确认端口，不随意终止用户进程或开启多个实例。
- **不要自动运行 `pnpm deploy`**：脚本会强制推送分支。部署须获得明确要求。

### 本地配置

首次缺少本地配置时，参考 `src/local/*.example.ts` 创建对应文件。**不要直接运行 `shell/copy.sh` 覆盖已有配置**，该脚本会无条件复制所有模板。

不读取或输出与任务无关的本地密钥、个人跑团记录。测试自动保存、重置或导入时，不清空用户 localStorage；使用独立浏览器上下文或可恢复的测试数据。

## 编码与架构约定

- Vue 组件沿用 `<script setup lang="ts">`，样式优先 `<style scoped lang="scss">`；Teleport 等确需全局选择器时遵循已有独立 style 块。
- 保持相邻文件命名和 API 风格：PascalCase 组件、`useXxx` 组合函数、app 内的 models / types / constants / hooks 分层。
- `@/` 指向 `src/`；共享模块使用别名，app 内相邻模块可使用相对路径。
- 格式遵循 `.prettierrc.json`：两空格、单引号、分号、Vue 属性分行、行宽 100。不顺带重排无关文件。
- 先确认现有库能否完成任务，不擅自引入状态管理、UI、颜色或测试库。
- 角色卡使用 `provide/inject` 及 `useProviders` 访问 pc、viewData、pageData 等；遵循现有数据流，不为单一修复替换整个架构。
- 修改两套角色卡的近似实现时，检查另一套及无限技能表是否受影响；不要假定类型、规则和需求完全相同，也不要顺便做跨 app 重构。
- 持久化通过共享 `useLocalStorage` 和 app 的 `useAppLs` 管理。变更数据结构时检查版本处理、自动保存、恢复、导入/导出兼容性。
- 模组内容由 `import.meta.glob` 加载，解析器有自定义 Marked 扩展；相关任务先读该 app 的 README 和 parser，不将自定义语法当普通 Markdown 删除。

## 路由与 Element Plus

- 在 `src/pages/` 添加或修改路由入口，不手写第二份路由表。页面标题和主题由 `src/router/index.ts` 依据 meta 管理，默认暗色。
- 路由有 history/hash 两种部署方式，改链接时使用 router 和 `BASE_URL`，避免硬编码某个部署前缀。
- Element 模板组件由 resolver 自动导入。显式使用命令式 API 时，在调用模块导入对应样式，例如：

```ts
import { ElMessage } from 'element-plus';
import 'element-plus/es/components/message/style/css';
```

- 不全量接管 `--el-*`。样式适配只改必要组件的局部变量，避免影响原有 plain / text / link / disabled 等变体。
- 若开发时报 `Outdated Optimize Dep`，先检查 Vite 预构建状态及刷新后的请求；不要据此修改业务逻辑或直接清空全部依赖。

## UI/UE 改动的关键边界

详细规则见 contribution 两份指南；下面是实施前必须记住的边界：

1. **变量按职责归属**：通用主题、共享纸张、app 专用和组件私有分开。组件根元素可以声明私有颜色，适合时引用基础 token，不为集中管理而提升到全局。
2. **主题入口只组合**：`themes/index.scss` 管理作用域与引用；具体变量在 shared / dark / light 分组，具体 Element 规则在 element-override，不写进总入口。
3. **共享色阶只维护一份**：品牌和语义色在 `themes/shared/palette.scss`；明暗主题分别保留文字、边框和链接等差异。
4. **外观用类复用**：普通按钮使用 `.button-default`、`.button-success` 等；组件只写尺寸、布局等差异。Default 默认纯白底，边框与交互使用 muted。
5. **私有颜色留在组件**：ActionButton 三态由各自组件维护，调用者复用组件，不从主题或父容器借其私有变量。
6. **按需注入 paper**：确实消费共享纸张变量才 include `paper.tokens`；不要给普通按钮或 AvatarInputRow 注入整套纸张变量。
7. **保留明暗边界**：浅色纸张不随外壳暗化；形象、简易骰子等业务 Dialog 保持暗色。默认消息/确认框可浅色，业务确认框需要暗色时显式 `customClass: 'theme-dark'`。
8. **Teleport 重建作用域**：挂到 body 的弹层不继承原 app 容器，在自身建立需要的主题和必要局部定义。
9. **打印不等于图片导出**：`html-to-image` 的 JPEG 导出需要纸张自身白底深色字，不能只依赖 `@media print`。
10. 文档记录稳定规则和使用方法，不追加每次修复经过、缓存状态或过期主题快照；主题目录不放 README。

## 验证与交付

- 开始前检查 `git status`，保护用户已有的暂存和未暂存改动；不 reset、覆盖或删除不属于本任务的内容。
- 完成后检查修改文件和 `git diff --check`。代码改动运行类型检查/构建；纯文档改动检查链接、路径及示例，无需为此运行全套构建。
- UI 改动在已有开发服务检查实际 computed style 与交互；覆盖相关的明暗、hover、active、focus-visible、disabled、弹层及响应式状态。
- 涉及纸张时检查编辑、打印和实际图片导出；只完成其中一项就明确说明，不把构建通过当成视觉或导出验证。
- `auto-imports.d.ts`、`components.d.ts`、`typed-router.d.ts` 由插件生成，不手写功能到这些文件。检查生成改动是否符合本任务，只撤回能够确认由本次验证产生的无关改动。
- 不把 `dist/`、构建缓存、临时审计和测试数据加入交付；不修改本地私有配置或锁文件，除非任务确有需要。
- 向用户简明说明修改内容、验证结果与未验证部分；第三方网络故障与本次代码错误区分报告。
