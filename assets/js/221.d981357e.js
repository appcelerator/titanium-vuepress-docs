(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{1054:function(e,n,r){"use strict";r.r(n);var s=r(21),a=Object(s.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"modules-cloud-reviews"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud-reviews"}},[e._v("#")]),e._v(" Modules.Cloud.Reviews")]),e._v(" "),r("TypeHeader"),e._v(" "),r("h2",{attrs:{id:"examples"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),r("h3",{attrs:{id:"create-review"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-review"}},[e._v("#")]),e._v(" Create Review")]),e._v(" "),r("p",[e._v("This example creates a new review and checks the response.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("Cloud.Reviews.create({\n    post_id: savedPostId,\n    rating: 1,\n    content: 'Good'\n}, function (e) {\n    if (e.success) {\n        var review = e.reviews[0];\n        alert('Success:\\n' +\n            'id: ' + review.id + '\\n' +\n            'rating: ' + review.rating + '\\n' +\n            'content: ' + review.content + '\\n' +\n            'updated_at: ' + review.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),r("h3",{attrs:{id:"show-a-review"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#show-a-review"}},[e._v("#")]),e._v(" Show a Review")]),e._v(" "),r("p",[e._v("This example retrieves information about a review and checks the response.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("Cloud.Reviews.show({\n    post_id: savedPostId,\n    review_id: savedReviewId\n}, function (e) {\n    if (e.success) {\n        var review = e.reviews[0];\n        alert('Success:\\n' +\n            'id: ' + review.id + '\\n' +\n            'rating: ' + review.rating + '\\n' +\n            'content: ' + review.content + '\\n' +\n            'updated_at: ' + review.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),r("h3",{attrs:{id:"query-for-reviews"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#query-for-reviews"}},[e._v("#")]),e._v(" Query for Reviews")]),e._v(" "),r("p",[e._v("This example requests a list of reviews and checks the response.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("Cloud.Reviews.query({\n    page: 1,\n    per_page: 20,\n    where: {\n        rating: { '$gt': 5.0 }\n    }\n}, function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.reviews.length);\n        for (var i = 0; i < e.reviews.length; i++) {\n            var review = e.reviews[i];\n            alert('id: ' + review.id + '\\n' +\n                'id: ' + review.id + '\\n' +\n                'rating: ' + review.rating + '\\n' +\n                'content: ' + review.content + '\\n' +\n                'updated_at: ' + review.updated_at);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),r("h3",{attrs:{id:"update-a-review"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#update-a-review"}},[e._v("#")]),e._v(" Update a Review")]),e._v(" "),r("p",[e._v("This example updates a review and checks the response.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("Cloud.Reviews.update({\n    post_id: savedPostId,\n    review_id: savedReviewId,\n    rating: 100,\n    content: 'Very good!'\n}, function (e) {\n    if (e.success) {\n        var review = e.reviews[0];\n        alert('Success:\\n' +\n            'id: ' + review.id + '\\n' +\n            'rating: ' + review.rating + '\\n' +\n            'content: ' + review.content + '\\n' +\n            'updated_at: ' + review.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),r("h3",{attrs:{id:"remove-a-review"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#remove-a-review"}},[e._v("#")]),e._v(" Remove a Review")]),e._v(" "),r("p",[e._v("This example deletes a review and checks the response.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("Cloud.Reviews.remove({\n    post_id: savedPostId,\n    review_id: savedReviewId\n}, function (e) {\n    if (e.success) {\n        alert('Success');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),r("ApiDocs")],1)}),[],!1,null,null,null);n.default=a.exports}}]);