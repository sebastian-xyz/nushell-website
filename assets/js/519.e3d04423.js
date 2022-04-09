(window.webpackJsonp=window.webpackJsonp||[]).push([[519],{1004:function(t,a,e){"use strict";e.r(a);var v=e(35),s=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#設定"}},[t._v("#")]),t._v(" 設定")]),t._v(" "),e("p",[t._v("Nu には、見た目や挙動を変更させるための内部的な変数があります。\n以下がそのリストです。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Variable")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("completion_mode")]),t._v(" "),e("td",[t._v('"list" or "circular"')]),t._v(" "),e("td",[t._v("利用する自動補完のモード")])]),t._v(" "),e("tr",[e("td",[t._v("ctrlc_exit")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("ctrl-c を複数回押したときに Nu を exit するかどうか")])]),t._v(" "),e("tr",[e("td",[t._v("disable_table_indexes")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("テーブルインデックスカラムを無効にするかどうか")])]),t._v(" "),e("tr",[e("td",[t._v("edit_mode")]),t._v(" "),e("td",[t._v('"vi" or "emacs"')]),t._v(" "),e("td",[t._v('行の編集モードを"vi"か"emacs"モードに変更する')])]),t._v(" "),e("tr",[e("td",[t._v("env")]),t._v(" "),e("td",[t._v("row")]),t._v(" "),e("td",[t._v("外部コマンドに渡す環境変数")])]),t._v(" "),e("tr",[e("td",[t._v("header_align")]),t._v(" "),e("td",[t._v('"center", "right", or other')]),t._v(" "),e("td",[t._v("テーブルのヘッダーの揃え方")])]),t._v(" "),e("tr",[e("td",[t._v("key_timeout")]),t._v(" "),e("td",[t._v("integer")]),t._v(" "),e("td",[t._v("edit モードのスイッチ時のタイムアウト")])]),t._v(" "),e("tr",[e("td",[t._v("nonzero_exit_errors")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("外部コマンドが 0 以外の終了ステータスの場合にエラーを表示するかどうか")])]),t._v(" "),e("tr",[e("td",[t._v("path")]),t._v(" "),e("td",[t._v("list of strings")]),t._v(" "),e("td",[t._v("バイナリーを検索する PATH")])]),t._v(" "),e("tr",[e("td",[t._v("startup")]),t._v(" "),e("td",[t._v("list of strings")]),t._v(" "),e("td",[e("code",[t._v("alias")]),t._v("のような nushell 起動時に実行するコマンド")])]),t._v(" "),e("tr",[e("td",[t._v("table_mode")]),t._v(" "),e("td",[t._v('"light" or other')]),t._v(" "),e("td",[t._v("テーブルのモード")])]),t._v(" "),e("tr",[e("td",[t._v("no_auto_pivot")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("自動で 1 行のデータを pivot するかどうか")])]),t._v(" "),e("tr",[e("td",[t._v("skip_welcome_message")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("nushell 起動時にウェルカムメッセージの表示をスキップするかどうか")])])])]),t._v(" "),e("h2",{attrs:{id:"利用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#利用方法"}},[t._v("#")]),t._v(" 利用方法")]),t._v(" "),e("h3",{attrs:{id:"変数の設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#変数の設定"}},[t._v("#")]),t._v(" 変数の設定")]),t._v(" "),e("p",[t._v("これらの変数のいずれかを設定するには"),e("code",[t._v("config set")]),t._v(" コマンドを利用します。例えば")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('> config set edit_mode "vi"\n')])])]),e("h3",{attrs:{id:"パイプラインからの変数を設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#パイプラインからの変数を設定"}},[t._v("#")]),t._v(" パイプラインからの変数を設定")]),t._v(" "),e("p",[t._v("設定したい値をパイプラインを通じて設定することもできます。このためには"),e("code",[t._v("set_into")]),t._v("フラグを利用します。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('> echo "bar" | config set_into foo\n')])])]),e("p",[t._v("この方法は、"),e("code",[t._v("env")]),t._v("や"),e("code",[t._v("path")]),t._v("変数を設定する際に便利です。")]),t._v(" "),e("h3",{attrs:{id:"すべての変数の表示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#すべての変数の表示"}},[t._v("#")]),t._v(" すべての変数の表示")]),t._v(" "),e("p",[e("code",[t._v("config")]),t._v("コマンドを引数なしで実行すると現在の設定されている変数を表示します。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("> config\n─────────────────┬──────────────────\n completion_mode │ circular\n env             │ [row 51 columns]\n path            │ [table 9 rows]\n startup         │ [table 1 rows]\n─────────────────┴──────────────────\n")])])]),e("p",[t._v("注: もしまだ変数を設定していない場合、出力が空の場合があります。")]),t._v(" "),e("h3",{attrs:{id:"変数の取得"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#変数の取得"}},[t._v("#")]),t._v(" 変数の取得")]),t._v(" "),e("p",[e("code",[t._v("get")]),t._v("フラグを利用して特定の変数の値を取得できます。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("> config get edit_mode\n")])])]),e("h3",{attrs:{id:"変数の削除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#変数の削除"}},[t._v("#")]),t._v(" 変数の削除")]),t._v(" "),e("p",[t._v("変数を削除する場合、"),e("code",[t._v("remove")]),t._v("フラグを利用します。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("> config remove edit_mode\n")])])]),e("h3",{attrs:{id:"設定全体のクリア"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#設定全体のクリア"}},[t._v("#")]),t._v(" 設定全体のクリア")]),t._v(" "),e("p",[t._v("設定全体をクリアして、最初からやりなおしたい場合は"),e("code",[t._v("--clear")]),t._v("フラグを利用できます。このコマンドを実行すると設定ファイルもクリアされるので注意してください。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("> config clear\n")])])]),e("h3",{attrs:{id:"設定が保存されている場所をみつける"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#設定が保存されている場所をみつける"}},[t._v("#")]),t._v(" 設定が保存されている場所をみつける")]),t._v(" "),e("p",[t._v("設定ファイルはデフォルトの場所から読み込まれます。この場所をみつけるには"),e("code",[t._v("-path")]),t._v("フラグを利用します。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("> config path\n/home/jonathant/.config/nu/config.toml\n")])])]),e("h3",{attrs:{id:"ファイルから設定を読み込む"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ファイルから設定を読み込む"}},[t._v("#")]),t._v(" ファイルから設定を読み込む")]),t._v(" "),e("p",[t._v("デフォルトとは違う設定ファイルを読み込みたい場合は、"),e("code",[t._v("load")]),t._v(" パラメーターを利用します。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("> config load myconfiguration.toml\n")])])]),e("h2",{attrs:{id:"nu-をログインシェルとして設定する"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nu-をログインシェルとして設定する"}},[t._v("#")]),t._v(" Nu をログインシェルとして設定する")]),t._v(" "),e("p",[t._v("Nu をログインシェルとして利用するには、"),e("code",[t._v("path")]),t._v("と"),e("code",[t._v("env")]),t._v("変数を設定する必要があります。これらによりログインシェルとして外部コマンドを実行するのに十分なサポートが得られます。")]),t._v(" "),e("p",[t._v("切り替える前に、Bash 等の別のシェルから Nu を実行します。そして次のコマンドで環境変数と PATH をシェルから取得します。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("> config set path $nu.path\n> config set env $nu.env\n")])])]),e("p",[t._v("0.7.2 より以前のバージョンでは")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("> config --set [path $nu:path]\n> config --set [env $nu:env]\n")])])]),e("p",[e("code",[t._v("$nu.path")]),t._v("および"),e("code",[t._v("$nu.env")]),t._v("にはそれぞれ、現在の PATH と環境変数がセットされています。これらをセットすると、のちに Nu をログインシェルとして利用したさいに利用できるようになります。")]),t._v(" "),e("p",[t._v("次にいくつかのディストリビューションでは、Nu が"),e("code",[t._v("/etc/shells")]),t._v("のリストに含まれているかを確認する必要があります。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("❯ cat /etc/shells\n# /etc/shells: valid login shells\n/bin/sh\n/bin/dash\n/bin/bash\n/bin/rbash\n/usr/bin/screen\n/usr/bin/fish\n/home/jonathan/.cargo/bin/nu\n")])])]),e("p",[t._v("これにより、"),e("code",[t._v("chsh")]),t._v("で Nu をログインシェルとして設定できるようになります。ログアウト後、次回のログイン時に Nu の素敵なプロンプトが表示されます。")]),t._v(" "),e("h2",{attrs:{id:"プロンプトの設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#プロンプトの設定"}},[t._v("#")]),t._v(" プロンプトの設定")]),t._v(" "),e("p",[t._v("プロンプトの設定は"),e("code",[t._v("prompt")]),t._v("の値を設定することで行います。"),e("br"),t._v("\n例えば、"),e("a",{attrs:{href:"https://starship.rs",target:"_blank",rel:"noopener noreferrer"}},[t._v("starship"),e("OutboundLink")],1),t._v("を使うには、ダウンロードして次のコマンドを実行します。(0.18.2 and later)")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('config set prompt "starship prompt"\n')])])]),e("p",[t._v("Nu を再起動すると")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("nushell on 📙 master [$] is 📦 v0.18.2 via 🦀 v1.48.0-nightly\n❯\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);