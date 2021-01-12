(window.webpackJsonp=window.webpackJsonp||[]).push([[800],{1308:function(e,t,o){"use strict";o.r(t);var a=o(21),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"alloy-backbone-migration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#alloy-backbone-migration"}},[e._v("#")]),e._v(" Alloy Backbone Migration")]),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("Alloy 1.6.0 introduces support for Backbone 1.1.2. Currently, Alloy uses Backbone 0.9.2 to support its Model and Collection objects. This guide covers the changes from Backbone 0.9.2 to 1.1.2 and the modifications you may need to update your application. Note that only changes to the Backbone Collection, Event and Model APIs are discussed in this document. The other APIs (Routers, History and View) are not discussed since Alloy does not make direct use of them.")]),e._v(" "),o("p",[e._v("Due to breaking changes from Backbone 0.9.2 to 1.1.2, Alloy still uses Backbone 0.9.2 as its default Model and Collection implementation. You will need to update the configuration file to use the newer Backbone library, then update your application to fix the breaking behavior changes and take advantage of the new Backbone features.")]),e._v(" "),o("p",[e._v("In the future, Backbone 1.1.2 will become the default and 0.9.2 support will be deprecated and eventually removed.")]),e._v(" "),o("h3",{attrs:{id:"alloy-1-10-12-release"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#alloy-1-10-12-release"}},[e._v("#")]),e._v(" Alloy 1.10.12 release")]),e._v(" "),o("p",[e._v("Alloy 1.10.12 adds support for Backbone 1.3.3. However, due to breaking changes in Backbone, 0.9.2 will remain the default version for the 1.10.12 release.")]),e._v(" "),o("p",[e._v("To use Backbone 1.3.3. Add following in "),o("code",[e._v("config.json")])]),e._v(" "),o("p",[o("strong",[e._v("config.json")])]),e._v(" "),o("div",{staticClass:"language-json extra-class"},[o("pre",{pre:!0,attrs:{class:"language-json"}},[o("code",[o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"backbone"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1.3.3"')]),e._v("\n")])])]),o("p",[e._v("Supported versions of Backbone for Alloy 1.10.12 are 0.9.2, 1.1.2, 1.3.3.")]),e._v(" "),o("h2",{attrs:{id:"setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),o("p",[e._v("To use Backbone 1.1.2 to support Alloy Model and Collections objects, open the project's "),o("code",[e._v("./app/config.json")]),e._v(" file and add the "),o("code",[e._v("backbone")]),e._v(" key to the to the file with the value set to "),o("code",[e._v("1.1.2")]),e._v(". You may also set this value to "),o("code",[e._v("0.9.2")]),e._v(" to force support of Backbone 0.9.2. In the example below, the boiler plate configuration file is modified to use Backbone 1.1.2.")]),e._v(" "),o("p",[o("strong",[e._v("app/config.json")])]),e._v(" "),o("div",{staticClass:"language-json extra-class"},[o("pre",{pre:!0,attrs:{class:"language-json"}},[o("code",[o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"global"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"env:development"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"env:test"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"env:production"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"os:android"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"os:blackberry"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"os:ios"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"os:mobileweb"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"dependencies"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"backbone"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1.1.2"')]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),o("h2",{attrs:{id:"summary-of-changes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#summary-of-changes"}},[e._v("#")]),e._v(" Summary of Changes")]),e._v(" "),o("p",[e._v("The following sections summarize most of the changes that affect the behavior of an application. For a full list of Backbone changes, see the "),o("a",{attrs:{href:"http://backbonejs.org/#changelog",target:"_blank",rel:"noopener noreferrer"}},[e._v("Backbone Changelog"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"collection-apis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#collection-apis"}},[e._v("#")]),e._v(" Collection APIs")]),e._v(" "),o("h4",{attrs:{id:"fetch-method-behavior-change"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fetch-method-behavior-change"}},[e._v("#")]),e._v(" Fetch Method Behavior Change")]),e._v(" "),o("p",[e._v("Backbone Collection objects no longer emit the "),o("code",[e._v("reset")]),e._v(" event after a "),o("code",[e._v("fetch()")]),e._v(" call, which means data-bound views may not update automatically. "),o("strong",[e._v("This could break existing apps.")]),e._v(" To use old functionality, pass "),o("code",[e._v("{reset: true}")]),e._v(" when calling "),o("code",[e._v("fetch()")]),e._v(" or extend the Collection class. The following sample code extends the Collection and has been added to the new model template. Note that you will need to comment out the code in the new model template.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("exports.definition = {\n    config: {\n        // Model configuration\n    },\n    extendModel: function(Model) {\n        _.extend(Model.prototype, {\n            // extended functions and properties go here\n        });\n        return Model;\n    },\n    extendCollection: function(Collection) {\n        _.extend(Collection.prototype, {\n            // For Backbone v1.1.2, uncomment the following to override the\n            // fetch method to account for a breaking change in Backbone.\n            /*\n            fetch: function(options) {\n                options = options ? _.clone(options) : {};\n                options.reset = true;\n                return Backbone.Collection.prototype.fetch.call(this, options);\n            }\n            */\n        });\n        return Collection;\n    }\n};\n")])])]),o("h4",{attrs:{id:"new-set-method"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new-set-method"}},[e._v("#")]),e._v(" New Set Method")]),e._v(" "),o("p",[e._v("If you want to smartly update the contents of a Collection (adding new models, removing missing ones, and merging those already present), you now call "),o("code",[e._v("set()")]),e._v(" a similar operation to calling "),o("code",[e._v("set()")]),e._v(" on a Model. This is now the default when you call "),o("code",[e._v("fetch()")]),e._v(" on a collection. To get the old behavior, pass "),o("code",[e._v("{reset: true}")]),e._v(" to the "),o("code",[e._v("fetch()")]),e._v(" method.")]),e._v(" "),o("h4",{attrs:{id:"return-value-for-methods"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#return-value-for-methods"}},[e._v("#")]),e._v(" Return Value for Methods")]),e._v(" "),o("p",[e._v("The return values of Collection's "),o("code",[e._v("add()")]),e._v(", "),o("code",[e._v("push()")]),e._v(", "),o("code",[e._v("remove()")]),e._v(", "),o("code",[e._v("reset()")]),e._v(" and "),o("code",[e._v("shift()")]),e._v(" methods return the changed (added, removed or updated) model or list of models, instead of "),o("code",[e._v("this")]),e._v(".")]),e._v(" "),o("h4",{attrs:{id:"add-method"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-method"}},[e._v("#")]),e._v(" Add Method")]),e._v(" "),o("p",[e._v("When invoking "),o("code",[e._v("add()")]),e._v(" on a collection, passing "),o("code",[e._v("{merge: true}")]),e._v(" will now cause duplicate models to have their attributes merged in to the existing models, instead of being ignored.")]),e._v(" "),o("p",[e._v("To improve the performance of "),o("code",[e._v("add()")]),e._v(", "),o("code",[e._v("options.index")]),e._v(" will no longer be set in the "),o("code",[e._v("add")]),e._v(" event callback. Use "),o("code",[e._v("collection.indexOf(model)")]),e._v(" to retrieve the index of a model.")]),e._v(" "),o("h3",{attrs:{id:"event-apis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-apis"}},[e._v("#")]),e._v(" Event APIs")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("All "),o("code",[e._v("i")]),e._v(" "),o("code",[e._v("nvalid")]),e._v(" events now pass consistent arguments. First the model in question, then the "),o("code",[e._v("error")]),e._v(" object, then "),o("code",[e._v("options")]),e._v(".")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("Collection.sort()")]),e._v(" now triggers a "),o("code",[e._v("sort")]),e._v(" event, instead of a "),o("code",[e._v("reset")]),e._v(" event.")])]),e._v(" "),o("li",[o("p",[e._v("Both "),o("code",[e._v("sync")]),e._v(" and "),o("code",[e._v("error")]),e._v(" events within "),o("code",[e._v("Backbone.sync()")]),e._v(" are now triggered regardless of the existence of success or error callbacks.")])]),e._v(" "),o("li",[o("p",[e._v("While listening to a "),o("code",[e._v("reset")]),e._v(" event, the list of previous models is now available in "),o("code",[e._v("options.previousModels")]),e._v(".")])])]),e._v(" "),o("div",{staticClass:"warning custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),o("p",[e._v("The new Event methods "),o("code",[e._v("listenTo")]),e._v(" and "),o("code",[e._v("stopListening")]),e._v(" is meant for Backbone View objects to listen to Model and Collection events. These APIs will not work with an Alloy application.")])]),e._v(" "),o("h3",{attrs:{id:"model-apis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#model-apis"}},[e._v("#")]),e._v(" Model APIs")]),e._v(" "),o("h4",{attrs:{id:"validation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#validation"}},[e._v("#")]),e._v(" Validation")]),e._v(" "),o("p",[e._v("Model validation is now only enforced with the "),o("code",[e._v("save()")]),e._v(" method. Previously, models were also validated with the "),o("code",[e._v("set()")]),e._v(" method. To force validation when the "),o("code",[e._v("set()")]),e._v(" method is called, pass "),o("code",[e._v("{validate: true}")]),e._v(" to the method or extend the Model class.")]),e._v(" "),o("p",[e._v('Validation occurs even during "silent" changes (passing '),o("code",[e._v("{silent: true}")]),e._v(" to methods). Previously, it would not.")]),e._v(" "),o("p",[e._v("Failed validations return the "),o("code",[e._v("invalid")]),e._v(" event. Previously, a failed model validation would return the "),o("code",[e._v("error")]),e._v(" event.")]),e._v(" "),o("div",{staticClass:"warning custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),o("p",[e._v("To validate Model objects, implement the "),o("code",[e._v("validate()")]),e._v(" method in the "),o("code",[e._v("extendModel")]),e._v(" key of the model configuration file.")])]),e._v(" "),o("h4",{attrs:{id:"other-changes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#other-changes"}},[e._v("#")]),e._v(" Other Changes")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Calling "),o("code",[e._v("destroy()")]),e._v(" on a Model will now return "),o("code",[e._v("false")]),e._v(" if the model's "),o("code",[e._v("isNew")]),e._v(" is set to "),o("code",[e._v("true")]),e._v(" (model has not been saved to persistent storage).")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("Model.set()")]),e._v(" no longer accepts another model as an argument. Only pass the method the attributes to set, "),o("code",[e._v("Model.set(attributes)")]),e._v(".")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("url")]),e._v(" and "),o("code",[e._v("urlRoot")]),e._v(" properties may now be passed as options when instantiating a new Model.")])]),e._v(" "),o("li",[o("p",[e._v("If you want to maintain current models in a collection when using "),o("code",[e._v("fetch")]),e._v(" the property has changed from "),o("code",[e._v("{add:true}")]),e._v(" to "),o("code",[e._v("{remove:false}")]),e._v(".")])])]),e._v(" "),o("h3",{attrs:{id:"parse-method"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#parse-method"}},[e._v("#")]),e._v(" Parse Method")]),e._v(" "),o("p",[e._v("After fetching a model or a collection, "),o("em",[e._v("all")]),e._v(" defined parse methods will now be run. So fetching a collection and getting back new models could cause both the collection to parse the list, and then each model to be parsed in turn, if you have both methods defined. By default, the parse method is a no-op function that directly passes the JSON response object.")]),e._v(" "),o("p",[e._v("You are no longer permitted to change the "),o("code",[e._v("id")]),e._v(" of your model during parse(). Use "),o("code",[e._v("idAttribute")]),e._v(" instead.")]),e._v(" "),o("p",[e._v("The parse function now receives the "),o("code",[e._v("options")]),e._v(" dictionary as its second parameter. Previously, it would only be passed a raw "),o("code",[e._v("response")]),e._v(" object.")]),e._v(" "),o("h3",{attrs:{id:"silent-option"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#silent-option"}},[e._v("#")]),e._v(" Silent Option")]),e._v(" "),o("p",[e._v("Passing "),o("code",[e._v("{silent:true}")]),e._v(" to methods now suppresses the "),o("code",[e._v("change:attr")]),e._v(" events, thus a data-bound view will not be updated to reflect the changes. The sql sync adapter passed this option by default. It has been updated to no longer pass that option when Backbone 1.1.2 is used (still passed with 0.9.2).")]),e._v(" "),o("p",[e._v("If you want the new behavior, where the "),o("code",[e._v("change")]),e._v(" events are suppressed, you will need to pass this option or extend the Model or Collection class. The following sample code extends the Model "),o("code",[e._v("set()")]),e._v(" method by forcing the silent option to true. This method is where the silent option is used to fire or not fire change events.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("exports.definition = {\n    config: {\n        // Model configuration\n    },\n    extendModel: function(Model) {\n        _.extend(Model.prototype, {\n            // Forces silent true option when the model is updated\n            set: function(attributes, options) {\n                options = options ? _.clone(options) : {};\n                options.silent = true;\n                return Backbone.Model.prototype.set.call(this, attributes, options);\n            }\n        });\n        return Model;\n    },\n    extendCollection: function(Collection) {\n        _.extend(Collection.prototype, {\n            // extended functions and properties go here\n        });\n        return Collection;\n    }\n};\n")])])]),o("h2",{attrs:{id:"api-changes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#api-changes"}},[e._v("#")]),e._v(" API Changes")]),e._v(" "),o("h3",{attrs:{id:"new-apis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new-apis"}},[e._v("#")]),e._v(" New APIs")]),e._v(" "),o("p",[e._v("The following APIs have been added between Backbone 1.1.2 and 0.9.2.")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("API")]),e._v(" "),o("th",[e._v("Type")]),e._v(" "),o("th",[e._v("Notes")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Backbone.request")]),e._v(" "),o("td",[e._v("event")]),e._v(" "),o("td",[e._v("Fired whenever a request begins to be made to the server during a Backbone.sync operation.")])]),e._v(" "),o("tr",[o("td",[e._v("Backbone.Collection.findWhere")]),e._v(" "),o("td",[e._v("method")]),e._v(" "),o("td",[e._v("Same as the "),o("code",[e._v("Backbone.Collection.where()")]),e._v(" method but only returns the first result.")])]),e._v(" "),o("tr",[o("td",[e._v("Backbone.Collection.set")]),e._v(" "),o("td",[e._v("method")]),e._v(" "),o("td",[e._v('Performs a "smart" update of the collection with the passed list of models.')])]),e._v(" "),o("tr",[o("td",[e._v("Backbone.Event.once")]),e._v(" "),o("td",[e._v("method")]),e._v(" "),o("td",[e._v("Same as the "),o("code",[e._v("Backbone.Event.on()")]),e._v(" method except after the event is fired, the callback is removed.")])]),e._v(" "),o("tr",[o("td",[e._v("Backbone.Model.invert")]),e._v(" "),o("td",[e._v("method")]),e._v(" "),o("td",[e._v("Returns a copy of the object where the object's keys and values are switched.")])]),e._v(" "),o("tr",[o("td",[e._v("Backbone.Model.keys")]),e._v(" "),o("td",[e._v("method")]),e._v(" "),o("td",[e._v("Returns an array of the object's keys.")])]),e._v(" "),o("tr",[o("td",[e._v("Backbone.Model.omit")]),e._v(" "),o("td",[e._v("method")]),e._v(" "),o("td",[e._v("Returns a copy of an object without the specified keys.")])]),e._v(" "),o("tr",[o("td",[e._v("Backbone.Model.pairs")]),e._v(" "),o("td",[e._v("method")]),e._v(" "),o("td",[e._v("Returns an array of "),o("code",[e._v("[key, value]")]),e._v(" pairs.")])]),e._v(" "),o("tr",[o("td",[e._v("Backbone.Model.pick")]),e._v(" "),o("td",[e._v("method")]),e._v(" "),o("td",[e._v("Returns a copy of an object with the specified keys.")])]),e._v(" "),o("tr",[o("td",[e._v("Backbone.Model.values")]),e._v(" "),o("td",[e._v("method")]),e._v(" "),o("td",[e._v("Returns an array of the object's property values.")])])])]),e._v(" "),o("h3",{attrs:{id:"removed-apis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#removed-apis"}},[e._v("#")]),e._v(" Removed APIs")]),e._v(" "),o("p",[e._v("The following APIs have been removed between Backbone 1.1.2 and 0.9.2.")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("API")]),e._v(" "),o("th",[e._v("Type")]),e._v(" "),o("th",[e._v("Notes")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Backbone.Collection.getByCid")]),e._v(" "),o("td",[e._v("method")]),e._v(" "),o("td",[e._v("Pass the CID to the Backbone.Collection.get() method to retrieve the Collection by its Backbone client ID.")])]),e._v(" "),o("tr",[o("td",[e._v("Backbone.Model.change")]),e._v(" "),o("td",[e._v("method")]),e._v(" "),o("td")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);