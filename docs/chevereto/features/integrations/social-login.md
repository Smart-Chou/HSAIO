# 社交登录

## Facebook登入

::: danger 不安全
该服务提供商以缺乏安全性和违反隐私政策而闻名。我们不建议使用此功能。
:::

要启用 Facebook 登录，您需要创建一个 [Facebook 应用程序](https://developers.facebook.com/)。

- 转到`https://developers.facebook.com/apps`(您必须登录 Facebook)并单击“添加新应用程序”。
- 出现提示时输入您的新应用显示名称、电子邮件和类别
- 点击“创建应用ID”，您将重定向到一个新页面
- 转到“设置”，然后单击“添加平台”
- 选择“网站”，然后输入您的网站网址，点击页面底部的“保存更改”
- 添加您的应用域、隐私和条款 URL。记得点击底部的“保存更改”
- 转到“产品”，然后单击“Facebook 登录”(如果该产品不存在，则必须添加该产品)
- 在“客户端 OAuth 设置”上确保启用“Web OAuth 登录”
- 在“有效的 OAuth 重定向 URI”下输入 `http://yourwebsite.com/connect/facebook`
- 在“取消授权回调 URL”下输入`http://yourwebsite.com/`
- 转到“App Review”并公开您的应用程序(这将使您的应用程序可供所有人使用)
- 一旦您的应用程序获得公开批准，您就可以转到“仪表板”，然后在 Chevereto 网站(仪表板 > 设置 > 社交网络)中复制“应用程序 ID”和“应用程序机密”

请特别注意 Facebook APP Review。只有在您完成 Facebook 要求的所有信息后，您的应用才会对您可见。

## 推特登录

::: danger 不安全
该服务提供商以缺乏安全性和违反隐私政策而闻名。我们不建议使用此功能。
:::

要启用 Twitter 登录，您需要创建一个 [Twitter 应用程序](https://apps.twitter.com/)。

- 前往 `apps.twitter.com` 并点击“创建新应用”。
- 使用以下设置：
  - 网站：`http://www.yourwebsite.com`
  - 回调网址：`http://www.yourwebsite.com/connect/twitter`
  - 允许使用此应用程序登录 Twitter (On)。
  - 使用以下权限：
    - Read and Write(选择)

## 谷歌登录

要启用 Google Google 登录：

- 转到[凭据页面](https://console.developers.google.com/apis/credentials)
- 单击**创建凭据** > **OAuth 客户端 ID**。
- 选择**Web 应用程序** 应用程序类型。
- 命名您的 OAuth 2.0 客户端
- 在 **Authorized redirect URIs** 添加 `http://yourwebsite.com/connect/google`，然后点击 **Create**。

配置完成后，**注意**创建的**client ID**和**Client Secret**。

转到 [Google 登录设置](../../settings/social-networks.md#谷歌) 以在您的 Chevereto 安装中启用 Google 登录。

## VK登录

要启用 VK，您需要创建一个 [VK 应用程序](https://vk.com/dev)。

- 前往 `vk.com/dev` 并点击“创建应用程序”并选择类别：网站
- 填写您的网站数据
- 点击“连接站点”
- 授权重定向 URI：`http://www.yourwebsite.com/connect/vk`
- 在应用设置页面中确保已启用 Open API
