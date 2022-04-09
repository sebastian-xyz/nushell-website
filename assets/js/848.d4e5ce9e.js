(window.webpackJsonp=window.webpackJsonp||[]).push([[848],{1333:function(s,a,t){"use strict";t.r(a);var e=t(35),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"以-nushell-的方式思考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#以-nushell-的方式思考"}},[s._v("#")]),s._v(" 以 Nushell 的方式思考")]),s._v(" "),t("p",[s._v('为了帮助你理解 Nushell，并将其充分利用，我们把这部分内容一起放入"以 Nushell 的方式思考"这一节。通过学习 Nushell 的思考方式，并使用它提供的模式，你会在开始时遇到更少的问题，并为接下来的成功做好准备。')]),s._v(" "),t("p",[s._v("那么，用 Nushell 的方式思考是什么意思呢？下面是一些 Nushell 新用户常见的问题。")]),s._v(" "),t("h2",{attrs:{id:"nushell-不是-bash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nushell-不是-bash"}},[s._v("#")]),s._v(" Nushell 不是 Bash")]),s._v(" "),t("p",[s._v("Nushell 既是一种编程语言，也是一种 Shell，正因为如此，它有自己的方式来处理文件、目录、网站等等。我们对其进行了建模，以使其与你可能熟悉的其他 Shell 的工作方式接近。其中管道用于将两个命令连接在一起：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" length\n")])])]),t("p",[s._v("Nushell 也支持其他常见的功能，例如从之前运行的命令中获取退出代码(Exit Code)。")]),s._v(" "),t("p",[s._v("虽然它确实有这些功能，但 Nushell 并不是 Bash。Bash 的工作方式以及一般的 POSIX 风格，并不是 Nushell 所支持的。例如，在 Bash 中你可以使用：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" output.txt\n")])])]),t("p",[s._v("在 Nushell 中，我们使用"),t("code",[s._v(">")]),s._v("作为大于运算符，这与 Nushell 的语言特质比较吻合。取而代之的是，你需要用管道将其连接到一个可以保存内容的命令：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" save output.txt\n")])])]),t("p",[t("strong",[s._v("以 Nushell 的方式思考：")]),s._v(" Nushell 看待数据的方式是，数据在管道中流动，直到它到达用户或由最后的命令处理。Nushell 使用命令来完成工作，学习这些命令以及何时使用它们有助于你组合使用多种管道。")]),s._v(" "),t("h2",{attrs:{id:"解析和执行是不同的阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解析和执行是不同的阶段"}},[s._v("#")]),s._v(" 解析和执行是不同的阶段")]),s._v(" "),t("p",[s._v('作为 Nushell 设计的一个重要部分，特别是它与许多动态语言不同的地方是"解析期" 和 "执行期"是分开的，不会交叉。这些术语来自编程语言设计和编译器理论，其中'),t("strong",[s._v("解析")]),s._v("是将文本转换为抽象表示，而"),t("strong",[s._v("执行")]),s._v("是解释执行抽象表示。")]),s._v(" "),t("p",[s._v("例如，下面的代码在 Nushell 中是没有意义的，如果作为脚本将无法执行：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"def abc [] { 1 + 2 }"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" save output.nu\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"output.nu"')]),s._v("\nabc\n")])])]),t("p",[t("code",[s._v("source")]),s._v(" 命令在解析时运行，解析器找到所有对程序可见的定义，在执行期这些定义应该都是可见的。然而，由于 output.nu 文件在执行时才被创建（通过 save 命令），所以"),t("code",[s._v("source")]),s._v("命令在解析时无法从其中读取所定义的命令。")]),s._v(" "),t("p",[s._v("在上面的例子中，我们希望执行器逐行解析并运行，但 Nushell 不会如预期的那样将解析和执行交错进行。")]),s._v(" "),t("p",[s._v("另一个常见的问题是试图动态地创建文件名并"),t("code",[s._v("source")]),s._v("，如下：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"('),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$my")]),s._v('-path)/common.nu"')]),s._v("\n")])])]),t("p",[s._v("这就要求执行器在解析器能够在文件内部寻找定义之前运行并执行字符串。同样，这也混合了解析和执行，而未将它们分开。")]),s._v(" "),t("p",[t("strong",[s._v("以 Nushell 的方式思考：")]),s._v(" Nushell 被设计为使用一个独立于执行的单一解析阶段。这将允许强大的 IDE 支持，准确的错误信息，并成为第三方工具更容易使用的语言。")]),s._v(" "),t("h2",{attrs:{id:"变量是不可变的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量是不可变的"}},[s._v("#")]),s._v(" 变量是不可变的")]),s._v(" "),t("p",[s._v('对于来自其他语言的人来说，另一个常见的令人惊愕之处是 Nushell 的变量是不可变的（事实上，有些人已经开始称它们为 "常量"来反映这一点）。接触 Nushell，你需要花一些时间来熟悉更多的函数式风格，因为这往往有助于写出与'),t("strong",[s._v("不可变的变量")]),s._v("最相容的代码。")]),s._v(" "),t("p",[s._v("你可能想知道为什么 Nushell 使用不可变的变量，在 Nushell 开发的早期，我们决定看看我们能在语言中使用多长时间的以数据为中心的函数式风格。最近，我们在 Nushell 中加入了一个关键的功能，使这些早期的实验显示出其价值：并行性。通过在任何 Nushell 脚本中将"),t("RouterLink",{attrs:{to:"/book/commands/each.html"}},[t("code",[s._v("each")])]),s._v("切换到"),t("RouterLink",{attrs:{to:"/book/commands/par-each.html"}},[t("code",[s._v("par-each")])]),s._v("，你就能够在“输入”上并行地运行相应的代码块。这是可能的，因为 Nushell 的设计在很大程度上依赖于不可变性、组合和流水线。")],1),s._v(" "),t("p",[s._v('Nushell 的变量是不可变的，但这并不意味着无法表达变化。Nushell 大量使用了 "shadowing"技术（变量隐藏）。变量隐藏是指创建一个与之前声明的变量同名的新变量，例如，假设你有一个'),t("code",[s._v("$x")]),s._v("在当前作用域内，而你想要一个新的"),t("code",[s._v("$x")]),s._v("并将其加 1：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$x")]),s._v(" + "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),t("p",[s._v("这个新的"),t("code",[s._v("x")]),s._v("对任何跟在这一行后面的代码都是可见的。谨慎地使用变量隐藏可以使变量的使用变得更容易，尽管这不是必须的。")]),s._v(" "),t("p",[s._v("循环计数器是可变变量的另一种常见模式，它被内置于大多数迭代命令中，例如，你可以使用"),t("RouterLink",{attrs:{to:"/book/commands/each.html"}},[t("code",[s._v("each")])]),s._v("上的"),t("code",[s._v("-n")]),s._v("标志同时获得每个元素的值和索引：")],1),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" each -n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("it"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Number ('),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(".index) is size ("),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v('.item.size)"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("你也可以使用"),t("RouterLink",{attrs:{to:"/book/commands/reduce.html"}},[t("code",[s._v("reduce")])]),s._v("命令来达到上述目的，其方式与你在循环中修改一个变量相同。例如，如果你想在一个字符串列表中找到最长的字符串，你可以这样做：")],1),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("one, two, three, four, five, six"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" reduce "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("curr, max"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$curr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" str length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$max")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" str length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$curr")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$max")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[t("strong",[s._v("以 Nushell 的方式思考：")]),s._v(" 如果你习惯于使用可变的变量来完成不同的任务，那么你将需要一些时间来学习如何以更加函数式的方式来完成每个任务。Nushell 有一套内置的能力来帮助处理这样的模式，学习它们将帮助你以更加 Nushell 的风格来写代码。由此带来的额外的好处是你可以通过并行运行你的部分代码来加速脚本执行。")]),s._v(" "),t("h2",{attrs:{id:"nushell-的环境是有作用域的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nushell-的环境是有作用域的"}},[s._v("#")]),s._v(" Nushell 的环境是有作用域的")]),s._v(" "),t("p",[s._v("Nushell 从需要编译的语言中获得了多种设计灵感，其中一个是语言应该避免全局可变状态。Shell 经常通过修改全局变量来更新环境，但 Nushell 避开了这种方法。")]),s._v(" "),t("p",[s._v("在 Nushell 中，代码块可以控制自己的环境，因此对环境的改变是发生在代码块范围内的。")]),s._v(" "),t("p",[s._v("在实践中，这可以让你用更简洁的代码来处理子目录，例如，如果你想在当前目录下构建每个子项目，你可以运行：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" each "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("it"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(".name\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[t("code",[s._v("cd")]),s._v("命令改变了"),t("code",[s._v("PWD")]),s._v("环境变量，这个变量的改变只在当前代码块有效，如此即可允许每次迭代都从当前目录开始，进入下一个子目录。")]),s._v(" "),t("p",[s._v("环境变量具有作用域使命令更可预测，更容易阅读，必要时也更容易调试。Nushell 还提供了一些辅助命令，如"),t("RouterLink",{attrs:{to:"/book/commands/def-env.html"}},[t("code",[s._v("def-env")])]),s._v("、"),t("RouterLink",{attrs:{to:"/book/commands/load-env.html"}},[t("code",[s._v("load-env")])]),s._v("，作为对环境变量进行批量更新的辅助方法。")],1),s._v(" "),t("p",[t("code",[s._v("*")]),s._v(" - 这里有一个例外，"),t("RouterLink",{attrs:{to:"/book/commands/def-env.html"}},[t("code",[s._v("def-env")])]),s._v("允许你创建一个可以修改并保留调用者环境的命令")],1),s._v(" "),t("p",[t("strong",[s._v("以 Nushell 的方式思考：")]),s._v(" 在 Nushell 中，没有全局可修改变量的编码最佳实践延伸到了环境变量。使用内置的辅助命令可以让你更容易地处理 Nushell 中的环境变量问题。利用环境变量对代码块具有作用范围这一事实，也可以帮助你写出更简洁的脚本，并与外部命令互动，而不需要在全局环境中添加你不需要的东西。")])])}),[],!1,null,null,null);a.default=r.exports}}]);