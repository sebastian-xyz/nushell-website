(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{783:function(t,a,s){"use strict";s.r(a);var e=s(35),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "),s("code",[t._v(t._s(t.$frontmatter.title))])]),t._v(" "),s("div",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.$frontmatter.usage))]),t._v(" "),s("h2",{attrs:{id:"signature"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#signature"}},[t._v("#")]),t._v(" Signature")]),t._v(" "),s("p",[s("code",[t._v("> path dirname --columns --replace --num-levels")])]),t._v(" "),s("h2",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("--columns {table}")]),t._v(": Optionally operate by column path")]),t._v(" "),s("li",[s("code",[t._v("--replace {string}")]),t._v(": Return original path with dirname replaced by this string")]),t._v(" "),s("li",[s("code",[t._v("--num-levels {int}")]),t._v(": Number of directories to walk up")])]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("p",[t._v("Get dirname of a path")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home/joe/code/test.txt'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),t._v("\n")])])]),s("p",[t._v("Get dirname of a path in a column")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("expand")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),t._v(" -c "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("Walk up two levels")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home/joe/code/test.txt'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),t._v(" -n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])]),s("p",[t._v("Replace the part that would be returned with a custom path")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home/joe/code/test.txt'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),t._v(" -n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" -r /home/viking\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);