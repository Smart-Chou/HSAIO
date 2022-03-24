# 弹出上传插件

弹出上传插件 (PUP) 是一个小文件，允许通过一个小的 JavaScript 文件提供外部图像上传。

::: tip
当 PUP 启用时，路由`/plugin` 显示了如何将图像上传功能添加到其他网站的说明。
:::

## 怎么运行的

PUP 将用户可编辑的内容与上传按钮绑定，该按钮将触发图像上传对话框，并将自动处理图像插入所需的代码。最终用户无需离开原始网站即可体验流畅而整洁的过程。

## 支持的设备

无论用户设备(包括移动设备)如何，PUP 都可以在任何现代 Web 浏览器 (HTML 5) 中运行。它已经过测试并确认可以在 Windows、Mac、Linux 和 Android (Chrome) 上运行。

## 安装

基本安装很简单，只需将以下代码复制到目标网站的任何 HTML 部分即可。您可以直接在此代码上添加自定义选项。

```html
<script async src="//demo.chevereto.com/sdk/pup.js" data-url="https://demo.chevereto.com/upload"></script>
```

**注意：** 您需要编辑 `src` 和 `data-url` 以匹配您的 Chevereto 网站。

PUP 在 DOM 上工作，因此它没有任何服务器端依赖项，并且可以安装在任何网站上。

## 定制

所有插件自定义都通过 [数据属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*) 处理，您必须将其添加到 PUP 基本代码中。例如，要使用红色调色板，代码应如下所示：

```html
<script async src="//demo.chevereto.com/sdk/pup.js" data-url="https://demo.chevereto.com/upload" data-palette="red"></script>
```

这适用于所有 PUP 选项。格式为 **data-_key_**，其中 **_key_** 是目标选项键，在这种情况下，调色板选项被声明为 `data-palette` 属性值。

### 选项

这是所有可用的插件密钥选项的列表。

### `网址`

目标 Chevereto 网站的 URL。

|类型 |示例 |
|---|---|
|字符串 | https://demo.chevereto.com |

### `调色板`

按钮的命名调色板或逗号分隔的颜色列表(HEX、RGB 等)。当使用逗号分隔的颜色列表时，系统会将每种颜色绑定到一个“%n”颜色索引(从“%1”开始)，您可以将其与自定义 CSS 一起使用。

|类型 |价值观 |默认 |
|---|---|---|
|字符串 | `default` `clear` `turquoise` `green` `blue` `purple` `darkblue` `yellow` `orange` `red` `grey` `black` | `default` |

### `自动插入`

  嵌入代码以自动插入目标可编辑内容。使用“full”、“medium”或“thumbnail”的代码将链接到图像查看器页面。
  
  使用 `0` 禁用自动插入。

|类型 |价值观 |默认 |
|---|---|---|
|字符串 |`0` `viewer-links` `direct-links` `html-embed` `html-embed-full` `html-embed-medium` `html-embed-thumbnail` `bbcode-embed` `bbcode-embed-full` `bbcode-embed-medium` `bbcode-embed-thumbnail` `markdown-embed` `markdown-embed-full` `markdown-embed-medium` `markdown-embed-thumbnail` | `bbcode-embed-medium` |

### `兄弟姐妹`

兄弟 CSS 选择器将其用作对应插入按钮的 DOM 节点的引用。默认情况下，按钮将相对于可编辑内容放置。定义兄弟元素后，插件将搜索该元素并将其用作按钮插入的参考。

|类型 |示例 |
|---|---|
|字符串 | `.sibling` |

### `sibling-pos`

相对于兄弟姐妹的位置以放置按钮。

|类型 |价值观 |默认 |
|---|---|---|
|字符串 | `before` `after` | `after` |

### `供应商`

命名供应商字符串。

|类型 |价值观 |默认 |
|---|---|---|
|字符串 | `bbpress` `discourse` `discuz` `ipb` `mybb` `nodebb` `phpbb` `smf` `vanilla` `vbulletin` `woltlab` `xenforo` | `auto` |

### `模式`

插件模式。默认情况下，插件绑定到任何匹配的编辑器框。使用 `manual` 模式显式插入按钮并停止任何自动绑定。

|类型 |价值观 |默认 |
|---|---|---|
|字符串 | `auto` `manual` | `auto` |

### `目标`

用于目标可编辑内容的 CSS 选择器。在手动插入按钮时使用它。

|类型 |示例 |默认 |
|---|---|---|
|字符串 |`.selector` | `auto` |

### `朗`

两字母和四字母语言代码的按钮语言。

|类型 |价值观 |默认 |
|---|---|---|
|字符串 |`ar` `cs` `de` `es` `fi` `fr` `id` `it` `ja` `nl` `pt_BR` `ru` `zh_CN` `zh_TW` | `auto` |

### `容器类`

自定义按钮容器类名。它将 `%cClass` 绑定到模板堆栈。

|类型 |示例 |默认 |
|---|---|---|
|字符串 | `className` | `chevereto-pup-container` |

### `按钮类`

自定义按钮类名。它将 `%bClass` 绑定到模板堆栈。

|类型 |示例 |默认 |
|---|---|---|
|字符串 | `className` | `chevereto-pup-button` |

### `html`

[自定义 HTML](#自定义-HTML-和-CSS)。

|类型 |示例 |
|---|---|---|
|字符串 | `<div>按钮<div>` |

### `css`

[自定义 HTML](#自定义-HTML-和-CSS)。

|类型 |示例 |
|---|---|
|字符串 |  `.div { color: red; }` |

### `适合编辑器`

一个布尔值，指示插件是否应该使按钮适合目标编辑器工具栏。

禁用时，该插件将不适合目标编辑器的按钮样式(覆盖仅对支持的供应商有效)。

|类型 |价值观 |
|---|---|
|整数 | `0` `1` |

### `观察`

单击事件将触发同级观察然后按钮插入(实时追加)的元素的 CSS 选择器。对于动态生成编辑器框的动态编辑器很有用。

|类型 |示例 |
|---|---|---|
|字符串 | `.selector` |

### `观察缓存`

一个布尔值，指示是否应缓存匹配的观察元素。

启用后，它将停止观察匹配的观察到的元素点击事件。如果编辑器是动态生成的并且不存储为 DOM 节点，则始终禁用观察缓存。

|类型 |价值观 |默认 |
|---|---|---|
|整数 | `0` `1` | `1` |

### 自定义 HTML 和 CSS

PUP 支持模板占位符，这是一个特殊的字符串，PUP 会将其转换为可用的标记。

可用的模板占位符：

|标签 |说明 |
|---|---|
| %x | PUP按钮观察者(必须用于触发按钮动作)|
| %cClass |容器类名 |
| %bClass |按钮类名 |
| %iClass |图标类名 |
| %iconSvg |即用型 SVG HTML 标签形式的矢量图标 |
| % 文本 |翻译按钮文本 |

对于自定义 CSS，您还可以使用 `%n` 形式的调色板占位符，其中 **n** 是调色板索引。它绑定了 `%1`、`%2`、···、`%n` 占位符。

自定义 HTML 通过将模板字符串指示为选项属性来工作。在本例中，这是我们要使用的自定义 HTML：

```html
<a %x title='%text' class='%bClass'>%iconSvg</a>
```

要使用此模板，只需将 `data-html` 正确分配到插件代码中：

```html
<script async src="//demo.chevereto.com/sdk/pup.js" data-url="https://demo.chevereto.com/upload" data-html="<a %x title='% text' class='%bClass'>%iconSvg</a>"></script>
```

自定义 CSS 的工作原理与自定义 HTML 完全相同，但它使用“data-button-css”和调色板占位符(“%1”、“%2”、...、“%n”)。在本例中，这是我们要使用的自定义 CSS：

```
li.%cClass .%bClass{background:%1;color:%2;text-indent:unset;border-radius:3px;position:relative}li.%cClass a.%bClass:hover{background:%3;颜色：%4；边框颜色：%5}.%cClass .%bClass svg{font-size:15px;width:1em;height:1em;-webkit-transform:translate(-50%,-50%); -ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute;left:50%;top:50%;fill:currentColor}
```

要使用此模板，只需将 `data-css` 正确分配到插件代码中：

```html
<script async src="//demo.chevereto.com/sdk/pup.js" data-url="https://demo.chevereto.com/upload" data-css="li.%cClass .%bClass{ background:%1;color:%2;text-indent:unset;border-radius:3px;position:relative}li.%cClass a.%bClass:hover{background:%3;color:%4;border-color :%5}.%cClass .%bClass svg{font-size:15px;width:1em;height:1em;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(- 50%,-50%);transform:translate(-50%,-50%);position:absolute;left:50%;top:50%;fill:currentColor};"></script>
```

**重要提示：** 对于自定义 HTML 和 CSS，请确保在使用引号时不要破坏语法。

### 手动按钮绑定

要手动绑定按钮，只需创建自己的按钮，确保添加“data-chevereto-pup-trigger”和“data-target”属性。这是手动插入按钮的示例：

```html
<div id="editor" contenteditable></div>
<button data-chevereto-pup-trigger data-target="#editor">自定义按钮</button>
```

手动插入的按钮获得相同的弹出对话框功能和绑定。但是，手动插入的按钮不会使用任何插件选项或模板。

## 核心功能

该插件具有非常简洁的功能，并利用现代标准来提供其核心功能。这些是塑造 PUP 核心的一些特征。

### 原生 JavaScript

PUP 是用现代 JavaScript 标准编写的，它不需要任何外部库或服务器模块。代码大约 18KB，gzip 压缩后应该只有 6KB 左右。使用 [Google Closure compiler](https://developers.google.com/closure/compiler/) 缩小了源代码，但不会触及对象名称，因此您可以检查源代码并轻松理解代码。

它是异步工作的，因此插入代码的位置无关紧要，并且它根本不会阻止目标网站的加载。

### 智能负载和动态触发观察器

PUP 旨在观察 DOM，直到目标同级元素可用，并且一旦发生，它将启动其过程并停止任何额外的 DOM 节点观察。对于动态生成的编辑器框，PUP 有一个补充加载选项，用于观察定义的选择器元素上的点击事件。对该元素的任何点击都会触发 PUP 的兄弟观察，并且一旦找到兄弟就会停止。这允许 PUP 以静态或动态方式工作。
