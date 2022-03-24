(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1074:function(s,n,a){"use strict";a.r(n);var t=a(1),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("随着时间的推移，Vaultwarden 日志文件会变得很大。使用 logrotate，我们可以定期轮换日志。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /etc/logrotate.d/bitwarden\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("/var/log/bitwarden/*.log "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Perform logrotation as the bitwarden user and group")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" bitwarden bitwarden\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Rotate daily")]),s._v("\n    daily\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Rotate when the size is bigger than 5MB")]),s._v("\n    size 5M\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Compress old log files")]),s._v("\n    compress\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Keep 4 rotations of log files before removing or mailing to the address specified in a mail directive")]),s._v("\n    rotate "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Truncate the original log file in place after creating a copy")]),s._v("\n    copytruncate\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Don't panic if not found")]),s._v("\n    missingok\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Don't rotate log if file is empty")]),s._v("\n    notifempty\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Add date instaed of number to rotated log file")]),s._v("\n    dateext\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Date format of dateext")]),s._v("\n    dateformat -%Y-%m-%d-%s\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("要在不手动解压缩的情况下查看压缩的日志文件：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("zcat logfile.gz\nzless logfile.gz\nzgrep -i keyword_search logfile.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);