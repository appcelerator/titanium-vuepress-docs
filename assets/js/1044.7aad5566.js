(window.webpackJsonp=window.webpackJsonp||[]).push([[1044],{1525:function(t,e,a){"use strict";a.r(e);var i=a(21),o=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"migrate-a-titanium-application-to-the-platform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-a-titanium-application-to-the-platform"}},[t._v("#")]),t._v(" Migrate a Titanium Application to the Platform")]),t._v(" "),a("h2",{attrs:{id:"titanium-community-analytics-acs-and-push-and-node-acs-deactivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-community-analytics-acs-and-push-and-node-acs-deactivation"}},[t._v("#")]),t._v(" Titanium Community Analytics, ACS and Push, and Node.ACS Deactivation")]),t._v(" "),a("p",[t._v("On October 3, 2016, Appcelerator shut down its community analytics, ACS & Push, and Node.ACS servers.")]),t._v(" "),a("p",[t._v("For continued cloud services, please login at "),a("a",{attrs:{href:"https://billing.axway.com/billing",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://billing.axway.com/billing"),a("OutboundLink")],1),t._v(" and adjust to your account as needed.")]),t._v(" "),a("h2",{attrs:{id:"migrate-a-titanium-application-to-the-platform-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-a-titanium-application-to-the-platform-2"}},[t._v("#")]),t._v(" Migrate a Titanium Application to the Platform")]),t._v(" "),a("p",[t._v("Before you can use your Titanium apps with the Platform, you'll need to import them. Don't worry, it's quick and painless!")]),t._v(" "),a("h3",{attrs:{id:"first-make-a-backup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#first-make-a-backup"}},[t._v("#")]),t._v(" First, make a backup!")]),t._v(" "),a("p",[t._v("It's always a good idea to make a backup of your project or make sure you have a clean Git project before continuing with changes below. The import process will modify the project's "),a("code",[t._v("tiapp.xml")]),t._v(" file.")]),t._v(" "),a("p",[t._v("The import process will create a new GUID for your application and attempt to activate Platform services unless it is an existing Platform app. The new GUID is required to send analytic data to the Platform servers. You can use either "),a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/"}},[t._v("Appcelerator Studio")]),t._v(" or "),a("RouterLink",{attrs:{to:"/guide/Appcelerator_CLI/"}},[t._v("Appcelerator CLI")]),t._v(" to import your existing Titanium app.")],1),t._v(" "),a("h3",{attrs:{id:"replace-or-keep-existing-acs-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replace-or-keep-existing-acs-keys"}},[t._v("#")]),t._v(" Replace or keep existing ACS keys")]),t._v(" "),a("p",[t._v("By default, the import process will generate new keys for Arrow DB services in the "),a("code",[t._v("tiapp.xml")]),t._v(" file. If the application was already integrated with ACS for push notifications and/or data, answer no if asked if you want to replace the keys or change the "),a("code",[t._v("acs-api-key-*")]),t._v(" keys back when it is done.")]),t._v(" "),a("h3",{attrs:{id:"using-appcelerator-studio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-appcelerator-studio"}},[t._v("#")]),t._v(" Using Appcelerator Studio")]),t._v(" "),a("p",[t._v("Follow these steps and your app will be imported into the Platform.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("First, verify that you have "),a("strong",[t._v("Appcelerator Studio 4.x or later")]),t._v(" installed. If you are using Titanium Studio, this procedure will not work.")])]),t._v(" "),a("li",[a("p",[t._v("On the main dashboard, click the "),a("strong",[t._v("Import an existing project")]),t._v(" button.")])]),t._v(" "),a("li",[a("p",[t._v("You will be presented with an Import dialog. Select "),a("strong",[t._v("Appcelerator")]),t._v(" > "),a("strong",[t._v("Existing Mobile Project")]),t._v(", then click the "),a("strong",[t._v("Next")]),t._v(" "),a("strong",[t._v(">")]),t._v(" button.")])])]),t._v(" "),a("h3",{attrs:{id:"using-appcelerator-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-appcelerator-cli"}},[t._v("#")]),t._v(" Using Appcelerator CLI")]),t._v(" "),a("p",[t._v("Follow these steps and your app will be imported into the Platform.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("First, verify that you have the "),a("RouterLink",{attrs:{to:"/guide/Appcelerator_CLI/"}},[t._v("Appcelerator CLI")]),t._v(" installed. If you are using the Titanium CLI, this procedure will not work.")],1)]),t._v(" "),a("li",[a("p",[t._v("Once installed, you can import your existing Titanium app by running the following in your console from the Titanium project directory: "),a("code",[t._v("appc new --import")])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);