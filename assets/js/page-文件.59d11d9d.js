(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{729:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件"}},[s._v("#")]),s._v(" 文件")]),s._v(" "),a("p",[s._v("Linux 系统中，一切对象都是文件。比如数据、目录、设备、套接字都以文件的形式展示，供用户读写。")]),s._v(" "),a("ul",[a("li",[s._v("目录也是一种文件，属于目录类型，本身占 4 kB 的磁盘空间。\n"),a("ul",[a("li",[s._v("目录文件与目录下的各个文件存在逻辑上的层级关系，但在磁盘中它们是分别存储的文件。")]),s._v(" "),a("li",[s._v("例如用 vim 可以编辑目录文件，显示它包含的所有文件。")])])]),s._v(" "),a("li",[s._v("平时提到的 “文件” 概念比较模糊，有时提到的 “文件” 包括目录文件，有时则不包括。")])]),s._v(" "),a("h2",{attrs:{id:"文件命名规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件命名规则"}},[s._v("#")]),s._v(" 文件命名规则")]),s._v(" "),a("ul",[a("li",[s._v("区分大小写，不能包含正斜杆 / 。\n"),a("ul",[a("li",[s._v("建议只包含 "),a("code",[s._v("[0-9A-Za-z._-]")]),s._v(" 这些常用字符，尽量避免使用特殊字符，以免需要转义，或者与某些软件不兼容。")])])]),s._v(" "),a("li",[s._v("名字以 . 开头的文件是隐藏文件。")]),s._v(" "),a("li",[s._v("每个目录下都有 . 和 .. 两个隐藏文件，指向当前目录和上一级目录。")])]),s._v(" "),a("h2",{attrs:{id:"文件路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件路径"}},[s._v("#")]),s._v(" 文件路径")]),s._v(" "),a("ul",[a("li",[s._v("文件路径有两种写法：\n"),a("ul",[a("li",[s._v("绝对路径（absolute path）\n"),a("ul",[a("li",[s._v("：从根目录 / 开始的路径。例如 "),a("code",[s._v("/proc/tty")]),s._v(" 。")]),s._v(" "),a("li",[s._v("每个文件有且仅有一个绝对路径。")])])]),s._v(" "),a("li",[s._v("相对路径（relative path）\n"),a("ul",[a("li",[s._v("：相对于当前目录的路径，从 . 或 .. 开始。")]),s._v(" "),a("li",[s._v("例如：以 "),a("code",[s._v("/proc/tty")]),s._v(" 为起点的相对路径 "),a("code",[s._v("../sys")]),s._v(" ，对应的绝对路径为 "),a("code",[s._v("/proc/sys")]),s._v(" 。")]),s._v(" "),a("li",[s._v("每个文件可以有任意个相对路径。")])])])])]),s._v(" "),a("li",[s._v("Linux 系统的文件路径以正斜杠 "),a("code",[s._v("/")]),s._v(" 作为分隔符，而反斜杠 "),a("code",[s._v("\\")]),s._v(" 通常用于转义字符。\n"),a("ul",[a("li",[s._v("文件路径中多余的 / 会被忽略。例如，以下几个路径指向同一个目录："),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("/proc/tty\n/proc/tty/\n/proc//tty\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])])])]),s._v(" "),a("h2",{attrs:{id:"文件类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件类型"}},[s._v("#")]),s._v(" 文件类型")]),s._v(" "),a("h3",{attrs:{id:"常用符号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用符号"}},[s._v("#")]),s._v(" 常用符号")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("文件类型")]),s._v(" "),a("th",[s._v("英文名")]),s._v(" "),a("th",[s._v("符号")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("普通文件")]),s._v(" "),a("td",[s._v("regular file")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("目录文件")]),s._v(" "),a("td",[s._v("directory")]),s._v(" "),a("td",[s._v("d")])]),s._v(" "),a("tr",[a("td",[s._v("软链接文件")]),s._v(" "),a("td",[s._v("symbolic link")]),s._v(" "),a("td",[s._v("l")])]),s._v(" "),a("tr",[a("td",[s._v("套接字文件")]),s._v(" "),a("td",[s._v("socket")]),s._v(" "),a("td",[s._v("s")])]),s._v(" "),a("tr",[a("td",[s._v("块设备文件")]),s._v(" "),a("td",[s._v("block special file")]),s._v(" "),a("td",[s._v("b")])]),s._v(" "),a("tr",[a("td",[s._v("字符设备文件")]),s._v(" "),a("td",[s._v("character special file")]),s._v(" "),a("td",[s._v("c")])])])]),s._v(" "),a("h3",{attrs:{id:"链接文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链接文件"}},[s._v("#")]),s._v(" 链接文件")]),s._v(" "),a("p",[s._v("Linux 系统中有两种链接文件（link file）：")]),s._v(" "),a("ul",[a("li",[s._v("硬链接（hard link）\n"),a("ul",[a("li",[s._v("：与目标文件的 inode 编号相同，因此文件内容、大小、文件类型等元数据都相同。")]),s._v(" "),a("li",[s._v("如果文件 B 是文件 A 的硬链接，则删除文件 A 不会影响到文件 B ，但是修改文件 A 会同时修改文件 B ，反之亦然。")]),s._v(" "),a("li",[s._v("不支持给目录创建硬链接，避免出现循环的目录树。")]),s._v(" "),a("li",[s._v("不支持跨磁盘分区创建硬链接，否则会报错 "),a("code",[s._v("Invalid cross-device link")]),s._v(" ，因为每个磁盘分区拥有独立的 inode table 。")])])]),s._v(" "),a("li",[s._v("软链接（soft link）\n"),a("ul",[a("li",[s._v("：又称为符号链接（symbolic link），是一个 2 Bytes 大小的文件，存储着目标文件的绝对路径。")]),s._v(" "),a("li",[s._v("如果文件 B 是文件 A 的软链接，则删除文件 A 之后，文件 B 就指向一个无效的路径。")]),s._v(" "),a("li",[s._v("可以给目录创建软链接，可以跨磁盘分区创建软链接。")])])])]),s._v(" "),a("h3",{attrs:{id:"稀疏文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#稀疏文件"}},[s._v("#")]),s._v(" 稀疏文件")]),s._v(" "),a("p",[s._v("稀疏文件（Sparse file）：文件内容中包含一些全为空字节的数据块。")]),s._v(" "),a("ul",[a("li",[s._v("这些数据块称为空洞（hole），可能有多个，大小不一。")]),s._v(" "),a("li",[s._v("文件系统将稀疏文件写入磁盘时，通常会跳过空洞，只记录非空数据、空洞的位置和大小，从而节省磁盘空间。\n"),a("ul",[a("li",[s._v("文件系统从磁盘读取稀疏文件时，会自动将空洞填充到文件的非空数据中。")]),s._v(" "),a("li",[s._v("因此，用户查看稀疏文件的内容、文件体积时，跟正常文件看起来一样，但它实际占用的磁盘空间小于文件体积。")])])])]),s._v(" "),a("p",[s._v("例：")]),s._v(" "),a("ul",[a("li",[s._v("虚拟机的磁盘在宿主机上通常保存为稀疏文件的形式，可能文件体积有 100G ，但实际只包含 1G 的非空数据。")]),s._v(" "),a("li",[s._v("执行 "),a("code",[s._v("ls -l")]),s._v(" 命令查看的是文件体积（即包含的数据大小）， 执行 "),a("code",[s._v("du")]),s._v(" 命令查看的是文件实际占用的磁盘空间。\n"),a("ul",[a("li",[s._v("即使一个文件只包含 1 Byte 数据，存储时也要占用 1 个 block 。如下："),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@CentOS ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 1 > f1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@CentOS ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls -lh f1")]),s._v("\n-rw-rw-r--. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":41 f1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@CentOS ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# du -h f1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".0K    f1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])]),s._v(" "),a("li",[s._v("即使一个文件体积很大，但占用的磁盘空间可能很小。如下："),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@CentOS ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# truncate f1 -s 10M")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@CentOS ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls -lh f1")]),s._v("\n-rw-rw-r--. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root 10M Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":45 f1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@CentOS ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# du -sh f1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".0K    f1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@CentOS ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# wc -c f1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10485760")]),s._v(" f1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])])]),s._v(" "),a("li",[s._v("假设执行 "),a("code",[s._v("ping localhost >> stdout.log")]),s._v(" ：\n"),a("ul",[a("li",[s._v("用 >> 重定向输出时，会以 O_APPEND 模式打开文件。因此当文件长度被截断时，会自动将写入时的偏移量设置到文件末尾，避免产生稀疏文件。")]),s._v(" "),a("li",[s._v("因此，保存日志文件时，建议使用 >> ，而不是 > ，便于切割日志文件。")])])])]),s._v(" "),a("h2",{attrs:{id:"文件描述符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件描述符"}},[s._v("#")]),s._v(" 文件描述符")]),s._v(" "),a("ul",[a("li",[s._v("每个进程在启动时，会创建一个文件表（file table），用于记录进程打开的所有文件的信息，比如文件的 inode 编号、打开模式、当前偏移量。\n"),a("ul",[a("li",[s._v("每个进程的文件表相互独立，保存在 Linux 内核的内存空间中。")])])]),s._v(" "),a("li",[s._v("每个文件在文件表中的索引序号，称为文件描述符（file descriptor ，fd）。\n"),a("ul",[a("li",[s._v("文件描述符是从 0 开始递增的非负整数，优先分配当前可用的最小值。")])])]),s._v(" "),a("li",[s._v("例如：\n"),a("ul",[a("li",[s._v("当进程打开文件 /tmp/f1 时，会在文件表中增加一条记录，并给该文件分配一个文件描述符 3 。")]),s._v(" "),a("li",[s._v("当进程打开文件之后、进行读取时，如果将文件 /tmp/f1 重命名为 /tmp/f2 ，并不会影响进程的读取操作。因为进程是根据 inode 从磁盘读取数据的。")]),s._v(" "),a("li",[s._v("当进程关闭文件时，会从文件表中删除该条记录，回收其文件描述符。")])])]),s._v(" "),a("li",[s._v("每个进程刚启动时，默认会先打开 stdin、stdout、stderr 三个文件：\n"),a("ul",[a("li",[a("code",[s._v("/dev/stdin")]),s._v(" ：标准输入（默认从终端读取输入），文件描述符为 0 。")]),s._v(" "),a("li",[a("code",[s._v("/dev/stdout")]),s._v(" ：标准输出（默认显示到终端），文件描述符为 1 。")]),s._v(" "),a("li",[a("code",[s._v("/dev/stderr")]),s._v(" ：标准错误（默认显示到终端），文件描述符为 2 。\n因此，之后打开的文件是使用从 3 开始的文件描述符。")])])]),s._v(" "),a("li",[s._v("每个进程使用的文件描述符都会记录在 "),a("code",[s._v("/proc/<PID>/fd/")]),s._v(" 目录下。如下："),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@CentOS ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls -lh /dev/std*")]),s._v("\n/dev/stderr: symbolic "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" to "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("/proc/self/fd/2'   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 标准输入、输出文件都是指向 /proc/self/fd/ 目录的符号链接")]),s._v("\n/dev/stdin:  symbolic "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" to "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("/proc/self/fd/0"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\n/dev/stdout: symbolic link to `/proc/self/fd/1'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@CentOS ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# file /proc/self/fd/*             # /proc/self/fd/ 目录下的文件描述符是指向终端设备的符号链接")]),s._v("\n/proc/self/fd/0:   symbolic "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" to "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("/dev/pts/2'\n/proc/self/fd/1:   symbolic "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" to "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("/dev/pts/2"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\n/proc/self/fd/2:   symbolic link to `/dev/pts/2'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"相关-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关-api"}},[s._v("#")]),s._v(" 相关 API")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.gnu.org/software/libc/manual/html_node/Low_002dLevel-I_002fO.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("相关文档"),a("OutboundLink")],1)])]),s._v(" "),a("h3",{attrs:{id:"打开文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打开文件"}},[s._v("#")]),s._v(" 打开文件")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<fcntl.h>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// #include <sys/types.h>   // 定义了 size_t、time_t、pid_t 等数据类型")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// int creat(const char *pathname, mode_t mode);        // 创建文件，该函数已弃用")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("pathname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" flags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 打开文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("pathname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" flags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("mode_t")]),s._v(" mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 先创建文件，再打开它")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// pathname ：文件路径")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// flags    ：打开模式，是一些二进制标志位")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// mode_t   ：权限模式，比如 S_IRWXU 为 00700 ，S_IRUSR 为 00400")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 函数执行成功时，返回打开的文件描述符")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 函数执行失败时，返回 -1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("ul",[a("li",[s._v("文件的打开模式 flags 可取值："),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("O_RDONLY      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只读")]),s._v("\nO_WRONLY      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只写")]),s._v("\nO_RDWR        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可读可写")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),s._v("以上三种是基本的打开模式，不能同时使用，但可以与以下模式通过或运算符 | 组合使用："),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("O_APPEND      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 追加模式，每次调用 write() 时，自动将偏移量移动到文件末尾（这样便于多个进程同时追加数据到文件中）")]),s._v("\nO_CREAT       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果要打开的文件不存在，则自动创建它")]),s._v("\nO_EXCL        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 与 O_CREAT 一起使用时，如果文件存在，或者为符号链接，则打开失败")]),s._v("\nO_DIRECTORY   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件必须为目录文件，否则打开失败")]),s._v("\nO_NOFOLLOW    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件不能为符号链接，否则打开失败")]),s._v("\nO_NONBLOCK    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 读写文件时，不等获取数据就返回，不会阻塞线程")]),s._v("\nO_NDELAY      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 等价于 O_NONBLOCK")]),s._v("\nO_SYNC        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同步模式，每次调用 write() 时，会阻塞线程直到数据实际写入磁盘")]),s._v("\nO_TRUNC       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果文件存在，且采用可写模式，则将文件长度截断为 0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"读写文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读写文件"}},[s._v("#")]),s._v(" 读写文件")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<unistd.h>")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" fd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 关闭文件描述符")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 函数执行成功时，返回 0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 函数执行成功时，返回 -1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ssize_t")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("read")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" fd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("size_t")]),s._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 从文件中读取数据")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// fd   ：文件描述符")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// buf  ：指向一块内存空间的指针，用作读缓冲。内核会从文件读取数据，写入 buf")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// cout ：想要读取的字节数")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 函数执行成功时，会将读取的数据写入 buf ，并返回实际读取的字节数")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 函数执行失败时，返回 -1")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果返回值为 0 ，则说明没有读取到数据，例如当前偏移量位于文件末尾时")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ssize_t")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" fd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("size_t")]),s._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 写入数据到文件中")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// buf  ：指向一块内存空间的指针，用作写缓冲。内核会从 buf 读取数据，写入文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 函数执行成功时，返回实际写入的字节数")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 函数执行失败时，返回 -1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("off_t")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("lseek")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" fd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("off_t")]),s._v(" offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" whence"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将当前文件偏移量设置为从 whence 开始的 offset 位置处")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// offset ：任意整数，可以为负")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// whence ：一个参照位置，可取值：")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   SEEK_SET   ：文件首部")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   SEEK_END   ：文件尾部")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   SEEK_CUR   ：当前文件偏移量")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("ul",[a("li",[s._v("当前文件偏移量（current file offset ，cfo）：一个非负整数，表示当前读、写的是文件中第几个字节。\n"),a("ul",[a("li",[s._v("cfo 保存在 Linux 内核的内存空间中。")]),s._v(" "),a("li",[s._v("打开一个文件时，cfo 默认为 0 。")]),s._v(" "),a("li",[s._v("每次读、写文件 n 个字节，默认会自动将 cfo 的值加 n ，直到加到文件末尾。因此 cfo 默认不会超过文件长度。")]),s._v(" "),a("li",[s._v("如果调用 lseek() 主动设置 cfo ，超过文件长度，并调用 write() 写入数据，则会自动将 cfo 位置之前的空间用空字节填充，导致文件变成稀疏文件。")])])])]),s._v(" "),a("h3",{attrs:{id:"sendfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sendfile"}},[s._v("#")]),s._v(" sendfile")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<sys/sendfile.h>")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ssize_t")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendfile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" out_fd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" in_fd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("off_t")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("size_t")]),s._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 从一个文件描述符 out_fd 拷贝数据到另一个文件描述符 in_fd ，从 offset 偏移量开始拷贝，最多拷贝 count 个字节")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("sendfile() 是 Linux 系统提供的一种零拷贝技术。\n"),a("ul",[a("li",[s._v("以普通方式拷贝文件内容时，需要调用 read() 拷贝到进程内存空间，再调用 write() 。\n"),a("ul",[a("li",[s._v("而调用 sendfile() 时，不需要拷贝到进程内存空间，直接由内核完成拷贝。")])])]),s._v(" "),a("li",[s._v("例如 HTTP 服务器发送文件时，可以将磁盘文件用 sendfile() 拷贝写入 Socket 文件，提高发送文件的速度。")])])])]),s._v(" "),a("h3",{attrs:{id:"mmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mmap"}},[s._v("#")]),s._v(" mmap")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<sys/mman.h>")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mmap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("size_t")]),s._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" prot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" flags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" fd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("off_t")]),s._v(" offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建映射，返回其内存指针")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// addr   ：用于创建映射区域的虚拟内存地址。为 Null 则自动选择")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// length ：映射区域的大小，只能是内存页大小的整数倍。因此映射小文件时容易浪费内存，更适合映射大文件。")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// fd     ：要映射的目标文件。创建映射之后，关闭文件描述符 fd 并不会取消映射。")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// offset ：从文件的指定偏移量开始映射")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("munmap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("size_t")]),s._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取消映射")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("MMAP ：Memory Mapped File ，内存映射文件。")]),s._v(" "),a("ul",[a("li",[s._v("是指在进程的虚拟内存空间创建一块区域，映射到磁盘中某个文件的部分内容，即将虚拟内存地址映射到磁盘地址。\n"),a("ul",[a("li",[s._v("进程可以像访问一块动态分配的内存空间一样，读写该文件。")]),s._v(" "),a("li",[s._v("当进程读取文件数据时，如果内存中没有该数据，则引发缺页异常，从磁盘的映射地址拷贝文件数据到内存。")]),s._v(" "),a("li",[s._v("当进程修改文件数据之后，内核会每隔一定时间自动将脏页 flush 到磁盘。")])])]),s._v(" "),a("li",[s._v("优点：\n"),a("ul",[a("li",[s._v("在内存中读写文件，速度快很多。")]),s._v(" "),a("li",[s._v("可以实现零拷贝。\n"),a("ul",[a("li",[s._v("用 read()、write() 读写磁盘文件时，需要经过 Buffer 缓冲。而用 MMAP 时，不经过 Buffer 。")])])]),s._v(" "),a("li",[s._v("多个进程可以同时映射同一个文件，类似于共享内存，进行进程间通信。")])])])])]),s._v(" "),a("li",[a("p",[s._v("可以调用 munmap() 取消映射。")]),s._v(" "),a("ul",[a("li",[s._v("进程终止时，也会自动取消映射。")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);