(window.webpackJsonp=window.webpackJsonp||[]).push([[453],{937:function(s,a,t){"use strict";t.r(a);var e=t(35),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"working-with-lists"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#working-with-lists"}},[s._v("#")]),s._v(" Working with lists")]),s._v(" "),t("h2",{attrs:{id:"creating-lists"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-lists"}},[s._v("#")]),s._v(" Creating lists")]),s._v(" "),t("p",[s._v("A list is an ordered collection of values.\nYou can create a "),t("code",[s._v("list")]),s._v(" with square brackets, surrounded values separated by spaces and/or commas (for readability).\nFor example, "),t("code",[s._v("[foo bar baz]")]),s._v(" or "),t("code",[s._v("[foo, bar, baz]")]),s._v(".")]),s._v(" "),t("h2",{attrs:{id:"updating-lists"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updating-lists"}},[s._v("#")]),s._v(" Updating lists")]),s._v(" "),t("p",[s._v("You can "),t("code",[s._v("update")]),s._v(" and "),t("code",[s._v("insert")]),s._v(" values into lists as they flow through the pipeline, for example let's insert the value "),t("code",[s._v("10")]),s._v(" into the middle of a list:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> [1, 2, 3, 4] | insert 2 10\n")])])]),t("p",[s._v("We can also use "),t("code",[s._v("update")]),s._v(" to replace the 2nd element with the value "),t("code",[s._v("10")]),s._v(".")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> [1, 2, 3, 4] | update 1 10\n")])])]),t("p",[s._v("In addition to "),t("code",[s._v("insert")]),s._v(" and "),t("code",[s._v("update")]),s._v(", we also have "),t("code",[s._v("prepend")]),s._v(" and "),t("code",[s._v("append")]),s._v(". These let you insert to the beginning of a list or at the end of the list, respectively.")]),s._v(" "),t("p",[s._v("For example:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" colors "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("yellow green"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" colors "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$colors")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" prepend red"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" colors "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$colors")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" append purple"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$colors")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# [red yellow green purple]")]),s._v("\n")])])]),t("h2",{attrs:{id:"iterating-over-lists"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iterating-over-lists"}},[s._v("#")]),s._v(" Iterating over lists")]),s._v(" "),t("p",[s._v("To iterate over the items in a list, use the "),t("RouterLink",{attrs:{to:"/book/commands/each.html"}},[t("code",[s._v("each")])]),s._v(" command with a "),t("RouterLink",{attrs:{to:"/book/types_of_data.html#blocks"}},[s._v("block")]),s._v("\nof Nu code that specifies what to do to each item. The block parameter (e.g. "),t("code",[s._v("|it|")]),s._v(" in "),t("code",[s._v("{ |it| echo $it }")]),s._v(") is normally the current list item, but the "),t("code",[s._v("--numbered")]),s._v(" ("),t("code",[s._v("-n")]),s._v(") flag can change it to have "),t("code",[s._v("index")]),s._v(" and "),t("code",[s._v("item")]),s._v(" values if needed. For example:")],1),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" names "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Mark Tami Amanda Jeremy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$names")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" each "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("it"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, ('),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(')!"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# Outputs "Hello, Mark!" and three more similar lines.')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$names")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" each -n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("it"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"('),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(".index + 1) - ("),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v('.item)"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# Outputs "1 - Mark", "2 - Tami", etc.')]),s._v("\n")])])]),t("p",[s._v("The "),t("RouterLink",{attrs:{to:"/book/commands/where.html"}},[t("code",[s._v("where")])]),s._v(" command can be used to create a subset of a list, effectively filtering the list based on a condition.")],1),s._v(" "),t("p",[s._v('The following example gets all the colors whose names end in "e".')]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" colors "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("red orange yellow green blue purple"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$colors")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" where "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" str ends-with "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'e'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("In this example, we keep only values higher than "),t("code",[s._v("7")]),s._v(".")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The block passed to where must evaluate to a boolean.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This outputs the list [orange blue purple].")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" scores "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scores")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" where "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# [10 8]")]),s._v("\n")])])]),t("p",[s._v("The "),t("RouterLink",{attrs:{to:"/book/commands/reduce.html"}},[t("code",[s._v("reduce")])]),s._v(" command computes a single value from a list.\nIt uses a block which takes 2 parameters: the current item (conventionally named "),t("code",[s._v("it")]),s._v(") and an accumulator\n(conventionally named "),t("code",[s._v("acc")]),s._v("). To specify an initial value for the accumulator, use the "),t("code",[s._v("--fold")]),s._v(" ("),t("code",[s._v("-f")]),s._v(") flag.\nTo change "),t("code",[s._v("it")]),s._v(" to have "),t("code",[s._v("index")]),s._v(" and "),t("code",[s._v("item")]),s._v(" values, add the "),t("code",[s._v("--numbered")]),s._v(" ("),t("code",[s._v("-n")]),s._v(") flag.\nFor example:")],1),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" scores "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"total ="')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scores")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" reduce "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("it, acc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$acc")]),s._v(" + "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 15")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"total ="')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scores")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" math "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# easier approach, same result")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"product ="')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scores")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" reduce --fold "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("it, acc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$acc")]),s._v(" * "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 96")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scores")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" reduce -n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("it, acc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$acc")]),s._v(" + "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(".index * "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(".item "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3 + 1*8 + 2*4 = 19")]),s._v("\n")])])]),t("h2",{attrs:{id:"accessing-the-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-list"}},[s._v("#")]),s._v(" Accessing the list")]),s._v(" "),t("p",[s._v("To access a list item at a given index, use the "),t("code",[s._v("$name.index")]),s._v(" form where "),t("code",[s._v("$name")]),s._v(" is a variable that holds a list.")]),s._v(" "),t("p",[s._v("For example, the second element in the list below can be accessed with "),t("code",[s._v("$names.1")]),s._v(".")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" names "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Mark Tami Amanda Jeremy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$names")]),s._v(".1 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gives Tami")]),s._v("\n")])])]),t("p",[s._v("If the index is in some variable "),t("code",[s._v("$index")]),s._v(" we can use the "),t("code",[s._v("get")]),s._v(" command to extract the item from the list.")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" names "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Mark Tami Amanda Jeremy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" index "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$names")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$index")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gives Tami")]),s._v("\n")])])]),t("p",[s._v("The "),t("RouterLink",{attrs:{to:"/book/commands/length.html"}},[t("code",[s._v("length")])]),s._v(" command returns the number of items in a list.\nFor example, "),t("code",[s._v("[red green blue] | length")]),s._v(" outputs "),t("code",[s._v("3")]),s._v(".")],1),s._v(" "),t("p",[s._v("The "),t("RouterLink",{attrs:{to:"/book/commands/empty.html"}},[t("code",[s._v("empty?")])]),s._v(" command determines whether a string, list, or table is empty.\nIt can be used with lists as follows:")],1),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" colors "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("red green blue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$colors")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" empty? "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# false")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" colors "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$colors")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" empty? "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# true")]),s._v("\n")])])]),t("p",[s._v("The "),t("code",[s._v("in")]),s._v(" and "),t("code",[s._v("not-in")]),s._v(" operators are used to test whether a value is in a list. For example:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" colors "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("red green blue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'blue'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$colors")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yellow'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$colors")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# false")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gold'")]),s._v(" not-in "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$colors")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# true")]),s._v("\n")])])]),t("p",[s._v("The "),t("RouterLink",{attrs:{to:"/book/commands/any.html"}},[t("code",[s._v("any?")])]),s._v(" command determines if any item in a list\nmatches a given condition.\nFor example:")],1),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# Do any color names end with "e"?')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$colors")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" any? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" str ends-with "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"e"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# true")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Is the length of any color name less than 3?")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$colors")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" any? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" str length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# false")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Are any scores greater than 7?")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scores")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" any? "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# true")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Are any scores odd?")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scores")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" any? "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(" mod "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# true")]),s._v("\n")])])]),t("p",[s._v("The "),t("RouterLink",{attrs:{to:"/book/commands/all.html"}},[t("code",[s._v("all?")])]),s._v(" command determines if every item in a list\nmatches a given condition.\nFor example:")],1),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# Do all color names end with "e"?')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$colors")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" all? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" str ends-with "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"e"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# false")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Is the length of all color names greater than or equal to 3?")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$colors")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" all? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" str length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# true")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Are all scores greater than 7?")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scores")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" all? "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# false")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Are all scores even?")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scores")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" all? "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(" mod "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# false")]),s._v("\n")])])]),t("h2",{attrs:{id:"converting-the-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#converting-the-list"}},[s._v("#")]),s._v(" Converting the list")]),s._v(" "),t("p",[s._v("The "),t("RouterLink",{attrs:{to:"/book/commands/flatten.html"}},[t("code",[s._v("flatten")])]),s._v(" command creates a new list from an existing list\nby adding items in nested lists to the top-level list.\nThis can be called multiple times to flatten lists nested at any depth.\nFor example:")],1),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" flatten "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# [1 2 3 4 5 6]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" flatten "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" flatten "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" flatten "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# [1 2 3 4 5 6 7 8]")]),s._v("\n")])])]),t("p",[s._v("The "),t("RouterLink",{attrs:{to:"/book/commands/wrap.html"}},[t("code",[s._v("wrap")])]),s._v(" command converts a list to a table. Each list value will\nbe converted to a separate row with a single column:")],1),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" zones "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("UTC CET Europe/Moscow Asia/Yekaterinburg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Show world clock for selected time zones")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$zones")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" wrap "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Zone'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" upsert Time "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("it"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("date now "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" to-timezone "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(".Zone "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%Y.%m.%d %H:%M'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);