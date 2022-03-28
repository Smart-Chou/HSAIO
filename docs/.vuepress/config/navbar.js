const { navbarConfig } = require('vuepress-theme-hope');

module.exports = navbarConfig([
    { text: '主页', icon: 'zhuye1', link: '/' },
    { text: 'Guide', icon: 'kaishixunjian', link: '/guide/' },
    {
        text: 'Index',
        icon: 'leimu',
        items: [
            {
                text: '快速查找',
                icon: 'leimu',
                prefix: '/Hardware/',
                items: [
                    { text: 'DevOps', icon: 'notebook', link: 'DevOps/' },
                    { text: 'Distributed', icon: 'biaoqian1', link: 'Distributed/' },
                ],
            },
            {
                text: '其他',
                icon: 'leimu',
                items: [
                    { text: '时光鸡', icon: 'liebiao', link: '/timeline/' },
                    { text: '留言板', icon: 'shuoshuo', link: '/message.md' },
                ],
            },
        ],
    },
    {
        text: '点点看',
        icon: 'leimu',
        items: [
            {
                text: '快速查找',
                icon: 'leimu',
                items: [
                    { text: '分类', icon: 'notebook', link: '/category/' },
                    { text: '标签', icon: 'biaoqian1', link: '/tag/' },
                ],
            },
            {
                text: '其他',
                icon: 'leimu',
                items: [
                    { text: '时光鸡', icon: 'liebiao', link: '/timeline/' },
                    { text: '留言板', icon: 'shuoshuo', link: '/message.md' },
                ],
            },
        ],
    },
]);
