(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{1099:function(t,a,e){"use strict";e.r(a);var s=e(21),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"modules-map-view"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modules-map-view"}},[t._v("#")]),t._v(" Modules.Map.View")]),t._v(" "),e("TypeHeader"),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("p",[t._v("With native maps, you can control the mapping location, the type of map, the zoom level\nand you can add custom annotations and routes directly to the map. Once the map view is\ndisplayed, the user can pan, zoom and tilt the map using the native control gestures.")]),t._v(" "),e("p",[t._v("Use the "),e("type-link",{attrs:{type:"Modules.Map.createView"}},[t._v("Modules.Map.createView")]),t._v(" method to create a map view.")],1),t._v(" "),e("p",[t._v("In Alloy, use the "),e("strong",[e("code",[t._v("<Module>")])]),t._v(" element with the "),e("code",[t._v("module")]),t._v(" attribute set to "),e("code",[t._v("ti.map")]),t._v("\nand "),e("code",[t._v("method")]),t._v(" attribute set to "),e("code",[t._v("createView")]),t._v(" to create a map view in XML markup:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Module")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("module")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ti.map"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("createView"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("p",[t._v("All latitude and longitude values are specified in decimal degrees. Values in degrees,\nminutes and seconds (DMS) must be converted to decimal degrees before being passed to\nthe map view.")]),t._v(" "),e("p",[t._v("You can add "),e("type-link",{attrs:{type:"Modules.Map.Annotation"}},[t._v("Annotation")]),t._v(" objects to the map to mark points of\ninterest. An annotation has two states: selected and deselected. A deselected annotation\nis marked by a pin image. When selected, the full annotation is displayed, typically\nincluding a title and an optional subtitle.")],1),t._v(" "),e("p",[t._v("You can add "),e("type-link",{attrs:{type:"Modules.Map.Route"}},[t._v("Route")]),t._v(" objects to the map to create paths between\ntwo or more points of interest.")],1),t._v(" "),e("p",[t._v("To use the "),e("code",[t._v("userLocation")]),t._v(" property in iOS 8 and later, add either the\n"),e("a",{attrs:{href:"https://developer.apple.com/library/prerelease/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW26",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("NSLocationWhenInUseUsageDescription")]),e("OutboundLink")],1),t._v("\nor\n"),e("a",{attrs:{href:"https://developer.apple.com/library/prerelease/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW18",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("NSLocationAlwaysUsageDescription")]),e("OutboundLink")],1),t._v("\nkey to the iOS plist section of the project's "),e("code",[t._v("tiapp.xml")]),t._v(" file.")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ios")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plist")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dict")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("NSLocationAlwaysUsageDescription"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                    Specify the reason for accessing the user's location information.\n                    This appears in the alert dialog when asking the user for permission to\n                    access their location.\n                "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dict")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plist")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ios")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("ApiDocs")],1)}),[],!1,null,null,null);a.default=n.exports}}]);