(window.webpackJsonp=window.webpackJsonp||[]).push([[624],{1264:function(t,e,a){"use strict";a.r(e);var n=a(21),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-ui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui"}},[t._v("#")]),t._v(" Titanium.UI")]),t._v(" "),a("TypeHeader"),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("The UI module is responsible for native user-interface components and interaction inside\nTitanium.  The goal of the UI module is to provide a native experience along with native\nperformance by compiling Javascript code into their native counterparts as part of the\nbuild process.")]),t._v(" "),a("h3",{attrs:{id:"design"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design"}},[t._v("#")]),t._v(" Design")]),t._v(" "),a("p",[t._v("The UI module is broken down into 3 major area:")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Views")]),t._v(" - "),a("type-link",{attrs:{type:"Titanium.UI.View"}},[t._v("Views")]),t._v(" are containers that host visual elements such as\ncontrols or other views.  Views can have their properties customized, such as their border color\nand radius, can fire events such as swipe events or touches, and can optionally contain a\nhierarchy or other views as children. In Titanium, most views are specialized to perform both a\nvisual function and set of interaction behaviors such as "),a("type-link",{attrs:{type:"Titanium.UI.TableView"}},[t._v("Table View")]),t._v(" or\n"),a("type-link",{attrs:{type:"Titanium.UI.iOS.CoverFlowView"}},[t._v("Coverflow View")]),t._v(".  Views are always named with the suffix "),a("code",[t._v("View")]),t._v(".")],1)]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Controls")]),t._v(" - controls, or sometimes referred as widgets, are visual elements such as\n"),a("type-link",{attrs:{type:"Titanium.UI.Slider"}},[t._v("sliders")]),t._v(",  "),a("type-link",{attrs:{type:"Titanium.UI.Button"}},[t._v("buttons")]),t._v(" and "),a("type-link",{attrs:{type:"Titanium.UI.Switch"}},[t._v("switches")]),t._v(".\nThey provide a visual element which has a defined behavior and typical have special\nconfiguration and special events.  Controls themselves are views and also inherit a views\nproperties, functions and events.")],1)]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Windows")]),t._v(" - "),a("type-link",{attrs:{type:"Titanium.UI.Window"}},[t._v("Windows")]),t._v(" are typically top-level visual constructs that are\nthe main part of your interface. An application will always have at least one window and windows\ncan take different shapes and sizes, can have display and interaction properties such as\nfullscreen or modal and can be customized, such as changing their opacity or background color.\nWindows themselves are views and also inherit a views properties, functions and events. There\nare a few specialization of Windows such as a "),a("type-link",{attrs:{type:"Titanium.UI.TabGroup"}},[t._v("Tab Group")]),t._v(" which offer\nadditional behavior beyond the basic Window.")],1)])]),t._v(" "),a("p",[t._v("Titanium uses the "),a("a",{attrs:{href:"http://en.wikipedia.org/wiki/Factory_method_pattern",target:"_blank",rel:"noopener noreferrer"}},[t._v("Factory Pattern"),a("OutboundLink")],1),t._v(" for\nconstructing objects and a general naming pattern for APIs.  For example, to construct a\n"),a("type-link",{attrs:{type:"Titanium.UI.AlertDialog"}},[t._v("Alert Dialog")]),t._v(", you call the method "),a("type-link",{attrs:{type:"Titanium.UI.createAlertDialog"}},[t._v("Titanium.UI.createAlertDialog")]),t._v(".\nTo create a "),a("type-link",{attrs:{type:"Titanium.UI.TextArea"}},[t._v("TextArea")]),t._v(", you call the method "),a("type-link",{attrs:{type:"Titanium.UI.createTextArea"}},[t._v("Titanium.UI.createTextArea")]),t._v(".\nOnce an object is created, it will be available until it goes out of scope.")],1),t._v(" "),a("h3",{attrs:{id:"optimizations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optimizations"}},[t._v("#")]),t._v(" Optimizations")]),t._v(" "),a("p",[t._v("UI objects are optimized by Titanium to not be realized into the drawing context and placed into\nthe device UI surface until needed.  That means that you can create UI objects, set their\nproperties and add them to their hierarchy without much worry about memory or performance.\nWhen the native drawing surface needs to render a specific view or control, Titanium will\nautomatically create the view as needed.  Additionally, Titanium is optimized to also release\nmemory once the view is no longer needed, on screen or in low memory situations.  However, it's\na good idea to help Titanium along in certain cases where you are no longer using objects.  For\nexample, you should call "),a("code",[t._v("close")]),t._v(" on a "),a("type-link",{attrs:{type:"Titanium.UI.Window"}},[t._v("Window")]),t._v(" instance when you are no\nlonger using it.  You can safely call "),a("code",[t._v("open")]),t._v(" on the window again to re-open it.")],1),t._v(" "),a("h3",{attrs:{id:"global-context-and-threading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-context-and-threading"}},[t._v("#")]),t._v(" Global Context and Threading")]),t._v(" "),a("p",[t._v("Be careful with the objects that are created in "),a("code",[t._v("app.js")]),t._v(" but only used once. Since the "),a("code",[t._v("app.js")]),t._v("\ncontext is global and generally is not garbage collected until the application exits, you\nshould think about the design of your application as it relates to this fact.")]),t._v(" "),a("p",[a("type-link",{attrs:{type:"Titanium.UI.Window"}},[t._v("Window")]),t._v(" objects that are opened up with the "),a("code",[t._v("url")]),t._v(" property to another\nJavaScript file provide a nice way to decompose your application into smaller units.")],1),t._v(" "),a("p",[t._v("Additionally, Window objects created with a "),a("code",[t._v("url")]),t._v(" value run in a separate JavaScript context\nand thread. While all UI processing is done on the main UI thread, other processing inside\na Window or the "),a("code",[t._v("app.js")]),t._v(" that does not have UI interaction will run in its own thread.")]),t._v(" "),a("p",[t._v("The other benefit of using the "),a("code",[t._v("url")]),t._v(" property is that when the window is closed, resources\nallocated in the window's context can be immediately cleaned up, saving resources such as\nmemory and CPU.")]),t._v(" "),a("p",[t._v('For more information, see the sections "Sub-contexts" and "Passing Data Between Contexts" on the\n'),a("type-link",{attrs:{type:"Titanium.UI.Window"}},[t._v("Window")]),t._v(" reference page.")],1),t._v(" "),a("h3",{attrs:{id:"portability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#portability"}},[t._v("#")]),t._v(" Portability")]),t._v(" "),a("p",[t._v("Titanium components are designed to be portable across as many platforms as it supports.\nHowever, there are cases where a device either does not support a specific feature or capability\nor where it support additional functionality.  For cases where the device OS supports\ncapabilities that other platforms do not, we attempt to place those capabilities in a separate\nnamespace, such as "),a("type-link",{attrs:{type:"Titanium.UI.iPhone"}},[t._v("Titanium.UI.iPhone")]),t._v(". However, in cases where the control is in a common\nnamespace and support additional features, we continue to place that functionality directly on\nthe object.")],1),t._v(" "),a("h3",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),a("p",[t._v("Event listeners must be defined before their respective events are likely to be fired, otherwise\nthey are not guaranteed to be called. The open and focus "),a("type-link",{attrs:{type:"Titanium.UI.Window"}},[t._v("Window")]),t._v(" event\nlisteners, for instance, must be defined before the window is opened.")],1),t._v(" "),a("p",[t._v("Evaluating events as late as possible while bearing the above consideration in mind, however,\ncan significantly improve application responsiveness. For example, an event listener for a\nclick event may be defined after the parent window has been opened.")]),t._v(" "),a("h3",{attrs:{id:"colors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#colors"}},[t._v("#")]),t._v(" Colors")]),t._v(" "),a("p",[t._v("Many UI components have properties that control their color.")]),t._v(" "),a("p",[t._v("Colors may be specified as a hex triplet to determine the red, green and blue channels. Thus,\n"),a("code",[t._v("'#000000'")]),t._v(" is specified for black, "),a("code",[t._v("'#ff0000'")]),t._v(" for red, "),a("code",[t._v("'#00ff00'")]),t._v(" for green, "),a("code",[t._v("'#0000ff'")]),t._v(" for\nblue, and "),a("code",[t._v("'#ffffff'")]),t._v(" for white, etc. A channel may be abbreviated when its two hex digits are\nidentical, such as "),a("code",[t._v("'#000'")]),t._v(", "),a("code",[t._v("'#f00'")]),t._v(", "),a("code",[t._v("'#0f0#'")]),t._v(", "),a("code",[t._v("'#00f'")]),t._v(" and "),a("code",[t._v("'#fff'")]),t._v(" for the above colors,\nrespectively.")]),t._v(" "),a("p",[t._v("An additional alpha channel is supported as a prefix to the hex triplet (ARGB or AARRGGBB). So, to make\nthe purple-like color "),a("code",[t._v("'#ff00ff'")]),t._v(" semi-opaque, you could use an alpha value of "),a("code",[t._v("'55'")]),t._v(", giving,\n"),a("code",[t._v("'#55ff00ff'")]),t._v(" or "),a("code",[t._v("'#5f0f'")]),t._v(". Please note that both iOS and Android use ARGB format, while typical CSS supports RGBA.")]),t._v(" "),a("p",[t._v("Note that while the pound symbol, "),a("code",[t._v("#")]),t._v(", is not mandatory on iOS when using the hex triplet format,\nit is recommended to include it to provide compatibility with other platforms.")]),t._v(" "),a("p",[t._v("iOS and Android also accept colors specified in the form, "),a("code",[t._v("rgb(R,G,B)")]),t._v(" and "),a("code",[t._v("rgba(R,G,B,A)")]),t._v(", with the color\nchannels inside the parethesis represented by integer numbers between "),a("code",[t._v("0")]),t._v(" and "),a("code",[t._v("255")]),t._v(" and the\nalpha channel by a float number between "),a("code",[t._v("0")]),t._v(" and "),a("code",[t._v("1.0")]),t._v(" (transparent to opaque, respectively).\nFor example, an opaque purple could be obtained using "),a("code",[t._v("'rgb(255,0,255)'")]),t._v(" and a semi-opaque purple\nusing "),a("code",[t._v("'rgba(255,0,255,0.3)'")]),t._v(". Note that although this format will work if the "),a("code",[t._v("rgb")]),t._v(" or "),a("code",[t._v("rgba")]),t._v("\nprefix is omitted, this is not officially supported and thus not recommended.")]),t._v(" "),a("p",[t._v("Alternatively, the following set of color names are recognized.")]),t._v(" "),a("p",[a("code",[t._v("'aqua'")]),t._v(", "),a("code",[t._v("'black'")]),t._v(", "),a("code",[t._v("'blue'")]),t._v(", "),a("code",[t._v("'brown'")]),t._v(", "),a("code",[t._v("'cyan'")]),t._v(", "),a("code",[t._v("'darkgray'")]),t._v(", "),a("code",[t._v("'fuchsia'")]),t._v(", "),a("code",[t._v("'gray'")]),t._v(",\n"),a("code",[t._v("'green'")]),t._v(", "),a("code",[t._v("'lightgray'")]),t._v(", "),a("code",[t._v("'lime'")]),t._v(", "),a("code",[t._v("'magenta'")]),t._v(", "),a("code",[t._v("'maroon'")]),t._v(", "),a("code",[t._v("'navy'")]),t._v(", "),a("code",[t._v("'olive'")]),t._v(", "),a("code",[t._v("'orange'")]),t._v(",\n"),a("code",[t._v("'pink'")]),t._v(", "),a("code",[t._v("'purple'")]),t._v(", "),a("code",[t._v("'red'")]),t._v(", "),a("code",[t._v("'silver'")]),t._v(", "),a("code",[t._v("'teal'")]),t._v(", "),a("code",[t._v("'white'")]),t._v(", "),a("code",[t._v("'yellow'")]),t._v(".")]),t._v(" "),a("p",[t._v("All color properties also accept a value of "),a("code",[t._v("'transparent'")]),t._v(".")]),t._v(" "),a("p",[t._v("On Android, if you want to create a semi-transparent window, set the "),a("code",[t._v("opacity")]),t._v("\nproperty "),a("strong",[t._v("before")]),t._v(" opening the window.")]),t._v(" "),a("p",[t._v("On iOS, you can set a global tinting using "),a("type-link",{attrs:{type:"Titanium.UI.tintColor"}},[t._v("Titanium.UI.tintColor")]),t._v(". All child views will inherit\nthe tint color by default and are able to override the color using "),a("code",[t._v("tintColor")]),t._v(" on their own views.\nThe default "),a("code",[t._v("tintColor")]),t._v(" on iOS is the blue (system-color).")],1),t._v(" "),a("p",[t._v("If a color property is undefined, the default color of the particular UI element is applied.\nIf a color value is not valid on iOS, the default color is applied, whereas, on Android, the\ncolor yellow is applied.")]),t._v(" "),a("p",[t._v("On iOS, you may use named system colors. See the "),a("type-link",{attrs:{type:"Titanium.UI.Color"}},[t._v("Titanium.UI.Color")]),t._v(" documentation for more details.")],1),t._v(" "),a("h3",{attrs:{id:"dark-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dark-mode"}},[t._v("#")]),t._v(" Dark Mode")]),t._v(" "),a("p",[t._v("In iOS 13 Apple introduced support for users to adopt a system-wide Dark Mode setting where the screens, view, menus, and controls use a darker color palette. You can read more about this in the Apple Human Interface Guidelines.")]),t._v(" "),a("p",[t._v("There are two aspects to dark mode that can be specified for your app, colors and images.")]),t._v(" "),a("h4",{attrs:{id:"specifying-dark-mode-colors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specifying-dark-mode-colors"}},[t._v("#")]),t._v(" Specifying Dark Mode colors")]),t._v(" "),a("p",[t._v("To specify colors for dark mode, also known as semantic colors, first create a file called "),a("code",[t._v("semantic.colors.json")]),t._v(" in the Resources directory for classic applications, or in the assets directory for Alloy applications. Then you can specify color names in the following format:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"textColor"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the name for your color")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dark"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"color"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#ff85e2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// hex color code to be set")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alpha"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"50"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// can be set from a range of 0.0-100.0, integer or float")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"light"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#ff1f1f"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// can be a hex color (with alpha via ARGB/AARRGGBB)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("To reference these colors in your application use the "),a("type-link",{attrs:{type:"Titanium.UI.fetchSemanticColor"}},[t._v("Titanium.UI.fetchSemanticColor")]),t._v(" API, this is a cross platform API that on iOS 13 and above will use the native method that checks the users system-wide setting, and in all other instances will check the "),a("type-link",{attrs:{type:"Titanium.UI.semanticColorType"}},[t._v("Titanium.UI.semanticColorType")]),t._v(" property and return the correct color for the current setting.")],1),t._v(" "),a("p",[t._v("You may also directly use the named of the colors as values to any color properties on UI elements.")]),t._v(" "),a("h4",{attrs:{id:"specifying-dark-mode-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specifying-dark-mode-images"}},[t._v("#")]),t._v(" Specifying Dark Mode images")]),t._v(" "),a("p",[t._v("Note: Dark Mode images are iOS only.")]),t._v(" "),a("p",[t._v("To specify dark mode images, use the "),a("code",[t._v("-dark")]),t._v(" suffix on the image name. When building your app the images are set as the dark mode variant, then refer to images as normal and iOS will select the correct image dependent on the users system-wide setting.")]),t._v(" "),a("p",[t._v("For example given an image "),a("code",[t._v("logo.png")]),t._v(" with "),a("code",[t._v("@2x")]),t._v(" and "),a("code",[t._v("@3x")]),t._v(" variants, the following dark mode images should exist:")]),t._v(" "),a("ul",[a("li",[t._v("logo-dark.png")]),t._v(" "),a("li",[t._v("logo-dark@2x.png")]),t._v(" "),a("li",[t._v("logo-dark@3x.png")])]),t._v(" "),a("p",[t._v("And you would reference the image as before using "),a("code",[t._v("logo-dark.png")])]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("h3",{attrs:{id:"color-demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#color-demo"}},[t._v("#")]),t._v(" Color Demo")]),t._v(" "),a("p",[t._v("The following example demonstrates all the color formats, and color names, that are intended\nto be supported by Titanium. See the "),a("type-link",{attrs:{type:"Titanium.UI"}},[t._v("description")]),t._v(" section for details.")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" colorArray "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#ff00ff'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#f0f'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgb(255,0,255)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'transparent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#55ff00ff'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#5f0f'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgba(255,0,255,0.3)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aqua'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'black'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'brown'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cyan'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'darkgray'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fuchsia'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gray'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'green'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lightgray'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lime'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'magenta'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'maroon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'navy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'olive'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'orange'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pink'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'purple'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'silver'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'teal'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yellow'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  backgroundColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'black'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  exitOnClose"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  fullscreen"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  layout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vertical'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Color Demo'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" rows "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ilen "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" colorArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" ilen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  row "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTableViewRow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'black'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    backgroundColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" colorArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" colorArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    height"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" table "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTableView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  backgroundColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ApiDocs")],1)}),[],!1,null,null,null);e.default=s.exports}}]);