(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{350:function(n,i,a){"use strict";a.r(i);var t=a(7),o=Object(t.a)({},(function(){var n=this,i=n._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[i("h5",{attrs:{id:"一-css过渡"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#一-css过渡"}},[n._v("#")]),n._v(" 一. css过渡")]),n._v(" "),i("ol",[i("li",[n._v("过渡三要素\n"),i("ol",[i("li",[n._v("必须要有属性发生变化")]),n._v(" "),i("li",[n._v("必须告诉系统哪个属性需要执行过渡效果")]),n._v(" "),i("li",[n._v("必须告诉系统过渡效果持续时长")])])]),n._v(" "),i("li",[n._v("过渡触发\n"),i("ol",[i("li",[n._v(":hover 鼠标悬停触发")]),n._v(" "),i("li",[n._v(":active 用户单击元素并按住鼠标时触发")]),n._v(" "),i("li",[n._v(":focus 获得焦点时触发")]),n._v(" "),i("li",[n._v("@media触发 符合媒体查询条件时触发")]),n._v(" "),i("li",[n._v("点击事件 用户点击元素时触发")])])]),n._v(" "),i("li",[n._v("transition-proprety   规定过渡的属性名称\n"),i("ol",[i("li",[n._v("取值:\n"),i("ol",[i("li",[n._v("none 没有属性会获得过渡效果。")]),n._v(" "),i("li",[n._v("all 所有属性都将获得过渡效果。")]),n._v(" "),i("li",[n._v("property 定义应用过渡效果的 CSS 属性名称列表，列表以逗号分隔。")]),n._v(" "),i("li",[n._v("transition-proprety: width, background-color;")])])])])]),n._v(" "),i("li",[n._v("transition-duration\n"),i("ol",[i("li",[n._v("设置过渡的时间\n"),i("ol",[i("li",[n._v("取值: 默认是0")]),n._v(" "),i("li",[n._v("transition-duration: 3s;")])])])])]),n._v(" "),i("li",[n._v("transition-timing-function   设置过渡效果的时间曲线/速度\n"),i("ol",[i("li",[n._v("取值:\n"),i("ol",[i("li",[n._v("linear 规定以相同速度开始至结束的过渡效果")]),n._v(" "),i("li",[n._v("ease 规定慢速开始，然后变快，然后慢速结束的过渡效果")]),n._v(" "),i("li",[n._v("ease-in 规定以慢速开始的过渡效果")]),n._v(" "),i("li",[n._v("ease-out 规定以慢速结束的过渡效果。")]),n._v(" "),i("li",[n._v("ease-in-out 规定以慢速开始和结束的过渡效果")]),n._v(" "),i("li",[n._v("transition-timing-function: linear;")])])])])]),n._v(" "),i("li",[n._v("transitionn-delay 设置过渡时间的等待时长\n"),i("ol",[i("li",[n._v("取值: 默认是0\n"),i("ol",[i("li",[n._v("transition-delay: 2s;")])])])])]),n._v(" "),i("li",[n._v("transition\ntransition是transition-proprety,transition-duration,transition-timing-function,transition-delay的缩写形式,分别表示过渡属性,过渡时间,过渡的速度,过渡的等待时间。\ntransition: width 3s linear 0s, background-color 3s linear 0s;")]),n._v(" "),i("li",[n._v("过渡连写注意点\n1.和分开写一样, 如果想给多个属性添加过渡效果也是用逗号隔开即可\n2.连写的时可以省略后面的两个参数, 因为只要编写了前面的两个参数就已经满足了过渡的三要素\n3.如果多个属性运动的速度/延迟的时间/持续时间都一样, 那么可以简写为\ntransition:all 0s;")])]),n._v(" "),i("h5",{attrs:{id:"二-css动画"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#二-css动画"}},[n._v("#")]),n._v(" 二. css动画")]),n._v(" "),i("ol",[i("li",[n._v("过渡和动画之间的异同\n"),i("ol",[i("li",[n._v("不同点\n过渡必须人为的触发才会执行动画\n动画不需要人为的触发就可以执行动画")]),n._v(" "),i("li",[n._v("相同点\n过渡和动画都是用来给元素添加动画的\n过渡和动画都是系统新增的一些属性\n过渡和动画都需要满足三要素才会有动画效果")])])]),n._v(" "),i("li",[n._v("animation-name 设置动画名称\n通过@keyframes来设置动画序列，序列中每个关键帧描述动画元素在动画序列的特定时间内如何渲染。关键帧使用了一个百分比来表示在动画序列中出现的时间。0%表示动画的初始时间，也可以通过from关键字表示。100%表示动画的结束时间，也可以通过to关键字表示。")])]),n._v(" "),i("p",[n._v("关键帧：")]),n._v(" "),i("div",{staticClass:"language-css extra-class"},[i("pre",{pre:!0,attrs:{class:"language-css"}},[i("code",[i("span",{pre:!0,attrs:{class:"token atrule"}},[i("span",{pre:!0,attrs:{class:"token rule"}},[n._v("@keyframes")]),n._v(" animiationName")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),i("span",{pre:!0,attrs:{class:"token selector"}},[n._v("keyframes-selector")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        css-style"),i("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),i("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n"),i("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])])]),i("p",[n._v("3.animation-duration\n设置动画持续时间\nanimation-duration: 2s;\n4.animation-timing-function\n设置动画执行速度\n取值:\nlinear ease ease-in ease-out ease-in-out\nanimation-timing: linear;\n5.animation-delay\n设置动画等待时长\nanimation-delay: 2s;\n6.animmation-iteration-count\n设置动画播放次数\n取值: n infinite无限播放\nanimation-iteration-counnt:infinite;\n7.animation-direction\n设置动画是否反向播放\nnormal 默认的取值, 执行完一次之后回到起点继续执行下一次\nalternate 往返动画, 执行完一次之后往回执行下一次\nreverse 反向执行\nanimation-direction: alternate;\n8.animation-fill-mode\n动画不播放或者等待时长应用的样式\n取值:\nnone: 不做任何改变\nforwards: 让元素结束状态保持动画最后一帧的样式\nbackwards: 让元素等待状态的时候显示动画第一帧的样式\nboth: 让元素等待状态显示动画第一帧的样式, 让元素结束状态保持动画最后一帧的样式\nanimation-fill-mode:forwards;\n9.animation-play-state\n动画播放是否暂停\n取值:\nrunning: 执行动画\npaused: 暂停动画\nanimation-play-state: paused;\n10.animation\n动画模块连写格式:\nanimation: animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-direction\nanimation: name 2s linear 0s infinite alternate\n11.动画模块连写格式的简写\nanimation:动画名称 动画时长;")])])}),[],!1,null,null,null);i.default=o.exports}}]);