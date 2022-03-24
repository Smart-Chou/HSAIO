(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{1052:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),a("p",[a("strong",[s._v("使用这些命令风险自负！")]),a("br"),s._v(" "),a("strong",[s._v("在做任何可能破坏整个密码管理的事情之前，请务必创建备份！")])])]),s._v(" "),a("h2",{attrs:{id:"一般的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一般的"}},[s._v("#")]),s._v(" 一般的")]),s._v(" "),a("p",[s._v("Vaultwarden 最初设计时仅使用 SQLite，但当时 MariaDB (MySQL) 和 PostgreSQL 也被添加到组合中。\n对于 SQLite，您不必运行单独的服务器或容器，而对于其他两个，您确实需要运行一些额外的东西。")]),s._v(" "),a("p",[s._v("现在，如果您开始使用 MariaDB 并想回到 SQLite，该怎么办？\n嗯，这是可能的，但是使用以下步骤可能会有一些我们不知道的怪癖。如果您遇到任何奇怪的问题并需要帮助，甚至解决它，请在此处打开新讨论："),a("a",{attrs:{href:"https://github.com/dani-garcia/vaultwarden/discussions",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/dani-garcia/vaultwarden/discussions"),a("OutboundLink")],1),s._v(" 以帮助您和其他人。")]),s._v(" "),a("h2",{attrs:{id:"如何从-mariadb-迁移到-sqlite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何从-mariadb-迁移到-sqlite"}},[s._v("#")]),s._v(" 如何从 MariaDB 迁移到 SQLite")]),s._v(" "),a("p",[s._v("确保您对 SQLite 和 MariaDB 使用相同版本的 Vaultwarden(Docker 或自定义构建)，不要在这些步骤之间更新 Docker 映像。\n要迁移到 SQLite，我们首先需要有一个 SQLite 数据库文件，我们可以用它来传输数据。\n要创建此文件，您需要停止当前的 Vaultwarden 实例，并将其配置为使用 SQLite。\n例如，您可以通过将"),a("code",[s._v("DATABASE_URL")]),s._v("从"),a("code",[s._v("DATABASE_URL=mysql://<vaultwarden_user>:<vaultwarden_pw>@mariadb/vaultwarden")]),s._v("更改为"),a("code",[s._v("DATABASE_URL=/data/db.sqlite3")]),s._v("来实现。 ( "),a("code",[s._v("/data")]),s._v(" 是您使用的 "),a("code",[s._v("-v")]),s._v(" 卷的 Docker 容器内的内部路径)。")]),s._v(" "),a("p",[s._v("更改配置后，启动 Vaultwarden，它应该通过检查以"),a("code",[s._v("Executing migration script ....")]),s._v("开头的行的日志来显示它执行了一些迁移。")]),s._v(" "),a("p",[s._v("现在再次停止 Vaultwarden，以便您可以开始迁移。\n您需要用于 MariaDB 的数据库主机和凭据才能继续。")]),s._v(" "),a("p",[s._v("现在运行以下单行程序并将 "),a("code",[s._v("<dbhost>")]),s._v("、"),a("code",[s._v("<dbuser>")]),s._v(" 和 "),a("code",[s._v("<database>")]),s._v(" 调整为您用于 MariaDB 连接的内容。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysqldump "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --host"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("dbhost"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("dbuser"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --password "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --skip-create-options "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --compatible"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ansi "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --skip-extended-insert "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --compact "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --single-transaction "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --no-create-db "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --no-create-info "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --hex-blob "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --skip-quote-names "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("database"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^INSERT INTO"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"__diesel_schema_migrations"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s#\\\\\"#\"#gm'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -sE "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"s#,0x([^,]*)#,X'\\L"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\1"}},[s._v("\\1")]),s._v("'#gm\"")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mysql-to-sqlite.sql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("系统会提示您输入密码，输入密码并按回车键。")]),s._v(" "),a("p",[s._v("这应该会生成一个文件"),a("code",[s._v("mysql-to-sqlite.sql")]),s._v("来保存你的数据库。\n现在查找 db.sqlite3 文件 Vaultwarden 在您第一次使用 SQLite 作为数据库启动 Vaultwarden 时在上一步中创建的文件。\n复制或移动 "),a("code",[s._v("mysql-to-sqlite.sql")]),s._v("，以便 "),a("code",[s._v("db.sqlite3")]),s._v(" 和导出都在同一目录中。\n现在您可以执行以下操作")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("sqlite3 db_new.sqlite3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" mysql-to-sqlite.sql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这应该已经用转储填充了 SQLite 数据库，您现在可以使用 SQLite 而不是 MySQL 再次启动 Vaultwarden。")])])}),[],!1,null,null,null);t.default=e.exports}}]);