const { config } = require('vuepress-theme-hope');
const themeConfig = require('./themeConfig');

module.exports = config({
    title: 'HSAIO',
    description: 'Happy Study - Knowledge, Notes, documents, and more all in one.',
    base: '/',
    dest: './dist',
    head: [
        ['meta', { name: 'baidu-site-verification', content: 'code-E87rwPtGLL' }], //百度验证
        ['meta', { name: 'google-site-verification', content: 'i9llgSGLwQ5xvWGIdJRONZfTeCpJZxhjTPnZxfljuGo' }], //Google验证
        ['meta', { name: 'msvalidate.01', content: 'B9A0C43AD3B1BD529335A2616F235E46' }], //Bing验证
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },
    permalink: '/:regular',
    themeConfig,
    plugins: [
        [require('./catalog-graph/index.js')],
        [
            'vuepress-plugin-meilisearch',
            {
                hostUrl: 'https://tv.zcily.life',
                apiKey: 'opOU6e6Xa6e95c296386d50d0234b615391764fd386ce5a62dd5da00f6bc862cb206c438',
                indexUid: 'hsaio',
                placeholder: '搜点啥呢？',
                maxSuggestions: 6,
                cropLength: 50,
            },
        ],
        ['vuepress-plugin-check-md'],
        ['vuepress-plugin-permalink-pinyin'],
    ],
    globalUIComponents: ['V2Notice'],
});
