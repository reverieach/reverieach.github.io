---
title: "Transformer Semantic Text Matching"
description: "基于 AFQMC 数据集的 Transformer 语义文本匹配实验，也记录了从头训练 Transformer 在小数据集上的收敛问题。"
pubDate: "Dec 22 2025"
heroImage: "/media/projects/semantic-text-matching.webp"
badge: "NLP"
github: "https://github.com/reverieach/Transformer-based-Semantic-Text-Matching"
tags: ["Transformer", "NLP", "AFQMC"]
---

这是神经网络与深度学习课程中的 NLP 实验，目标是在 AFQMC 语义相似度数据集上训练一个 Transformer 编码器，判断两句话是否语义相似。项目包含数据加载、词表处理、Transformer 模型定义、训练脚本、测试与注意力可视化等模块。

和很多“只展示成功结果”的项目不同，这个仓库也保留了实验失败和局限性：从头训练 Transformer 时模型出现明显收敛困难，验证集准确率长期卡在约 69%，接近负样本比例；模型倾向于预测所有样本为“不相似”，注意力分布也没有学到有效语义关联。README 中记录了尝试过的 Pre-Norm、Xavier 初始化、双塔交互、Dropout、加权 Loss / Focal Loss、不同学习率和调度器等方案。

## 为什么还要展示它

我觉得这个项目有价值，恰恰因为它诚实地记录了“方法不适合这个条件”的过程。AFQMC 训练集规模有限、类别不平衡，而从头训练 Transformer 又缺少 BERT / RoBERTa 这类预训练模型的语义先验，所以最终结果提醒我：选模型不仅要看结构先进不先进，也要看数据量、任务难度和训练目标是否匹配。

## 项目内容

- 数据集读取、词表构建和句对输入组织。
- 词嵌入、分段嵌入、正弦位置编码和 4 层 Pre-Norm Transformer Block。
- Mean Pooling 后拼接 `[a, b, |a-b|, a*b]` 进行分类。
- TensorBoard 日志、测试脚本和注意力可视化尝试。
- 对收敛失败的原因分析和后续改进建议。
