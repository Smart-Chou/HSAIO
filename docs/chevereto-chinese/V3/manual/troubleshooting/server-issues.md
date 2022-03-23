# 问题

并非所有 Web 服务器都遵循基本标准，在某些情况下，即使拥有满足 [系统要求](../server/requirements.md) 的服务器，您也会发现无法让 Chevereto 工作的问题。

## 网络服务器

- Apache `mod_rewrite` 已禁用或在虚拟主机中缺少 `Allow Override All`
- Chevereto 路径中缺少写入权限
- 错误或无效的设置(时区、多视图、超时等)
- 错误的 NGINX 服务器块/PHP-FPM 问题
- `mod_security` 或任何其他阻止来自/到的工件请求

## PHP

PHP 以不同的方式运行在您的网络服务器上，并使用不同的库和设置，这可能会导致问题：

- 过时的 PHP 版本
- PHP 库中的错误配置
- 错误的 php.ini 指令
- 执行时间短
- 错误的会话设置
- 开放基础限制

## MySQL 数据库

- 错误的凭据(用户/密码)
- 无效或缺少权限(在数据库中读/写)
- 过时的 MySQL 版本
- 错误配置的 MySQL 套接字
- 使用 MyISAM 存储引擎(`ALTER` 表到 InnoDB 存储)