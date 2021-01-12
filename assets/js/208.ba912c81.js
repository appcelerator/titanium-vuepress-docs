(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{1047:function(e,n,s){"use strict";s.r(n);var c=s(21),a=Object(c.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"modules-cloud-checkins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud-checkins"}},[e._v("#")]),e._v(" Modules.Cloud.Checkins")]),e._v(" "),s("TypeHeader"),e._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),s("h3",{attrs:{id:"create-a-checkin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-checkin"}},[e._v("#")]),e._v(" Create a Checkin")]),e._v(" "),s("p",[e._v("This example creates a checkin and checks the response.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Cloud.Checkins.create({\n    place_id: myPlaceId,\n    message: 'What a great view!',\n    photo: Titanium.Filesystem.getFile('photo.jpg')\n}, function (e) {\n    if (e.success) {\n        var checkin = e.checkins[0];\n        alert('Success:\\n' +\n            'id: ' + checkin.id + '\\n' +\n            'place: ' + checkin.place.name);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),s("h3",{attrs:{id:"query-for-checkins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-for-checkins"}},[e._v("#")]),e._v(" Query for Checkins")]),e._v(" "),s("p",[e._v("This example requests information about checkins and checks the response.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Cloud.Checkins.query({\n    page: 1,\n    per_page: 20,\n    order: '-updated_at'\n}, function (e) {\n    if (e.success) {\n        for (var i = 0; i < e.checkins.length; i++) {\n            var checkin = e.checkins[i];\n            alert('Success:\\n' +\n               'id: ' + checkin.id + '\\n' +\n               'place: ' + checkin.place.name + '\\n' +\n               'updated_at: ' + checkin.updated_at + '\\n' +\n               'user: ' + checkin.user.first_name + ' ' + checkin.user.last_name);\n         }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),s("h3",{attrs:{id:"show-checkin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-checkin"}},[e._v("#")]),e._v(" Show Checkin")]),e._v(" "),s("p",[e._v("This example requests information about a checkin and checks the response.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Cloud.Checkins.show({\n    checkin_id: myCheckinId\n}, function (e) {\n    if (e.success) {\n        var checkin = e.checkins[0];\n        alert('Success:\\n' +\n            'id: ' + checkin.id + '\\n' +\n            'place: ' + checkin.place.name + '\\n' +\n            'updated_at: ' + checkin.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),s("h3",{attrs:{id:"remove-checkin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove-checkin"}},[e._v("#")]),e._v(" Remove Checkin")]),e._v(" "),s("p",[e._v("This example deletes a checkin and checks the response.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Cloud.Checkins.remove({\n    checkin_id: myCheckinId\n}, function (e) {\n    if (e.success) {\n        alert('Success');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),s("ApiDocs")],1)}),[],!1,null,null,null);n.default=a.exports}}]);