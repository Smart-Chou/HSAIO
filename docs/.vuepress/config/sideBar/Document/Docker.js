const { sidebarConfig } = require('vuepress-theme-hope');

module.exports = sidebarConfig({
    {
        title: '初接触指南',
        icon: 'ico_lantern',
        collapsable: false,
        children: ['tutorial'],
    },
    {
        title: 'VuePress',
        icon: 'Vue',
        collapsable: false,
        children: ['vuepress'],
    },
    {
        title: 'Markdown',
        icon: 'md1',
        collapsable: false,
        children: ['markdown'],
    },
    {
        title: 'Markdown增强',
        icon: 'filemarkdown',
        collapsable: false,
        children: ['markdown-enhance'],
    },
    {
        title: '本主题Markdown增强',
        icon: 'md1',
        collapsable: false,
        children: ['themeself-markdown-enhance'],
    },
    {
        title: '微信交流群',
        icon: '',
        collapsable: false,
        children: 'https://docker_practice.gitee.io/pic/dpsig-wechat.jpg',
    },
    {
        title: '小程序',
        icon: '',
        collapsable: false,
        children: 'https://docker_practice.gitee.io/pic/dp-wechat-miniprogram.jpg',
    },
    {
        title: '安装 Docker',
        icon: '',
        collapsable: false,
        children: '/install/',
    },
    {
        title: 'Docker 入门',
        icon: '',
        collapsable: false,
        children: '/',
    },
    {
        title: 'Docker 实战',
        icon: '',
        collapsable: false,
        children: '/cases/os/',
    },
    {
        title: 'CI/CD',
        icon: '',
        collapsable: false,
        children: '/cases/ci/',
    },
    {
        title: 'Compose',
        icon: '',
        collapsable: false,
        children: '/compose/',
    },
    {
        title: 'Kubernetes',
        icon: '',
        collapsable: false,
        children: '/kubernetes/',
    },
    {
        title: '云计算',
        icon: '',
        collapsable: false,
        children: '/cloud/',
    },
    {
        title: '云服务器99/元首年特惠',
        icon: '',
        collapsable: false,
        children: 'https://cloud.tencent.com/act/cps/redirect?redirect=1062&cps_key=3a5255852d5db99dcd5da4c72f05df61&from=console',
    },
    '/cloud/': ['intro', 'tencentCloud', 'alicloud', 'aws', 'summary'],
    '/kubernetes/': [
        'intro',
        'concepts',
        'design',
        {
            title: '部署 Kubernetes',
            collapsable: true,
            children: ['setup/', 'setup/kubeadm', 'setup/docker-desktop', 'setup/systemd', 'setup/dashboard'],
        },
        {
            title: 'Kubernetes 命令行 kubectl',
            collapsable: true,
            children: ['kubectl/'],
        },
    ],
    '/compose/': ['introduction', 'v2', 'install', 'usage', 'commands', 'compose_file', 'django', 'rails', 'wordpress', 'lnmp'],
    '/install/': [
        'ubuntu',
        'debian',
        'fedora',
        'centos',
        'raspberry-pi',
        // 'offline',
        'mac',
        'windows',
        'mirror',
        'experimental',
    ],
    '/cases/os/': [
        {
            title: '操作系统',
            collapsable: false,
            children: ['busybox', 'alpine', 'debian', 'centos', 'summary'],
        },
        {
            title: '在 IDE 中使用 Docker',
            collapsable: false,
            children: ['/ide/', '/ide/vsCode'],
        },
    ],
    '/cases/ci/': [
        'actions/',
        {
            title: 'Drone',
            collapsable: true,
            children: ['drone/', 'drone/install'],
        },
    ],
    '/': [
        '/',
        '/CHANGELOG',
        '/CONTRIBUTING',
        {
            title: 'Docker 简介',
            collapsable: false,
            children: ['introduction/', 'introduction/what', 'introduction/why'],
        },
        {
            title: '基本概念',
            collapsable: false,
            children: ['basic_concept/', 'basic_concept/image', 'basic_concept/container', 'basic_concept/repository'],
        },
        {
            title: '使用镜像',
            collapsable: false,
            children: ['image/', 'image/pull', 'image/list', 'image/rm', 'image/commit', 'image/build', 'image/other.md', 'image/internal.md'],
        },
        {
            title: 'Dockerfile',
            collapsable: true,
            children: ['image/dockerfile/', 'image/dockerfile/copy', 'image/dockerfile/add', 'image/dockerfile/cmd', 'image/dockerfile/entrypoint', 'image/dockerfile/env', 'image/dockerfile/arg', 'image/dockerfile/volume', 'image/dockerfile/expose', 'image/dockerfile/workdir', 'image/dockerfile/user', 'image/dockerfile/healthcheck', 'image/dockerfile/label', 'image/dockerfile/shell', 'image/dockerfile/onbuild', 'image/dockerfile/references', 'image/multistage-builds/', 'image/multistage-builds/laravel', 'image/manifest'],
        },
        {
            title: '操作容器',
            collapsable: false,
            children: ['container/', 'container/run', 'container/daemon', 'container/stop', 'container/attach_exec', 'container/import_export', 'container/rm'],
        },
        {
            title: 'Docker 仓库',
            collapsable: false,
            children: ['repository/', 'repository/dockerhub', 'repository/registry', 'repository/registry_auth', 'repository/nexus3_registry'],
        },
        {
            title: '数据管理',
            collapsable: false,
            children: ['data_management/', 'data_management/volume', 'data_management/bind-mounts'],
        },
        {
            title: '使用网络',
            collapsable: false,
            children: ['network/', 'network/port_mapping', 'network/linking', 'network/dns'],
        },
        {
            title: '高级网络配置',
            collapsable: true,
            children: ['advanced_network/', 'advanced_network/quick_guide', 'advanced_network/access_control', 'advanced_network/port_mapping', 'advanced_network/bridge', 'advanced_network/example', 'advanced_network/config_file', 'advanced_network/ptp'],
        },
        {
            title: 'Swarm mode',
            collapsable: true,
            children: ['swarm_mode/', 'swarm_mode/overview', 'swarm_mode/create', 'swarm_mode/deploy', 'swarm_mode/stack', 'swarm_mode/secret', 'swarm_mode/config', 'swarm_mode/rolling_update'],
        },
        {
            title: '安全',
            collapsable: true,
            children: ['security/', 'security/kernel_ns', 'security/control_group', 'security/daemon_sec', 'security/kernel_capability', 'security/other_feature', 'security/summary'],
        },
        {
            title: '底层实现',
            collapsable: true,
            children: ['underly/', 'underly/arch', 'underly/namespace', 'underly/cgroups', 'underly/ufs', 'underly/container_format', 'underly/network'],
        },
        {
            title: 'Docker Buildx',
            collapsable: false,
            children: ['buildx/', 'buildx/buildkit', 'buildx/buildx', 'buildx/multi-arch-images'],
        },
        {
            title: 'Etcd',
            collapsable: true,
            children: ['etcd/', 'etcd/intro', 'etcd/install', 'etcd/cluster', 'etcd/etcdctl'],
        },
        {
            title: 'Fedora CoreOS',
            collapsable: true,
            children: ['coreos/', 'coreos/intro', 'coreos/install'],
        },
        'podman/',
        'appendix/faq/',
        {
            title: '热门镜像介绍',
            collapsable: true,
            children: ['appendix/repo/', 'appendix/repo/ubuntu', 'appendix/repo/centos', 'appendix/repo/nginx', 'appendix/repo/php', 'appendix/repo/nodejs', 'appendix/repo/mysql', 'appendix/repo/wordpress', 'appendix/repo/mongodb', 'appendix/repo/redis', 'appendix/repo/minio'],
        },
        {
            title: 'Docker 命令',
            collapsable: true,
            children: ['appendix/command/', 'appendix/command/docker', 'appendix/command/dockerd'],
        },
        'appendix/best_practices',
        'appendix/debug',
        'appendix/resources',
    ],
});