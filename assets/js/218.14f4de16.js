(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{1032:function(t,s,n){"use strict";n.r(s);var a=n(21),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"modules-cloudpush"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloudpush"}},[t._v("#")]),t._v(" Modules.CloudPush")]),t._v(" "),n("TypeHeader"),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("p",[t._v("The CloudPush module supports Android push notifications for a device by providing a connection\nto the push notification server to the device to receive push notifications and to optionally\npresent a tray notification to the user when a new push notification is received.")]),t._v(" "),n("p",[t._v("This module is only used to receive push notifications.  For information on configuring your\nproject to send push notifications, see "),n("type-link",{attrs:{type:"Modules.Cloud.PushNotifications"}},[t._v("Modules.Cloud.PushNotifications")]),t._v(".")],1),t._v(" "),n("h3",{attrs:{id:"push-protocols"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#push-protocols"}},[t._v("#")]),t._v(" Push Protocols")]),t._v(" "),n("p",[t._v("The CloudPush module only supports "),n("a",{attrs:{href:"https://firebase.google.com/docs/cloud-messaging",target:"_blank",rel:"noopener noreferrer"}},[t._v("Firebase Cloud Messaging"),n("OutboundLink")],1),t._v(" (FCM) for push\nnotifications.")]),t._v(" "),n("h3",{attrs:{id:"project-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#project-configuration"}},[t._v("#")]),t._v(" Project Configuration")]),t._v(" "),n("p",[t._v("This module must also be added to the modules section in your tiapp.xml. This can be done using the Modules list in\nthe Titanium Studio TiApp Editor, or by editing the XML directly and adding the following line to the modules\nelement:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('<module platform="android">ti.cloudpush</module>\n')])])]),n("p",[t._v("Your app must prove that it is allowed to talk to Arrow. This keeps your data secure by preventing anyone from\nmaking requests to Arrow that impersonate your app.")]),t._v(" "),n("p",[t._v("Titanium Studio creates a pair of keys (Development and Production) for each Titanium application depending on the\nuser preference specified during new project creation. This pair of keys will be stored in "),n("code",[t._v("tiapp.xml")]),t._v(" and one of the\nkeys will be used during application build depending on the build type (development or production).")]),t._v(" "),n("p",[t._v("To use push notifications, in the "),n("code",[t._v("tiapp.xml")]),t._v(" file, you need to specify the Arrow Push keys and push\ntype. The supported properties in "),n("code",[t._v("tiapp.xml")]),t._v(" are:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('\x3c!-- Property keys for Arrow Push (required) --\x3e\n<property name="acs-api-key-development" type="string">YOUR DEVELOPMENT API KEY HERE</property>\n<property name="acs-api-key-production" type="string">YOUR PRODUCTION API KEY HERE</property>\n<property name="acs-api-key" type="string">YOUR API KEY HERE</property>\n')])])]),n("p",[t._v("If a deployment-specific setting is provided (production or development) then that value will be used for the current deployment environment.")]),t._v(" "),n("p",[n("em",[t._v("WARNING")]),t._v(": The default properties of this module are used until you set a property for the first time. Because the\nproperties are persisted to the device settings (via "),n("type-link",{attrs:{type:"Titanium.App.Properties"}},[t._v("Titanium.App.Properties")]),t._v("), the most recent value you set will\nalways be used.")],1),t._v(" "),n("h3",{attrs:{id:"google-services-json"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#google-services-json"}},[t._v("#")]),t._v(" Google Services JSON")]),t._v(" "),n("p",[t._v("As of Titanium 9.1.0 (using "),n("code",[t._v("ti.cloudpush")]),t._v(" module version 7.1.0), you must download a "),n("code",[t._v("google-services.json")]),t._v(" file\nfrom Google's "),n("a",{attrs:{href:"https://console.firebase.google.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Firebase Console"),n("OutboundLink")],1),t._v(" website and add it your Titanium project.\nThis file provides the keys needed to retrieve a device token for push notifications.")]),t._v(" "),n("p",[t._v("For Alloy projects, download the file to folder...")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("./app/platform/android\n")])])]),n("p",[t._v("For Classic projects, download the file to folder...")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("./platform/android\n")])])]),n("h3",{attrs:{id:"virtual-private-cloud-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#virtual-private-cloud-configuration"}},[t._v("#")]),t._v(" Virtual Private Cloud Configuration")]),t._v(" "),n("p",[t._v("If you are using a virtual private cloud (VPC), you need to configure your Arrow Push dispatcher\nURL in order to send push notifications with FCM.  In the "),n("code",[t._v("tiapp.xml")]),t._v(" file, add the "),n("code",[t._v("acs-push-api-url")]),t._v("\napplication property and set the node text to the push dispatcher URL provided to you.  The URL may\nbe the same as your custom ArrowDB endpoint and have deployment-specific settings, that is, two\nURLs--one for production and another for the development environment.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('<ti:app>\n    <property name="acs-push-api-url-production">https://api-prod.fooinc.com</property>\n    <property name="acs-push-api-url-development">https://api-dev.fooinc.com</property>\n</ti:app>\n')])])]),n("h3",{attrs:{id:"grouped-notifications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#grouped-notifications"}},[t._v("#")]),t._v(" Grouped Notifications")]),t._v(" "),n("p",[t._v("If the device receives multiple push notifications from the application, Android can group these\nnotifications together as one notification.")]),t._v(" "),n("p",[t._v("To use grouped notifications, add a grouped notification template to either the "),n("code",[t._v("tiapp.xml")]),t._v(" file\nor the "),n("code",[t._v("i18n")]),t._v(" folder for internationalized versions:")]),t._v(" "),n("p",[n("code",[t._v("tiapp.xml")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('<property name="acs-grouped-notification-message-development" type="string">You have $number$ unread messages.</property>\n<property name="acs-grouped-notification-message-production" type="string">You have $number$ unread messages.</property>\n-or-\n<property name="acs-grouped-notification-message" type="string">You have $number$ unread messages.</property>\n')])])]),n("p",[n("code",[t._v("i18n/es/strings.xml")]),t._v(" (example for Spanish):")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('<?xml version="1.0" encoding="utf-8"?>\n<resources>\n   <string name="acs_grouped_notification_message">Tienes $number$ mensajes no leidos.</string>\n</resources>\n')])])]),n("p",[t._v("The "),n("code",[t._v("$number$")]),t._v(" variable indicates the number of unread messages.")]),t._v(" "),n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),n("h3",{attrs:{id:"listening-for-push-notifications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#listening-for-push-notifications"}},[t._v("#")]),t._v(" Listening for Push Notifications")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CloudPush "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ti.cloudpush'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Show notifications in status bar while app is backgrounded.")]),t._v("\nCloudPush"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("showTrayNotification "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Show notifications in status bar while app is in the foreground.")]),t._v("\nCloudPush"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("showTrayNotificationsWhenFocused "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Fetches app's push notification token and registers it with the cloud if changed.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerForPushNotifications")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    CloudPush"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("retrieveDeviceToken")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We've successfully obtained a token.")]),t._v("\n            Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Device Token: '")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deviceToken"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// You should call "ti.cloud" module\'s PushNotifications subscribe() method next,')]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// but only after successfully logging in to the cloud.")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We've failed to acquire a token.")]),t._v("\n            Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Failed to register for CloudPush. Reason: '")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Always fetch token from system on app startup in case it changed since last startup.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerForPushNotifications")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Called for every push notification received by the app.")]),t._v("\nCloudPush"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'callback'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("payload"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Called when last token has expired and has become invalid.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We must obtain a new token in order for this app to keep receiving push notifications.")]),t._v("\nCloudPush"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deviceTokenExpired'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Previous CloudPush token has expired. Acquiring a new token.'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerForPushNotifications")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Called when cold-starting app by tapping notification in status bar.")]),t._v("\nCloudPush"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'trayClickLaunchedApp'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tray Click Launched App (app was not running)'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Called when resuming app from background by tapping notification in status bar.")]),t._v("\nCloudPush"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'trayClickFocusedApp'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tray Click Focused App (app was already running)'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ApiDocs")],1)}),[],!1,null,null,null);s.default=e.exports}}]);