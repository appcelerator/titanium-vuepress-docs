(window.webpackJsonp=window.webpackJsonp||[]).push([[1006],{1633:function(t,s,a){"use strict";a.r(s);var n=a(21),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"using-the-tiapp-utility-class-in-hyperloop-ios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-tiapp-utility-class-in-hyperloop-ios"}},[t._v("#")]),t._v(" Using the TiApp Utility Class in Hyperloop iOS")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("💡 Hint")]),t._v(" "),a("p",[t._v("This document describes technologies available in Hyperloop 3.1.0+ and Titanium 7.3.0+.")])]),t._v(" "),a("p",[t._v('When developing iOS modules with Hyperloop, there are situations where you want to present a new view controller from your current context or pass your current context to a new view controller. Natively, you would usually reference "self" as its represents your current UIViewController subclass. In Titanium, your "self" is usually a Ti.UI.Window instance, which is fine for Titanium development, but cannot be used in native development.')]),t._v(" "),a("p",[t._v('That\'s why Hyperloop includes a number of utility methods that solve these kind of problems. They are exposed in the "TiApp" class that can be required as the following:')]),t._v(" "),a("p",[a("strong",[t._v("indes.js")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ES5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" TiApp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Titanium/TiApp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ES6+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" TiApp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Titanium/TiApp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("And that's basically it. As the TiApp class is a singleton in Titanium, the instance methods are done on the "),a("code",[t._v("TiApp.app()")]),t._v(" singleton and the class methods on "),a("code",[t._v("TiApp")]),t._v(" directly. See the following table for a reference of the available utilities:")]),t._v(" "),a("h2",{attrs:{id:"class-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-methods"}},[t._v("#")]),t._v(" Class Methods")]),t._v(" "),a("p",[t._v("Call these methods on the "),a("code",[t._v("TiApp")]),t._v(" property directly.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Parameters")]),t._v(" "),a("th",[t._v("Return")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("app()")]),t._v(" "),a("td",[t._v("void")]),t._v(" "),a("td",[t._v("TiApp")]),t._v(" "),a("td",[t._v("The singleton object to call all other API's on.")])]),t._v(" "),a("tr",[a("td",[t._v("getController()")]),t._v(" "),a("td",[t._v("void")]),t._v(" "),a("td",[t._v("UIViewController")]),t._v(" "),a("td",[t._v("Returns the application's root view controller.")])]),t._v(" "),a("tr",[a("td",[t._v("getTiAppProperties()")]),t._v(" "),a("td",[t._v("void")]),t._v(" "),a("td",[t._v("NSDictionary")]),t._v(" "),a("td",[t._v("Return a read-only dictionary from tiapp.xml properties.")])])])]),t._v(" "),a("h2",{attrs:{id:"instance-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instance-methods"}},[t._v("#")]),t._v(" Instance Methods")]),t._v(" "),a("p",[t._v("Call these methods on the "),a("code",[t._v("TiApp.app()")]),t._v(" singleton.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Parameters")]),t._v(" "),a("th",[t._v("Return")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("showModalController(controller, animated)")]),t._v(" "),a("td",[t._v("UIViewController, BOOL")]),t._v(" "),a("td",[t._v("void")]),t._v(" "),a("td",[t._v('Presents a view controller on the top presented view controller (e.g. "'),a("code",[t._v("presentViewController:animated")]),t._v("😊.")])]),t._v(" "),a("tr",[a("td",[t._v("hideModalController(controller, animated)")]),t._v(" "),a("td",[t._v("UIViewController, BOOL")]),t._v(" "),a("td",[t._v("void")]),t._v(" "),a("td",[t._v('Hides a currently presented view controller (e.g. " '),a("code",[t._v("dismissViewControllerAnimated:completion")]),t._v("😊.")])]),t._v(" "),a("tr",[a("td",[t._v("showModalError(error)")]),t._v(" "),a("td",[t._v("NSString")]),t._v(" "),a("td",[t._v("void")]),t._v(" "),a("td",[t._v('Shows the "red screen of death" indicating an unhandled error.')])]),t._v(" "),a("tr",[a("td",[t._v("startNetwork()")]),t._v(" "),a("td",[t._v("void")]),t._v(" "),a("td",[t._v("void")]),t._v(" "),a("td",[t._v("Tells application to show network activity indicator.")])]),t._v(" "),a("tr",[a("td",[t._v("stopNetwork()")]),t._v(" "),a("td",[t._v("void")]),t._v(" "),a("td",[t._v("void")]),t._v(" "),a("td",[t._v("Tells application to hide network activity indicator.")])]),t._v(" "),a("tr",[a("td",[t._v("registerApplicationDelegate(delegate)")]),t._v(" "),a("td",[a("code",[t._v("id<UIApplicationDelegate>")])]),t._v(" "),a("td",[t._v("void")]),t._v(" "),a("td",[t._v("Registers a new "),a("code",[t._v("UIApplicationDelegate")]),t._v(" to the host application.")])]),t._v(" "),a("tr",[a("td",[t._v("unregisterApplicationDelegate(delegate)")]),t._v(" "),a("td",[a("code",[t._v("id<UIApplicationDelegate>")])]),t._v(" "),a("td",[t._v("void")]),t._v(" "),a("td",[t._v("Unregisters an existing "),a("code",[t._v("UIApplicationDelegate")]),t._v(" from the host application.")])]),t._v(" "),a("tr",[a("td",[t._v("windowIsKeyWindow()")]),t._v(" "),a("td",[t._v("void")]),t._v(" "),a("td",[t._v("BOOL")]),t._v(" "),a("td",[t._v("Indicates weather the current window is the key-window of the host application.")])]),t._v(" "),a("tr",[a("td",[t._v("getRemoteDeviceUUID()")]),t._v(" "),a("td",[t._v("void")]),t._v(" "),a("td",[t._v("NSString")]),t._v(" "),a("td",[t._v("Returns the remote UUID for the current running device.")])]),t._v(" "),a("tr",[a("td",[t._v("getSessionId()")]),t._v(" "),a("td",[t._v("void")]),t._v(" "),a("td",[t._v("NSString")]),t._v(" "),a("td",[t._v("Returns the unique identifier for the current application launch.")])]),t._v(" "),a("tr",[a("td",[t._v("getLaunchOptions()")]),t._v(" "),a("td",[t._v("void")]),t._v(" "),a("td",[t._v("NSDictionary")]),t._v(" "),a("td",[t._v("Returns the application's launch options.")])])])]),t._v(" "),a("h2",{attrs:{id:"instance-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instance-properties"}},[t._v("#")]),t._v(" Instance Properties")]),t._v(" "),a("p",[t._v("Call these properties on the "),a("code",[t._v("TiApp.app()")]),t._v(" singleton.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("userAgent")]),t._v(" "),a("td",[t._v("NSString")]),t._v(" "),a("td",[t._v("The user agent string to use for system network requests.")])]),t._v(" "),a("tr",[a("td",[t._v("window")]),t._v(" "),a("td",[t._v("UIWindow")]),t._v(" "),a("td",[t._v("The application's primary window.")])]),t._v(" "),a("tr",[a("td",[t._v("remoteNotification")]),t._v(" "),a("td",[t._v("NSDictionary")]),t._v(" "),a("td",[t._v("The details for the last remote notification.")])]),t._v(" "),a("tr",[a("td",[t._v("localNotification")]),t._v(" "),a("td",[t._v("NSDictionary")]),t._v(" "),a("td",[t._v("The details for the last local notification.")])]),t._v(" "),a("tr",[a("td",[t._v("userAgent")]),t._v(" "),a("td",[t._v("NSString")]),t._v(" "),a("td",[t._v("The user agent string to use for network requests.")])])])]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("h3",{attrs:{id:"present-a-view-controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#present-a-view-controller"}},[t._v("#")]),t._v(" Present a view controller")]),t._v(" "),a("p",[t._v("This example shows how to open a new view controller in your current application context.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myNewViewController "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIViewController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create a new view controller or pass it from existing libraries / SDK's")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myNewView "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UIView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alloc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initWithFrame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CGRectMake")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create a  new UIView with a 200x200 frame")]),t._v("\nmyNewView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backgroundColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UIColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("greenColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set a green background color")]),t._v("\nmyNewViewController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" myNewView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Assign the UIView instance to your UIViewController")]),t._v("\n\nTiApp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showModalController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myNewViewController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Present the view controller")]),t._v("\n")])])]),a("h3",{attrs:{id:"pass-the-current-view-controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pass-the-current-view-controller"}},[t._v("#")]),t._v(" Pass the current view controller")]),t._v(" "),a("p",[t._v("This example shows how to pass your top presented controller to a native method (e.g. in the Facebook SDK).")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" FBSDKShareDialog "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'FBSDKShareKit/FBSDKShareDialog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" FBSDKShareDialogModeAutomatic "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'FBSDKShareKit'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FBSDKShareDialogModeAutomatic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" FBSDKShareLinkContent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'FBSDKShareKit/FBSDKShareLinkContent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NSURL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Foundation/NSURL'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" TiApp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Titanium/TiApp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" dialog "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FBSDKShareDialog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Create a new share dialog. Equals "FBSDKShareDialog.alloc().init()".')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" content "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FBSDKShareLinkContent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Create new share content (link-based). Equals "FBSDKShareLinkContent.alloc().init()".')]),t._v("\n\ncontent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentURL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NSURL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("URLWithString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://appcelerator.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Construct a native URL")]),t._v("\ndialog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FBSDKShareDialogModeAutomatic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use enumerations to define how the dialog should be shown")]),t._v("\ndialog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFromViewController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TiApp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <- This is where you pass your current context")]),t._v("\ndialog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setShareContent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Assign the share content")]),t._v("\n\ndialog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Present it!")]),t._v("\n")])])]),a("h3",{attrs:{id:"get-the-device-s-push-notifications-uuid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-the-device-s-push-notifications-uuid"}},[t._v("#")]),t._v(" Get the device's push notifications UUID")]),t._v(" "),a("p",[t._v("This examples shows how to receive the device's UUID used for remote notifications.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" remoteUUID "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TiApp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("remoteDeviceUUID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nTi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UUID: '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" remoteUUID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"subscribe-to-the-uiapplicationdelegate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subscribe-to-the-uiapplicationdelegate"}},[t._v("#")]),t._v(" Subscribe to the UIApplicationDelegate")]),t._v(" "),a("p",[t._v("This example shows how to subscribe to the "),a("code",[t._v("UIApplicationDelegate")]),t._v(" in order to use the "),a("code",[t._v("application:didFinishLaunchingWithOptions:")]),t._v(" delegate method. For more infos, see "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Hyperloop/Hyperloop_Guides/iOS_Hyperloop_Programming_Guide/iOS_Modules_-_Use_Native_UI_Application_Delegates_in_Hyperloop_and_Native_Modules/"}},[t._v("iOS Modules - Use Native UI Application Delegates in Hyperloop and Native Modules")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("💡 Hint")]),t._v(" "),a("p",[t._v("Note: Many native SDK's recommend to initialize them in this delegate. In the Titanium world, you can also do this in the open event of your initial window, which effectively does the same and is more cross-platform fashioned way of implementing this.")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" TiApp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Titanium/TiApp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" UIApplicationDelegate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UIKit'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UIApplicationDelegate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create a new class to handle the delegate")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" TiAppApplicationDelegate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Hyperloop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TiAppApplicationDelegate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NSObject'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UIApplicationDelegate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add the selector to handle the result")]),t._v("\nTiAppApplicationDelegate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  selector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application:didFinishLaunchingWithOptions:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  instance"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  returnType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'BOOL'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  arguments"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UIApplication'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NSDictionary'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("didFinishLaunchingWithOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("didFinishLaunchingWithOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Instantiate the delegate subclass")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" applicationDelegate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TiAppApplicationDelegate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Called when the application finished launching. Initialize SDK's here for example")]),t._v("\napplicationDelegate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("didFinishLaunchingWithOptions")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hey there!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Finally, assign your subclass to the "applicationDelegate" property of the TiApp class')]),t._v("\nTiApp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerApplicationDelegate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("applicationDelegate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);