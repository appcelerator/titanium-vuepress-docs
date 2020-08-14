(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{1168:function(t,e,s){"use strict";s.r(e);var a=s(21),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"modules-coremotion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules-coremotion"}},[t._v("#")]),t._v(" Modules.CoreMotion")]),t._v(" "),s("TypeHeader"),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("p",[t._v("The Core Motion module provides access to Apple's CoreMotion APIs. The Core Motion module provides support\nfor monitoring various hardware sensors on iOS devices, such as the accelerometer, gyroscope, and\nmagnetometer. The Core Motion module allows you to access the metrics provided by these sensors.")]),t._v(" "),s("p",[t._v("For instruction and examples of using the Core Motion Module, see the\n"),s("a",{attrs:{href:"http://docs.appcelerator.com/platform/latest/#!/guide/Core_Motion_Module",target:"_blank",rel:"noopener noreferrer"}},[t._v("Core Motion Module guide"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),s("p",[t._v("This module only works with devices running iOS 7 and later. Not all devices have the same hardware sensors,\nso all features may not be available for all devices. Be sure to use the API to check the device\nfor the existence of a feature.")]),t._v(" "),s("p",[t._v("You can only test the Core Motion module on a device. The Core Motion API cannot be tested on the iOS\nsimulator.")]),t._v(" "),s("p",[t._v('Some features may require permission to use "Motion Activity". iOS requires the user\'s approval to\nuse the "Motion Activity" permission. When the application uses the Core Motion API for the first\ntime, iOS prompts the user to either approve or deny access to the Core Motion features of the\ndevice. The user can change the permission settings with '),s("strong",[t._v("Settings")]),t._v(" > "),s("strong",[t._v("Privacy")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),s("p",[t._v("Once you have "),s("a",{attrs:{href:"#!/guide/Using_a_Module"}},[t._v("installed")]),t._v(" the module and added it as a depedency,\nuse "),s("code",[t._v("require()")]),t._v(" to access it from JavaScript:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" CoreMotion "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ti.coremotion"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The `CoreMotion` variable is a reference to the Module object.  Use this reference to make")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// subsequent calls to the CoreMotion Module API. The following example shows the step counting")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// API of `CoreMotion`.")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pedometer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CoreMotion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPedometer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This code checks to see if the device can gather step counting data")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pedometer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isStepCountingAvailable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If it can, it starts the step counter and outputs the data to the console")]),t._v("\n    pedometer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startPedometerUpdates")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("warn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This device does not support counting steps.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"sample-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sample-application"}},[t._v("#")]),t._v(" Sample Application")]),t._v(" "),s("p",[t._v("The module ZIP file contains a Core Motion sample applications in "),s("code",[t._v("example/app.js")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"further-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" Further Reading")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://developer.apple.com/library/ios/documentation/CoreMotion/Reference/CoreMotion_Reference/_index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS Developer Library: Core Motion Framework Reference"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.apple.com/library/ios/documentation/EventHandling/Conceptual/EventHandlingiPhoneOS/motion_event_basics/motion_event_basics.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS Developer Library: Motion Events"),s("OutboundLink")],1)])]),t._v(" "),s("ApiDocs")],1)}),[],!1,null,null,null);e.default=n.exports}}]);