# 错误

应用程序错误可能是由多种原因引起的，了解错误影响系统的哪一层将有助于实现简单的结果。请理解，在像 Chevereto 这样的多层系统中，对于了解错误何时由 Chevereto 引起或问题出在其他地方至关重要。

## 错误 ID

Chevereto 在与错误堆栈跟踪和调试信息相关联的唯一 **errorId** 下记录所有错误事件。

```plain
<some code>: ** errorId #dacb7f96fb9fd28d **
```  

Chevereto 中的应用程序错误**在生产模式下默认隐藏**，唯一公开的部分是 errorId。 **出于安全原因**不会显示错误，errorId 是每个错误事件随机生成的唯一标识符。

::: tip 注意：错误 id 不是错误信息
错误 ID 存在，因此您可以在配置的系统调试设备中查找该错误。
:::

## 堆栈跟踪

下面的代码显示了一个示例错误堆栈跟踪。它描述错误，提供其唯一的 errorId 并显示调用堆栈。

```txt
Aw, snap! Internal Server Error [debug @ error_log] - https://chv.to/v3/debug

** errorId #dacb7f96fb9fd28d **
>> PDOException [2002]: SQLSTATE[HY000] [2002] php_network_getaddresses: getaddrinfo failed: Name or service not known
At /lib/G/classes/class.db.php:66

>> PDOException [0]: PDO::__construct(): php_network_getaddresses: getaddrinfo failed: Name or service not known
At /lib/G/classes/class.db.php:66

Stack trace:
#0 /lib/G/classes/class.db.php(66): PDO->__construct()
#1 /lib/G/classes/class.db.php(80): G\\DB->__construct()
#2 /app/loader.php(58): G\\DB::getInstance()
#3 /index.php(20): include_once('/app/loader.php')
```

## 是 Chevereto 相关的吗？

Chevereto 存在于许多同时工作的技术之上，该堆栈的任何组件都可能失败。

Chevereto **不会导致**以下问题：

* 无法连接(网络问题)
* MySQL 服务器不见了
* CORS(缺少图标、字体)
* Cookies/Sessions 不工作(权限)
* 受限功能(`set_time_limit`)
* 服务器限制(`mod_security`)

## 常见错误

### HTTP 500 内部服务器错误

这是由 Web 服务器层发出的通用错误响应，它表明存在错误，但没有为其指定任何具体说明。

由于这些错误可能在任何层产生，因此建议检查系统错误日志设备(阅读 [访问日志](debug.md#访问日志) 以了解操作方法)。

::: danger 调试 HTTP 500 错误
这个错误需要在 web-server 层调试，这取决于所使用的 web 服务器软件。请参阅您的 Web 服务器配置文档。
:::

收到错误后，您可以在自己的上下文中解决问题，或使用该信息向我们请求 [支持](https://chevereto.com/support)。

### Aw, snap! 内部服务器错误

```txt
Aw, snap! Internal Server Error - Check your error_log or enable debug_mode = 3
```

此消息表示 Chevereto 捕获的错误，但由于 **生产错误报告** 设置而隐藏。要真正了解发生了什么，您必须[调试](./debug.md)。

### 数据库消息

::: danger 转储更新查询
如果在`/install`你看到一条以`#Dumped update query`开头的纯文本消息，这意味着你**必须**在你的MySQL控制台中手动运行打印的查询。
:::

如果 [dump update query](../../settings/system.md#转储更新查询) 设置为 **enabled** 或者图像表有 **多于 1,000,000** 条记录，Chevereto 将转储执行数据库更新所需的 SQL 语句，必须直接在 MySQL 控制台中运行。

Chevereto 具有此功能，可以最大限度地减少破坏大型数据库，因为该过程可能需要几分钟才能完成。

手动更新数据库时，请注意以下事项：

* 断开所有对等点
* 关闭 MySQL 服务器，在它的控制台中工作(phpMyAdmin、Adminer、CLI)
* 逐个运行 MySQL 语句(分号`;` 表示 MySQL 语句何时结束)
