const { defineThemeConfig } = require('vuepress-theme-hope');
const navbarConfig = require('./navbar');
const sidebarConfig = require('./sidebar');

module.exports = defineThemeConfig({
    logo: '/assets/img/AvatarMaker - y-p120.png',
    logoDark: '/assets/img/AvatarMaker - tm.png',
    author: { name: 'ChouCong', url: 'https://mrhope.site' },
    description: '编程菜鸟的自我修养',
    hostname: 'https://codenoob.top',
    darkmode: 'switch',
    repo: 'https://github.com/Smart-Chou/HSAIO',
    repoLabel: '查看源码',
    repoDisplay: false,

    docsRepo: 'Smart-Chou/HSAIO',
    docsDir: 'blog',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '帮助改善此页面！',

    breadcrumb: true,
    activeHeaderLinks: true,

    backToTop: 666,

    displayAllHeaders: true,
    //prue: 'true',

    iconPrefix: 'iconfont icon-',

    navbar: navbarConfig,
    sidebar: sidebarConfig,

    blog: {
        avatar: '/assets/img/AvatarMaker.svg',
        roundAvatar: true,
        intro: '/author',
        sidebarDisplay: 'mobile',
        description: '编程菜鸟的自我修养',
        articlePerPage: 9,
        timeline: '我们每天度过的日常生活，其实可能就是一连串的奇迹。',
        medias: {
            Rss: '/rss.xml',
            Github: 'https://github.com/Smart-Chou',
            QQ: 'https://qm.qq.com/cgi-bin/qm/qr?k=hH6gqBpGrQ80a0kBI-69N6OWXMIJ7825&noverify=0',
            Wechat: '/assets/img/qr_weixin.png',
            Zhihu: 'https://www.zhihu.com/people/ChouCong',
            Gmail: 'mailto:ChouCong912@gmial.com',
        },
    },

    displayFooter: true,
    footer: '<a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备20006179号</a>',
    copyright: 'MIFSH | Theme-Hope',

    plugins: {
        blog: {
            autoExcerpt: true,
        },

        search: true,

        comment: false,

        copyCode: {
            duration: 3000,
            showInMobile: false,
        },

        feed: {
            atom: true,
            json: true,
            rss: true,
        },

        mdEnhance: {
            // enableAll: true,
            container: true,
            codegroup: true,
            align: true,
            demo: true,
            flowchart: true,
            footnote: true,
            presentation: false,
            sub: true,
            sup: true,
            tex: true,
            vpre: true,
            mark: true,
            tasklist: true,
            mermaid: true,
            lazyLoad: true,
        },

        pwa: {
            favicon: '/favicon.ico',
            themeColor: '#5c92d1',
            cacheHTML: false,
            maxSize: 3072,
            apple: {
                icon: '/assets/icon/apple-icon-152.png',
                statusBarColor: 'black',
            },
            msTile: {
                image: '/assets/icon/ms-icon-144.png',
                color: '#ffffff',
            },
            manifest: {
                name: 'Mr.Hope 的个人博客',
                short_name: 'Mr.Hope Blog',
                description: 'Mr.Hope 的个人博客',
                theme_color: '#5c92d1',
                icons: [
                    {
                        src: '/assets/icon/chrome-192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/assets/icon/chrome-512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: '/assets/icon/chrome-mask-192.png',
                        sizes: '192x192',
                        purpose: 'maskable',
                        type: 'image/png',
                    },
                    {
                        src: '/assets/icon/chrome-mask-512.png',
                        sizes: '512x512',
                        purpose: 'maskable',
                        type: 'image/png',
                    },
                ],
                shortcuts: [
                    {
                        name: '分类',
                        short_name: '分类',
                        icons: [
                            {
                                src: '/assets/icon/category-maskable.png',
                                sizes: '192x192',
                                purpose: 'maskable',
                                type: 'image/png',
                            },
                            {
                                src: '/assets/icon/category-monochrome.png',
                                sizes: '192x192',
                                purpose: 'monochrome',
                                type: 'image/png',
                            },
                        ],
                        url: '/category/',
                        description: '文章分类分组',
                    },
                    {
                        name: '标签',
                        short_name: '标签',
                        icons: [
                            {
                                src: '/assets/icon/tag-maskable.png',
                                sizes: '192x192',
                                purpose: 'maskable',
                                type: 'image/png',
                            },
                            {
                                src: '/assets/icon/tag-monochrome.png',
                                sizes: '192x192',
                                purpose: 'monochrome',
                                type: 'image/png',
                            },
                        ],
                        url: '/tag/',
                        description: '文章标签分组',
                    },
                    {
                        name: '时间线',
                        short_name: '时间线',
                        icons: [
                            {
                                src: '/assets/icon/timeline-maskable.png',
                                sizes: '192x192',
                                purpose: 'maskable',
                                type: 'image/png',
                            },
                            {
                                src: '/assets/icon/timeline-monochrome.png',
                                sizes: '192x192',
                                purpose: 'monochrome',
                                type: 'image/png',
                            },
                        ],
                        url: '/timeline/',
                        description: '时间线文章列表',
                    },
                    {
                        name: '个人介绍',
                        short_name: '个人介绍',
                        icons: [
                            {
                                src: '/assets/icon/about-maskable.png',
                                sizes: '192x192',
                                purpose: 'maskable',
                                type: 'image/png',
                            },
                            {
                                src: '/assets/icon/about-monochrome.png',
                                sizes: '192x192',
                                purpose: 'monochrome',
                                type: 'image/png',
                            },
                        ],
                        url: '/about/',
                        description: '个人介绍',
                    },
                ],
            },
        },
    },
});
