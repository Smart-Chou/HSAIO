# 调试

调试可以转储有关可能影响软件功能的错误的信息。如果 Chevereto 不能正常工作，您必须开始调试它。

## 配置调试

可以使用 [environment](../../setup/system/environment.md#调试变量) 变量或使用 [settings file](../../setup/server/settings-file.md)。

### 调试级别

根据您的工作环境，您可能需要相应地配置调试。

::: danger
不建议将错误级别 >= 2 用于生产环境。将错误打印到屏幕上是不安全的，请小心处理。
:::

|级别 |说明 |
| ----- | ------------------------------------ |
| 0     | No debug                             |
| 1     | Debug to `log_device`                |
| 2     | Print errors (no logging)            |
| 3     | Print errors and log to `log_device` |

使用 `CHEVERETO_DEBUG_LEVEL=3` 或将以下内容添加到你的 `app/settings.php` 文件中：

```php
$settings['debug_level'] = 3;
```

### 日志设备

配置您自己的错误日志设备以控制日志的发送位置。如果你不改变它，它将回退到默认的系统日志设备。

::: tip 容器
无论此设置如何，容器都将始终登录到`/dev/stderr`。
:::

使用 `CHEVERETO_ERROR_LOG=log_device` 或将以下内容添加到你的 `app/settings.php` 文件中：

```php
$settings['error_log'] = 'log_device';
```

## 访问日志

要访问日志，您首先需要知道这些日志的位置。如果您不配置调试 Chevereto 将遵循为您的 PHP 安装配置的默认 [error_log](https://www.php.net/manual/errorfunc.configuration.php#ini.error-log) 处理。

### 默认日志在哪里？

这取决于服务器提供商以及 PHP 在服务器中的运行方式。如有疑问，请先咨询您的服务提供商。

* PHP
  * 默认在`syslog` 记录
* 阿帕奇
  * 默认记录在`/var/log/apache2/error.log`
  * 虚拟主机指令定义自定义错误日志位置
  * 通常配置为`/var/www/domain.com/logs`
* NGINX
  * 默认记录在`/var/log/nginx/error.log`
  * 服务器块定义自定义错误日志位置
  * 通常配置为`/var/www/domain.com/logs`
* cPanel
  * 默认记录在`../domain.com.error.log`(`public_html` 文件夹的父文件夹)
  * 因供应商和 cPanel 版本而异
* 码头工人
  * 记录到`/dev/stderr`

### 我找不到日志

您可以配置 `debug_level` >= 2 但请注意，此类错误报告级别**可能会损害**您的安装。限制对您网站的任何公开访问，并尽快恢复为`debug_level=1`。

如果您找不到日志或遇到困难，您可以请求 [额外支持](https://chevereto.com/support)，以便我们可以安全地调试您的安装。

### 读取日志

可以通过直接文件访问或相应地运行命令来轻松访问日志。

:::: code-group
::: code-group-item Shell

```sh
tail -f /var/log/apache2/error.log | sed 's/\\n/\n/g'
```

:::

::: code-group-item Docker

```sh
docker logs -f container-name | sed 's/\\n/\n/g'
```

:::
::::

## 错误报告

::: danger 不适用于生产！
仅建议在开发环境中启用此功能。
:::

要启用打印错误报告，您需要转到 [系统设置](../../settings/system.md)。通过启用此功能，将打印所有运行时错误，这意味着它们将可见。
