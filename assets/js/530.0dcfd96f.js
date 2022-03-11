(window.webpackJsonp=window.webpackJsonp||[]).push([[530],{1004:function(s,a,n){"use strict";n.r(a);var t=n(35),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("Append a row to the table.")]),s._v(" "),n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),n("p",[s._v("Given the following text file "),n("code",[s._v("cities.txt")]),s._v(" containing cities:")]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("Canberra\nLondon\nNairobi\nWashington\n")])])]),n("p",[s._v("And getting back a Nu table:")]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" cities.txt "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" lines\n───┬────────────\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ Canberra\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ London\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ Nairobi\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ Washington\n───┴────────────\n")])])]),n("p",[s._v("Add the city named "),n("code",[s._v("Beijing")]),s._v(" like so:")]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" cities.txt "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" lines "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" append Beijing\n───┬────────────\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ Canberra\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ London\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ Nairobi\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ Washington\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │ Beijing\n───┴────────────\n")])])]),n("p",[s._v("It's not possible to add multiple rows at once, so you'll need to use "),n("code",[s._v("append")]),s._v(" multiple times:")]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" cities.txt "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" lines "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" append Beijing "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" append "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Buenos Aires"')]),s._v("\n───┬──────────────\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ Canberra\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ London\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ Nairobi\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ Washington\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │ Beijing\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" │ Buenos Aires\n───┴──────────────\n")])])]),n("p",[s._v("So far we have been working with a table without a column, which leaves us with plain rows. Let's "),n("code",[s._v("wrap")]),s._v(" the plain rows into a column called "),n("code",[s._v("city")]),s._v(" and save it as a json file called "),n("code",[s._v("cities.json")]),s._v(":")]),s._v(" "),n("p",[s._v("Before we save, let's check how it looks after wrapping:")]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" cities.txt "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" lines "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" wrap city\n───┬────────────\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ city")]),s._v("\n───┼────────────\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ Canberra\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ London\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ Nairobi\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ Washington\n───┴────────────\n")])])]),n("p",[s._v("And save:")]),s._v(" "),n("p",[n("code",[s._v("> open cities.txt | lines | wrap city | save cities.json")])]),s._v(" "),n("p",[s._v("Since we will be working with rows that have a column, appending like before won't quite give us back what we want:")]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" cities.json "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" append Guayaquil\n───┬────────────\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ city")]),s._v("\n───┼────────────\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ Canberra\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ London\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ Nairobi\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ Washington\n───┴────────────\n───┬───────────\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │ Guayaquil\n───┴───────────\n")])])]),n("p",[s._v("We append a row literal directly:")]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" cities.json "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" append "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("city"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Guayaquil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n───┬────────────\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ city")]),s._v("\n───┼────────────\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ Canberra\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ London\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ Nairobi\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ Washington\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │ Guayaquil\n───┴────────────\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);