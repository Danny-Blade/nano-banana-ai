## 项目目标

* 搭建一个「nano banana」能力的独立站，提供分类清晰的功能入口与统一的交互体验

* 使用最新 Nuxt 3（SSR/混合渲染），实现高性能与良好 SEO

* 内置多语言（中文/英文），后续可扩展更多语言

## 总体架构

* 前端：Nuxt 3 + TypeScript + `@nuxt/ui`（或 TailwindCSS）

* 服务层：Nuxt Nitro `server/api/**` 提供能力代理与整合

* 能力层：以「能力注册表」统一抽象 nano banana 的各类功能（文本、图像、语音、知识库、工作流等）

* 配置层：`runtimeConfig` 管理密钥与服务端配置；`.env` 注入私有变量

## 技术选型

* 框架：Nuxt 3 最新稳定版（含 Vite 构建）

* UI：`@nuxt/ui`（开箱组件 + Tailwind 主题）或 TailwindCSS + Headless UI

* 多语言：`@nuxtjs/i18n`（路由本地化、语言包、浏览器语言检测）

* 状态：`pinia`（轻量全局状态），或以 `useState`/`useFetch` 组合式管理

* 表单与校验：`zod`（参数校验与类型安全）

* 请求：`$fetch`（内置）+ 服务端代理

## 目录结构

* `pages/` 路由页面（首页、能力目录、能力详情、聊天、设置）

* `components/` 通用组件（导航、切换语言、能力卡片、表单控件）

* `composables/` 组合式 hooks（能力执行、国际化工具、主题）

* `server/api/` 服务端接口（对接 nano banana 能力，统一鉴权与速率控制）

* `plugins/` 插件（UI、i18n、Pinia 等）

* `locales/` 文案包（`en.json`、`zh-CN.json`）

* `data/` 能力注册表与分类元数据（`capabilities.ts`）

* `types/` 能力与请求响应的 TS 类型

## 多语言实现

* 安装并配置 `@nuxtjs/i18n`，启用路由本地化与默认语言检测

* 语言包：`locales/en.json`、`locales/zh-CN.json` 覆盖导航、标题、按钮、能力介绍等

* 顶部导航放置语言切换器，记忆用户选择（localStorage / cookie）

* SEO：各语言版本配置不同的 `title`、`meta` 与 `og:*`

## 能力分类与注册机制

* 建立能力抽象接口：`Capability`（`id`、`name`、`category`、`inputs`、`execute()`）

* 分类示例：

  * 文本生成/对话（LLM）

  * 图像生成/处理

  * 语音（ASR/TTS）

  * 知识库/RAG

  * 工具调用/函数执行

  * 工作流/代理（Agent）

* `data/capabilities.ts` 以数组或映射形式注册能力；UI 页面自动读取并渲染

* 参数表单由 `inputs` 元数据驱动（类型、占位、校验规则）

## 核心页面与交互

* 首页：nano banana 品牌视觉 + 能力总览 + 搜索入口

* 能力目录：按分类筛选、搜索、标签过滤；卡片展示简介与入口

* 能力详情：介绍、参数表单、运行结果面板、示例与最佳实践

* 聊天页：支持系统提示、上下文管理、消息气泡、流式输出

* 设置页：语言、主题、接口配置（仅展示可公开设置项）

## 服务器与能力对接

* `server/api/capabilities/*`：为每个能力提供统一入口（POST），进行参数校验与鉴权

* 建立 nano banana 客户端封装：`server/utils/nanoBananaClient.ts`，对接实际 SDK/API

* 采用 `runtimeConfig` 注入密钥，服务端持有，不在前端泄露

* 统一错误处理与速率限制，记录调用日志与耗时（不含敏感内容）

## 主题与 UI 设计

* 现代、简洁、品牌统一；支持深浅主题

* 使用 `@nuxt/ui` 组件搭建导航、表单、卡片、列表、对话框

* Tailwind 定制主题色与字体；动效适度（过渡、骨架屏、加载状态）

## 安全与配置

* 密钥仅保存在 `.env`，通过 `runtimeConfig` 服务端读取

* CORS 与来源校验；接口防滥用（速率限制 / 简易令牌）

* 服务端输入校验（zod），输出脱敏

## 性能与 SEO

* SSR/混合渲染；关键页面预渲染

* 路由分块与懒加载；图片优化

* 语义化 HTML、站点地图、robots、结构化数据（必要时）

## 测试与质量

* 单元测试（`vitest`）验证能力封装与表单校验

* 端到端测试（`playwright`）覆盖关键流程（能力执行、聊天、多语言切换）

* ESLint + Prettier 统一规范；CI 执行检查

## 里程碑

* 第 1 阶段：项目初始化（Nuxt、UI、i18n、基础布局与导航）

* 第 2 阶段：能力注册表与目录页，接入 1-2 个示例能力（stub 或真实）

* 第 3 阶段：聊天页与流式输出、错误处理与日志

* 第 4 阶段：完善能力详情页（参数驱动）、RAG/工作流等高级能力接入

* 第 5 阶段：测试完善、性能优化、SEO 与部署

## 交付与部署

* 开发环境：本地 `.env` 与私有密钥，禁止前端暴露

* 部署：Node 服务器（Nitro）、或 Edge 兼容；支持 Docker

* 环境区分：`dev`、`staging`、`prod` 的 `runtimeConfig` 与日志级别

## 后续语言扩展

* 采用扁平化 JSON 文案结构，规范 key 命名

* 增加语言时仅需添加 `locales/<lang>.json` 与 i18n 配置项

* 业务文案与能力说明从注册表与文案包同步渲染

