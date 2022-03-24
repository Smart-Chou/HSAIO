(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{1006:function(v,_,t){"use strict";t.r(_);var a=t(1),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"六大原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六大原则"}},[v._v("#")]),v._v(" 六大原则")]),v._v(" "),t("h2",{attrs:{id:"目的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目的"}},[v._v("#")]),v._v(" 目的")]),v._v(" "),t("p",[v._v("编写软件过程中，程序员面临着来自"),t("code",[v._v("耦合性")]),v._v("，"),t("code",[v._v("内聚性")]),v._v("以及"),t("code",[v._v("可维护性，可扩展性，重用性，灵活性")]),v._v("等多方面的挑战，设计模式是为了让程序(软件)，具有更好")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("提示")]),v._v(" "),t("ol",[t("li",[v._v("代码重用性 (即：相同功能的代码，不用多次编写)")]),v._v(" "),t("li",[v._v("可读性 (即：编程规范性, 便于其他程序员的阅读和理解)")]),v._v(" "),t("li",[v._v("可扩展性 (即：当需要增加新的功能时，非常的方便，称为可维护)")]),v._v(" "),t("li",[v._v("可靠性 (即：当我们增加新的功能后，对原来的功能没有影响)")]),v._v(" "),t("li",[v._v("使程序呈现高内聚，低耦合的特性")])])]),v._v(" "),t("h2",{attrs:{id:"六大原则-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六大原则-2"}},[v._v("#")]),v._v(" 六大原则")]),v._v(" "),t("p",[v._v("设计模式原则，其实就是"),t("code",[v._v("程序员在编程时，应当遵守的原则")]),v._v("，也是各种"),t("code",[v._v("设计模式的基础")]),v._v("(即：设计模式为什么这样设计的依据) 。")]),v._v(" "),t("h3",{attrs:{id:"单一职责原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单一职责原则"}},[v._v("#")]),v._v(" 单一职责原则")]),v._v(" "),t("h4",{attrs:{id:"基本介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本介绍"}},[v._v("#")]),v._v(" 基本介绍")]),v._v(" "),t("p",[v._v("对类来说的， 即"),t("code",[v._v("一个类应该只负责一项职责")]),v._v("。")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("细节说明")]),v._v(" "),t("ol",[t("li",[v._v("降低类的复杂度，一个类只负责一项职责。")]),v._v(" "),t("li",[v._v("提高类的可读性，可维护性。")]),v._v(" "),t("li",[v._v("降低变更引起的风险。")]),v._v(" "),t("li",[v._v("通常情况下，我们应当遵守单一职责原则，只有逻辑足够简单，才可以在代码级违反单一职责原则；只有类中方法数量足够少，可以在方法级别保持单一职责原则。")])])]),v._v(" "),t("h3",{attrs:{id:"接口隔离原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接口隔离原则"}},[v._v("#")]),v._v(" 接口隔离原则")]),v._v(" "),t("h4",{attrs:{id:"基本介绍-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本介绍-2"}},[v._v("#")]),v._v(" 基本介绍")]),v._v(" "),t("p",[v._v("客户端不应该依赖它不需要的接口，即"),t("code",[v._v("一个类对另一个类的依赖应该建立在最小的接口上")]),v._v("。")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("细节说明")]),v._v(" "),t("ol",[t("li",[v._v("存在多个类通过接口依赖另一个类，若该接口对这些类来说不是最小接口，则需要根据实际情况对接口进行拆分。")]),v._v(" "),t("li",[v._v("不拆分的话，就必须去实现他们不需要的方法，会导致代码很冗余。")])])]),v._v(" "),t("h3",{attrs:{id:"依赖倒转原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖倒转原则"}},[v._v("#")]),v._v(" 依赖倒转原则")]),v._v(" "),t("h4",{attrs:{id:"基本介绍-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本介绍-3"}},[v._v("#")]),v._v(" 基本介绍")]),v._v(" "),t("p",[v._v("依赖倒转原则是指：")]),v._v(" "),t("ol",[t("li",[v._v("高层模块不应该依赖低层模块，二者都应该依赖其抽象。")]),v._v(" "),t("li",[v._v("抽象不应该依赖细节，细节应该依赖抽象。")]),v._v(" "),t("li",[v._v("依赖倒转(倒置)的中心思想是"),t("code",[v._v("面向接口编程")]),v._v("。")]),v._v(" "),t("li",[v._v("依赖倒转原则是基于这样的设计理念：相对于细节的多变性，抽象的东西要稳定的多。以抽象为基础搭建的架构比以细节为基础的架构要稳定的多。在 java 中，抽象指的是接口或抽象类，细节就是具体的实现类。")]),v._v(" "),t("li",[v._v("使用"),t("code",[v._v("接口或抽象类")]),v._v("的目的是制定好"),t("code",[v._v("规范")]),v._v("，而不涉及任何具体的操作，把展现细节的任务交给他们的实现类去完成。")])]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("细节说明")]),v._v(" "),t("ol",[t("li",[v._v("低层模块尽量都要有抽象类或接口，或者两者都有，程序稳定性更好。")]),v._v(" "),t("li",[v._v("变量的声明类型尽量是"),t("code",[v._v("抽象类或接口")]),v._v(", 这样我们的变量引用和实际对象间，就存在一个"),t("code",[v._v("缓冲层")]),v._v("，利于程序扩展和优化。")]),v._v(" "),t("li",[v._v("继承时遵循"),t("code",[v._v("里氏替换原则")]),v._v("。")])])]),v._v(" "),t("h3",{attrs:{id:"里氏替换原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#里氏替换原则"}},[v._v("#")]),v._v(" 里氏替换原则")]),v._v(" "),t("h4",{attrs:{id:"思考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思考"}},[v._v("#")]),v._v(" 思考")]),v._v(" "),t("ol",[t("li",[v._v("继承包含这样一层含义：父类中凡是已经实现好的方法，实际上是在设定规范和契约，虽然它不强制要求所有的子类必须遵循这些契约，但是如果子类对这些已经实现的方法任意修改，就会对整个继承体系造成破坏。")]),v._v(" "),t("li",[v._v("继承在给程序设计带来便利的同时，也带来了弊端。比如使用继承会给程序带来"),t("code",[v._v("侵入性")]),v._v("，程序的可移植性降低，增加对象间的耦合性，如果一个类被其他的类所继承，则当这个类需要修改时，必须考虑到所有的子类，并且父类修改后，所有涉及到子类的功能都有可能产生故障。")]),v._v(" "),t("li",[v._v("问题提出： 在编程中，如何正确的使用继承? =>"),t("code",[v._v("里氏替换原则")]),v._v("。")])]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("细节说明")]),v._v(" "),t("ol",[t("li",[v._v("在使用继承时，遵循里氏替换原则，所有引用基类的地方必须能透明地使用其子类的对象。换句话说，在"),t("code",[v._v("子类中尽量不要重写父类的方法。")])]),v._v(" "),t("li",[v._v("里氏替换原则告诉我们，继承实际上让两个类耦合性增强了，在适当的情况下，可以通过"),t("code",[v._v("聚合、组合、依赖")]),v._v("来解决问题。")])])]),v._v(" "),t("h3",{attrs:{id:"开闭原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开闭原则"}},[v._v("#")]),v._v(" 开闭原则")]),v._v(" "),t("h4",{attrs:{id:"基本介绍-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本介绍-4"}},[v._v("#")]),v._v(" 基本介绍")]),v._v(" "),t("ol",[t("li",[v._v("开闭原则是编程中"),t("code",[v._v("最基础、最重要")]),v._v("的设计原则。")]),v._v(" "),t("li",[v._v("一个软件实体如类，模块和函数应该"),t("code",[v._v("对扩展开放( 对提供方)")]),v._v("，对"),t("code",[v._v("修改关闭( 对使用方)")]),v._v("。用抽象构建框架，用实现扩展细节。")]),v._v(" "),t("li",[v._v("当软件需要变化时，尽量"),t("code",[v._v("通过扩展软件")]),v._v("实体的行为来实现变化，而不是 通过修改已有的代码来实现变化。")]),v._v(" "),t("li",[v._v("编程中遵循其它原则，以及使用设计模式的目的就是遵循开闭原则。")])]),v._v(" "),t("h3",{attrs:{id:"迪米特法则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#迪米特法则"}},[v._v("#")]),v._v(" 迪米特法则")]),v._v(" "),t("h4",{attrs:{id:"基本介绍-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本介绍-5"}},[v._v("#")]),v._v(" 基本介绍")]),v._v(" "),t("ol",[t("li",[v._v("一个对象应该对其他对象保持最少的了解。")]),v._v(" "),t("li",[v._v("类与类关系越密切，耦合度越大。")]),v._v(" "),t("li",[v._v("迪米特法则又叫"),t("code",[v._v("最少知道原则")]),v._v("，即一个类对自己依赖的类知道的越少越好。也就是说，对于被依赖的类不管多么复杂，都尽量将逻辑封装在类的内部。对外除了提供的 public 方法，不对外泄露任何信息。")])]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("细节说明")]),v._v(" "),t("ol",[t("li",[v._v("迪米特法则的核心是"),t("code",[v._v("降低类之间的耦合。")])]),v._v(" "),t("li",[v._v("但是注意：由于每个类都减少了不必要的依赖，因此迪米特法则只是要求降低类间(对象间)耦合关系， 并不是要求完全没有依赖关系。")])])]),v._v(" "),t("h2",{attrs:{id:"核心思想"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#核心思想"}},[v._v("#")]),v._v(" 核心思想")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("提示")]),v._v(" "),t("ol",[t("li",[v._v("找出应用中可能需要变化之处，把它们独立出来，不要和那些不需要变化的代码混在一起。")]),v._v(" "),t("li",[v._v("针对接口编程，而不是针对实现编程。")]),v._v(" "),t("li",[v._v("为了交互对象之间的"),t("code",[v._v("松耦合设计而努力")]),v._v("。")])])])])}),[],!1,null,null,null);_.default=s.exports}}]);