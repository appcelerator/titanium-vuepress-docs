(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{1607:function(t,e,o){"use strict";o.r(e);var i=o(21),a=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"deploying-to-windows-devices"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#deploying-to-windows-devices"}},[t._v("#")]),t._v(" Deploying to Windows Devices")]),t._v(" "),i("div",{staticClass:"danger custom-block"},[i("p",{staticClass:"custom-block-title"},[t._v("❗️ Warning")]),t._v(" "),i("p",[t._v("As of Titanium 9.0.0, building Windows apps is no longer supported.")])]),t._v(" "),i("div",{staticClass:"danger custom-block"},[i("p",{staticClass:"custom-block-title"},[t._v("❗️ Warning")]),t._v(" "),i("p",[t._v("Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.")])]),t._v(" "),i("h2",{attrs:{id:"introduction"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),i("p",[t._v("Use Appcelerator Studio or CLI to deploy your Titanium projects as Windows Phone applications, which can be deployed to Windows Phone devices. To deploy to a Windows tablet, you need to package a Windows Store app with Studio or the CLI, configure the tablet to sideload a package, and install the public certificate and package.")]),t._v(" "),i("h2",{attrs:{id:"windows-phone"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#windows-phone"}},[t._v("#")]),t._v(" Windows Phone")]),t._v(" "),i("p",[t._v("Before deploying the application to a Windows Phone device, you will need to:")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("Set the Publisher ID in the CLI or Studio")])]),t._v(" "),i("li",[i("p",[t._v("Register the device using the Windows Phone Developer Registration tool (part of the Windows Phone SDK)")])]),t._v(" "),i("li",[i("p",[t._v("Connect the device to your computer with a USB cable")])])]),t._v(" "),i("div",{staticClass:"warning custom-block"},[i("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),i("p",[t._v("Currently, only one Windows Phone device may be plugged in to your computer to deploy. If multiple devices are plugged in, the build process will fail with an error.")])]),t._v(" "),i("h3",{attrs:{id:"set-the-publisher-id"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#set-the-publisher-id"}},[t._v("#")]),t._v(" Set the publisher ID")]),t._v(" "),i("h3",{attrs:{id:"register-the-device"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#register-the-device"}},[t._v("#")]),t._v(" Register the device")]),t._v(" "),i("p",[t._v("The following instructions are from "),i("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/windows/apps/ff769508(v=vs.105).aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows Dev Center: How to register your phone for development for Windows Phone"),i("OutboundLink")],1),t._v(".")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("Turn on your phone and unlock the phone screen.")])]),t._v(" "),i("li",[i("p",[t._v("On your phone, ensure that the date and time are correct.")])]),t._v(" "),i("li",[i("p",[t._v("Connect your phone to your computer by using the USB cable that came with your phone.")])]),t._v(" "),i("li",[i("p",[t._v("On your computer’s Start screen, switch to "),i("strong",[t._v("All apps")]),t._v(" view.")])]),t._v(" "),i("li",[i("p",[t._v("Under "),i("strong",[t._v("Windows Phone SDK 8.1")]),t._v(", click "),i("strong",[t._v("Windows Phone Developer Registration")]),t._v(".")])]),t._v(" "),i("li",[i("p",[t._v("Verify that the "),i("strong",[t._v("Status")]),t._v(" message displays "),i("strong",[t._v("Identified Windows Phone device")]),t._v(". Click the "),i("strong",[t._v("Register")]),t._v(" button to unlock the phone. If your phone is already registered, the "),i("strong",[t._v("Status")]),t._v(" message indicates this and you see an "),i("strong",[t._v("Unregister")]),t._v(" button.")])]),t._v(" "),i("li",[i("p",[t._v("Click "),i("strong",[t._v("Register")]),t._v(".")])]),t._v(" "),i("li",[i("p",[t._v("In the "),i("strong",[t._v("Sign In")]),t._v(" dialog box for your Microsoft account (formerly known as a Windows Live ID), enter the email address and password for your Microsoft account. Click "),i("strong",[t._v("Sign In")]),t._v(". If you’re a registered developer, be sure to use the Microsoft account associated with your developer account.")])]),t._v(" "),i("li",[i("p",[t._v("After your phone is successfully registered, the "),i("strong",[t._v("Status")]),t._v(' message displays: "Congratulations! You have successfully unlocked your Windows Phone."')])])]),t._v(" "),i("p",[t._v("Your phone is now registered. You can now deploy apps to the phone.")]),t._v(" "),i("h3",{attrs:{id:"deploy-to-a-device-with-studio"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#deploy-to-a-device-with-studio"}},[t._v("#")]),t._v(" Deploy to a device with Studio")]),t._v(" "),i("p",[t._v("To deploy with Studio:")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("Select the project in the "),i("strong",[t._v("Project Explorer")]),t._v(" view.")])]),t._v(" "),i("li",[i("p",[t._v("In the global tool bar, select "),i("strong",[t._v("Run")]),t._v(" from the "),i("strong",[t._v("Launch Mode")]),t._v(" drop-down list.")])]),t._v(" "),i("li",[i("p",[t._v("Select "),i("strong",[t._v("Windows Phone Device")]),t._v(" from the "),i("strong",[t._v("Target")]),t._v(" drop-down list.")])]),t._v(" "),i("li",[i("p",[t._v("If the "),i("strong",[t._v("Launch Automatically")]),t._v(" option is enabled under the "),i("strong",[t._v("Target")]),t._v(" drop-down list, the application will be automatically launched after the device is selected. If not, you need to click the "),i("strong",[t._v("Launch")]),t._v(" button to start the build process.")])])]),t._v(" "),i("p",[t._v("Your app will be built, installed to your device and automatically launched.")]),t._v(" "),i("p",[i("img",{attrs:{src:o(627),alt:"WindowsPhoneDevice"}})]),t._v(" "),i("h3",{attrs:{id:"deploy-to-a-device-with-the-cli"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#deploy-to-a-device-with-the-cli"}},[t._v("#")]),t._v(" Deploy to a device with the CLI")]),t._v(" "),i("p",[t._v("To deploy an application to a device with the CLI, run the following command:")]),t._v(" "),i("div",{staticClass:"language-bash extra-class"},[i("pre",{pre:!0,attrs:{class:"language-bash"}},[i("code",[t._v("appc run -p windows -T wp-device\n")])])]),i("h2",{attrs:{id:"windows-tablet"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#windows-tablet"}},[t._v("#")]),t._v(" Windows tablet")]),t._v(" "),i("p",[t._v("To deploy to a Windows tablet, you need to "),i("a",{attrs:{href:"https://technet.microsoft.com/en-us/windows/jj874388.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("sideload"),i("OutboundLink")],1),t._v(" the application package to the device.")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("Package the application as a Windows Store app. For instructions, see "),i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Distributing_Windows_Applications/"}},[t._v("Distributing Windows Applications")]),t._v(".")],1)]),t._v(" "),i("li",[i("p",[t._v("Enable the "),i("strong",[t._v("Allow all trusted apps to install")]),t._v(" group policy")])]),t._v(" "),i("li",[i("p",[t._v("Install the public certificate that was used to sign the package to the tablet's "),i("strong",[t._v("Trusted Root Certification Authorities")]),t._v(" store")])]),t._v(" "),i("li",[i("p",[t._v("Execute a PowerShell command to install the package to the tablet with the "),i("code",[t._v("Add-AppDevPackage")]),t._v(" PowerShell script.")])])]),t._v(" "),i("p",[t._v("After you package the application, copy the project's "),i("code",[t._v("generated.cer")]),t._v(" and "),i("code",[t._v("./dist/<PACKAGE_NAME>_Win32.appx")]),t._v(" files to to a USB drive and plug it into the tablet.")]),t._v(" "),i("h3",{attrs:{id:"edit-group-policy-settings"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#edit-group-policy-settings"}},[t._v("#")]),t._v(" Edit group policy settings")]),t._v(" "),i("p",[t._v("To enable installation of the package, you need to update the device's group policy.")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("Go to the "),i("strong",[t._v("Start")]),t._v(' screen and type "edit group policy."')])]),t._v(" "),i("li",[i("p",[t._v("Click "),i("strong",[t._v("Edit Group Policy")]),t._v(".")])]),t._v(" "),i("li",[i("p",[t._v("Expand "),i("strong",[t._v("Computer Configuration \\")]),t._v(" "),i("strong",[t._v("Administrative Templates \\")]),t._v(" "),i("strong",[t._v("Windows Components")])])]),t._v(" "),i("li",[i("p",[t._v("Click "),i("strong",[t._v("App Package Deployment")]),t._v(".")])]),t._v(" "),i("li",[i("p",[t._v("Double-click "),i("strong",[t._v("Allow all trusted apps to install")]),t._v(".")])]),t._v(" "),i("li",[i("p",[t._v("Click "),i("strong",[t._v("Enabled")]),t._v(".")])]),t._v(" "),i("li",[i("p",[t._v("Click "),i("strong",[t._v("OK.")])])])]),t._v(" "),i("h3",{attrs:{id:"install-the-certificate"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#install-the-certificate"}},[t._v("#")]),t._v(" Install the certificate")]),t._v(" "),i("p",[t._v("Install the certificate you copied to the USB drive to the device's Trusted Root Certification Authorities store. You will need administrative privileges.")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("Double-click the certificate file.")])]),t._v(" "),i("li",[i("p",[t._v("Click "),i("strong",[t._v("Install Certificate...")]),t._v(" to open the Certificate Import wizard.")])]),t._v(" "),i("li",[i("p",[t._v("Click "),i("strong",[t._v("LOCAL MACHINE")]),t._v(", then click "),i("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),i("li",[i("p",[t._v("Click "),i("strong",[t._v("Place all certificates in the following store")]),t._v(", click "),i("strong",[t._v("Browse")]),t._v(", click "),i("strong",[t._v("Trusted Root Certification Authorities")]),t._v(", click "),i("strong",[t._v("OK")]),t._v(", then click "),i("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),i("li",[i("p",[t._v("Click "),i("strong",[t._v("Finish")]),t._v(".")])])]),t._v(" "),i("p",[t._v("A dialog should appear that the certificate was installed successfully.")]),t._v(" "),i("h3",{attrs:{id:"install-the-package"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#install-the-package"}},[t._v("#")]),t._v(" Install the package")]),t._v(" "),i("p",[t._v("Open PowerShell and execute the "),i("code",[t._v("Add-AppDevPackage")]),t._v(" command to install the application.")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("Go to the "),i("strong",[t._v("Start")]),t._v(" screen and type "),i("code",[t._v("powershell")]),t._v(".")])]),t._v(" "),i("li",[i("p",[t._v("Click "),i("strong",[t._v("PowerShell")]),t._v(".")])]),t._v(" "),i("li",[i("p",[t._v("Execute the following command to install the package:")]),t._v(" "),i("div",{staticClass:"language-xml extra-class"},[i("pre",{pre:!0,attrs:{class:"language-xml"}},[i("code",[i("span",{pre:!0,attrs:{class:"token tag"}},[i("span",{pre:!0,attrs:{class:"token tag"}},[i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TITANIUM_PROJECT_DIR")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\\build\\windows\\win10.x86\\AppPackages\\ProjectFolder\\"),i("span",{pre:!0,attrs:{class:"token tag"}},[i("span",{pre:!0,attrs:{class:"token tag"}},[i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PACKAGE_NAME")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\\Add-AppDevPackage.ps1\n")])])])])]),t._v(" "),i("p",[t._v("The application will be installed to the device and you can access it from the "),i("strong",[t._v("All apps")]),t._v(" screen.")])])}),[],!1,null,null,null);e.default=a.exports},627:function(t,e,o){t.exports=o.p+"assets/img/WindowsPhoneDevice.46750537.png"}}]);