(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{1165:function(e,s,a){"use strict";a.r(s);var n=a(21),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"modules-cloud-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud-messages"}},[e._v("#")]),e._v(" Modules.Cloud.Messages")]),e._v(" "),a("TypeHeader"),e._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("h3",{attrs:{id:"create-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-message"}},[e._v("#")]),e._v(" Create Message")]),e._v(" "),a("p",[e._v("This example creates a new message and checks the response.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Cloud.Messages.create({\n    to_ids: toSet.ids.join(','),\n    body: 'Hello World',\n    subject: 'Test Message'\n}, function (e) {\n    if (e.success) {\n        var message = e.messages[0];\n        alert('Success:\\n' +\n            'id: ' + message.id + '\\n' +\n            'subject: ' + message.subject + '\\n' +\n            'body: ' + message.body + '\\n' +\n            'updated_at: ' + message.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),a("h3",{attrs:{id:"reply-to-a-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reply-to-a-message"}},[e._v("#")]),e._v(" Reply to a Message")]),e._v(" "),a("p",[e._v("This example replies to a message and checks the response.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Cloud.Messages.reply({\n    message_id: savedMessageId,\n    body: 'Welcome'\n}, function (e) {\n    if (e.success) {\n        var message = e.messages[0];\n        alert('Success:\\n' +\n            'id: ' + message.id + '\\n' +\n            'subject: ' + message.subject + '\\n' +\n            'body: ' + message.body + '\\n' +\n            'updated_at: ' + message.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),a("h3",{attrs:{id:"show-a-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-a-message"}},[e._v("#")]),e._v(" Show a Message")]),e._v(" "),a("p",[e._v("This example retrieves information about a message and checks the response.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Cloud.Messages.show({\n    message_id: savedMessageId\n}, function (e) {\n    if (e.success) {\n        var message = e.messages[0];\n        alert('Success:\\n' +\n            'id: ' + message.id + '\\n' +\n            'subject: ' + message.subject + '\\n' +\n            'body: ' + message.body + '\\n' +\n            'updated_at: ' + message.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),a("h3",{attrs:{id:"show-inbox-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-inbox-messages"}},[e._v("#")]),e._v(" Show Inbox Messages")]),e._v(" "),a("p",[e._v("This example requests a list of messages in the inbox and checks the response.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Cloud.Messages.showInbox(function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.messages.length);\n        for (var i = 0; i < e.messages.length; i++) {\n            var message = e.messages[i];\n            alert('Success:\\n' +\n                'id: ' + message.id + '\\n' +\n                'subject: ' + message.subject + '\\n' +\n                'body: ' + message.body + '\\n' +\n                'updated_at: ' + message.updated_at);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),a("h3",{attrs:{id:"show-sent-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-sent-messages"}},[e._v("#")]),e._v(" Show Sent Messages")]),e._v(" "),a("p",[e._v("This example requests a list of messages that have been sent and checks the response.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Cloud.Messages.showSent(function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.messages.length);\n        for (var i = 0; i < e.messages.length; i++) {\n            var message = e.messages[i];\n            alert('Success:\\n' +\n                'id: ' + message.id + '\\n' +\n                'subject: ' + message.subject + '\\n' +\n                'body: ' + message.body + '\\n' +\n                'updated_at: ' + message.updated_at);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),a("h3",{attrs:{id:"show-message-threads"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-message-threads"}},[e._v("#")]),e._v(" Show Message Threads")]),e._v(" "),a("p",[e._v("This example requests a list of message threads and checks the response.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Cloud.Messages.showThreads(function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.messages.length);\n        for (var i = 0; i < e.messages.length; i++) {\n            var message = e.messages[i];\n            alert('Success:\\n' +\n                'id: ' + message.id + '\\n' +\n                'thread id: ' + message.thread_id + '\\n' +\n                'subject: ' + message.subject + '\\n' +\n                'body: ' + message.body + '\\n' +\n                'updated_at: ' + message.updated_at);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),a("h3",{attrs:{id:"show-thread-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-thread-messages"}},[e._v("#")]),e._v(" Show Thread Messages")]),e._v(" "),a("p",[e._v("This example requests a list of messages in a thread and checks the response.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Cloud.Messages.showThread({\n    thread_id: savedThreadId\n}, function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.messages.length);\n        for (var i = 0; i < e.messages.length; i++) {\n            var message = e.messages[i];\n            alert('Success:\\n' +\n                'id: ' + message.id + '\\n' +\n                'thread id: ' + message.thread_id + '\\n' +\n                'subject: ' + message.subject + '\\n' +\n                'body: ' + message.body + '\\n' +\n                'updated_at: ' + message.updated_at);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),a("h3",{attrs:{id:"remove-a-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove-a-message"}},[e._v("#")]),e._v(" Remove a Message")]),e._v(" "),a("p",[e._v("This example deletes a message and checks the response.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Cloud.Messages.remove({\n    message_id: savedMessageId\n}, function (e) {\n    if (e.success) {\n        alert('Removed');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),a("h3",{attrs:{id:"remove-thread-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove-thread-messages"}},[e._v("#")]),e._v(" Remove Thread Messages")]),e._v(" "),a("p",[e._v("This example deletes all messages in a thread and checks the response.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Cloud.Messages.removeThread({\n    thread_id: savedThreadId\n}, function (e) {\n    if (e.success) {\n        alert('Removed');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),a("ApiDocs")],1)}),[],!1,null,null,null);s.default=t.exports}}]);