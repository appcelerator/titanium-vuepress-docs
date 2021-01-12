(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{1218:function(t,e,a){"use strict";a.r(e);var n=a(21),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"deploying-to-android-devices"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deploying-to-android-devices"}},[t._v("#")]),t._v(" Deploying to Android Devices")]),t._v(" "),n("h2",{attrs:{id:"objective"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[t._v("#")]),t._v(" Objective")]),t._v(" "),n("p",[t._v("In this chapter, you will learn how to deploy an Android app to a device for testing.")]),t._v(" "),n("h2",{attrs:{id:"contents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),n("h3",{attrs:{id:"configure-the-android-device"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-android-device"}},[t._v("#")]),t._v(" Configure the Android device")]),t._v(" "),n("p",[t._v("In order to install an application directly to your device, you need to configure it to use a USB connection. The configuration settings vary by device.")]),t._v(" "),n("p",[t._v("For Android 4.2 and later devices, you need to enable "),n("strong",[t._v("Developer options")]),t._v(" by opening "),n("strong",[t._v("Settings")]),t._v(", click "),n("strong",[t._v("About")]),t._v(" then click the "),n("strong",[t._v("Build number")]),t._v(" item seven items. If you do not do this, you will not see the "),n("strong",[t._v("Developer options")]),t._v(" item in "),n("strong",[t._v("Settings")]),t._v(".")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Open "),n("strong",[t._v("Settings")]),t._v(".")])]),t._v(" "),n("li",[n("p",[t._v("Click "),n("strong",[t._v("Security")]),t._v(".")])]),t._v(" "),n("li",[n("p",[t._v("Enable "),n("strong",[t._v("Unknown sources")]),t._v(", that is, check this option. This permits the device to install apps that do not originate from Google Play.")])]),t._v(" "),n("li",[n("p",[t._v("Back out to "),n("strong",[t._v("Settings")]),t._v(".")])]),t._v(" "),n("li",[n("p",[t._v("Click "),n("strong",[t._v("Developer options")]),t._v(".")])]),t._v(" "),n("li",[n("p",[t._v("If available: Set the switch in the title bar to on.")])]),t._v(" "),n("li",[n("p",[t._v("Enable "),n("strong",[t._v("USB debugging")]),t._v(", that is, check this option. This permits the device to install apps over a USB connection.")])]),t._v(" "),n("li",[n("p",[t._v("Optional: Enable "),n("strong",[t._v("Stay awake")]),t._v(", that is, check this option. This option keeps the screen on and disables the lock screen while the device is connected to USB.")])]),t._v(" "),n("li",[n("p",[t._v("Optional: Enable "),n("strong",[t._v("Allow mock locations")]),t._v(", that is, check this option. This option creates fake GPS locations to test location services.")])]),t._v(" "),n("li",[n("p",[t._v("Back out of or close "),n("strong",[t._v("Settings")]),t._v(".")])])]),t._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),n("p",[t._v("These configuration settings are the default Android settings. Some options may not appear or you may need to configure other manufacturer-specific settings.")])]),t._v(" "),n("h3",{attrs:{id:"install-the-usb-driver-windows-only"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install-the-usb-driver-windows-only"}},[t._v("#")]),t._v(" Install the USB driver (Windows only)")]),t._v(" "),n("p",[t._v("Developers on Windows may need to install a USB driver specific to the manufacturer and model of the device on which they'll be testing. The driver enables your Windows computer to communicate with your Android device. Google provides download links to the drivers at "),n("a",{attrs:{href:"http://developer.android.com/sdk/oem-usb.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Developer: OEM USB Drivers"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("h3",{attrs:{id:"connect-the-device"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connect-the-device"}},[t._v("#")]),t._v(" Connect the device")]),t._v(" "),n("p",[t._v("Connect the Android device to your computer using an USB cord. Note that some USB cables are only power cables and do not allow communications with the device. Make sure you use a USB cable that allows a data connection.")]),t._v(" "),n("p",[t._v('For 4.2 devices, an "Allow USB debugging?" dialog will appear once connected via USB. Click the '),n("strong",[t._v("OK")]),t._v(" button.")]),t._v(" "),n("p",[t._v("Deploy the application using Axway Appcelerator Studio")]),t._v(" "),n("p",[t._v("Once you have configured your device and connected it to your computer's USB port, you are ready to deploy your app to it.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(739),alt:"launch_emulator"}})]),t._v(" "),n("p",[t._v("In Studio, first select the project in the "),n("strong",[t._v("Project Explorer")]),t._v(" view, then in the global tool bar, select "),n("strong",[t._v("Run")]),t._v(" from the "),n("strong",[t._v("Launch Mode")]),t._v(" drop-down list and an Android device from the "),n("strong",[t._v("Target")]),t._v(" drop-down list under the "),n("strong",[t._v("Android Application Installer")]),t._v(" category. If the "),n("strong",[t._v("Launch Automatically")]),t._v(" option is enabled under the "),n("strong",[t._v("Target")]),t._v(" drop-down list, the application will be automatically launched after the device is selected. If not, you need to click the "),n("strong",[t._v("Run")]),t._v(" button to start the build process. Your app will be built, installed to your device and automatically launched.")]),t._v(" "),n("p",[t._v("Deploying the application using the CLI")]),t._v(" "),n("p",[t._v("To launch the application using the Titanium CLI, run the following command:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("appc run -p android -T device --device-id "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<DEVICE_ID>"')]),t._v("\n")])])]),n("p",[t._v("You may omit the "),n("code",[t._v("--device-id")]),t._v(" parameter if you only have one device connected. To retrieve a list of connected devices, run one of the following commands:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("appc ti info -t android\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## or")]),t._v("\nadb devices -l\n")])])]),n("h3",{attrs:{id:"deploy-the-application-using-adb"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deploy-the-application-using-adb"}},[t._v("#")]),t._v(" Deploy the application using adb")]),t._v(" "),n("p",[t._v("You can use the "),n("code",[t._v("adb")]),t._v(" command to install apps to a connected device if you have a built APK file. If the "),n("code",[t._v("platform-tools")]),t._v(" directory (within the Android SDK) is in your system's PATH, from a terminal, run the following command:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("adb install -r your_project/build/android/bin/app.apk\n")])])]),n("p",[t._v("Hint: use the "),n("code",[t._v("-e")]),t._v(" switch to interact with a single running Android emulator; use "),n("code",[t._v("-d")]),t._v(" to interact with a single connected device.")]),t._v(" "),n("p",[t._v("You can uninstall an app with "),n("code",[t._v("adb")]),t._v(" as well via your app's unique Android package name:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("adb uninstall com.your.appid\n")])])]),n("h3",{attrs:{id:"deploy-to-remote-testers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deploy-to-remote-testers"}},[t._v("#")]),t._v(" Deploy to remote testers")]),t._v(" "),n("p",[t._v("You can deploy your app to remote users for testing. They will need to configure their device as described above. From there, all you need to do is get the APK file to them and their device. A simple solution is to post it on a web site (such as a Dropbox) account. You could also email it to them, as long as they receive the email on their device and not a desktop. In either case, on a device, if you tap on an APK file, Android will prompt you to install that application.")]),t._v(" "),n("p",[t._v("Over the air distribution frameworks were popularized in the iOS space by services such as TestFlight App. With such systems, users install a common client app on their device. That client interacts with a remote server, which is used to distribute beta versions of your app. When you update your app, the client component can detect the change and notify the user to upgrade your app. The open source HockeyKit system ("),n("a",{attrs:{href:"http://hockeykit.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://hockeykit.net/"),n("OutboundLink")],1),t._v(") supports distributing both iOS and Android apps to beta testers. It also provides a framework for gathering user feedback and statistics. You can install HockeyKit on your own web server or subscribe to their HockeyApp service and they'll host the server for you.")]),t._v(" "),n("h3",{attrs:{id:"install-to-the-sd-card"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install-to-the-sd-card"}},[t._v("#")]),t._v(" Install to the SD card")]),t._v(" "),n("p",[t._v("By default, your application is installed to the device's internal storage. To configure you application to install to the SD card, you need to add the "),n("code",[t._v("android:installLocation")]),t._v(" attribute to the "),n("code",[t._v("manifest")]),t._v(" element in the "),n("code",[t._v("tiapp.xml")]),t._v(" file. Assign the "),n("code",[t._v("installLocation")]),t._v(" element to one of the following values:")]),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("preferExternal")]),t._v(" - specifies that you prefer your app to be installed to the SD card, but if one is not present the app can be installed to internal storage.")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("auto")]),t._v(" - specifies that the phone's configuration will determine the installation location. Generally, your app will be installed to internal storage if sufficient space is available. In that case, users could still move your app by opening "),n("strong",[t._v("Settings")]),t._v(" > "),n("strong",[t._v("Applications")]),t._v(" > "),n("strong",[t._v("Manage")]),t._v(" "),n("strong",[t._v("applications")]),t._v(" or "),n("strong",[t._v("Settings")]),t._v(" > "),n("strong",[t._v("Application manager")]),t._v(", tapping your app, and tapping "),n("strong",[t._v("Move to SD card")]),t._v(". Note that some manufacturers do not allow applications to be run from the SD card.")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("internalOnly")]),t._v(" - which specifies that your app cannot be installed to the SD card. See the "),n("a",{attrs:{href:"http://developer.android.com/guide/appendix/install-location.html#ShouldNot",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android docs"),n("OutboundLink")],1),t._v(" for the various reasons why you might choose this option.")])])]),t._v(" "),n("p",[n("strong",[t._v("tiapp.xml")])]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("android")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("android")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://schemas.android.com/apk/res/android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("manifest")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("installLocation")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preferExternal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("android")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("h3",{attrs:{id:"change-the-version-number"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#change-the-version-number"}},[t._v("#")]),t._v(" Change the version number")]),t._v(" "),n("p",[t._v("To change the version of the application, add the following attributes to the "),n("code",[t._v("manifest")]),t._v(" element in your "),n("code",[t._v("tiapp.xml")]),t._v(":")]),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("android:versionCode")]),t._v(' - A 32-bit integer (i.e.: a whole number like "2") that must be incremented up whenever a newer version is being submitted to the app store. It cannot be set to a floating point number.')])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("android:versionName")]),t._v(" - The version name string can be anything you want.")])])]),t._v(" "),n("p",[n("strong",[t._v("tiapp.xml")])]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("android")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("android")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://schemas.android.com/apk/res/android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("manifest")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("versionCode")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("versionName")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("8.675.309"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("android")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("For more information on versioning in Android, see "),n("a",{attrs:{href:"http://developer.android.com/guide/publishing/versioning.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://developer.android.com/guide/publishing/versioning.html"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[n("img",{attrs:{src:a(740),alt:"android-app-versioning"}})]),t._v(" "),n("h3",{attrs:{id:"troubleshooting"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),n("h4",{attrs:{id:"restart-adb"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#restart-adb"}},[t._v("#")]),t._v(" Restart adb")]),t._v(" "),n("p",[t._v("If your device is not recognized after following the above instructions, the adb process may have hung. Run the following commands in a terminal to restart adb:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("adb devices // print list of attached devices\nadb kill-server\nadb start-server\nadb devices // verify that device has been recognized\n")])])]),n("h4",{attrs:{id:"usb-cord"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usb-cord"}},[t._v("#")]),t._v(" USB cord")]),t._v(" "),n("p",[t._v("Some USB cords are only power cables and do not allow a data connection. Make sure that your USB cord allows a data connection.")]),t._v(" "),n("h2",{attrs:{id:"summary"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),n("p",[t._v("In this chapter, you learned that deploying to an Android device is fairly simple. You configure the device to accept non-market apps. Then, you just need to get the APK file to the testing device. You can do that via Studio, "),n("code",[t._v("adb")]),t._v(", an ad-hoc distribution method like a web page, or via a framework like HockeyKit.")])])}),[],!1,null,null,null);e.default=o.exports},739:function(t,e,a){t.exports=a.p+"assets/img/launch_emulator.c28a69d5.png"},740:function(t,e,a){t.exports=a.p+"assets/img/android-app-versioning.e6193e45.jpg"}}]);