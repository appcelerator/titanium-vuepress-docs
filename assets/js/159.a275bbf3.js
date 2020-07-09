(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{1210:function(e,t,i){"use strict";i.r(t);var o=i(21),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"debugging-on-ios-devices"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#debugging-on-ios-devices"}},[e._v("#")]),e._v(" Debugging on iOS Devices")]),e._v(" "),o("div",{staticClass:"warning custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),o("p",[e._v("When using Safari Web Inspector to debug your Titanium iOS apps, see "),o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Debugging_Titanium_Applications/Debugging_on_iOS_Devices/Debugging_iOS_Apps_with_3rd-party_Tools/"}},[e._v("Debugging iOS Apps with 3rd-party Tools")]),e._v(" for details!")],1)]),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("Titanium SDK enables Studio to initiate a debug session on an iOS device. Debugging on an iOS device involves the following steps:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("User selects the "),o("strong",[e._v("Debug on iOS Device")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Studio builds the application.")])]),e._v(" "),o("li",[o("p",[e._v("Application is synced to the device, either automatically or manually.")])]),e._v(" "),o("li",[o("p",[e._v("User launches the application on device.")])]),e._v(" "),o("li",[o("p",[e._v("Application initiates debug session with Studio over the local Wi-Fi network.")])])]),e._v(" "),o("p",[e._v("This page will guide you through the setup, and the launch, of a debug session.")]),e._v(" "),o("div",{staticClass:"warning custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),o("p",[e._v("Debugging on iOS devices is only supported on macOS. You must already be set up to run applications on your iOS device, as documented in "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Deploying_to_iOS_devices/"}},[e._v("Deploying to iOS devices")]),e._v(".")],1)]),e._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("To debug on an iOS device, you must:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Be able to to install applications on your iOS device from Studio. (If you haven't installed an application on your device yet, review the steps in "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Deploying_to_iOS_devices/"}},[e._v("Deploying to iOS devices")]),e._v(".)")],1)]),e._v(" "),o("li",[o("p",[e._v("Connect the macOS machine and the device to the same wireless (Wi-Fi) network. The debugger protocol runs over the network (a cable does "),o("em",[e._v("not")]),e._v(" serve as an alternative).")])])]),e._v(" "),o("p",[e._v("Each time you run the debugger, Studio builds the application and attempts to install it using iTunes. In order to install the application using iTunes, you must either:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Connect your device using the USB cable (recommended).")])]),e._v(" "),o("li",[o("p",[e._v("Configure your device to sync with iTunes over Wi-Fi. To sync over Wi-Fi, your device must be connected to a power source, and may require multicast and Universal Plug and Play (UPnP) to be enabled on the router. Wi-Fi sync is slower and less reliable than syncing using the USB cable.")])])]),e._v(" "),o("p",[e._v("For convenience, if you use iTunes for syncing applications to device, it is recommended that you configure iTunes to sync applications automatically.")]),e._v(" "),o("p",[e._v("As an alternative to the iTunes sync process, you may use Xcode or the "),o("em",[e._v("iPhone Configuration Utility")]),e._v(" in order to install the application on the device once the Titanium build and deploy is done.")]),e._v(" "),o("h2",{attrs:{id:"network-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#network-setup"}},[e._v("#")]),e._v(" Network Setup")]),e._v(" "),o("p",[e._v("In order to debug on an iOS device, the device and computer running Studio must be attached to the same wireless (Wi-Fi) network, and the network must allow connections between two clients.")]),e._v(" "),o("p",[e._v("Some public Wi-Fi networks are configured so clients can only communicate with the internet, not with each other. These networks are not compatible with on-device debugging for iOS.")]),e._v(" "),o("p",[e._v("If you do not have a suitable Wi-Fi network available, you can create an ad-hoc network on your computer and connect to it using your device. See\n"),o("a",{attrs:{href:"http://support.apple.com/kb/PH10666",target:"_blank",rel:"noopener noreferrer"}},[e._v("macOS: Create a computer-to-computer network"),o("OutboundLink")],1),e._v(" on the Apple Support site for directions on creating an ad-hoc network.")]),e._v(" "),o("h2",{attrs:{id:"launching-a-debug-session"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#launching-a-debug-session"}},[e._v("#")]),e._v(" Launching a Debug Session")]),e._v(" "),o("p",[e._v("Before debugging, you must have created a Titanium project with an iPhone/iPad deploy target. There are three basic steps:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Initiate the debug session in Studio.")])]),e._v(" "),o("li",[o("p",[e._v("Wait while application builds and installs.")])]),e._v(" "),o("li",[o("p",[e._v("Launch the application from the device and start debugging")])])]),e._v(" "),o("h3",{attrs:{id:"initiate-the-debug-session"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#initiate-the-debug-session"}},[e._v("#")]),e._v(" Initiate the Debug Session")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Make sure your project is selected in the "),o("strong",[e._v("Project Explorer")]),e._v(" view.")])]),e._v(" "),o("li",[o("p",[e._v("In the global tool bar, select "),o("strong",[e._v("Debug")]),e._v(" from the "),o("strong",[e._v("Launch Mode")]),e._v(" drop-down list.")])]),e._v(" "),o("li",[o("p",[e._v("Select the iOS device you want to launch your project on or "),o("strong",[e._v("iTunes Sync")]),e._v(" to install the application to iTunes from the "),o("strong",[e._v("Target")]),e._v(" drop-down list.")])]),e._v(" "),o("li",[o("p",[e._v("Click the "),o("strong",[e._v("Launch")]),e._v(" button.")])]),e._v(" "),o("li",[o("p",[e._v("Complete the wizard to initiate a debug session. Studio prompts you to pick the certificate, provisioning profile, and SDK version to use for the debug build.")])])]),e._v(" "),o("div",{staticClass:"warning custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),o("p",[e._v("After you complete the wizard once, Studio creates a launch configuration for you, named "),o("strong",[e._v("Titanium iOS Device - "),o("em",[e._v("AppName")])]),e._v(". You can select this launch configuration, after launching the "),o("strong",[e._v("Debug Configuration")]),e._v(" wizard by select "),o("strong",[e._v("Debug Configurations")]),e._v(" from the "),o("strong",[e._v("Target")]),e._v(" drop-down list, to skip the wizard and start a new debug session using the same parameters.")])]),e._v(" "),o("h3",{attrs:{id:"itunes-deployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#itunes-deployment"}},[e._v("#")]),e._v(" iTunes Deployment")]),e._v(" "),o("p",[e._v("If you chose to deploy your application to iTune first, you need to perform a few extra steps to install it to your device. After Studio builds your project, the built application is deployed into iTunes. If you have already deployed this application to device, iTunes prompts you to replace the older application with the new version. iTunes syncs the new application to the connected device(s).")]),e._v(" "),o("h3",{attrs:{id:"launch-the-application-and-debug"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#launch-the-application-and-debug"}},[e._v("#")]),e._v(" Launch the Application and Debug")]),e._v(" "),o("p",[e._v("After the application finishes installing:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Run the application on the device.")])]),e._v(" "),o("li",[o("p",[e._v("A dialog appears on the device indicating it's waiting for the debug session to start on the indicated WiFi network. Both the host computer and target iOS device must be on the same WiFi network in order to debug. If they differ, you need to change either host computer's or target iOS device's WiFi settings to match the other's WiFi network. You may need to cancel the debug session and restart the debug process.")]),e._v(" "),o("p",[o("img",{attrs:{src:i(690),alt:"ios_debugger_dialog"}})])]),e._v(" "),o("li",[o("p",[e._v("The device connects to Studio, and a debug session begins (and is visible in Studio's "),o("strong",[e._v("Debug")]),e._v(" perspective).")])])]),e._v(" "),o("div",{staticClass:"warning custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),o("p",[e._v("In the unlikely case that you have the same debug version of the application installed on two devices at the same time, and you launch them at the same time, Studio prompts you to select which version to debug.")])]),e._v(" "),o("h2",{attrs:{id:"troubleshooting-ios-on-device-debugging-problems"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-ios-on-device-debugging-problems"}},[e._v("#")]),e._v(" Troubleshooting iOS On-Device Debugging Problems")]),e._v(" "),o("h3",{attrs:{id:"itunes-fails-to-sync-the-application-to-the-device-after-first-launch"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#itunes-fails-to-sync-the-application-to-the-device-after-first-launch"}},[e._v("#")]),e._v(" iTunes Fails to Sync the Application to the Device After First Launch")]),e._v(" "),o("ul",[o("li",[e._v("Check the "),o("em",[e._v("Apps")]),e._v(" tab in your iTunes. Make sure it's set to sync automatically, and that the new app appears with a checkmark next to it. If it doesn't, check the app and hit Apply.")])]),e._v(" "),o("h3",{attrs:{id:"debugger-fails-to-connect"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#debugger-fails-to-connect"}},[e._v("#")]),e._v(" Debugger Fails to Connect")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Make sure both the iOS device and the computer are connected to the same Wi-Fi network.")])]),e._v(" "),o("li",[o("p",[e._v("Initiate a new debug session from Studio. You cannot restart a debug session by restarting the application on the device.")])])]),e._v(" "),o("h3",{attrs:{id:"wi-fi-sync-problems"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wi-fi-sync-problems"}},[e._v("#")]),e._v(" Wi-Fi Sync Problems")]),e._v(" "),o("p",[e._v("You should be able to see the device in iTunes when it is not connected using the USB cable. If you can't, try the following:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Check that the Wi-Fi network has multicast or broadcast addressing enabled. This is enabled by default on most home Wi-Fi routers, but may not be true on corporate or public Wi-Fi networks. Multicast or broadcast addressing is required for Wi-Fi sync – it is not required for debugging if you are using a USB cable for sync.")])]),e._v(" "),o("li",[o("p",[e._v("Follow the steps described in "),o("a",{attrs:{href:"http://support.apple.com/kb/TS4062",target:"_blank",rel:"noopener noreferrer"}},[e._v("iTunes 10.5 and later: Troubleshooting iTunes Wi-Fi Syncing"),o("OutboundLink")],1),e._v(" on the Apple Support site.")])])]),e._v(" "),o("h3",{attrs:{id:"testing-network-connection"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#testing-network-connection"}},[e._v("#")]),e._v(" Testing Network Connection")]),e._v(" "),o("p",[e._v("If you need to test whether your device and computer are on the same network, you can create a test web site in Studio to test the connection.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Find the IP address of your phone. (See instructions here: "),o("a",{attrs:{href:"http://www.iclarified.com/entry/index.php?enid=496",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.iclarified.com/entry/index.php?enid=496"),o("OutboundLink")],1),e._v(".)")])]),e._v(" "),o("li",[o("p",[e._v("Inside Studio, create a new web project:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Click "),o("strong",[e._v("File")]),e._v(" > "),o("strong",[e._v("New")]),e._v(" > "),o("strong",[e._v("Project")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Select "),o("strong",[e._v("Web Project")]),e._v(" and click "),o("strong",[e._v("Next")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Select "),o("strong",[e._v("Default Template")]),e._v(" and click "),o("strong",[e._v("Next")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Enter a project name and click "),o("strong",[e._v("Finish")]),e._v(".")])])])]),e._v(" "),o("li",[o("p",[e._v("Create a HTML file inside that web project:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("In the "),o("strong",[e._v("Project Explorer")]),e._v(" view, select the project folder and click "),o("strong",[e._v("File")]),e._v(" > "),o("strong",[e._v("New")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Enter "),o("code",[e._v("test.html")]),e._v(" for the filename.")])]),e._v(" "),o("li",[o("p",[e._v("Edit the new file and add some basic HTML.")])])])]),e._v(" "),o("li",[o("p",[e._v("Open the "),o("strong",[e._v("Preferences")]),e._v(" dialog and navigate to "),o("strong",[e._v("Studio")]),e._v(" > "),o("strong",[e._v("Web Servers")]),e._v(" > "),o("strong",[e._v("Built-in")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Pick an IP address that is in the same range as the phone's IP address.")])]),e._v(" "),o("li",[o("p",[e._v("Restart Studio.")])]),e._v(" "),o("li",[o("p",[e._v("In the "),o("strong",[e._v("Project Explorer")]),e._v(" view, click on the HTML file you created.")])]),e._v(" "),o("li",[o("p",[e._v("Click Run > Run.\nA browser opens, directed to the web page.")])]),e._v(" "),o("li",[o("p",[e._v("Open up a web browser on your iOS device.")])]),e._v(" "),o("li",[o("p",[e._v("Navigate to the URL shown in the URL bar in the browser on your machine.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("If you can see the page on the iOS device, networking is set up correctly.")])]),e._v(" "),o("li",[o("p",[e._v("If you cannot see the page, you have a networking problem.")])])])])]),e._v(" "),o("h2",{attrs:{id:"related-topics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#related-topics"}},[e._v("#")]),e._v(" Related Topics")]),e._v(" "),o("ul",[o("li",[o("p",[o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Debugging_Titanium_Applications/"}},[e._v("Debugging Titanium Applications")])],1),e._v(" "),o("ul",[o("li",[o("p",[o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Debugging_Titanium_Applications/Debugging_on_the_Emulator_or_Simulator/"}},[e._v("Debugging on the Emulator or Simulator")])],1)]),e._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Debugging_Titanium_Applications/Debugging_on_Android_Devices/"}},[e._v("Debugging on Android Devices")])],1)])])]),e._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/"}},[e._v("About the Debug perspective")])],1),e._v(" "),o("ul",[o("li",[o("p",[o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/Using_the_Debug_View/"}},[e._v("Using the Debug View")])],1)]),e._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/Using_the_Variables_View/"}},[e._v("Using the Variables View")])],1)]),e._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Using_the_Console_View/"}},[e._v("Using the Console View")])],1)]),e._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/Using_the_Breakpoints_View/"}},[e._v("Using the Breakpoints View")])],1)]),e._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/Using_the_Expressions_View/"}},[e._v("Using the Expressions View")])],1)])])]),e._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Stepping_into_and_over_functions/"}},[e._v("Stepping into and over functions")])],1)]),e._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Adding_a_breakpoint/"}},[e._v("Adding a breakpoint")])],1)])])])}),[],!1,null,null,null);t.default=n.exports},690:function(e,t,i){e.exports=i.p+"assets/img/ios_debugger_dialog.a942c46e.png"}}]);