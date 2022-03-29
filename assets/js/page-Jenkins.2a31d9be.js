(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{546:function(s,n,t){s.exports=t.p+"assets/img/jenkins_job.bc39a40e.png"},601:function(s,n,t){"use strict";t.r(n);var a=t(1),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"jenkins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jenkins"}},[s._v("#")]),s._v(" Jenkins")]),s._v(" "),a("p",[s._v("：一个 Web 服务器，用于 CI/CD ，采用 Java 开发。")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://jenkins.io/zh/doc/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("支持托管大量脚本（称为任务、Job ），供用户在浏览器中执行，实现便捷的项目构建、测试、部署等目标。")])]),s._v(" "),a("h2",{attrs:{id:"相关历史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关历史"}},[s._v("#")]),s._v(" 相关历史")]),s._v(" "),a("ul",[a("li",[s._v("2005 年，Sun 公司的 Kohsuke Kawaguchi 发布了一个简单的 CI 网站，名为 Hudson 。")]),s._v(" "),a("li",[s._v("2010 年，Oracle 公司收购了 Sun 公司，拥有了 Hudson 的版权。社区被迫将项目改名为 Jenkins ，进行开发。")]),s._v(" "),a("li",[s._v("2011 年，Hudson 被交给 Eclipse 基金会管理。但它越来越落后于 Jenkins ，于 2016 年停止开发。")])]),s._v(" "),a("h2",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("用 war 包启动：")]),s._v(" "),a("ol",[a("li",[s._v("安装 JDK 。")]),s._v(" "),a("li",[s._v("下载 Jenkins 的 war 包。")]),s._v(" "),a("li",[s._v("启动 Jenkins ："),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("java -jar jenkins.war --httpPort"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("然后便可用浏览器访问 "),a("code",[s._v("http://localhost:8080")]),s._v(" 。")]),s._v(" "),a("li",[s._v("首次启动时，终端上会显示一个密钥，用于首次登录。")])])])])]),s._v(" "),a("li",[a("p",[s._v("或者用 docker-compose 部署：")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jenkins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" jenkins\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" jenkins/jenkins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("2.289.3\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" unless"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("stopped\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("JAVA_OPTS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Duser.timezone=GMT+08\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 8080"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("                                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 供用户访问 Jenkins 的 Web 页面")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - 50000:50000                               # 供 JNLP 类型的 agent 访问 Jenkins")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./jenkins_home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/jenkins_home\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /var/run/docker.sock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/run/docker.sock   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使容器内的 Jenkins 能与 dockerd 通信")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("ul",[a("li",[s._v("需要先修改挂载目录的权限："),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" jenkins_home\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(":1000 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])])])]),s._v(" "),a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Jenkins 的主目录称为 JENKINS_HOME ，拷贝该目录就可以备份、迁移 Jenkins 。")]),s._v(" "),a("ul",[a("li",[s._v("在启动 Jenkins 之前，可以声明环境变量 "),a("code",[s._v("JENKINS_HOME=/opt/jenkins/")]),s._v(" ，改变 Jenkins 主目录。")]),s._v(" "),a("li",[s._v("Jenkins 在每个节点上都会创建 JENKINS_HOME 目录。\n"),a("ul",[a("li",[s._v("master 节点的 JENKINS_HOME 目录用于保存 Jenkins 的主要数据。")]),s._v(" "),a("li",[s._v("slave 节点的 JENKINS_HOME 目录主要包含 workspace 。")])])])])]),s._v(" "),a("li",[a("p",[s._v("master 节点的 JENKINS_HOME 目录结构：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("jenkins_home\n├── config.xml                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Jenkins 的配置文件")]),s._v("\n├── jobs/                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存各个 Job 的信息")]),s._v("\n│   ├── job1/\n│   │   ├── builds/           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存每次 build 的信息，包括配置文件、日志")]),s._v("\n│   │   ├── config.xml        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该 Job 的配置文件")]),s._v("\n│   │   └── nextBuildNumber   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 记录下一次 build 的编号")]),s._v("\n│   ├── job2/\n│   └── job3/\n├── nodes/                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存各个节点的信息")]),s._v("\n├── plugins/\n└── workspace/                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 包含在当前节点执行过的 Job 的工作目录")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Jenkins 每次执行 Job 时：")]),s._v(" "),a("ul",[a("li",[s._v("先将该 Job 加入构建队列，等待分配某个 node 上的一个执行器（executor）。\n"),a("ul",[a("li",[s._v("如果没有可用的 executor ，则在构建队列中阻塞该 Job 。")]),s._v(" "),a("li",[s._v("如果构建队列中已存在相同的 build 任务（配置、构建参数相同），则不会将当前任务加入构建队列，甚至不会占用 Build ID 。")]),s._v(" "),a("li",[s._v("通过 API 或上游 job 触发一个 job 时，会在构建队列中等待一段时间才执行，称为静默期。如果在静默期内多次触发该 job ，则会被构建队列自动去重。")])])]),s._v(" "),a("li",[s._v("默认将当前节点的 "),a("code",[s._v("$JENKINS_HOME/workspace/$JOB_NAME")]),s._v(" 目录作为工作目录（称为 workspace ）。\n"),a("ul",[a("li",[s._v("执行 Job 之前、之后都不会自动清空工作目录，建议用户主动清理。")]),s._v(" "),a("li",[s._v("如果将一个 Job 并发执行多个实例，则生成的工作目录会自动添加 @1、@2 格式的后缀。")])])]),s._v(" "),a("li",[s._v("默认在 shell 中加入环境变量 "),a("code",[s._v("BUILD_ID=xxxxxx")]),s._v(" ，当执行完 Job 之后就自动杀死所有环境变量 BUILD_ID 值与其相同的进程。\n"),a("ul",[a("li",[s._v("可以在 shell 中声明环境变量 "),a("code",[s._v("JENKINS_NODE_COOKIE=dontkillme")]),s._v(" ，阻止 Jenkins 杀死当前 shell 创建的进程。")])])])])])]),s._v(" "),a("h2",{attrs:{id:"用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[s._v("#")]),s._v(" 用法")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("访问 "),a("code",[s._v("/restart")]),s._v(" 页面，会显示一个重启按钮。")])]),s._v(" "),a("li",[a("p",[s._v("Jenkins 的 Web 页面上，很多地方都显示了 ？ 图标，点击它就会显示此处的帮助文档。")])]),s._v(" "),a("li",[a("p",[s._v("新安装的 Jenkins 需要进行一些系统配置，比如添加节点、设置对外的 URL 。")]),s._v(" "),a("ul",[a("li",[s._v("点击 "),a("code",[s._v("Manage Jenkins -> Configure System")]),s._v(" 可进行一些系统配置，比如设置 Jenkins 对外的 URL、邮箱、全局的环境变量。")]),s._v(" "),a("li",[s._v("用户可以将密码等私密数据保存成 Jenkins 的凭据，然后在执行 Job 时调用，从而避免泄露明文到终端上。")])])]),s._v(" "),a("li",[a("p",[s._v("Jenkins 的主页默认显示一个视图（view）。")]),s._v(" "),a("ul",[a("li",[s._v("每个视图以列表形式包含多个任务（Job），便于分组管理。")])])]),s._v(" "),a("li",[a("p",[s._v("Jenkins 的主页的左侧显示了菜单列，点击新建按钮，即可创建一个 Job ，常见的几种类型如下：")]),s._v(" "),a("ul",[a("li",[s._v("Freestyle Project\n"),a("ul",[a("li",[s._v("：自由风格的项目，可以通过 Web 页面上的配置实现大多数构建任务。")])])]),s._v(" "),a("li",[s._v("Pipeline\n"),a("ul",[a("li",[s._v("：将项目的处理过程分成多个阶段，依次执行，称为流水线，用 Jenkinsfile 文件描述。")])])]),s._v(" "),a("li",[s._v("Multibranch Pipeline\n"),a("ul",[a("li",[s._v("：多分支流水线。用于监听 SCM 仓库的事件，对各个分支分别执行流水线。")]),s._v(" "),a("li",[s._v("需要先将 pipeline 文件保存到每个分支的 SCM 仓库中。")])])]),s._v(" "),a("li",[s._v("MultiJob Project\n"),a("ul",[a("li",[s._v("：用于组合调用多个 Job 。")]),s._v(" "),a("li",[s._v("可以设置多个阶段（Phase），每个阶段可以串行或并行执行多个 Job 。")])])]),s._v(" "),a("li",[s._v("Folder\n"),a("ul",[a("li",[s._v("：用于对 Job 进行分组管理。")]),s._v(" "),a("li",[s._v("此时 Job 的全名为 "),a("code",[s._v("<folder>/<job>")]),s._v(" ，因此不同 Folder 下的 Job 可以重名。")])])])])]),s._v(" "),a("li",[a("p",[s._v("Job 的名称会用于组成 URL ，还会用于创建工作目录，因此应该避免包含特殊字符。")]),s._v(" "),a("ul",[a("li",[s._v("可以采用 "),a("code",[s._v("项目名 _ 模块名 _ Job 类型 _ 环境")]),s._v(" 的命名格式，比如 "),a("code",[s._v("mysite_front_DEPLOY_in_test")])]),s._v(" "),a("li",[s._v("也可以创建多层 Folder ，分组管理 Job ，比如 "),a("code",[s._v("mysite / front / DEPLOY_in_test")])])])]),s._v(" "),a("li",[a("p",[s._v("点击进入一个 Job 的详情页面，如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:t(546),alt:"",loading:"lazy"}})]),s._v(" "),a("ul",[a("li",[s._v("左上方显示：该 Job 的菜单列，比如启动（Build）、配置、删除、重命名。")]),s._v(" "),a("li",[s._v("左下方显示：构建历史（Build History），记录每次执行该 Job 的编号、时间、结果。")]),s._v(" "),a("li",[s._v("中上方显示：Job 名称、描述信息。")]),s._v(" "),a("li",[s._v("中下方显示：构建历史中，Job 每个阶段的耗时。")])])]),s._v(" "),a("li",[a("p",[s._v("点击某次构建，可查看其详细信息，比如启动原因、持续时长、控制台输出（Console Output）。")]),s._v(" "),a("ul",[a("li",[s._v("常见的几种构建结果：\n"),a("ul",[a("li",[s._v("success ：执行成功，显示为蓝色。")]),s._v(" "),a("li",[s._v("failure ：执行失败，显示为红色。")]),s._v(" "),a("li",[s._v("unstable ：不稳定，显示为黄色，比如测试不通过。")]),s._v(" "),a("li",[s._v("aborted ：放弃执行，显示为灰色。比如达到超时时间、被用户主动取消。")])])]),s._v(" "),a("li",[s._v("Console Output 中，如果打印一个以 "),a("code",[s._v("http://")]),s._v(" 开头的字符串，则会自动显示成超链接。")])])])]),s._v(" "),a("h3",{attrs:{id:"管理节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#管理节点"}},[s._v("#")]),s._v(" 管理节点")]),s._v(" "),a("ul",[a("li",[s._v("用户可以添加一些主机、Docker 容器作为 Jenkins 的运行环境，称为节点（node）、代理（agent）、slave 。\n"),a("ul",[a("li",[s._v("Jenkins 服务器所在的节点称为 master ，而其它节点称为 slave ，这些节点都可以用于运行 Job 。")]),s._v(" "),a("li",[s._v("在每个节点上，Jenkins 都需要使用一个目录存储数据。可以指定 "),a("code",[s._v("/opt/jenkins/")]),s._v(" 目录，或者创建 jenkins 用户，然后使用 "),a("code",[s._v("/home/jenkins/")]),s._v(" 目录。")]),s._v(" "),a("li",[s._v("增加节点有利于实现 Jenkins 的横向扩容。")])])]),s._v(" "),a("li",[s._v("添加 slave 节点时，建议通过 SSH 密钥连接。步骤如下：\n"),a("ol",[a("li",[s._v("安装 "),a("code",[s._v("SSH Build Agents")]),s._v(" 插件。")]),s._v(" "),a("li",[s._v("在 slave 节点上安装 JDK 。")]),s._v(" "),a("li",[s._v("将 master 节点的 "),a("code",[s._v("~/.ssh/id_rsa.pub")]),s._v(" 公钥拷贝到 slave 节点的 "),a("code",[s._v("~/.ssh/authorized_keys")]),s._v(" 中。")]),s._v(" "),a("li",[s._v("在 Jenkins 上创建一个 "),a("code",[s._v("SSH Username with private key")]),s._v(" 类型的凭据，填入 master 节点的 "),a("code",[s._v("~/.ssh/id_rsa")]),s._v(" 私钥。")]),s._v(" "),a("li",[s._v("在 Jenkins 上添加该节点，选择以 "),a("code",[s._v("Launch agents via SSH")]),s._v(" 方式连接。")])])]),s._v(" "),a("li",[s._v("当 Jenkins master 通过 SSH 连接到 slave 之后（以 notty 方式连接，不创建终端），会执行 "),a("code",[s._v("java -jar remoting.jar")]),s._v("  命令，保持运行一个客户端。\n"),a("ul",[a("li",[s._v("master 每次连接 slave 时，不会加载 "),a("code",[s._v("/etc/profile")]),s._v(" 和 "),a("code",[s._v("~/.bash_profile")]),s._v(" ，只会加载 "),a("code",[s._v("/etc/bashrc")]),s._v(" 和 "),a("code",[s._v("~/.bashrc")]),s._v(" 。")]),s._v(" "),a("li",[s._v("建议在 slave 的配置页面添加 Prefix Start Agent Command ："),a("code",[s._v("source /etc/profile;source ~/.bash_profile;")]),s._v(" 。")]),s._v(" "),a("li",[s._v("客户端执行的所有 shell 命令都会继承它的 shell 环境变量。因此，当用户修改 shell 环境变量时，客户端不会自动更新，必须手动将 slave 断开重连。")])])])]),s._v(" "),a("h3",{attrs:{id:"管理权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#管理权限"}},[s._v("#")]),s._v(" 管理权限")]),s._v(" "),a("p",[s._v("安装 "),a("code",[s._v("Role-based Authorization Strategy")]),s._v(" 插件之后便可以实现基于角色的用户权限控制。用法：")]),s._v(" "),a("ol",[a("li",[s._v("进入 "),a("code",[s._v("全局安全配置")]),s._v(" 页面，将授权策略改为 "),a("code",[s._v("Role-Based Strategy")]),s._v(" 。")]),s._v(" "),a("li",[s._v("进入 "),a("code",[s._v("Manage Jenkins -> Manage Users")]),s._v(" 页面，创建一个用户账号。")]),s._v(" "),a("li",[s._v("进入 "),a("code",[s._v("Manage Jenkins -> Manage and Assign Roles -> Manage Roles")]),s._v(" 页面，创建角色。\n"),a("ul",[a("li",[s._v("比如创建一个全局角色 visitor ，给予 Overall 的 Read 权限。即可以查看 Jenkins 主页，但看不到任何 Job 。")]),s._v(" "),a("li",[s._v("比如创建几个项目角色，分别拥有对不同项目的权限。")]),s._v(" "),a("li",[s._v("项目角色的 pattern 用于通过正则表达式选中多个项目，供他操作。")]),s._v(" "),a("li",[s._v("建议将不同类型的 Job 采用不同的前缀命名，便于通过正则表达式分别匹配。")])])]),s._v(" "),a("li",[s._v("进入 "),a("code",[s._v("Manage Jenkins -> Assign Roles")]),s._v(" 页面，给各个用户分配角色。\n"),a("ul",[a("li",[s._v("默认只能对 Jenkins 内置数据库中存储的用户进行操作，用户较多时配置很麻烦。建议使用 LDAP 服务器中存储的用户、用户组。")])])])]),s._v(" "),a("p",[s._v("推荐做法：")]),s._v(" "),a("ul",[a("li",[s._v("只有 admin 用户拥有最高权限，比如进行 Jenkins 的系统设置。")]),s._v(" "),a("li",[s._v("Jenkins 只能以 Job 为单位划分权限，因此应该给一个项目开发、测试、正式环境的构建任务分别创建 Job ，而不是通过构建参数选择它们。\n"),a("ul",[a("li",[s._v("虽然这样会产生很多 Job ，但 Job 之间可以相互调用。")])])]),s._v(" "),a("li",[s._v("给每个或每组 Job 创建两种项目角色，按需要分配给各个用户。\n"),a("ul",[a("li",[a("code",[s._v("*_user")]),s._v(" ：只是使用该 Job ，拥有 Job 的 Build、Cancel、Read 权限。")]),s._v(" "),a("li",[a("code",[s._v("*_editor")]),s._v(" ：允许编辑该 Job ，拥有大部分权限。")])])])]),s._v(" "),a("h3",{attrs:{id:"插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[s._v("#")]),s._v(" 插件")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("Manage Jenkins -> Manage Plugins")]),s._v(" 页面可以管理 Jenkins 的插件。")]),s._v(" "),a("ul",[a("li",[s._v("安装、卸载插件时都要手动重启 Jenkins 才会生效，甚至修改了插件的配置之后可能也不会立即生效。")])]),s._v(" "),a("p",[s._v("常用插件：")]),s._v(" "),a("ul",[a("li",[s._v("Localization: Chinese (Simplified)\n"),a("ul",[a("li",[s._v("用于对 Jenkins 的页面进行汉化。")])])]),s._v(" "),a("li",[s._v("Blue Ocean\n"),a("ul",[a("li",[s._v("提供了一个更美观的操作页面，但功能较少。")])])]),s._v(" "),a("li",[s._v("Extended Choice Parameter\n"),a("ul",[a("li",[s._v("提供了单选框、复选框、单选按钮、多选按钮类型的输入参数。")])])]),s._v(" "),a("li",[s._v("Generic Webhook Trigger\n"),a("ul",[a("li",[s._v("支持以 webhook 的方式触发 Jenkins 的 Job ，需要在 Job 的配置页面定义。通过 token 指定 Job ，可以通过请求字符串或 POST body 输入参数（区分大小写），如下："),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" http://10.0.0.1:8080/generic-webhook-trigger/invoke?token"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Sqeuu90VF0TE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ACTION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])])]),s._v(" "),a("li",[s._v("Email Extension Plugin\n"),a("ul",[a("li",[s._v("支持 Jenkins 发送邮件给用户。")]),s._v(" "),a("li",[s._v("Jenkins 自带的邮件通知功能比较简陋，不推荐使用。")])])]),s._v(" "),a("li",[s._v("Job Configuration History\n"),a("ul",[a("li",[s._v("用于记录各个 Job 以及系统配置的变更历史。")]),s._v(" "),a("li",[s._v("原理：将每次修改后的 XML 配置文件保存一个副本到 jenkins_home/config-history/ 目录下。")]),s._v(" "),a("li",[s._v("建议在 Jenkins 系统管理页面，限制该插件保留变更历史的数量。")])])]),s._v(" "),a("li",[s._v("Folder Properties\n"),a("ul",[a("li",[s._v("用于在 Folder 中定义一些环境变量，称为属性，供其下的 Job 调用。")]),s._v(" "),a("li",[s._v("需要在 Pipeline 的 options 中加入 withFolderProperties() ，才会在 stages 阶段载入 Folder 变量。")])])])]),s._v(" "),a("h2",{attrs:{id:"♢-jenkinsapi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#♢-jenkinsapi"}},[s._v("#")]),s._v(" ♢ jenkinsapi")]),s._v(" "),a("p",[s._v("：Python 的第三方库，用于通过 HTTP 协议调用 Jenkins 的 API 。")]),s._v(" "),a("ul",[a("li",[s._v("安装："),a("code",[s._v("pip install jenkinsapi")])]),s._v(" "),a("li",[a("a",{attrs:{href:"https://jenkinsapi.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1)])]),s._v(" "),a("h3",{attrs:{id:"例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例"}},[s._v("#")]),s._v(" 例")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("创建客户端：")]),s._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" jenkinsapi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jenkins "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Jenkins\n\njk "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Jenkins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://10.0.0.1:8080'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" useCrumb"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("Jenkins 要求在 POST 请求中包含 Crumb 参数，避免 CSRF 攻击")])])]),s._v(" "),a("li",[a("p",[s._v("查询 job ：")]),s._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[s._v("job_names "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" jk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回一个包含所有 job 名字的列表")]),s._v("\njk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get_jobs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回一个可迭代对象，每次迭代返回一个二元组（job 名字，job 对象）")]),s._v("\n\njob "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" jk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据名字，获取指定的 job 对象，如果不存在则抛出异常")]),s._v("\njob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("url                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回 job 的 URL")]),s._v("\njk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("delete_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除一个 job")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("job 的配置：")]),s._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[s._v("xml "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导出 job 的 XML 配置")]),s._v("\njob "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" jk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("create_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("jobname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" xml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建一个 job")]),s._v("\njob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("update_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("xml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改 job 的 XML 配置")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("job 的构建：")]),s._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[s._v("jk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("build_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test_job'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" params"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tag'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'v1.0.0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建一个 job（按需要发送参数）")]),s._v("\n\nb "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get_build"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回指定编号的 build 对象")]),s._v("\nb "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get_last_build"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回最后一次构建的 build 对象")]),s._v("\njob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get_next_build_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回下一次构建的编号（如果为 1 则说明还没有构建）")]),s._v("\n\nb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回这次构建所属 job 的名字")]),s._v("\nb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回这次构建的编号")]),s._v("\nb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get_params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回一个字典，包含这次构建的所有参数")]),s._v("\nb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止构建，如果成功停止则返回 True")]),s._v("\nb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("is_running"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果这次构建正在运行，则返回 True")]),s._v("\nb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get_status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回这次构建的结果，可能是 SUCCESS、FAILURE、ABORTED 等状态，如果仍在构建则返回 None")]),s._v("\nb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get_console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回这次构建的控制台 stdout")]),s._v("\nb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get_timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("strftime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%Y/%m/%d-%H:%M:%S'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回开始构建的时间")]),s._v("\nb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get_duration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("total_seconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回这次构建的耗时，如果仍在构建则返回 0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])])])])}),[],!1,null,null,null);n.default=e.exports}}]);