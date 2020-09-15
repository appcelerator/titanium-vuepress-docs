(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{1142:function(e,t,o){"use strict";o.r(t);var s=o(21),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"modules-cloud-photos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud-photos"}},[e._v("#")]),e._v(" Modules.Cloud.Photos")]),e._v(" "),o("TypeHeader"),e._v(" "),o("h2",{attrs:{id:"examples"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),o("h3",{attrs:{id:"create-photo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-photo"}},[e._v("#")]),e._v(" Create Photo")]),e._v(" "),o("p",[e._v("This example creates a new photo and checks the response.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("Cloud.Photos.create({\n    photo: Titanium.Filesystem.getFile('photo.jpg')\n}, function (e) {\n    if (e.success) {\n        var photo = e.photos[0];\n        alert('Success:\\n' +\n            'id: ' + photo.id + '\\n' +\n            'filename: ' + photo.filename + '\\n' +\n            'size: ' + photo.size,\n            'updated_at: ' + photo.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),o("h3",{attrs:{id:"show-a-photo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#show-a-photo"}},[e._v("#")]),e._v(" Show a Photo")]),e._v(" "),o("p",[e._v("This example retrieves information about a photo and checks the response.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("Cloud.Photos.show({\n    photo_id: savedPhotoId\n}, function (e) {\n    if (e.success) {\n        var photo = e.photos[0];\n        alert('Success:\\n' +\n            'id: ' + photo.id + '\\n' +\n            'filename: ' + photo.filename + '\\n' +\n            'updated_at: ' + photo.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),o("h3",{attrs:{id:"search-for-photos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#search-for-photos"}},[e._v("#")]),e._v(" Search for Photos")]),e._v(" "),o("p",[e._v("This example searches for photos and checks the response.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("Cloud.Photos.search({\n    user_id: savedUserId\n}, function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.photos.length);\n        for (var i = 0; i < e.photos.length; i++) {\n            var photo = e.photos[i];\n            alert('id: ' + photo.id + '\\n' +\n                  'name: ' + photo.name + '\\n' +\n                  'filename: ' + photo.filename + '\\n' +\n                  'updated_at: ' + photo.updated_at);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),o("h3",{attrs:{id:"query-for-photos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#query-for-photos"}},[e._v("#")]),e._v(" Query for Photos")]),e._v(" "),o("p",[e._v("This example requests a list of photos and checks the response.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("Cloud.Photos.query({\n    page: 1,\n    per_page: 20,\n    where: {\n        coordinates: {\n            '$nearSphere': [-122.23,37.12],\n            '$maxDistance': 0.00126\n        }\n    }\n}, function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.photos.length);\n        for (var i = 0; i < e.photos.length; i++) {\n            var photo = e.photos[i];\n            alert('id: ' + photo.id + '\\n' +\n                  'name: ' + photo.name + '\\n' +\n                  'filename: ' + photo.filename + '\\n' +\n                  'updated_at: ' + photo.updated_at);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),o("h3",{attrs:{id:"update-a-photo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#update-a-photo"}},[e._v("#")]),e._v(" Update a Photo")]),e._v(" "),o("p",[e._v("This example updates a photo and checks the response.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("Cloud.Photos.update({\n    photo_id: savedPhotoId,\n    photo: Titanium.Filesystem.getFile('newphoto.jpg'),\n    tags: 'mountains'\n}, function (e) {\n    if (e.success) {\n        var photo = e.photos[0];\n        alert('Success:\\n' +\n            'id: ' + photo.id + '\\n' +\n            'filename: ' + photo.filename + '\\n' +\n            'updated_at: ' + photo.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),o("h3",{attrs:{id:"remove-a-photo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#remove-a-photo"}},[e._v("#")]),e._v(" Remove a Photo")]),e._v(" "),o("p",[e._v("This example deletes a photo and checks the response.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("Cloud.Photos.remove({\n    photo_id: savedPhotoId\n}, function (e) {\n    if (e.success) {\n        alert('Success');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),o("ApiDocs")],1)}),[],!1,null,null,null);t.default=a.exports}}]);