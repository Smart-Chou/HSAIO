# 要求

## PHP

|版本 | PHP |
| ------- | --- |
| 3.20 | 7.4 |

Chevereto 是 [PHP](https://php.net/) 软件，它的设计使用：

* [PHP 包](https://deb.sury.org/) 来自 Ondřej Surý。
* [PHP 扩展](https://www.php.net/manual/en/extensions.membership.php) 由 [PECL](https://pecl.php.net/) 提供。

包和 PECL 提供了相同的便利，但由于包是为基于 debian 的系统制作的，如果您没有兼容的系统，您应该更喜欢 PECL。

::: warning Packages vs PECL
包不仅包含软件，还可以触发系统中的其他效果。
:::

### PHP 配置

对于 Chevereto 安装，建议使用以下 `ini` 值。

```sh
upload_max_filesize = 50M;
post_max_size = 50M;
max_execution_time = 30;
memory_limit = 512M;
```

|物业 |说明 |示例 |
| ------------------- | ------------------------------------------------ | ------------------- |
| upload_max_filesize |最大上传大小 | `50M` 为 50 MB |
| post_max_size |最大帖子大小 |同上 |
| max_execution_time |执行软件的最长时间，以秒为单位 | `30` 30 秒 |
| memory_limit |分配的最大内存| `512M` 为 512 MB |

您可以切换此限制以反映您的硬件和服务器负载。查看这篇文章了解更多信息：[PHP 常见陷阱](http://www.php.net/manual/en/features.file-upload.common-pitfalls.php)。

### PHP 扩展

Chevereto 需要以下 PHP 扩展。

* 卷曲
* exif
* 文件信息
* 哈希
* 想象
* gd
* json
* 字符串
* pdo
* pdo-mysql
* 会议
* xml
* 压缩

### PHP 功能

Chevereto 需要不受限制地访问所有 PHP 函数。如果删除任何 PHP 函数，它可能会导致 Chevereto 失败或根本无法工作。请注意，不得限制以下功能：

* [set_time_limit](https://www.php.net/set-time-limit)

## 图片库

图像库(GD、Imagick)应该支持`PNG GIF JPG BMP WEBP`。默认情况下，Chevereto 使用 Imagick 并回退到 GD。

如果您需要显式使用 GD，您可以将此键添加到 [设置文件](settings-file.md)：

```php
$settings['image_library'] = 'gd';
```

::: danger 解决方法丢失格式
如果服务器不支持 Chevereto 处理的所有图像格式，您必须使用以下 [设置文件](settings-file.md) 解决方法。

在以下示例中，Chevereto 配置为仅显式支持 PNG、GIF、BMP 和 JPG(删除 WEBP)：

```php
$settings['image_formats_available'] = ['PNG', 'GIF', 'BMP', 'JPG'];
```

:::

## 配置图片库

检查 [CHEVERETO_IMAGE_LIBRARY](environment.md#image-handling-variables) 以更改 Chevereto 使用的默认图像库。

### ImageMagick

在 `/etc/ImageMagick-6/policy.xml` 文件中推荐的其他 ImageMagick 配置：

```xml
<policymap>
    <!-- policies -->
    <policy domain="resource" name="width" value="16KP"/>
    <policy domain="resource" name="height" value="16KP"/>
</policymap>
```

### 文件系统

运行 `php` 的用户必须在你的安装目录的所有者组中。这是允许 Chevereto 修改文件系统以进行上传、一键更新和许多其他功能所必需的。

Chevereto 用户需要在以下路径中具有 **读/写** 访问权限：

* `/tmp`
* `app/content/`
* `app/content/languages/`
* `app/content/languages/cache/`
* `app/content/system/`
* `content/`
* `images/`

## 数据库

|版本 | MySQL  | MariaDB |
| ------- | ------ | ------- |
| 3.20 | 5.7, 8 | 10 |

* 数据库用户必须对目标数据库拥有`ALL PRIVILEGES`
* InnoDB 表存储引擎

::: danger 从旧安装升级
使用 MyISAM 表存储引擎的旧版本将需要将旧表转换为 InnoDB。阅读[将 MyISAM 表转换为 InnoDB](https://dev.mysql.com/doc/refman/8.0/en/converting-tables-to-innodb.html)
:::

## Web 服务器配置

### Apache HTTP 服务器

确保 [`mod_rewrite`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) 已启用，并且您的虚拟主机设置允许执行 URL 重写：

```apacheconf
    <Directory /var/www/html>
        Options -Indexes +FollowSymLinks +MultiViews
        AllowOverride All
        Require all granted
    </Directory>
```

Apache 配置`.htaccess` 文件已经包含在软件中。

#### 限制直接访问 PHP 文件

通过为您的上传目录添加以下指令来编辑 [Virtual Host](https://httpd.apache.org/docs/2.4/vhosts/) 条目。这将在包含公共上传内容的文件夹上禁用 PHP 解释器：

> 必须编辑 `/var/www/html/images` 以反映您的实际上传目录。

```apacheconf
<Directory /var/www/html/images>
    AllowOverride None
    <FilesMatch "\.(?:[Pp][Hh][Pp][345]?|[Pp][Hh][Tt][Mm][Ll])|(po|sql|html?)$">
        <IfModule !mod_authz_core.c>
            Order Allow,Deny
            Deny from all
        </IfModule>
        <IfModule mod_authz_core.c>
            Require all denied
        </IfModule>
    </FilesMatch>
    <IfModule mod_php7.c>
        php_flag engine off
    </IfModule>
    <FilesMatch ".+\.*$">
        SetHandler !
    </FilesMatch>
    <IfModule mod_rewrite.c>
        RewriteRule ^.*\.php$ - [F,L]
    </IfModule>
</Directory>
```

如果您无权编辑 Apache 虚拟主机，则可以在所谓的路径中使用 `.htaccess` 文件：

```apacheconf
<FilesMatch "\.(?:[Pp][Hh][Pp][345]?|[Pp][Hh][Tt][Mm][Ll])|(po|sql|html?)$">
    <IfModule !mod_authz_core.c>
        Order Allow,Deny
        Deny from all
    </IfModule>
    <IfModule mod_authz_core.c>
        Require all denied
    </IfModule>
</FilesMatch>
<IfModule mod_php7.c>
    php_flag engine off
</IfModule>
<FilesMatch ".+\.*$">
    SetHandler !
</FilesMatch>
<IfModule mod_rewrite.c>
    RewriteRule ^.*\.php$ - [F,L]
</IfModule>
```

### NGINX

`server {}` 块的 `nginx.conf`：

```nginx
    # Disable access to sensitive application files
    location ~* (app|content|lib)/.*\.(po|php|lock|sql)$ {
        return 404;
    }
    location ~* composer\.json|composer\.lock|.gitignore$ {
        return 404;
    }
    location ~* /\.ht {
        return 404;
    }

    # Image not found replacement
    location ~* \.(jpe?g|png|gif|webp)$ {
        log_not_found off;
        error_page 404 /content/images/system/default/404.gif;
    }

    # CORS header (avoids font rendering issues)
    location ~* \.(ttf|ttc|otf|eot|woff|woff2|font.css|css|js)$ {
        add_header Access-Control-Allow-Origin "*";
    }

    # PHP front controller
    location / {
        index index.php;
        try_files $uri $uri/ /index.php$is_args$query_string;
    }
    
    # Single PHP-entrypoint (disables direct access to .php files)
    location ~* \.php$  {
        internal;
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
    }
```

### 真实连接IP

对于任何类型的代理(包括 [CloudFlare](https://support.cloudflare.com/hc/en-us/articles/200170786-Restoring-original-visitor-IPs))下的设置，Web 服务器需要设置客户端连接 IP 的适当值。

::: danger
如果未配置真实连接 IP，Chevereto 将无法检测真实访问者 IP，无法提供基于 IP 的限制和洪水控制。
:::

* NGINX：`ngx_http_realip_module`
* Apache HTTP 服务器：`mod_remoteip`
