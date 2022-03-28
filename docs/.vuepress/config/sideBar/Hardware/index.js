const { sidebarConfig } = require('vuepress-theme-hope');

module.exports = sidebarConfig([{
    title: '硬件相关问题总结',
    icon: 'brainsmartbulb',
    prefix: "/Hardware/",
    collapsable: false,
    children: ['HDD','structure','Distributed/','DevOps/'],
}]);