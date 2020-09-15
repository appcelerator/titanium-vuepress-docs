(window.webpackJsonp=window.webpackJsonp||[]).push([[584],{1902:function(e,a,t){"use strict";t.r(a);var r=t(21),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"titanium-app-windows-backgroundservice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#titanium-app-windows-backgroundservice"}},[e._v("#")]),e._v(" Titanium.App.Windows.BackgroundService")]),e._v(" "),t("TypeHeader"),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("BackgroundService provides a basic way to register background tasks.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("// Clear all tasks that is associated with this app\nTi.App.Windows.BackgroundService.unregisterAllTasks();\n\n// Register new task that is invoked for each 15 minutes interval.\nvar task = Ti.App.Windows.BackgroundService.registerTimerTask('ComExampleTest.BackgroundServiceTask', 15, false);\nif (task) {\n  Ti.API.info(\"Background task is registered: task id=\" + task.taskId);\n}\n")])])]),t("p",[e._v("For more information see "),t("a",{attrs:{href:"http://docs.appcelerator.com/platform/latest/#!/guide/Windows_Background_Service_Quick_Start",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows Background Service Quick Start"),t("OutboundLink")],1)]),e._v(" "),t("ApiDocs")],1)}),[],!1,null,null,null);a.default=s.exports}}]);