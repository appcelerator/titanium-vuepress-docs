(window.webpackJsonp=window.webpackJsonp||[]).push([[749],{2001:function(t,a,s){"use strict";s.r(a);var n=s(21),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"titanium-ui-tab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-tab"}},[t._v("#")]),t._v(" Titanium.UI.Tab")]),t._v(" "),s("TypeHeader"),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("p",[t._v("A "),s("code",[t._v("TabGroup")]),t._v(' tab instance. Each tab includes a button and one or more windows, which\nholds the "contents" of the tab. Users can select a tab by clicking on the tab button.')]),t._v(" "),s("p",[t._v("Use the "),s("type-link",{attrs:{type:"Titanium.UI.createTab"}},[t._v("Titanium.UI.createTab")]),t._v(" method or "),s("strong",[s("code",[t._v("<Tab>")])]),t._v(" Alloy element to create a tab.")],1),t._v(" "),s("p",[t._v("Use "),s("type-link",{attrs:{type:"Titanium.UI.TabGroup.setActiveTab"}},[t._v("TabGroup.setActiveTab")]),t._v(" to switch between tabs\nin a tab group.")],1),t._v(" "),s("p",[t._v("The behavior of tabs and tab groups follows the platform's native navigation style,\nwhich varies significantly between platforms.")]),t._v(" "),s("h3",{attrs:{id:"ios-platform-implementation-notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ios-platform-implementation-notes"}},[t._v("#")]),t._v(" iOS Platform Implementation Notes")]),t._v(" "),s("p",[t._v("On iOS, the tab maintains a stack of windows. Windows on top\nof the stack can partially or totally obscure windows lower in the stack.  Calling\n"),s("type-link",{attrs:{type:"Titanium.UI.Tab.open"}},[t._v("open")]),t._v(" opens a new window on top of the window stack. When a window\nis closed, either by the user or by code, the window is removed from the stack, making\nthe previous window visible. The root tab window cannot be removed.")],1),t._v(" "),s("p",[t._v("On iOS the tab controls are generally kept on screen to allow a user to\nnavigate inside the app. Tab controls are hidden when the user is performing a modal\ntask (for example, composing a message). In this case, the app should provide a button\nin the navigation bar to return to the previous screen. On iOS, the window should also\nbe opened as modal. On iOS, The tab controls can also be hidden by opening the new window\nwith "),s("type-link",{attrs:{type:"Titanium.UI.Window.tabBarHidden"}},[t._v("tabBarHidden")]),t._v(" set to "),s("code",[t._v("true")]),t._v(".")],1),t._v(" "),s("p",[t._v("When closing a tab window in iOS, you should always use the\n"),s("type-link",{attrs:{type:"Titanium.UI.Tab.close"}},[t._v("Tab.close")]),t._v(" method to ensure that the tab group maintains its\nnavigation state.")],1),t._v(" "),s("h3",{attrs:{id:"android-platform-implementation-notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#android-platform-implementation-notes"}},[t._v("#")]),t._v(" Android Platform Implementation Notes")]),t._v(" "),s("p",[t._v("On Android, the tab does not maintain a stack of windows.\nCalling "),s("type-link",{attrs:{type:"Titanium.UI.Tab.open"}},[t._v("open")]),t._v(" opens a new, heavyweight window, which\nby default covers the tab group entirely. This seems quite different from the iOS model,\nbut it is the standard model for Android applications. Users can use the "),s("strong",[t._v("Back")]),t._v(" button\nto close the window and return to the tab group.")],1),t._v(" "),s("p",[t._v("On Android, tab windows can be closed using either\n"),s("type-link",{attrs:{type:"Titanium.UI.Tab.close"}},[t._v("Tab.close")]),t._v(" or "),s("type-link",{attrs:{type:"Titanium.UI.Window.close"}},[t._v("Window.close")]),t._v(". Since\nno window stack is maintained, only a single window opened using\n"),s("type-link",{attrs:{type:"Titanium.UI.Tab.open"}},[t._v("Tab.open")]),t._v(" can be closed using "),s("code",[t._v("Tab.close")]),t._v(".")],1),t._v(" "),s("p",[t._v("As on iOS, the root tab window cannot be closed.")]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("h3",{attrs:{id:"simple-tab-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-tab-example"}},[t._v("#")]),t._v(" Simple Tab Example")]),t._v(" "),s("p",[t._v("In this example, we create a simple tab and add it to a tab group.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" window "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'My Tab'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tab "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTab")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    window"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'My Tab'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    icon"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myicon.png'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntabGroup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTab")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"alloy-xml-markup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alloy-xml-markup"}},[t._v("#")]),t._v(" Alloy XML Markup")]),t._v(" "),s("p",[t._v("Previous example an an Alloy view.")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Alloy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TabGroup")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tabGroup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Tab")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("My Tab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("icon")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myicon.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Window")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("My Tab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Tab")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("TabGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Alloy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ApiDocs")],1)}),[],!1,null,null,null);a.default=e.exports}}]);