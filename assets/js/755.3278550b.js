(window.webpackJsonp=window.webpackJsonp||[]).push([[755],{1180:function(e,t,a){"use strict";a.r(t);var i=a(21),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-ui-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-view"}},[e._v("#")]),e._v(" Titanium.UI.View")]),e._v(" "),a("TypeHeader"),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("View")]),e._v(" is the base type for all UI widgets in Titanium.")]),e._v(" "),a("p",[e._v("You use the "),a("type-link",{attrs:{type:"Titanium.UI.createView"}},[e._v("Titanium.UI.createView")]),e._v(" method or "),a("strong",[a("code",[e._v("<View>")])]),e._v(" Alloy element to create a View.")],1),e._v(" "),a("h3",{attrs:{id:"units-and-coordinates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#units-and-coordinates"}},[e._v("#")]),e._v(" Units and Coordinates")]),e._v(" "),a("p",[e._v("Sizes and coordinates can be specified using a variety of units. If a value is\nspecified as a number, it is interpreted as a value in the default unit for the\ncurrent system and/or the current project.")]),e._v(" "),a("p",[e._v("When a value is specified as string, the value can consist of:")]),e._v(" "),a("ul",[a("li",[e._v("A number.")]),e._v(" "),a("li",[e._v('A percentage, such as "10%", interpreted as a percentage of the parent\'s total size\nin that dimension.')]),e._v(" "),a("li",[e._v('A number plus a unit specifier, such as "10px" or "1in".')])]),e._v(" "),a("p",[e._v("The following units are supported:")]),e._v(" "),a("table",{staticClass:"doc-table",attrs:{width:"60%"}},[a("thead",[a("tr",[a("th",[e._v("Unit")]),e._v(" "),a("th",[e._v("Specifier")]),e._v(" "),a("th",[e._v("Note")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("pixels")]),e._v(" "),a("td",[e._v("px")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("density-independent pixels")]),e._v(" "),a("td",[e._v("dip")]),e._v(" "),a("td",[e._v('Equivalent to Apple "points."')])]),e._v(" "),a("tr",[a("td",[e._v("inches")]),e._v(" "),a("td",[e._v("in")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("millimeters")]),e._v(" "),a("td",[e._v("mm")]),e._v(" "),a("td",[e._v("Android, iOS only")])]),e._v(" "),a("tr",[a("td",[e._v("centimeters")]),e._v(" "),a("td",[e._v("cm")]),e._v(" "),a("td",[e._v("Android, iOS only")])]),e._v(" "),a("tr",[a("td",[e._v("points")]),e._v(" "),a("td",[e._v("pt")]),e._v(" "),a("td",[e._v('Typographical points of 1/72 of an inch. On Android, you can specify sizes and coordinates in typographical points. On other platforms, this unit is only used to specify font sizes. Not to be confused with Apple "points."')])])])]),e._v(" "),a("p",[e._v("The interpretation of the density-independent pixel (DIP) varies by platform:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("On Android, one DIP corresponds to one pixel on a 160DPI\ndisplay.")])]),e._v(" "),a("li",[a("p",[e._v("On iOS, one DIP corresponds to one pixel on a non-Retina display, which\nis 163DPI for iPhone/iPod touch and 132DPI for the iPad. A DIP\ncorresponds to 2 pixels of width or height on a Retina display.")])])]),e._v(" "),a("p",[e._v("The absolute measures, such as inches, are dependent on the device correctly reporting\nits density.")]),e._v(" "),a("p",[e._v("If no units are specified, a system-default unit is assumed. The system default unit is:")]),e._v(" "),a("ul",[a("li",[e._v("Pixels on Android.")]),e._v(" "),a("li",[e._v("DIPs on iOS.")])]),e._v(" "),a("p",[e._v("On Android and iOS, the default unit can be overriden on a per-application level by setting the\n"),a("code",[e._v("ti.ui.defaultunit")]),e._v(" property in "),a("code",[e._v("tiapp.xml")]),e._v(". For example, to use DIPs as the\ndefault on all platforms, set "),a("code",[e._v("defaultunit")]),e._v(" to "),a("code",[e._v("dip")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("property")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("ti.ui.defaultunit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("dip"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),a("p",[e._v("The value for "),a("code",[e._v("ti.ui.defaultunit")]),e._v(" can be any of the unit specifiers defined above, or\n"),a("code",[e._v("system")]),e._v(" to specify that the platform's default unit should be used.")]),e._v(" "),a("p",[e._v("On IOS if you set the "),a("code",[e._v("ti.ui.defaultunit")]),e._v(" property to anything other than "),a("code",[e._v("system")]),e._v(" or "),a("code",[e._v("dip")]),e._v(", your\napplication should detect and handle Retina displays manually.")]),e._v(" "),a("p",[e._v("Font sizes on iOS are treated differently than other sizes: font sizes are always\nspecified in typographical points.")]),e._v(" "),a("p",[e._v("For more details see:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.appcelerator.com/platform/latest/#!/guide/UI_Composite_Layout_Behavior_Spec",target:"_blank",rel:"noopener noreferrer"}},[e._v("UI Composite Layout Spec"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"size-and-position"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#size-and-position"}},[e._v("#")]),e._v(" Size and Position")]),e._v(" "),a("p",[e._v("Titanium views are positioned using the "),a("code",[e._v("left")]),e._v(", "),a("code",[e._v("right")]),e._v(", "),a("code",[e._v("top,")]),e._v(" "),a("code",[e._v("bottom")]),e._v(" and "),a("code",[e._v("center")]),e._v("\nproperties, and sized using the "),a("code",[e._v("width")]),e._v(" and "),a("code",[e._v("height")]),e._v(" properties. These are\ninput properties, set by the user to specify layout, and not modified by the\nsystem to indicate actual calculated positions and sizes.")]),e._v(" "),a("p",[e._v("The "),a("type-link",{attrs:{type:"Titanium.UI.View.height"}},[e._v("height")]),e._v(" and "),a("type-link",{attrs:{type:"Titanium.UI.View.width"}},[e._v("width")]),e._v(" properties\naccept several special values:")],1),e._v(" "),a("ul",[a("li",[a("type-link",{attrs:{type:"Titanium.UI.FILL"}},[e._v("Titanium.UI.FILL")]),e._v(" specifies that the view should fill the parent in this\ndimension.")],1),e._v(" "),a("li",[a("type-link",{attrs:{type:"Titanium.UI.SIZE"}},[e._v("Titanium.UI.SIZE")]),e._v(" specifies that the view should adjust this size to fit its\ncontents, such as a label's text or a view's children.")],1),e._v(" "),a("li",[e._v("'auto' specifies that the view should choose either "),a("code",[e._v("FILL")]),e._v(" or "),a("code",[e._v("SIZE")]),e._v(" behavior.\nThe use of "),a("code",[e._v("auto")]),e._v(" is deprecated, and should be replaced with the SIZE or FILL constants if it is necessary to set the view's behavior explicitly.")])]),e._v(" "),a("p",[e._v("Sizes and positions can also be specified as a percentage of the parent's size, for\nexample, "),a("code",[e._v("50%")]),e._v(".")]),e._v(" "),a("p",[e._v("How these properties are interpreted depends on the value of the view's "),a("code",[e._v("layout")]),e._v("\nproperty. See the description of the "),a("type-link",{attrs:{type:"Titanium.UI.View.layout"}},[e._v("layout")]),e._v(" property\nfor details.")],1),e._v(" "),a("p",[e._v("The "),a("type-link",{attrs:{type:"Titanium.UI.View.rect"}},[e._v("rect")]),e._v(" property is a read-only dictionary\nwith the properties "),a("code",[e._v("x")]),e._v(", "),a("code",[e._v("y")]),e._v(", "),a("code",[e._v("width")]),e._v(" and "),a("code",[e._v("height")]),e._v(". It provides the "),a("em",[e._v("rendered")]),e._v("\nsize and position of the  view, and is only available once both it and its ancestors have been\nfully drawn.")],1),e._v(" "),a("p",[e._v("The "),a("type-link",{attrs:{type:"Titanium.UI.View.size"}},[e._v("size")]),e._v(" property is a read-only dictionary\nwith the properties "),a("code",[e._v("x")]),e._v(", "),a("code",[e._v("y")]),e._v(", "),a("code",[e._v("width")]),e._v(" and "),a("code",[e._v("height")]),e._v(". It provides the "),a("em",[e._v("rendered")]),e._v(" size\nof the  view, and is only available once both it and its ancestors have been\nfully drawn.")],1),e._v(" "),a("p",[e._v("To determine whether the "),a("code",[e._v("size")]),e._v(" and "),a("code",[e._v("rect")]),e._v(" values are available, add an event listener\nfor the "),a("type-link",{attrs:{type:"Titanium.UI.View.postlayout"}},[e._v("postlayout")]),e._v(" event, which is fired at the end of\na layout cycle.")],1),e._v(" "),a("h3",{attrs:{id:"accessibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessibility"}},[e._v("#")]),e._v(" Accessibility")]),e._v(" "),a("p",[e._v("Four accessibility-related view properties are available in Titanium Mobile for iOS\nand Android:")]),e._v(" "),a("ul",[a("li",[a("type-link",{attrs:{type:"Titanium.UI.View.accessibilityLabel"}},[e._v("Titanium.UI.View.accessibilityLabel")])],1),e._v(" "),a("li",[a("type-link",{attrs:{type:"Titanium.UI.View.accessibilityValue"}},[e._v("Titanium.UI.View.accessibilityValue")])],1),e._v(" "),a("li",[a("type-link",{attrs:{type:"Titanium.UI.View.accessibilityHint"}},[e._v("Titanium.UI.View.accessibilityHint")])],1),e._v(" "),a("li",[a("type-link",{attrs:{type:"Titanium.UI.View.accessibilityHidden"}},[e._v("Titanium.UI.View.accessibilityHidden")])],1)]),e._v(" "),a("p",[e._v("The first three, "),a("code",[e._v("accessibilityLabel")]),e._v(", "),a("code",[e._v("accessibilityValue")]),e._v(" and "),a("code",[e._v("accessibilityHint")]),e._v(", are for setting text\nthat will be relayed to the user by the assistive service (such as TalkBack on Android or VoiceOver\non iOS). On iOS, Titanium will then take these values and set the native properties\nof the same name which are defined in the "),a("a",{attrs:{href:"https://developer.apple.com/documentation/uikit/accessibility/uiaccessibility",target:"_blank",rel:"noopener noreferrer"}},[e._v("UIAccessibilityProtocol"),a("OutboundLink")],1),e._v(".\nOn Android, Titanium takes the three values and concatenates them in the order "),a("code",[e._v("accessibilityLabel")]),e._v(",\n"),a("code",[e._v("accessibilityValue")]),e._v(", and "),a("code",[e._v("accessibilityHint")]),e._v(", and then uses the result to set the native view's\n"),a("a",{attrs:{href:"https://developer.android.com/reference/android/view/View.html#setContentDescription%28java.lang.CharSequence%29",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("contentDescription")]),a("OutboundLink")],1),e._v("\nproperty.")]),e._v(" "),a("p",[e._v("You are not required to set all three properties: feel free to set just one or two as needed and\nexperiment with the results by turning on VoiceOver (iOS) or TalkBack (Android) on your test device.")]),e._v(" "),a("p",[e._v("The fourth property, "),a("code",[e._v("accessibilityHidden")]),e._v(", when set to "),a("code",[e._v("true")]),e._v(", indicates that the view can be ignored\nby the assistive service. In iOS this sets the similarly-named\n"),a("a",{attrs:{href:"https://developer.apple.com/documentation/objectivec/nsobject/1615080-accessibilityelementshidden",target:"_blank",rel:"noopener noreferrer"}},[e._v("accessibilityElementsHidden"),a("OutboundLink")],1),e._v("\nnative property.")]),e._v(" "),a("p",[e._v("In Android "),a("code",[e._v("accessibilityHidden")]),e._v(" calls the native "),a("a",{attrs:{href:"https://developer.android.com/reference/android/view/View.html#setImportantForAccessibility%28int%29",target:"_blank",rel:"noopener noreferrer"}},[e._v("View.setImportantForAccessibility(boolean)"),a("OutboundLink")],1),e._v(" method, passing "),a("code",[e._v("false")]),e._v(" when\nthis property is set to "),a("code",[e._v("true")]),e._v(' (i.e., "hidden" means it\'s not important). However, the\nnative '),a("code",[e._v("setImportantForAccessibility")]),e._v(" method is available only on devices running\nAndroid 4.1 (API level 16/Jelly Bean) or later. On earlier versions of Android, this\nproperty is ignored.")]),e._v(" "),a("p",[e._v("No error will occur on older devices if you set "),a("code",[e._v("accessibilityHidden")]),e._v("; the value will simply be ignored.")]),e._v(" "),a("h3",{attrs:{id:"ios-backgroundleftcap-and-backgroundtopcap-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios-backgroundleftcap-and-backgroundtopcap-properties"}},[e._v("#")]),e._v(" iOS: backgroundLeftCap and backgroundTopCap properties")]),e._v(" "),a("p",[e._v("The "),a("type-link",{attrs:{type:"Titanium.UI.View.backgroundLeftCap"}},[e._v("backgroundLeftCap")]),e._v(" and "),a("type-link",{attrs:{type:"Titanium.UI.View.backgroundTopCap"}},[e._v("backgroundTopCap")]),e._v(" properties are\nused to specify the portions of the "),a("type-link",{attrs:{type:"Titanium.UI.View.backgroundImage"}},[e._v("backgroundImage")]),e._v(" that must not be resized when the image is streched or shrunk.")],1),e._v(" "),a("p",[e._v("Given an image of width "),a("code",[e._v("w")]),e._v(" and height "),a("code",[e._v("h")]),e._v(", the stretchable portion on the image is defined as a rectangle with the "),a("code",[e._v("top-left")]),e._v(" point set to\n"),a("code",[e._v("(backgroundLeftCap , backgroundTopCap)")]),e._v(" and the "),a("code",[e._v("bottom-right")]),e._v(" point set to "),a("code",[e._v("(w - backgroundLeftCap , h - backgroundTopCap)")]),e._v(". The portions not covered by\nthe stretchable portion keep their original size and appearance.")]),e._v(" "),a("p",[e._v("For best results on ImageView set up the "),a("code",[e._v("backgroundLeftCap")]),e._v(" and "),a("code",[e._v("backgroundTopCap")]),e._v(" properties such that the stretchable portion is always a 1x1 box.")]),e._v(" "),a("h3",{attrs:{id:"ios-clipping-behavior"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios-clipping-behavior"}},[e._v("#")]),e._v(" iOS Clipping Behavior")]),e._v(" "),a("p",[e._v("Four view related properties are available in Titanium Mobile for iOS.")]),e._v(" "),a("ul",[a("li",[a("type-link",{attrs:{type:"Titanium.UI.View.viewShadowRadius"}},[e._v("Titanium.UI.View.viewShadowRadius")])],1),e._v(" "),a("li",[a("type-link",{attrs:{type:"Titanium.UI.View.viewShadowColor"}},[e._v("Titanium.UI.View.viewShadowColor")])],1),e._v(" "),a("li",[a("type-link",{attrs:{type:"Titanium.UI.View.viewShadowOffset"}},[e._v("Titanium.UI.View.viewShadowOffset")])],1),e._v(" "),a("li",[a("type-link",{attrs:{type:"Titanium.UI.View.clipMode"}},[e._v("Titanium.UI.View.clipMode")])],1)]),e._v(" "),a("p",[e._v("The first three, "),a("code",[e._v("viewShadowColor")]),e._v(", "),a("code",[e._v("viewShadowRadius")]),e._v(" and "),a("code",[e._v("viewShadowOffset")]),e._v(" control the shadow associated with the view.\nThe shadow of the view is drawn using a rounded rectangle with the arc radius set to the "),a("code",[e._v("borderRadius")]),e._v(" property.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("clipMode")]),e._v(" property lets the user control the clipping behavior of the View.\nSetting this to "),a("type-link",{attrs:{type:"Titanium.UI.iOS.CLIP_MODE_ENABLED"}},[e._v("Titanium.UI.iOS.CLIP_MODE_ENABLED")]),e._v(" enforces all child views to be clipped to this views bounds.\nSetting this to "),a("type-link",{attrs:{type:"Titanium.UI.iOS.CLIP_MODE_DISABLED"}},[e._v("Titanium.UI.iOS.CLIP_MODE_DISABLED")]),e._v(" allows child views to be drawn outside the bounds of this view.\nWhen set to "),a("type-link",{attrs:{type:"Titanium.UI.iOS.CLIP_MODE_DEFAULT"}},[e._v("Titanium.UI.iOS.CLIP_MODE_DEFAULT")]),e._v(" or when this property is not set, clipping behavior is defined by the following rules applied in order.")],1),e._v(" "),a("ul",[a("li",[e._v("If the "),a("code",[e._v("viewShadowColor")]),e._v(" is defined to be a color with alpha > 0, clipping is disabled.")]),e._v(" "),a("li",[e._v("If the "),a("code",[e._v("borderWidth")]),e._v(" or "),a("code",[e._v("borderRadius")]),e._v(" of the view is set to a value > 0, clipping is enabled.")]),e._v(" "),a("li",[e._v("If the view has one or more "),a("code",[e._v("children")]),e._v(" clipping is enabled.")]),e._v(" "),a("li",[e._v("If none of the conditions are met, clipping is disabled.")])]),e._v(" "),a("p",[e._v("In earlier versions of Titanium Mobile, views had clipping enabled by default.")]),e._v(" "),a("h3",{attrs:{id:"ios-animation-on-shadow-associated-with-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios-animation-on-shadow-associated-with-view"}},[e._v("#")]),e._v(" iOS Animation on shadow associated with view")]),e._v(" "),a("p",[e._v("If "),a("code",[e._v("borderRadius")]),e._v(" property has multiple values, animation on shadow associated with the view will not work.")]),e._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("h3",{attrs:{id:"round-view-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#round-view-example"}},[e._v("#")]),e._v(" Round View Example")]),e._v(" "),a("p",[e._v("Create a rounded view.")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" view "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" Titanium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("createView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    borderRadius"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    backgroundColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'red'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    width"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    height"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("50")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("view"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("h3",{attrs:{id:"alloy-xml-markup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alloy-xml-markup"}},[e._v("#")]),e._v(" Alloy XML Markup")]),e._v(" "),a("p",[e._v("Previous example as an Alloy view.")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("Alloy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("View")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("view"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("borderRadius")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("backgroundColor")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("width")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("50"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("height")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("50"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("Alloy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),a("ApiDocs")],1)}),[],!1,null,null,null);t.default=s.exports}}]);