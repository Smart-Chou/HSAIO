(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{856:function(s,t,r){"use strict";r.r(t);var e=r(1),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"wordpress"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wordpress"}},[s._v("#")]),s._v(" WordPress")]),s._v(" "),r("p",[s._v("：一个 CMS 平台，基于 Php、Mysql ，可以让用户不必编程就设计网站，非常流行。")]),s._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.tutorialspoint.com/wordpress/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),r("OutboundLink")],1)]),s._v(" "),r("li",[s._v("功能丰富，使用门槛难度低。")]),s._v(" "),r("li",[s._v("既可以制作静态网站，也可以制作动态网站。")]),s._v(" "),r("li",[s._v("可以安装 WordPress 服务器，在它的 Web 页面上设计网站。也可以在其"),r("a",{attrs:{href:"https://wordpress.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),r("OutboundLink")],1),s._v("上设计网站。")])]),s._v(" "),r("h2",{attrs:{id:"安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),r("p",[s._v("WP 服务器有 Linux 版、Windows 版，这里在 Linux 上安装它：")]),s._v(" "),r("ol",[r("li",[r("p",[s._v("安装 MySQL 数据库")])]),s._v(" "),r("li",[r("p",[s._v("登录 MySQL 数据库，进行配置：")]),s._v(" "),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[s._v("create user wordpress@"),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%"')]),s._v(" identified by "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"密码"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ncreate database wordpress"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ngrant all on wordpress.* to wordpress@"),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br")])])]),s._v(" "),r("li",[r("p",[s._v("用 docker 安装 WP 服务器，该镜像集成了 php、Apache 环境")]),s._v(" "),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name wordpress -p "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80 wordpress:latest\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])])]),s._v(" "),r("li",[r("p",[s._v("访问 "),r("code",[s._v("http://127.0.0.1")]),s._v(" 即可看到 WP 服务器的初始页面，按照提示进行安装。")])])]),s._v(" "),r("h2",{attrs:{id:"目录结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),r("p",[s._v("WP 服务器的网站根目录默认是/var/www/html 。")]),s._v(" "),r("ul",[r("li",[s._v("将网站文件放到该目录下，即可被访问。")]),s._v(" "),r("li",[s._v("wp-config.php 文件中记录了数据库密码等信息。")])])])}),[],!1,null,null,null);t.default=a.exports}}]);