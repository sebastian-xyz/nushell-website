(window.webpackJsonp=window.webpackJsonp||[]).push([[704],{1188:function(s,t,a){"use strict";a.r(t);var e=a(35),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("print sequences of dates")]),s._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("seq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("flags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"flags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flags"}},[s._v("#")]),s._v(" Flags")]),s._v(" "),a("ul",[a("li",[s._v("-h, --help: Display this help message")]),s._v(" "),a("li",[s._v("-s, --separator "),a("string",[s._v(": separator character (defaults to \\n)")])],1),s._v(" "),a("li",[s._v("-o, --output_format "),a("string",[s._v(": prints dates in this format (defaults to %Y-%m-%d)")])],1),s._v(" "),a("li",[s._v("-i, --input_format "),a("string",[s._v(": give argument dates in this format (defaults to %Y-%m-%d)")])],1),s._v(" "),a("li",[s._v("-b, --begin_date "),a("string",[s._v(": beginning date range")])],1),s._v(" "),a("li",[s._v("-e, --end_date "),a("string",[s._v(": ending date")])],1),s._v(" "),a("li",[s._v("-n, --increment "),a("integer",[s._v(": increment dates by this number")])],1),s._v(" "),a("li",[s._v("-d, --days "),a("integer",[s._v(": number of days to print")])],1),s._v(" "),a("li",[s._v("-r, --reverse: print dates in reverse")])]),s._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),a("p",[s._v("print the next 10 days in YYYY-MM-DD format with newline separator")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("seq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" --days "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n")])])]),a("p",[s._v("print the previous 10 days in YYYY-MM-DD format with newline separator")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("seq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" --days "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" -r\n")])])]),a("p",[s._v("print the previous 10 days starting today in MM/DD/YYYY format with newline separator")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("seq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" --days "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" -o "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%m/%d/%Y'")]),s._v(" -r\n")])])]),a("p",[s._v("print the first 10 days in January, 2020")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("seq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" -b "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2020-01-01'")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2020-01-10'")]),s._v("\n")])])]),a("p",[s._v("print every fifth day between January 1st 2020 and January 31st 2020")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("seq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" -b "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2020-01-01'")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2020-01-31'")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])])]),a("p",[s._v("starting on May 5th, 2020, print the next 10 days in your locale's date format, colon separated")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("seq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" -o %x -s "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" -d "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" -b "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2020-05-01'")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);