# 更新

本节概述了从旧版本 (V3.X) 升级到 V3 所需的更新过程。

::: danger 清单

* 检查您的服务器是否满足运行目标版本更新的[要求](../server/requirements.md)。
* 确保最近备份了您的数据库和您的代码修改(如果有)。
* 更新后，您将需要重新应用您的修改。
:::

## 使用发布包

发布包是一个包含软件文件的`zip`文件。提取后，软件就可以更新了。

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
&& chown www-data: . -R \
&& php cli.php -C install
```

:::
::::

## HTTP 更新(旧版)

::: tip 不工作？
HTTP 方法不提供与其他方法相同的可靠性。如果它随机失败，请不要担心，如果发生这种情况，只需使用替代更新方法重试即可。
:::

👉 这种方法只能作为最后的手段使用。

* 前往 [panel/license](https://chevereto.com/panel/license) 并获取您的 V3 许可证密钥
*转到`/dashboard`并点击`检查更新`
* 出现提示时安装更新
* 提供您的许可证密钥
