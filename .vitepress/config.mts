import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig, type DefaultTheme } from 'vitepress'

const root = fileURLToPath(new URL('..', import.meta.url))

interface Section {
  text: string
  /** 分区目录，例如 /content/stocks/ */
  dir: string
  /** "## 标题" 在 content/README.md 中的锚点 */
  anchor: string
  count: number
  groups: DefaultTheme.SidebarItem[]
}

/**
 * 从 content/README.md 自动生成侧边栏：
 * "## 标题" 是一个分区（美股 / 期权 / 加密货币），"### 标题" 是分区下的细分分类，
 * 其下的 "- [文字](路径.md)" 是分类内的条目。
 * 新增词条时只需维护 content/README.md，侧边栏会自动同步。
 */
function contentSections(): Section[] {
  const md = readFileSync(`${root}content/README.md`, 'utf-8')
  const sections: Section[] = []
  let section: Section | null = null
  let group: DefaultTheme.SidebarItem | null = null

  for (const line of md.split(/\r?\n/)) {
    const h2 = line.match(/^##\s+(.+)/)
    if (h2) {
      const text = h2[1].trim()
      section = { text, dir: '', anchor: text, count: 0, groups: [] }
      sections.push(section)
      group = null
      continue
    }
    const h3 = line.match(/^###\s+(.+)/)
    if (h3 && section) {
      group = { text: h3[1].trim(), collapsed: true, items: [] }
      section.groups.push(group)
      continue
    }
    const item = line.match(/^\s*-\s+\[(.+?)\]\((?!https?:)(.+?)\.md\)/)
    if (item && section && group) {
      group.items!.push({ text: item[1], link: `/content/${item[2]}` })
      section.count++
      // 分区目录取条目路径的第一级，例如 stocks/basics/x → /content/stocks/
      section.dir ||= `/content/${item[2].split('/')[0]}/`
    }
  }
  return sections.filter((s) => s.count > 0)
}

const sections = contentSections()

const startGroup: DefaultTheme.SidebarItem = {
  text: '开始阅读',
  items: [
    { text: '首页', link: '/' },
    { text: '投资入门指南', link: '/guides/投资入门指南' },
    { text: '知识精选目录', link: '/content/' },
    { text: '金融术语表', link: '/glossary/' }
  ]
}

// 分区目录：只列出各分区入口，避免每个页面都内嵌 900+ 条链接
const sectionIndex: DefaultTheme.SidebarItem = {
  text: '知识分区',
  items: sections.map((s) => ({
    text: `${s.text}（${s.count} 篇）`,
    link: `/content/#${s.anchor}`
  }))
}

/**
 * 按路径切换侧边栏：浏览美股词条时只显示美股的细分分类，以此类推。
 * 细分分类默认折叠，当前页面所在的分类会被 VitePress 自动展开。
 */
const sidebar: DefaultTheme.SidebarMulti = {}
for (const s of sections) {
  sidebar[s.dir] = [
    startGroup,
    sectionIndex,
    ...s.groups.map((g) => ({ ...g, text: `${g.text}（${g.items!.length}）` }))
  ]
}
sidebar['/'] = [startGroup, sectionIndex]

export default defineConfig({
  lang: 'zh-CN',
  title: '投资入门指南',
  description: '面向中文投资者的美股、期权与加密货币入门指南',
  // 部署到 GitHub Pages 子路径时由 CI 传入 BASE，例如 /investing-for-beginners/
  base: process.env.BASE || '/',
  cleanUrls: true,
  lastUpdated: true,

  // README.md 作为各目录的首页
  rewrites: {
    'README.md': 'index.md',
    ':dir/README.md': ':dir/index.md'
  },

  markdown: {
    // 词条不需要行号，保留默认即可；这里统一中文提示块标题
    container: {
      tipLabel: '提示',
      warningLabel: '注意',
      dangerLabel: '警告',
      infoLabel: '信息',
      detailsLabel: '详情'
    }
  },

  themeConfig: {
    nav: [
      { text: '入门指南', link: '/guides/投资入门指南' },
      { text: '美股', link: '/content/#美股入门' },
      { text: '期权', link: '/content/#期权进阶' },
      { text: '加密货币', link: '/content/#加密货币' },
      { text: '术语表', link: '/glossary/' }
    ],

    sidebar,

    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xuchonglang/investing-for-beginners' }
    ],

    search: {
      provider: 'local',
      options: {
        // 中文按词切分，否则整句会被当成一个词，搜不到
        miniSearch: {
          options: {
            tokenize: (text: string) => {
              const seg = new Intl.Segmenter('zh-CN', { granularity: 'word' })
              return Array.from(seg.segment(text))
                .filter((s) => s.isWordLike)
                .map((s) => s.segment)
            }
          },
          searchOptions: { prefix: true, fuzzy: 0.2, combineWith: 'AND' }
        },
        translations: {
          button: { buttonText: '搜索全书', buttonAriaLabel: '搜索全书' },
          modal: {
            noResultsText: '没有找到相关结果',
            resetButtonTitle: '清除查询',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },

    footer: {
      message: '本站不提供个性化投资建议，也不承诺任何收益。',
      copyright: 'Copyright © 2026 本仓库版权持有人。保留所有权利。'
    }
  }
})
