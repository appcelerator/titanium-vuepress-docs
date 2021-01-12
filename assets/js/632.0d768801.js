(window.webpackJsonp=window.webpackJsonp||[]).push([[632],{1672:function(e,r,t){"use strict";t.r(r);var a=t(21),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"titanium-app-windows-backgroundservicetask"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#titanium-app-windows-backgroundservicetask"}},[e._v("#")]),e._v(" Titanium.App.Windows.BackgroundServiceTask")]),e._v(" "),t("TypeHeader"),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("BackgroundServiceTask represents background task for Windows.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("// Register new task that is invoked for each 15 minutes interval.\nvar task = Ti.App.Windows.BackgroundService.registerTimerTask('ComExampleTest.BackgroundServiceTask', 15, false);\nif (task) {\n  Ti.API.info(\"Background task is registered: task id=\" + task.taskId);\n\n  //\n  // Unregister task. Equivalent to \n  //\n  // Ti.App.Windows.BackgroundService.unregisterTask(task);\n  // or\n  // Ti.App.Windows.BackgroundService.unregisterTask(task.taskId);\n  //\n  task.unregister();\n\n}\n")])])]),t("p",[e._v("For more information see "),t("a",{attrs:{href:"http://docs.appcelerator.com/platform/latest/#!/guide/Windows_Background_Service_Quick_Start",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows Background Service Quick Start"),t("OutboundLink")],1)]),e._v(" "),t("ApiDocs")],1)}),[],!1,null,null,null);r.default=s.exports}}]);