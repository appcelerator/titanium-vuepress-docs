(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1023:function(t,e,a){"use strict";a.r(e);var n=a(21),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"ios-local-notifications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ios-local-notifications"}},[t._v("#")]),t._v(" iOS Local Notifications")]),t._v(" "),n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),n("p",[t._v("Local notifications alert the user that something is happening to your application while it is in the background. On iOS, the notification can appear as an alert or banner message and stays in the notification center until the user clears them. The user can tap or swipe the notification to launch the application or dismiss the notification. The application can also play a sound or modify its badge value on its icon. Note that the user can customize how they want to receive notifications from "),n("strong",[t._v("Settings")]),t._v(". They can change how the message appears or even disable them.")]),t._v(" "),n("p",[t._v("The application can create interactive notifications if the device is running iOS 8 or later. An interactive notification presents options that the user can tap to respond to the application while it is in the background. To create an interactive notification, see "),n("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Notification_Services/iOS_Interactive_Notifications/"}},[t._v("iOS Interactive Notifications")]),t._v(".")],1),t._v(" "),n("h2",{attrs:{id:"notification-types"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#notification-types"}},[t._v("#")]),t._v(" Notification Types")]),t._v(" "),n("p",[t._v("The following sections describe how iOS may present notifications to users.")]),t._v(" "),n("h3",{attrs:{id:"alert-dialog"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#alert-dialog"}},[t._v("#")]),t._v(" Alert Dialog")]),t._v(" "),n("p",[t._v("If the application is in the background and the device is unlocked, iOS presents the notification as either a banner message or an alert depending on the user's selection. The user can tap on "),n("strong",[t._v("Open")]),t._v(" to launch the application, while tapping "),n("strong",[t._v("Close")]),t._v(" dismisses the notification.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(747),alt:"AlertDialog"}})]),t._v(" "),n("h3",{attrs:{id:"badge"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#badge"}},[t._v("#")]),t._v(" Badge")]),t._v(" "),n("p",[t._v("The application can optionally set the badge value, which appears in the application's icon. Use the value to indicate the number of items the user needs to respond to. After the user responds, be sure to reset the badge value.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(748),alt:"BadgeNotification"}})]),t._v(" "),n("h3",{attrs:{id:"banner-message"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#banner-message"}},[t._v("#")]),t._v(" Banner Message")]),t._v(" "),n("p",[t._v("If the application is in the background and the device is unlocked, iOS presents the notification as either a banner message or an alert depending on the user's selection. The user can tap the banner message to launch the application. If the user does nothing, the banner message eventually disappears and the notification will be queued in the notification center.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(749),alt:"BannerNotification"}})]),t._v(" "),n("h3",{attrs:{id:"lock-screen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lock-screen"}},[t._v("#")]),t._v(" Lock Screen")]),t._v(" "),n("p",[t._v("If the device is locked, the notification appears in the lock screen. The user swipes the notification to the right to launch the application.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(750),alt:"LockedScreen"}})]),t._v(" "),n("h3",{attrs:{id:"notification-center"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#notification-center"}},[t._v("#")]),t._v(" Notification Center")]),t._v(" "),n("p",[t._v("If the user never responds to notifications, the notifications are queued in the notification center. The user can click on the notification to launch the application or click the "),n("strong",[t._v("x")]),t._v(" button to clear the notifications.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(751),alt:"NotificationCenter"}})]),t._v(" "),n("h3",{attrs:{id:"sound"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sound"}},[t._v("#")]),t._v(" Sound")]),t._v(" "),n("p",[t._v("The application can play a sound when a notification is received.")]),t._v(" "),n("h2",{attrs:{id:"configure-notification-settings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure-notification-settings"}},[t._v("#")]),t._v(" Configure Notification Settings")]),t._v(" "),n("p",[t._v("The user can configure how to receive notifications from your application using "),n("strong",[t._v("Settings")]),t._v(". To access the notification settings, open "),n("strong",[t._v("Settings")]),t._v(", then:")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("For iOS 8 and later, tap the application to configure, then tap "),n("strong",[t._v("Notifications")]),t._v(".")])]),t._v(" "),n("li",[n("p",[t._v("For iOS 7, tap "),n("strong",[t._v("Notification Center")]),t._v(", then tap the application to configure.")])])]),t._v(" "),n("p",[t._v("In the "),n("strong",[t._v("Notifications")]),t._v(" screen, the user can selectively decide which notification types to receive.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(752),alt:"NotificationSettings"}})]),t._v(" "),n("h2",{attrs:{id:"send-a-local-notification"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#send-a-local-notification"}},[t._v("#")]),t._v(" Send a Local Notification")]),t._v(" "),n("p",[t._v("To send a local notification, use the "),n("code",[t._v("Titanium.App.iOS.scheduleLocalNotification()")]),t._v(" method. The application can monitor local notifications using the "),n("a",{attrs:{href:"#!/api/Titanium.App.iOS-event-notification"}},[n("code",[t._v("notification")])]),t._v(" event. For devices running iOS 8 and later, you need to register the application to use the local notification service before scheduling local notifications.")]),t._v(" "),n("h3",{attrs:{id:"register-for-local-notifications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#register-for-local-notifications"}},[t._v("#")]),t._v(" Register for Local Notifications")]),t._v(" "),n("p",[t._v("For devices running iOS 8 and later, you need to register the application to use the local notification services. Use the "),n("code",[t._v("Titanium.App.iOS.registerUserNotificationSettings()")]),t._v("method to enroll the application in local notification services. Pass the method a dictionary with the "),n("code",[t._v("types")]),t._v(" property set to an array of notification types to use.")]),t._v(" "),n("ul",[n("li",[n("p",[n("code",[t._v("Titanium.App.iOS.USER_NOTIFICATION_TYPE_ALERT")]),t._v(": allow the application to display an alert or banner message.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("Titanium.App.iOS.USER_NOTIFICATION_TYPE_BADGE")]),t._v(": allow the application to modify the badge value in the application's icon.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("Titanium.App.iOS.USER_NOTIFICATION_TYPE_NONE")]),t._v(": disable application UI notifications. The application will still be notified of the notification by the "),n("code",[t._v("notification")]),t._v(" event.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("Titanium.App.iOS.USER_NOTIFICATION_TYPE_SOUND")]),t._v(": allow the application to play a sound.")])])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('// Check if the device is running iOS 8 or later, before registering for local notifications\nif (Ti.Platform.name == "iPhone OS" && parseInt(Ti.Platform.version.split(".")[0]) >= 8) {\n    Ti.App.iOS.registerUserNotificationSettings({\n      types: [\n            Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT,\n            Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND,\n            Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE\n        ]\n    });\n}\n')])])]),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("💡 Hint")]),t._v(" "),n("p",[t._v("If you are using interactive notifications, the application also needs to register the notification categories you want to use. Set the "),n("code",[t._v("categories")]),t._v(" property of the dictionary passed to the "),n("code",[t._v("registerUserNotificationSettings()")]),t._v(" method to an array of notification category objects that the application needs to use. For more details, see the "),n("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Notification_Services/iOS_Interactive_Notifications/"}},[t._v("iOS Interactive Notifications")]),t._v(".")],1)]),t._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),n("p",[t._v("Callbacks get called properly only when Liveview is enabled.")])]),t._v(" "),n("p",[t._v("After the application registers for notification services, iOS will prompt the user to allow the application to send notifications or not. The user can re-configure the notification settings later from "),n("strong",[t._v("Settings")]),t._v(".")]),t._v(" "),n("p",[t._v("The application can monitor the "),n("code",[t._v("usernotificationsettings")]),t._v(" event to know when and which user notification types and categories are registered.")]),t._v(" "),n("h3",{attrs:{id:"schedule-a-local-notification"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#schedule-a-local-notification"}},[t._v("#")]),t._v(" Schedule a Local Notification")]),t._v(" "),n("p",[t._v("To send a local notification, use the "),n("code",[t._v("Titanium.App.iOS.scheduleLocalNotification()")]),t._v(" method. Pass the method a dictionary with the following properties. All properties are optional:")]),t._v(" "),n("ul",[n("li",[n("p",[n("code",[t._v("alertAction")]),t._v(': modify the default slider text of the alert ("slide to view") (see diagram below) or the title of the '),n("strong",[t._v("Open")]),t._v(' button for the alert dialog. The value replaces "view" for the slide text, so the message will be "slide to '),n("alertAction",[t._v('".')])],1)]),t._v(" "),n("li",[n("p",[n("code",[t._v("alertBody")]),t._v(": text to display in the alert or banner message (see diagram below). If omitted, an alert is not displayed.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("alertLaunchImage")]),t._v(": splash image to display instead of the application's default splash image.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("badge")]),t._v(": number to set in the application icon's badge. To remove the badge value, set the value to a negative number.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("category")]),t._v(": s tring identifier of the category of actions to be displayed in the interactive notification (for iOS 8 and later).")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("date")]),t._v(": datetime to send the notification as a JavaScript Date object. If omitted, the notification is sent immediately.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("repeat")]),t._v(": interval to repeat the notification. Values can be: "),n("code",[t._v("daily")]),t._v(", "),n("code",[t._v("weekly")]),t._v(", "),n("code",[t._v("monthly")]),t._v(" or "),n("code",[t._v("yearly")]),t._v(". Default is once.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("sound")]),t._v(": sound file to play relative to the "),n("code",[t._v("Resources")]),t._v(" or "),n("code",[t._v("app/assets")]),t._v(" directory.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("timezone")]),t._v(": t imezone of the date configured for the notification. If not set, the system timezone is used.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("userInfo")]),t._v(": extra data to pass to the application that can be processed in the "),n("code",[t._v("notification")]),t._v(" event.")])])]),t._v(" "),n("p",[n("img",{attrs:{src:a(753),alt:"LockedAlertAnnotated"}})]),t._v(" "),n("p",[t._v("The "),n("code",[t._v("scheduleLocalNotification()")]),t._v(" method returns a LocalNotification object. The application can use the object to call the "),n("code",[t._v("cancel()")]),t._v(" method in case it needs to cancel the notification.")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The following code snippet schedules an alert to be sent within three seconds")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" notification "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("App"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iOS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("scheduleLocalNotification")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Alert will display 'slide to update' instead of 'slide to view'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or 'Update' instead of 'Open' in the alert dialog")]),t._v("\n    alertAction"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"update"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Alert will display the following message")]),t._v("\n    alertBody"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"New content available! Update now?"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The badge value in the icon will be changed to 1")]),t._v("\n    badge"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Alert will be sent in three seconds")]),t._v("\n    date"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The following sound file will be played")]),t._v("\n    sound"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/alert.wav"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The following URL is passed to the application")]),t._v("\n    userInfo"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.download.com/content/asset.json"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"monitor-local-notifications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#monitor-local-notifications"}},[t._v("#")]),t._v(" Monitor Local Notifications")]),t._v(" "),n("p",[t._v("The application can monitor incoming local notifications by using the iOS application-level "),n("a",{attrs:{href:"#!/api/Titanium.App.iOS-event-notification"}},[n("code",[t._v("notification")])]),t._v(" event if it is in the foreground or returns to the foreground. The event is passed a dictionary containing the same properties as the ones used to schedule the notification except the "),n("code",[t._v("interval")]),t._v(" property.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// Fired when the application receives an incoming local notification when it's in the foreground\nTi.App.iOS.addEventListener('notification', function(e) {\n\n    // Process custom data\n    if (e.userInfo && \"url\" in e.userInfo){\n        httpGetRequest(e.userInfo.url);\n    }\n\n    // Reset the badge value\n    if (e.badge > 0) {\n        Ti.App.iOS.scheduleLocalNotification({\n            date: new Date(new Date().getTime()),\n            badge: -1\n        });\n    }\n});\n")])])]),n("h3",{attrs:{id:"cancel-a-notification"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cancel-a-notification"}},[t._v("#")]),t._v(" Cancel a Notification")]),t._v(" "),n("p",[t._v("If the application needs to cancel a notification, it can either selectively choose which notification(s) to cancel or cancel all pending notifications.")]),t._v(" "),n("p",[n("strong",[t._v("To cancel all pending notifications")]),t._v(", call the "),n("code",[t._v("Titanium.App.iOS.cancelAllLocalNotifications()")]),t._v(" method.")]),t._v(" "),n("p",[n("strong",[t._v("To cancel a specific notification")]),t._v(", the application can either:")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Keep a reference to the notification object and call the "),n("code",[t._v("cancel()")]),t._v(" method on the object.")])]),t._v(" "),n("li",[n("p",[t._v("Add an ID to the notification and pass the ID to the "),n("code",[t._v("Titanium.App.iOS.cancelLocalNotification()")]),t._v(" method. To add an ID to the notification, set the "),n("code",[t._v("id")]),t._v(" property of the "),n("code",[t._v("userInfo")]),t._v(" dictionary passed to the "),n("code",[t._v("scheduleLocationNotification()")]),t._v(" method.")])])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" notification "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("App"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iOS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("scheduleLocalNotification")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create an ID for the notification")]),t._v("\n    userInfo"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    alertBody"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test? Test?"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    date"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Either one of these methods will cancel the notification")]),t._v("\nnotification"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cancel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nTi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("App"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iOS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cancelLocalNotification")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=i.exports},747:function(t,e,a){t.exports=a.p+"assets/img/AlertDialog.c342f9b6.png"},748:function(t,e,a){t.exports=a.p+"assets/img/BadgeNotification.29d3c8a7.png"},749:function(t,e,a){t.exports=a.p+"assets/img/BannerNotification.7bd74450.png"},750:function(t,e,a){t.exports=a.p+"assets/img/LockedScreen.f9977ec3.png"},751:function(t,e,a){t.exports=a.p+"assets/img/NotificationCenter.ba1b32fc.png"},752:function(t,e,a){t.exports=a.p+"assets/img/NotificationSettings.914a3421.png"},753:function(t,e,a){t.exports=a.p+"assets/img/LockedAlertAnnotated.f25a6505.png"}}]);