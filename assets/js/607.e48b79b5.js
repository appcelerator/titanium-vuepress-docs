(window.webpackJsonp=window.webpackJsonp||[]).push([[607],{1098:function(t,a,n){"use strict";n.r(a);var e=n(21),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"titanium-geolocation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#titanium-geolocation"}},[t._v("#")]),t._v(" Titanium.Geolocation")]),t._v(" "),n("TypeHeader"),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("p",[t._v("This module combines two sets of features:")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Location services. Determining the location of the device.")])]),t._v(" "),n("li",[n("p",[t._v("Geocoding and reverse geocoding. Converting geographic  coordinates into\naddresses, and converting addresses into geographic  coordinates.")])])]),t._v(" "),n("p",[t._v("Using location services can have a significant impact on a device's battery life,\nso it's important to use them in the most efficient manner possible. Power consumption\nis strongly influenced by the accuracy and frequency of location updates required by\nyour application.")]),t._v(" "),n("p",[t._v("The location services systems of the underlying platforms are very different, so there\nare significant implementation differences between the platforms.")]),t._v(" "),n("p",[t._v("The basic methods of requesting location information and receiving location updates\nare essentially the same on all platforms. However, the method of configuring the\naccuracy and frequency of location updates is different for each platform.")]),t._v(" "),n("h3",{attrs:{id:"getting-location-information"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getting-location-information"}},[t._v("#")]),t._v(" Getting Location Information")]),t._v(" "),n("p",[t._v("There are two ways to get location information:")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Make a one-time request with "),n("type-link",{attrs:{type:"Titanium.Geolocation.getCurrentPosition"}},[t._v("getCurrentPosition")]),t._v(".")],1)]),t._v(" "),n("li",[n("p",[t._v("Register to receive location updates by adding an event listener for the\n"),n("type-link",{attrs:{type:"Titanium.Geolocation.location"}},[t._v("location")]),t._v(" event.")],1)])]),t._v(" "),n("p",[n("strong",[t._v("NOTE:")]),t._v(" Location services stay enabled for as long as a listener is registered for the\n"),n("code",[t._v("location")]),t._v(" event, so be sure to remove the event listener when you do not require\nlocation updates.")]),t._v(" "),n("h3",{attrs:{id:"configurating-location-updates-on-ios"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configurating-location-updates-on-ios"}},[t._v("#")]),t._v(" Configurating Location Updates on iOS")]),t._v(" "),n("p",[t._v("In iOS, the accuracy (and power consumption) of location services is primarily\ndetermined by the "),n("type-link",{attrs:{type:"Titanium.Geolocation.accuracy"}},[t._v("accuracy")]),t._v(" setting. This can be set\nto one of the following values:")],1),t._v(" "),n("ul",[n("li",[n("type-link",{attrs:{type:"Titanium.Geolocation.ACCURACY_BEST"}},[t._v("ACCURACY_BEST")]),t._v(" (highest accuracy and power consumption)")],1),t._v(" "),n("li",[n("type-link",{attrs:{type:"Titanium.Geolocation.ACCURACY_BEST_FOR_NAVIGATION"}},[t._v("ACCURACY_BEST_FOR_NAVIGATION")])],1),t._v(" "),n("li",[n("type-link",{attrs:{type:"Titanium.Geolocation.ACCURACY_HIGH"}},[t._v("ACCURACY_HIGH")])],1),t._v(" "),n("li",[n("type-link",{attrs:{type:"Titanium.Geolocation.ACCURACY_NEAREST_TEN_METERS"}},[t._v("ACCURACY_NEAREST_TEN_METERS")])],1),t._v(" "),n("li",[n("type-link",{attrs:{type:"Titanium.Geolocation.ACCURACY_HUNDRED_METERS"}},[t._v("ACCURACY_HUNDRED_METERS")])],1),t._v(" "),n("li",[n("type-link",{attrs:{type:"Titanium.Geolocation.ACCURACY_KILOMETER"}},[t._v("ACCURACY_KILOMETER")])],1),t._v(" "),n("li",[n("type-link",{attrs:{type:"Titanium.Geolocation.ACCURACY_LOW"}},[t._v("ACCURACY_LOW")])],1),t._v(" "),n("li",[n("type-link",{attrs:{type:"Titanium.Geolocation.ACCURACY_THREE_KILOMETERS"}},[t._v("ACCURACY_THREE_KILOMETERS")]),t._v(" (lowest\naccuracy and power consumption).")],1)]),t._v(" "),n("p",[t._v("Based on the accuracy you choose, iOS uses its own logic to select location providers\nand filter location updates to provide location updates that meet your accuracy\nrequirements.")]),t._v(" "),n("p",[t._v("You can further limit power consumption on iOS by setting the\n"),n("type-link",{attrs:{type:"Titanium.Geolocation.distanceFilter"}},[t._v("distanceFilter")]),t._v(" property to eliminate position\nupdates when the user is not moving.")],1),t._v(" "),n("p",[t._v("In order to receive the user's location, add either the\n"),n("a",{attrs:{href:"https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW26",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("NSLocationWhenInUseUsageDescription")]),n("OutboundLink")],1),t._v("\nor\n"),n("a",{attrs:{href:"https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW26",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("NSLocationAlwaysUsageDescription")]),n("OutboundLink")],1),t._v("\nkey to the iOS plist section of the project's "),n("code",[t._v("tiapp.xml")]),t._v(" file.")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ios")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plist")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dict")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("NSLocationAlwaysUsageDescription"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                    Specify the reason for accessing the user's location information.\n                    This appears in the alert dialog when asking the user for permission to\n                    access their location.\n                "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dict")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plist")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ios")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("For iOS 11 and later, also add the "),n("a",{attrs:{href:"https://developer.apple.com/documentation/corelocation/choosing_the_authorization_level_for_location_services/request_always_authorization",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("NSLocationAlwaysAndWhenInUseUsageDescription")]),n("OutboundLink")],1),t._v('\nwhen planning to request the "Always" permission. Using the above key, you are also able to upgrade your permissions from\n"When in Use" to "Always", which is the recommended way for managing location permissions in iOS 11 and later.\nPlease also remember to request your desired location-permissions before using any geolocation-related API in\norder to receive the best usability and permission-control during the app-lifecycle using '),n("type-link",{attrs:{type:"Titanium.Geolocation.hasLocationPermissions"}},[t._v("Titanium.Geolocation.hasLocationPermissions")]),t._v("\nand "),n("type-link",{attrs:{type:"Titanium.Geolocation.requestLocationPermissions"}},[t._v("Titanium.Geolocation.requestLocationPermissions")]),t._v(". Also note that you also need to include the "),n("code",[t._v("NSLocationWhenInUseUsageDescription")]),t._v(" key\nin "),n("em",[t._v("any")]),t._v(" case when targeting iOS 11 and later. Descriptive error-logs will be thrown if required permissions are missing.")],1),t._v(" "),n("h3",{attrs:{id:"configurating-location-updates-on-android"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configurating-location-updates-on-android"}},[t._v("#")]),t._v(" Configurating Location Updates on Android")]),t._v(" "),n("p",[t._v("On Android, two different location service modes are supported: "),n("em",[t._v("simple")]),t._v(", and "),n("em",[t._v("manual")]),t._v(".")]),t._v(" "),n("ul",[n("li",[n("p",[n("em",[t._v("Simple mode")]),t._v(" provides a compromise mode that provides adaquate support for\nundemanding location applications without requiring developers to\nwrite a lot of Android-specific code. To use simple mode:")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Leave the "),n("type-link",{attrs:{type:"Titanium.Geolocation.Android.manualMode"}},[t._v("Titanium.Geolocation.Android.manualMode")]),t._v(" flag set to "),n("code",[t._v("false")]),t._v(" (the\ndefault value).")],1)]),t._v(" "),n("li",[n("p",[t._v("Set the "),n("type-link",{attrs:{type:"Titanium.Geolocation.accuracy"}},[t._v("accuracy")]),t._v(" property to\neither "),n("type-link",{attrs:{type:"Titanium.Geolocation.ACCURACY_HIGH"}},[t._v("ACCURACY_HIGH")]),t._v(" or\n"),n("type-link",{attrs:{type:"Titanium.Geolocation.ACCURACY_LOW"}},[t._v("ACCURACY_LOW")]),t._v(".")],1)])])]),t._v(" "),n("li",[n("p",[n("em",[t._v("Manual mode")]),t._v(" gives developers low-level control of location updates, including\nenabling individual location providers and filtering updates, for the best\ncombination of accuracy and battery life.")]),t._v(" "),n("p",[t._v("Manual mode is used when the "),n("type-link",{attrs:{type:"Titanium.Geolocation.Android.manualMode"}},[t._v("Titanium.Geolocation.Android.manualMode")]),t._v(" flag is set\nto "),n("code",[t._v("true")]),t._v(". In manual mode, the "),n("code",[t._v("accuracy")]),t._v(" property is not used, and all\nconfiguration is done through the "),n("type-link",{attrs:{type:"Titanium.Geolocation.Android"}},[t._v("Titanium.Geolocation.Android")]),t._v(" module.")],1)])]),t._v(" "),n("p",[t._v("As of Titanium SDK 7.1.0 and later, including the "),n("a",{attrs:{href:"https://github.com/appcelerator-modules/ti.playservices",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("ti.playservices")]),n("OutboundLink")],1),t._v(" module will allow Google Play Services\nto be used by default to obtain location information. This means the provider passed into "),n("type-link",{attrs:{type:"Titanium.Geolocation.Android.createLocationProvider"}},[t._v("createLocationProvider")]),t._v("\nwill be ignored, as Google Play Services will select the best provider based on current device conditions.\nIf Google Play Services is not available it will fallback to previous behaviour of using Android location APIs.")],1),t._v(" "),n("p",[t._v("To retrieve location events:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" backgroundColor"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nTi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Geolocation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accuracy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Geolocation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ACCURACY_HIGH")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLocation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Geolocation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'location'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nwin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'open'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Geolocation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasLocationPermissions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLocation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Geolocation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestLocationPermissions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Geolocation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AUTHORIZATION_ALWAYS")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("success"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLocation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'could not obtain location permissions'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"using-the-compass"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-the-compass"}},[t._v("#")]),t._v(" Using the Compass")]),t._v(" "),n("p",[t._v("Both iOS and Android support a receiving heading updates from a hardware compass, if available.")]),t._v(" "),n("p",[t._v("Check the "),n("type-link",{attrs:{type:"Titanium.Geolocation.hasCompass"}},[t._v("hasCompass")]),t._v(" property to see if the current\ndevice supports a compass.")],1),t._v(" "),n("p",[t._v("To retrieve compass readings, you can either use\n"),n("type-link",{attrs:{type:"Titanium.Geolocation.getCurrentHeading"}},[t._v("getCurrentHeading")]),t._v(" as shown in the\nprevious example, or add a listener for the\n"),n("type-link",{attrs:{type:"Titanium.Geolocation.heading"}},[t._v("heading")]),t._v(" event, as shown below:")],1),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("compassHandler")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("success"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Heading: '")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("heading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("magneticHeading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nTi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Geolocation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'heading'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" compassHandler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("Note that Android did not include a "),n("code",[t._v("success")]),t._v(" property in the "),n("code",[t._v("heading")]),t._v(" event prior to SDK 7.5.0.\nHeading events are only generated on Android when heading data is available. So if\n"),n("code",[t._v("success")]),t._v(" is undefined on prior SDK versions, we assume that the event contains valid compass data.")]),t._v(" "),n("p",[t._v("To obtain true heading data for the compass (as opposed to magnetic heading data),\na current location fix is required. See the notes on\n"),n("type-link",{attrs:{type:"HeadingData.trueHeading"}},[t._v("trueHeading")]),t._v(" for more information.")],1),t._v(" "),n("p",[t._v("As with location updates, the application should unregister for heading updates\nwhen it is no longer being used, or when it goes into the background. Use\n"),n("code",[t._v("removeEventListener")]),t._v(" to stop heading updates:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Geolocation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'heading'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" compassHandler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("Finally, note that neither the Android emulator nor the iOS simulator provide\ncompass support. Compass code must be tested on physical devices.")]),t._v(" "),n("h3",{attrs:{id:"geocoding-services"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#geocoding-services"}},[t._v("#")]),t._v(" Geocoding Services")]),t._v(" "),n("p",[t._v("The module provides two methods, "),n("type-link",{attrs:{type:"Titanium.Geolocation.forwardGeocoder"}},[t._v("forwardGeocoder")]),t._v(" and "),n("type-link",{attrs:{type:"Titanium.Geolocation.reverseGeocoder"}},[t._v("reverseGeocoder")]),t._v("\nto convert between geographic coordinates and addresses. These methods map to MapQuest Open Nominatim Search Service.")],1),t._v(" "),n("p",[t._v("While this API has the advantage that it has no daily usage limits, please note that the data backing this API is crowd sourced and might not return\nproper values for valid addresses and geographic coordinates.")]),t._v(" "),n("p",[t._v("If geocoding services are essential component of the application, developers are encouraged to use commercial geocoding providers.")]),t._v(" "),n("ApiDocs")],1)}),[],!1,null,null,null);a.default=s.exports}}]);