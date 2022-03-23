# API v1

Chevereto API v1 允许以访客身份将图片上传到您的 Chevereto 网站。

API v1 没有速率限制，但受管理仪表板中配置的洪水上传限制的影响。您应该只将这个 API 用于您自己的应用程序或脚本，而不是用于公共用途。

## API 密钥

API v1 使用单个 API 密钥，您可以在仪表板 > 设置 > API 中设置该密钥。

## API 调用

### 请求方法

API v1 调用可以使用 POST 或 GET 请求方法完成，但由于 GET 请求受到 URL 允许的最大长度的限制，因此您应该更喜欢 POST 请求方法。

### 请求网址

```plain
http://mysite.com/api/1/<action>/
```

### 参数

- key API v1 密钥，它可以在您的管理仪表板设置中设置。
- 行动你想做什么[值：上传]。
- source 图像 URL 或 [base64](https://en.wikipedia.org/wiki/Base64) 编码的图像字符串。您还可以在请求中使用 FILES["source"]。
- 格式设置返回格式[值：json(默认)，重定向，txt]。

### 示例调用

```plain
获取 http://mysite.com/api/1/upload/?key=12345&source=http://somewebsite/someimage.jpg&format=json
```

注意：上传本地文件时始终使用 POST。 Url 编码可能会因编码字符或因 GET 请求而仅因 URL 请求长度限制而改变 base64 源。

## API 响应

API v1 响应会因 **format** 参数而异：

- json 以JSON格式显示所有图片上传信息。 [默认]
- txt 以文本/纯文本格式返回图像直接 URL。
- 重定向 重定向到图像查看器 URL。

使用 JSON 时，响应将具有标头状态代码，以便您轻松注意请求是否正常。它还将输出 `status_txt` 和 `status_code` 属性。

### 示例响应(JSON)

```json
{
    "status_code": 200,
    "success": {
        "message": "image uploaded",
        "code": 200
    },
    "image": {
        "name": "example",
        "extension": "png",
        "size": 53237,
        "width": 1151,
        "height": 898,
        "date": "2014-06-04 15:32:33",
        "date_gmt": "2014-06-04 19:32:33",
        "storage_id": null,
        "description": null,
        "nsfw": "0",
        "md5": "c684350d722c956c362ab70299735830",
        "storage": "datefolder",
        "original_filename": "example.png",
        "original_exifdata": null,
        "views": "0",
        "id_encoded": "L",
        "filename": "example.png",
        "ratio": 1.2817371937639,
        "size_formatted": "52 KB",
        "mime": "image/png",
        "bits": 8,
        "channels": null,
        "url": "http://127.0.0.1/images/2014/06/04/example.png",
        "url_viewer": "http://127.0.0.1/image/L",
        "thumb": {
            "filename": "example.th.png",
            "name": "example.th",
            "width": 160,
            "height": 160,
            "ratio": 1,
            "size": 17848,
            "size_formatted": "17.4 KB",
            "mime": "image/png",
            "extension": "png",
            "bits": 8,
            "channels": null,
            "url": "http://127.0.0.1/images/2014/06/04/example.th.png"
        },
        "medium": {
            "filename": "example.md.png",
            "name": "example.md",
            "width": 500,
            "height": 390,
            "ratio": 1.2820512820513,
            "size": 104448,
            "size_formatted": "102 KB",
            "mime": "image/png",
            "extension": "png",
            "bits": 8,
            "channels": null,
            "url": "http://127.0.0.1/images/2014/06/04/example.md.png"
        },
        "views_label": "views",
        "display_url": "http://127.0.0.1/images/2014/06/04/example.md.png",
        "how_long_ago": "moments ago"
    },
    "status_txt": "OK"
}
```

### 示例响应 (txt)

```plain
http://127.0.0.1/images/2014/06/04/example.png
```

## 上传给用户解决方法

API V1 无法上传与给定用户关联的图像，但您可以覆盖默认 API。将默认的 `app/routes/route.api.php` 文件复制到 `app/routes/overrides/route.api.php` 文件夹。

改变这个：

```php
CHV\Image::uploadToWebsite($source);
```

为此(用目标用户名或 user_id 替换 juanito)：

```php
// 这会将图像上传到“juanito”帐户
CHV\Image::uploadToWebsite($source, 'juanito');
```

通过这样做，`/api` 路由(来自`app/routes/overrides/route.api.php`)现在将以该用户的名义上传图像。

### 使用不同的 API 密钥

如果您想在这个新的自定义 API 中使用不同的 API 密钥，只需更改以下内容：

```plain
!G\timing_safe_compare(CHV\getSetting('api_v1_key'), $_REQUEST['key'])
```

对此：

```plain
!G\timing_safe_compare('NowThisIsAnotherAPIKEY!', $_REQUEST['key'])
```

### 多个 API

你可以有多个 API，只要你在 `app/loader.php` 中进行一些编辑。由于此文件处理一些预路由，因此您需要将自定义路由添加到所有提及 `api` 的条件中。
