(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{1067:function(e,t,s){"use strict";s.r(t);var r=s(21),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"modules-cloud"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud"}},[e._v("#")]),e._v(" Modules.Cloud")]),e._v(" "),s("TypeHeader"),e._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),s("p",[e._v("Appcelerator DB and Arrow Push provides a wide array of automatically-scaled data storage\nand web services, such as user logins, photo uploads, checkins, status updates, and push\nnotifications, without the need to learn multiple third-party SDKs or do any\nserver-side programming. Remote calls to ArrowDB are done using REST APIs, which may be used with any\nclient technology that supports HTTP.")]),e._v(" "),s("p",[e._v("The Cloud module's specialized objects, such as "),s("code",[e._v("Users")]),e._v(", make accessing\nArrowDB as simple as using any of Titanium's other APIs, due to their familiar and intuitive API schemas.\nYou can also use the "),s("type-link",{attrs:{type:"Modules.Cloud.sendRequest"}},[e._v("Modules.Cloud.sendRequest")]),e._v(" method to invoke\nArrowDB REST APIs directly. This approach requires some additional configuration for each method call,\nbut it lets you use new ArrowDB APIs as soon as they are available.")],1),e._v(" "),s("p",[e._v("For a more detailed overview of ArrowDB and how to configure an application to use it, refer to the\n"),s("a",{attrs:{href:"https://docs.appcelerator.com/platform/latest/#!/guide/Integrate_with_Mobile_Backend_Services",target:"_blank",rel:"noopener noreferrer"}},[e._v("Integrate with Mobile Backend Services"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"using-the-modules-cloud-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-modules-cloud-module"}},[e._v("#")]),e._v(" Using the Modules.Cloud Module")]),e._v(" "),s("p",[e._v("The Modules.Cloud module is bundled with the Titanium SDK as an optional CommonJS module.\nTo use it, import the module with "),s("code",[e._v("require('ti.cloud')")]),e._v(", and then begin calling the methods\non its various objects. For example, the following code uses the "),s("code",[e._v("Modules.Cloud.Users.login")]),e._v("\nmethod to login the user with the specified login and password:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("var Cloud = require('ti.cloud');\n\nCloud.Users.login({\n    login: 'test@mycompany.com',\n    password: 'test_password'\n}, function (e) {\n    if (e.success) {\n        var user = e.users[0];\n        alert('Success:\\n' +\n            'id: ' + user.id + '\\n' +\n            'sessionId: ' + Cloud.sessionId + '\\n' +\n            'first name: ' + user.first_name + '\\n' +\n            'last name: ' + user.last_name);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),s("h3",{attrs:{id:"invoking-arrowdb-rest-apis-directly-with-sendrequest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#invoking-arrowdb-rest-apis-directly-with-sendrequest"}},[e._v("#")]),e._v(" Invoking ArrowDB REST APIs Directly with sendRequest()")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("Modules.Cloud.sendRequest")]),e._v(" method lets you directly invoke ArrowDB REST APIs. The following example,\nequivalent to the previous one, invokes the "),s("a",{attrs:{href:"https://docs.appcelerator.com/arrowdb/latest/#!/api/Users-method-login",target:"_blank",rel:"noopener noreferrer"}},[e._v("users/login.json"),s("OutboundLink")],1),e._v("\nmethod directly to login a user.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Cloud.sendRequest({\n    url : \"users/login.json\",\n    method : \"POST\",\n    data : {\n        login : 'test@mycompany.com',\n        password : 'test_password'\n    }\n}, function(e) {// The callback called when the request completes\n    if (e.success) {\n        var user = e.users[0];\n        alert('Success:\\n' + \n            'id: ' + user.id + '\\n' + \n            'sessionId: ' + Cloud.sessionId + '\\n' + \n            'first name: ' + user.first_name + '\\n' + \n            'last name: ' + user.last_name);\n    } else {\n        alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));\n    }\n});     \n")])])]),s("h3",{attrs:{id:"tiapp-xml-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tiapp-xml-properties"}},[e._v("#")]),e._v(" tiapp.xml Properties")]),e._v(" "),s("p",[e._v("Studio will create a pair of API keys (Development and Production) for each Titanium\napplication depending on the user preference specified when creating the proejct. These keys\nwill be stored in the "),s("code",[e._v("tiapp.xml")]),e._v(" file.  One of the keys will be used during application\nbuilds depending on the build type (development or production).")]),e._v(" "),s("p",[e._v("The supported properties in the "),s("code",[e._v("tiapp.xml")]),e._v(" file are:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('<property name="acs-api-key-development" type="string">YOUR DEVELOPMENT API KEY HERE</property>\n<property name="acs-api-key-production" type="string">YOUR PRODUCTION API KEY HERE</property>\n<property name="acs-api-key" type="string">YOUR API KEY HERE</property>\n')])])]),s("p",[e._v("If a deployment-specific setting is provided (production or development) then that value will\nbe used for the current deployment environment.")]),e._v(" "),s("p",[e._v("There is also an optional setting to allow you to change the base URL for ArrowDB requests. You\nwill most likely never need to specify this. It can be specified deployment-specific, or\ngeneric:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('<property name="acs-base-url-development" type="string">DEVELOPMENT API URL HERE</property>\n<property name="acs-base-url-production" type="string">PRODUCTION API URL HERE</property>\n<property name="acs-base-url" type="string">API URL HERE</property>\n')])])]),s("p",[e._v("By default, Ti.Cloud always uses SSL for communicating with the ArrowDB servers. This behavior can be overridden\nby setting the URLs with their non-SSL counterpart.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('<property name="acs-base-url" type="string">https://api.cloud.appcelerator.com</property>\n')])])]),s("p",[e._v("To disable SSL, add this line to the application code:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Cloud.useSecure = false;\n")])])]),s("ApiDocs")],1)}),[],!1,null,null,null);t.default=o.exports}}]);