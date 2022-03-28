const { sidebarConfig } = require('vuepress-theme-hope');

module.exports = sidebarConfig([
    '',
    {
        title: 'CI-CD',
        icon: 'NovelDesign',
        collapsable: false,
        prefix: 'CI-CD/',
        children: ['Git', 'GitHub', 'GitLab', 'Jenkins', 'Jenkinsfile'],
    },
    {
        title: '测试',
        icon: 'eclipse-theia-aws-websoft9',
        collapsable: false,
        prefix: 'Test/',
        children: ['Selenium', 'SonarQube'],
    },
    {
        title: '容器',
        icon: 'tampermonkey',
        collapsable: false,
        prefix: 'Container/',
        children: [
            '',
            {
                title: 'Docker',
                icon: 'tampermonkey',
                collapsable: true,
                prefix: 'Docker/',
                children: ['', 'Principle', 'container', 'mirror', 'Dockerfile', 'Docker-Compose'],
            },
            {
                title: 'k8s',
                icon: 'tampermonkey',
                collapsable: true,
                prefix: 'k8s/',
                children: ['', 'deploy', 'Pod', 'Network', 'Volume', 'Plugin', 'Permissions'],
            },
        ],
    },
    {
        title: '配置管理',
        icon: 'eclipse-theia-aws-websoft9',
        collapsable: false,
        prefix: 'ConfigurationManagement/',
        children: ['', 'Ansible', 'Jumpserver', 'Supervisor', 'Consul', 'Nacos'],
    },
    {
        title: '工件仓库',
        icon: 'eclipse-theia-aws-websoft9',
        collapsable: false,
        prefix: 'WorkpieceWarehouse/',
        children: ['Artifactory', 'Nexus', 'Harbor'],
    },
    {
        title: '监控告警',
        icon: 'md1',
        collapsable: false,
        prefix: 'MonitoringAlarms/',
        children: [
            '',
            'Grafana',
            'Zabbix',
            {
                title: 'Prometheus',
                icon: 'tampermonkey',
                collapsable: true,
                prefix: 'Prometheus/',
                children: ['', 'exporter', 'Pushgateway', 'Alertmanager', 'monitorK8s'],
            },
            {
                title: 'ELK',
                icon: 'tampermonkey',
                collapsable: true,
                prefix: 'ELK/',
                children: ['', 'Kibana', 'Filebeat', 'Logstash', 'OpenSearch'],
            },
        ],
    },
    {
        title: '其它',
        icon: 'eclipse-theia-aws-websoft9',
        collapsable: false,
        prefix: 'Other/',
        children: ['VSCode', 'YApi'],
    },
]);
