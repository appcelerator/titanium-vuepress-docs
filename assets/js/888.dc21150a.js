(window.webpackJsonp=window.webpackJsonp||[]).push([[888],{1673:function(e,t,a){"use strict";a.r(t);var o=a(21),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"troubleshooting-enabling-soasta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-enabling-soasta"}},[e._v("#")]),e._v(" Troubleshooting enabling SOASTA")]),e._v(" "),a("p",[e._v("Along with the Studio log, after enabling Debug level, go to All in Preferences > Troubleshooting and then recreate the scenario.")]),e._v(" "),a("p",[e._v("When a project has to be enabled for test module, the following steps are performed by Studio")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Studio downloads the latest version of SOASTA plugin:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("It verifies whether the latest version of test plugin is already available under plugins folder of Titanium SDK Root (default is "),a("code",[e._v("/Users/<user>/Library/Application Support/Titanium/plugins")]),e._v("). If the latest version is not available, then it downloads the latest test plugin to plugins folder of Titanium SDK root.")])]),e._v(" "),a("li",[a("p",[e._v("The URL is available in 'Test Service Host/URL' of Diagnostic tests, but the default url is "),a("a",{attrs:{href:"http://appctest-2.appcelerator.com/concerto/downloads/mobile/MakeAppTouchTestable.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://appctest-2.appcelerator.com/concerto/downloads/mobile/MakeAppTouchTestable.zip"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("The diagnostic tests also indicate whether the latest version of Soasta plugin is installed on the machine, something similar to : "),a("code",[e._v("Test Service Module Required version: 6937.16. Is Installed: false")])])]),e._v(" "),a("li",[a("p",[e._v("If the download of test plugin fails due to network connectivity or proxy issues, then it can be verified whether the latest version is available under "),a("code",[e._v("/Users/<user>/Library/Application Support/Titanium/plugins/com.appcelerator.test/versions")])])])])]),e._v(" "),a("li",[a("p",[e._v("Execute a jar file to enable the app with the latest version of SOASTA plugin :")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("If the latest version is available, then the failure would have happened while enabling the app with soasta plugin. The Studio log contains a command similar to")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('/System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home/bin/java" "-jar" "/Users/<user>/Library/Application Support/Titanium/plugins/com.appcelerator.test/versions/6937.16/MakeAppTouchTestable/MakeAppTouchTestable.jar" "-project" "/path/to/project" "-url" "https://appctest-2.appcelerator.com/concerto" "-username" "user@appcelerator.com/id" "-password" "**********" "-appobjectname" "project_guid" "-overwriteapp\n')])])])]),e._v(" "),a("li",[a("p",[e._v("Copy the command from the Studio log and then fill in the password param with original password and get the output of that command on terminal. This would help us to determine the root cause of the failure.")])])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);