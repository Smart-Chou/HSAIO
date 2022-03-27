const { sidebarConfig } = require('vuepress-theme-hope');

module.exports = sidebarConfig([{
    title: 'Vuepress基础认知',
    icon: 'ico_lantern',
    prefix: "/guide/",
    collapsable: false,
    children: ['tutorial', 'vuepress', 'markdown', 'markdown-enhance', 'themeself-markdown-enhance'],
}]);
