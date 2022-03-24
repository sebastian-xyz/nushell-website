(window.webpackJsonp=window.webpackJsonp||[]).push([[422],{906:function(e,t,o){"use strict";o.r(t);var s=o(35),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"externs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#externs"}},[e._v("#")]),e._v(" Externs")]),e._v(" "),o("p",[e._v("Calling external commands is a fundamental part of using Nushell as a shell (and often using Nushell as a language). There's a problem, though, commands outside of Nushell means that Nushell can't help with finding errors in the call, or completions, or syntax highlighting.")]),e._v(" "),o("p",[e._v("This is where "),o("code",[e._v("extern")]),e._v(" comes in. The "),o("code",[e._v("extern")]),e._v(" keyword allows you to write a full signature for the command that lives outside of Nushell so that you get all the benefits above. If you take a look at the default config, you'll notice that there are a few extern calls in there. Here's one of them:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('  export extern "git push" [\n    remote?: string@"nu-complete git remotes", # the name of the remote\n    refspec?: string@"nu-complete git branches"# the branch / refspec\n    --verbose(-v)                              # be more verbose\n    --quiet(-q)                                # be more quiet\n    --repo: string                             # repository\n    --all                                      # push all refs\n    --mirror                                   # mirror all refs\n    --delete(-d)                               # delete refs\n    --tags                                     # push tags (can\'t be used with --all or --mirror)\n    --dry-run(-n)                              # dry run\n    --porcelain                                # machine-readable output\n    --force(-f)                                # force updates\n    --force-with-lease: string                 # require old value of ref to be at this value\n    --recurse-submodules: string               # control recursive pushing of submodules\n    --thin                                     # use thin pack\n    --receive-pack: string                     # receive pack program\n    --exec: string                             # receive pack program\n    --set-upstream(-u)                         # set upstream for git pull/status\n    --progress                                 # force progress reporting\n    --prune                                    # prune locally removed refs\n    --no-verify                                # bypass pre-push hook\n    --follow-tags                              # push missing but relevant tags\n    --signed: string                           # GPG sign the push\n    --atomic                                   # request atomic transaction on remote side\n    --push-option(-o): string                  # option to transmit\n    --ipv4(-4)                                 # use IPv4 addresses only\n    --ipv6(-6)                                 # use IPv6 addresses only\n  ]\n')])])]),o("p",[e._v("You'll notice this gives you all the same descriptive syntax that internal commands do, letting you describe flags, short flags, positional parameters, types, and more.")]),e._v(" "),o("h2",{attrs:{id:"types-and-custom-completions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#types-and-custom-completions"}},[e._v("#")]),e._v(" Types and custom completions")]),e._v(" "),o("p",[e._v("In the above example, you'll notice some types are followed by "),o("code",[e._v("@")]),e._v(" followed by the name of a command. We talk more about "),o("RouterLink",{attrs:{to:"/book/custom_completions.html"}},[e._v("custom completions")]),e._v(" in their own section.")],1),e._v(" "),o("p",[e._v("Both the type (or shape) of the argument and the custom completion tell Nushell about how to complete values for that flag or position. For example, setting a shape to "),o("code",[e._v("path")]),e._v(" allows Nushell to complete the value to a filepath for you. Using the "),o("code",[e._v("@")]),e._v(" with a custom completion overrides this default behavior, letting the custom completion give you full completion list.")]),e._v(" "),o("h2",{attrs:{id:"limitations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[e._v("#")]),e._v(" Limitations")]),e._v(" "),o("p",[e._v("There are a few limitations to the current "),o("code",[e._v("extern")]),e._v(" syntax. In Nushell, flags and positional arguments are very flexible: flags can precede positional arguments, flags can be mixed into positional arguments, and flags can follow positional arguments. Many external commands are not this flexible. There is not yet a way to require a particular ordering of flags and positional arguments to the style required by the external.")]),e._v(" "),o("p",[e._v("The second limitation is that some externals require flags to be passed using "),o("code",[e._v("=")]),e._v(" to separate the flag and the value. In Nushell, the "),o("code",[e._v("=")]),e._v(" is a convenient optional syntax and there's currently no way to required its use.")])])}),[],!1,null,null,null);t.default=a.exports}}]);