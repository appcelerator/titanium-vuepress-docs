(window.webpackJsonp=window.webpackJsonp||[]).push([[618],{1831:function(e,o,t){"use strict";t.r(o);var r=t(21),n=Object(r.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"titanium-network-bonjourbrowser"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#titanium-network-bonjourbrowser"}},[e._v("#")]),e._v(" Titanium.Network.BonjourBrowser")]),e._v(" "),t("TypeHeader"),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("Use the "),t("type-link",{attrs:{type:"Titanium.Network.createBonjourBrowser"}},[e._v("Titanium.Network.createBonjourBrowser")]),e._v(" method to create a "),t("code",[e._v("BonjourBrowser")]),e._v(" instance.")],1),e._v(" "),t("p",[e._v("If your application publishes Bonjour services itself, that service will be discovered\nby the browser if necessary; be prepared to perform a check if you do not want to list\nlocal services as available.  Bonjour service browsing is an asynchronous operation,\nmeaning that you should be extremely careful when caching values from the "),t("code",[e._v("services")]),e._v("\nproperty returned by the "),t("code",[e._v("updatedservices")]),e._v(" event.  In particular, if you maintain a\nlocal copy of available services and a user tries to connect to one, you should be prepared\nto handle failures gracefully; the next "),t("code",[e._v("updatedservices")]),e._v(" event should provide the new\nservices list, but you should not rely on it being delivered before user input.  When\na window which uses Bonjour browsing is closed, if you do not want to continue searching,\nyou must call the stop() method.")]),e._v(" "),t("ApiDocs")],1)}),[],!1,null,null,null);o.default=n.exports}}]);