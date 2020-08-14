(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{1465:function(t,e,n){"use strict";n.r(e);var a=n(21),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"modules-geofence"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#modules-geofence"}},[t._v("#")]),t._v(" Modules.Geofence")]),t._v(" "),n("TypeHeader"),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("p",{staticClass:"note"},[t._v("This feature requires a Pro or Enterprise subscription!")]),t._v(" "),n("p",[t._v("You use the Geofence module to define and monitor geofences in your application. A geofence is a circular\nregion defined by a point (a latitude/longitude pair) and a radius, and represented by the\n"),n("type-link",{attrs:{type:"Modules.Geofence.Region"}},[t._v("Region")]),t._v(" object. When a device moves into\nor out of a geofence being monitored, the module notifies your application of the event.")],1),t._v(" "),n("p",[t._v("Enterprise customers can also define geofences on the server using the\n"),n("a",{attrs:{href:"/cloud/latest/#!/api/GeoFences-method-create"}},[t._v("Appcelerator Cloud Services API")]),t._v(".\nAn application can query the server for any defined geofences and begin monitoring them.\nSee the RegionMonitoring example in the module ZIP download.")]),t._v(" "),n("h2",{attrs:{id:"getting-started"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),n("p",[t._v("Once you have "),n("a",{attrs:{href:"#!/guide/Using_a_Module"}},[t._v("installed")]),t._v(" the module, use "),n("code",[t._v("require()")]),t._v(" to access it from JavaScript:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Geofence "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ti.geofence'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"location-permissions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#location-permissions"}},[t._v("#")]),t._v(" Location Permissions")]),t._v(" "),n("p",[t._v("Please ensure to request proper location permissions before attempting to use geofencing feautures. See\n"),n("type-link",{attrs:{type:"Titanium.Geolocation.hasLocationPermissions"}},[t._v("Titanium.Geolocation.hasLocationPermissions(type)")]),t._v(" and "),n("type-link",{attrs:{type:"Titanium.Geolocation.requestLocationPermissions"}},[t._v("Titanium.Geolocation.requestLocationPermissions(type, callback)")]),t._v("\nfor details. Example:")],1),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Geolocation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasLocationPermissions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Geolocation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AUTHORIZATION_ALWAYS")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Geolocation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestLocationPermissions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Geolocation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AUTHORIZATION_ALWAYS")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("success"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Location permissions declined!'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Location permissions ready'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Initialize monitoring here")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"creating-and-monitoring-geofence-regions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-and-monitoring-geofence-regions"}},[t._v("#")]),t._v(" Creating and monitoring geofence regions")]),t._v(" "),n("p",[t._v("You use the "),n("type-link",{attrs:{type:"Modules.Geofence.createRegion"}},[t._v("Geofence.createRegion()")]),t._v(" method to define a "),n("type-link",{attrs:{type:"Modules.Geofence.Region"}},[t._v("Region")]),t._v(" object.\nA geofence is a circular area defined by a point (latitude and longitude) and a radius (in meters).")],1),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newRegion "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Geofence"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRegion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    center"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        latitude"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("37.389601")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        longitude"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("122.050169")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    radius"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    identifier"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Appcelerator'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("To start monitoring a region, call the "),n("type-link",{attrs:{type:"Modules.Geofence.startMonitoringForRegions"}},[t._v("Geofence.startMonitoringForRegions()")]),t._v(" method, passing it the\nregion or regions you want to monitor.")],1),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("Geofence"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("startMonitoringForRegions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("region1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" region2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("To be notified when the device moves into or out of a geofence region, create an event listener\nfor the "),n("type-link",{attrs:{type:"Modules.Geofence.enterregions"}},[t._v("enterregions")]),t._v(" or "),n("type-link",{attrs:{type:"Modules.Geofence.exitregions"}},[t._v("exitregions")]),t._v(" events, respectively.\nFor example:")],1),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("Geofence"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'enterregions'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("regions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("region")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Display local notification")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("showNotification")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            title"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ENTER'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            body"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'enter - '")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" region"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("identifier\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("The event object passed to the event handler contains a "),n("code",[t._v("regions")]),t._v(" property that identifies the region(s)\nthat were entered or exited. On iOS this property contains an array of "),n("type-link",{attrs:{type:"Modules.Geofence.Region"}},[t._v("Region")]),t._v(" objects;\non Android, it contains an array of generic objects that each contain a property called\n"),n("code",[t._v("identifier")]),t._v(". The value of this property corresponds to the one assigned to the "),n("type-link",{attrs:{type:"Modules.Geofence.Region"}},[t._v("Region")]),t._v("\nwhen it was created.")],1),t._v(" "),n("h2",{attrs:{id:"testing-geofence-monitoring"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#testing-geofence-monitoring"}},[t._v("#")]),t._v(" Testing Geofence monitoring")]),t._v(" "),n("p",[t._v("You have a few options for testing geofence monitoring in your application. One approach\nis field testing: travel (drive, walk, etc.) between monitored regions while the application is running.\nYou can also pass mock location data to the application running on a device or Simulator.")]),t._v(" "),n("p",[t._v("Note: The timing and frequency of location events may vary from one environment to another (device, OS version, network availability).")]),t._v(" "),n("h3",{attrs:{id:"mock-locations-from-the-ios-simulator"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mock-locations-from-the-ios-simulator"}},[t._v("#")]),t._v(" Mock locations from the iOS Simulator")]),t._v(" "),n("p",[t._v("Once the application is running in the simulator, select "),n("strong",[t._v("Debug")]),t._v(" > "),n("strong",[t._v("Location")]),t._v(" in the Simulator and\nselect a predefined location or route that you would like to be sent to the Simulator. You can\nalso enter a custom location (latitude, longitude).")]),t._v(" "),n("h3",{attrs:{id:"mock-locations-using-xcode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mock-locations-using-xcode"}},[t._v("#")]),t._v(" Mock locations using Xcode")]),t._v(" "),n("p",[t._v("This method will work on both the iOS Simulator and on device.")]),t._v(" "),n("ol",[n("li",[t._v("Launch your application once, then go to the build folder of your project and open the Xcode project found in "),n("strong",[t._v("build/iphone/")]),t._v(".")]),t._v(" "),n("li",[t._v("Run your project using Xcode.")]),t._v(" "),n("li",[t._v("Once app is running, in Xcode debug area, click the Simulate Location icon to display a list of mock locations that can be sent to your application.")]),t._v(" "),n("li",[t._v("Select one of these locations to send it to your app.\nAlternately, click on "),n("strong",[t._v("Add GPX File to Project...")]),t._v(" and select a GPX file with mock locations. A GPX file is provided in the "),n("strong",[t._v("example/MockLocationData")]),t._v(" folder in module download. The route starts at North De Anza Blvd and I-280 in Cupertino, CA and travels north on I-280.")]),t._v(" "),n("li",[t._v("After adding a GPX file, go back and click on the mock locations arrow. The GPX file should now be in the list. Select the mock location to start using it.")])]),t._v(" "),n("h3",{attrs:{id:"mock-locations-on-android"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mock-locations-on-android"}},[t._v("#")]),t._v(" Mock locations on Android")]),t._v(" "),n("p",[t._v("Add the following to your "),n("code",[t._v("tiapp.xml")]),t._v(".")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.permission.ACCESS_MOCK_LOCATION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),n("p",[t._v("For more information, see "),n("a",{attrs:{href:"https://developer.android.com/guide/topics/location/strategies#MockData",target:"_blank",rel:"noopener noreferrer"}},[t._v("Provide Mock Location Data"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"sample-applications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sample-applications"}},[t._v("#")]),t._v(" Sample applications")]),t._v(" "),n("p",[t._v("The module ZIP file contains two Geofence sample applications ("),n("strong",[t._v("examples/Basic")]),t._v(" and "),n("strong",[t._v("examples/RegionMonitoring")]),t._v(")\nand a GPX file ("),n("strong",[t._v("examples/MockLocationData")]),t._v(") for mocking location data in Xcode.")]),t._v(" "),n("ApiDocs")],1)}),[],!1,null,null,null);e.default=s.exports}}]);