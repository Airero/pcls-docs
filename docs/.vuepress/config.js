module.exports = {
  title: ' PCL 群组服帮助文档',
  description: '社区维护的 PCL 群组服帮助文档 兼 脑溢血治疗中心',
  themeConfig: {
    logo: 'favicon.png',
        docsRepo: 'Big-Cake-jpg/pcls-docs',
        docsBranch: 'source',
        editLinks: true,
        editLinkText: '帮助我们完善这个页面',
    sidebar: {
         '/pcls/': [
             ['/pcls/', '首页'],
             '/pcls/introducing.html',
             '/pcls/about-whitelist.html',
             '/pcls/commands.html',
             '/pcls/troubleshooting.html'
             /* '/pcls/how-to-play.html', */
             /* '/pcls/q&a.html' */
         ]
        /* '/rules/': [ */
            /* ['/rules/', '首页'], */
            /* '/rules/qq-group.html', */
            /* '/rules/pcls.html', */
            /* '/rules/ask-questions.html' */
        /* ] */
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '生存服', link: '/pcls/' },
      { text: '服务器规则', link: '/rules/' },
      { text: '赞助', link: 'https://pay.z0z0r4.top', target:'_blank' },
      { text: '封禁列表', link: 'https://bans.z0z0r4.top', target:'_blank' },
      { text: 'GitHub', link: 'https://github.com/Big-Cake-jpg/pcls-docs', target:'_blank' }
    ],
    lastUpdated: '最后更新 ',
    smoothScrool: true
  },
  head: [
    ['link', { rel: 'icon', href: 'favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: 'favicon.png' }]
  ],
  evergreen: true
}
