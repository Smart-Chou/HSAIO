const { sidebarConfig } = require('vuepress-theme-hope');

module.exports = sidebarConfig([
    '',
    {
        title: 'Home',
        icon: 'bitwarden',
        prefix: 'Home/',
        collapsable: false,
        children: ['', 'FAQs'],
    },
    {
        title: '容器镜像使用',
        icon: 'bitwarden',
        prefix: 'Container/',
        collapsable: false,
        children: ['Which-container-image-to-use', 'Starting-a-Container', 'Updating-the-vaultwarden-image', 'Using-Docker-Compose', 'Using-Podman'],
    },
    {
        title: '部署',
        icon: 'bitwarden',
        prefix: 'Deployment/',
        collapsable: false,
        children: [
            'Building-your-own-docker-image',
            'Building-binary',
            'Pre-built-binaries',
            'Third-party-packages',
            'Deployment-examples',
            'Proxy-examples',
            'Logrotate-example',
            'Kubernetes-deployment',
            {
                title: 'HTTPS',
                icon: 'bitwarden',
                collapsable: false,
                children: ['Enabling-HTTPS', 'Running-a-private-vaultwarden-instance-with-Lets-Encrypt-certs'],
            },
        ],
    },
    {
        title: '配置',
        icon: 'bitwarden',
        prefix: 'Configuration/',
        collapsable: false,
        children: [
            'Configuration-overview',
            'Disable-registration-of-new-users',
            'Disable-invitations',
            'Enabling-admin-page',
            'Disable-admin-token',
            'Enabling-WebSocket-notifications',
            'Enabling-U2F-authentication',
            'Enabling-Yubikey-OTP-authentication',
            'Changing-persistent-data-location',
            'Changing-the-API-request-size-limit',
            'Changing-the-number-of-workers',
            'SMTP-Configuration',
            'Password-hint-display',
            'Disabling-or-overriding-the-Vault-interface-hosting',
            'Logging',
            'Setup-as-a-systemd-service',
            'Running-with-systemd-docker',
            'Syncing-users-from-LDAP',
            'Using-an-alternate-base-dir',
            'Running-docker-container-with-non-root-user',
            'Other-configuration',
            {
                title: '数据库',
                icon: 'bitwarden',
                collapsable: false,
                children: ['Using-the-MariaDB-Backend', 'Using-the-PostgreSQL-Backend', 'Running-without-WAL-enabled', 'Migrating-from-MariaDB-to-SQLite'],
            },
            {
                title: '安全',
                icon: 'bitwarden',
                collapsable: false,
                children: ['Hardening-Guide', 'Fail2Ban-Setup'],
            },
        ],
    },
    {
        title: '备份',
        icon: 'bitwarden',
        prefix: 'Backup/',
        collapsable: false,
        children: ['General'],
    },
    {
        title: '其他信息',
        icon: 'bitwarden',
        prefix: 'Other/',
        collapsable: false,
        children: ['Importing-data-from-Keepass-or-KeepassX', 'Backing-up-your-vault', 'Differences-from-the-upstream-API-implementation', 'Supporting-upstream', 'Caddy-with-Cloudflare-DNS', 'Private-CA-and-self-signed-certs-that-work-with-Chrome'],
    },
]);