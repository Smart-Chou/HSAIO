(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{697:function(s,t,n){"use strict";n.r(t);var a=n(1),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"zipkin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zipkin"}},[s._v("#")]),s._v(" Zipkin")]),s._v(" "),n("p",[s._v("：一个 Web 服务器，用于分布式链路跟踪。")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/openzipkin/zipkin/blob/master/zipkin-server/README.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),n("OutboundLink")],1)]),s._v(" "),n("li",[s._v("由 Twitter 公司开源，采用 Java 开发。")]),s._v(" "),n("li",[s._v("提供了 Restful API 和 Web UI 。")])]),s._v(" "),n("h2",{attrs:{id:"部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),n("ul",[n("li",[s._v("用 docker-compose 部署："),n("div",{staticClass:"language-yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("zipkin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" zipkin\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" openzipkin/zipkin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.20")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" unless"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("stopped\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# QUERY_PORT: 9411")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# QUERY_TIMEOUT: 11s              # 查询的超时时间，设置为 0 则不限制")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# QUERY_LOG_LEVEL: INFO")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# COLLECTOR_SAMPLE_RATE: 1.0      # 采样率，作用于全局。默认为 1.0 ，表示 100%")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("SELF_TRACING_ENABLED")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否启用 Zipkin 的自身跟踪，默认为 false")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("SELF_TRACING_SAMPLE_RATE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.001")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自身跟踪的采样率")]),s._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("STORAGE_TYPE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" elasticsearch       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 存储后端的类型，默认为 mem ，存储在内存中")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ES_HOSTS")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//10.0.0.1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ES_USERNAME:")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ES_PASSWORD:")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ES_INDEX: zipkin                # 索引名的前缀，实际创建的索引名会加上日期后缀，比如 zipkin:span-2021-01-01")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ES_INDEX_SHARDS: 5")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ES_INDEX_REPLICAS: 0")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ES_ENSURE_TEMPLATES: true       # 是否自动创建索引模板")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 9411"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9411")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("denpendencies")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("                        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该容器需要每天执行一次")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" zipkin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("dependencies\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" openzipkin/zipkin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("dependencies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.4")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("entrypoint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /bin/sh\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("c\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("zipkin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("dependencies `date "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ud yesterday +%F`\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("STORAGE_TYPE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" elasticsearch\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ES_HOSTS")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//10.0.0.1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ES_NODES_WAN_ONLY")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否只使用 ES_HOSTS 中列出的 ES 地址。默认为 false ，会连接本机的 9200 端口")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br")])]),n("ul",[n("li",[s._v("Zipkin 的 v2.21 版本更换了 UI ，并且支持的 ES 版本从 v6 改为 v7 。")])])])]),s._v(" "),n("h2",{attrs:{id:"原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("运行流程：")]),s._v(" "),n("ol",[n("li",[s._v("用户发出一个请求。")]),s._v(" "),n("li",[s._v("业务系统收到请求，依次传递给前端、后端多个服务处理。每个服务在处理时，都将调用记录发送到 Zipkin 。")]),s._v(" "),n("li",[s._v("Zipkin 可以实时跟踪请求的调用情况，进行树形图分析。")])])]),s._v(" "),n("li",[n("p",[s._v("Zipkin 为每个调用链路分配一个全局唯一的 traceId ，对应一个树形图。")]),s._v(" "),n("ul",[n("li",[s._v("为链路中中的每个请求分配一个 spanId ，对应树形图中的一个节点。")]),s._v(" "),n("li",[s._v("支持给服务器、客户端分别设置采样率。")])])]),s._v(" "),n("li",[n("p",[s._v("Zipkin 提供了多种编程语言的客户端，供业务进程调用。")])]),s._v(" "),n("li",[n("p",[s._v("业务进程将数据发送到 Zipkin 时，负责发送、接收的模块分别称为 Reporter、Collector 。")]),s._v(" "),n("ul",[n("li",[s._v("Reporter 有几种通信方式可选：\n"),n("ul",[n("li",[s._v("HTTP ：默认方式。")]),s._v(" "),n("li",[s._v("Kafka ：适合传输大量数据。")]),s._v(" "),n("li",[s._v("Scribe ：用于收集日志。")])])])])]),s._v(" "),n("li",[n("p",[s._v("Zipkin 默认将数据存储在内存中，没有持久化保存。并且默认最多存储 "),n("code",[s._v("MEM_MAX_SPANS=500000")]),s._v(" 条记录，超过则删除旧记录。")]),s._v(" "),n("ul",[n("li",[s._v("可以采用 Cassandra、ES、MySQL 等外部存储后端。")])])]),s._v(" "),n("li",[n("p",[s._v("Zipkin 默认每天执行一个 Spark Job ，绘制当天（UTC 时区）的 dependencies 依赖图。")]),s._v(" "),n("ul",[n("li",[s._v("采用外部存储后端时，不会自动执行该 Job 。用户可以主动执行："),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("java -jar zipkin-dependencies.jar "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-01-02\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("执行该 jar 包时，默认处理今天的数据，也可以传入指定的日期。")]),s._v(" "),n("li",[s._v("其它配置参数通过环境变量传入。")])])])])])]),s._v(" "),n("h2",{attrs:{id:"♢-py-zipkin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#♢-py-zipkin"}},[s._v("#")]),s._v(" ♢ py-zipkin")]),s._v(" "),n("p",[s._v("：Python 的第三方库，用作 Zipkin 客户端。")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/Yelp/py_zipkin",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub"),n("OutboundLink")],1)]),s._v(" "),n("li",[s._v("安装："),n("code",[s._v("pip install py-zipkin")])]),s._v(" "),n("li",[s._v("例："),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" py_zipkin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("zipkin "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" zipkin_span\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自定义一个函数，用于发送编码后的 span 数据到 Zipkin")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("http_transport")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("encoded_span"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    zipkin_url "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://10.0.0.1:9411/api/v1/spans"')]),s._v("\n    headers "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"application/x-thrift"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    requests"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("post"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("zipkin_url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("encoded_span"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" headers"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在业务代码中，采集 span 数据")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("func1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" zipkin_span"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        service_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test_service'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        span_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test_span'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        transport_handler"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http_transport"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        sample_rate"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 采样率，取值为 0.0 ~ 100.0")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);