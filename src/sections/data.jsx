const LANG = 'CN'  // EN, CN

const headlineEN = "Senior Data Scientist @ ElectrifAi, working on LLMs and AI applications. Obtained my Msc degree in Data Science from Università Bocconi in Italy."

const headlineCN = "AI从业人员，在企业级AI应用领域有丰富的实践经验，兼具团队管理及研究经历，知识技能涵盖深度学习、前后端开发等众多领域。英语听说读写流利。数据科学与经济金融复合教育背景。"

const infoEN = {
  contact: [
    {
      icon: <i class="ri-mail-send-line"></i>,
      name: "fei.li.best@outlook.com",
      url: "mailto:fei.li.best@outlook.com",
    },
    {
      icon: <i class="ri-phone-line"></i>,
      name: "+86 19921834895",
      url: "",
    },
    {
      icon: <i class="ri-global-line"></i>,
      name: "Website - lifei.ai",
      url: "https://lifei.ai",
    },
    {
      icon: <i class="ri-github-fill"></i>,
      name: "GitHub - lifeitech",
      url: "https://github.com/lifeitech",
    },
    {
      icon: <i class="ri-linkedin-box-fill"></i>,
      name: "LinkedIn - lifeipro",
      url: "https://www.linkedin.com/in/lifeipro",
    },
    // {
    //   icon: <i class="ri-twitter-x-line"></i>,
    //   name: "X - lifeitech",
    //   url: "https://twitter.com/lifeitech",
    // },
  ],
  language: ["Chinese (native)", "English (fluent)", "Italian (beginner)", "Japanese (beginner)"],
  techstack: [
    {
      icon: "python.png",
      name: "Python",
    },
    {
      icon: "pytorch.png",
      name: "PyTorch",
    },
    {
      icon: "ts.png",
      name: "TypeScript",
    },
    {
      icon: "js.png",
      name: "JavaScript",
    },
    {
      icon: "next.png",
      name: "Next.js",
    },
    {
      icon: "react.svg",
      name: "React",
    },
    {
      icon: "react.svg",
      name: "React Native",
    },
    {
      icon: "html.png",
      name: "HTML",
    },
    {
      icon: "css.png",
      name: "CSS",
    },
    {
      icon: "tailwind.jpg",
      name: "Tailwind",
    },
    {
      icon: "hugo.png",
      name: "Hugo",
    },
    {
      icon: "jekyll.png",
      name: "Jekyll",
    },
    {
      icon: "vite.png",
      name: "Vite",
    },
    {
      icon: "sql.png",
      name: "SQL",
    },
    {
      icon: "git.png",
      name: "git",
    },
  ],
};

const infoCN = {
  contact: [
    {
      icon: <i class="ri-mail-send-line"></i>,
      name: "fei.li.best@outlook.com",
      url: "mailto:fei.li.best@outlook.com",
    },
    {
      icon: <i class="ri-phone-line"></i>,
      name: "+86 19921834895",
      url: "",
    },
    {
      icon: <i class="ri-global-line"></i>,
      name: "个人网站：lifei.ai",
      url: "https://lifei.ai",
    },
    {
      icon: <i class="ri-github-fill"></i>,
      name: "GitHub：lifeitech",
      url: "https://github.com/lifeitech",
    },
    // {
    //   icon: <i class="ri-twitter-x-line"></i>,
    //   name: "推特：lifeitech",
    //   url: "https://twitter.com/lifeitech",
    // },
    {
      icon: <i class="ri-linkedin-box-fill"></i>,
      name: "领英：lifeipro",
      url: "https://www.linkedin.com/in/lifeipro",
    },
  ],
  language: ["中文 (母语)", "英语 (流利沟通)", "意大利语 (入门)", "日语（入门）"],
  techstack: [
    {
      icon: "python.png",
      name: "Python",
    },
    {
      icon: "pytorch.png",
      name: "PyTorch",
    },
    {
      icon: "ts.png",
      name: "TypeScript",
    },
    {
      icon: "js.png",
      name: "JavaScript",
    },
    {
      icon: "next.png",
      name: "Next.js",
    },
    {
      icon: "react.svg",
      name: "React",
    },
    {
      icon: "react.svg",
      name: "React Native",
    },
    {
      icon: "html.png",
      name: "HTML",
    },
    {
      icon: "css.png",
      name: "CSS",
    },
    {
      icon: "tailwind.jpg",
      name: "Tailwind",
    },
    {
      icon: "hugo.png",
      name: "Hugo",
    },
    {
      icon: "jekyll.png",
      name: "Jekyll",
    },
    {
      icon: "vite.png",
      name: "Vite",
    },
    {
      icon: "sql.png",
      name: "SQL",
    },
    {
      icon: "git.png",
      name: "git",
    },
  ],
};

const experienceEN = [
  {
    icon: "electrifai.png",
    company: "ElectrifAi",
    pos: "Senior Data Scientist",
    loc: "Shanghai, China",
    time: "2023.07 - now",
    description: [
      "[AI Contract Review] A large bidding agency generates thousands of construction contracts each month that need to be reviewed. I lead a team to develope an end-to-end solution with open source LLMs to automate such task. Long context length (100K+ tokens), diverse formats and uncommon data distribution all post challenges. We designed engineering pipeline and novel fine-tuning methods to address such challenges and to address LLM hallucination and instability. I provide guidance and support for team members to ensure timely delivery.",

      "[Alumni Engagement] An US school wants to boost alumni giving rate. I analyzed their alumni data, segmented the alumni into several groups and proposed campaign strategies for each group."
    ]
  },
  {
    icon: "diamond.jpeg",
    company: "Past experience",
    pos: "Analyst @ Agricultural Bank of China HQ (2021.05-2023.06) · Product manager intern @ Ping An Technology (2021.12-2022.01) · Data dev. intern @ TransferEasy (2018.01-2018.06) · Research assistant @ Harvard (2017.08-2017.12)",
    loc: "",
    time: "",
    description: [
      ""
    ]
  },
]

const experienceCN = [
  {
    icon: "electrifai.png",
    company: "奥浦诺 ElectrifAi",
    pos: "高级数据科学家",
    loc: "上海",
    time: "2023.07 至今",
    description: [
      "1.【某招标集团AI合同审核项目】帮客户选购了8xA40 GPU服务器，2个月的时间内指导团队用LangChain, FastAPI等库为客户本地部署ChatGLM2-6B模型，用于生成和审核工程建设合同。为解决长文本（100+页 10+万字）、格式繁杂、专业性强、模型输出不稳定等困难，一开始尝试使用开源向量数据库及中文句嵌入模型，但检索效果并不理想。后采用正则表达式、提示词工程等大量工程化手段进行信息抽取与问答，保障输出结果的稳定性和准确性。",
      "2.【某美国大学校友捐赠项目】指导印度工程团队爬取、清洗linkedin和facebook数据，更新校友信息。使用pandas和matplotlib分析捐赠数据，从分群、校友网络等维度给出提升捐赠率的策略报告。协调设计、前端、后端开发数据dashboard及校友活动管理系统，用评分模型根据活动推荐人群分组，用ChatGPT生成活动邮件。把关产品质量，精准指导团队修复bug，保障产品及时交付。",
      "3. 【售前工程师】跟踪AI领域最新研究进展，根据客户需求，为汽车、电商、保险等不同行业的客户提供生成式AI解决方案。"
    ]
  },
  {
    icon: "diamond.jpeg",
    company: "其他经历",
    // pos: "分析师@农总行 (2021.05-2022.06) · 产品经理实习@平安科技 (2021.12-2022.01) · 数据开发实习@TransferEasy (2018.01-2018.06) · 研究助理@哈佛大学 (2017.08-2017.12)",
    loc: "",
    time: "",
    description: [
      "分析师 @ 中国农业银行总行战略规划部 (21/05 - 23/06)", 
      "产品经理实习 @ 平安科技 (21/12 - 22/01)", 
      "数据开发实习 @ TransferEasy (18/01 - 18/06)",
      "研究助理 @ 哈佛大学 (17/08 - 17/12)",
    ]
  },
]

const projectsEN = [
  {
    icon: "global.svg",
    name: "Blog: lifei.ai",
    link: "https://lifei.ai",
    year: 2024,
    description: [
      "Technical blog on AI & ML, data science, full stack development and other subjects. "
    ],
  },
  {
    icon: "beenote.png",
    name: "beenote.app",
    link: "https://beenote.app",
    year: 2023,
    metric: {star:24, fork:4},
    description: [
      "Full-stack CRUD AI application for taking language learning notes, built with Next.js 13 + Tailwind + PocketBase + AWS SES + ChatGPT, deployed on Vercel and fly.io. Users can ask AI for explaining words and grammars, edit notes and save their notes on the server."
    ],
  },
  {
    icon: "pixel-weather.png",
    name: "Pixel Weather",
    link: "https://github.com/lifeitech/pixel-weather",
    year: 2022,
    metric: {star:2, fork:1},
    description: [
      "Mobile app for checking weathers developed with React Native.",
    ],
  },
  {
    icon: "github.svg",
    name: "NCE in PyTorch",
    link: "https://github.com/lifeitech/nce",
    year: 2020,
    metric: {star:21, fork:3},
    description: [
    "PyTorch implementation of Noise Contrastive Estimation (NCE).",
  ],
  },
];

const projectsCN = [
  {
    icon: "global.svg",
    name: "lifei.ai",
    link: "https://lifei.ai",
    year: 2024,
    description: [
    ],
  },
  {
    icon: "global.svg",
    name: "lifeitech.github.io",
    link: "https://lifeitech.github.io",
    year: 2024,
    description: [
      "专注人工智能领域的英文原创技术博客，如深入解读Llama源代码、详解GPT系列模型原理。"
    ],
  },
  {
    icon: "beenote.png",
    name: "beenote.app",
    link: "https://beenote.app",
    year: 2023,
    metric: {star:24, fork:4},
    description: [
      "记录外语学习笔记的全栈AI应用，采用tiptap开发文本编辑器，调用OpenAI的API提供听说读写AI助理。技术栈采用 Next.js 13 + TailwindCSS + PocketBase + AWS。"
    ],
  },
  {
    icon: "pixel-weather.png",
    name: "Pixel Weather",
    link: "https://github.com/lifeitech/pixel-weather",
    year: 2022,
    metric: {star:2, fork:1},
    description: [
      "用React Native开发的跨平台手机App，用于获知天气信息。",
    ],
  },
  {
    icon: "github.svg",
    name: "NCE in PyTorch",
    link: "https://github.com/lifeitech/nce",
    year: 2020,
    metric: {star:21, fork:3},
    description: [
    "噪音对比估计 (Noise Contrastive Estimation, NCE) 的PyTorch实现。",
  ],
  },
];

const educationEN = [
  {
    icon: "bocconi.png",
    school: "Università Bocconi",
    degree: "Msc. in Data Science",
    loc: "Milan, Italy",
    time: "2018 ~ 2020, 2 yrs",
    description: [
      "GPA: 110/110 cum laude",
      "Research direction: Image generation"
    ],
  },
  {
    icon: "sdu.png",
    school: "Shandong University",
    degree: "BSc, Economics and Finance",
    loc: "Jinan, China",
    time: "2013 ~ 2017, 4 yrs",
    description: [" "],
  },
];

const educationCN = [
  {
    icon: "bocconi.png",
    school: "博科尼大学 Università Bocconi",
    degree: "理学硕士，数据科学",
    loc: "米兰，意大利",
    time: "2018 ~ 2020, 两年",
    description: [
      "GPA: 110/110 cum laude. 研究方向：图像生成"
    ],
  },
  {
    icon: "sdu.png",
    school: "山东大学 Shandong University",
    degree: "经济学学士，经济与金融国际化实验班",
    loc: "济南",
    time: "2013 ~ 2017, 四年",
    description: [" "],
  },
];

export const footer = <div>Built with React Last Update 1/12/2024</div>

export const headline = LANG == 'CN' ? headlineCN : headlineEN
export const info = LANG == 'CN' ? infoCN : infoEN
export const projects = LANG == 'CN' ? projectsCN : projectsEN
export const experience = LANG == 'CN' ? experienceCN : experienceEN
export const education = LANG == 'CN' ? educationCN : educationEN

export const projectTitle = LANG == 'CN' ? '开源项目' : 'Open-source Projects'
export const experienceTitle = LANG == 'CN' ? '职业经历' : 'Relevant Experience'
export const educationTitle = LANG == 'CN' ? '教育背景' : 'Education'
export const contactTitle = LANG == 'CN' ? '联系方式' : 'Contacts'
export const languageTitle = LANG == 'CN' ? '语言能力' : 'Languages'
export const techstackTitle = LANG == 'CN' ? '技术栈' : 'Tech Stack'
// export const footer = LANG == 'CN' ? footerCN : footerEN