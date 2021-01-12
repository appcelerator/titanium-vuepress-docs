(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{1987:function(t,a,e){"use strict";e.r(a);var s=e(21),o=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"using-titanium-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-titanium-modules"}},[t._v("#")]),t._v(" Using Titanium Modules")]),t._v(" "),s("p",[t._v("Titanium Modules provide JavaScript bindings for your application to use and access native features and libraries. Titanium Modules are linked (or bundled) at build time. They must be built to support the target architectures that your application is also targeting.")]),t._v(" "),s("h2",{attrs:{id:"finding-and-downloading-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#finding-and-downloading-modules"}},[t._v("#")]),t._v(" Finding and Downloading Modules")]),t._v(" "),s("p",[t._v("When looking for a specific Titanium Module, you should search gitTio: "),s("a",{attrs:{href:"http://gitt.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://gitt.io/"),s("OutboundLink")],1),t._v(". Follow the instructions on "),s("a",{attrs:{href:"http://gitt.io/cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://gitt.io/cli"),s("OutboundLink")],1),t._v(" to download the modules.")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("💡 Hint")]),t._v(" "),s("p",[t._v("Previously, the Appcelerator Marketplace was a location to find and download Titanium modules. The Appcelerator Marketplace is no longer used and Titanium artifacts are no longer available through the Marketplace in the "),s("strong",[t._v("AMPLIFY Platform")]),t._v(". If you need access to a Titanium artifact, or if you have questions about artifacts that you have purchased through the Appcelerator Marketplace previously, please contact Axway at "),s("a",{attrs:{href:"https://axway.jiveon.com/external-link.jspa?url=https%3A%2F%2Feur01.safelinks.protection.outlook.com%2F%3Furl%3Dhttp%253A%252F%252Fclick.axway.com%252FZDfeb0HT30000y04P30jVTh%26data%3D02%257C01%257Cbvandenberg%2540axway.com%257C3264da447c264d49144908d858c7b56f%257C300f59df78e6436f9b27b64973e34f7d%257C1%257C0%257C637356962044056122%26sdata%3DILggs9f%252Baq7cHg3Ve0DGccGw97Fd91ciBPynYEFX8SI%253D%26reserved%3D0",target:"_blank",rel:"noopener noreferrer"}},[t._v("marketplace-admin@axway.com"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"installing-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-modules"}},[t._v("#")]),t._v(" Installing Modules")]),t._v(" "),s("p",[t._v("Once a module is downloaded, it must be installed in a specific project or in a shared global location.")]),t._v(" "),s("h3",{attrs:{id:"per-project-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#per-project-installation"}},[t._v("#")]),t._v(" Per-Project Installation")]),t._v(" "),s("h4",{attrs:{id:"from-studio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from-studio"}},[t._v("#")]),t._v(" From Studio")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Open Studio.")])]),t._v(" "),s("li",[s("p",[t._v("Expand the project folder in the "),s("strong",[t._v("Project Explorer")]),t._v(" view.")])]),t._v(" "),s("li",[s("p",[t._v('Drag the .zip file from the download location into the current project, placing it at the root of the project. Choose to "Copy Files".')])])]),t._v(" "),s("h4",{attrs:{id:"automatic-unzip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#automatic-unzip"}},[t._v("#")]),t._v(" Automatic Unzip")]),t._v(" "),s("p",[t._v("Place the module zip file in the root of the project directory. The Titanium build will automatically extract all registered Titanium modules in the root of the project.")]),t._v(" "),s("h4",{attrs:{id:"manually-unzip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manually-unzip"}},[t._v("#")]),t._v(" Manually Unzip")]),t._v(" "),s("p",[t._v("Extract the .zip file into the root of your project. It should extract into the "),s("code",[t._v("modules/<platform>/<module-id>/<version>")]),t._v(" directory.")]),t._v(" "),s("h3",{attrs:{id:"global-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-installation"}},[t._v("#")]),t._v(" Global Installation")]),t._v(" "),s("p",[t._v("Modules can be globally installed in the following locations:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("macOS")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("~/Library/Application Support/Titanium")]),t._v(" (preferred)")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("/Library/Application Support/Titanium")])])])])]),t._v(" "),s("li",[s("p",[t._v("Linux")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("~/.titanium/modules")])])])]),t._v(" "),s("li",[s("p",[t._v("Windows")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("%ProgramData%\\Titanium")]),t._v(" (preferred)")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("%APPDATA%\\Titanium")]),t._v(" "),s("code",[t._v("%ALLUSERSPROFILE%\\Application Data\\Titanium\\")])])])])])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("💡 Hint")]),t._v(" "),s("p",[t._v("On macOS, the "),s("code",[t._v("~/Library")]),t._v(" directory may be hidden. Press "),s("code",[t._v("Shift+Command+G")]),t._v(" in the Finder to open a dialog allowing you to navigate to the folder directly to "),s("code",[t._v("~/Library/Application Support/Titanium")]),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"using-your-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-your-module"}},[t._v("#")]),t._v(" Using Your Module")]),t._v(" "),s("p",[t._v("To use your module in a mobile app, follow these steps:")]),t._v(" "),s("p",[s("img",{attrs:{src:e(553),alt:"Screen_Shot_2012-03-30_at_11.28.02_AM"}})]),t._v(" "),s("h3",{attrs:{id:"using-the-tiapp-xml-editor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-tiapp-xml-editor"}},[t._v("#")]),t._v(" Using the tiapp.xml Editor")]),t._v(" "),s("p",[t._v("Studio has a module section inside the "),s("code",[t._v("tiapp.xml")]),t._v(" editor to greatly simplify the usage of modules. In order to use the module editor:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Double-click on the "),s("code",[t._v("tiapp.xml")]),t._v(" file")])]),t._v(" "),s("li",[s("p",[t._v("In the right-hand column, click the + to add a new module. It will show you a list of modules available in your global directory and in your project.")])]),t._v(" "),s("li",[s("p",[t._v("Once you've added a module, clicking the pencil (edit) icon allows you to switch versions if there are multiple version available.")])]),t._v(" "),s("li",[s("p",[t._v("If you wish to delete a module, click the x (delete) button to delete the module.")])])]),t._v(" "),s("p",[t._v("Switching a SDK will re-validate the modules based on their compatibility with the selected SDK. If they are not compatible, they will show warnings as appropriate, allowing you to update as appropriate.")]),t._v(" "),s("h3",{attrs:{id:"manually"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manually"}},[t._v("#")]),t._v(" Manually")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Open the module's .zip file, and look at the folder structure. The path will look like the following:")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("Folder Structure:")]),t._v(" "),s("code",[t._v("modules/<platform>/<module-id>/<version>")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Example:")]),t._v(" "),s("code",[t._v("modules/ios/ti.greystripe/1.1")])])])])])]),t._v(" "),s("li",[s("p",[t._v("Open Studio, and the "),s("code",[t._v("tiapp.xml")]),t._v(" file for the project in question.")])]),t._v(" "),s("li",[s("p",[t._v("Switch to the "),s("code",[t._v("tiapp.xml")]),t._v(" tab.")])]),t._v(" "),s("li",[s("p",[t._v("In the application's "),s("code",[t._v("tiapp.xml")]),t._v(", find the "),s("code",[t._v("<modules/>")]),t._v(" node, and replace it with the new "),s("code",[t._v("<modules>")]),t._v(' content. If you already have modules, just add a new node for the new module. Note that the "version" and "platform" attributes are optional. When "version" is not specified, the latest version of the module will be used (as of Titanium SDK 2.0.0), and the "platform" tag is only necessary when using a module that is not available on both platforms.')]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!-- $MODULE_VERSION should be the same as "version" from above --\x3e')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("modules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- For example, if we were adding the greystripe module: --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("module")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("platform")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ios"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("ti.greystripe"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("module")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("modules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Use the require function to load the module in the app's code, for example:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Module "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$MODULE_ID'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For example, to load the greystripe module:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" greystripe "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ti.greystripe'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("The next time the app is launched or built, the module should be included with the application.")])])])])}),[],!1,null,null,null);a.default=o.exports},553:function(t,a,e){t.exports=e.p+"assets/img/Screen_Shot_2012-03-30_at_11.28.02_AM.fdf8757c.png"}}]);