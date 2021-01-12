(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{2035:function(e,t,o){"use strict";o.r(t);var s=o(21),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"debugging-android-apps-with-3rd-party-tools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debugging-android-apps-with-3rd-party-tools"}},[e._v("#")]),e._v(" Debugging Android Apps with 3rd-party Tools")]),e._v(" "),s("p",[e._v("Android developers can debug using Chrome DevTools with Titanium SDK 7.0.x and later. Searching for iOS Debugging? "),s("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Debugging_Titanium_Applications/Debugging_on_iOS_Devices/Debugging_iOS_Apps_with_3rd-party_Tools/"}},[e._v("Here")]),e._v(" you go!")],1),e._v(" "),s("h2",{attrs:{id:"debugging-with-chrome-devtools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debugging-with-chrome-devtools"}},[e._v("#")]),e._v(" Debugging with Chrome DevTools")]),e._v(" "),s("ol",[s("li",[s("p",[s("strong",[e._v("Launch the app/build")]),e._v(" on the device or a simulator.")]),e._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),s("p",[e._v("If using a device, make sure that it is connected by an USB cable before debugging. If you encounter any issues with device discoverability, please ensure that the USB cable is directly connected, not through a USB hub.")])]),e._v(" "),s("p",[e._v("Sample via command-line:")]),e._v(" "),s("p",[e._v("appc run -p android --debug-host /127.0.0.1:51388")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Launch Chrome")]),e._v(". Note you should be signed into Chrome. Also noteworthy, debugging may not work in Incognito or Guest modes")])]),e._v(" "),s("li",[s("p",[e._v("Open "),s("strong",[e._v("DevTools")]),e._v(" by going to "),s("strong",[e._v("More Tools")]),e._v(" > "),s("strong",[e._v("Developer Tools")]),e._v(" from Chrome's Main Menu.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(542),alt:"remote_device"}})])]),e._v(" "),s("li",[s("p",[e._v("For devices:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("From the "),s("strong",[e._v("Main Menu")]),e._v(" (the three vertical dots in the far right corner), select "),s("strong",[e._v("More Tools")]),e._v(" > "),s("strong",[e._v("Remote devices")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("In DevTools, click the "),s("strong",[e._v("Settings")]),e._v(" tab if another tab is showing.")])]),e._v(" "),s("li",[s("p",[e._v("Ensure that "),s("strong",[e._v("Discover USB devices")]),e._v(" is enabled.")])])])]),e._v(" "),s("li",[s("p",[e._v("For simulators:")]),e._v(" "),s("ol",[s("li",[e._v("After building, the console will log the required debugger information, e.g.")])])])]),e._v(" "),s("p",[s("strong",[e._v("Console")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[WARN]  JSDebugger: (main) [13,555] Debugger listening on ws://127.0.0.1:51388/6b8d130f-5a6c-7623-a760-ffc319010448\n[WARN]  JSDebugger: (main) [1,556] To connect Chrome DevTools, open Chrome to chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:51388/6b8d130f-5a6c-7623-a760-ffc319010448\n")])])]),s("p",[e._v("Refer to "),s("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools/remote-debugging/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google's Get Started with Remote Debugging Android Devices"),s("OutboundLink")],1),e._v(" tutorial for further details on how to debug with Chrome DevTools.")]),e._v(" "),s("h3",{attrs:{id:"sample-build-and-debug"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sample-build-and-debug"}},[e._v("#")]),e._v(" Sample build and debug")]),e._v(" "),s("p",[e._v("The following is a sample build and debug information to test out your debugging routine on Chrome.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("appc new -t titanium -p android -n inspector --id com.axway.debugger.test -u http://www.example.com\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" inspector\nappc run -p android --debug-host /127.0.0.1:51388\n")])])]),s("p",[e._v('Once the app launches, it should stay on the "splash screen" and spit out some logs that it\'s waiting 60 seconds for the debugger as well as details on how to connect to it. Specifically it should spit out a URL you can open in Google Chrome browser to debug the app. The debugger should "pause" on the very first line of '),s("code",[e._v("app.js")]),e._v(".")]),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("✅")]),e._v(" "),s("p",[e._v("For testing I find it useful to edit the "),s("code",[e._v("app.js")]),e._v(" to add a click listener to the labels and have them open an alert, then set a breakpoint there.")])]),e._v(" "),s("p",[e._v("You should be able to hit any breakpoint in "),s("code",[e._v("app.js")]),e._v(" even on the first line.")]),e._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),s("p",[e._v("You may find the some features offered by Chrome Devtools may not work or may crash the app (like the heap profiling for instance).")])])])}),[],!1,null,null,null);t.default=i.exports},542:function(e,t,o){e.exports=o.p+"assets/img/remote_device.92149f63.png"}}]);