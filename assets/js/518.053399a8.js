(window.webpackJsonp=window.webpackJsonp||[]).push([[518],{1004:function(s,t,a){"use strict";a.r(t);var n=a(35),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"はじめに"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#はじめに"}},[s._v("#")]),s._v(" はじめに")]),s._v(" "),a("p",[s._v("こんにちは、Nushell プロジェクトへようこそ。このプロジェクトのゴールは、シンプルなコマンドをパイプでつなぎ合わせるというシェルの Unix 哲学を現代の開発スタイルにもちこむことです。")]),s._v(" "),a("p",[s._v("Nu は Bash のような伝統的なシェル、PowerShell などの高度なシェル、関数型プログラミング、システムプログラミングなど、多くの分野からヒントを得ています。しかし Nu は何でもこなせることを目指すのではなく、いくつかのことをうまくこなせることに注力しています。")]),s._v(" "),a("ul",[a("li",[s._v("モダンな雰囲気をもつ柔軟なクロスプラットフォームシェルを作ること")]),s._v(" "),a("li",[s._v("データ構造を理解するコマンドラインアプリケーションを組みあわせることができること")]),s._v(" "),a("li",[s._v("現代的な CLI アプリケーションが提供する UX をそなえること")])]),s._v(" "),a("p",[s._v("Nu になにができるかをみるには、実際に使ってみることが一番です。")]),s._v(" "),a("p",[a("code",[s._v("ls")]),s._v("コマンドを実行して最初に気づくことは、テキストブロックではなく、構造化されたテーブルデータが返ってくることです。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n╭────┬───────────────────────┬──────┬───────────┬─────────────╮\n│ "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  │         name          │ type │   size    │  modified   │")]),s._v("\n├────┼───────────────────────┼──────┼───────────┼─────────────┤\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v(".html              │ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" │     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("429")]),s._v(" B │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago  │\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ CONTRIBUTING.md       │ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" │     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("955")]),s._v(" B │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" mins ago  │\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ Gemfile               │ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" │   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" KiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago  │\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ Gemfile.lock          │ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" │   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.9")]),s._v(" KiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago  │\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │ LICENSE               │ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" │   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" KiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago  │\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" │ README.md             │ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" │     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("213")]),s._v(" B │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago  │\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),a("p",[s._v("このテーブルはディレクトリの内容を別の方法で表示しているだけではありません。このテーブルを利用するとスプレッドシートと同じように、よりインタラクティブにデータを操作できます。")]),s._v(" "),a("p",[s._v("最初に行うことはテーブルをサイズでソートすることです。これを行うには"),a("code",[s._v("ls")]),s._v("の出力を取得して、カラムの内容に基づいてテーブルをソートするコマンドに入力します。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sort-by size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" reverse\n╭────┬───────────────────────┬──────┬───────────┬─────────────╮\n│ "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  │         name          │ type │   size    │  modified   │")]),s._v("\n├────┼───────────────────────┼──────┼───────────┼─────────────┤\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ Gemfile.lock          │ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" │   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.9")]),s._v(" KiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago  │\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ SUMMARY.md            │ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" │   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.7")]),s._v(" KiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago  │\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ Gemfile               │ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" │   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" KiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago  │\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ LICENSE               │ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" │   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" KiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago  │\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │ CONTRIBUTING.md       │ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" │     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("955")]),s._v(" B │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" mins ago  │\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" │ books.md              │ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" │     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("687")]),s._v(" B │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago  │\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),a("p",[s._v("この作業をおこなうために、"),a("code",[s._v("ls")]),s._v("にコマンドライン引数を渡していないことがわかります。代わりに、Nu が提供する"),a("code",[s._v("sort-by")]),s._v("コマンドを利用して、"),a("code",[s._v("ls")]),s._v("コマンドの出力をソートしています。また、一番大きなファイルを表示するために逆順に並び替えています。")]),s._v(" "),a("p",[s._v("Nu にはテーブルを扱うための多くのコマンドが用意されています。例えば、1 キロバイトを超えるファイルのみを表示するように"),a("code",[s._v("ls")]),s._v("コマンドの出力をフィルターできます。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" where size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 1kb\n╭───┬───────────────────┬──────┬─────────┬────────────╮\n│ "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │       name        │ type │  size   │  modified  │")]),s._v("\n├───┼───────────────────┼──────┼─────────┼────────────┤\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ Gemfile           │ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" KiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago │\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ Gemfile.lock      │ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.9")]),s._v(" KiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago │\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ LICENSE           │ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" KiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago │\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ SUMMARY.md        │ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.7")]),s._v(" KiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago │\n╰───┴───────────────────┴──────┴─────────┴────────────╯\n")])])]),a("p",[s._v("Unix 哲学にあるように、コマンドをつなぎ合わせることで様々な組み合わせを作り出すことができます。別のコマンドをみてみましょう。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n╭─────┬──────┬──────────────────────┬─────────┬───────┬───────────┬──────────╮\n│  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  │ pid  │         name         │ status  │  cpu  │    mem    │ virtual  │")]),s._v("\n├─────┼──────┼──────────────────────┼─────────┼───────┼───────────┼──────────┤\n│   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7570")]),s._v(" │ nu                   │ Running │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.96")]),s._v(" │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23.2")]),s._v(" MiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32.8")]),s._v(" GiB │\n│   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3533")]),s._v(" │ remindd              │ Sleep   │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("103.6")]),s._v(" MiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32.3")]),s._v(" GiB │\n│   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3495")]),s._v(" │ TVCacheExtension     │ Sleep   │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11.9")]),s._v(" MiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32.2")]),s._v(" GiB │\n│   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3490")]),s._v(" │ MusicCacheExtension  │ Sleep   │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.9")]),s._v(" MiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32.2")]),s._v(" GiB │\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),a("p",[s._v("もしあなたが Linux を利用しているなら"),a("code",[s._v("ps")]),s._v("コマンドには馴染みがあるでしょう。これを使うと、現在システムが実行しているすべてのプロセスの状態や名前の一覧を取得することができます。プロセスの CPU 負荷も確認することができます。")]),s._v(" "),a("p",[s._v("CPU をアクティブに利用しているプロセスを表示したい場合はどうでしょうか。さきほどの"),a("code",[s._v("ls")]),s._v("コマンドと同じように、"),a("code",[s._v("ps")]),s._v("コマンドが返すテーブルを利用することができます。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" where cpu "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n╭───┬──────┬────────────────┬─────────┬────────┬───────────┬──────────╮\n│ "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ pid  │      name      │ status  │  cpu   │    mem    │ virtual  │")]),s._v("\n├───┼──────┼────────────────┼─────────┼────────┼───────────┼──────────┤\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1583")]),s._v(" │ Terminal       │ Running │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.69")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.8")]),s._v(" MiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33.0")]),s._v(" GiB │\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("579")]),s._v(" │ photoanalysisd │ Running │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("139.50")]),s._v(" │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("99.9")]),s._v(" MiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32.3")]),s._v(" GiB │\n╰───┴──────┴────────────────┴─────────┴────────┴───────────┴──────────╯\n")])])]),a("p",[s._v("これまで、"),a("code",[s._v("ls")]),s._v("と"),a("code",[s._v("ps")]),s._v("を利用してファイルやプロセスの一覧を表示しました。Nu はこの他にも便利なテーブルを作り出すコマンドを提供します。次に"),a("code",[s._v("date")]),s._v("と"),a("code",[s._v("sys")]),s._v("をみてみましょう。")]),s._v(" "),a("p",[a("code",[s._v("date now")]),s._v("を実行すると、現在の日時と時間に関する情報が得られます。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" now\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v("-03-07 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":14:51.684619600 -08:00\n")])])]),a("p",[a("code",[s._v("sys")]),s._v("は Nu が実行されているシステムに関する情報を提供します。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" sys\n╭───────┬───────────────────╮\n│ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("  │ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("record "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" │\n│ cpu   │ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("    │\n│ disks │ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("    │\n│ mem   │ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("record "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" │\n│ temp  │ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("     │\n│ net   │ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("    │\n╰───────┴───────────────────╯\n")])])]),a("p",[s._v("これはさきほどまでのテーブルと少し異なります。"),a("code",[s._v("sys")]),s._v("コマンドは単純な値ではなくセルに構造化されたテーブルを含むテーブルを提供します。このデータを見るには表示する列を選択する必要があります。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" sys "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("\n╭────────────────┬────────────────────────╮\n│ name           │ Debian GNU/Linux       │\n│ os version     │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("                     │\n│ kernel version │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.10")]),s._v(".92-v8+            │\n│ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v("       │ lifeless               │\n│ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uptime")]),s._v("         │ 19day 21hr 34min 45sec │\n│ sessions       │ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("          │\n╰────────────────┴────────────────────────╯\n")])])]),a("p",[a("code",[s._v("get")]),s._v('コマンドを利用するとテーブルのカラムの内容を調べることができます。ここでは、Nu が実行されているホストに関する情報を含む"host"列を調べています。OS の名前、ホスト名、CPU などです。システム上のユーザーの名前を取得してみましょう。')]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" sys "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get host.sessions.name\n╭───┬────╮\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ jt │\n╰───┴────╯\n")])])]),a("p",[s._v('現在、システムには"jonathan"という名前のユーザが１人だけいます。列の名前だけではなくパスも渡せることに気づくでしょう。Nu はパスを受け取るとテーブルの対応するデータを取得します。')]),s._v(" "),a("p",[s._v('テーブルデータではなく、文字列"jonathan"を取得したことに気づかれたかもしれません。Nu はテーブルだけでなく文字列も扱います。文字列は Nu 以外のコマンドを扱う上で重要な役割をはたします。')]),s._v(" "),a("p",[s._v("実際に Nu の外で文字列がどのように機能するか見てみましょう。先ほどの例で外部の"),a("code",[s._v("echo")]),s._v("コマンドを実行します。("),a("code",[s._v("^")]),s._v("は組込みの"),a("code",[s._v("echo")]),s._v("コマンドを使用しないよう指示しています)。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" sys "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get host.sessions.name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" each "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("it"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ^echo "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\njt\n")])])]),a("p",[s._v("するどい読者にはこれが以前ものと似ていると思われるでしょう。しかし、さきほどの出力で"),a("code",[s._v("echo")]),s._v("を呼び出しているという重要な違いがあります。このように、Nu からデータを"),a("code",[s._v("echo")]),s._v("(または"),a("code",[s._v("git")]),s._v("のような Nu 以外の任意のコマンド)にわたすことができるのです。")]),s._v(" "),a("p",[s._v("注：Nu の組み込みコマンドのヘルプテキストは、"),a("code",[s._v("help")]),s._v("コマンドで検出できます。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" path\nExplore and manipulate paths.\n\nThere are three ways to represent a path:\n\n* As a path literal, e.g., "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/home/viking/spam.txt'")]),s._v("\n* As a structured path: a table with "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'parent'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'stem'")]),s._v(", and "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'extension'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("and\n* "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'prefix'")]),s._v(" on Windows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" columns. This "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),s._v(" is produced by the "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path parse'")]),s._v("\n  subcommand.\n* As an inner list of path parts, e.g., "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[[ / home viking spam.txt ]]'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n  Splitting into parts is "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v(" by the "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("path "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" command.\n\nAll subcommands accept all three variants as an input. Furthermore, the "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path\njoin'")]),s._v(" subcommand can be used to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" the structured path or path parts back into\nthe path literal.\n\nUsage:\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" path\n\nSubcommands:\n  path "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("basename")]),s._v(" - Get the final component of a path\n  path "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirname")]),s._v(" - Get the parent directory of a path\n  path exists - Check whether a path exists\n  path "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expand")]),s._v(" - Try to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expand")]),s._v(" a path to its absolute form\n  path "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" - Join a structured path or a list of path parts.\n  path parse - Convert a path into structured data.\n  path relative-to - Get a path as relative to another path.\n  path "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),s._v(" - Split a path into parts by a separator.\n  path "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" - Get the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" of the object a path refers to "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e.g., file, dir, symlink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nFlags:\n  -h, --help\n      Display this "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" message\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);