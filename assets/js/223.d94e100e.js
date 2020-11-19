(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{1109:function(s,e,t){"use strict";t.r(e);var a=t(21),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"modules-cloud-statuses"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud-statuses"}},[s._v("#")]),s._v(" Modules.Cloud.Statuses")]),s._v(" "),t("TypeHeader"),s._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),t("h3",{attrs:{id:"create-a-status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-status"}},[s._v("#")]),s._v(" Create a Status")]),s._v(" "),t("p",[s._v("This example creates a status and checks the response.")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("Cloud.Statuses.create({\n    place_id: myPlaceId,\n    message: 'What a great view!',\n    photo: Titanium.Filesystem.getFile('photo.jpg')\n}, function (e) {\n    if (e.success) {\n        var status = e.statuses[0];\n        alert('Success:\\n' +\n            'id: ' + status.id + '\\n' +\n            'place: ' + status.place.name);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("h3",{attrs:{id:"search-status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#search-status"}},[s._v("#")]),s._v(" Search Status")]),s._v(" "),t("p",[s._v("This example requests information about a user's status and checks the response.")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("Cloud.Statuses.search({\n    user_id: someUserId\n}, function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.statuses.length);\n        for (var i = 0; i < e.statuses.length; i++) {\n            var status = e.statuses[i];\n            alert('id: ' + status.id + '\\n' +\n                  'message: ' + status.message + '\\n' +\n                  'updated_at: ' + status.updated_at);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("h3",{attrs:{id:"query-status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-status"}},[s._v("#")]),s._v(" Query Status")]),s._v(" "),t("p",[s._v("This example requests information about statuses and checks the response.")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("Cloud.Statuses.query({\n    page: 1,\n    per_page: 20,\n    order: '-updated_at'\n}, function (e) {\n    if (e.success) {\n        for (var i = 0; i < e.statuses.length; i++) {\n            var status = e.statuses[i];\n            alert('Success:\\n' +\n               'id: ' + status.id + '\\n' +\n               'message: ' + status.message + '\\n' +\n               'updated_at: ' + status.updated_at);\n         }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("ApiDocs")],1)}),[],!1,null,null,null);e.default=n.exports}}]);