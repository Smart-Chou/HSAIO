(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{747:function(s,a,t){"use strict";t.r(a);var e=t(1),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"dns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[s._v("#")]),s._v(" DNS")]),s._v(" "),t("h2",{attrs:{id:"dns-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns-配置"}},[s._v("#")]),s._v(" DNS 配置")]),s._v(" "),t("p",[s._v("Linux 系统会读取如下三处 DNS 配置，它们的优先级从高到低：")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("/etc/hosts")]),s._v(" 文件中配置了静态 DNS 路由：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1   localhost localhost4\n::1         localhost localhost6\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("每行一条 DNS 路由规则，格式为 "),t("code",[s._v("<ip> <hostname>...")]),s._v(" 。")]),s._v(" "),t("li",[s._v("如果一个主机名同时匹配多条 DNS 规则，则采用第一条匹配的。")]),s._v(" "),t("li",[s._v("主机名中不支持使用通配符。")])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("/etc/sysconfig/network-scripts/ifcfg-eth0")]),s._v(" 文件中配置了网卡 eth0 采用的 DNS 服务器：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DNS1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("202.96")]),s._v(".134.133\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DNS2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("202.96")]),s._v(".128.166\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DNS3")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("202.96")]),s._v(".128.86\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DNS4")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("114.114")]),s._v(".114.114\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("修改网络配置之后需要重启 network 服务："),t("code",[s._v("systemctl restart network")])])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("/etc/resolv.conf")]),s._v(" 文件中配置了 Linux 系统采用的 DNS 服务器：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("nameserver "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("114.114")]),s._v(".114.114\nnameserver "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.8")]),s._v(".8.8\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"dns-缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns-缓存"}},[s._v("#")]),s._v(" DNS 缓存")]),s._v(" "),t("ul",[t("li",[s._v("程序客户端、下游的 DNS 服务器每次查询 DNS 成功之后，通常会将该 DNS 记录缓存一段时间，避免频繁发出查询请求的耗时。")]),s._v(" "),t("li",[s._v("用户在域名注册商处配置 DNS 规则时，可以指定 TTL ，即这条解析规则的有效时长，超时之后应该重新向 DNS 服务器发出查询请求。\n"),t("ul",[t("li",[s._v("每次用户在域名注册商处修改 DNS 规则之后，会在 1s 内同步到因特网上所有权威 DNS 服务器，而不需等待 TTL 。")])])]),s._v(" "),t("li",[s._v("DNS 缓存的有效时长不一定与 TTL 一致。\n"),t("ul",[t("li",[s._v("Linux 系统默认不会在本地建立 DNS 缓存，可以安装 nscd、dnsmasq 等工具提供 DNS 缓存。")]),s._v(" "),t("li",[s._v("Windows 系统默认将所有 DNS 规则缓存 1 天，可以执行 "),t("code",[s._v("ipconfig /flushdns")]),s._v(" 命令清除缓存。")]),s._v(" "),t("li",[s._v("Chrome 浏览器默认将所有 DNS 规则缓存 1 分钟，可以在 "),t("code",[s._v("chrome://net-internals/#dns")]),s._v(" 页面清除缓存。")])])])]),s._v(" "),t("h2",{attrs:{id:"相关命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关命令"}},[s._v("#")]),s._v(" 相关命令")]),s._v(" "),t("h3",{attrs:{id:"dig"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dig"}},[s._v("#")]),s._v(" dig")]),s._v(" "),t("p",[s._v("：一个命令行工具，用于 DNS 查询。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("安装："),t("code",[s._v("yum install bind-utils")])])]),s._v(" "),t("li",[t("p",[s._v("命令：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dig")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    @"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ip"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定 DNS 服务器的地址。默认采用 /etc/resolv.conf")]),s._v("\n    -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定 DNS 服务器的端口")]),s._v("\n    -x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ip"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 反向查询与一个 IP 关联的域名")]),s._v("\n\n    +short    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只显示查询结果。默认会显示详细信息")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v("type 表示 DNS 记录的类型，默认为 A 。")])])]),s._v(" "),t("li",[t("p",[s._v("例：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@CentOS ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# dig baidu.com +short")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("220.181")]),s._v(".38.251\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("220.181")]),s._v(".38.148\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])])])}),[],!1,null,null,null);a.default=n.exports},764:function(s,a,t){"use strict";t.r(a);var e=t(1),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"dns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[s._v("#")]),s._v(" DNS")]),s._v(" "),t("h2",{attrs:{id:"域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#域名"}},[s._v("#")]),s._v(" 域名")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("域名（Domain name，DN）是一个字符串，映射到一个 IP 地址，相当于该 IP 地址的别名。")]),s._v(" "),t("ul",[t("li",[s._v("使用 IP 可以定位一个主机，但是 IP 不方便记忆，因此 1980 年代发明了域名。")]),s._v(" "),t("li",[s._v("一个域名可以映射到多个 IP ，一个 IP 可以被多个域名映射。")]),s._v(" "),t("li",[s._v("例：用户在浏览器中输入域名 "),t("code",[s._v("baidu.com")]),s._v(" 或其对应的 IP ，都可以访问百度网站。\n"),t("ul",[t("li",[s._v("但计算机必须先在本机解析出域名对应的 IP ，才能进行基于 IP 协议的 TCP 通信。")])])]),s._v(" "),t("li",[s._v("用户可以找某个域名服务商购买一个域名，配置 DNS 解析规则。")])])]),s._v(" "),t("li",[t("p",[s._v("域名的格式为 "),t("code",[s._v("xx[.xx]...")]),s._v(" ，由多个字段组成，字段之间用点号分隔。")]),s._v(" "),t("ul",[t("li",[s._v("只能包含小写字母、数字、连字符 - ，有的情况会包含下划线 _ 。")]),s._v(" "),t("li",[s._v("国际化域名（Internationalized Domain Name ，IDN）支持使用 Unicode 字符，以 ASCII 码存储。")])])]),s._v(" "),t("li",[t("p",[s._v("域名中的各个字段像目录路径一样划分层级，不过方向是从右向左，级别递减。")]),s._v(" "),t("ul",[t("li",[s._v("所有域名从根域名 . 开始。\n"),t("ul",[t("li",[s._v("根域名通常省略。例如域名 "),t("code",[s._v("baidu.com.")]),s._v(" 通常简写为 "),t("code",[s._v("baidu.com")]),s._v(" 。")]),s._v(" "),t("li",[s._v("美国 ICANN 组织管理根域名，有权分配顶级域名。")])])]),s._v(" "),t("li",[s._v("域名中最右侧的一个字段称为顶级域名。\n"),t("ul",[t("li",[s._v("目前因特网存在 1k 多个顶级域名，例如：\n"),t("ul",[t("li",[s._v("com 表示商业组织。")]),s._v(" "),t("li",[s._v("cn 表示中国，由中国因特网信息中心（CNNIC）管理。")]),s._v(" "),t("li",[s._v("edu 表示教育机构。")]),s._v(" "),t("li",[s._v("gov 表示政府机构。")])])]),s._v(" "),t("li",[s._v("管理顶级域名的机构有权分配二级域名，管理二级域名的机构有权分配三级域名，以此类推。")])])]),s._v(" "),t("li",[s._v("例：用户可以向管理顶级域名 com 的机构申请一个二级域名 "),t("code",[s._v("test.com")]),s._v(" ，并可以自己划分三级域名 "),t("code",[s._v("www.test.com")]),s._v("、"),t("code",[s._v("ftp.test.com")]),s._v(" ，还可以划分四级域名、五级域名等。\n"),t("ul",[t("li",[s._v("这里的子域名 www 通常表示网站内部一个提供 Web 服务的主机。")])])])])])]),s._v(" "),t("h2",{attrs:{id:"dns-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns-2"}},[s._v("#")]),s._v(" DNS")]),s._v(" "),t("p",[s._v("：域名系统（Domain Name System），用于解析域名对应的 IP 地址。")]),s._v(" "),t("ul",[t("li",[s._v("属于应用层协议，基于 UDP 通信，默认使用 53 端口。")]),s._v(" "),t("li",[s._v("DNS 服务的一般流程：\n"),t("ol",[t("li",[s._v("当计算机要解析一个域名时，先查询自己的 DNS 缓存。若没有命中缓存，则向本地 DNS 服务器发送查询请求。")]),s._v(" "),t("li",[s._v("如果本地 DNS 服务器也没有缓存该 DNS 记录，则将查询请求转发给上游的 DNS 服务器。\n"),t("ul",[t("li",[s._v("以此类推，最上游的是有权注册该域名的 DNS 服务器，称为权威 DNS 服务器。")]),s._v(" "),t("li",[s._v("下游的 DNS 服务器通常会缓存上游的 DNS 记录。")])])])])])]),s._v(" "),t("h2",{attrs:{id:"dns-服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns-服务器"}},[s._v("#")]),s._v(" DNS 服务器")]),s._v(" "),t("p",[s._v("：用于为其它主机提供 DNS 服务。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("DNS 服务器主要通过 UDP 广播信息，有时也会通过 TCP 发送和接收 DNS 数据库。")])]),s._v(" "),t("li",[t("p",[s._v("DNS 服务器会记录一些域名的解析规则，称为 DNS 记录。")]),s._v(" "),t("ul",[t("li",[s._v("DNS 记录分为多种类型，例如："),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("A         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Address ，将域名解析到一个 IPv4 地址")]),s._v("\nAAAA      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将域名解析到一个 IPv6 地址")]),s._v("\nCNAME     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Canonical Name ，将域名解析到另一个域名")]),s._v("\nMX        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Mail eXchange ，将域名解析到一个邮件服务器")]),s._v("\nNS        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Name Server ，记录管理该域名的下游 DNS 服务器的域名")]),s._v("\nPTR       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Pointer ，将 IP 地址反向解析到域名")]),s._v("\nSRV       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Service ，将域名解析到 IP 地址和 TCP/UDP 端口")]),s._v("\nTXT       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将该域名解析到一段字符串")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])]),s._v(" "),t("li",[s._v("例："),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("www.test.com  A  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(".1.1\nwww.test.com  A  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(".1.2    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以给同个域名添加多条解析规则，从而解析到多个 IP 地址，根据权重随机生效")]),s._v("\nftp.test.com  A  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(".1.3\n*.test.com    A  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(".1.4    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以使用通配符，表示匹配任意子域名。这不会匹配主域名 test.com")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[s._v("每条 DNS 记录可以设置 TTL（Time to live），表示建议下游服务器缓存它的时长，通常为 10 分钟。")])])]),s._v(" "),t("li",[t("p",[s._v("目前因特网存在 13 组根域名服务器。")]),s._v(" "),t("ul",[t("li",[s._v("可通过三级域名 "),t("code",[s._v("[a-m].root-servers.net")]),s._v(" 查询到根域名服务器的 IP 地址。\n"),t("ul",[t("li",[s._v("不过这些 IP 地址一般不会变化，会被下游 DNS 服务器长时间缓存。")])])]),s._v(" "),t("li",[s._v("根域名服务器记录了各个顶级域名的 DNS 服务器的地址，而后者记录了各个二级域名的 DNS 记录。")])])])]),s._v(" "),t("h2",{attrs:{id:"备案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#备案"}},[s._v("#")]),s._v(" 备案")]),s._v(" "),t("ul",[t("li",[s._v("如果将域名解析到位于中国大陆的 HTTP 服务器，则需要办理 ICP 备案。\n"),t("ul",[t("li",[s._v("如果使用国外服务器，则不需要备案。")]),s._v(" "),t("li",[s._v("主域名备案之后，子域名不需要备案。")])])]),s._v(" "),t("li",[s._v("提供云服务器的平台一般拥有 ICP 接入商的资格，可以协助用户办理备案。\n"),t("ul",[t("li",[s._v("备案时，需要说明网站用途，提交个人或企业的证件资料。")]),s._v(" "),t("li",[s._v("经营性网站需要办理 ICP 许可证，非经营性网站需要办理 ICP 备案。")])])]),s._v(" "),t("li",[s._v("中国政府要求 ICP 接入商履行以下义务：\n"),t("ul",[t("li",[s._v("受理用户的备案申请。")]),s._v(" "),t("li",[s._v("检查所有的 HTTP 请求，如果发向未经备案的服务器，则断开其 TCP 连接。")]),s._v(" "),t("li",[s._v("定期检查已备案网站的内容，是否符合备案用途。")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);