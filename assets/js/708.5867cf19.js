(window.webpackJsonp=window.webpackJsonp||[]).push([[708],{1083:function(t,e,a){"use strict";a.r(e);var n=a(21),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-ui-webview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-webview"}},[t._v("#")]),t._v(" Titanium.UI.WebView")]),t._v(" "),a("TypeHeader"),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("Use the "),a("type-link",{attrs:{type:"Titanium.UI.createWebView"}},[t._v("Titanium.UI.createWebView")]),t._v(" method or "),a("strong",[a("code",[t._v("<WebView>")])]),t._v(" Alloy element to create a web view.")],1),t._v(" "),a("p",[t._v("Web views are more expensive to create than other native views because of the requirement to\nload the HTML browser into memory.")]),t._v(" "),a("p",[t._v("The web view content can be any valid web content such as HTML, PDF, SVG or other WebKit supported\ncontent types.")]),t._v(" "),a("h3",{attrs:{id:"javascript-context-in-webviews-local-vs-remote-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-context-in-webviews-local-vs-remote-content"}},[t._v("#")]),t._v(" JavaScript Context in WebViews--Local vs. Remote Content")]),t._v(" "),a("p",[t._v("JavaScript in the web view executes in its own context.  The web view can interact with this\ncontent, but most of this functionality is limited to local content.")]),t._v(" "),a("p",[a("strong",[t._v("Local Scripts")])]),t._v(" "),a("p",[t._v("When running local web content\n(that is, content that is included in the application's resources), scripts have\naccess to the Titanium namespace. In particular, when running local web content:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("You can use <Titanium.App.addEventListener> and\n<Titanium.App.fireEvent> to receive and send application-level events.")])]),t._v(" "),a("li",[a("p",[t._v("Events can be logged using the "),a("type-link",{attrs:{type:"Titanium.API"}},[t._v("Titanium.API")]),t._v(" logging methods.")],1)])]),t._v(" "),a("p",[a("strong",[t._v("Remote Scripts")])]),t._v(" "),a("p",[t._v("Scripts downloaded from remote web servers cannot access the Titanium namespace.")]),t._v(" "),a("p",[t._v("To interact with remote content, wait until the content is loaded, then use the\n"),a("type-link",{attrs:{type:"Titanium.UI.WebView.evalJS"}},[t._v("evalJS")]),t._v(" method to execute a JavaScript expression\ninside the web view and retrieve the value of an expression.")],1),t._v(" "),a("h3",{attrs:{id:"local-javascript-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-javascript-files"}},[t._v("#")]),t._v(" Local JavaScript Files")]),t._v(" "),a("p",[t._v("During the build process for creating a package, all JavaScript files, that is, any file with a\n'.js' extension, are removed and their content is encrypted and obfuscated into one resource,\ncausing these files to not load properly in a WebView if they are loaded externally.")]),t._v(" "),a("p",[t._v("For JavaScript files referenced in static local HTML files, these JavaScript files are omitted\nfrom processing and left intact, which means they can be correctly loaded in the WebView.")]),t._v(" "),a("p",[t._v("For local JavaScript files not referenced in static local HTML files, for example, a\ndynamically-generated HTML file referencing a local JavaScript file,\nrename the file extension of the local JavaScript files to '.jslocal' instead of '.js'.")]),t._v(" "),a("p",[t._v("The build process for testing your application on the simulator, emulator or device does not\naffect the loading of local JavaScript files.")]),t._v(" "),a("h3",{attrs:{id:"ios-platform-implementation-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios-platform-implementation-notes"}},[t._v("#")]),t._v(" iOS Platform Implementation Notes")]),t._v(" "),a("p",[t._v("On the iOS platform, the native web view handles scrolling and other related touch\nevents internally. If you add event listeners on the web view "),a("strong",[t._v("or its parent views")]),t._v("\nfor any of the standard touch events ("),a("code",[t._v("touchstart")]),t._v(", "),a("code",[t._v("click")]),t._v(", and so on), these events\ndo not reach the native web view, and the user will not be able to scroll, zoom, click\non links, and so on. To prevent this default behavior, set\n"),a("type-link",{attrs:{type:"Titanium.UI.WebView.willHandleTouches"}},[t._v("willHandleTouches")]),t._v(" to "),a("code",[t._v("false")]),t._v(".")],1),t._v(" "),a("p",[t._v("In other words, you can have either Titanium-style events against the\nweb view instance, or internal JavaScript events in the DOM, but not both.")]),t._v(" "),a("h3",{attrs:{id:"android-platform-implementation-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-platform-implementation-notes"}},[t._v("#")]),t._v(" Android Platform Implementation Notes")]),t._v(" "),a("p",[a("strong",[t._v("Android 4.4 and Later Support")])]),t._v(" "),a("p",[t._v("Starting with Android 4.4 (API Level 19), the WebView component is based off of Chromium,\nintroducing a number of changes to its rendering engine.  Web content may look or behave\ndifferently depending on the Android version.  The WebView does not\nhave full feature parity with Chrome for Android.")]),t._v(" "),a("p",[t._v("By default, the Chromium WebView uses hardware acceleration, which may cause content to\nfail to render. If the WebView fails to render the content, the web view will clear\nitself, displaying only the default background color. The following log messages will be\ndisplayed in the console:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[WARN] :   AwContents: nativeOnDraw failed; clearing to background color.\n[INFO] :   chromium: [INFO:async_pixel_transfer_manager_android.cc(56)]\n")])])]),a("p",[t._v("To workaround this issue, you can enable software rendering by setting the WebView's\n"),a("a",{attrs:{href:"Titanium.UI.WebView.borderRadius"}},[t._v("borderRadius")]),t._v(" property to a value greater than zero.")]),t._v(" "),a("p",[t._v("If you are developing local HTML content and size your elements using percentages, the WebView may\nnot calculate the sizes correctly when hardware acceleration is enabled, resulting in the same\nbehavior previously mentioned.")]),t._v(" "),a("p",[t._v("To workaround this issue, you can use the previously mentioned workaround to enable software\nrendering, use absolute size values or use the\n"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window.onresize",target:"_blank",rel:"noopener noreferrer"}},[t._v("onresize"),a("OutboundLink")],1),t._v(" event to set the\nheights of the components.  For example, if you have a div element with an id set to "),a("code",[t._v("component")]),t._v("\nthat needs to use the entire web view, the following callback resizes the content to use the\nfull height of the web view:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onresize")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"component"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("For more information, see the following topics:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.android.com/guide/webapps/migrating.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Developers: Migrating to WebView in Android 4.4"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developer.chrome.com/multidevice/webview/overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Chrome: WebView for Android"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("Plugin Support")])]),t._v(" "),a("p",[t._v("The Android web view supports native plugins.")]),t._v(" "),a("p",[t._v("To use plugin content, you must set the "),a("type-link",{attrs:{type:"Titanium.UI.WebView.pluginState"}},[t._v("pluginState")]),t._v(" property\nto either "),a("type-link",{attrs:{type:"Titanium.UI.Android.WEBVIEW_PLUGINS_ON"}},[t._v("WEBVIEW_PLUGINS_ON")]),t._v(" or\n"),a("type-link",{attrs:{type:"Titanium.UI.Android.WEBVIEW_PLUGINS_ON_DEMAND"}},[t._v("WEBVIEW_PLUGINS_ON_DEMAND")]),t._v(".")],1),t._v(" "),a("p",[t._v("You must also call "),a("type-link",{attrs:{type:"Titanium.UI.WebView.pause"}},[t._v("pause")]),t._v(" when the current activity is\npaused, to prevent plugin content from continuing to run in the background. Call\n"),a("type-link",{attrs:{type:"Titanium.UI.WebView.resume"}},[t._v("resume")]),t._v(" when the current activity is resumed. You can\ndo this by adding listeners for the "),a("type-link",{attrs:{type:"Titanium.Android.Activity.pause"}},[t._v("Activity.pause")]),t._v("\nand "),a("type-link",{attrs:{type:"Titanium.Android.Activity.resume"}},[t._v("Activity.resume")]),t._v(" events.")],1),t._v(" "),a("p",[a("strong",[t._v("Accessing Cookies")])]),t._v(" "),a("p",[t._v("On Android, the web view uses the system cookie store which does not share cookies with the\n"),a("type-link",{attrs:{type:"Titanium.Network.HTTPClient"}},[t._v("Titanium.Network.HTTPClient")]),t._v(" cookie store. Developers can manage their cookies for both\ncookie stores using the methods "),a("type-link",{attrs:{type:"Titanium.Network.addHTTPCookie"}},[t._v("Titanium.Network.addHTTPCookie")]),t._v(", "),a("type-link",{attrs:{type:"Titanium.Network.addSystemCookie"}},[t._v("Titanium.Network.addSystemCookie")]),t._v(",\n"),a("type-link",{attrs:{type:"Titanium.Network.getHTTPCookies"}},[t._v("Titanium.Network.getHTTPCookies")]),t._v(", "),a("type-link",{attrs:{type:"Titanium.Network.getHTTPCookiesForDomain"}},[t._v("Titanium.Network.getHTTPCookiesForDomain")]),t._v(", "),a("type-link",{attrs:{type:"Titanium.Network.getSystemCookies"}},[t._v("Titanium.Network.getSystemCookies")]),t._v(",\n"),a("type-link",{attrs:{type:"Titanium.Network.removeHTTPCookie"}},[t._v("Titanium.Network.removeHTTPCookie")]),t._v(", "),a("type-link",{attrs:{type:"Titanium.Network.removeHTTPCookiesForDomain"}},[t._v("Titanium.Network.removeHTTPCookiesForDomain")]),t._v(", "),a("type-link",{attrs:{type:"Titanium.Network.removeAllHTTPCookies"}},[t._v("Titanium.Network.removeAllHTTPCookies")]),t._v(",\n"),a("type-link",{attrs:{type:"Titanium.Network.removeSystemCookie"}},[t._v("Titanium.Network.removeSystemCookie")]),t._v(", "),a("type-link",{attrs:{type:"Titanium.Network.removeAllSystemCookies"}},[t._v("Titanium.Network.removeAllSystemCookies")]),t._v(".")],1),t._v(" "),a("p",[a("strong",[t._v("WKWebView")])]),t._v(" "),a("p",[t._v("With Titanium SDK 8.0.0, we now use WKWebView to implement Ti.UI.WebView (as Apple has deprecated UIWebView).\nWKWebView has few restriction specially with local file accessing. For supporting custom-fonts with WKWebView\na little modification is required in the HTML files:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@font-face")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Lato-Regular'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'fonts/Lato-Regular.ttf'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("To have a WKWebView scale the page the same way as UIWebView, add the following meta tag to the HTML header:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"ti-ui-size-and-webviews"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ti-ui-size-and-webviews"}},[t._v("#")]),t._v(" Ti.UI.SIZE and WebViews")]),t._v(" "),a("p",[t._v("With Titanium 8.0.0+, "),a("type-link",{attrs:{type:"Titanium.UI.SIZE"}},[t._v("Titanium.UI.SIZE")]),t._v(" does not work for WebViews. We recommend to give a "),a("strong",[t._v("fixed height")]),t._v("\nto "),a("type-link",{attrs:{type:"Titanium.UI.WebView"}},[t._v("Titanium.UI.WebView")]),t._v(" (as noted in "),a("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIDOC-3355",target:"_blank",rel:"noopener noreferrer"}},[t._v("TIDOC-3355"),a("OutboundLink")],1),t._v(").")],1),t._v(" "),a("p",[t._v("As a workaround you can try to get the "),a("code",[t._v("document.body.scrollHeight")]),t._v(" inside "),a("type-link",{attrs:{type:"Titanium.UI.WebView.load"}},[t._v("Titanium.UI.WebView.load")]),t._v(" event\nof webview and set the height to webview. See following example.")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  backgroundColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" verticalView "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("layout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vertical'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" width"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100%"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100%"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nverticalView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createLabel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Label 1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" top"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" width"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SIZE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SIZE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" htmla "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"<div style='font-family: Helvetica Neue; font-size:16px'><ul><li>Item 1</li><li>Item 2</li></ul></div>\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" html "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<!DOCTYPE html>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nhtml "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"<html><head><meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'><style type='text/css'>html {-webkit-text-size-adjust: none;}</style><script type='text/javascript'>document.ontouchmove = function(event){event.preventDefault();}<\/script></head><body style='overflow: hidden'>\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nhtml "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" htmla"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nhtml "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"</body></html>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" webview "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWebView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'14dp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'14dp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" top"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'7dp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SIZE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" backgroundColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yellow"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nverticalView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("webview"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nverticalView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createLabel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Label 2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" top"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" width"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SIZE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SIZE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("verticalView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwebview"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'load'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" webview"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("evalJSSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'document.body.scrollHeight'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webview height: '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  webview"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"for-more-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-more-information"}},[t._v("#")]),t._v(" For More Information")]),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"https://docs.appcelerator.com/platform/latest/#!/guide/Integrating_Web_Content",target:"_blank",rel:"noopener noreferrer"}},[t._v("Integrating Web\nContent"),a("OutboundLink")],1),t._v("\nin the Titanium Mobile Guides for more information on using web views, including use\ncases, more code examples, and best practices for web view content.")]),t._v(" "),a("ApiDocs")],1)}),[],!1,null,null,null);e.default=s.exports}}]);