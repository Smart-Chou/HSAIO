const { themeConfig } = require('vuepress-theme-hope');
const navbarConfig = require('./navbar');
const sidebarConfig = require('./sideBar');

module.exports = themeConfig({
    logo: '/assets/img/quan.svg',
    darkLogo: '/assets/img/quan-dark.svg',
    author: 'MIFSH',
    description: 'Happy Study - Knowledge, Notes, documents, and more all in one.',
    hostname: 'https://hsaio.codenoob.top',
    darkmode: 'switch',
    repo: 'https://github.com/Smart-Chou/HSAIO.git',
    repoLabel: '查看源码',
    repoDisplay: false,
    docsRepo: "Smart-Chou/HSAIO",
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '帮助改善此页面！',
    breadcrumb: true,
    activeHeaderLinks: true,
    backToTop: 666,
    nav: navbarConfig,
    sidebar: sidebarConfig,
    displayAllHeaders: true,
    blog: {
        avatar: '/assets/img/AvatarMaker.svg',
        intro: '/author',
        sidebarDisplay: 'mobile',
        description: '编程菜鸟的自我修养',
        autoExcerpt: true,
        perPage: 9,
        timeline: '我们每天度过的日常生活，其实可能就是一连串的奇迹。',
        links: {
            Rss: '/rss.xml',
            Github: 'https://github.com/Smart-Chou',
            QQ: 'https://qm.qq.com/cgi-bin/qm/qr?k=hH6gqBpGrQ80a0kBI-69N6OWXMIJ7825&noverify=0',
            Wechat: '/assets/img/qr_weixin.png',
            Zhihu: 'https://www.zhihu.com/people/ChouCong',
            Gmail: 'mailto:ChouCong912@gmial.com',
        },
    },
    comment: {
        type: 'waline',
        serverURL: 'https://waline.hsaio.zcily.ml/',
        path: 'window.location.pathname',
        lang: 'zh-CN',
        visitor: 'true',
        emoji: ['https://cdn.jsdelivr.net/gh/walinejs/emojis/tieba', 'https://cdn.jsdelivr.net/gh/walinejs/emojis/weibo', 'https://cdn.jsdelivr.net/gh/walinejs/emojis/qq', 'https://cdn.jsdelivr.net/gh/walinejs/emojis/alus', 'https://cdn.jsdelivr.net/gh/walinejs/emojis/bilibili'],
        meta: ['nick', 'mail', 'link'],
        requiredMeta: ['nick', 'mail'],
        pageSize: '8',
    },

    copyright: {
        noCopy: false,
        minLength: 30,
        status: 'global',
    },
    copyCode: {
        duration: 3000,
        showInMobile: false,
    },
    git: {
        contributor: true,
        timezone: 'Asia/Shanghai',
    },
    mdEnhance: {
        enableAll: false,
        container: true, //自定义容器
        codegroup: true, //代码块分组
        align: true, //自定义对齐
        sub: true, //上角标
        sup: true, //下角标
        footnote: true, //脚注
        mark: true, //标记
        tasklist: true, //任务列表
        tex: true, //数学公式
        flowchart: true, //流程图
        mermaid: true, //mermaid
        demo: false, //代码演示
        presentation: false, //ppt
    },
    footer: {
        display: true,
        content: '<a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备20006179号</a>',
        copyright: 'ChouCong | Theme-Hope',
    },
    sitemap: {
        urls: ['https://codenoob.top/Vaultwarden-Wiki-Chinese/', 'https://codenoob.top/Road2Coding/'],
    },
    pwa: {
        favicon: '/favicon.ico',
        cacheHTML: false,
        maxSize: 3000,
        maxPicSize: 2000,
        apple: {
            icon: '/assets/icon/apple-icon-152.png',
            statusBarColor: 'black',
        },
        msTile: {
            image: '/assets/icon/ms-icon-144.png',
            color: '#ffffff',
        },
        manifest: {
            icons: [
                {
                    src: '/assets/icon/chrome-mask-512.png',
                    sizes: '512x512',
                    purpose: 'maskable',
                    type: 'image/png',
                },
                {
                    src: '/assets/icon/chrome-mask-192.png',
                    sizes: '192x192',
                    purpose: 'maskable',
                    type: 'image/png',
                },
                {
                    src: '/assets/icon/chrome-512.png',
                    sizes: '512x512',
                    type: 'image/png',
                },
                {
                    src: '/assets/icon/chrome-192.png',
                    sizes: '192x192',
                    type: 'image/png',
                },
            ],
            shortcuts: [
                {
                    name: 'Guide',
                    short_name: 'Guide',
                    url: '/guide/',
                    icons: [
                        {
                            src: '/assets/icon/guide-maskable.png',
                            sizes: '192x192',
                            purpose: 'maskable',
                            type: 'image/png',
                        },
                        {
                            src: '/assets/icon/guide-monochrome.png',
                            sizes: '192x192',
                            purpose: 'monochrome',
                            type: 'image/png',
                        },
                    ],
                },
            ],
        },
    },
});
