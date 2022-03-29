(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{668:function(s,a,t){"use strict";t.r(a);var e=t(1),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"fastdfs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fastdfs"}},[s._v("#")]),s._v(" FastDFS")]),s._v(" "),t("p",[s._v("：一个文件服务器，不提供 Web UI 。")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/happyfish100/fastdfs",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("2008 年，由国内开发者发布，采用 C 开发。")]),s._v(" "),t("li",[s._v("基于 TCP 通信。")]),s._v(" "),t("li",[s._v("特点：\n"),t("ul",[t("li",[s._v("提供了文件存储、上传、下载等功能，适合存储大量的小型文件。")]),s._v(" "),t("li",[s._v("支持分布式部署。")])])])]),s._v(" "),t("h2",{attrs:{id:"原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),t("p",[s._v("FastDFS 的服务器分为两种角色：")]),s._v(" "),t("ul",[t("li",[s._v("tracker server\n"),t("ul",[t("li",[s._v("：负责处理客户端的访问请求，并将请求经过负载均衡之后重定向到某个 storage 。")]),s._v(" "),t("li",[s._v("当客户端发出下载文件的请求时，tracker 会回复该文件存储在哪个 storage 上的哪个路径。然后，客户端再访问相应的 storage ，下载文件。")]),s._v(" "),t("li",[s._v("可以部署多个 tracker 实例，提高可用性。")]),s._v(" "),t("li",[s._v("部署了多个 tracker 时，应该再部署一个 Nginx 对它们进行反向代理、负载均衡，让客户端统一访问该 Nginx 。")])])]),s._v(" "),t("li",[s._v("storage server\n"),t("ul",[t("li",[s._v("：负责存储文件，并提供上传文件、下载文件的 HTTP API 。")]),s._v(" "),t("li",[s._v("基于操作系统本身的文件系统，将文件直接存储到主机的某个目录下。")]),s._v(" "),t("li",[s._v("可以部署一组或多组 storage 实例，组成 storage 集群。\n"),t("ul",[t("li",[s._v("每组存储集群的一部分文件。因此增加组的数量，就可以横向扩展集群的存储容量。")]),s._v(" "),t("li",[s._v("组内的每个实例都存储该组文件的一个副本，从而实现冗余备份，还可以分担用户的访问流量，提高负载能力。")]),s._v(" "),t("li",[s._v("往某组加入一个新实例时，它会自动与同组的其它 storage 通信，同步文件。")])])]),s._v(" "),t("li",[s._v("可以部署 Nginx 代理 storage 的 store_path 目录下的文件，从而允许客户端以文件的 path 作为 URI ，直接通过 Nginx 下载文件。")])])])]),s._v(" "),t("h2",{attrs:{id:"部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("用 Docker 运行 tracker server ：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name tracker    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n         -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22122")]),s._v(":22122         "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -v /opt/fdfs/tracker.conf:/etc/fdfs/tracker.conf           \\  # 挂载配置文件")]),s._v("\n         delron/fastdfs tracker\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("用 Docker 运行 storage server ：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name storage                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23000")]),s._v(":23000 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8888")]),s._v(":8888             "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TRACKER_SERVER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.1:22122        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 声明 tracker server 的地址，该配置会保存到配置文件中")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -v /opt/fdfs:/var/fdfs                                     \\  # 挂载数据目录")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -v /opt/fdfs/storage.conf:/etc/fdfs/storage.conf           \\  # 挂载配置文件")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -v /opt/fdfs/nginx.conf:/usr/local/nginx/conf/nginx.conf   \\  # 挂载 Nginx 的配置文件")]),s._v("\n    delron/fastdfs storage\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("storage.conf 的配置示例：")]),s._v(" "),t("div",{staticClass:"language-ini line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("bind_addr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("0.0.0.0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("23000")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("group_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("group1               # 该 storage 属于哪个组")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("base_path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/var/fdfs             # 工作目录，用于存储数据和日志")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("store_path0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/var/fdfs           # 存储文件的目录。该参数可以设置多个，从 0 开始编号")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# store_path1=/var/fdfs2")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("tracker_server")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("10.0.0.1:22122   # tracker 的地址。该参数可以配置多个")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tracker_server=10.0.0.2:22122")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("nginx.conf 的配置示例：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8888")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    location ~ /group"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("-9"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("/ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        ngx_fastdfs_module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该模块用于对 storage 进行代理，其配置文件是 /etc/fdfs/mod_fastdfs.conf")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[s._v("#")]),s._v(" 用法")]),s._v(" "),t("h3",{attrs:{id:"上传文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传文件"}},[s._v("#")]),s._v(" 上传文件")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("进入 fastdfs 容器，执行 "),t("code",[s._v("vi /etc/fdfs/client.conf")]),s._v(" ，修改配置文件：")]),s._v(" "),t("div",{staticClass:"language-ini line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("tracker_server")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("10.0.0.1:22122")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("通过客户端上传文件：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@CentOS ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/bin/fdfs_upload_file /etc/fdfs/client.conf test.txt")]),s._v("\ngroup1/M00/00/00/lRyeml-QA76AWkC1AAAAAAAAAAA357.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("上传成功之后会返回该文件的逻辑存储路径 path ，其格式为：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("group1")]),s._v(" ：表示 storage 所属组。")]),s._v(" "),t("li",[t("code",[s._v("M00")]),s._v("    ：表示 store_path 的编号。")]),s._v(" "),t("li",[t("code",[s._v("00/00/")]),s._v(" ： 表示 store_path 之下的子目录，总共有两级，取值为十六进制的 00~FF 。")]),s._v(" "),t("li",[t("code",[s._v("lRyeml-QA76AWkC1AAAAAAAAAAA357.txt")]),s._v(" ：按特定规则生成的文件名。")])]),s._v(" "),t("p",[s._v("storage 不支持文件去重，重复上传同一个文件时，会存储到不同的 path 。")])]),s._v(" "),t("li",[t("p",[s._v("可以查看文件信息：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@CentOS ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/bin/fdfs_file_info /etc/fdfs/client.conf group1/M00/00/00/lRyeml-QA76AWkC1AAAAAAAAAAA357.txt")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" storage id: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" address: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" create timestamp: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-10-30 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":42:49\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" size: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("49")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" crc32: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1050033651")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0x3E963DF3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"下载文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载文件"}},[s._v("#")]),s._v(" 下载文件")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("通过客户端下载文件：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("/usr/bin/fdfs_download_file /etc/fdfs/client.conf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("也可以直接通过 Nginx 下载：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://10.0.0.1:8888/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -O test.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("fdfs_trackerd       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("config_file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 tracker server")]),s._v("\nfdfs_storaged       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("config_file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("start"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("stop"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("restart"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动或停止 storage server")]),s._v("\nfdfs_monitor        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("config_file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询服务器的状态信息")]),s._v("\n\nfdfs_upload_file    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("config_file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("filename"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("storage_ip:port"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("store_path_index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上传文件")]),s._v("\nfdfs_append_file    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("config_file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("filename"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                                         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 追加上传文件")]),s._v("\nfdfs_download_file  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("config_file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("filename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("download_offset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("download_bytes"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载文件")]),s._v("\nfdfs_delete_file    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("config_file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除文件")]),s._v("\nfdfs_file_info      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("config_file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询文件的信息")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);