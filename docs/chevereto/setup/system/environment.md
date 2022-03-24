---
author: MIFSH
time: 2020-10-10
category:
    - dvd
tag:
  - dd
---

# 环境

这些是可用于调整 Chevereto 配置的系统级设置。

## 传递值

将设置传递给 Chevereto 建议使用系统级环境变量。

::: tip 设置文件
如果无法使用环境变量，您可以使用 [设置文件](../server/settings-file.md) 来配置 Chevereto 变量。
:::

### Apache HTTP Web 服务器(PHP 模块)

如果 PHP 是使用 `mpm_prefork` 提供的，您必须参考有关 [Apache HTTP Server 环境变量](https://httpd.apache.org/docs/current/env.html) 的文档。您可以在 [chevereto/vultr-marketplace](https://github.com/chevereto/vultr-marketplace/blob/main/files/var/lib/cloud/scripts/per-instance/provision.sh)。

### 其他设置

对于这些，您将运行 [PHP-FPM](https://www.php.net/manual/en/install.fpm.configuration.php)，以便您可以在您的 `php-fpm.conf` 文件中添加这些设置.

### 应用服务器

对于这些，您将运行 PHP CLI，因此您应该能够在 CLI 的 `php.ini` 中传递这些内容。你也可以在你的 shell 中“导出”那些。请参阅每个应用程序服务器的文档，了解将这些内容传递给 Chevereto 的最佳方式。

### 容器

将环境变量传递给容器运行命令或在 `docker compose` 层。

## 资产变量

用于存储可以上传到任何受支持的外部存储 API 的资产的环境变量。

请注意，资产是指用户提供的资产，例如头像和背景，还有网站图形，例如徽标和主页封面。

检查 [外部存储](../../settings/external-storage.md) 为用户内容上传添加外部存储服务器。

| 变量                                 | 设置键                     | 示例           |
| ------------------------------------ | -------------------------- | -------------- |
| CHEVERETO_ASSET_STORAGE_ACCOUNT_ID   | asset_storage_account_id   | 123            |
| CHEVERETO_ASSET_STORAGE_ACCOUNT_NAME | asset_storage_account_name | account_name   |
| CHEVERETO_ASSET_STORAGE_BUCKET       | asset_storage_bucket       | bucket         |
| CHEVERETO_ASSET_STORAGE_KEY          | asset_storage_key          | key            |
| CHEVERETO_ASSET_STORAGE_NAME         | asset_storage_name         | assets         |
| CHEVERETO_ASSET_STORAGE_REGION       | asset_storage_region       | us-west-2      |
| CHEVERETO_ASSET_STORAGE_SECRET       | asset_storage_secret       | secret         |
| CHEVERETO_ASSET_STORAGE_SERVER       | asset_storage_server       | server         |
| CHEVERETO_ASSET_STORAGE_SERVICE      | asset_storage_service      | service        |
| CHEVERETO_ASSET_STORAGE_TYPE         | asset_storage_type         | s3             |
| CHEVERETO_ASSET_STORAGE_URL          | asset_storage_url          | `<url>/bucket` |

## 数据库变量

数据库详细信息的环境变量。

| 变量                      | 设置键          | 示例                     |
| ------------------------- | --------------- | ------------------------ |
| CHEVERETO_DB_DRIVER       | db_driver       | mysql                    |
| CHEVERETO_DB_HOST         | db_host         | mariadb                  |
| CHEVERETO_DB_NAME         | db_name         | chevereto                |
| CHEVERETO_DB_PASS         | db_pass         | user_database_password   |
| CHEVERETO_DB_PDO_ATTRS    | db_pdo_attrs    | `{"key":"value"}` (json) |
| CHEVERETO_DB_PORT         | db_port         | `3306`                   |
| CHEVERETO_DB_TABLE_PREFIX | db_table_prefix | chv\_                    |
| CHEVERETO_DB_USER         | db_user         | chevereto                |

## 调试变量

[debug](../../manual/troubleshooting/debug.md) 的环境变量。

::: tip
使用 Docker 时，无论此配置如何，它都会记录到 `/dev/stderr`。
:::

| 变量                  | 设置键      | 示例                         |
| --------------------- | ----------- | ---------------------------- |
| CHEVERETO_DEBUG_LEVEL | debug_level | `1`                          |
| CHEVERETO_ERROR_LOG   | error_log   | /var/log/chevereto-error.log |

## 会话变量

会话驱动程序的环境变量。

| 变量                           | 设置键               | 示例                 |
| ------------------------------ | -------------------- | -------------------- |
| CHEVERETO_SESSION_SAVE_HANDLER | session.save_handler | `redis` `files`      |
| CHEVERETO_SESSION_SAVE_PATH    | session.save_path    | `tcp://redis` `/tmp` |

## 图像处理变量

用于控制图像处理的环境变量。

| 变量                              | 设置键                  | 示例                             |
| --------------------------------- | ----------------------- | -------------------------------- |
| CHEVERETO_IMAGE_FORMATS_AVAILABLE | image_formats_available | `'JPG','PNG','BMP','GIF','WEBP'` |
| CHEVERETO_IMAGE_LIBRARY           | image_library           | `imagick` `gd`                   |

## 主机名变量

主机名配置的环境变量。

| 变量                    | 设置键        | 示例          |
| ----------------------- | ------------- | ------------- |
| CHEVERETO_HOSTNAME      | hostname      | chevereto.loc |
| CHEVERETO_HOSTNAME_PATH | hostname_path | /             |
| CHEVERETO_HTTPS         | https         | `true`        |

## 系统上下文变量

提供 Chevereto 系统的上下文的环境变量。根据您运行它的位置，您可能想要禁用敏感功能。

| 变量                            | 设置键              | 示例    |
| ------------------------------- | ------------------- | ------- |
| CHEVERETO_DISABLE_PHP_PAGES     | disable_php_pages   | `false` |
| CHEVERETO_DISABLE_UPDATE_HTTP   | disable_update_http | `false` |
| CHEVERETO_DISABLE_UPDATE_CLI    | disable_update_cli  | `false` |
| CHEVERETO_ENABLE_HTACCESS_CHECK | htaccess_enforce    | `true`  |

## 文件上传变量

文件上传限制的环境变量。请注意，以下环境变量适用于容器配置。

| 变量                          | 示例 |
| ----------------------------- | ---- |
| CHEVERETO_UPLOAD_MAX_FILESIZE | 50M  |
| CHEVERETO_POST_MAX_SIZE       | 50M  |
| CHEVERETO_MAX_EXECUTION_TIME  | 30   |
| CHEVERETO_MEMORY_LIMIT        | 512M |

对于基于**非容器**的配置，您需要在 [php.ini 配置](./requirements.md#PHP-配置) 中更改这些配置。
