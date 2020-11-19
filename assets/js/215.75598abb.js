(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{1047:function(e,o,t){"use strict";t.r(o);var n=t(21),c=Object(n.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"modules-cloud-photocollections"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud-photocollections"}},[e._v("#")]),e._v(" Modules.Cloud.PhotoCollections")]),e._v(" "),t("TypeHeader"),e._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("h3",{attrs:{id:"create-photo-collection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-photo-collection"}},[e._v("#")]),e._v(" Create Photo Collection")]),e._v(" "),t("p",[e._v("This example creates a new photo collection and checks the response.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Cloud.PhotoCollections.create({\n    name: 'Party Pictures'\n}, function (e) {\n    if (e.success) {\n        var collection = e.collections[0];\n        alert('Success:\\n' +\n            'id: ' + collection.id + '\\n' +\n            'name: ' + collection.name + '\\n' +\n            'count: ' + collection.counts.total_photos + '\\n'\n            'updated_at: ' + collection.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("h3",{attrs:{id:"show-a-photo-collection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-a-photo-collection"}},[e._v("#")]),e._v(" Show a Photo Collection")]),e._v(" "),t("p",[e._v("This example retrieves information about a photo collection and checks the response.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Cloud.PhotoCollections.show({\n    collection_id: savedPhotoCollectionId\n}, function (e) {\n    if (e.success) {\n        var collection = e.collections[0];\n        alert('Success:\\n' +\n            'id: ' + collection.id + '\\n' +\n            'name: ' + collection.name + '\\n' +\n            'count: ' + collection.counts.total_photos + '\\n'\n            'updated_at: ' + collection.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("h3",{attrs:{id:"search-for-photo-collections"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#search-for-photo-collections"}},[e._v("#")]),e._v(" Search for Photo Collections")]),e._v(" "),t("p",[e._v("This example searches for collections and checks the response.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Cloud.PhotoCollections.search({\n    user_id: savedUserId\n}, function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.collections.length);\n        for (var i = 0; i < e.collections.length; i++) {\n            var collection = e.collections[i];\n            alert('Success:\\n' +\n                'id: ' + collection.id + '\\n' +\n                'name: ' + collection.name + '\\n' +\n                'count: ' + collection.counts.total_photos + '\\n'\n                'updated_at: ' + collection.updated_at);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("h3",{attrs:{id:"show-photo-subcollections"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-photo-subcollections"}},[e._v("#")]),e._v(" Show Photo Subcollections")]),e._v(" "),t("p",[e._v("This example requests a list of photo subcollections and checks the response.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Cloud.PhotoCollections.showSubcollections({\n    page: 1,\n    per_page: 20,\n    collection_id: savedCollectionId\n}, function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.collections.length);\n        for (var i = 0; i < e.collections.length; i++) {\n            var collection = e.collections[i];\n            alert('Success:\\n' +\n                'id: ' + collection.id + '\\n' +\n                'name: ' + collection.name + '\\n' +\n                'count: ' + collection.counts.total_photos + '\\n'\n                'updated_at: ' + collection.updated_at);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("h3",{attrs:{id:"show-photo-collection-photos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-photo-collection-photos"}},[e._v("#")]),e._v(" Show Photo Collection Photos")]),e._v(" "),t("p",[e._v("This example requests a list of photos in a photo collections and checks the response.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Cloud.PhotoCollections.showPhotos({\n    page: 1,\n    per_page: 20,\n    collection_id: savedCollectionId\n}, function (e) {\n    if (e.success) {\n        if (!e.photos) {\n            alert('Success: No photos');\n        } else {\n            alert('Success:\\n' +\n                'Count: ' + e.collections.length);\n            for (var i = 0; i < e.collections.length; i++) {\n                var collection = e.collections[i];\n                alert('Success:\\n' +\n                    'id: ' + collection.id + '\\n' +\n                    'name: ' + collection.name + '\\n' +\n                    'count: ' + collection.counts.total_photos + '\\n'\n                    'updated_at: ' + collection.updated_at);\n            }\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("h3",{attrs:{id:"update-a-photo-collection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-a-photo-collection"}},[e._v("#")]),e._v(" Update a Photo Collection")]),e._v(" "),t("p",[e._v("This example updates a photo collection and checks the response.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Cloud.PhotoCollections.update({\n    collection_id: savedPhotoCollectionId,\n    cover_photo_id: savedPhotoId\n}, function (e) {\n    if (e.success) {\n        var collection = e.collections[0];\n        alert('Success:\\n' +\n            'id: ' + collection.id + '\\n' +\n            'name: ' + collection.name + '\\n' +\n            'count: ' + collection.counts.total_photos + '\\n'\n            'updated_at: ' + collection.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("h3",{attrs:{id:"remove-a-photo-collection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remove-a-photo-collection"}},[e._v("#")]),e._v(" Remove a Photo Collection")]),e._v(" "),t("p",[e._v("This example deletes a photo collection and checks the response.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Cloud.PhotoCollections.remove({\n    collection_id: savedPhotoCollectionId\n}, function (e) {\n    if (e.success) {\n        alert('Success');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("ApiDocs")],1)}),[],!1,null,null,null);o.default=c.exports}}]);