(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{799:function(e,t,i){e.exports=i.p+"assets/img/DtiD_Run_On_Device.c6064d1e.png"},800:function(e,t,i){e.exports=i.p+"assets/img/DtiD_Run_Dialog.ab4a7170.png"},801:function(e,t,i){e.exports=i.p+"assets/img/DtiD_Certificates.ee18d3c9.png"},802:function(e,t,i){e.exports=i.p+"assets/img/DtiD_Provisioning.39437ca6.png"},803:function(e,t,i){e.exports=i.p+"assets/img/DtiD_Run_Configurations.71c94f0b.png"},804:function(e,t,i){e.exports=i.p+"assets/img/DtiD_Preferences.abbb879b.png"},994:function(e,t,i){"use strict";i.r(t);var o=i(21),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"deploying-to-ios-devices"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deploying-to-ios-devices"}},[e._v("#")]),e._v(" Deploying to iOS devices")]),e._v(" "),o("h2",{attrs:{id:"objective"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[e._v("#")]),e._v(" Objective")]),e._v(" "),o("p",[e._v("In this chapter, you will learn the steps necessary to deploy an app to an iOS device for testing.")]),e._v(" "),o("h2",{attrs:{id:"contents"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),o("p",[e._v("In order to install your app to an iOS device for testing, you need to complete quite a few steps:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Register with Apple's Developer program")])]),e._v(" "),o("li",[o("p",[e._v("Obtain a developer's certificate")])]),e._v(" "),o("li",[o("p",[e._v("Register your test devices")])]),e._v(" "),o("li",[o("p",[e._v("Create an App ID")])]),e._v(" "),o("li",[o("p",[e._v("Create and install a development provisioning profile")])]),e._v(" "),o("li",[o("p",[e._v("Build your app, embedding the profile within the app's bundle. This step takes care of installing to a locally-connected device as well. We will cover distributing your app to remote testers below as well.")])])]),e._v(" "),o("h3",{attrs:{id:"apple-s-developer-program"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#apple-s-developer-program"}},[e._v("#")]),e._v(" Apple's Developer program")]),e._v(" "),o("p",[e._v("You can download the iOS SDK and development tools from Apple by simply registering for the program: no payment is required. But once it comes time to install your app onto a device, you need to pay their subscription fees. At the time of this writing, the individual and company plan costs $99/year. Enterprise and University programs are also available. See the "),o("a",{attrs:{href:"http://developer.apple.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Developer's site"),o("OutboundLink")],1),e._v(" for more information.")]),e._v(" "),o("p",[e._v("Apple verifies your identity before admitting you to the program. For individuals, the process is relatively simple and conducted online in hours or a few days. Companies are required to submit articles of incorporation or other proof of identity. Approval for companies typically takes a few days to a week, depending on how quickly you provide the required paperwork. Additional requirements are placed on Enterprise customers (you must have a DUNS number) and universities (proof of accreditation is typically required).")]),e._v(" "),o("h3",{attrs:{id:"obtain-a-development-certificate"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#obtain-a-development-certificate"}},[e._v("#")]),e._v(" Obtain a development certificate")]),e._v(" "),o("p",[e._v("Once you have been approved by Apple, you can log in to the "),o("a",{attrs:{href:"https://developer.apple.com/membercenter/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Developer Member Center"),o("OutboundLink")],1),e._v(" and begin the deployment process. The initial user account is designated the Team Agent account. The Team Agent is the person at your organization who oversees development and final distribution of your app. For a one-person company, the Team Agent, developer, and final publisher of the app are all one person. In a corporate or team environment, there will be a single Team Agent and one or more developers.")]),e._v(" "),o("p",[e._v("The Team Agent can invite members to his or her team. Doing so creates developer-specific accounts within your overall account. Such developers can create requests for certificates, which the Team Agent can approve or reject.")]),e._v(" "),o("p",[e._v("A development certificate attests to the identity of the developer building the app. Each developer on your team could have their own certificate, enabling each of them to build a test version of your app. When you publish, the Team Agent will create the final certificate and other requirements.")]),e._v(" "),o("p",[e._v("To create a developer's certificate:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Log in to the "),o("a",{attrs:{href:"https://developer.apple.com/membercenter/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Developer Member Center"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Click the link under "),o("strong",[e._v("Certificates, Identifiers & Profiles")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Certificates")]),e._v(", then click the plus sign (+) button near the top-right corner.")])]),e._v(" "),o("li",[o("p",[e._v("Select "),o("strong",[e._v("iOS App Development")]),e._v(", click the "),o("strong",[e._v("Worldwide Developer Relations Certificate Authority")]),e._v(" link to download the WWDR certificate, then click "),o("strong",[e._v("Continue")]),e._v("**.**")])]),e._v(" "),o("li",[o("p",[e._v("Follow the directions to create a Certificate Signing Request (CSR). Click "),o("strong",[e._v("Continue")]),e._v("**.**")])]),e._v(" "),o("li",[o("p",[e._v("Upload your CSR and click "),o("strong",[e._v("Generate")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("If you are the Team Agent, you will be returned to the Certificates page with the status listed as Pending. Wait a moment then refresh the page in your browser. You should get a Download link at that point. If you are a developer on the team, the Team Agent will receive notification to approve or reject your request. When he or she approves your request, continue with the steps that follow.")])]),e._v(" "),o("li",[o("p",[e._v("Download the development certificate (.cer) file to your computer.")])]),e._v(" "),o("li",[o("p",[e._v("Double-click the file to install it to your keychain.")])])]),e._v(" "),o("p",[e._v("In addition to your developer certificate, you will need to download and install the WWDR Intermediate Certificate, provided by Apple. You can download this file from the iOS Certificates, Identifiers & Profiles page during the first step when you created a certificate. Double-click the resulting file to install it to your keychain.")]),e._v(" "),o("div",{staticClass:"warning custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),o("h6",{attrs:{id:"back-up-your-private-key"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#back-up-your-private-key"}},[e._v("#")]),e._v(" Back up your private key")]),e._v(" "),o("p",[e._v("It is critical that you save your private key somewhere safe in the event that you need to develop on multiple computers or decide to reinstall your system OS. Without your private key, you will be unable to sign binaries and test your application on any Apple device. The private key was generated by the Keychain application when you created the Certificate Signing Request (CSR). It has the same name as the "),o("strong",[e._v("Common Name")]),e._v(" field when you generated the CSR.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("To export your private key, open up the Keychain Access Application and select "),o("strong",[e._v("login")]),e._v(" under Keychains and "),o("strong",[e._v("Keys")]),e._v(" under Category.")])]),e._v(" "),o("li",[o("p",[e._v("Highlight the private key associated with your iOS Development Certificate.")])]),e._v(" "),o("li",[o("p",[e._v("From the menu bar, select "),o("strong",[e._v("File")]),e._v(" > "),o("strong",[e._v("Export Items...")]),e._v(". Save your key in the Personal Information Exchange ("),o("code",[e._v(".p12")]),e._v(") file format.")])]),e._v(" "),o("li",[o("p",[e._v("You will be prompted to create a password which will be used when you attempt to import this key on another computer.")])]),e._v(" "),o("li",[o("p",[e._v("You can now transfer this .p12 file between systems. Double-click on the .p12 file to install it on a system. You will be prompted for the password you entered above.")])])])]),e._v(" "),o("h3",{attrs:{id:"register-your-test-devices"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#register-your-test-devices"}},[e._v("#")]),e._v(" Register your test devices")]),e._v(" "),o("p",[e._v("Apple limits you to testing your app on up to 100 devices per year. You must register each of those devices in the iOS Certificates, Identifiers & Profiles page. You cannot remove a device once it's been defined (such as to replace it with someone else's device). So, use care when registering your devices so that you do not run out of permitted devices.")]),e._v(" "),o("p",[e._v("At the time of this writing, you must identify devices by their UDID (Unique Device ID). Apple has announced that the UDID is deprecated as of iOS 5. It is unclear at this time how they will identify devices on the iOS Certificates, Identifiers & Profiles page once that change is widely implemented. For now, you must obtain the UDID using either iTunes or Xcode.")]),e._v(" "),o("p",[e._v("Using iTunes to determine the UDID:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Connect the device to your computer.")])]),e._v(" "),o("li",[o("p",[e._v("Open iTunes, if it doesn't open automatically.")])]),e._v(" "),o("li",[o("p",[e._v("Select the device in the left pane.")])]),e._v(" "),o("li",[o("p",[e._v("In the middle pane, click on the Serial Number. This changes to show the Identifier (UDID). Press Command-C to copy the UDID. (You don't need to drag to select first.)")])]),e._v(" "),o("li",[o("p",[e._v("You might want to paste that someplace, such as a text file or email message to save it for later.")])])]),e._v(" "),o("p",[e._v("Using Xcode 6 and later to determine the UDID:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Connect the device to your computer.")])]),e._v(" "),o("li",[o("p",[e._v("Launch Xcode.")])]),e._v(" "),o("li",[o("p",[e._v("Open the "),o("strong",[e._v("Devices")]),e._v(" window. From the menu bar, select "),o("strong",[e._v("Window")]),e._v(" > "),o("strong",[e._v("Devices")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Select your device from the left bar.")])]),e._v(" "),o("li",[o("p",[e._v("Select the value in the "),o("strong",[e._v("Identifier")]),e._v(" field, right-click and choose "),o("strong",[e._v("Copy")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("You might want to paste that someplace, such as a text file or email message to save it for later.")])])]),e._v(" "),o("p",[e._v("To register your device:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Log in to the "),o("a",{attrs:{href:"https://developer.apple.com/membercenter/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Developer Member Center"),o("OutboundLink")],1),e._v(" as the Team Admin or Agent.")])]),e._v(" "),o("li",[o("p",[e._v("Click the link under "),o("strong",[e._v("Certificates, Identifiers & Profiles")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Devices")]),e._v(", then click the plus sign (+) button near the top-right corner.")])]),e._v(" "),o("li",[o("p",[e._v("Give your device a name (this is for your convenience) and paste in the UDID you copied from iTunes or Xcode.")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Continue")]),e._v(".")])])]),e._v(" "),o("h3",{attrs:{id:"create-an-app-id"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-an-app-id"}},[e._v("#")]),e._v(" Create an App ID")]),e._v(" "),o("p",[e._v("An App ID is a unique identifier for your app. It is composed of two parts: the App ID Prefix and the App ID Suffix. The App ID Prefix is a 10-character hexadecimal string generated by the iOS Certificates, Identifiers & Profiles page. It is unique to you and your developer account. The App ID Suffix is a name you enter called the Bundle Identifier.")]),e._v(" "),o("p",[e._v("The Bundle Identifier can be explicit, meaning you enter a name on the iOS Certificates, Identifiers & Profiles page and enter that exact same identifier as the App ID of your application. You can also create a wildcard Bundle Identifier. Wildcard Bundle IDs are great for quick development – you do not have to create a new ID for each and every app you test. However, you cannot use some iOS features with a wildcard ID. You must create an explicit Bundle ID if you plan to use push notifications, iAd, or Game Center features.")]),e._v(" "),o("p",[e._v("To create an App ID:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Log in to the "),o("a",{attrs:{href:"https://developer.apple.com/membercenter/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Developer Member Center"),o("OutboundLink")],1),e._v(" as the Team Agent or Admin.")])]),e._v(" "),o("li",[o("p",[e._v("Click the link under "),o("strong",[e._v("Certificates, Identifiers & Profiles")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Identifiers")]),e._v(", then click the plus sign (+) button near the top-right corner.")])]),e._v(" "),o("li",[o("p",[e._v("Enter a description, which cannot include special characters (including most punctuation).")])]),e._v(" "),o("li",[o("p",[e._v("Select the services you want to enable for this application. Note that you cannot use a wildcard ID if you enable certain services as previously mentioned.")])]),e._v(" "),o("li",[o("p",[e._v("Select the App ID Prefix to use.")])]),e._v(" "),o("li",[o("p",[e._v("Select the App ID Suffix. Be sure to use a reverse-domain style:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Choose "),o("strong",[e._v("Explicit App ID")]),e._v(" and enter the App ID in your tiapp.xml file as the Bundle ID (or set your App ID to this Bundle ID). Use this options if you enabled the previously mentioned services.")])]),e._v(" "),o("li",[o("p",[e._v("Choose "),o("strong",[e._v("Wildcard App ID")]),e._v(" to use a single ID to match multiple applications. Enter an asterisk (*) as the last digit of the Bundle ID.")])])])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Continue")]),e._v(".")])])]),e._v(" "),o("h3",{attrs:{id:"create-and-install-a-development-provisioning-profile"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-and-install-a-development-provisioning-profile"}},[e._v("#")]),e._v(" Create and install a development provisioning profile")]),e._v(" "),o("p",[e._v("You are now ready to create the provisioning profile file, which gathers together your certificates, the list of permitted devices, and the App ID.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Log in to the "),o("a",{attrs:{href:"https://developer.apple.com/membercenter/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Developer Member Center"),o("OutboundLink")],1),e._v(" as the Team Agent or Admin.")])]),e._v(" "),o("li",[o("p",[e._v("Click the link under "),o("strong",[e._v("Certificates, Identifiers & Profiles")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Provisioning Profiles")]),e._v(", then click the plus sign (+) button near the top-right corner.")])]),e._v(" "),o("li",[o("p",[e._v("Select "),o("strong",[e._v("iOS App Development")]),e._v(", then click "),o("strong",[e._v("Continue")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Select the App ID from the drop-down list, then click "),o("strong",[e._v("Continue")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Select the development certificates to include, then click "),o("strong",[e._v("Continue")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Select the devices you want to be able to run the app on, then click "),o("strong",[e._v("Continue")]),e._v(" .")])]),e._v(" "),o("li",[o("p",[e._v("Enter a name for your provisioning profile, then click "),o("strong",[e._v("Generate")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Download")]),e._v(" to save your provisioning profile file (.mobileprovision) to your computer, then click "),o("strong",[e._v("Done")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("If you are the Team Agent creating this provisioning profile for a team member, email or distribute it to him or her.")])])]),e._v(" "),o("p",[e._v("You have two options to install the provisioning profile file onto your development computer. You can drag the file and drop it on the Xcode icon, or you can install it from Studio by following the steps in the following section. Either way, installing the provisioning profile is a one-time operation (on each computer, until it expires).")]),e._v(" "),o("h3",{attrs:{id:"build-your-app-embedding-the-profile-within-the-app-s-bundle"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#build-your-app-embedding-the-profile-within-the-app-s-bundle"}},[e._v("#")]),e._v(" Build your app, embedding the profile within the app's bundle")]),e._v(" "),o("p",[e._v("Once you are done with the preceding steps, Studio makes it easy to build and install your app to a locally connected device.")]),e._v(" "),o("p",[o("img",{attrs:{src:i(799),alt:"DtiD_Run_On_Device"}})]),e._v(" "),o("p",[e._v("To launch a project in run mode, first select the project in the "),o("strong",[e._v("Project Explorer")]),e._v(" view, then in the global tool bar, select "),o("strong",[e._v("Run")]),e._v(" from the "),o("strong",[e._v("Launch Mode")]),e._v(" drop-down list. In the "),o("strong",[e._v("Target")]),e._v(" drop-down list, select "),o("strong",[e._v("iOS Device")]),e._v(", then select a device to directly install your application to it. If the "),o("strong",[e._v("Launch Automatically")]),e._v(" option is enabled under the "),o("strong",[e._v("Target")]),e._v(" drop-down list, the application will be automatically launched after the device is selected. If not, you need to click the "),o("strong",[e._v("Launch")]),e._v(" button to start the build process.")]),e._v(" "),o("p",[e._v("If you have not previously installed your app to a local device, you will see the following wizard dialog box. The wizard walks you through the necessary steps to build and install your app.")]),e._v(" "),o("p",[e._v("On the "),o("strong",[e._v("General")]),e._v(" page, ensure the requirements have been satisfied and select the desired SDK version, then click "),o("strong",[e._v("Next")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:i(800),alt:"DtiD_Run_Dialog"}})]),e._v(" "),o("p",[e._v("On the "),o("strong",[e._v("Certificates")]),e._v(" page, choose your developer certificate and keychain, then click "),o("strong",[e._v("Next")]),e._v(".\n"),o("img",{attrs:{src:i(801),alt:"DtiD_Certificates"}})]),e._v(" "),o("p",[e._v("On the last page, provisioning profiles are specified. To install the provisioning profile, click the "),o("strong",[e._v("Browse...")]),e._v(" button, locate your .mobileprovision file, and click "),o("strong",[e._v("Open")]),e._v(" to install that profile into Xcode. If you have installed more than one provisioning profile, make sure to choose the one that corresponds to your app and your developer certificate. Make sure your device is connected via USB and click "),o("strong",[e._v("Finish")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:i(802),alt:"DtiD_Provisioning"}})]),e._v(" "),o("p",[e._v("If you get errors, the most likely source of trouble is that you did not select the correct developer certificate or provisioning profile.")]),e._v(" "),o("p",[e._v("The next time you execute the run on iOS device action, you will not see a wizard where you specify the certificate, provisioning profile, and iOS SDK. Instead the build will run with the previous configuration automatically.")]),e._v(" "),o("p",[e._v("If you need to modify your run configuration, you can select "),o("strong",[e._v("Run Configurations")]),e._v(" from the "),o("strong",[e._v("Run")]),e._v(" drop down button.")]),e._v(" "),o("p",[e._v("You can navigate to the iOS Platform preference page to view and modify current iOS platform settings using the "),o("strong",[e._v("Manage settings")]),e._v(" link")]),e._v(" "),o("p",[o("img",{attrs:{src:i(803),alt:"DtiD_Run_Configurations"}}),e._v(" "),o("img",{attrs:{src:i(804),alt:"DtiD_Preferences"}})]),e._v(" "),o("h3",{attrs:{id:"building-your-app-with-the-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#building-your-app-with-the-cli"}},[e._v("#")]),e._v(" Building your app with the CLI")]),e._v(" "),o("p",[e._v("To build your application using the Titanium CLI, run the following command:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("appc run -p ios -T device  -C "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("DEVICE_UDID"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-V "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<DEVELOPER_CERTIFICATE_NAME>"')]),e._v("  -P "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("PROVISIONING_PROFILE_UUID"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),o("p",[e._v("If you omit any of the optional parameters, the CLI will prompt you for the information and provide you with available options. You can also retrieve the information from Xcode's Devices and Simulators window or using the following CLI command:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("appc ti info -t ios\n")])])]),o("h3",{attrs:{id:"installing-apps-to-remote-devices"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-apps-to-remote-devices"}},[e._v("#")]),e._v(" Installing apps to remote devices")]),e._v(" "),o("p",[e._v("You have various options for installing apps on remote devices. Of course, you will need to have gathered the UUIDs for each of those devices and used them when creating the provisioning profile. Your options include:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Email the .mobileprovision and IPA files to the user. He or she can drag & drop those files into iTunes and then sync their device.")])]),e._v(" "),o("li",[o("p",[e._v("Post those files on a web or FTP site accessible to your testing users. Because the files can be installed only onto devices whose UUIDs you have registered, you don't need to worry about unauthorized people accessing your app.")])]),e._v(" "),o("li",[o("p",[e._v('Use an "over the air" distribution system, such as TestFlight App, DIAWI, AppSendr, or HockeyKit. The first three are services you can subscribe to. The last is an open-source system that you can install on your own web server.')])])]),e._v(" "),o("p",[e._v("You upload the .mobileprovision and IPA files to the OTA system. Your registered users receive a notification by email (in some cases, users install a small app published by the OTA provider and receive notifications via that app). They're provided a download link, which installs the app onto their device. When you publish updates, users receive new notifications to download the new version.")]),e._v(" "),o("p",[e._v("Some of these systems enable you to gather user feedback, crash logs, and similar data from testers. There are free modules that help you integrate TestFlight App's data collection routines into your app.")]),e._v(" "),o("h3",{attrs:{id:"adding-itunes-artwork"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adding-itunes-artwork"}},[e._v("#")]),e._v(" Adding iTunes artwork")]),e._v(" "),o("p",[e._v("Adding iTunes artwork to your project gives your app a polished look when you are testing or deploying to test users. In order to get your application's icon to appear in iTunes, follow these steps:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Create a 512x512px and 1024x1024px (Retina) version of your applications icon in PNG format.")])]),e._v(" "),o("li",[o("p",[e._v("Save the PNG file to your application Resources/iphone (Alloy: app/assets/iphone) folder as iTunesArtwork.png and "),o("a",{attrs:{href:"#!/guide/mailto:iTunesArtwork@2x.png"}},[e._v("iTunesArtwork@2x.png")])])]),e._v(" "),o("li",[o("p",[e._v("Right-click the file in Studio and choose "),o("strong",[e._v("rename")]),e._v(". Remove the "),o("strong",[e._v(".png")]),e._v(" extension from the filename, make it simply iTunesArtwork and iTunesArtwork.")])]),e._v(" "),o("li",[o("p",[e._v("Do a clean build of your project for device.")])])]),e._v(" "),o("p",[e._v("Your application icon should now appear in iTunes.")]),e._v(" "),o("p",[e._v("If the "),o("em",[e._v("iTunesArtwork")]),e._v(" files are missing from your project, they will be automatically generated from the "),o("em",[e._v("DefaultIcon-ios.png")]),e._v(" file in your project's root folder.")]),e._v(" "),o("h3",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"http://developer.apple.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple's Developer Center"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"summary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),o("p",[e._v("In this chapter, you learned that Apple's policies and procedures are involved but not impossible. You have to work with the iOS Developers program's systems to install apps onto your own device, and those of your testers. Studio automates the steps of the program that it can. The rest you must perform at the iOS Certificates, Identifiers & Profiles page.")])])}),[],!1,null,null,null);t.default=r.exports}}]);