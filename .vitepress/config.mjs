import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "植科专业材料汇总",
  description: "植物科学专业学习资料",

  // 👇 添加 themeConfig
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '材料汇总', link: '/植科专业材料汇总' }
    ],

    // 👇 核心：配置侧边栏
    sidebar: [
      {
        text: '植科专业材料',
        items: [
          { text: '📄 植科专业材料汇总', link: '/植科专业材料汇总' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/File0603/mia-database' }
    ]
  }
})
