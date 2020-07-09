(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{1437:function(t,e,a){"use strict";a.r(e);var s=a(21),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"handoff-user-activities"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#handoff-user-activities"}},[t._v("#")]),t._v(" Handoff User Activities")]),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("Starting with iOS 8.0 and Titanium SDK 5.0, you can use the Handoff feature to transfer a user activity from one device to another. Handoff lets you start using an application, such as editing a document, on one device, then transfer to another device to continue working on it. Both devices will need to share the same iCloud account and Wi-Fi connection as well as be Bluetooth enabled.")]),t._v(" "),s("p",[t._v("Note that you can only test handoff on device. You cannot test handoff on the iOS simulator.")]),t._v(" "),s("h2",{attrs:{id:"device-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#device-setup"}},[t._v("#")]),t._v(" Device Setup")]),t._v(" "),s("p",[t._v("To use handoff, both devices must:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Be logged into the same iCloud account")])]),t._v(" "),s("li",[s("p",[t._v("Be on the same Wi-Fi network")])]),t._v(" "),s("li",[s("p",[t._v("Have Bluetooth enabled")])]),t._v(" "),s("li",[s("p",[t._v("Have Handoff enabled")])])]),t._v(" "),s("p",[t._v("For detailed instructions, see "),s("a",{attrs:{href:"https://support.apple.com/en-us/HT204681",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apple Support: Use Continuity to connect your iPhone, iPad, iPod touch, and Mac"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("To test if Handoff is working, open Safari on one device and navigate to a specific web page. On the other device, go to the locked screen. You should see a Safari icon in the bottom-left corner. Tap on the Safari icon and swipe up. Safari should open to the same web page.")]),t._v(" "),s("h2",{attrs:{id:"share-an-activity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#share-an-activity"}},[t._v("#")]),t._v(" Share an Activity")]),t._v(" "),s("p",[t._v("To share an Activity, create an UserActivity object and set it as the current activity. You will also need to register the activity in the plist section of the "),s("code",[t._v("tiapp.xml")]),t._v(" file to use it.")]),t._v(" "),s("p",[t._v("To create an Activity, use the Titanium.App.iOS.createUserActivity() method. Pass the method a dictionary with following properties defined. The "),s("code",[t._v("activityType")]),t._v(" property is the only required property.")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("activityType")]),t._v(": developer-defined string used as the activity type for the user activity. The activity type must be registered in the plist section of the "),s("code",[t._v("tiapp.xml")]),t._v(" file to use it.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("eligibleForHandOff")]),t._v(": set to "),s("code",[t._v("true")]),t._v(" to allow the activity to be handed off to another device. Default is true. "),s("strong",[t._v("Requires iOS 9.0 or later.")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("eligibleForPublicIndexing")]),t._v(": set to "),s("code",[t._v("true")]),t._v(" to allow the activity to be indexed publicly allowing it to be search by all users. Must also set the "),s("code",[t._v("requiredUserInfoKey")]),t._v(" or "),s("code",[t._v("webpageURL")]),t._v(" properties. Default is false. "),s("strong",[t._v("Requires iOS 9.0 or later.")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("eligibleForSearch")]),t._v(": set to "),s("code",[t._v("true")]),t._v(" to allow the activity to be added to the on-device index. Default is false. "),s("strong",[t._v("Requires iOS 9.0 or later.")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("expirationDate")]),t._v(": date that the activity expires in the format: "),s("code",[t._v("yyyy-MM-ddTHH:mm:ss.SSS+0000")]),t._v(". If not set, the OS will determine the expiration time.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("keywords")]),t._v(": array of strings that a user can use to find the activity in Spotlight. You can also use the UserActivity object's "),s("code",[t._v("addContentAttributeSet()")]),t._v(" method to add indexable content. "),s("strong",[t._v("Both APIs require iOS 9.0 or later.")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("requiredUserInfoKey")]),t._v(": array of keys that need to be sent in the "),s("code",[t._v("userInfo")]),t._v(" object. "),s("strong",[t._v("Requires iOS 9.0 or later.")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("title")]),t._v(": user-visible title for the activity, such as a document name or webpage URL.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("userInfo")]),t._v(": object of key-value pairs to send with the activity")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("webpageURL")]),t._v(": if a suitable application is not found on the device, loads the specified web page and continues the activity in the browser. Only supports the "),s("code",[t._v("http://")]),t._v(" and "),s("code",[t._v("https://")]),t._v(" protocols. Any other protocol will throw an error.")])])]),t._v(" "),s("p",[t._v("Once you are ready to share the activity, use the "),s("code",[t._v("supported")]),t._v(" property to check if the user activity is supported by the application, then invoke its "),s("code",[t._v("becomeCurrent()")]),t._v(" method to indicate that the activity is in use by the current device.")]),t._v(" "),s("p",[s("strong",[t._v("app.js")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" activity "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createUserActivity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    activityType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.foo.message'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Handoff Messenger'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    userInfo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        msg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tag! You\\'re it!'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("activity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("supported"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'activity is not supported'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    activity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("becomeCurrent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Before using the activity, you will need to register each activity type in the "),s("code",[t._v("plist")]),t._v(" section of the "),s("code",[t._v("tiapp.xml")]),t._v(" file. Under the "),s("code",[t._v("<dict>")]),t._v(" element in the "),s("code",[t._v("<ios><plist>")]),t._v(" elements, add the "),s("code",[t._v("NSUserActivityTypes")]),t._v(" key with the value set to an array of strings, where each string is the "),s("code",[t._v("activityType")]),t._v(" property that you want the application to support.")]),t._v(" "),s("p",[s("strong",[t._v("tiapp.xml")])]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ios")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plist")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("NSUserActivityTypes"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.foo.message"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.foo.bar"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plist")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ios")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"monitor-the-activity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#monitor-the-activity"}},[t._v("#")]),t._v(" Monitor the Activity")]),t._v(" "),s("p",[t._v("Listen for the "),s("a",{attrs:{href:"#!/api/Titanium.App.iOS.UserActivity-event-useractivitywascontinued"}},[s("code",[t._v("useractivitywascontinued")])]),t._v(" event to determine when the user activity was handed off to another device. The event will be passed the "),s("code",[t._v("activityType")]),t._v(", "),s("code",[t._v("title")]),t._v(", "),s("code",[t._v("userInfo")]),t._v(" and "),s("code",[t._v("webpageURL")]),t._v(" properties that were set on the user activity.")]),t._v(" "),s("p",[s("strong",[t._v("app.js")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("activity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'useractivitywascontinued'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Activity moved to a different device.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"update-the-activity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-the-activity"}},[t._v("#")]),t._v(" Update the Activity")]),t._v(" "),s("p",[s("em",[t._v("Every time")]),t._v(" something happens that requires the activity's state to be updated before it could be handed off, set the UserActivity object's "),s("code",[t._v("needsSave")]),t._v(" property to "),s("code",[t._v("true")]),t._v(". Listen for the "),s("code",[t._v("useractivitywillsave")]),t._v(" event to actually update the activity state or content, such as saving changes to an API. This event is triggered at the discretion of iOS and when you call "),s("code",[t._v("becomCurrent()")]),t._v(". The event will be passed the current "),s("code",[t._v("activityType")]),t._v(", "),s("code",[t._v("title")]),t._v(", "),s("code",[t._v("userInfo")]),t._v(" and "),s("code",[t._v("webpageURL")]),t._v(" properties. After the event is fired, iOS will reset the "),s("code",[t._v("needsSave")]),t._v(" property to false.")]),t._v(" "),s("p",[s("strong",[t._v("app.js")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("activity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'useractivitywillsave'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Updating content...'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Every time the activity needs to be updated set:")]),t._v("\nactivity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("needsSave "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"continue-the-activity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#continue-the-activity"}},[t._v("#")]),t._v(" Continue the Activity")]),t._v(" "),s("p",[t._v("To continue the activity on another paired device, listen for the "),s("code",[t._v("Ti.App.iOS")]),t._v(" module's "),s("code",[t._v("continueactivity")]),t._v("event. The handoff event will be passed the "),s("code",[t._v("activityType")]),t._v(", "),s("code",[t._v("title")]),t._v(", "),s("code",[t._v("userInfo")]),t._v(" and "),s("code",[t._v("webpageURL")]),t._v(" properties that were set on the user activity. Use the passed information to continue the activity.")]),t._v(" "),s("p",[s("strong",[t._v("app.js")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'continueactivity'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activityType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.foo.message'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"test-the-sample"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-the-sample"}},[t._v("#")]),t._v(" Test the Sample")]),t._v(" "),s("p",[t._v('To test the code above, make sure you have both iOS devices setup as described in the "Device Setup" section. Copy and paste both '),s("code",[t._v("app.js")]),t._v(" snippets to one file and add the "),s("code",[t._v("NSUserActivityTypes")]),t._v(" key to the "),s("code",[t._v("tiapp.xml")]),t._v(". Run the project on two iOS devices.")]),t._v(" "),s("p",[t._v("Before launching the application, have the lock screen on for the first device, then on the second device, launch the application. On the lock screen of the first device, the application icon should appear in the bottom-left corner.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(636),alt:"lockscreen"}})]),t._v(" "),s("p",[t._v('Tap the icon and drag up to open the application on the first device. You should see an alert dialog with the message: "Tag! You\'re it!"')]),t._v(" "),s("p",[s("img",{attrs:{src:a(637),alt:"tagyouareit"}})]),t._v(" "),s("h2",{attrs:{id:"reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/Handoff/HandoffFundamentals/HandoffFundamentals.html#//apple_ref/doc/uid/TP40014338",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS Developer Library: Handoff Programming Guide"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports},636:function(t,e,a){t.exports=a.p+"assets/img/lockscreen.8a1bb504.png"},637:function(t,e,a){t.exports=a.p+"assets/img/tagyouareit.f6122e54.png"}}]);