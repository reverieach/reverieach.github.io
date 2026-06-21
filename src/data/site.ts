export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects/', label: 'Projects' },
  { href: '/education/', label: 'Education' },
  { href: '/links/', label: 'Links' },
];

export const projects = [
  {
    name: 'BUPT Homework Sentinel',
    href: 'https://github.com/reverieach/-BUPT-Homework-Sentinel-',
    summary: '自动监控北邮 ucloud 未完成作业、截止日期提醒和多渠道通知推送，包含 Web 控制台与 Windows 静默定时任务。',
    tags: ['Python', 'Flask', 'Playwright', 'Automation'],
    color: 'app-teal' as const,
    icon: 'icon-chat' as const,
  },
  {
    name: 'OW Translator Lite',
    href: 'https://github.com/reverieach/ow-translate-lite',
    summary: '面向守望先锋外服聊天的实时 OCR 翻译 overlay，本地 OneOCR 识别，接入 DeepSeek 或 OpenAI-compatible API。',
    tags: ['.NET', 'OCR', 'Overlay', 'LLM'],
    color: 'app-blue' as const,
    icon: 'icon-camera' as const,
  },
  {
    name: 'Embedded AI System',
    href: 'https://github.com/reverieach/Embedded-AI-System-Project-based-on-rk3568',
    summary: '基于 Firefly RK3568 的嵌入式 AI 协同系统，集成 NPU 人脸识别、DeepSeek 对话和 Flask 数据中心。',
    tags: ['RK3568', 'NPU', 'Flask', 'Edge AI'],
    color: 'app-yellow' as const,
    icon: 'icon-diy' as const,
  },
  {
    name: 'Food-11 LightResNet',
    href: 'https://github.com/reverieach/Image-Classification-with-ResNet',
    summary: '使用 PyTorch 实现 Food-11 图像分类，自定义轻量 ResNet-18，并与 VGG16 迁移学习结果对比。',
    tags: ['PyTorch', 'ResNet', 'CV', 'TensorBoard'],
    color: 'app-green' as const,
    icon: 'icon-critterpedia' as const,
  },
  {
    name: 'Transformer Semantic Matching',
    href: 'https://github.com/reverieach/Transformer-based-Semantic-Text-Matching',
    summary: '围绕 Transformer 的语义文本匹配实验项目，聚焦 NLP 表征、匹配建模和文本相似度任务。',
    tags: ['Transformer', 'NLP', 'Semantic Matching'],
    color: 'warm-peach-pink' as const,
    icon: 'icon-design' as const,
  },
];

export const focusItems = [
  'AI tools that solve daily friction',
  'Computer vision and edge inference',
  'Desktop automation with careful UX',
  'NLP systems and LLM-assisted workflows',
];

export const links = [
  { label: 'GitHub', href: 'https://github.com/reverieach', note: 'Code, experiments, and releases' },
  { label: 'Email', href: 'mailto:baozixuan@bupt.edu.cn', note: 'baozixuan@bupt.edu.cn' },
  { label: 'BUPT', href: 'https://www.bupt.edu.cn/', note: 'Beijing University of Posts and Telecommunications' },
];
