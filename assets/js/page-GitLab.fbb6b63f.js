(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{652:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"gitlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab"}},[s._v("#")]),s._v(" GitLab")]),s._v(" "),a("p",[s._v("：一个 Web 网站，用于托管 Git 仓库。")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.gitlab.com/ee/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("采用 Ruby 开发，基于 Rails 框架。")]),s._v(" "),a("li",[s._v("可以访问公网上的 GitLab 官方网站，也可以自己部署社区版（CE）或企业版（EE）。")]),s._v(" "),a("li",[s._v("除了托管 Git 仓库，还提供了 Issue、任务看板、Wiki、CI/CD、WebIDE 等丰富的功能。")])]),s._v(" "),a("h2",{attrs:{id:"架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[s._v("#")]),s._v(" 架构")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("GitLab 内置的主要服务：")]),s._v(" "),a("ul",[a("li",[s._v("puma ：一个 HTTP 服务器。")]),s._v(" "),a("li",[s._v("workhorse ：反向代理 puma ，用于加速体积较大的 HTTP 请求，比如静态文件、上传文件。")]),s._v(" "),a("li",[s._v("sidekiq ：负责在后台执行任务。")]),s._v(" "),a("li",[s._v("gitaly ：负责处理 git 请求。收到用户访问 Git 仓库的请求时，会去访问磁盘中的 Git 仓库。")])])]),s._v(" "),a("li",[a("p",[s._v("GitLab 依赖的外部服务：")]),s._v(" "),a("ul",[a("li",[s._v("redis")]),s._v(" "),a("li",[s._v("postgreSQL")]),s._v(" "),a("li",[s._v("nginx ：用于反向代理各个内部服务，作为用户访问 GitLab 的入口。")]),s._v(" "),a("li",[s._v("grafana、prometheus、exporter ：用于监控 Gitlab 自身。")])])])]),s._v(" "),a("h2",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("用 docker-compose 部署：")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gitlab")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gitlab\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gitlab/gitlab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("14.3.3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ee.0\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" unless"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("stopped\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gitlab.example.com\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token datetime number"}},[s._v("80:80")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1022:22'")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# YAML 的一个特别语法：如果冒号 : 右侧的数小于 60 ，则视作 60 进制数，此时需要声明为字符串")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/gitlab\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/opt/gitlab\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./logs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/log/gitlab\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("ul",[a("li",[s._v("执行 "),a("code",[s._v('gitlab-rake "gitlab:password:reset"')]),s._v(" ，根据提示输入用户名 root ，即可设置其密码。")]),s._v(" "),a("li",[s._v("官方 Docker 镜像中集成了多个进程，因此比较臃肿，启动时需要几分钟。")])])]),s._v(" "),a("li",[a("p",[s._v("GitLab 企业版增加了少许功能。")]),s._v(" "),a("ul",[a("li",[s._v("与社区版兼容。部署企业版时，如果未激活，则只能使用社区版的功能。")]),s._v(" "),a("li",[s._v("激活步骤：\n"),a("ol",[a("li",[s._v("部署 gitlab-ee 。")]),s._v(" "),a("li",[s._v("进入 admin 页面，点击 Subscription ，输入激活码，或者上传许可证文件。")])])]),s._v(" "),a("li",[a("a",{attrs:{href:"https://conf.top/post/506/",target:"_blank",rel:"noopener noreferrer"}},[s._v("破解教程"),a("OutboundLink")],1)])])])]),s._v(" "),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("ul",[a("li",[s._v("配置文件默认位于 "),a("code",[s._v("/etc/gitlab/gitlab.rb")]),s._v(" ，配置示例："),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# GitLab 地址")]),s._v("\nexternal_url "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://gitlab.example.com"')]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# GitLab 供用户访问的地址，会影响 git clone 地址")]),s._v("\nnginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'listen_port'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# GitLab 实际监听的端口。默认会根据 external_url 选择监听的端口、协议")]),s._v("\nnginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'listen_https'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监听的端口是否采用 HTTPS 协议")]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gitlab_shell_ssh_port'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1022")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SSH 端口，会影响 git clone 地址，不过 GitLab 实际监听的依然是 22 端口")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SMTP 配置")]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smtp_enable'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smtp_domain'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exmail.qq.com"')]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smtp_address'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"smtp.exmail.qq.com"')]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smtp_port'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("                 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("465")]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smtp_user_name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test@qq.com"')]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smtp_password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"******"')]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smtp_authentication'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"login"')]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smtp_enable_starttls_auto'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smtp_tls'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gitlab_email_from'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test@qq.com'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建议禁用一些很少使用的组件，减少内存占用")]),s._v("\ngrafana"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'enable'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\nprometheus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'enable'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\nprometheus_monitoring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'enable'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 与 prometheus 相关的 exporter")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# puma['worker_processes']       = 2        # puma 的 worker 进程数，每个 worker 可能占用 1G 内存，但多个 worker 之间会共享内存")]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'packages_enabled'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# GitLab 提供的 maven、npm、pypi 等仓库")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建议默认禁用项目的一些功能，简化界面")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gitlab_rails['gitlab_default_projects_features_issues']             = true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gitlab_rails['gitlab_default_projects_features_merge_requests']     = true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gitlab_rails['gitlab_default_projects_features_wiki']               = true")]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gitlab_default_projects_features_snippets'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 代码片段")]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gitlab_default_projects_features_builds'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CI/CD 功能")]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gitlab_default_projects_features_container_registry'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Docker 镜像仓库")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("ul",[a("li",[s._v("修改配置文件之后，需要执行 "),a("code",[s._v("gitlab-ctl reconfigure")]),s._v(" 才能生效，而重启不一定生效。")])])]),s._v(" "),a("li",[s._v("可以执行 "),a("code",[s._v("gitlab-rails console")]),s._v(" 进入 Ruby 终端。\n"),a("ul",[a("li",[s._v("测试发送邮件："),a("div",{staticClass:"language-ruby line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[s._v("Notify"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test_email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test@qq.com'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Test Email'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'This is for test.'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("deliver_now\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])])]),s._v(" "),a("li",[s._v("登录 GitLab 之后，点击网页右上角的头像下拉框 -> Preferences ，可设置语言、每周起始日、时间偏好。")]),s._v(" "),a("li",[s._v("建议在 admin 页面进行以下配置：\n"),a("ul",[a("li",[s._v("禁止新用户注册。")]),s._v(" "),a("li",[s._v("设置仓库的默认分支名为 master 。")]),s._v(" "),a("li",[s._v("禁止在项目中不存在 CI 配置文件时，默认使用 Auto DevOps 流水线。")])])]),s._v(" "),a("li",[s._v("建议对 group 进行以下配置：\n"),a("ul",[a("li",[s._v("配置推送规则，比如限制单个文件的体积。")]),s._v(" "),a("li",[s._v("将 Default branch protection 策略设置为完全保护：Developer 不能 git push 该分支，Maintainer 才可以。")])])])]),s._v(" "),a("h2",{attrs:{id:"用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[s._v("#")]),s._v(" 用法")]),s._v(" "),a("ul",[a("li",[s._v("Project\n"),a("ul",[a("li",[s._v("：项目，即一个 Git 仓库。")])])]),s._v(" "),a("li",[s._v("Group\n"),a("ul",[a("li",[s._v("：群组，用于批量管理一组项目，类似于文件夹。")]),s._v(" "),a("li",[s._v("支持创建嵌套的子群组。")]),s._v(" "),a("li",[s._v("群组级别的配置，会被其下的子群组、项目继承。")]),s._v(" "),a("li",[s._v("用户名、群组名都属于命名空间，可以在这些命名空间下创建项目，项目的 URL 格式为 "),a("code",[s._v("<gitlab_url>/<namesapce>/<project>")]),s._v(" 。\n"),a("ul",[a("li",[s._v("用户有权创建个人项目、群组，但看不到其他人创建的项目、群组，除非被邀请加入。")])])])])]),s._v(" "),a("li",[s._v("GitLab 不支持创建用户组，而是以 Group 成员的方式批量管理用户。Group 成员分为几种预设的角色，权限从高到低如下：\n"),a("ul",[a("li",[s._v("Owner ：拥有当前 Group 的所有权限，接近于管理员。")]),s._v(" "),a("li",[s._v("Maintainer ：维护人员，拥有大部分权限。")]),s._v(" "),a("li",[s._v("Developer ：开发人员，拥有一般的编辑权限，不能 git push 主分支。")]),s._v(" "),a("li",[s._v("Reporter ：测试人员，有 Git 仓库的只读权限，可以编辑任务看板。")]),s._v(" "),a("li",[s._v("Guest ：只能读取 issue、wiki、CI/CD 等信息。不能读取 Git 仓库，除非该项目是公开的。")])])]),s._v(" "),a("li",[s._v("CI/CD\n"),a("ul",[a("li",[s._v("GitLab 支持在代码仓库中添加一个 .gitlab-ci.yml 文件，配置要执行的 CI/CD 流水线。")])])])]),s._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[s._v("#")]),s._v(" API")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("GitLab 提供了丰富的 Restful API 。")])]),s._v(" "),a("li",[a("p",[s._v("客户端使用 API 时可通过以下几种方式进行身份认证：")]),s._v(" "),a("ul",[a("li",[s._v("个人 token")]),s._v(" "),a("li",[s._v("项目 token")]),s._v(" "),a("li",[s._v("OAuth2 token")]),s._v(" "),a("li",[s._v("session cookie")])])]),s._v(" "),a("li",[a("p",[s._v("例：通过 curl 命令下载文件")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gitlab_url")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.1\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("project_id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("branch")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("master\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("file_path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("README.md\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("token")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("KqKuksUwwcuyvnc8tEw1\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${gitlab_url}")]),s._v("/api/v4/projects/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${project_id}")]),s._v("/repository/files/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${file_path}")]),s._v("/raw?ref="),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${branch}")]),s._v("&private_token="),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${token}")]),s._v('"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);