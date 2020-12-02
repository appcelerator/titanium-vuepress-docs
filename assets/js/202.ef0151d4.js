(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{1083:function(e,s,a){"use strict";a.r(s);var r=a(21),n=Object(r.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"modules-cloud-acls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud-acls"}},[e._v("#")]),e._v(" Modules.Cloud.ACLs")]),e._v(" "),a("TypeHeader"),e._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("h3",{attrs:{id:"create-an-acl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-acl"}},[e._v("#")]),e._v(" Create an ACL")]),e._v(" "),a("p",[e._v("This example creates an ACL object and checks the response.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Cloud.ACLs.create({\n    name: 'testACL',\n    reader_ids: readers.ids.join(','),\n    writer_ids: writers.ids.join(','),\n    public_read: \"false\",\n    public_write: \"false\"\n}, function (e) {\n    if (e.success) {\n        alert('Created!');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),a("h3",{attrs:{id:"update-an-acl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-an-acl"}},[e._v("#")]),e._v(" Update an ACL")]),e._v(" "),a("p",[e._v("This example updates an ACL object and checks the response.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Cloud.ACLs.update({\n    name: 'testACL',\n    reader_ids: '',\n    writer_ids: '',\n    public_read: \"true\",\n    public_write: \"true\"\n}, function (e) {\n    if (e.success) {\n        alert('Updated!');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),a("h3",{attrs:{id:"show-an-acl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-an-acl"}},[e._v("#")]),e._v(" Show an ACL")]),e._v(" "),a("p",[e._v("This example requests an ACL object and checks the response.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Cloud.ACLs.show({\n    name: 'testACL'\n}, function (e) {\n    if (e.success) {\n        alert('Shown!');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),a("h3",{attrs:{id:"remove-an-acl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove-an-acl"}},[e._v("#")]),e._v(" Remove an ACL")]),e._v(" "),a("p",[e._v("This example deletes an ACL object and checks the response.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Cloud.ACLs.remove({\n    name: 'testACL'\n}, function (e) {\n    if (e.success) {\n        alert('Removed!');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),a("h3",{attrs:{id:"add-user-to-an-acl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-user-to-an-acl"}},[e._v("#")]),e._v(" Add user to an ACL")]),e._v(" "),a("p",[e._v("This example adds a user to an ACL object and checks the response.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Cloud.ACLs.addUser({\n    name: 'testACL',\n    reader_ids: readers.ids.join(','),\n    writer_ids: writers.ids.join(',')\n}, function (e) {\n    if (e.success) {\n        alert('Added!');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),a("h3",{attrs:{id:"remove-user-from-an-acl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove-user-from-an-acl"}},[e._v("#")]),e._v(" Remove user from an ACL")]),e._v(" "),a("p",[e._v("This example removes a user from an ACL object and checks the response.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Cloud.ACLs.removeUser({\n    name: 'testACL',\n    reader_ids: readers.ids.join(','),\n    writer_ids: writers.ids.join(',')\n}, function (e) {\n    if (e.success) {\n        alert('Removed!');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),a("h3",{attrs:{id:"check-user-permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-user-permissions"}},[e._v("#")]),e._v(" Check user permissions")]),e._v(" "),a("p",[e._v("This example checks a user's permissions in an ACL and checks the response.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Cloud.ACLs.checkUser({\n    name: 'testACL',\n    user_id: userID\n}, function (e) {\n    if (e.success) {\n        alert('Read Permission: ' + e.permission['read permission'] +\n              '\\nWrite Permission: ' + e.permission['write permission']);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),a("ApiDocs")],1)}),[],!1,null,null,null);s.default=n.exports}}]);