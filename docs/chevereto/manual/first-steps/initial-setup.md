# 初始设置

这将创建 chevereto 数据库表和 Chevereto 管理员用户。这是第一次安装系统时需要的，可以使用 HTTP (web) 或 CLI 进行。

## HTTP 设置

* 转到`/install` 并提交安装表单。

## CLI 设置

* 运行以下命令：

```sh
sudo -u www-data php /var/www/html/cli.php -C install \
    -u dev \
    -e dev@chevereto.loc \
    -x password
```

|  选项  |      说明      |
| ------ | -------------- |
| u      | Admin username |
| e      | Admin email    |
| x      | Admin password |
