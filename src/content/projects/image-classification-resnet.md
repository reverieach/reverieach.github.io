---
title: "Food-11 Image Classification with ResNet"
description: "基于 PyTorch 的 Food-11 图像分类实验，自定义轻量 ResNet-18，并与 VGG16 迁移学习结果进行对比。"
pubDate: "Nov 21 2025"
heroImage: "/media/projects/food11-resnet.webp"
badge: "计算机视觉"
github: "https://github.com/reverieach/Image-Classification-with-ResNet"
tags: ["PyTorch", "ResNet", "Computer Vision", "TensorBoard"]
---

这是神经网络与深度学习课程中的图像分类实验，任务是使用 Food-11 数据集完成 11 类食物图片分类。项目主要实现了一个自定义的 LightResNet-18，并保留 VGG16 迁移学习作为对照，用来观察“从头训练轻量网络”和“使用预训练模型”在精度、参数量和训练稳定性上的差异。

LightResNet-18 采用残差网络结构，但降低了通道数以控制参数量和显存占用；训练流程中加入数据增强、Dropout、Weight Decay 和 CosineAnnealingLR，尽量提升泛化能力。项目 README 中记录的自定义 ResNet 验证集准确率约为 80%，VGG16 迁移学习版本可达到更高水平。

## 实验要点

- 使用 PyTorch / Torchvision 搭建训练与预测流程。
- 支持 Flip、Rotation、ColorJitter、Crop、Affine 等图像增强。
- 针对中文路径图片读取问题，用 `cv2.imdecode` 做更稳的加载处理。
- 使用 TensorBoard 记录训练过程，便于观察 loss 和 accuracy 变化。
- 输出预测 CSV，方便和课程评测流程对接。

## 收获

这个实验让我更清楚地看到：网络结构本身只是图像分类的一部分，数据增强、训练策略、正则化、预训练权重和工程化的数据读取同样会显著影响结果。它也是我把课程实验整理成可复现项目的一次练习。
