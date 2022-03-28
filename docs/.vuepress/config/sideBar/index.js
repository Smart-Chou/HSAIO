const { sidebarConfig } = require('vuepress-theme-hope');

module.exports = sidebarConfig({
    '/Hardware/Distributed/': require('./Hardware/Distributed'),
    '/Hardware/DevOps/': require('./Hardware/DevOps'),
    '/Hardware/': require('./Hardware'),
    //'/Document/Docker/': require('./Document/Docker'),

    '/vaultwarden/': require('./vaultwarden'),

    '/tools/creat/': require('./tools/creat'),
    '/tools/': require('./tools'),

    '/code/python/': require('./code/python'),
    '/code/': require('./code'),

    '/guide/': require('./guide'),
});
