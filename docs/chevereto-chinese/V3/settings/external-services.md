# 外部服务

`/dashboard/settings/external-services`

## Akismet 垃圾邮件保护

切换 [Akismet](https://akismet.com/) 服务的使用。

|键值 |效果|
| -------- | --------------- |
|启用|启用 Akismet |
|禁用|禁用 Akismet |

## Akismet API 密钥

*仅在“Akismet 垃圾邮件保护”为“已启用”时适用。

|类型 |说明 |
| ------ | --------------- |
|字符串 | Akismet API 密钥 |

## StopForumSpam 垃圾邮件保护

切换 [停止论坛垃圾邮件](https://stopforumspam.com/) 服务的使用。

|键值 |效果|
| -------- | ----------------------- |
|启用|启用阻止论坛垃圾邮件 |
|禁用|禁用停止论坛垃圾邮件 |

## CDN

切换 [CDN](https://en.wikipedia.org/wiki/Content_delivery_network)(内容交付网络)的使用。

|键值 |效果|
| -------- | ----------- |
|启用|启用 CDN |
|禁用|禁用 CDN |

## CDN 网址

*仅当“CDN”设置为“已启用”时才适用。

确定网站的 CDN。 CDN URL 将用于所有本地静态资源。

|类型 |说明 |
| ------ | ------------------ |
|字符串 | CDN(拉取)URL |

## reCAPTCHA

切换 [reCAPTCHA](https://www.google.com/recaptcha/about/) 的使用。

|键值 |效果|
| -------- | ----------------- |
|启用|启用 reCAPTCHA |
|禁用|禁用 reCAPTCHA |

## reCAPTCHA 版本

*仅当 `reCAPTCHA` 设置为 `Enabled` 时适用。

确定 reCAPTCHA 版本。它必须与您的密钥的版本规范相匹配。

|类型 |价值观 |
| ------- | ------ |
|整数 | 2, 3 |

## reCAPTCHA 站点密钥

*仅当 `reCAPTCHA` 设置为 `Enabled` 时适用。

确定 reCAPTCHA 站点密钥。

|类型 |价值观 |
| ------ | ------------------ |
|字符串 | reCAPTCHA 站点密钥 |

## reCAPTCHA 密钥

*仅当 `reCAPTCHA` 设置为 `Enabled` 时适用。

确定 reCAPTCHA 密钥。

|类型 |价值观 |
| ------ | -------------------- |
|字符串 | reCAPTCHA 密钥 |

## reCAPTCHA 阈值

*仅当 `reCAPTCHA` 设置为 `Enabled` 时适用。

确定 reCAPTCHA 阈值。

例如，如果你

|键值 |效果|
| ----- | ----------------------------------------------------------------------------- |
| 0 |始终显示 reCAPTCHA |
| | |在 (n) 次尝试失败后显示 reCAPTCHA，例如在未能提供正确的登录凭据时 |

## 在联系页面强制 reCAPTCHA

*仅当 `reCAPTCHA` 设置为 `Enabled` 时适用。

在联系页面上切换显示(强制)reCAPTCHA。

|键值 |效果|
| -------- | ---------------------------------------- |
|启用|在联系页面上启用强制 reCAPTCHA |
|禁用|在联系页面上禁用强制 reCAPTCHA |

## 评论 API

确定要使用的评论 API。

|键值 |效果|
| --------------- | ------------------------------------------------- |
|讨论 |使用[Disqus](https://disqus.com/)评论服务|
| JavaScript/HTML |使用任何 HTML 评论提供程序 |

## Disqus 简称

*仅当`Comments API` 设置为`Disqus` 时适用。

确定 Disqus 短名称。

|类型 |键值 |
| ------ | ---------------- |
|字符串 | Disqus 简称 |

## Disqus 密钥

*仅当`Comments API` 设置为`Disqus` 时适用。

确定 Disqus 密钥。

|类型 |键值 |
| ------ | ----------------- |
|字符串 | Disqus 秘钥 |

## Disqus 公钥

*仅当`Comments API` 设置为`Disqus` 时适用。

确定 Disqus 公钥。

|类型 |键值 |
| ------ | ----------------- |
|字符串 | Disqus 公钥 |

## 注释代码

*仅当 `Comments API` 设置为 `JavaScript/HTML` 时适用

确定将添加到图像视图的 HTML 注释代码。

|类型 |键值 |
| ------ | ----- |
|字符串 | HTML |

## 中等内容

切换 [ModerateContent](https://www.moderatecontent.com/) 服务的使用。

|键值 |效果|
| -------- | ----------------------- |
|启用|启用中等内容 |
|禁用|禁用中等内容 |

## ModerateContent API 密钥

*仅适用于“ModerateContent”为“Enabled”的情况。

确定 ModerateContent API 密钥。

|类型 |键值 |
| ------ | ----------------------- |
|字符串 | ModerateContent API 密钥 |

## 自动批准

*仅适用于“ModerateContent”为“Enabled”的情况。

为 ModerateContent 批准的内容切换自动批准。

|键值 |效果|
| -------- | ----------------------------------------- |
|启用|启用 ModerateContent 自动批准 |
|禁用|禁用 ModerateContent 自动批准 |

## 阻止内容

*仅适用于“ModerateContent”为“Enabled”的情况。

确定哪些内容将被 ModerateContent 阻止。

|键值 |效果|
| -------------- | ----------------------------- |
|禁用|不要屏蔽任何内容|
|成人 |阻止成人内容 |
|青少年和成人 |阻止成人和青少年内容 |

## 标记 NSFW

*仅适用于“ModerateContent”为“Enabled”的情况。

确定哪些内容将由 ModerateContent 标记为 NSFW。

|键值 |效果|
| -------------- | --------------------------- |
|禁用|不要标记任何内容 |
|成人 |将成人标记为 NSFW |
|青少年和成人 |将成人和青少年标记为 NSFW |

## 分析代码

确定将跟踪您网站统计信息的分析 HTML 代码。您可以在此处放置 Google Analytics、Heap、Yandex.Metrica、[Matomo](https://matomo.org/)、Mixpanel 等提供的跟踪代码。

您在此部分输入的代码将打印在所有视图中。

|类型 |说明 |
| ------ | ----------- |
|字符串 | HTML |
