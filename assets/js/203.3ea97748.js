(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{1011:function(e,a,n){"use strict";n.r(a);var s=n(21),t=Object(s.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"modules-cloud-geofences"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud-geofences"}},[e._v("#")]),e._v(" Modules.Cloud.GeoFences")]),e._v(" "),n("TypeHeader"),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("This feature is only available for "),n("strong",[e._v("enterprise users")]),e._v(", and the current user must be an "),n("strong",[e._v("application\nadmin")]),e._v(" to create, update or remove geo-fence objects.")]),e._v(" "),n("p",[e._v("The ArrowDB GeoFences API lets you manage geographic regions with an associated JSON data payload.\nUse this API to have the device query the ArrowDB server to retrieve data based on a location.")]),e._v(" "),n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),n("h3",{attrs:{id:"create-a-geo-fence-object"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-a-geo-fence-object"}},[e._v("#")]),e._v(" Create a geo-fence object")]),e._v(" "),n("p",[e._v("This example creates a new geo-fence object covering a 10 mile radius around San Francisco,\nCA, USA, and checks the response.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('  Cloud.GeoFences.create({\n      geo_fence: {\n          "loc":{"coordinates":[-122.4167,37.7833], "radius":"10/3959"},\n          "payload":{"alert":"24-hour sale at our SF flagship store on 12/26!"},\n          "start_time": "2014-12-25T00:00",\n          "end_time":"2014-12-26T19:00"\n      }\n  }, function (e) {\n      if (e.success) {\n          Ti.API.info(JSON.stringify(e.geo_fences));\n      } else {\n          alert(\'Error:\\n\' +\n              ((e.error && e.message) || JSON.stringify(e)));\n      }\n  });\n')])])]),n("h3",{attrs:{id:"query-for-geo-fence-objects"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#query-for-geo-fence-objects"}},[e._v("#")]),e._v(" Query for geo-fence objects")]),e._v(" "),n("p",[e._v("This example searches for geo-fence objects within 2 km of Oakland, CA, USA, and checks the response.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('  Cloud.GeoFences.query({\n      where:{\n          "loc": { \n              "$nearSphere" : { \n                  "$geometry" : { "type" : "Point", "coordinates" : [-122.2708,37.8044] },\n                      "$maxDistance" : 2000\n                  }\n              }\n      }\n  }, function (e) {\n      if (e.success) {\n          Ti.API.info(JSON.stringify(e.geo_fences));\n      } else {\n          alert(\'Error:\\n\' +\n              ((e.error && e.message) || JSON.stringify(e)));\n      }\n  });\n')])])]),n("h3",{attrs:{id:"update-a-geo-fence-object"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#update-a-geo-fence-object"}},[e._v("#")]),e._v(" Update a geo-fence object")]),e._v(" "),n("p",[e._v("This example updates a geo-fence object and checks the response.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('Cloud.GeoFences.update({\n    id: geoFenceId,\n    geo_fence:{"loc":{"place_id":"531a1217447d300f05003b69","radius":"2/6371"}}\n}, function (e) {\n    if (e.success) {\n        Ti.API.info(JSON.stringify(e.geo_fences));\n    } else {\n        alert(\'Error:\\n\' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n')])])]),n("h3",{attrs:{id:"delete-a-geo-fence-object"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#delete-a-geo-fence-object"}},[e._v("#")]),e._v(" Delete a geo-fence object")]),e._v(" "),n("p",[e._v("This example deletes a geo-fence object and checks the response.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("Cloud.GeoFences.remove({\n    id: geoFenceId\n}, function (e) {\n    if (e.success) {\n        Ti.API.info(JSON.stringify(e));\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),n("ApiDocs")],1)}),[],!1,null,null,null);a.default=t.exports}}]);