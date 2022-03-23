# 语言

Chevereto 使用`gettext` 进行翻译，并且系统内置了很多语言，您可以在`app/content/languages` 文件夹中找到这些语言。

## 添加新语言

### OneSky

如果您想添加一种全新的语言，我们鼓励您申请 [translation](http://translate.chevereto.com/)，在那里您可以轻松贡献一种新语言。 OneSky 具有完整的翻译套件，无需额外的软件。

::: tip
贡献的翻译将被添加到软件中。
:::

### 手动

将你的 `.po` 文件放在 `app/content/languages` 文件夹中。语言代码必须以 ISO 格式表示。

::: danger
考虑使用[.po 编辑器软件](https://www.google.com/search?q=po%20editor) 来创建翻译文件。
:::

## 自定义语言字符串

可以自定义所有语言字符串以适合您要向访问者显示的内容。这样，您根本不需要触及主题。

系统通过覆盖目标翻译来工作。例如，将“上传并分享您的图片”替换为“上传，立即执行！”通过执行以下程序：

### 1. 获取翻译字符串(`msgid` 和 `msgstr` 值)

- 转到`app/content/languages`文件夹
- 打开文件`en.po`(在这个例子中我们覆盖英语)
- 找到此文字：`上传并分享您的图片。`
- 复制 `msgid` 和 `msgstr` 行，你应该得到如下内容：

```po
msgid "Upload and share your images."
msgstr ""
```

::: tip
属性 `msgstr` 为空，因为英语是基本语言。如果您打开任何其他语言，您将看到实际翻译的值。
:::

### 2. 覆盖翻译字符串

- 转到`app/content/languages/overrides`文件夹
- 使用以下内容创建文件 `en.po`：

```po
msgid "Upload and share your images."
msgstr "Upload, do it now!"
```

::: tip
您只需要替换 `msgstr`，因为那是翻译字符串。
:::

结果是系统现在将显示“上传，立即执行！”而不是默认的“上传并共享您的图像。”并且它只会影响该语言。

::: danger
**注意：** 您实际上不需要用于语言覆盖的 gettext 编辑器，但请确保使用双引号。如果您需要在 `msgstr` 中放置双引号，请使用 `\"`(转义双引号)。
:::
