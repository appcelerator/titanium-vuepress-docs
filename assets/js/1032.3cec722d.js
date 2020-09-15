(window.webpackJsonp=window.webpackJsonp||[]).push([[1032],{1161:function(t,s,a){"use strict";a.r(s);var e=a(21),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"supporting-gestures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supporting-gestures"}},[t._v("#")]),t._v(" Supporting Gestures")]),t._v(" "),a("h2",{attrs:{id:"objective"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[t._v("#")]),t._v(" Objective")]),t._v(" "),a("p",[t._v("In this section, you will learn how to support more than simple taps in your Titanium apps. You'll examine various gestures, including shakes and swipes, and also learn how to manage global events within the Android app lifecycle.")]),t._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),a("p",[t._v('Mobile devices offer opportunity for inputs that go beyond simple taps. "Best of breed" apps should use those inputs whenever appropriate. These include:')]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Shakes")])]),t._v(" "),a("li",[a("p",[t._v("Swipes")])]),t._v(" "),a("li",[a("p",[t._v("Touches")])]),t._v(" "),a("li",[a("p",[t._v("Pinching")])]),t._v(" "),a("li",[a("p",[t._v("Long presses")])]),t._v(" "),a("li",[a("p",[t._v("and accelerometer inputs by which you gauge pitch, roll, and yaw.")])])]),t._v(" "),a("p",[t._v("We'll breeze through each of these in this section.")]),t._v(" "),a("h3",{attrs:{id:"shake"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shake"}},[t._v("#")]),t._v(" Shake")]),t._v(" "),a("p",[t._v("You can determine when a user shakes their device via the "),a("code",[t._v("Ti.Gesture")]),t._v(" module.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Ti.Gesture.addEventListener('shake',function(e) {\n  alert('shaken at '+e.timestamp);\n});\n")])])]),a("p",[t._v("You could use the "),a("code",[t._v("timestamp")]),t._v(" property to determine if a user has shaken the device for a given amount of time.")]),t._v(" "),a("p",[t._v("The iOS simulator supports simulated shake events. Choose "),a("strong",[t._v("Hardware")]),t._v(" > "),a("strong",[t._v("Shake Device")]),t._v(' to "shake" the simulator. The Android emulator does not support simulated shake events.')]),t._v(" "),a("h3",{attrs:{id:"swipe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#swipe"}},[t._v("#")]),t._v(" Swipe")]),t._v(" "),a("p",[t._v("Swipes are left/right tap & drag the finger gestures (where scrolls are up/down drags). Support for swipes are built into most of the Titanium UI components.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" view "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nview"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'swipe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'You swiped to the '")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("direction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"touch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#touch"}},[t._v("#")]),t._v(" Touch")]),t._v(" "),a("p",[t._v("Touch events are associated with the Titanium UI components. There are four touch events:")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("touchstart")]),t._v(" – fired when a user's finger first contacts the device's screen.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("touchend")]),t._v(" – fired when the user lifts his or her finger.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("touchmove")]),t._v(" – fires continuously as the user drags his or her finger on the screen.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("touchcancel")]),t._v(" – fired if the operating system interrupts an ongoing touch event, such as when a phone call is received.")])])]),t._v(" "),a("p",[t._v("The event object associated with these events has only two useful properties: the X and Y coordinates of the event. You can use that information to track the user's finger across your app's UI.")]),t._v(" "),a("p",[t._v("On the Android platform, other gesture events, such as "),a("code",[t._v("longpress")]),t._v(" and "),a("code",[t._v("swipe")]),t._v(", cancel touch events, so a "),a("code",[t._v("touchend")]),t._v(" event may not fire after a "),a("code",[t._v("touchstart")]),t._v(" event.")]),t._v(" "),a("h3",{attrs:{id:"pinch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pinch"}},[t._v("#")]),t._v(" Pinch")]),t._v(" "),a("p",[t._v("Added in the 1.8 release of the APIs, the pinch event is currently supported on iOS only. (Android support is in the works.) This event is associated with UI components and its event object has the useful "),a("code",[t._v("scale")]),t._v(" property as shown here:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" view "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nview"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pinch'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'You pinched to '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scale"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"long-press"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#long-press"}},[t._v("#")]),t._v(" Long press")]),t._v(" "),a("p",[t._v("Also added in version 1.8 is support for long press events. These are like taps or clicks that last for more than an arbitrary amount of time. Keep in mind the native conventions for use of the long press. For example, on Android, a long press typically displays a pop-up of options or actions (sort of like a context menu on a desktop operating system).")]),t._v(" "),a("p",[t._v("Support for long presses are now built into most of the Titanium UI components.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" view "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nview"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'longpress'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'You pressed at coordinates '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' / '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"accelerometer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accelerometer"}},[t._v("#")]),t._v(" Accelerometer")]),t._v(" "),a("p",[t._v("Some iOS and Android devices include an accelerometer, which you can use to track pitch, roll, and yaw. Perhaps you've seen racing games where you steer by tipping your device from side to side. You can use the accelerometer for similar user input in your Titanium apps.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// labelTime, labelX, labelY, and labelZ are Ti.UI.Labels\nTi.Accelerometer.addEventListener('update', function(e){\n  labelTime.text = e.timestamp;\n  labelX.text = 'x: ' + e.x;\n  labelY.text = 'y:' + e.y;\n  labelZ.text = 'z:' + e.z;\n});\n")])])]),a("p",[t._v("If you run this code or the accelerometer.js sample in the Kitchen Sink, you'll see that the "),a("code",[t._v("update")]),t._v(" event is fired rapidly and the three axis values are extremely sensitive (many decimal places). To use the accelerometer successfully in your app, you'll want to average values over time and round the values to an appropriate level of precision for your needs. A Google search for "),a("a",{attrs:{href:"http://www.google.com/search?aq=0&oq=smoothing+accelerometer&sourceid=chrome&ie=UTF-8&q=smoothing+accelerometer+data",target:"_blank",rel:"noopener noreferrer"}},[t._v("smoothing accelerometer data"),a("OutboundLink")],1),t._v(" will give you many code examples to draw from.")]),t._v(" "),a("p",[t._v("(Keep in mind that the simulator/emulator doesn't support the accelerometer. So, you'll have to test on a device.)")]),t._v(" "),a("h2",{attrs:{id:"managing-events-within-the-app-s-lifecycle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#managing-events-within-the-app-s-lifecycle"}},[t._v("#")]),t._v(" Managing events within the app's lifecycle")]),t._v(" "),a("p",[t._v("Because Android is a multitasking environment, it's important that you remove global event listeners when your app is put into the background. (Global events include Ti.App, Ti.Gesture, Ti.Accelerometer, Ti.Geolocation, etc.) If you don't, the hardware that supports those global events will remain powered on and events will continue to be fired. Removing event listeners thus helps limit the associated battery-drain by powering down the device components. To remove an event listener, you must pass the same function signature to "),a("code",[t._v("removeEventListener()")]),t._v(" as you passed to "),a("code",[t._v("addEventListener()")]),t._v(". For that reason, you should generally follow this format:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// labelTime, labelX, labelY, and labelZ are Ti.UI.Labels")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" accelerometerAdded "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("accelerometerCallback")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  labelTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  labelX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x: '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  labelY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'y:'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  labelZ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'z:'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nTi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Accelerometer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" accelerometerCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\naccelerometerAdded "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Titanium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'android'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentActivity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pause'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// called when app is put into the background")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("accelerometerAdded"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"removing accelerometer callback on pause"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Accelerometer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" accelerometerCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentActivity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resume'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("accelerometerAdded"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"adding accelerometer callback on resume"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Accelerometer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" accelerometerCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),a("p",[t._v("In this section, you learned how to add support for shakes, swipes, touches, pinches, and long presses. You even explored how you can use the accelerometer as a means of user input. Finally, you handled global events within the app's lifecycle to manage battery drain.")])])}),[],!1,null,null,null);s.default=n.exports}}]);