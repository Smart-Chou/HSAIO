# cPanel

本指南将使您能够从头开始在 cPanel 上安装 Chevereto。

## 数据库

转到 **Databases** 下的 **MySQL Database Wizard**。

![数据库](/screen/cpanel/databases.png)

按照流程创建数据库及其用户。记下 MySQL **数据库名称**、**用户名** 和 **密码**。

![MySQL 向导创建](/screen/cpanel/mysql-wizard-create-database.png)

在新创建的数据库和用户上授予`ALL PRIVILEGES`。

![MySQL 向导权限](/screen/cpanel/mysql-wizard-privileges.png)

## Chevereto 文件

- 转到**文件**下的**文件管理器**。

![文件](/screen/cpanel/files.png)

- 导航到您的网站 `public_html/` 目录。

![文件管理器](/screen/cpanel/file-manager.png)

- 点击**上传**和**选择文件**上传从[Downloads](https://chevereto.com/panel/downloads)下载的发布zip文件
- 上传后，返回到`public_html/` 目录下的文件管理器。
- 右键单击 zip 文件并选择 **Extract**。

![文件管理器提取](/screen/cpanel/file-manager-extract.png)

- 出现提示，点击**Extract Files**

![文件管理器提取文件](/screen/cpanel/file-manager-extract-files.png)

- 提取完成后删除 zip 文件。

![文件管理器删除文件](/screen/cpanel/file-manager-delete-file.png)

## PHP

转到 **Software** 下的 **MultiPHP INI Editor**。

![软件](/screen/cpanel/software.png)

在 **Configure PHP INI basic settings** 下选择您的网站。

![MultiPHP INI 编辑器](/screen/cpanel/mutliphp-ini-editor.png)

请注意以下可配置键：

![MultiPHP INI 键](/screen/cpanel/multiphp-ini-keys.png)

- `max_execution_time` 30
- `memory_limit` 256M(分钟)
- 使用`post_max_size` 和`upload_max_filesize` 来限制文件上传的最大值。允许上传的大小

转到 **MultiPHP Manager** 并为您的网站选择“PHP 7.4”。

![MultiPHP manager](/screen/cpanel/multiphp-manager.png)

- 从这里您还可以启用 Chevereto 的 [extensions required](requirements.md#PHP-扩展)。

::: danger PHP 扩展
参考cPanel[PHP扩展和应用程序包](https://docs.cpanel.net/whm/software/php-extensions-and-applications-package/)和WHM[如何在WHM中安装PHP扩展]( https://support.cpanel.net/hc/en-us/articles/360050971633) 文档，如果您的 cPanel 配置缺少 Chevereto 所需的扩展。
:::

## 安装 Chevereto

转到 `http://your_website/` 并按照说明创建管理员帐户。

## PHP 版本控制

::: tip 你知道吗？
cPanel 使用根`.htaccess` 文件添加规则以覆盖默认的 cPanel PHP 版本控制。这可能会导致 Chevereto 安装出现问题。
:::

如果您有 PHP 版本控制问题，请确保根 `.htaccess` 文件包含以下内容：

:::: code-group
::: code-group-item Apache">

```apacheconf
<IfModule mime_module>
  AddHandler application/x-httpd-ea-php74 .php .php7 .phtml
</IfModule>
```

:::

::: code-group-item LiteSpeed">

```apacheconf
<IfModule mime_module>
  AddHandler application/x-httpd-ea-php74___lsphp .php .php7 .phtml
</IfModule>
```

:::
::::

> 请注意，您系统中的配置可能会有所不同。请与您的服务提供商仔细核对。

## 在 cPanel 上设置 Cron

- 转到**高级**下的**Cron Jobs**
- 滚动到**添加新的 Cron 作业**

![文件管理器删除文件](/screen/cpanel/cronjob.png)

- 在**通用设置**下选择`每分钟一次(* * * * *)`

**Command** 因每次安装而异，您需要根据以下一般形式创建自己的命令：

```sh
php-binary cli-path -C cron >/dev/null 2>&1
```

- **php-binary** 检查 **Add New Cron Job** 下的 `PHP 命令示例` 部分，您可以在其中了解系统的 PHP 路径。
- **cli-path** Chevereto CLI 路径可以在仪表板面板的**安装详细信息**下找到。

### 命令示例

:::: code-group
::: code-group-item General">

```sh
/usr/local/bin/ea-php74 /home/chevereto/public_html/cli.php -C cron >/dev/null 2>&1
```

:::

::: code-group-item CloudLinux">

```sh
/opt/alt/php74/usr/bin/php /home/chevereto/public_html/cli.php -C cron >/dev/null 2>&1
```

:::
::::

## 设置电子邮件

- 请参阅：[设置电子邮件](../../manual/first-steps/setup-email.md)
