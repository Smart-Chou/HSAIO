# 安全

## 编码的 ID

Chevereto 公共 ID 被编码以避免枚举和难以猜测 URL。所有用户、图像和相册 ID 都经过编码以供公众使用。

公共 ID 被编码以避免任何内容枚举攻击的尝试。

### 编码和解码 ID

在安装时，Chevereto 会创建一个随机生成的“crypt_salt”，由“CHV\encodeID()”和“CHV\decodeID()”函数使用。这允许将存储在数据库中的数字 id 转换为字母数字 id。公共 ID 因每个不同的安装而异。

### 使编码的 ID 更大

更大的编码 ID 总是更好地保护上传内容的隐私。

您必须使用替代方法来实现更大的编码 ID：

#### 改变 `id_padding` 设置

::: danger
此方法将影响先前生成的链接。只有在可以安全地编辑 ID 时才使用它。
:::

转到数据库，找到`chv_settings`表并编辑标识为`id_padding`的`setting_name`。 (默认为零)。

输入像“5000”这样的整数值将指示系统使用此基本填充生成 ID。

#### 改变 `chv_images` 表

::: tip
此方法不会影响任何先前生成的链接。
:::

转到数据库，找到 `chv_images` 表并将 `AUTOINCREMENT` 更改为您要使用的 ID 填充。

## CSRF 保护

跨站点请求伪造 ([CSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery)) 是一种漏洞利用，用于通过在未经用户同意的情况下从远程网站传输指令来欺骗网站，例如示例触发删除内容请求。

CSRF 保护基于请求令牌的使用。请求令牌在网站加载时由会话设置，并在发出后续请求时询问。如果令牌与会话不匹配，则表示该请求尚未由会话发起，系统将返回 403 错误。

## 密码学

Chevereto 使用 [BCrypt](https://en.wikipedia.org/wiki/Bcrypt) 加密方法来存储密码和 cookie 登录条目。社交登录和“保持登录”功能使用 BCrypt 和随机生成的字符串的强组合。

## reCAPTCHA

Chevereto 包括对 [reCAPTCHA](https://www.google.com/recaptcha/intro/) 的支持，这有助于防止机器人注册并尝试暴力破解用户密码。在仪表板 > 设置 > 外部服务中，您可以启用或禁用 reCAPTCHA 并设置触发 reCAPTCHA 的无效尝试次数。

## 无效请求

无效请求是指用户输入错误密码或 CSRF 令牌不匹配。每次触发无效请求时，系统都会存储 IP 和触发该无效请求的给定操作。

系统中有一个硬编码设置，用于控制每天允许的无效请求的限制，当用户达到`CHV_MAX_INVALID_REQUESTS_PER_DAY`时，系统将在 24 小时内不允许来自 IP 中的请求。此设置的硬编码值为 25 个无效请求，您可以在 `/app/loader.php` 文件中对其进行修改。
