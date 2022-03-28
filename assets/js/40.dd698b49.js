(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{509:function(e,t,a){"use strict";a.r(t);var n=a(35),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"nushell-0-7-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nushell-0-7-0"}},[e._v("#")]),e._v(" Nushell 0.7.0")]),e._v(" "),a("p",[e._v("Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.")]),e._v(" "),a("p",[e._v("We're happy to announce the 0.7.0 release of Nu. This release has a couple new features, bugfixes, and lots of internal improvements on the way to upcoming features.")]),e._v(" "),a("h1",{attrs:{id:"where-to-get-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-to-get-it"}},[e._v("#")]),e._v(" Where to get it")]),e._v(" "),a("p",[e._v("Nu 0.7.0 is available as "),a("a",{attrs:{href:"https://github.com/nushell/nushell/releases/tag/0.7.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("pre-built binaries"),a("OutboundLink")],1),e._v(" or from "),a("a",{attrs:{href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),a("OutboundLink")],1),e._v(". If you have Rust installed you can install it using "),a("code",[e._v("cargo install nu")]),e._v(" (or if you want all stable features "),a("code",[e._v("cargo install nu --features=stable")]),e._v(").")]),e._v(" "),a("h1",{attrs:{id:"ranges-wycats-sebastian-xyz"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ranges-wycats-sebastian-xyz"}},[e._v("#")]),e._v(" Ranges (wycats, sebastian-xyz)")]),e._v(" "),a("p",[e._v("We've added ranges as new fundamental type in Nu. To use it, use "),a("code",[e._v("<number>..<number>")]),e._v(". Currently, you can use it with the new "),a("code",[e._v("range")]),e._v(" command, which lets you do commands like:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ls | range 3..5\n")])])]),a("p",[e._v("And return rows 3 through 5 of the table that "),a("code",[e._v("ls")]),e._v(" gives you.")]),e._v(" "),a("h1",{attrs:{id:"autocomplete-improvements-jonathandturner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autocomplete-improvements-jonathandturner"}},[e._v("#")]),e._v(" Autocomplete improvements (jonathandturner)")]),e._v(" "),a("p",[e._v("As we improve the parser, we are getting more opportunities to do more with the results. One feature we added recently is the ability to autocomplete flags for internal commands.")]),e._v(" "),a("p",[e._v("For example, if you want to see what's available for the "),a("code",[e._v("config")]),e._v(" command, you can now type "),a("code",[e._v("config --")]),e._v(" and then immediately use the "),a("code",[e._v("<tab>")]),e._v(" key to cycle through possible options.")]),e._v(" "),a("h1",{attrs:{id:"nu-becomes-multiple-crates-wycats-jonathandturner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nu-becomes-multiple-crates-wycats-jonathandturner"}},[e._v("#")]),e._v(" Nu becomes multiple crates (wycats, jonathandturner)")]),e._v(" "),a("p",[e._v("Part of a big effort to get Nu ready for script support is to refactor the current codebase to make it cleaner and easier to work with.")]),e._v(" "),a("p",[e._v("For the last few weeks, a big part of this refactor involved splitting our growing monolith of a codebase into separate sub-crates that work together to give the same functionality. As we've done so, we've been able to clean up some of the interfaces between the code. The end result is something that already is easier to work with, and we're excited about what this means for future development.")]),e._v(" "),a("p",[e._v("One side effect of this work is that we've now separated out the plugins from the main "),a("code",[e._v("nu")]),e._v(" crate. This gives you more options to configure your Nu setup how you want, as each optional crate can be separately installed.")]),e._v(" "),a("p",[e._v("From cargo, you can install the main crate with:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cargo install nu\n")])])]),a("p",[e._v("Then, you can install the plugins the same way. You can find them because they have a name starting with "),a("code",[e._v("nu_plugin_")]),e._v(". For example, to install the textview plugin:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cargo install nu_plugin_textview\n")])])]),a("p",[e._v("The current set of plugins includes:")]),e._v(" "),a("ul",[a("li",[e._v("nu_plugin_average")]),e._v(" "),a("li",[e._v("nu_plugin_binaryview")]),e._v(" "),a("li",[e._v("nu_plugin_fetch")]),e._v(" "),a("li",[e._v("nu_plugin_inc")]),e._v(" "),a("li",[e._v("nu_plugin_match")]),e._v(" "),a("li",[e._v("nu_plugin_post")]),e._v(" "),a("li",[e._v("nu_plugin_ps")]),e._v(" "),a("li",[e._v("nu_plugin_str")]),e._v(" "),a("li",[e._v("nu_plugin_sum")]),e._v(" "),a("li",[e._v("nu_plugin_sys")]),e._v(" "),a("li",[e._v("nu_plugin_textview")]),e._v(" "),a("li",[e._v("nu_plugin_tree")])]),e._v(" "),a("p",[e._v('By default, Nu will install a small set of these plugins ("sys", "ps", "textview", "inc", "str"). You can optionally turn this off using:')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cargo install nu --no-default-features\n")])])]),a("h1",{attrs:{id:"introducing-stable-and-unstable-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introducing-stable-and-unstable-features"}},[e._v("#")]),e._v(" Introducing: stable and unstable features")]),e._v(" "),a("p",[e._v('Another part of the current refactor work is that we\'re splitting the "stable" and "unstable" features up. This lets us experiment a bit easier before a command becomes a stable part of the releases.')]),e._v(" "),a("p",[e._v("Now, to install all the stable features, you can use:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cargo install nu --features=stable\n")])])]),a("p",[e._v("If you want to get both stable "),a("em",[e._v("and")]),e._v(" unstable features, use:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cargo install nu --all-features\n")])])]),a("p",[e._v("Warning: unless you're working on Nu itself you may not want to install all features currently, as you'll see that we're working on an internal tracing tool.")]),e._v(" "),a("h1",{attrs:{id:"moving-the-book-s-sebastian-xyz"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#moving-the-book-s-sebastian-xyz"}},[e._v("#")]),e._v(" Moving the book(s) (sebastian-xyz)")]),e._v(" "),a("p",[e._v("We've been hard at working building up the websites. In the previous release, we talked about \"nushell.sh\" and the new website there. Since then, we've consolidated the books into the new website. Please update your book links to point to the new site:")]),e._v(" "),a("ul",[a("li",[e._v("Nu book - "),a("a",{attrs:{href:"https://www.nushell.sh/book/",target:"_blank",rel:"noopener noreferrer"}},[e._v("nushell.sh/book"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Contributor book - "),a("a",{attrs:{href:"https://www.nushell.sh/contributor-book/",target:"_blank",rel:"noopener noreferrer"}},[e._v("nushell.sh/contributor-book"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Cookbook (in-progress) - "),a("a",{attrs:{href:"https://www.nushell.sh/cookbook/",target:"_blank",rel:"noopener noreferrer"}},[e._v("nushell.sh/cookbook"),a("OutboundLink")],1)])]),e._v(" "),a("h1",{attrs:{id:"command-improvements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-improvements"}},[e._v("#")]),e._v(" Command improvements")]),e._v(" "),a("h2",{attrs:{id:"embed-wrap-jonathandturner-andrasio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#embed-wrap-jonathandturner-andrasio"}},[e._v("#")]),e._v(" Embed -> Wrap (jonathandturner, andrasio)")]),e._v(" "),a("p",[e._v("For better readability, we've renamed the "),a("code",[e._v("embed")]),e._v(" command to "),a("code",[e._v("wrap")]),e._v(". As the name implies, you can now "),a("code",[e._v("wrap")]),e._v(" one table with another. You can also use "),a("code",[e._v("wrap")]),e._v(" to create a table from a stream of values.")]),e._v(" "),a("p",[e._v("For example, you may have a list of strings you want to turn into a table:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> ls | get name\n────┬────────────────────\n #  │ <value>\n────┼────────────────────\n  0 │ target\n  1 │ CODE_OF_CONDUCT.md\n  2 │ .cargo\n  3 │ src\n  4 │ features.toml\n  5 │ TODO.md\n")])])]),a("p",[e._v("We can now name this table using "),a("code",[e._v("wrap")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> ls | get name | wrap filename\n────┬────────────────────\n #  │ filename\n────┼────────────────────\n  0 │ target\n  1 │ CODE_OF_CONDUCT.md\n  2 │ .cargo\n  3 │ src\n  4 │ features.toml\n  5 │ TODO.md\n")])])]),a("h1",{attrs:{id:"internal-improvements-wycats-jonathandturner-thibran-thegedge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#internal-improvements-wycats-jonathandturner-thibran-thegedge"}},[e._v("#")]),e._v(" Internal improvements (wycats, jonathandturner, thibran, thegedge)")]),e._v(" "),a("p",[e._v("Though not visible as additional new features, a group of us has been at work refactoring and cleaning up Nu's internals. This should help us both fix some long-standing bugs as well as make way for new features in the future.")]),e._v(" "),a("p",[e._v('We\'ve also internally introduced a new "line" type, which represents strings that carry a line ending with them. This helps us more easily traffic string data through the system and know how best to output it at the end of the pipeline.')]),e._v(" "),a("h1",{attrs:{id:"bugfixes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bugfixes"}},[e._v("#")]),e._v(" Bugfixes")]),e._v(" "),a("p",[e._v("Of course, with each release, there are the usual bugfixes. We've improved tilde expansion (naufraghi), how internal pipelines are handled (thegedge), and more.")]),e._v(" "),a("h1",{attrs:{id:"improved-docs-tchak-coolshaurya-sebastian-xyz"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#improved-docs-tchak-coolshaurya-sebastian-xyz"}},[e._v("#")]),e._v(" Improved docs (tchak, coolshaurya, sebastian-xyz)")]),e._v(" "),a("p",[e._v('A big "thank you!" for folks continuing to work on the on-going command documentation efforts. Already, we\'re seeing people '),a("RouterLink",{attrs:{to:"/book/command_reference.html"}},[e._v("read about the commands")]),e._v(" on the new website to help them learn Nu, which is great!")],1),e._v(" "),a("h1",{attrs:{id:"what-s-next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next"}},[e._v("#")]),e._v(" What's next?")]),e._v(" "),a("p",[e._v("You might have noticed that with 0.7.0, we're seemingly getting close to 1.0. What happens after 0.9.0? Are we going to take the leap?")]),e._v(" "),a("p",[e._v("In short, not just yet. After 0.9.0, we'll release 0.10.0. Nu is maturing, but it isn't quite ready for the big One-Point-Oh. We'll continue maturing it until it's ready to make the move.")])])}),[],!1,null,null,null);t.default=s.exports}}]);