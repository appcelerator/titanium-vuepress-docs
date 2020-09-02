(window.webpackJsonp=window.webpackJsonp||[]).push([[717],{1796:function(t,a,n){"use strict";n.r(a);var e=n(21),o=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"titanium-ui-windows-commandbar"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-windows-commandbar"}},[t._v("#")]),t._v(" Titanium.UI.Windows.CommandBar")]),t._v(" "),n("TypeHeader"),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("p",[t._v("The command bar displays a row of buttons used to indicate additional actions the user can\nperform. For Windows Store applications, right-click on the application to reveal the command\nbar.")]),t._v(" "),n("p",[t._v("To create a command bar, first create buttons and separator objects using the following methods:")]),t._v(" "),n("ul",[n("li",[n("type-link",{attrs:{type:"Titanium.UI.Windows.createAppBarButton"}},[t._v("Titanium.UI.Windows.createAppBarButton()")])],1),t._v(" "),n("li",[n("type-link",{attrs:{type:"Titanium.UI.Windows.createAppBarToggleButton"}},[t._v("Titanium.UI.Windows.createAppBarToggleButton()")])],1),t._v(" "),n("li",[n("type-link",{attrs:{type:"Titanium.UI.Windows.createAppBarSeparator"}},[t._v("Titanium.UI.Windows.createAppBarSeparator()")]),t._v(" --\nonly appears on Windows Store applications.")],1)]),t._v(" "),n("p",[t._v("Then, pass an array of button and separator objects to the "),n("code",[t._v("items")]),t._v(" property when creating a\ncommand bar with the "),n("type-link",{attrs:{type:"Titanium.UI.Windows.createCommandBar"}},[t._v("Titanium.UI.Windows.createCommandBar()")]),t._v("\nmethod.")],1),t._v(" "),n("p",[t._v("Finally, add the command bar to a Titanium.UI.Window object.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("var backButton = Ti.UI.Windows.createAppBarButton({\n        icon: Ti.UI.Windows.SystemIcon.BACK\n    }),\n    likeButton = Ti.UI.Windows.createAppBarToggleButton({\n        icon: Ti.UI.Windows.SystemIcon.LIKEDISLIKE\n    }),\n    forwardButton = Titanium.UI.Windows.createAppBarButton({\n        icon: Ti.UI.Windows.SystemIcon.FORWARD\n    }),\n    commandBar = Ti.UI.Windows.createCommandBar({\n        items: [backButton, likeButton, forwardButton]\n    }),\nwin = Ti.UI.createWindow();\nwin.add(commandBar);\nwin.open();\n")])])]),n("ApiDocs")],1)}),[],!1,null,null,null);a.default=o.exports}}]);