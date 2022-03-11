(window.webpackJsonp=window.webpackJsonp||[]).push([[428],{893:function(e,t,a){"use strict";a.r(t);var s=a(35),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"stdout-stderr-and-exit-codes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stdout-stderr-and-exit-codes"}},[e._v("#")]),e._v(" Stdout, Stderr, and Exit Codes")]),e._v(" "),a("p",[e._v("An important piece of interop between Nushell and external commands is working with the standard streams of data coming from the external.")]),e._v(" "),a("p",[e._v("The first of these important streams is stdout.")]),e._v(" "),a("h2",{attrs:{id:"stdout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stdout"}},[e._v("#")]),e._v(" Stdout")]),e._v(" "),a("p",[e._v("Stdout is the way that most external apps will send data into the pipeline or to the screen. Data sent by an external app to its stdout is received by Nushell by default if it's part of a pipeline:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> external | str collect\n")])])]),a("p",[e._v("The above would call the external named "),a("code",[e._v("external")]),e._v(" and would redirect the stdout output stream into the pipeline. With this redirection, Nushell can then pass the data to the next command in the pipeline, here "),a("code",[e._v("str collect")]),e._v(".")]),e._v(" "),a("p",[e._v("Without the pipeline, Nushell will not do any redirection, allowing it to print directly to the screen.")]),e._v(" "),a("h2",{attrs:{id:"stderr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stderr"}},[e._v("#")]),e._v(" Stderr")]),e._v(" "),a("p",[e._v("Another common stream that external applications often use to print error messages is stderr. By default, Nushell does not do any redirection of stderr, which means that by default it will print to the screen.")]),e._v(" "),a("p",[e._v("You can force Nushell to do a redirection by using "),a("code",[e._v("do -i { ... }")]),e._v(". For example, if we wanted to call the external above and redirect its stderr, we would write:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> do -i { external }\n")])])]),a("h2",{attrs:{id:"exit-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exit-code"}},[e._v("#")]),e._v(" Exit code")]),e._v(" "),a("p",[e._v('Finally, external commands have an "exit code". These codes help give a hint to the caller whether the command ran successfully.')]),e._v(" "),a("p",[e._v("Nushell tracks the last exit code of the recently completed external in one of two ways. The first way is with the "),a("code",[e._v("LAST_EXIT_CODE")]),e._v(" environment variable.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> do -i { external }\n> echo $env.LAST_EXIT_CODE\n")])])]),a("p",[e._v("The second uses a command called "),a("code",[e._v("complete")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"using-the-complete-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-complete-command"}},[e._v("#")]),e._v(" Using the "),a("code",[e._v("complete")]),e._v(" command")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("complete")]),e._v(" command allows you to run an external to completion, and gather the stdout, stderr, and exit code together in one record.")]),e._v(" "),a("p",[e._v("If we try to run the external "),a("code",[e._v("cat")]),e._v(" on a file that doesn't exist, we can see what "),a("code",[e._v("complete")]),e._v(" does with the streams, including the redirected stderr:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> do -i { cat unknown.txt } | complete\n╭───────────┬─────────────────────────────────────────────╮\n│ stdout    │                                             │\n│ stderr    │ cat: unknown.txt: No such file or directory │\n│ exit_code │ 1                                           │\n╰───────────┴─────────────────────────────────────────────╯\n")])])]),a("h2",{attrs:{id:"raw-streams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raw-streams"}},[e._v("#")]),e._v(" Raw streams")]),e._v(" "),a("p",[e._v('Both stdout and stderr are represented as "raw streams" inside of Nushell. These are streams that are streams of bytes rather than structured streams, which are what internal Nushell commands use.')]),e._v(" "),a("p",[e._v("Because streams of bytes can be difficult to work with, especially given how common it is to use output as it was text data, Nushell attempts to convert raw streams into text data. This allows other commands to pull on the output of external commands and receive strings they can further process.")]),e._v(" "),a("p",[e._v("Nushell attempts to convert to text using UTF-8. If at any time the conversion fails, the rest of the stream is assumed to always be bytes.")]),e._v(" "),a("p",[e._v("If you want more control over the decoding of the byte stream, you can use the "),a("code",[e._v("decode")]),e._v(" command. The "),a("code",[e._v("decode")]),e._v(" command can be inserted into the pipeline after the external, or other raw stream-creating command, and will handle decoding the bytes based on the argument you give decode. For example, you could decode shift-jis text this way:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> 0x[8a 4c] | decode shift-jis\n貝\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);