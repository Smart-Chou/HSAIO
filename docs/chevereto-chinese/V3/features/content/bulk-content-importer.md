# 批量内容导入器

该工具允许通过解析文件系统位置的内容来**批量导入**图像、相册和用户。当您想要导入大量内容时使用它，否则使用 API 或 Web gui 导入会很麻烦。

::: tip 导入 != 同步
导入从导入路径中获取内容并将其*导入*到数据库、文件系统或外部存储中。失败的文件将被移动到一个特殊的目录 **`./importing/failed/`**。
:::

## 如何使用它

::: tip 演示导入
查看 [chevereto/demo-importing](https://github.com/chevereto/demo-importing) 中的存储库，了解如何组织文件以使用批量内容导入器的示例。
:::

批量内容导入器通过扫描 `importing/` 路径工作，其中文件夹用于表示其中包含的文件的给定解析格式。

按照 [解析格式](#解析格式) 约定将内容放置在这些目录中，可以将图像导入到作为文件夹创建的用户、添加类别等。

| `./importing/` | 解析                                                  |
| -------------- | ----------------------------------------------------- |
| `parse-users/` | [顶级文件夹作为用户名](#顶级文件夹作为用户名) |
| `parse-albums/`| [顶级文件夹作为相册](#顶级文件夹作为相册)    |
| `no-parse/`    | [不解析文件夹](#不解析文件夹)                             |

::: tip
转到`仪表板/批量`以查看导入作业。
:::

### 字符集

文件和 `.json` 元数据必须是 UTF-8。

### 命令

<CodeGroup>
<CodeGroupItem title="V3.20+">

```sh
sudo -u www-data php /var/www/html/cli.php -C importing
```

</CodeGroupItem>

<CodeGroupItem title="Older">

```sh
sudo -u www-data IS_CRON=1 THREAD_ID=1 php importing.php
```

</CodeGroupItem>
</CodeGroup>

### Cron 条目

可以使用 [cron](https://en.wikipedia.org/wiki/Cron) 自动调度导入命令：

```sh
* * * * * COMMAND_HERE >/dev/null 2>&1
```

### 线程

您可以通过为`THREAD_ID`传递不同的`env`，在多个线程中运行导入来加快进程。

```sh
sudo -u www-data THREAD_ID=1 php cli.php -C importing
sudo -u www-data THREAD_ID=2 php cli.php -C importing
```

### 文件锁定

导入过程可以通过在`./importing/.lock` 放置一个空的锁文件来锁定。

在删除此文件之前，不会进行该过程。当您想要导入大型数据集并且关心嵌套文件夹结构时，这会很方便。

## 解析格式

批量导入器扫描目标导入目录并相应地创建如下所述的解析规则的内容。用户资产(头像、背景图片)将上传到系统用户文件夹。

::: tip
解析器仅在用户和相册不存在时才创建这些用户和相册。它检测`username` 是否存在，并且对相册执行相同的操作(基于相册名称 + 其所有者)。
:::

### 顶级文件夹作为用户名

导入路径中的顶级文件夹将作为`username`处理。二级文件夹将被解析为`album name`。

```shell
./<path>
└── rodolfo <- username
    ├── weapons <- album name
    │   ├── machine-gun.jpg
    │   └── rocket-launcher.jpg
    └── logo-alt.png
```

对于上面的树，解析器将：

- 创建 `rodolfo` 用户(如果用户不存在)
- 在`rodolfo` 用户下创建相册`weapons`(如果相册不存在)
- 将`./<path>/rodolfo/weapons` 中包含的图片上传到 rodolfo 的`weapons` 相册
- 上传`logo-alt.png` 到`rodolfo`(无专辑)

### 顶级文件夹作为相册

导入路径中的顶级文件夹将作为`album_name` 处理。

```shell
./<path>
└── weapons <- album name
    ├── machine-gun.jpg
    ├── rocket-launcher.jpg
    └── logo-alt.png
```

对于上面的树，解析器将：

- 以访客用户身份创建相册`weapons`(如果相册不存在)
- 将`./<path>/weapons` 中包含的图片上传到`weapons` 相册

### 不解析文件夹

没有文件夹被解析，只有图像将作为来宾导入。

```shell
./<path>
├── machine-gun.jpg
├── rocket-launcher.jpg
└── logo-alt.png
```

对于上面的树，解析器将：

- 将包含在`./<path>` 中的图像以访客用户身份上传到公众。

## 状态

导入作业状态定义如下：

| 状态      | 说明                           |
| --------- | ------------------------------ |
| Queued    | 作业在处理队列中(默认状态)   |
| Working   | 正在解析作业                   |
| Paused    | 作业已暂停                     |
| Canceled  | 作业被用户中止                 |
| Completed | 作业已完成(所有内容都已解析) |

::: tip
当没有其他东西要解析时，导入可能会显示"completed"，但在内部它会自动重新排队。
:::

## 元数据

批量导入器支持使用 JSON 格式的元数据，与 [Google 相册](#从谷歌照片导入) 相同。必须按内容提供元数据，这意味着您必须为每个内容使用一个元数据文件。

::: tip UTF-8
元数据必须采用 UTF-8 格式。不要忘记修复您的字符集。
:::

| 内容                                  | 类型     | 元数据文件                             |
| ------------------------------------- | -------- | -------------------------------------- |
| `rodolfo/`                            | username | `rodolfo/metadata.json`                |
| `rodolfo/weapons/`                    | album    | `rodolfo/weapons/metadata.json`        |
| `rodolfo/weapons/machine-gun.jpg`     | image    | `rodolfo/weapons/machine-gun.json`     |
| `rodolfo/weapons/rocket-launcher.jpg` | image    | `rodolfo/weapons/rocket-launcher.json` |
| `rodolfo/logo-alt.png`                | image    | `rodolfo/logo-alt.json`                |

下面的树显示了上表的元数据。

```shell
./<path>
└── rodolfo
    ├── weapons
    │   ├── machine-gun.jpg
    │   ├── machine-gun.json
    │   ├── rocket-launcher.jpg
    │   ├── rocket-launcher.json
    │   └── metadata.json
    ├── logo-alt.png
    ├── logo-alt.json
    └── metadata.json
```

::: tip 注意
元数据属性合并了正在解析的内容，这意味着您不需要明确指出所有属性，只需要描述您需要描述的内容。
:::

### 图像元数据

下面的 JSON 元数据文件提供了`machine-gun.jpg`的示例元数据。

```json
{
    "imageData": {
        "title": "Machine gun",
        "description": "Say hello to my little friend!",
        "nsfw": false,
        "category": {
            "name": "Guns",
            "urlKey": "Guns",
            "description": "Guns don't kill people, sugar does."
        }
    }
}
```

::: tip 图片类别
只要您同时提供 `name` 和 `urlKey`，就会根据需要创建图像类别。
:::

### 专辑元数据

下面的 JSON 元数据文件提供了 `guns/` 专辑的示例元数据。

```json
{
    "albumData": {
        "title": "Guns",
        "description": "Guns should be banned.",
        "access": "private",
        "privacy": {
            "type": "password",
            "password": "12345"
        }
    }
}
```

对于专辑隐私，您可以选择：

| 隐私类型           | 效果                                |
| ------------------ | ----------------------------------- |
| `public`           | 公共相册(默认)                    |
| `private`          | 所有者的私人专辑                    |
| `private_but_link` | 与`private` 相同+带有专辑链接的那些 |
| `password`         | 将设置访问相册的密码                |

例如，如果您需要 `private_but_link`，元数据属性应该如下所示：

```json
{
    "privacy": {
        "type": "private_but_link"
    }
}
```

### 用户元数据

下面的 JSON 元数据文件为 `rodolfo/` 用户提供了一个示例元数据。

```json
{
    "userData": {
        "role": "user",
        "name": "Rodolfo Berrios",
        "username": "rodolfo",
        "email": "rodolfo@chevereto.com",
        "website": "https://rodolfoberrios.com",
        "bio": "I'm the Master of Puppets @chevereto, the alpha-omega. He/Him/They.",
        "profileImages": {
            "avatar": "rodo-avatar.jpg",
            "background": "rodo-bkg.jpg"
        },
        "networks": {
            "facebook": "no!",
            "twitter": "no!"
        },
        "timezone": "America/Santiago",
        "language": "cl",
        "private": false
    }
}
```

个人资料图片必须位于用户文件夹内的`.assets/`文件夹中。

```shell
./<path>
└── rodolfo
    └── .assets
        ├── rodo-avatar.jpg
        └── rodo-bkg.jpg
```

::: danger 用户资产
图像资产的类型必须是您的安装处理的文件格式之一。
:::
