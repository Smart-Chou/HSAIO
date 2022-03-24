# 工具

`/dashboard/settings/tools`

## 解码ID

将编码的 id 转换为其整数解码值。

|示例 |结果 |
| ------- | ------ |
| v5ZO    | 1234   |

## 编码 ID

将整数 id 转换为其编码值。

|示例 |结果 |
| ------- | ------ |
| 1234    | v5ZO   |

## 发送测试邮件

向目标电子邮件地址发送测试邮件。

使用它来测试电子邮件传送率。

|示例 |结果 |
| --------------------- | ---------------------------------------------- |
| test-ihmi89xct@srv1.mail-tester.com |测试邮件发送至 test-ihmi89xct@srv1.mail-tester.com |

## 导出用户

以 `json` 格式导出用户配置文件信息。

当需要导出用户时使用它。

```json
{
    "name": "Biggie Smalls",
    "username": "admin",
    "email": "admin@chevereto.com",
    "facebook_username": null,
    "twitter_username": null,
    "website": "https:\/\/rodolfo.is",
    "bio": "",
    "timezone": "America\/Santiago",
    "language": "en",
    "is_private": "0",
    "newsletter_subscribe": "1"
}
```

## 重新生成外部存储统计信息

重新计算目标存储 ID 的外部存储统计信息。

|示例 |结果 |
| ------- | ---------------------------------------------- |
| 1 |存储“AWS S3 US WEST N.CALI”(1) 统计信息重新生成 |

## 将图像记录从一个外部存储迁移到另一个

将图像数据库表从一个存储重新分配到另一个存储。

当您要迁移存储并需要更新数据库记录时使用此选项。

|价值观 |示例 |
| ----------------- | ------- |
|源存储 ID | 1 |
|目标存储 ID | 2 |
