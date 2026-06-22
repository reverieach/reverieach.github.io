---
title: "OW Translator Lite"
description: "面向守望先锋外服聊天的实时 OCR 翻译 overlay：本地识别聊天区域，用 OpenAI-compatible API 翻译，并以低打扰方式显示在游戏内。"
pubDate: "Jun 20 2026"
heroImage: "/media/projects/ow-translator-lite.webp"
badge: "桌面工具"
github: "https://github.com/reverieach/ow-translate-lite"
tags: ["C#", "OCR", "Overlay", "LLM", "Windows"]
---

OW Translator Lite 是一个为《守望先锋 2》外服聊天场景设计的 Windows 桌面工具。它不试图做成复杂的大平台，而是专注解决一个很具体的问题：中文玩家在外服对局时，如何尽量不离开游戏视线，也能快速理解英语、日语、韩语聊天内容。

项目流程是：用户框选游戏聊天区域，程序用本地 OneOCR 识别文字，再把符合玩家消息格式的内容送到 DeepSeek 或 OpenAI-compatible API 翻译，最后按聊天顺序显示在置顶 overlay 中。为了降低干扰，翻译框支持常态显示、鼠标穿透、拖动缩放和历史滚动；为了方便回话，也提供了中文输入后翻译并复制到剪贴板的辅助流程。

我在这个项目里比较关注“稳定性”而不是单纯把 OCR 和翻译 API 接起来。实际游戏聊天会遇到 OCR 抖动、短韩语识别、聊天历史打开后重复识别、网络延迟导致译文乱序等问题，所以项目里做了 Timeline 对齐、多帧共识、低成本像素 diff 巡逻和消息去重。它更像一个围绕真实使用场景打磨出来的小工具。

## 我做了什么

- 设计并实现游戏聊天区域的截图、OCR、解析、翻译、overlay 显示链路。
- 使用本地 OneOCR，避免把截图直接交给云端 OCR。
- 接入 DeepSeek / OpenAI-compatible chat completions API。
- 为游戏内场景做低存在感 overlay，支持鼠标穿透、滚动历史和拖动缩放。
- 增加回话输入、译文复制、更新检查、反馈包导出和诊断日志。

## 技术关键词

这个项目主要使用 C#/.NET 构建桌面端程序，核心模块包括 OCR 封装、消息 Timeline、翻译协调、overlay UI、反馈诊断和便携更新器。它是我比较喜欢的一类项目：需求很小，但真实环境里细节很多，越做越能暴露“工具是否真的好用”。
