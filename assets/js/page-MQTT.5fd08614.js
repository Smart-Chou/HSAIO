(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{766:function(v,_,t){"use strict";t.r(_);var e=t(1),i=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"mqtt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mqtt"}},[v._v("#")]),v._v(" MQTT")]),v._v(" "),t("p",[v._v("：消息队列遥测传输协议（Message Queuing Telemetry Transport），常用于物联网通信。")]),v._v(" "),t("ul",[t("li",[v._v("属于应用层协议，基于 TCP 通信。")]),v._v(" "),t("li",[v._v("适用于低带宽、不可靠网络中的通信。")]),v._v(" "),t("li",[v._v("采用 C/S 架构。\n"),t("ul",[t("li",[v._v("mqtt server 又称为 mqtt broker ，常见的服务器软件有 ActiveMQ、mosquitto、EMQ 等。")]),v._v(" "),t("li",[v._v("mqtt client 与 mqtt broker 建立连接之后就构成了一个会话（Session）。")])])]),v._v(" "),t("li",[v._v("采用发布/订阅（publish/subscribe）模式。\n"),t("ul",[t("li",[v._v("mqtt client 可以发布消息到 mqtt broker 的某个 topic 下（此时称为 Publisher），也可以订阅 mqtt broker 的某个 topic 下的消息（此时称为 Subscriber）。")])])]),v._v(" "),t("li",[t("a",{attrs:{href:"https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("MQTT 官方标准"),t("OutboundLink")],1)])]),v._v(" "),t("h2",{attrs:{id:"报文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#报文"}},[v._v("#")]),v._v(" 报文")]),v._v(" "),t("ul",[t("li",[v._v("MQTT 协议的报文有多种类型，比如 PUBLISH、SUBSCRIBE 等。")]),v._v(" "),t("li",[v._v("一个 MQTT 报文的内容分为三部分：\n"),t("ul",[t("li",[v._v("固定报头（Fixed header）：存在于所有报文中。")]),v._v(" "),t("li",[v._v("可变报头（Variable header）：存在于某些报文中。")]),v._v(" "),t("li",[v._v("有效载荷（payload）：存在于某些报文中，存储实际的消息内容。")])])]),v._v(" "),t("li",[v._v("每个报文都有一个服务质量（QoS）标志位，用两个 bit 位存储。\n"),t("ul",[t("li",[v._v("QoS=00 ：表示该消息最多发布一次，可能一次都没收到。")]),v._v(" "),t("li",[v._v("QoS=01 ：表示该消息至少发布一次，可能收到多次。")]),v._v(" "),t("li",[v._v("QoS=10 ：表示该消息仅发布一次，保证收到且只收到一次。")]),v._v(" "),t("li",[v._v("QoS=11 ：保留。")])])]),v._v(" "),t("li",[v._v("如果客户端或服务器收到了内容、格式不符合 MQTT 规定的消息，就必须断开本次 Session 。")])]),v._v(" "),t("h2",{attrs:{id:"topic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#topic"}},[v._v("#")]),v._v(" Topic")]),v._v(" "),t("ul",[t("li",[v._v("mqtt broker 通过 topic 来分组管理消息。")]),v._v(" "),t("li",[v._v("topic 的语法\n"),t("ul",[t("li",[v._v("采用 UTF-8 编码。")]),v._v(" "),t("li",[v._v("可以用 / 分隔出多层目录。")])])]),v._v(" "),t("li",[v._v("当某个 Publisher 向某个 topic 发送消息时，mqtt broker 会立即将消息推送给订阅该 topic 的所有 Subscriber 。\n"),t("ul",[t("li",[v._v("Publisher 发布消息时，必须要指定一个 topic 的完整名字。")]),v._v(" "),t("li",[v._v("Subscriber 在订阅时，必须要发送一个主题过滤器（Topic Filter）。")])])])]),v._v(" "),t("h2",{attrs:{id:"topic-filter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#topic-filter"}},[v._v("#")]),v._v(" Topic Filter")]),v._v(" "),t("ul",[t("li",[v._v("主题过滤器是一个字符串，可以是某个 topic 的完整名字，也可以使用通配符。\n"),t("ul",[t("li",[t("code",[v._v("+")]),v._v(" ：单层通配符，匹配该层的所有主题。")]),v._v(" "),t("li",[t("code",[v._v("#")]),v._v(" ：多层通配符，匹配该层以及其下各层的所有主题，只能用于 topic 的末尾。")])])]),v._v(" "),t("li",[v._v("例：\n"),t("ul",[t("li",[v._v("主题过滤器 "),t("code",[v._v("sport/tennis/+")]),v._v(" 匹配 "),t("code",[v._v("sport/tennis/player1")]),v._v("、"),t("code",[v._v("sport/tennis/player2")]),v._v(" ，但不匹配 "),t("code",[v._v("sport/tennis/player1/ranking")]),v._v(" 。")]),v._v(" "),t("li",[t("code",[v._v("sport/+")]),v._v(" 匹配 "),t("code",[v._v("sport/")]),v._v(" ，不匹配 "),t("code",[v._v("sport")]),v._v(" 。")]),v._v(" "),t("li",[t("code",[v._v("/finance")]),v._v(" 匹配 "),t("code",[v._v("+/+")]),v._v(" 和 "),t("code",[v._v("/+")]),v._v(" ，但是不匹配 "),t("code",[v._v("+")]),v._v(" 。")]),v._v(" "),t("li",[t("code",[v._v("+")]),v._v("、"),t("code",[v._v("+/tennis/#")]),v._v("、"),t("code",[v._v("sport/+/player1")]),v._v(" 是有效的。")]),v._v(" "),t("li",[t("code",[v._v("sport+")]),v._v(" 是无效的。")]),v._v(" "),t("li",[t("code",[v._v("#")]),v._v(" 是有效的，会匹配所有 topic 。")]),v._v(" "),t("li",[t("code",[v._v("sport/tennis/#")]),v._v(" 是有效的，而 "),t("code",[v._v("sport/tennis#")]),v._v("、"),t("code",[v._v("sport/tennis/# /ranking")]),v._v(" 是无效的。")])])]),v._v(" "),t("li",[v._v("因为 "),t("code",[v._v("$SYS/")]),v._v(" 被广泛用作包含服务器特定信息或控制接口的主题的前缀，所以 "),t("code",[v._v("+")]),v._v(" 和 "),t("code",[v._v("#")]),v._v(" 都不会匹配以 "),t("code",[v._v("$")]),v._v(" 开头的主题，需要单独订阅，比如用 "),t("code",[v._v("$SYS/#")]),v._v(" 。")])])])}),[],!1,null,null,null);_.default=i.exports}}]);