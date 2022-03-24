# 安装

要安装 Chevereto，它需要一个服务器环境，在该环境中将提供软件和上传的文件。本文档概述了从头开始的通用安装过程。

::: danger 使用 cPanel？
建议 cPanel 用户查看 [cPanel 指南](cpanel.md)。
:::

## 要求

在安装任何东西之前，请检查目标服务器是否提供了系统 [requirements](../server/requirements.md) 来运行 Chevereto。

## 数据库

### 使用网络面板

Chevereto所需的MySQL数据库的创建可以参考文档。这里是最受欢迎的面板的参考：

* [云面板数据库](https://www.cloudpanel.io/docs/cloudpanel-ce/frontend-area/databases)
* [cPanel 数据库](https://docs.cpanel.net/cpanel/databases/mysql-databases/)
* [Plesk 数据库](https://docs.plesk.com/en-US/obsidian/customer-guide/website-databases/creating-databases.65157/)
* [CyberPanel 数据库](https://cyberpanel.net/docs/view-and-manage-databases-table-from-cloud-platform/)

### 使用 MySQL 控制台

运行以下命令来创建 `chevereto` 数据库及其用户绑定：

```sh
sudo mysql -uroot -ppassword -e "CREATE DATABASE chevereto; \
    CREATE USER 'chevereto' IDENTIFIED BY 'user_database_password'; \
    GRANT ALL ON chevereto.* TO 'chevereto' IDENTIFIED BY 'user_database_password';"
```

## 提供应用程序文件

::: tip
向您的服务器提供文件时，请确保 Web 服务器用户可以使用文件`owner:group`权限。
:::

您将需要向您的服务器提供 Chevereto 软件应用程序文件。

## 使用发布包

发布包是一个包含软件文件的`zip`文件。解压后，软件就可以安装了。

👉 建议**cPanel**、**Plesk** 和其他网页面板用户使用此方法。

* 将[最新版本](https://chevereto.com/panel/downloads) 包上传到您的服务器(通常在`public_html` 文件夹中)
* 使用服务器内置的 `unzip` 实用程序解压缩软件
* 删除 `.zip` 文件
* 打开您的目标网站 URL 并按照说明进行操作

## 使用 Composer 包管理器

使用 Composer 在 CLI 上下文中进行更新。这个需要：

* 带有 `curl`、`unzip` 的 CLI
* [Composer](https://getcomposer.org/)

👉 **VPS** 和 **CLI 访问**的机器推荐使用此方法。

* 从您的 **Chevereto 项目文件夹** 运行以下命令：

:::: code-group
::: code-group-item Debian

```sh
LICENSE=YOUR_V3_LICENSE_KEY &&
curl -f -SOJL \
    -X POST -d "nowrap" \
    -H "License: $LICENSE" \
    "https://chevereto.com/api/download/3.20" \
&& unzip chevereto*.zip \
&& rm -rf chevereto*.zip \
&& composer install \
&& chown www-data: . -R
```

:::
::::

* 打开您的目标网站 URL 并按照说明进行操作

### 安装程序

[installer.php](https://github.com/chevereto/installer) 是一个单文件工具，可以简化软件的安装。它是一个 API 客户端，可为您下载和提取软件。

## 安装后

请参阅[初始设置](../../manual/first-steps/initial-setup.md) 说明。
