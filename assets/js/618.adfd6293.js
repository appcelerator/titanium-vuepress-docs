(window.webpackJsonp=window.webpackJsonp||[]).push([[618],{1890:function(t,a,e){"use strict";e.r(a);var s=e(21),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"titanium-app-ios-searchableitemattributeset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#titanium-app-ios-searchableitemattributeset"}},[t._v("#")]),t._v(" Titanium.App.iOS.SearchableItemAttributeSet")]),t._v(" "),e("TypeHeader"),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("p",[t._v("The SearchableItemAttributeSet object provides a large number of properties covering most common scenarios such\nas files, music, video, and document searches. To effectively add and remove information from the iOS search index\nyou will need to use the below listed modules:")]),t._v(" "),e("ul",[e("li",[e("type-link",{attrs:{type:"Titanium.App.iOS.SearchableItemAttributeSet"}},[t._v("Titanium.App.iOS.SearchableItemAttributeSet")]),t._v(" - Used to create metadata related to the "),e("code",[t._v("Ti.App.iOS.SearchableItem")])],1),t._v(" "),e("li",[e("type-link",{attrs:{type:"Titanium.App.iOS.SearchableItem"}},[t._v("Titanium.App.iOS.SearchableItem")]),t._v(" - Used to assemble metadata into a unique object package to be used by "),e("code",[t._v("Ti.App.iOS.SearchableIndex")])],1),t._v(" "),e("li",[e("type-link",{attrs:{type:"Titanium.App.iOS.SearchableIndex"}},[t._v("Titanium.App.iOS.SearchableIndex")]),t._v("  - Used to add and remove "),e("code",[t._v("Ti.App.iOS.SearchableItem")]),t._v(" objects to the device search index")],1)]),t._v(" "),e("p",[t._v("To use this feature make sure you have a compatible device running iOS 9 or later.")]),t._v(" "),e("p",[t._v("To create a SearchableItemAttributeSet object, use the Titanium.App.iOS.createSearchableItemAttributeSet method.\nPass a dictionary of metadata properties to the method to associate with a SearchableItem object or UserActivity.\nAt minimum, you must set the "),e("type-link",{attrs:{type:"Titanium.App.iOS.SearchableItemAttributeSet.itemContentType"}},[t._v("itemContentType")]),t._v(" property.")],1),t._v(" "),e("p",[t._v("Pass the SearchableItemAttributeSet object to either the Titanium.App.iOS.createSearchableItem method to the "),e("code",[t._v("attributeSet")]),t._v(" key\nor to a UserActivity object's "),e("type-link",{attrs:{type:"Titanium.App.iOS.UserActivity.addContentAttributeSet"}},[t._v("addContentAttributeSet()")]),t._v(" method.")],1),t._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("h3",{attrs:{id:"add-searchable-content-to-the-on-device-index"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-searchable-content-to-the-on-device-index"}},[t._v("#")]),t._v(" Add Searchable Content to the On-Device Index")]),t._v(" "),e("p",[t._v("The following example demonstrates how to create a new Ti.App.iOS.SearchableItem and\nadd a Ti.App.iOS.SearchableItemAttributeSet. The Ti.App.iOS.SearchableItem is then passed to the\nTi.App.iOS.SearchableIndex object to add it to the on-device search index.")]),t._v(" "),e("h4",{attrs:{id:"app-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app-js"}},[t._v("#")]),t._v(" app.js")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" searchItems "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" itemAttr "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iOS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSearchableItemAttributeSet")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    itemContentType"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iOS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UTTYPE_IMAGE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    title"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Titanium Core Spotlight Tutorial"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nitemAttr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentDescription "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tech Example \\nOn: "')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" String"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("formatDate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"short"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nitemAttr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keywords "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mobile"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Appcelerator"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Titanium"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" item "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iOS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSearchableItem")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    uniqueIdentifier"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-id"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    domainIdentifier"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.mydomain"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    attributeSet"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("itemAttr\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsearchItems"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" indexer "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iOS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSearchableIndex")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nindexer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addToDefaultSearchableIndex")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("searchItems"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("success"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Press the home button and now search for your keywords"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Errored: "')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("ApiDocs")],1)}),[],!1,null,null,null);a.default=n.exports}}]);