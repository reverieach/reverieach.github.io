---
title: "Kaoyan AI Assistant"
description: "面向计算机考研 408 的 AI 复习助手，围绕错题录入、OCR 识别、智能归因和 SM-2 复习计划组织学习流程。"
pubDate: "Apr 16 2026"
heroImage: "/media/projects/kaoyan-ai-assistant.webp"
badge: "学习工具"
github: "https://github.com/reverieach/kaoyan-ai-assistant"
tags: ["TypeScript", "Next.js", "OCR", "Dify", "SM-2"]
---

Kaoyan AI Assistant 是一个为计算机考研 408 复习设计的 AI 辅助工具。它关注的不是“把 AI 放到页面上”，而是把错题复盘这件事拆成更顺手的流程：快速录入题目、自动识别题目内容和科目、归因错误类型，再根据记忆规律安排后续复习。

仓库中的 Web 端使用 Next.js / TypeScript 构建，包含 dashboard、mistakes、review、references、profile、admin、auth 等页面模块，并接入 Supabase、OCR / Transformers.js、Dify 相关能力。项目描述中明确的核心功能包括移动端“拍照秒传”、OCR 与 AI 自动识别、概念 / 计算 / 逻辑等错误类型归因，以及基于 SM-2 的记忆规划。

## 设计思路

- 先解决录入成本：复习时最容易放弃的是“把错题整理进系统”这一步。
- 再解决复盘质量：不仅记录错了什么，还尽量分析为什么错。
- 最后解决复习节奏：用 SM-2 一类间隔重复策略，把复习安排变成系统动作。

## 我会继续补的方向

这个项目适合继续往“个人知识管理 + 备考节奏管理”方向走。后续如果继续完善，我会更关注移动端体验、题目结构化解析的准确率、错题标签体系，以及如何让 AI 分析结果可验证、可修改，而不是一锤子买卖式地给出结论。
