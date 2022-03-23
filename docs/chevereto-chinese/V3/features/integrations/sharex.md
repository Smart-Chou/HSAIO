# ShareX

[ShareX](https://en.wikipedia.org/wiki/ShareX) 是一个适用于 Windows 的实用程序，它允许您将图像、屏幕截图、文本和其他类型的内容上传到多个提供商。借助 [Chevereto API](../../api/#api-v1)，您可以轻松地在 Chevereto 网站上使用 ShareX，直接从您的计算机上传图像。

## 获取 ShareX

ShareX 是免费且开源的。您可以从 [ShareX 网站](https://getsharex.com/) 下载它，下载后继续将其安装到您的计算机中。

## 将 Chevereto 添加到 ShareX

从 ShareX 9.4.0 版开始，您只需要：

- 转到图像目标设置
- 选择«Chevereto»
- 填写您的网站详细信息

对于较旧的 ShareX 版本，您需要手动将 Chevereto 导入 ShareX。首先将以下代码块复制到某处并编辑它以匹配您的 Chevereto 安装。

```json
{
    "Name": "Chevereto",
    "RequestType": "POST",
    "RequestURL": "http://mysite.com/api/1/upload", // edit this
    "FileFormName": "source",
    "Arguments": {
    "key": "your API key goes here", // edit this
    "format": "redirect",
    "source": "%input"
    },
    "ResponseType": "RedirectionURL",
    "RegexList": [],
    "URL": "",
    "ThumbnailURL": "",
    "DeletionURL": ""
}
```

准备好编辑此代码后，请复制所有代码并按照以下步骤操作：

- 打开 ShareX
- 单击“目的地”，然后转到“目的地设置...”
- 向下滚动并点击“自定义上传者”
- 单击“导入”，然后单击“从剪贴板”(位于左侧的列中)

您将看到代码块中的信息已添加到 ShareX。单击“图像上传器”部分旁边的“测试”。您应该在“测试结果”日志中看到类似的内容：

```plain
URL: http://mysite.com/image/<id>
```

如果一切正常，您将看到，ShareX 已准备好直接上传到您的 Chevereto 网站。

## 将图像上传到用户帐户

Chevereto API V1 可以以访客身份上传图片。如果要将图像上传到给定用户，请检查 [API 用户上传解决方法](../../api/#上传给用户解决方法)。

## 需要帮忙？

请参阅此主题以获取有关 [ShareX 和 Chevereto](https://chevereto.com/community/threads/sharex-and-chevereto.5254/) 的帮助。
