(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{400:function(t,e,s){},582:function(t,e,s){"use strict";s(400)},613:function(t,e,s){"use strict";s.r(e);var o=s(0);const i={"/":{title:"Hello,Guys！",text:"看看有没有你感兴趣的文章！<br>(*/ω＼*)可以得话，能交换友链吗？😍",button:"友链"}};var n=o.a.extend({name:"V2Notice",data:()=>({visible:!1}),mounted(){const t=sessionStorage.getItem("notice");this.visible="true"!==t},computed:{locale(){return i[this.$localePath]}},methods:{close(){this.visible=!1,sessionStorage.setItem("notice","true")},friends(){window.open("https://codenoob.top/friends.html"),this.close()}}}),l=(s(582),s(1)),a=Object(l.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[t.visible?s("div",{staticClass:"notice-wrapper"},[s("div",{staticClass:"title"},[s("span",[t._v("📢 "+t._s(t.locale.title))]),t._v(" "),s("svg",{staticClass:"icon-close",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.close}},[s("path",{attrs:{d:"M512 34.133a486.4 486.4 0 1 0 486.4 486.4A486.4 486.4 0 0 0 512 34.133zM721.485 666.94l-55.603 55.466-151.518-151.125-151.518 151.117-55.603-55.467L458.76 515.823 307.243 364.715l55.603-55.467 151.518 151.125 151.518-151.116 55.603 55.466-151.518 151.1zm0 0",fill:"currentColor"}})])]),t._v(" "),s("p",{staticClass:"content",domProps:{innerHTML:t._s(t.locale.text)}}),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"footer"},[s("button",{staticClass:"action",domProps:{innerHTML:t._s(t.locale.button)},on:{click:t.friends}})])]):t._e()])}),[],!1,null,"68bdf880",null);e.default=a.exports}}]);