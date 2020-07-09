(window.webpackJsonp=window.webpackJsonp||[]).push([[694],{1757:function(t,a,n){"use strict";n.r(a);var s=n(21),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"titanium-ui-tab"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-tab"}},[t._v("#")]),t._v(" Titanium.UI.Tab")]),t._v(" "),n("TypeHeader"),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("p",[t._v("A "),n("code",[t._v("TabGroup")]),t._v(' tab instance. Each tab includes a button and one or more windows, which\nholds the "contents" of the tab. Users can select a tab by clicking on the tab button.')]),t._v(" "),n("p",[t._v("Use the "),n("type-link",{attrs:{type:"Titanium.UI.createTab"}},[t._v("Titanium.UI.createTab")]),t._v(" method or "),n("strong",[n("code",[t._v("<Tab>")])]),t._v(" Alloy element to create a tab.")],1),t._v(" "),n("p",[t._v("Use "),n("type-link",{attrs:{type:"Titanium.UI.TabGroup.setActiveTab"}},[t._v("TabGroup.setActiveTab")]),t._v(" to switch between tabs\nin a tab group. The "),n("type-link",{attrs:{type:"Titanium.UI.currentTab"}},[t._v("Titanium.UI.currentTab")]),t._v(" property provides a global reference to\nthe currently active tab.")],1),t._v(" "),n("p",[t._v("The behavior of tabs and tab groups follows the platform's native navigation style,\nwhich varies significantly between platforms.")]),t._v(" "),n("h3",{attrs:{id:"ios-platform-implementation-notes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ios-platform-implementation-notes"}},[t._v("#")]),t._v(" iOS Platform Implementation Notes")]),t._v(" "),n("p",[t._v("On iOS, the tab maintains a stack of windows. Windows on top\nof the stack can partially or totally obscure windows lower in the stack.  Calling\n"),n("type-link",{attrs:{type:"Titanium.UI.Tab.open"}},[t._v("open")]),t._v(" opens a new window on top of the window stack. When a window\nis closed, either by the user or by code, the window is removed from the stack, making\nthe previous window visible. The root tab window cannot be removed.")],1),t._v(" "),n("p",[t._v("On iOS the tab controls are generally kept on screen to allow a user to\nnavigate inside the app. Tab controls are hidden when the user is performing a modal\ntask (for example, composing a message). In this case, the app should provide a button\nin the navigation bar to return to the previous screen. On iOS, the window should also\nbe opened as modal. On iOS, The tab controls can also be hidden by opening the new window\nwith "),n("type-link",{attrs:{type:"Titanium.UI.Window.tabBarHidden"}},[t._v("tabBarHidden")]),t._v(" set to "),n("code",[t._v("true")]),t._v(".")],1),t._v(" "),n("p",[t._v("When closing a tab window in iOS, you should always use the\n"),n("type-link",{attrs:{type:"Titanium.UI.Tab.close"}},[t._v("Tab.close")]),t._v(" method to ensure that the tab group maintains its\nnavigation state.")],1),t._v(" "),n("h3",{attrs:{id:"android-platform-implementation-notes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#android-platform-implementation-notes"}},[t._v("#")]),t._v(" Android Platform Implementation Notes")]),t._v(" "),n("p",[t._v("On Android, the tab does not maintain a stack of windows.\nCalling "),n("type-link",{attrs:{type:"Titanium.UI.Tab.open"}},[t._v("open")]),t._v(" opens a new, heavyweight window, which\nby default covers the tab group entirely. This seems quite different from the iOS model,\nbut it is the standard model for Android applications. Users can use the "),n("strong",[t._v("Back")]),t._v(" button\nto close the window and return to the tab group.")],1),t._v(" "),n("p",[t._v("On Android, tab windows can be closed using either\n"),n("type-link",{attrs:{type:"Titanium.UI.Tab.close"}},[t._v("Tab.close")]),t._v(" or "),n("type-link",{attrs:{type:"Titanium.UI.Window.close"}},[t._v("Window.close")]),t._v(". Since\nno window stack is maintained, only a single window opened using\n"),n("type-link",{attrs:{type:"Titanium.UI.Tab.open"}},[t._v("Tab.open")]),t._v(" can be closed using "),n("code",[t._v("Tab.close")]),t._v(".")],1),t._v(" "),n("p",[t._v("As on iOS, the root tab window cannot be closed.")]),t._v(" "),n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),n("h3",{attrs:{id:"simple-tab-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#simple-tab-example"}},[t._v("#")]),t._v(" Simple Tab Example")]),t._v(" "),n("p",[t._v("In this example, we create a simple tab and add it to a tab group.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" window "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'My Tab'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tab "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTab")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    window"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    title"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'My Tab'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    icon"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myicon.png'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntabGroup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTab")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tab"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"alloy-xml-markup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#alloy-xml-markup"}},[t._v("#")]),t._v(" Alloy XML Markup")]),t._v(" "),n("p",[t._v("Previous example an an Alloy view.")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Alloy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TabGroup")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tabGroup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Tab")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tab"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("My Tab"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("icon")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myicon.png"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Window")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("My Tab"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Tab")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("TabGroup")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Alloy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("ApiDocs")],1)}),[],!1,null,null,null);a.default=e.exports}}]);