# 设置文件

`app/settings.php` 中的文件包含应用程序系统级别的设置。

::: tip 正在运行容器？
您可以忽略使用此文件，因为您可以在容器运行时传递 `-e` 变量。
:::

```php
<?php
$settings = [
    'asset_storage_account_id' => '',
    'asset_storage_account_name' => '',
    'asset_storage_bucket' => '',
    'asset_storage_key' => '',
    'asset_storage_name' => 'assets',
    'asset_storage_region' => '',
    'asset_storage_secret' => '',
    'asset_storage_server' => '',
    'asset_storage_service' => '',
    'asset_storage_type' => 'local',
    'asset_storage_url' => '',
    'db_driver' => 'mysql',
    'db_host' => 'localhost',
    'db_name' => 'chevereto',
    'db_pass' => 'pass',
    'db_pdo_attrs' => [],
    'db_port' => 3306,
    'db_table_prefix' => 'chv_',
    'db_user' => 'user',
    'debug_level' => 1,
    'disable_php_pages' => false,
    'disable_update_http' => false,
    'disable_update_cli' => false,
    'error_log' => 'syslog',
    'hostname_path' => '/',
    'hostname' => 'chevereto.loc',
    'https' => true,
    'image_formats_available' => ['PNG', 'GIF', 'JPG', 'BMP', 'WEBP'],
    'image_library' => 'imagick',
    'session.save_handler' => 'files',
    'session.save_path' => '/tmp',
    'htaccess_enforce' => true,
];
```

要添加或覆盖设置，只需分配键值：

```php
<?php
$settings['key'] = 'value';
```

检查 [environment](../system/environment.md) 变量以获取更多信息。
