# 部署在云端

在几秒钟内轻松一键部署 Chevereto。

* [Linode 市场上的 Chevereto](https://www.linode.com/marketplace/apps/chevereto/chevereto/?r=b14b22fdc1bf3f958fdf294c5a8624627d7f2315)
  * [文档](https://www.linode.com/docs/guides/deploying-chevereto-marketplace-app/?r=b14b22fdc1bf3f958fdf294c5a8624627d7f2315)
  * [存储库](https://github.com/chevereto/linode-marketplace)
* [Vultr 市场上的 Chevereto](https://vultr.grsm.io/rodolfoberrios5076)
  * [存储库](https://github.com/chevereto/vultr-marketplace)

所有这些配置替代方案都**由我们正式支持**。

::: tip All-included
我们的市场供应包括以下内容：

* 使 UFW 防火墙仅允许 SSH(端口 22，限速)、HTTP(端口 80)和 HTTPS(端口 443)访问。
* 设置 Chevereto 数据库及其用户。
* 设置 MySQL 根密码。
* 在 MySQL 中设置 debian-sys-maint 用户，以便系统的 MySQL 初始化脚本无需 MySQL root 用户密码即可运行。
* 设置后台任务所需的 cron。
* 包括预安装的 Certbot。
:::
