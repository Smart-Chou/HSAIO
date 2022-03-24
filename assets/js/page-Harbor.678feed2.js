(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{673:function(s,a,r){"use strict";r.r(a);var t=r(1),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,r=s._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"harbor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#harbor"}},[s._v("#")]),s._v(" Harbor")]),s._v(" "),r("p",[s._v("：一个 Web 服务器，提供了 Docker 镜像仓库。")]),s._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://goharbor.io/docs/2.2.0/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),r("OutboundLink")],1)]),s._v(" "),r("li",[s._v("采用 Golang 开发，由 VMware 公司开源。")]),s._v(" "),r("li",[s._v("支持存储 Docker Image 和 Helm Chart 。")])]),s._v(" "),r("h2",{attrs:{id:"同类产品"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#同类产品"}},[s._v("#")]),s._v(" 同类产品")]),s._v(" "),r("ul",[r("li",[s._v("Docker Hub\n"),r("ul",[r("li",[s._v("：Docker 官方的镜像仓库，地址为 "),r("code",[s._v("https://hub.docker.com")]),s._v(" 。")]),s._v(" "),r("li",[s._v("公开的镜像不需登录就可以 Pull ，但 Push 镜像时需要登录。")])])]),s._v(" "),r("li",[s._v("Docker Registry\n"),r("ul",[r("li",[s._v("：一个提供私有镜像仓库的服务器，由 Docker 官方开源。")]),s._v(" "),r("li",[s._v("功能比 Harbor 少，没有提供 Web UI 。")])])])]),s._v(" "),r("h2",{attrs:{id:"部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),r("ul",[r("li",[s._v("下载官方发行版："),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/goharbor/harbor/releases/download/v2.4.0/harbor-online-installer-v2.4.0.tgz\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),s._v("解压后，使用其中的脚本："),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" install.sh\n              "),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --with-notary       # 启用 notary ，检查镜像的数字签名。这需要 Harbor 采用 HTTPS")]),s._v("\n              --with-trivy          "),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用 trivy 漏洞扫描器")]),s._v("\n              --with-chartmuseum    "),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用 Chart 仓库")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br")])]),r("ul",[r("li",[s._v("部署之后，会生成一个配置文件 harbor.yml 。")]),s._v(" "),r("li",[s._v("Harbor 包含 harbor-core、harbor-db、registry、Nginx、Redis 等多个服务，基于 docker-compose 启动。\n"),r("ul",[r("li",[s._v("不会将日志输出到 docker 容器，而是保存到日志目录。")]),s._v(" "),r("li",[s._v("部署时至少需要 4G 内存。")])])]),s._v(" "),r("li",[s._v("修改配置之后需要执行："),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[s._v("./prepare --with-trivy  --with-chartmuseum\n"),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" down\n"),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up -d\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br")])])])])]),s._v(" "),r("li",[s._v("用启用 HTTPS 的 Nginx 反向代理 Harbor 时，需要在 Nginx 中加入 "),r("code",[s._v("proxy_set_header X-Forwarded-Proto $scheme;")]),s._v(" ，并在 "),r("code",[s._v("harbor/common/config/nginx/nginx.conf")]),s._v(" 中删除相同配置。")])]),s._v(" "),r("h2",{attrs:{id:"功能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[s._v("#")]),s._v(" 功能")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("项目（Projects）")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("每个项目是一个命名空间（namespace），其下可以存储多个镜像。")]),s._v(" "),r("ul",[r("li",[s._v("默认存储在本机文件系统中。以 layer 为单位进行存储，因此存储多个相似的镜像时，只会占用少量存储空间。")])])]),s._v(" "),r("li",[r("p",[s._v("拉取镜像的命令格式如下：")]),s._v(" "),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("harbor_url"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("project"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("REPOSITORY"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":tag"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("ul",[r("li",[s._v("每个镜像 Image 划分一个镜像仓库（repository），其下可以存储多个 tag 的镜像。")]),s._v(" "),r("li",[s._v("网页上显示的镜像大小是压缩之后的。")])])]),s._v(" "),r("li",[r("p",[s._v("每个项目可以添加多个用户作为成员，担任某种角色。角色按权限从高到低如下：")]),s._v(" "),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[s._v("项目管理员  "),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以管理该项目的其他成员")]),s._v("\n维护人员    "),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以扫描镜像、复制镜像、删除镜像")]),s._v("\n开发者      "),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以读写镜像")]),s._v("\n访客        "),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只能拉取镜像")]),s._v("\n受限访客    "),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只能拉取镜像")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br")])]),r("ul",[r("li",[s._v("如果项目的访问级别为 Private ，则允许被未登录用户拉取镜像。")])])]),s._v(" "),r("li",[r("p",[s._v('新建项目时，可以设置为对其它远程仓库的 "代理" 。')]),s._v(" "),r("ul",[r("li",[s._v("当用户请求拉取该项目下的镜像时，会自动从远程仓库拉取同名镜像，并默认缓存 7 天。")]),s._v(" "),r("li",[s._v("不过，拉取缓存镜像时，需要增加一层路径，声明远程镜像的命名空间。如下："),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("harbor_url"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("proxy_project"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote_namespace"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("REPOSITORY"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":tag"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])])])])]),s._v(" "),r("li",[r("p",[s._v("支持设置 Tag 的保留规则、项目的磁盘定额，从而限制存储的镜像数量。")]),s._v(" "),r("ul",[r("li",[s._v("推送镜像到 Harbor 时，默认会覆盖 image:tag 相同的 artifact 。可以将一些 tag 声明为不可变的，不允许被覆盖、删除。")])])]),s._v(" "),r("li",[r("p",[s._v("支持漏洞扫描。")])]),s._v(" "),r("li",[r("p",[s._v("支持设置 Webhook ：当项目发生 push、pull 等事件时，发送一个 JSON 格式的消息到某个 URL 。")])])])]),s._v(" "),r("li",[r("p",[s._v("仓库管理（Registries）")]),s._v(" "),r("ul",[r("li",[s._v("：用于定义一些远程的仓库服务器，供其它功能调用。")])])]),s._v(" "),r("li",[r("p",[s._v("复制（Replications）")]),s._v(" "),r("ul",[r("li",[s._v("：用于在本地 Harbor 仓库与其它远程仓库之间 Push 或 Pull 镜像。")]),s._v(" "),r("li",[s._v("拉取 Docker Hub 的官方镜像时，需要指定源命名空间为 library ，比如 "),r("code",[s._v("library/hello-world")]),s._v(" 。")]),s._v(" "),r("li",[s._v("Pull 镜像时，如果不指定存储到哪个命名空间，则默认采用源命名空间的名称。\n"),r("ul",[r("li",[s._v("如果不存在该命名空间则自动创建，且访问级别为 Private 。")])])]),s._v(" "),r("li",[s._v("Pull 镜像时，指定的源镜像名支持模糊匹配。如下："),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[s._v("library/*                 "),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 匹配 library 目录下的所有镜像，但不包括子目录")]),s._v("\nlibrary/*/*               "),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 匹配两级子目录")]),s._v("\nlibrary/**                "),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 匹配所有层级的子目录")]),s._v("\nlibrary/hello*            "),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 匹配 library 目录下，以 hello 开头的所有镜像")]),s._v("\nlibrary/hello?            "),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ? 匹配单个字符，不包括斜杆 /")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("library,amazon"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/**       "),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 匹配多个字符串，用逗号分隔")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br")])])]),s._v(" "),r("li",[s._v("触发复制规则时，会创建一个复制任务，在队列中执行。\n"),r("ul",[r("li",[s._v("可以手动触发，也可以定时自动触发，或通过事件触发。")]),s._v(" "),r("li",[s._v("如果任务执行失败，则会在几分钟之后重试。")])])])])]),s._v(" "),r("li",[r("p",[s._v("机器人账户（Robot）")]),s._v(" "),r("ul",[r("li",[s._v("：供自动化脚本使用，可用于 docker login 命令，但不能用于访问 Harbor Web 页面。")])])]),s._v(" "),r("li",[r("p",[s._v("垃圾清理")]),s._v(" "),r("ul",[r("li",[s._v("当用户删除镜像时，Harbor 并不会在磁盘中实际删除其使用的 layer 。")]),s._v(" "),r("li",[s._v("可以在 Web 页面上手动执行垃圾清理，或者定时执行，找出可以删除的 layer ，然后删除。")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);