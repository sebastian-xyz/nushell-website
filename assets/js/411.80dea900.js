(window.webpackJsonp=window.webpackJsonp||[]).push([[411],{876:function(e,t,s){"use strict";s.r(t);var a=s(35),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"installing-nu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-nu"}},[e._v("#")]),e._v(" Installing Nu")]),e._v(" "),s("p",[e._v("The best way currently to get Nu up and running is to install from "),s("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),s("OutboundLink")],1),e._v(", download pre-built binaries from our "),s("a",{attrs:{href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("release page"),s("OutboundLink")],1),e._v(", or build from source.")]),e._v(" "),s("h2",{attrs:{id:"pre-built-binaries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pre-built-binaries"}},[e._v("#")]),e._v(" Pre-built binaries")]),e._v(" "),s("p",[e._v("You can download Nu pre-built from the "),s("a",{attrs:{href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("release page"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("Alternatively, for macOS or Linux, you can install the binary using "),s("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homebrew"),s("OutboundLink")],1),e._v(" by running "),s("code",[e._v("brew install nushell")]),e._v(", and on Windows you can install Nu with "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/package-manager/winget/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Winget"),s("OutboundLink")],1),e._v(" by running "),s("code",[e._v("winget install nushell")]),e._v(", or with "),s("a",{attrs:{href:"https://chocolatey.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chocolatey"),s("OutboundLink")],1),e._v(" by running "),s("code",[e._v("choco install nushell")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),s("p",[s("strong",[e._v("Please note:")]),e._v(" Nu works on Windows 10+ and does not currently have Windows 7/8.1 support.")]),e._v(" "),s("p",[e._v("Download the current release's "),s("code",[e._v(".zip")]),e._v("-file from the "),s("a",{attrs:{href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("release page"),s("OutboundLink")],1),e._v(" and extract it for example to:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("C:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Program Files\n")])])]),s("p",[e._v("And then add the folder of "),s("code",[e._v("nu")]),e._v(" to your PATH. Once we have done that, we can run Nu using the "),s("code",[e._v("nu")]),e._v(" command:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" nu\nC:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Users"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("user"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")])])])]),s("p",[e._v("If you are using "),s("a",{attrs:{href:"https://github.com/microsoft/terminal",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows Terminal"),s("OutboundLink")],1),e._v(" you can set "),s("code",[e._v("nu")]),e._v(" as your default shell by adding:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"guid"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{2b372ca1-1ee2-403d-a839-6d63077ad871}"')]),e._v(",\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hidden"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" false,\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"name"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Nu Shell"')]),e._v(",\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"commandline"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nu.exe"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("to  "),s("code",[e._v('"profiles"')]),e._v(" in your Terminal Settings (JSON-file). The last thing to do is to change the "),s("code",[e._v('"defaultProfile"')]),e._v(" to:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"defaultProfile"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{2b372ca1-1ee2-403d-a839-6d63077ad871}"')]),e._v(",\n")])])]),s("p",[e._v("Now, "),s("code",[e._v("nu")]),e._v(" should load on startup of the Windows Terminal.")]),e._v(" "),s("h2",{attrs:{id:"getting-ready"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-ready"}},[e._v("#")]),e._v(" Getting Ready")]),e._v(" "),s("p",[e._v("Before we can install Nu from source, we need to make sure our system has the necessary requirements. Currently, this means making sure we have both the Rust toolchain and local dependencies installed.")]),e._v(" "),s("h3",{attrs:{id:"installing-a-compiler-suite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-a-compiler-suite"}},[e._v("#")]),e._v(" Installing a compiler suite")]),e._v(" "),s("p",[e._v("For Rust to work properly, you'll need to have a compatible compiler suite installed on your system. These are the recommended compiler suites:")]),e._v(" "),s("ul",[s("li",[e._v("Linux: GCC or Clang")]),e._v(" "),s("li",[e._v("macOS: Clang (install Xcode)")]),e._v(" "),s("li",[e._v("Windows: MSVC (install "),s("a",{attrs:{href:"https://visualstudio.microsoft.com/vs/community/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio"),s("OutboundLink")],1),e._v(" or the "),s("a",{attrs:{href:"https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Build Tools"),s("OutboundLink")],1),e._v(")\n"),s("ul",[s("li",[e._v('Make sure to install the "Desktop development with C++" workload')]),e._v(" "),s("li",[e._v("Any Visual Studio edition will work (Community is free)")])])])]),e._v(" "),s("h3",{attrs:{id:"installing-rust"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-rust"}},[e._v("#")]),e._v(" Installing Rust")]),e._v(" "),s("p",[e._v("If we don't already have Rust on our system, the best way to install it is via "),s("a",{attrs:{href:"https://rustup.rs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("rustup"),s("OutboundLink")],1),e._v(". Rustup is a way of managing Rust installations, including managing using different Rust versions.")]),e._v(" "),s("p",[e._v("Nu currently requires the "),s("strong",[e._v("latest stable (1.55 or later)")]),e._v(" version of Rust. The best way is to let "),s("code",[e._v("rustup")]),e._v(" find the correct version for you. When you first open "),s("code",[e._v("rustup")]),e._v(" it will ask what version of Rust you wish to install:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("Current installation options:\n\ndefault "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("host")]),e._v(" triple: x86_64-unknown-linux-gnu\ndefault toolchain: stable\nprofile: default\nmodify "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("PATH")]),e._v(" variable: "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yes")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" Proceed with installation "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("default"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" Customize installation\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" Cancel installation\n")])])]),s("p",[e._v("Once we are ready, we press 1 and then enter.")]),e._v(" "),s("p",[e._v("If you'd rather not install Rust via "),s("code",[e._v("rustup")]),e._v(", you can also install it via other methods (e.g. from a package in a Linux distro). Just be sure to install a version of Rust that is 1.55 or later.")]),e._v(" "),s("h2",{attrs:{id:"dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),s("h3",{attrs:{id:"debian-ubuntu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debian-ubuntu"}},[e._v("#")]),e._v(" Debian/Ubuntu")]),e._v(" "),s("p",[e._v('You will need to install the "pkg-config" and "libssl-dev" package:')]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" pkg-config libssl-dev\n")])])]),s("p",[e._v("Linux users who wish to use the "),s("code",[e._v("rawkey")]),e._v(" or "),s("code",[e._v("clipboard")]),e._v(' optional features will need to install the "libx11-dev" and "libxcb-composite0-dev" packages:')]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" libxcb-composite0-dev libx11-dev\n")])])]),s("h3",{attrs:{id:"rhel-based-distros"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rhel-based-distros"}},[e._v("#")]),e._v(" RHEL based distros")]),e._v(" "),s("p",[e._v('You will need to install "libxcb", "openssl-devel" and "libX11-devel":')]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" libxcb openssl-devel libX11-devel\n")])])]),s("h3",{attrs:{id:"macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[e._v("#")]),e._v(" macOS")]),e._v(" "),s("p",[e._v("Using "),s("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homebrew"),s("OutboundLink")],1),e._v(', you will need to install "openssl" and "cmake" using:')]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("brew "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" openssl cmake\n")])])]),s("h2",{attrs:{id:"installing-from-crates-io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-from-crates-io"}},[e._v("#")]),e._v(" Installing from "),s("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Once we have the dependencies Nu needs, we can install it using the "),s("code",[e._v("cargo")]),e._v(" command that comes with the Rust compiler.")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" cargo "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" nu\n")])])]),s("p",[e._v("That's it!  The cargo tool will do the work of downloading Nu and its source dependencies, building it, and installing it into the cargo bin path so that we can run it.")]),e._v(" "),s("p",[e._v("If you want to install with more features, you can use:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" cargo "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" nu --features"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("extra\n")])])]),s("p",[e._v("For all the available features, the easiest way is to check out Nu and build it yourself using the same Rust tools:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/nushell/nushell.git\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" nushell\nnushell"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" cargo "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --path "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" --features"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("extra\n")])])]),s("p",[e._v("For this to work, make sure you have all the dependencies (shown above) on your system.")]),e._v(" "),s("p",[e._v("Once installed, we can run Nu using the "),s("code",[e._v("nu")]),e._v(" command:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("$ nu\n/home/jt/Source"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("h2",{attrs:{id:"building-from-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-from-source"}},[e._v("#")]),e._v(" Building from source")]),e._v(" "),s("p",[e._v("We can also build our own Nu from source directly from GitHub. This gives us immediate access to the latest Nu features and bug fixes.")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/nushell/nushell.git\n")])])]),s("p",[e._v("Git will clone the main Nushell repo for us. From there, we can build and run Nu if we are using "),s("code",[e._v("rustup")]),e._v(" with:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" nushell\nnushell"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" cargo build --workspace --features"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("extra "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" cargo run --features"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("extra\n")])])]),s("p",[e._v("You can also build and run Nu in release mode:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("nushell"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" cargo build --release --workspace --features"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("extra "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" cargo run --release --features"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("extra\n")])])]),s("p",[e._v('People familiar with Rust may wonder why we do both a "build" and a "run" step if "run" does a build by default. This is to get around a shortcoming of the new '),s("code",[e._v("default-run")]),e._v(" option in Cargo, and ensure that all plugins are built, though this may not be required in the future.")]),e._v(" "),s("h2",{attrs:{id:"setting-as-your-login-shell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-as-your-login-shell"}},[e._v("#")]),e._v(" Setting as your login shell")]),e._v(" "),s("p",[s("strong",[e._v("!!! Nu is still in development, and may not be stable for everyday use. !!!")])]),e._v(" "),s("p",[e._v("To set the login shell you can use the "),s("a",{attrs:{href:"https://linux.die.net/man/1/chsh",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("chsh")]),s("OutboundLink")],1),e._v(" command.\nSome Linux distributions have a list of valid shells located in "),s("code",[e._v("/etc/shells")]),e._v(" and will disallow changing the shell until Nu is in the whitelist. You may see an error similar to the one below if you haven't updated the "),s("code",[e._v("shells")]),e._v(" file:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("chsh: /home/username/.cargo/bin/nu is an invalid shell\n")])])]),s("p",[e._v("You can add Nu to the list of allowed shells by appending your Nu binary to the "),s("code",[e._v("shells")]),e._v(" file.\nThe path to add can be found with the command "),s("code",[e._v("which nu")]),e._v(", usually it is "),s("code",[e._v("$HOME/.cargo/bin/nu")]),e._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);