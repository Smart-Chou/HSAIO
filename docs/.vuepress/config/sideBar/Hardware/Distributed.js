const { sidebarConfig } = require('vuepress-theme-hope');

module.exports = sidebarConfig([
    '',
    {
        title: '简介',
        icon: 'NovelDesign',
        collapsable: false,
        prefix: 'Introduction/',
        children: ['cloudComputing', 'bigData'],
    },
    {
        title: '分布式系统',
        icon: 'tampermonkey',
        collapsable: false,
        prefix: 'DistributedSystem/',
        children: [
            '',
            {
                title: 'ZooKeeper',
                icon: 'tampermonkey',
                collapsable: true,
                prefix: 'ZooKeeper/',
                children: ['', 'Principle', 'deploy', 'usage'],
            },
            'etcd',
            'Zipkin',
        ],
    },
    {
        title: '消息队列',
        icon: 'md1',
        collapsable: false,
        prefix: 'MessageQueue/',
        children: [
            '',
            'ActiveMQ',
            {
                title: 'Kafka',
                icon: 'tampermonkey',
                collapsable: true,
                prefix: 'Kafka/',
                children: ['', 'Principle', 'deploy', 'usage'],
            },
        ],
    },
    {
        title: '存储',
        icon: 'eclipse-theia-aws-websoft9',
        collapsable: false,
        prefix: 'Storage/',
        children: ['', 'Ceph', 'FastDFS', 'go-fastdfs', 'h5ai', 'MinIO', 'Nextcloud'],
    },
    {
        title: '区块链',
        icon: 'eclipse-theia-aws-websoft9',
        collapsable: false,
        prefix: 'Blockchain/',
        children: ['', 'BTC', 'ETH'],
    },
]);
