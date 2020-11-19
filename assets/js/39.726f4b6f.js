(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{2009:function(e,t,i){"use strict";i.r(t);var o=i(21),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"liveview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#liveview"}},[e._v("#")]),e._v(" LiveView")]),e._v(" "),o("p",[e._v("This page describes how to use the Appcelerator Studio LiveView tool to preview changes you actively make in your application on a device or simulator.")]),e._v(" "),o("h2",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("The Appcelerator Studio LiveView tool displays updates of your application as you actively add, modify or replace the files in the project, such as changing your code in the Editor. LiveView should be used to quickly preview changes in your application's UI, not for code intensive modifications.")]),e._v(" "),o("p",[e._v("LiveView works for classic mobile and Alloy projects on the Android, iOS, and Windows platforms. LiveView works for the last run of a platform. If you have previous launches of the same or different project on another platform, you may experience unexpected behavior.")]),e._v(" "),o("h2",{attrs:{id:"using-liveview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-liveview"}},[e._v("#")]),e._v(" Using LiveView")]),e._v(" "),o("p",[e._v("To use LiveView, make sure the LiveView option is enabled before running your application. After Studio builds your application, Studio launches the LiveView tool to monitor your project for changes, then communicates them with the device or simulator. Make changes to your project and as soon as you commit them, the device or simulator updates with your changes.")]),e._v(" "),o("h3",{attrs:{id:"launch-liveview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#launch-liveview"}},[e._v("#")]),e._v(" Launch LiveView")]),e._v(" "),o("p",[e._v("Before launching your application, make sure the LiveView option is enabled:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("In the "),o("strong",[e._v("Project Explorer")]),e._v(" view, select your project and verify that the LiveView icon "),o("img",{attrs:{src:i(539),alt:"LiveViewIcon"}}),e._v(" is toggled on. If not, click the icon to toggle it on.")])]),e._v(" "),o("li",[o("p",[e._v("In the global toolbar, select "),o("strong",[e._v("Run")]),e._v(" from the "),o("strong",[e._v("Launch Mode")]),e._v(" drop-down list and select an Android or iOS target (emulator, simulator or device) from the "),o("strong",[e._v("Target")]),e._v(" drop-down list.")])]),e._v(" "),o("li",[o("p",[e._v("If the "),o("strong",[e._v("Launch Automatically")]),e._v(" option is enabled under the "),o("strong",[e._v("Target")]),e._v(" drop-down list, the application will be automatically launched after the device is selected. If not, you need to click the "),o("strong",[e._v("Launch")]),e._v(" button to start the build process.")])])]),e._v(" "),o("p",[e._v("Studio starts the LiveView tool, which monitors changes to your project to update the application in the simulator or on device. In the example below, the default mobile project is launched with LiveView enabled.")]),e._v(" "),o("p",[o("img",{attrs:{src:i(540),alt:"LiveViewStart"}})]),e._v(" "),o("h3",{attrs:{id:"trigger-liveview-updates"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#trigger-liveview-updates"}},[e._v("#")]),e._v(" Trigger LiveView Updates")]),e._v(" "),o("p",[e._v("Once the application launches, you can make modifications to your project. LiveView waits for you to commit changes to your project before triggering an update.")]),e._v(" "),o("p",[e._v("The following actions trigger LiveView to update the application:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Modifying a file in the "),o("code",[e._v("Resources")]),e._v(" directory of the project. Graphic assets may not update automatically; you may need to rebuild your application.")])]),e._v(" "),o("li",[o("p",[e._v("Adding a file to the "),o("code",[e._v("Resources")]),e._v(" directory of the project. The application may not be able to resolve the path to the new asset while its running; you may need to rebuild your application if you are adding files.")])])]),e._v(" "),o("p",[e._v("After you save or add your changes, LiveView restarts your application from the initial UI state. This includes changing or adding JavaScript files, non-graphical assets (text, HTML, etc.) and graphic assets.")]),e._v(" "),o("p",[e._v("For example, in the default mobile application, the tab group starts with Tab 1. If you were on Tab 2 when you commit your changes, the application restarts (but not relaunches) and displays Tab 1.")]),e._v(" "),o("p",[e._v("In the example below, the win1, tab1 and label1 objects have been modified. The changes are committed when saving "),o("code",[e._v("app.js")]),e._v(" and displayed to the iOS simulator.")]),e._v(" "),o("p",[o("img",{attrs:{src:i(541),alt:"LiveViewEdit"}})]),e._v(" "),o("p",[e._v("If there is a coding error in the changes, LiveView displays an error message in the simulator, device and in the "),o("strong",[e._v("Console")]),e._v(" view. In the example below, the code contains a typo related to the name of a Label object and reports an error stating that it cannot find a reference to the variable. In the code, a "),o("code",[e._v("myLabel")]),e._v(" object is created but is trying to add the "),o("code",[e._v("yourLabel")]),e._v(" object, which is not defined, to the window.")]),e._v(" "),o("p",[o("img",{attrs:{src:i(542),alt:"LiveViewError"}})]),e._v(" "),o("h2",{attrs:{id:"configuring-liveview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuring-liveview"}},[e._v("#")]),e._v(" Configuring LiveView")]),e._v(" "),o("p",[e._v("It may be necessary to set the LiveView IP or ports so that the device or emulator/simulator can access the LiveView server. This may be useful in the following situations:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("If your PC has multiple network interfaces.")])]),e._v(" "),o("li",[o("p",[e._v("When using LiveView with Windows Mobile Emulators or Genymotion Emulators")])]),e._v(" "),o("li",[o("p",[e._v("If the ports used by LiveView are already in use on your PC")])])]),e._v(" "),o("h3",{attrs:{id:"configuring-the-liveview-ip"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-liveview-ip"}},[e._v("#")]),e._v(" Configuring the LiveView IP")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Open Preferences")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("MacOS: Appcelerator Studio > Preferences")])]),e._v(" "),o("li",[o("p",[e._v("Windows: Windows > Preferences")])])])]),e._v(" "),o("li",[o("p",[e._v("Expand the Studio section.")])]),e._v(" "),o("li",[o("p",[e._v("Click LiveView.")])]),e._v(" "),o("li",[o("p",[e._v("Set the LiveView Host field as the IP you wish to use.")])])]),e._v(" "),o("h3",{attrs:{id:"configuring-the-liveview-ports"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-liveview-ports"}},[e._v("#")]),e._v(" Configuring the LiveView ports")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Open Preferences")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("MacOS: Appcelerator Studio > Preferences")])]),e._v(" "),o("li",[o("p",[e._v("Windows: Windows > Preferences")])])])]),e._v(" "),o("li",[o("p",[e._v("Expand the Studio section.")])]),e._v(" "),o("li",[o("p",[e._v("Click LiveView.")])]),e._v(" "),o("li",[o("p",[e._v("Set the File Server or Event Server port as necessary.")])])]),e._v(" "),o("h2",{attrs:{id:"troubleshooting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),o("h3",{attrs:{id:"after-adding-a-file-and-rebuilding-project-fails-to-run"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#after-adding-a-file-and-rebuilding-project-fails-to-run"}},[e._v("#")]),e._v(" After adding a file and rebuilding, project fails to run")]),e._v(" "),o("p",[e._v("To resolve this issue, clean the project and terminate all node instances :")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("From the menu bar, select "),o("strong",[e._v("Project")]),e._v(" > "),o("strong",[e._v("Clean...")]),e._v(". Make sure your project is selected and click "),o("strong",[e._v("OK")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("From a terminal, run "),o("code",[e._v("killall node")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Rerun the project.")])])]),e._v(" "),o("h3",{attrs:{id:"file-server-unavailable"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#file-server-unavailable"}},[e._v("#")]),e._v(" File Server unavailable")]),e._v(" "),o("p",[e._v('If you receive the following error message while running LiveView: "File Server unavailable. Host Unreachable @ <IP_ADDRESS>:<PORT_NUMBER>. Please ensure your device and computer are on the same network and the port is not blocked:"')]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Check to make sure your computer and device are on the same wireless network.")])]),e._v(" "),o("li",[o("p",[e._v("LiveView requires the following ports to be open: 8323 and 8324.")])]),e._v(" "),o("li",[o("p",[e._v("Try accessing the socket address stated in the error message using a browser on your device. It should return something similar to")]),e._v(" "),o("p",[e._v('{"pid":13792,"path":"C:\\\\Users\\\\demo\\\\Documents\\\\Appcelerator_Studio_Workspace\\\\demoProject\\\\","uptime":1900.319,"alloy":false}')])])]),e._v(" "),o("h3",{attrs:{id:"prevent-android-devices-from-sleeping"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prevent-android-devices-from-sleeping"}},[e._v("#")]),e._v(" Prevent Android devices from sleeping")]),e._v(" "),o("p",[e._v('If your Android device keeps turning off (entering into sleep mode), you can toggle the "Stay Awake" feature in the developer options.')])])}),[],!1,null,null,null);t.default=r.exports},539:function(e,t){e.exports="data:image/png;base64,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"},540:function(e,t,i){e.exports=i.p+"assets/img/LiveViewStart.346011eb.png"},541:function(e,t,i){e.exports=i.p+"assets/img/LiveViewEdit.c06388e9.png"},542:function(e,t,i){e.exports=i.p+"assets/img/LiveViewError.0c5ec877.png"}}]);