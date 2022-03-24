(window.webpackJsonp=window.webpackJsonp||[]).push([[436],{920:function(e,t,a){"use strict";a.r(t);var s=a(35),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[e._v("#")]),e._v(" Plugins")]),e._v(" "),a("p",[e._v("Nu can be extended using plugins. Plugins behave much like Nu's built-in commands, with the added benefit that they can be added separately from Nu itself.")]),e._v(" "),a("p",[e._v("Nu plugins are executables; Nu launches them as needed and communicates with them over "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Standard_streams",target:"_blank",rel:"noopener noreferrer"}},[e._v("stdin, stdout, and stderr"),a("OutboundLink")],1),e._v(". Nu plugins can use either JSON or "),a("a",{attrs:{href:"https://capnproto.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cap'n Proto"),a("OutboundLink")],1),e._v(" as their communication encoding.")]),e._v(" "),a("h2",{attrs:{id:"adding-a-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-plugin"}},[e._v("#")]),e._v(" Adding a plugin")]),e._v(" "),a("p",[e._v("To add a plugin, call the "),a("RouterLink",{attrs:{to:"/book/commands/register.html"}},[a("code",[e._v("register")])]),e._v(" command to tell Nu where to find it. As you do, you'll need to also tell Nushell what encoding the plugin uses.")],1),e._v(" "),a("p",[e._v("Linux+macOS:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> register --encoding=capnp ./my_plugins/my-cool-plugin\n")])])]),a("p",[e._v("Windows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> register --encoding=capnp .\\my_plugins\\my-cool-plugin.exe\n")])])]),a("p",[e._v("When "),a("RouterLink",{attrs:{to:"/book/commands/register.html"}},[a("code",[e._v("register")])]),e._v(" is called:")],1),e._v(" "),a("ol",[a("li",[e._v('Nu launches the plugin and sends it a "Signature" message over stdin')]),e._v(" "),a("li",[e._v("The plugin responds via stdout with a message containing its signature (name, description, arguments, flags, and more)")]),e._v(" "),a("li",[e._v("Nu saves the plugin signature in the file at "),a("code",[e._v("$nu.plugin-path")]),e._v(", so registration is persisted across across multiple launches")])]),e._v(" "),a("p",[e._v("Once registered, the plugin is available as part of your set of commands:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> help commands | where is_plugin == true\n")])])]),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("p",[e._v("Nu's main repo contains example plugins that are useful for learning how the plugin protocol works:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/nushell/nushell/tree/main/crates/nu_plugin_example",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rust"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/nushell/nushell/blob/main/crates/nu_plugin_python/plugin.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"debugging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debugging"}},[e._v("#")]),e._v(" Debugging")]),e._v(" "),a("p",[e._v("The simplest way to debug a plugin is to print to stderr; plugins' standard error streams are redirected through Nu and displayed to the user.")]),e._v(" "),a("h2",{attrs:{id:"help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#help"}},[e._v("#")]),e._v(" Help")]),e._v(" "),a("p",[e._v("Nu's plugin documentation is a work in progress. If you're unsure about something, the #plugins channel on "),a("a",{attrs:{href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"}},[e._v("the Nu Discord"),a("OutboundLink")],1),e._v(" is a great place to ask questions!")])])}),[],!1,null,null,null);t.default=n.exports}}]);