# 外部存储

外部存储允许使用外部服务器来存储用户上传的内容，这有助于利用您的服务器负载并提供更可靠的网站。如果您使用多个外部存储服务器，它将有助于分配这些资产的流量。

外部存储通过添加一个外部存储服务器来工作，文件上传将存储在其中。此外部存储服务器使用 HTTP 公开这些文件，使 Chevereto 安装的用户和访问者能够直接访问这些图像。

## 存储地址

::: tip 提供存储服务器
存储服务器必须提供用于公共读取文件访问的 URL。检查您的服务提供商的文档。
:::

Chevereto 使用给定的存储 URL 作为基本 URL 将外部存储上传映射到相应的外部存储服务器，以在外部存储中定位该文件。

将 Amazon S3 与直接存储结合使用：

|物业 |键值 |
| ------------ | ---------------------------------------------- |
| Bucket       | `my-bucket`                                    |
| Storage URL  | `https://s3.amazonaws.com/my-bucket/`          |
| Stored image | `my-bucket/image.jpg`                          |
| Mapped URL   | `https://s3.amazonaws.com/my-bucket/image.jpg` |

::: tip CNAME
建议您使用与您的域匹配的 URL，因此请尝试利用 [CNAME 记录](https://en.wikipedia.org/wiki/CNAME_record)。
:::

带有基于文件夹的存储和自定义 CNAME (`img.domain.com`) 的 Amazon S3：

|物业 |键值 |
| ------------ | ------------------------------------------------------- |
| Bucket       | `my-bucket`                                             |
| Storage URL  | `https://img.domain.com/my-bucket/`                     |
| Stored image | `/my-bucket/2020/10/06/image.jpg`                       |
| Mapped URL   | `https://img.domain.com/my-bucket/2020/10/06/image.jpg` |

## 带有 CDN 的存储 URL

为您要使用的每个存储 URL 添加一个 CDN。在您的 CDN 提供商处，为源存储 URL 创建一个拉区。

如果您使用的是 Amazon S3，源(源)URL 将是这样的：

```sh
https://s3.amazonaws.com/my-bucket/
```

您的 CDN 服务提供的 CDN URL 将是这样的：

```sh
https://pullzone-url.at.cdn-service.com/
```

为上述 URL 添加 CNAME 记录将使您最终得到一个像这样的存储 URL：

```sh
https://s3-cdn.domain.com/
```

## 阿里云OSS

阿里云OSS API允许上传图片到[阿里云(阿里云)对象存储系统(OSS)](https://www.alibabacloud.com/product/oss/)。

## 亚马逊 S3

Amazon S3 API 允许将图像上传到 [Amazon S3](https://en.wikipedia.org/wiki/Amazon_S3) 存储桶。为此，您需要一个 [Amazon Web Services](https://aws.amazon.com/) (AWS) 帐户。

- 要设置 Amazon S3：
  - 从 [身份和访问管理](https://console.aws.amazon.com/iam/home?#users) 控制台创建访问凭证
  - 点击“创建新用户”，确保启用“程序访问”
  - 在权限上，关联 **AmazonS3FullAccess**
  - 在流程结束时存储**用户名**、**访问密钥 ID** 和 **秘密访问密钥**
  - 从 [S3 控制台](https://console.aws.amazon.com/s3) 创建一个存储桶
  - 单击“创建存储桶”并继续创建存储桶
  - 在权限上，确保未选中“阻止新的公共 ACL”和“删除公共访问”(公共访问设置)
  - 存储 **bucket name** 和 **region**
  - 您不需要设置日志记录

如果您想使用自定义域，请遵循 [CNAME](https://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html#VirtualHostingCustomURLs) 文档。否则只需确保 [Storage URL](#存储地址) 以 `/<your_bucket_name>/` 结尾

## Backblaze B2

Backblaze B2 API 允许将图像上传到 [Backblaze 的云存储系统](https://www.backblaze.com/b2/cloud-storage.html)。

1. 进入**B2 Cloud Storage**并点击**Create a Bucket**
2. Bucket 中的文件是：**Public**
3. 前往 **App Keys** 并点击 **Add a New Application Key**
   1. 访问类型：**读写**
4. 完成后，使用以下参考：

为 **B2 S3 Storage**(当前产品)选择 **S3 Compatible** storage API：

| B2值| Chevereto 存储 |
| -------------- | ------------------------------------------------ |
| Region         | `us-west-002` (从你的端点记下)     |
| keyID          | 存储 key                                      |
| applicationKey | 存储 secret                                   |
| Endpoint*      | `https://s3.us-west-002.backblazeb2.com`         |
| URL            | `https://f002.backblazeb2.com/file/your_bucket/` |

> (*) 您将在存储桶详细信息下找到端点。

为旧版 **B2 存储**选择 **Backblaze B2** 存储 API：

| B2值| Chevereto 存储 |
| -------------- | --------------------------------------- |
| keyID          | 存储 key (Account ID)                |
| applicationKey | 存储 secret (主应用程序密钥) |

## FTP

FTP API 允许将图像上传到实现 [文件传输协议](https://en.wikipedia.org/wiki/File_Transfer_Protocol) 的服务器。

## 谷歌云

Google Cloud API 允许将图像上传到 Google Cloud Storage 存储桶。为此，您需要一个 [Google Cloud](https://cloud.google.com/) 服务帐户和 [激活云存储](https://cloud.google.com/storage/docs/signup)。

要设置 Google 云存储：

- 创建一个项目
- 转到 **API 和服务** 仪表板并确保启用 **Google Cloud Storage JSON API**。
  - 如果未启用，请点击 **Enable API and Services** 并启用 Google Cloud Storage JSON API
- 转到**云存储**，然后单击**浏览器**
- 通过单击**创建存储桶**按钮创建存储桶。确保：
  - 阻止公共访问：取消选择**在此存储桶上强制实施公共访问阻止**，因为您希望该存储桶具有公共访问权限
  - 访问控制：细粒度
- 转到 API 和服务下的 **凭据**，单击 **创建凭据**，然后单击 **服务帐户**。确保使用以下设置：
  - 授予访问权限：角色所有者
  - 密钥类型：JSON
- 完成后，转到 **Service Accounts** 下新创建的服务帐户
- 去 **keys** 并创建一个新的 **JSON 密钥**
- 您的浏览器将开始下载 JSON 密钥文件，文件内容是您需要粘贴到 Chevereto 的 **Secret Key** 文本区域的内容

## 本地

[Local API](../../settings/external-storage.md#本地) 允许将图像上传到服务器中的任何文件系统路径。

## 微软 Azure

Microsoft Azure API 允许将图像上传到 [Microsoft Azure 存储](https://azure.microsoft.com/en-us/services/storage/)。

## OpenStack

[OpenStack API](../../settings/external-storage.md#openstack) 允许将图像上传到 [OpenStack](https://en.wikipedia.org/wiki/OpenStack) 容器。

- RunAbove 的 OpenStack 配置：
  - Identity URL：<https://auth.Runabove.io/v2.0>
  - Username：您的 RunAbove 用户名
  - Password：您的 RunAbove 密码
  - Region：`SBG-1` 或 `BHS-1` 这是创建容器的数据中心
  - Container：您创建的容器的名称
  - Tenant id：留空
  - Tenant name：您的`项目 ID`，可在左侧的 OpenStack Horizon 上找到(当前项目))
  - URL：访问容器的 URL(参见 [RunAbove CNAME](https://community.runabove.com/kb/en/object-storage/how-to-put-object-storage-behind-your-domain-名称.html))

## S3 兼容

S3 兼容 API 允许将图像上传到任何实施 Amazon S3 标准的服务器，也称为“AWS S3 API”。配置与 Amazon S3 完全相同，但它需要提供提供者端点。

一些支持 S3 API 的提供者是：

- Vultr Object Storage (使用区域 `us-east-1`)
- Ceph
- DigitalOcean Spaces
- Dreamhost Cloud Storage
- IBM COS S3
- Minio
- Scaleway
- StackPath
- Tencent Cloud Object Storage (COS)
- Wasabi

## SFTP

SFTP API 允许将图像上传到实现 [SSH 文件传输协议](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol) 的服务器。
