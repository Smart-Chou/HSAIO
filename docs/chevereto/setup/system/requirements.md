# 要求

::: tip 通用 VPS 基础设施可用
查看我们的 [VPS](https://github.com/chevereto/vps) 通用 bash 脚本，了解所有包含的无忧服务器设置。
:::

最低机器要求：

**注意：** 以最低要求运行时，建议[添加交换空间](https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-20-04)。

* 1GB 内存
* 1 个中央处理器

## 软件要求

* [服务器要求](../server/requirements.md)
* [容器要求](../container/requirements.md)

## Cron

需要 [cron](https://en.wikipedia.org/wiki/Cron) 来处理应用程序后台作业。 cron 是定期执行命令的系统，这样 Chevereto 可以在后台执行操作。

::: tip 检查您的服务器文档
此 cron 设置参考仅适用于具有 root 访问权限的基于 Debian 的服务器。我们**强烈建议**检查您的服务器文档，了解如何设置和运行 cron。
:::

### 命令

该命令应该由 web-server 用户运行，它是 `www-data`(可能会有所不同)。要在 Chevereto 中运行该命令，它需要在 Chevereto CLI 中调用 PHP 二进制文件。

::: tip PHP 二进制文件
使用 `which php` 来定位 PHP 二进制文件，因为它的位置在不同的系统和配置中可能会有所不同。
:::

下面的命令使用 `sudo -u www-data` 以 `www-data` 用户权限运行命令。 PHP 二进制文件位于 `php`，而 Chevereto CLI 位于 `/var/www/html/cli.php`。传递给 Chevereto 的命令参数是`-C cron`。

<CodeGroup>
<CodeGroupItem title="V3.20+">

```sh
sudo -u www-data php /var/www/html/cli.php -C cron
```

</CodeGroupItem>

<CodeGroupItem title="Older">

```sh
sudo -u www-data IS_CRON=1 php /var/www/html/cron.php
```

</CodeGroupItem>
</CodeGroup>

#### Docker 命令

<CodeGroup>
<CodeGroupItem title="V3.20+">

```sh
docker exec -it \
    --user www-data \
    chevereto-container php /var/www/html/cli.php -C cron
```

</CodeGroupItem>

<CodeGroupItem title="Older">

```sh
docker exec -it \
    --user www-data \
    -e IS_CRON=1 \
    chevereto-container php /var/www/html/cron.php
```

</CodeGroupItem>
</CodeGroup>

### Cron.d 文件

使用 [cron.d 文件](https://manpages.debian.org/stretch/cron/cron.8) 可以轻松设置 cron。例如：

```sh
cat >/etc/cron.d/chevereto <<EOM
* * * * * www-data php /var/www/html/cli.php -C cron
EOM
```

### Cron 计划

在上面的指令中 [* * * * *](https://crontab.guru/#*_*_*_*_*) 是每分钟运行的 cron 计划。

::: danger 适合你的情况
上述默认 cron 在运行我们的官方配置时有效。如果您不使用我们的服务器配置，您将需要更改用户、PHP 二进制文件和 Chevereto CLI 位置的默认说明。请参阅您的系统文档。
:::
