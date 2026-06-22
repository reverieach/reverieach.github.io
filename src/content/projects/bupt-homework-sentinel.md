---
title: "BUPT Homework Sentinel"
description: "北邮 ucloud 作业监控与提醒工具：自动拉取未完成作业、识别新作业和截止日期，并通过多渠道通知避免遗漏。"
pubDate: "Apr 21 2026"
heroImage: "/media/projects/bupt-homework-sentinel.webp"
badge: "自动化"
github: "https://github.com/reverieach/-BUPT-Homework-Sentinel-"
tags: ["Python", "Flask", "Playwright", "Windows"]
---

BUPT Homework Sentinel 是一个面向北邮 ucloud 作业平台的自动提醒工具。它的出发点很简单：作业入口、课程页面、截止时间和通知渠道分散在不同地方，靠人手每天检查很容易漏。这个项目把这些重复动作交给程序处理，让作业列表、截止提醒和通知记录都能稳定沉淀下来。

项目会自动拉取未完成作业列表，对新作业做去重提醒，并按默认的 2 / 1 / 0 天节点进行截止日期提醒。它还会尽量抓取作业详情内容，把标题、课程、截止时间和正文写入通知或 Markdown 记录；如果接口鉴权过期，会自动重新抓取请求头并重试。日常使用时可以让 Windows 定时任务静默运行，也可以打开 Flask Web 控制台查看状态、调整配置、刷新课程映射或测试通知。

## 功能侧重点

- 自动发现未完成作业和新作业，减少手动刷新平台的成本。
- 支持桌面通知、Markdown、微信 / PushPlus、邮件、Webhook 等多渠道通知。
- 自动关联课程名，并支持当前学期自动检测与课程映射缓存。
- 通过 Playwright 自动登录并捕获鉴权请求头，降低初次配置门槛。
- 提供 Web 控制台，覆盖首次安装向导、日常面板和高级设置。

## 为什么值得放在主页

这个项目不是为了展示复杂算法，而是一个典型的“把生活里的摩擦做成工具”的例子。它涉及网页自动化、状态去重、任务调度、通知编排和本地配置管理，工程量不大，但每个环节都要考虑实际使用中的失败路径。
