(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{445:function(e,a,t){e.exports=t.p+"assets/img/0_9_0_error_highlight.9945d35a.png"},512:function(e,a,t){"use strict";t.r(a);var o=t(35),s=Object(o.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"nushell-0-9-0"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nushell-0-9-0"}},[e._v("#")]),e._v(" Nushell 0.9.0")]),e._v(" "),o("p",[e._v("Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.")]),e._v(" "),o("p",[e._v("We're happy to announce the 0.9.0 release of Nu. This release offers better help and error feedback, better support for the native shell, new commands, lots of command improvements, and bugfixes.")]),e._v(" "),o("h1",{attrs:{id:"where-to-get-it"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#where-to-get-it"}},[e._v("#")]),e._v(" Where to get it")]),e._v(" "),o("p",[e._v("Nu 0.9.0 is available as "),o("a",{attrs:{href:"https://github.com/nushell/nushell/releases/tag/0.9.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("pre-built binaries"),o("OutboundLink")],1),e._v(" or from "),o("a",{attrs:{href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),o("OutboundLink")],1),e._v(". If you have Rust installed you can install it using "),o("code",[e._v("cargo install nu")]),e._v(".")]),e._v(" "),o("p",[e._v("If you want more goodies, you can install "),o("code",[e._v("cargo install nu --features=stable")]),e._v(".")]),e._v(" "),o("p",[e._v("As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use "),o("code",[e._v("cargo install nu_plugin_<plugin name>")]),e._v(".")]),e._v(" "),o("h1",{attrs:{id:"what-s-new"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-s-new"}},[e._v("#")]),e._v(" What's new")]),e._v(" "),o("h2",{attrs:{id:"help-available-on-all-commands-amanita-muscaria"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#help-available-on-all-commands-amanita-muscaria"}},[e._v("#")]),e._v(" "),o("code",[e._v("--help")]),e._v(" available on all commands (Amanita-muscaria)")]),e._v(" "),o("p",[e._v("One of the first things a user might do in a new shell is to type a familiar command and pass it "),o("code",[e._v("--help")]),e._v(". A perfectly reasonable thing to do, and with 0.9.0 it does exactly you'd expect. It will now print out the help information for the given command for all internal commands (much in the same way as using "),o("code",[e._v("help <command name>")]),e._v(")")]),e._v(" "),o("h2",{attrs:{id:"better-error-feedback-wycats-andrasio"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#better-error-feedback-wycats-andrasio"}},[e._v("#")]),e._v(" Better error feedback (wycats, andrasio)")]),e._v(" "),o("p",[o("img",{attrs:{src:t(445),alt:"Better inline errors!"}})]),e._v(" "),o("p",[e._v("Our improvements to the parser as part of 0.9.0 also come with some fun perks. One of these is that unknown flags, and similar errors, will now get highlighted red to let you know that this isn't a valid input to the command.")]),e._v(" "),o("h2",{attrs:{id:"shelling-out-jonathandturner"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#shelling-out-jonathandturner"}},[e._v("#")]),e._v(" Shelling out (jonathandturner)")]),e._v(" "),o("p",[e._v("An early feature of Nu that people that has been a popular request to bring back is \"shelling out\". When Nu doesn't recognize a command, it will try to find it as an external command. In the last few versions, this was limited as Nu was not able to execute shell scripts, .cmd scripts... basically anything that wasn't an executable. The problem is that lots of apps use scripts as a way to configure what to execute (commands like "),o("code",[e._v("code")]),e._v(", "),o("code",[e._v("npm")]),e._v(", and others are common scripts behind the scenes).")]),e._v(" "),o("p",[e._v('With 0.9.0, we\'re returning to our earlier behavior and executing both binaries and shell scripts by calling to the platform-native shell when we call an external command. While this should largely be invisible as a user, more things should "just work" how they would in bash or Windows Terminal.')]),e._v(" "),o("h2",{attrs:{id:"new-commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new-commands"}},[e._v("#")]),e._v(" New commands")]),e._v(" "),o("h3",{attrs:{id:"du-amanita-muscaria"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#du-amanita-muscaria"}},[e._v("#")]),e._v(" du (Amanita-muscaria)")]),e._v(" "),o("p",[e._v("Nu now has its own "),o("code",[e._v("du")]),e._v(" command to show the disk usage of a part of the file system. This is a handy way of quickly looking for where all your free space went.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("❯ du\n───┬───────────────┬─────────┬────────────────\n # │ name          │ size    │ contents\n───┼───────────────┼─────────┼────────────────\n 0 │ .git          │  4.7 MB │ [table 6 rows]\n 1 │ .jekyll-cache │ 49.0 KB │ [table 1 rows]\n 2 │ _includes     │   881 B │\n 3 │ _layouts      │  4.3 KB │\n 4 │ _posts        │ 82.4 KB │\n 5 │ _sass         │ 21.5 KB │\n 6 │ _site         │  5.3 MB │ [table 4 rows]\n 7 │ assets        │  2.4 MB │ [table 1 rows]\n 8 │ images        │  2.4 MB │\n───┴───────────────┴─────────┴────────────────\n")])])]),o("h3",{attrs:{id:"clear-jesterornot"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#clear-jesterornot"}},[e._v("#")]),e._v(" clear (JesterOrNot)")]),e._v(" "),o("p",[e._v("Short, sweet, and to the point, you can now "),o("code",[e._v("clear")]),e._v(" your screen with the new "),o("code",[e._v("clear")]),e._v(" command. Like our other commands, this works across all the platforms Nu runs on.")]),e._v(" "),o("h2",{attrs:{id:"new-welcome-message-jonathandturner"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new-welcome-message-jonathandturner"}},[e._v("#")]),e._v(" New welcome message (jonathandturner)")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Welcome to Nushell 0.9.0 (type 'help' for more info)\nnushell on 📙 bump_to_0_9_0 is 📦 v0.9.0 via 🦀 v1.40.0\n❯\n")])])]),o("p",[e._v("The first time you open Nu now you'll be greeted by a brief message to tell you the version of Nu and a reminder to use the "),o("code",[e._v("help")]),e._v(" command to learn more about Nu and how it works.")]),e._v(" "),o("h2",{attrs:{id:"improved-table-streaming-jonathandturner"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#improved-table-streaming-jonathandturner"}},[e._v("#")]),e._v(" Improved table streaming (jonathandturner)")]),e._v(" "),o("p",[e._v("If you've used earlier versions of Nu, you may have wondered why every 50 rows we start a new table. This is where the implementation showed through a bit more than it should. As tables are printed, they are created and then displayed as enough rows are available. This means that output will spool to the screen and not wait for the table to finish processing before you see something. In general, it's good to see the tables earlier, but seeing a different shape of table every 50 rows can be annoying.")]),e._v(" "),o("p",[e._v("We've updated table output to be a lot cleaner, using this logic:")]),e._v(" "),o("ul",[o("li",[e._v("If rows are being output quickly, build a larger table before outputting it")]),e._v(" "),o("li",[e._v("If rows are being output slowly, buffer a smaller number of rows and display them (just as before)")]),e._v(" "),o("li",[e._v("If rows change shape, switch to showing a different table. This helps you visually see when your data source is giving you a new kind of data")])]),e._v(" "),o("h2",{attrs:{id:"command-improvements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#command-improvements"}},[e._v("#")]),e._v(" Command improvements")]),e._v(" "),o("h3",{attrs:{id:"ls-and-rm-now-error-when-a-path-isn-t-found-amanita-muscaria"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ls-and-rm-now-error-when-a-path-isn-t-found-amanita-muscaria"}},[e._v("#")]),e._v(" "),o("code",[e._v("ls")]),e._v(" and "),o("code",[e._v("rm")]),e._v(" now error when a path isn't found (Amanita-muscaria)")]),e._v(" "),o("p",[e._v("Adding a bit of polish this release, "),o("code",[e._v("ls")]),e._v(" and "),o("code",[e._v("rm")]),e._v(" will now error if you pass them a path they can't find.")]),e._v(" "),o("h3",{attrs:{id:"ls-can-optionally-show-just-the-filename-coolshaurya"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ls-can-optionally-show-just-the-filename-coolshaurya"}},[e._v("#")]),e._v(" "),o("code",[e._v("ls")]),e._v(" can optionally show just the filename (coolshaurya)")]),e._v(" "),o("p",[e._v("If you've used "),o("code",[e._v("ls")]),e._v(" on your subdirectories, you might have noticed that the subdirectory becomes part of the filename. This can be great for building up a pipeline (and a script in the future), but sometimes all you care about is the filename. You can now pass "),o("code",[e._v("ls")]),e._v(" the "),o("code",[e._v("--short-names")]),e._v(" command flag to get just the filename.")]),e._v(" "),o("h3",{attrs:{id:"ls-can-also-optionally-show-symlink-targets-josephtlyons"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ls-can-also-optionally-show-symlink-targets-josephtlyons"}},[e._v("#")]),e._v(" "),o("code",[e._v("ls")]),e._v(" can also optionally show symlink targets (JosephTLyons)")]),e._v(" "),o("p",[e._v("Further improving "),o("code",[e._v("ls")]),e._v(", you can now see the symlink targets with the "),o("code",[e._v("--full")]),e._v(" flag.")]),e._v(" "),o("h3",{attrs:{id:"ls-smaller-by-default-now-with-more-info-with-full-jonathandturner"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ls-smaller-by-default-now-with-more-info-with-full-jonathandturner"}},[e._v("#")]),e._v(" "),o("code",[e._v("ls")]),e._v(" smaller by default, now with more info with "),o("code",[e._v("--full")]),e._v(" (jonathandturner)")]),e._v(" "),o("p",[e._v("To make Nu easier to use on smaller terminals, the "),o("code",[e._v("ls")]),e._v(" command will now try to take up less space by default. The columns from earlier version of Nu (and a few more!) are still available, now behind the "),o("code",[e._v("--full")]),e._v(" flag.")]),e._v(" "),o("h3",{attrs:{id:"from-xml-now-includes-attributes-borimino"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#from-xml-now-includes-attributes-borimino"}},[e._v("#")]),e._v(" "),o("code",[e._v("from-xml")]),e._v(" now includes attributes (Borimino)")]),e._v(" "),o("p",[e._v("One of the first commands we built to import file data into Nu was "),o("code",[e._v("from-xml")]),e._v(". It was good enough to get started, and with 0.9.0 it improves to being a more precise representation of what's in the XML file. The command will now include attribute values as part of the table.")]),e._v(" "),o("h3",{attrs:{id:"sort-by-works-with-more-value-types-koenaad"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sort-by-works-with-more-value-types-koenaad"}},[e._v("#")]),e._v(" "),o("code",[e._v("sort-by")]),e._v(" works with more value types (koenaad)")]),e._v(" "),o("p",[e._v("Our sorting command "),o("code",[e._v("sort-by")]),e._v(" can now work over more value types, which simplifies some common sorting tasks.")]),e._v(" "),o("h3",{attrs:{id:"debug-now-pretty-prints-its-output-sandorex"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#debug-now-pretty-prints-its-output-sandorex"}},[e._v("#")]),e._v(" "),o("code",[e._v("debug")]),e._v(" now pretty-prints its output (sandorex)")]),e._v(" "),o("p",[e._v("When working on Nu itself, there's a handy "),o("code",[e._v("debug")]),e._v(" command which gives you all the information about the value coming through the pipeline. This is now prett-printed by default to make it easier to read.")]),e._v(" "),o("h3",{attrs:{id:"autocompletion-can-now-be-configured-jacobious52"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#autocompletion-can-now-be-configured-jacobious52"}},[e._v("#")]),e._v(" autocompletion can now be configured (Jacobious52)")]),e._v(" "),o("p",[e._v("Autocompletion at the Nu prompt can now be changed between circular (the default) and list.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("> config --set [completion_mode list]\n")])])]),o("h3",{attrs:{id:"more-improvements-to-which-avandesa"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#more-improvements-to-which-avandesa"}},[e._v("#")]),e._v(" More improvements to "),o("code",[e._v("which")]),e._v(" (avandesa)")]),e._v(" "),o("p",[e._v("The structured "),o("code",[e._v("which")]),e._v(" continues to improve 0.9.0 and will now give an error in cases that it could not be performed correctly.")]),e._v(" "),o("h3",{attrs:{id:"improvements-to-calling-external-commands-thegedge-andrasio-koenaad"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#improvements-to-calling-external-commands-thegedge-andrasio-koenaad"}},[e._v("#")]),e._v(" Improvements to calling external commands (thegedge, andrasio, koenaad)")]),e._v(" "),o("p",[e._v("A batch of improvements should allow external commands to feel a bit faster and work more consistently with the pipeline.")]),e._v(" "),o("h2",{attrs:{id:"documentation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#documentation"}},[e._v("#")]),e._v(" Documentation")]),e._v(" "),o("h3",{attrs:{id:"more-command-docs-coolshaurya"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#more-command-docs-coolshaurya"}},[e._v("#")]),e._v(" More command docs (coolshaurya)")]),e._v(" "),o("p",[e._v("We're continuing to document the commands that are available and continue filling out command documentation where it's missing.")]),e._v(" "),o("h3",{attrs:{id:"more-readmes-and-code-documentation-notryanb-jonathandturner"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#more-readmes-and-code-documentation-notryanb-jonathandturner"}},[e._v("#")]),e._v(" More READMEs and code documentation (notryanb, jonathandturner)")]),e._v(" "),o("p",[e._v("Contributors to Nu will also appreciate that we're working our way through the code and source repositories and documenting how each part works. This should help developers get used to Nu from the inside and find a much easier path to jump in.")]),e._v(" "),o("h1",{attrs:{id:"looking-ahead"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#looking-ahead"}},[e._v("#")]),e._v(" Looking ahead")]),e._v(" "),o("p",[e._v("With 0.9.0, we've added a lot of \"quality of life\" improvements that we hope you enjoy. We'd love to hear from you how 0.9.0 works for you.")]),e._v(" "),o("p",[e._v("Next release will be 0.10.0, as we continue to improve Nu. We're excited about what's coming, and can't wait to play with it ourselves!")])])}),[],!1,null,null,null);a.default=s.exports}}]);