(window.webpackJsonp=window.webpackJsonp||[]).push([[657],{1774:function(e,t,a){"use strict";a.r(t);var n=a(21),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-ui-ios-feedbackgenerator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-ios-feedbackgenerator"}},[e._v("#")]),e._v(" Titanium.UI.iOS.FeedbackGenerator")]),e._v(" "),a("TypeHeader"),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("On supported devices, haptics provide a way to physically engage users with tactile feedback that gets attention and\nreinforces actions. Some system-provided interface elements, such as pickers, switches, and sliders, automatically provide\nhaptic feedback as users interact with them. Your app can also ask the system to generate different types of haptic feedback.\niOS manages the strength and behavior of this feedback.")]),e._v(" "),a("p",[e._v("There are three different kind of feedback generators that can be used for different interaction scenarios:")]),e._v(" "),a("ol",[a("li",[a("p",[a("strong",[e._v("Selection Feedback")]),e._v(": Indicates that a task or action, such as depositing a check or unlocking a vehicle, has completed,\nfailed, or produced a warning of some kind. This feedback type can be used when specifying the\n"),a("type-link",{attrs:{type:"Titanium.UI.iOS.FEEDBACK_GENERATOR_TYPE_SELECTION"}},[e._v("Titanium.UI.iOS.FEEDBACK_GENERATOR_TYPE_SELECTION")]),e._v(" constant in the "),a("code",[e._v("type")]),e._v(" property of the feedback generator.")],1)]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Impact Feedback")]),e._v(": Provides a physical metaphor that complements the visual experience. For example, the user might feel\na thud when a view slides into place or two objects collide. This feedback type can be used when specifying the\n"),a("type-link",{attrs:{type:"Titanium.UI.iOS.FEEDBACK_GENERATOR_TYPE_IMPACT"}},[e._v("Titanium.UI.iOS.FEEDBACK_GENERATOR_TYPE_IMPACT")]),e._v(" constant in the "),a("code",[e._v("type")]),e._v(" property of the feedback generator. Note that if you use\nthis generator type, you also have to specify the "),a("code",[e._v("style")]),e._v(" property that can be one of the\n"),a("type-link",{attrs:{type:"Titanium.UI.iOS.FEEDBACK_GENERATOR_IMPACT_STYLE_LIGHT"}},[e._v("Titanium.UI.iOS.FEEDBACK_GENERATOR_IMPACT_STYLE_LIGHT")]),e._v(", "),a("type-link",{attrs:{type:"Titanium.UI.iOS.FEEDBACK_GENERATOR_IMPACT_STYLE_MEDIUM"}},[e._v("Titanium.UI.iOS.FEEDBACK_GENERATOR_IMPACT_STYLE_MEDIUM")]),e._v(" or\n"),a("type-link",{attrs:{type:"Titanium.UI.iOS.FEEDBACK_GENERATOR_IMPACT_STYLE_HEAVY"}},[e._v("Titanium.UI.iOS.FEEDBACK_GENERATOR_IMPACT_STYLE_HEAVY")]),e._v(" constants.")],1)]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Notification Feedback")]),e._v(": Indicates that the selection is actively changing. For example, the user feels light taps while\nscrolling a picker wheel. This feedback is intended for communicating movement through a series of discrete values, not\nmaking or confirming a selection. This feedback type can be used when using the "),a("type-link",{attrs:{type:"Titanium.UI.iOS.FEEDBACK_GENERATOR_TYPE_NOTIFICATION"}},[e._v("Titanium.UI.iOS.FEEDBACK_GENERATOR_TYPE_NOTIFICATION")]),e._v("\nconstant in the "),a("code",[e._v("type")]),e._v(" property of the feedback generator.")],1)])]),e._v(" "),a("p",[a("strong",[e._v("Example")]),e._v("\nWhen clicking a button you should trigger an impact feedback as displayed below.")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" generator "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("iOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("createFeedbackGenerator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  type"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("iOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("FEEDBACK_GENERATOR_TYPE_IMPACT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  style"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("iOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("FEEDBACK_GENERATOR_IMPACT_STYLE_LIGHT")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\ngenerator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("impactOccurred")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("     \n")])])]),a("p",[e._v("We're not using "),a("code",[e._v("generator.prepare()")]),e._v(" here because we're triggering the feedback immediately. When you know a feedback generator is triggered within a couple seconds you should use "),a("code",[e._v("prepare()")]),e._v(" to know for sure the timing is correct.")]),e._v(" "),a("p",[e._v("See also:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.apple.com/ios/human-interface-guidelines/interaction/feedback/",target:"_blank",rel:"noopener noreferrer"}},[e._v("iOS Developer Library: Haptic Feedback"),a("OutboundLink")],1)])]),e._v(" "),a("ApiDocs")],1)}),[],!1,null,null,null);t.default=s.exports}}]);