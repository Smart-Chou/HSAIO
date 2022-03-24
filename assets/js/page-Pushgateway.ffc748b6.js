(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{685:function(s,t,a){"use strict";a.r(t);var e=a(1),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"pushgateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pushgateway"}},[s._v("#")]),s._v(" Pushgateway")]),s._v(" "),a("p",[s._v("：一个 Web 服务器，支持第三方推送监控数据到这里并缓存。")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/prometheus/pushgateway",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("Prometheus 只支持主动从 exporter 拉取数据，不支持被 exporter 推送数据。使用 Pushgateway 可以允许 exporter 推送数据到这里，再由 Prometheus 定时拉取。")]),s._v(" "),a("li",[s._v("优点：\n"),a("ul",[a("li",[s._v("解耦了 exporter 与 Prometheus ，允许它们异步工作，允许 exporter 不保持运行。")]),s._v(" "),a("li",[s._v("提供了 Web 页面，可以查看其状态。")])])]),s._v(" "),a("li",[s._v("缺点：\n"),a("ul",[a("li",[s._v("不能控制监控对象生成指标的间隔时间。")]),s._v(" "),a("li",[s._v("只会抓取当前时刻的数据，不会同步历史数据。并且，如果监控对象离线，依然会将最后一次抓取的数据作为当前值。")]),s._v(" "),a("li",[s._v("不能直接判断监控对象是否在线，需要根据 push_time_seconds 进行判断。")])])])]),s._v(" "),a("h2",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),a("ul",[a("li",[s._v("用 docker-compose 部署："),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("pushgateway")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pushgateway\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" prom/pushgateway"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("v1.4.1\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" unless"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("stopped\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# command:")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   - --web.listen-address=:9091")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   - --web.telemetry-path=/metrics")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   - --persistence.file=metrics.bak     # 将指标数据备份到该文件中（默认不会备份，因此重启后会丢失）")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 9091"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9091")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("ul",[a("li",[s._v("在 Prometheus 的配置文件中加入如下配置，使其抓取 Pushgateway ："),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("scrape_configs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("job_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pushgateway\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("honor_labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("static_configs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("targets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 10.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9091")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[s._v("#")]),s._v(" 用法")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("例：推送指标到 Pushgateway")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF"),a("span",{pre:!0,attrs:{class:"token bash punctuation"}},[s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" --data-binary @- http://localhost:9091/metrics/job/pushgateway/instance/10.0.0.1")]),s._v('\n# TYPE test_metric gauge\n# HELP test_metric Just an example.\ntest_metric{name="one"} 42\nEOF')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("Pushgateway 会将收到的指标按 job、instance 的值进行分组。\n"),a("ul",[a("li",[s._v("如果 URL 中不指定 job ，则会报错 404 。")]),s._v(" "),a("li",[s._v('如果 URL 中不指定 instance ，则会默认设置为 instance="" 。')])])]),s._v(" "),a("li",[s._v("指标中：\n"),a("ul",[a("li",[a("code",[s._v("# TYPE <metric_name> <type>")]),s._v(" 行必须存在，用于声明该指标的类型，否则指标会被视作无类型的。")]),s._v(" "),a("li",[a("code",[s._v("# HELP <metric_name> <comment>")]),s._v(" 行不是必要的，用作该指标的注释。")]),s._v(" "),a("li",[s._v("标签的值只能用双引号 \" 作为定界符，不能用单引号 ' 。")]),s._v(" "),a("li",[s._v("每行末尾不能存在空格，否则会被当作最后一个字段。")]),s._v(" "),a("li",[s._v("每行末尾要有换行符，最后一行也需要换行。")])])])])]),s._v(" "),a("li",[a("p",[s._v("推送之后，Pushgateway 会记录以下指标：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("test_metric"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("job"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pushgateway"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("instance")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.0.0.1"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"one"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该 metric 最后一次推送的值")]),s._v("\npush_failure_time_seconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("job"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pushgateway"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("instance")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该组 metric 最后一次失败推送的时间戳")]),s._v("\npush_time_seconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("job"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pushgateway"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("instance")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".5909774528190377e+09 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该组 metric 最后一次成功推送的时间戳")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("重复推送 test_metric 指标时，只会更新这三个指标的值，不会保留旧值。")])])]),s._v(" "),a("h2",{attrs:{id:"http-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-api"}},[s._v("#")]),s._v(" HTTP API")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -X DELETE http://localhost:9091/metrics/job/pushgateway/instance/10.0.0.1      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除某个指标")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);