(window.webpackJsonp=window.webpackJsonp||[]).push([[520],{1004:function(v,_,t){"use strict";t.r(_);var d=t(35),e=Object(d.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"他のシェルとdslからnuへの対応表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#他のシェルとdslからnuへの対応表"}},[v._v("#")]),v._v(" 他のシェルとDSLからNuへの対応表")]),v._v(" "),t("p",[v._v("このテーブルはNuの組込みコマンドやプラグインと他のシェルやDLS(Domain Specific Languages)との対応関係を理解することを助けるためのものです。ここでは全てのNuコマンドとそのコマンドが他の言語でどう使われているかをマッピングしています。コントリビューション歓迎です。")]),v._v(" "),t("p",[v._v("注: Nuが0.14.1以降であることを想定しています。")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("Nushell")]),v._v(" "),t("th",[v._v("SQL")]),v._v(" "),t("th",[v._v(".Net LINQ (C#)")]),v._v(" "),t("th",[v._v("PowerShell (without external modules)")]),v._v(" "),t("th",[v._v("Bash")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("alias")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("alias")]),v._v(" "),t("td",[v._v("alias")])]),v._v(" "),t("tr",[t("td",[v._v("append")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("Append")]),v._v(" "),t("td",[v._v("-Append")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("args")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("autoview")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("average("),t("code",[v._v("*")]),v._v(")")]),v._v(" "),t("td",[v._v("avg")]),v._v(" "),t("td",[v._v("Average")]),v._v(" "),t("td",[v._v("Measure-Object, measure")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("binaryview("),t("code",[v._v("*")]),v._v(")")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("Format-Hex")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("calc, = math")]),v._v(" "),t("td",[v._v("math operators")]),v._v(" "),t("td",[v._v("Aggregate, Average, Count, Max, Min, Sum")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("bc")])]),v._v(" "),t("tr",[t("td",[v._v("cd")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("Set-Location, cd")]),v._v(" "),t("td",[v._v("cd")])]),v._v(" "),t("tr",[t("td",[v._v("clear")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("Clear-Host")]),v._v(" "),t("td",[v._v("clear")])]),v._v(" "),t("tr",[t("td",[v._v("clip")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("Set-Clipboard, scb")]),v._v(" "),t("td",[v._v("clip, clipboard, xclip, pbcopy")])]),v._v(" "),t("tr",[t("td",[v._v("compact")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("config")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("$Profile")]),v._v(" "),t("td",[v._v("vi .bashrc, .profile")])]),v._v(" "),t("tr",[t("td",[v._v("count")]),v._v(" "),t("td",[v._v("count")]),v._v(" "),t("td",[v._v("Count")]),v._v(" "),t("td",[v._v("Measure-Object, measure")]),v._v(" "),t("td",[v._v("wc")])]),v._v(" "),t("tr",[t("td",[v._v("cp")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("Copy-Item, cp, copy")]),v._v(" "),t("td",[v._v("cp")])]),v._v(" "),t("tr",[t("td",[v._v("date")]),v._v(" "),t("td",[v._v("NOW() / getdate()")]),v._v(" "),t("td",[v._v("DateTime class")]),v._v(" "),t("td",[v._v("Get-Date")]),v._v(" "),t("td",[v._v("date")])]),v._v(" "),t("tr",[t("td",[v._v("debug")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("= dec")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("x--")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("default")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("drop")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("du")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("du")])]),v._v(" "),t("tr",[t("td",[v._v("each")]),v._v(" "),t("td",[v._v("cursor")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("ForEach-Object, foreach, for")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("echo")]),v._v(" "),t("td",[v._v("print")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("Write-Output, write")]),v._v(" "),t("td",[v._v("echo")])]),v._v(" "),t("tr",[t("td",[v._v("enter")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("evaluate_by")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("exit")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("exit")]),v._v(" "),t("td",[v._v("exit")])]),v._v(" "),t("tr",[t("td",[v._v("fetch("),t("code",[v._v("*")]),v._v(")")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("HttpClient,WebClient, HttpWebRequest/Response")]),v._v(" "),t("td",[v._v("Invoke-WebRequest")]),v._v(" "),t("td",[v._v("wget")])]),v._v(" "),t("tr",[t("td",[v._v("first")]),v._v(" "),t("td",[v._v("top, limit")]),v._v(" "),t("td",[v._v("First, FirstOrDefault")]),v._v(" "),t("td",[v._v("Select-Object -First")]),v._v(" "),t("td",[v._v("head")])]),v._v(" "),t("tr",[t("td",[v._v("format")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("String.Format")]),v._v(" "),t("td",[v._v("String.Format")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("from")]),v._v(" "),t("td",[v._v("import flatfile, openjson, cast(variable as xml)")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("Import/ConvertFrom-{Csv,Xml,Html,Json}")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("get")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("Select")]),v._v(" "),t("td",[v._v("(cmd).column")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("group_by")]),v._v(" "),t("td",[v._v("group by")]),v._v(" "),t("td",[v._v("GroupBy, group")]),v._v(" "),t("td",[v._v("Group-Object, group")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("headers")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("help")]),v._v(" "),t("td",[v._v("sp_help")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("Get-Help, help, man")]),v._v(" "),t("td",[v._v("man")])]),v._v(" "),t("tr",[t("td",[v._v("histogram")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("history")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("Get-History, history")]),v._v(" "),t("td",[v._v("history")])]),v._v(" "),t("tr",[t("td",[v._v("inc("),t("code",[v._v("*")]),v._v(")")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")])]),v._v(" "),t("tr",[t("td",[v._v("insert")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td",[v._v("Add-Member")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("is_empty")]),v._v(" "),t("td",[v._v("is null")]),v._v(" "),t("td",[v._v("String.InNullOrEmpty")]),v._v(" "),t("td",[v._v("String.InNullOrEmpty")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("keep, =take")]),v._v(" "),t("td",[v._v("top, limit")]),v._v(" "),t("td",[v._v("Take")]),v._v(" "),t("td",[v._v("Select-Object -First")]),v._v(" "),t("td",[v._v("head")])]),v._v(" "),t("tr",[t("td",[v._v("keep_until")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("keep_while")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("TakeWhile")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("kill")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("Stop-Process, kill")]),v._v(" "),t("td",[v._v("kill")])]),v._v(" "),t("tr",[t("td",[v._v("last")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("Last, LastOrDefault")]),v._v(" "),t("td",[v._v("Select-Object -Last")]),v._v(" "),t("td",[v._v("tail")])]),v._v(" "),t("tr",[t("td",[v._v("lines")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("File.ReadAllLines")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("ls")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("Get-ChildItem, dir, ls")]),v._v(" "),t("td",[v._v("ls")])]),v._v(" "),t("tr",[t("td",[v._v("map_max_by")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("match("),t("code",[v._v("*")]),v._v(")")]),v._v(" "),t("td",[v._v("case when")]),v._v(" "),t("td",[v._v("Regex.IsMatch")]),v._v(" "),t("td",[v._v("[regex]")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("merge")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("mkdir")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("mkdir, md")]),v._v(" "),t("td",[v._v("mkdir")])]),v._v(" "),t("tr",[t("td",[v._v("mv")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("Move-Item, mv, move, mi")]),v._v(" "),t("td",[v._v("mv")])]),v._v(" "),t("tr",[t("td",[v._v("next")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("nth")]),v._v(" "),t("td",[v._v("limit x offset y, rownumber =")]),v._v(" "),t("td",[v._v("ElementAt")]),v._v(" "),t("td",[v._v("[x], indexing operator, ElementAt")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("open")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td",[v._v("Get-Content, gc, cat, type")]),v._v(" "),t("td",[v._v("cat")])]),v._v(" "),t("tr",[t("td",[v._v("parse")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("pivot, =transpose")]),v._v(" "),t("td",[v._v("pivot")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("post("),t("code",[v._v("*")]),v._v(")")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("HttpClient,WebClient, HttpWebRequest/Response")]),v._v(" "),t("td",[v._v("Invoke-WebRequest")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("prepend")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("prev")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("ps("),t("code",[v._v("*")]),v._v(")")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("Get-Process, ps, gps")]),v._v(" "),t("td",[v._v("ps")])]),v._v(" "),t("tr",[t("td",[v._v("pwd")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("Get-Location, pwd")]),v._v(" "),t("td",[v._v("pwd")])]),v._v(" "),t("tr",[t("td",[v._v("range")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("Range")]),v._v(" "),t("td",[v._v("1..10, 'a'..'f'")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("reduce_by")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("Aggregate")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("reject")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("rename")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("Rename-Item, ren, rni")]),v._v(" "),t("td",[v._v("mv")])]),v._v(" "),t("tr",[t("td",[v._v("reverse")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("Reverse")]),v._v(" "),t("td",[v._v("[Array]::Reverse($var)")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("rm")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("Remove-Item, del, erase, rd, ri, rm, rmdir")]),v._v(" "),t("td",[v._v("rm")])]),v._v(" "),t("tr",[t("td",[v._v("save")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("Write-Output, Out-File")]),v._v(" "),t("td",[v._v("> foo.txt")])]),v._v(" "),t("tr",[t("td",[v._v("select("),t("code",[v._v("***")]),v._v(")")]),v._v(" "),t("td",[v._v("select")]),v._v(" "),t("td",[v._v("Select")]),v._v(" "),t("td",[v._v("Select-Object, select")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("shells")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("shuffle")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("Random")]),v._v(" "),t("td",[v._v("$var")]),v._v(" "),t("td",[v._v("Sort-Object {Get-Random}")])]),v._v(" "),t("tr",[t("td",[v._v("size")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td",[v._v("Measure-Object, measure")]),v._v(" "),t("td",[v._v("wc")])]),v._v(" "),t("tr",[t("td",[v._v("skip")]),v._v(" "),t("td",[v._v("where row_number()")]),v._v(" "),t("td",[v._v("Skip")]),v._v(" "),t("td",[v._v("Select-Object -Skip")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("skip_until")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("skip_while")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("SkipWhile")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("sort-by")]),v._v(" "),t("td",[v._v("order by")]),v._v(" "),t("td",[v._v("OrderBy, OrderByDescending, ThenBy, ThenByDescending")]),v._v(" "),t("td",[v._v("Sort-Object, sort")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("split_by")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("Split")]),v._v(" "),t("td",[v._v("Split")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("split_column")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("split_row")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("str("),t("code",[v._v("*")]),v._v(")")]),v._v(" "),t("td",[v._v("string functions")]),v._v(" "),t("td",[v._v("String class")]),v._v(" "),t("td",[v._v("String class")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("sum")]),v._v(" "),t("td",[v._v("sum")]),v._v(" "),t("td",[v._v("Sum")]),v._v(" "),t("td",[v._v("Measure-Object, measure")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("sys("),t("code",[v._v("*")]),v._v(")")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("Get-ComputerInfo")]),v._v(" "),t("td",[v._v("uname, lshw, lsblk, lscpu, lsusb, hdparam, free")])]),v._v(" "),t("tr",[t("td",[v._v("table")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td",[v._v("Format-Table, ft, Format-List, fl")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("tags")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("textview("),t("code",[v._v("*")]),v._v(")")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("Get-Content, cat")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("tree("),t("code",[v._v("*")]),v._v(")")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("tree")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("to")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("Export/ConvertTo-{Csv,Xml,Html,Json}")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("touch")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("Set-Content")]),v._v(" "),t("td",[v._v("touch")])]),v._v(" "),t("tr",[t("td",[v._v("trim")]),v._v(" "),t("td",[v._v("rtrim, ltrim")]),v._v(" "),t("td",[v._v("Trim, TrimStart, TrimEnd")]),v._v(" "),t("td",[v._v("Trim")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("uniq")]),v._v(" "),t("td",[v._v("distinct")]),v._v(" "),t("td",[v._v("Distinct")]),v._v(" "),t("td",[v._v("Get-Unique, gu")]),v._v(" "),t("td",[v._v("uniq")])]),v._v(" "),t("tr",[t("td",[v._v("update("),t("code",[v._v("**")]),v._v(")")]),v._v(" "),t("td",[v._v("As")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("version")]),v._v(" "),t("td",[v._v("select @@version")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("$PSVersionTable")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("with_env")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("$env:FOO = 'bar'")]),v._v(" "),t("td",[v._v('export foo = "bar"')])]),v._v(" "),t("tr",[t("td",[v._v("what")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("where")]),v._v(" "),t("td",[v._v("where")]),v._v(" "),t("td",[v._v("Where")]),v._v(" "),t("td",[v._v('Where-Object, where, "?" operator')]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("which")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("which")])]),v._v(" "),t("tr",[t("td",[v._v("wrap")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")])])]),v._v(" "),t("ul",[t("li",[t("code",[v._v("*")]),v._v(" - these commands are part of the standard plugins")]),v._v(" "),t("li",[t("code",[v._v("**")]),v._v(" - renamed from "),t("code",[v._v("edit")]),v._v(" to "),t("code",[v._v("update")]),v._v(" in 0.13.1")]),v._v(" "),t("li",[t("code",[v._v("***")]),v._v(" - renamed from "),t("code",[v._v("pick")]),v._v(" to "),t("code",[v._v("select")]),v._v(" in 0.13.1")])])])}),[],!1,null,null,null);_.default=e.exports}}]);