(window.webpackJsonp=window.webpackJsonp||[]).push([[393],{862:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"访问控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问控制"}},[s._v("#")]),s._v(" 访问控制")]),s._v(" "),t("h2",{attrs:{id:"关于拒绝访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于拒绝访问"}},[s._v("#")]),s._v(" 关于拒绝访问")]),s._v(" "),t("h3",{attrs:{id:"allow-、deny"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#allow-、deny"}},[s._v("#")]),s._v(" allow 、deny")]),s._v(" "),t("p",[s._v("：允许、禁止某些 IP 地址的访问。")]),s._v(" "),t("ul",[t("li",[s._v("可用范围：http、server、location、limit_except")]),s._v(" "),t("li",[s._v("例："),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("deny    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止一个 IP")]),s._v("\nallow   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.0/24"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许一个网段")]),s._v("\ndeny    all"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止所有 IP")]),s._v("\nallow   all"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[s._v("收到客户端的 HTTP 请求时，Nginx 会从上到下检查访问规则，采用第一条与客户端 IP 匹配的规则。")]),s._v(" "),t("li",[s._v("如果客户端被禁止访问，则返回响应报文："),t("code",[s._v("403 Forbidden")])])]),s._v(" "),t("h3",{attrs:{id:"auth-basic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auth-basic"}},[s._v("#")]),s._v(" auth_basic")]),s._v(" "),t("p",[s._v("：用于启用 HTTP Basic Auth 。")]),s._v(" "),t("ul",[t("li",[s._v("可用范围：http、server、location")]),s._v(" "),t("li",[s._v("例："),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("auth_basic              "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 realm 。默认为 off ，禁用认证")]),s._v("\nauth_basic_user_file    /etc/nginx/passwd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用哪个密码文件")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("密码文件用于保存一组用户名、哈希密码，可通过 htpasswd 命令生成。")])])])]),s._v(" "),t("h3",{attrs:{id:"auth-delay"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auth-delay"}},[s._v("#")]),s._v(" auth_delay")]),s._v(" "),t("p",[s._v("：当客户端认证失败时，延迟一段时间再作出响应。")]),s._v(" "),t("ul",[t("li",[s._v("可用范围：http、server、location")]),s._v(" "),t("li",[s._v("默认值："),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("auth_delay 0s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[s._v("可以与 auth_basic 等认证措施搭配使用，避免暴力破解，不过客户端依然会保持 TCP 连接，占用资源。")])]),s._v(" "),t("h3",{attrs:{id:"limit-except"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limit-except"}},[s._v("#")]),s._v(" limit_except")]),s._v(" "),t("p",[s._v("：只允许接收指定的 HTTP 请求方法，对其它方法做出限制（通过 deny 限制）。")]),s._v(" "),t("ul",[t("li",[s._v("可用范围：location")]),s._v(" "),t("li",[s._v("例："),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("location / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    limit_except GET POST "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        deny    all"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])]),s._v(" "),t("li",[s._v("允许 GET 方法时也会允许 HEAD 方法。")])]),s._v(" "),t("h3",{attrs:{id:"satisfy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#satisfy"}},[s._v("#")]),s._v(" satisfy")]),s._v(" "),t("p",[s._v("：如果 ngx_http_access_module、ngx_http_auth_basic_module、ngx_http_auth_request_module、ngx_http_auth_jwt_module 模块都允许访问（或任一允许），则最终允许访问。")]),s._v(" "),t("ul",[t("li",[s._v("可用范围：http、server、location")]),s._v(" "),t("li",[s._v("语法："),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("satisfy all "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" any"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[s._v("默认值："),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("satisfy all"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"关于限流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于限流"}},[s._v("#")]),s._v(" 关于限流")]),s._v(" "),t("h3",{attrs:{id:"limit-rate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limit-rate"}},[s._v("#")]),s._v(" limit_rate")]),s._v(" "),t("p",[s._v("：用于限制响应报文的传输速率，单位为 Bytes/s 。")]),s._v(" "),t("ul",[t("li",[s._v("可用范围：http、server、location")]),s._v(" "),t("li",[s._v("例："),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("location /www/ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    limit_rate  10k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[s._v("默认值为 0 ，表示不限制。")])]),s._v(" "),t("h3",{attrs:{id:"limit-req"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limit-req"}},[s._v("#")]),s._v(" limit_req")]),s._v(" "),t("p",[s._v("：用于限制客户端的请求数。")]),s._v(" "),t("ul",[t("li",[s._v("可用范围：http、server、location")]),s._v(" "),t("li",[s._v("例："),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("http "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建一个 zone ，以 binary_remote_addr 作为限流的 key")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# zone  ：创建一个指定大小的共享内存区域，用于记录 key 信息")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rate  ：限制速率。例如 10r/s 表示每秒 10 个请求，10r/m 表示每分钟 10 个请求")]),s._v("\n    limit_req_zone "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$binary_remote_addr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("zone")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("perip:10m "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rate")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("10r/s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建一个 zone ，以 server_name 作为限流的 key")]),s._v("\n    limit_req_zone "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("zone")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("perserver:10m "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rate")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("100r/s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        location / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            proxy_pass http://10.0.0.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            limit_req "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("zone")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("perip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 采用 zone ，限制每个 IP 地址的请求数")]),s._v("\n            limit_req "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("zone")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("perserver"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# burst 队列的长度默认为 0 ，启用它有利于处理客户端的突发大量请求")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# limit_req zone=perip burst=20 nodelay;")]),s._v("\n\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# limit_req_status 503;")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# limit_req_log_level error;")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("ul",[t("li",[s._v("rate 不支持小数，且实际工作时会转换成每 100ms 的平均阈值，不能准确限制。\n"),t("ul",[t("li",[s._v("例如 rate=10r/s 时，实际限制大概为 1 r/100ms 。")]),s._v(" "),t("li",[s._v("例如 rate=1r/m 时，在接收一个请求之后的 1 min 内，拒绝新请求。")])])]),s._v(" "),t("li",[s._v("limit_req 采用漏斗算法（leaky bucket）：\n"),t("ul",[t("li",[s._v("每 100ms 为一个处理周期。如果当前周期内，收到的请求数超过 rate 限制，则将请求放入称为 burst 的 FIFO 队列中。\n"),t("ul",[t("li",[s._v("每隔一个周期，从队列中取出请求，正常处理。")]),s._v(" "),t("li",[s._v("如果队列溢出，则拒绝新请求：返回 limit_req_status 状态码，并记录报错日志："),t("code",[s._v('limiting requests, excess 0.340 by zone "perip"')]),s._v(" ，其中 excess = 根据当前请求估测的每毫秒请求数 - 平均每毫秒允许的 rate 。")])])]),s._v(" "),t("li",[s._v("启用 nodelay 策略时，会将超过 rate 限制的请求立即处理，同时将 burst 队列中相应数量的槽位标记为已占用。每隔一个周期，尝试释放一次槽位。")])])]),s._v(" "),t("li",[s._v("以 binary_remote_addr 作为限流的 key 时，每个 key 需要 128bytes 来存储状态信息，因此 10MB 内存可以记录 8W 个 key。\n"),t("ul",[t("li",[s._v("每次记录一个新 key 时，会尝试删除两个最近 60s 未使用的 key 。")]),s._v(" "),t("li",[s._v("如果 zone 内存耗尽，也会拒绝新请求。")])])])])])]),s._v(" "),t("h3",{attrs:{id:"limit-conn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limit-conn"}},[s._v("#")]),s._v(" limit_conn")]),s._v(" "),t("p",[s._v("：用于限制并发连接数。")]),s._v(" "),t("ul",[t("li",[s._v("可用范围：http、server、location"),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("http "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    limit_conn_zone "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$binary_remote_addr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("zone")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("perip:10m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    limit_conn_zone "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("zone")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("perserver:10m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        location / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            proxy_pass http://10.0.0.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            limit_conn perip "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 采用 zone ，限制每个 IP 地址的并发连接数")]),s._v("\n            limit_conn perserver "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# limit_conn_status 503;")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# limit_conn_log_level error;")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("ul",[t("li",[s._v("当 Nginx 读取完请求的 Headers 之后，才会将该请求计入并发连接数。")]),s._v(" "),t("li",[s._v("以 binary_remote_addr 作为限流的 key 时，每个 key 需要 64bytes 来存储状态信息，因此 10MB 内存可以记录 16W 个 key。")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);