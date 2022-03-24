(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{1083:function(t,a,r){"use strict";r.r(a);var e=r(1),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("br"),t._v(" "),r("h2",{attrs:{id:"邀请用户加入组织"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#邀请用户加入组织"}},[t._v("#")]),t._v(" 邀请用户加入组织")]),t._v(" "),r("h3",{attrs:{id:"启用-smtp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启用-smtp"}},[t._v("#")]),t._v(" 启用 SMTP")]),t._v(" "),r("p",[t._v("受邀用户将收到一封电子邮件，其中包含一个有效期为 5 天的链接。点击链接后，用户可以选择创建帐户或登录。新​​用户需要创建一个新帐户；被邀请加入新组织的现有用户只需登录。在任一步骤之后，他们将在管理界面中显示为"),r("code",[t._v("已接受")]),t._v("，并在组织管理员确认后将添加到组织。")]),t._v(" "),r("h3",{attrs:{id:"没有启用-smtp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#没有启用-smtp"}},[t._v("#")]),t._v(" 没有启用 SMTP")]),t._v(" "),r("p",[t._v("受邀用户不会收到邀请邮件；相反，所有已注册的用户都将出现在界面中，就好像他们已经接受了邀请一样。组织管理员然后只需要确认他们是合适的组织成员并授予他们访问共享机密的权限。")]),t._v(" "),r("p",[t._v("尚未注册的受邀用户将在组织管理界面中显示为"),r("code",[t._v("已邀请")]),t._v("。同时创建一个邀请记录，允许用户注册，即使"),r("RouterLink",{attrs:{to:"/vaultwarden/Configuration/Disable-registration-of-new-users.html"}},[t._v("禁止新用户注册")]),t._v("。 (除非您"),r("RouterLink",{attrs:{to:"/vaultwarden/Configuration/Disable-invitations.html"}},[t._v("禁用邀请")]),t._v(")他们将在注册后自动变为"),r("code",[t._v("已接受")]),t._v("。从那里组织管理员可以确认他们以授予他们对组织的访问权限。")],1),t._v(" "),r("h2",{attrs:{id:"在未加密的连接上运行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在未加密的连接上运行"}},[t._v("#")]),t._v(" 在未加密的连接上运行")]),t._v(" "),r("p",[t._v("强烈建议通过 HTTPS 运行 Vaultwarden 服务。然而服务器本身虽然 "),r("RouterLink",{attrs:{to:"/vaultwarden/Deployment/Enabling-HTTPS.html"}},[t._v("开启HTTPS")]),t._v(" 并不严格要求这样的设置。这使得在您通常可以信任连接(内部和安全网络、通过 VPN 访问等)的情况下启动服务更容易一些，或者当您想将服务置于 HTTP 代理之后，这将进行加密在代理端。")],1),t._v(" "),r("p",[t._v("如果您使用非常强大的主密码，并且避免在容易受到 MITM 攻击的连接上使用 Web Vault，那么通过 HTTP 运行仍然相当安全，攻击者可以将 javascript 注入您的界面。但是，某些形式的 2FA 在此设置中可能不起作用，并且 "),r("a",{attrs:{href:"https://github.com/bitwarden/web/issues/254",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vault 在 Chrome 中的此配置中不起作用"),r("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);a.default=s.exports}}]);