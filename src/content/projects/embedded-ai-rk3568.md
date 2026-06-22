---
title: "Embedded AI System on RK3568"
description: "基于 Firefly RK3568 的嵌入式 AI 协同系统，集成人脸识别、DeepSeek 对话和 PC 端 Flask 数据中心。"
pubDate: "Jun 01 2026"
heroImage: "/media/projects/embedded-ai-rk3568.webp"
badge: "边缘 AI"
github: "https://github.com/reverieach/Embedded-AI-System-Project-based-on-rk3568"
tags: ["Python", "RK3568", "NPU", "Flask", "DeepSeek"]
---

这是北京邮电大学智能系统设计课程中的嵌入式 AI 项目，硬件平台是 Firefly ROC-RK3568-PC。项目目标不是只跑一个单点模型，而是把板端感知、AI 对话、数据同步和 PC 端管理界面串成一个完整系统。

板端负责摄像头采集、人脸识别和交互调度：识别成功后可以进入 AI 对话流程，并把新注册用户信息和操作日志同步到 PC 服务端。PC 端使用 Flask 提供可视化数据中心，用于查看用户头像、实时监控日志和远程管理数据。模型侧使用 RKNN-Toolkit2 / RKNNLite2 在 RK3568 NPU 上进行推理，尝试把课程里的 AI 模型部署与真实硬件约束联系起来。

## 系统组成

- 板端主程序：负责业务调度、摄像头、识别流程和对话入口。
- 人脸识别模块：围绕 MTCNN、RKNN 模型和特征匹配组织推理流程。
- DeepSeek / OpenAI API 客户端：为识别后的用户提供文本对话能力。
- PC 数据中心：Flask Web Dashboard，负责用户数据、头像和日志展示。
- 模型转换流程：从 PyTorch 模型导出到 RKNN 模型，适配 RK3568 NPU。

## 这个项目的意义

我把它看作一次“AI 系统拼装能力”的练习：不仅要会训练或调用模型，还要把硬件、摄像头、模型格式、网络同步、Web 后台和异常排查放在同一个系统里考虑。它让我更直观地理解端侧 AI 的限制，也更清楚地看到课程实验与实际部署之间的差距。
