(window.webpackJsonp=window.webpackJsonp||[]).push([[920],{1581:function(t,e,a){"use strict";a.r(e);var s=a(21),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"style-and-conventions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#style-and-conventions"}},[t._v("#")]),t._v(" Style and Conventions")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#summary"}},[t._v("Summary")])])]),t._v(" "),a("p",[t._v("In this section, we'll examine the Appcelerator recommended best-practices for coding style, including naming conventions, code formatting, and commenting.")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),a("p",[t._v("We'll also cover our recommendations for organizing the assets that comprise your project.")])]),t._v(" "),a("h2",{attrs:{id:"language-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#language-rules"}},[t._v("#")]),t._v(" Language rules")]),t._v(" "),a("p",[t._v("Many references exist that describe JavaScript language rules to follow. We'll lay out a few of the most important here, then direct you to the "),a("a",{attrs:{href:"#references"}},[t._v("References")]),t._v(" section below.")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("var")]),t._v(" – All variables should be explicitly declared using the "),a("code",[t._v("var")]),t._v(" keyword. Omitting "),a("code",[t._v("var")]),t._v(" places the variable in the global scope. "),a("a",{attrs:{href:"http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml?showone=var#var",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read more"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("Semicolons – Always use semicolons to terminate statements. "),a("a",{attrs:{href:"http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml?showone=Semicolons#Semicolons",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read more"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("Use "),a("code",[t._v("this")]),t._v(" with extreme care, as it sometimes doesn't refer to the object you expect. "),a("a",{attrs:{href:"http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml?showone=this#this",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read more"),a("OutboundLink")],1)])])]),t._v(" "),a("p",[t._v("We have codified our set of internal formatting and linting rules for ESLint at our repository: "),a("a",{attrs:{href:"https://github.com/appcelerator/eslint-config-axway",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/appcelerator/eslint-config-axway"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("This is the set of lint rules we apply to our own JavaScript source for any SDK-related NPM packages, CLI code, etc.")]),t._v(" "),a("h2",{attrs:{id:"coding-style-best-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coding-style-best-practices"}},[t._v("#")]),t._v(" Coding style best practices")]),t._v(" "),a("h3",{attrs:{id:"naming-conventions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#naming-conventions"}},[t._v("#")]),t._v(" Naming conventions")]),t._v(" "),a("h4",{attrs:{id:"variable-and-function-names"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variable-and-function-names"}},[t._v("#")]),t._v(" Variable and function names")]),t._v(" "),a("p",[t._v("Variable names start with a category noun (lowercase) so that they are easier to categorize and associate with related variables.")]),t._v(" "),a("p",[a("strong",[t._v("Variable examples")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("personName, personAddress\npersonNameLast, personNameFirst\n")])])]),a("p",[t._v("Function names follow a similar convention, though we start with a category verb (lowercase) and are often followed by an associated variable name (if any).")]),t._v(" "),a("p",[a("strong",[t._v("Function examples")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("getPersonName, setPersonAddress\ndriveCarBlue, stopCarRed\n")])])]),a("p",[t._v("Both variables and functions (or properties and methods, respectively) start with a lowercase word so that they are easier to differentiate from major namespace objects or 'classes'.")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),a("p",[t._v("Appcelerator does not support the use of Hungarian Notation.")])]),t._v(" "),a("h4",{attrs:{id:"object-and-class-names"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-and-class-names"}},[t._v("#")]),t._v(" Object and 'class' names")]),t._v(" "),a("p",[t._v("Major objects and class-like functions (constructors) follow a standard pattern of capitalized words. Though not necessarily a naming convention, 'class' names that end up rather large is an indicator that the 'class' is most likely designed to do too much. 'Class' names may also start with an abbreviation of a library.")]),t._v(" "),a("p",[a("strong",[t._v("Examples")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Car, GarbageCollector\nIKSystem, MCStyle\n")])])]),a("h4",{attrs:{id:"namespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#namespace"}},[t._v("#")]),t._v(" Namespace")]),t._v(" "),a("p",[t._v("Here, convention is similar to 'class' naming.")]),t._v(" "),a("p",[a("strong",[t._v("Examples")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("App.UI.Widget")])]),t._v(" "),a("li",[a("p",[t._v("App.Network.Request")])])]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),a("p",[t._v("'app.ui' should be 'App.UI'")])]),t._v(" "),a("h4",{attrs:{id:"factories"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#factories"}},[t._v("#")]),t._v(" Factories")]),t._v(" "),a("p",[t._v("Factory functions are located within a major namespace object, start with 'create' and return an object.")]),t._v(" "),a("p",[a("strong",[t._v("Examples")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("createPhotoGallery\nApp.UI.createWidget\nApp.Network.createRequest\n")])])]),a("h4",{attrs:{id:"operators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operators"}},[t._v("#")]),t._v(" Operators")]),t._v(" "),a("p",[t._v("Type data and operators should always be separated by a single space.")]),t._v(" "),a("p",[a("strong",[t._v("Examples")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" nameFull "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nameFirst "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" nameLast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" cl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"indentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indentation"}},[t._v("#")]),t._v(" Indentation")]),t._v(" "),a("p",[t._v("Both K&R/1TBS and Allman styles are acceptable. "),a("strong",[a("em",[t._v("Consistency is most important and a combination is not to be used on the same project. Clean indentation is required.")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// K&R/1TBS Style\nif (x < 10) {\n  if (y > 10) {\n    // do this\n  }\n} else {\n  // do this\n}\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// Allman Style\nif (x < 10)\n{\n  if (y > 10)\n  {\n    // do this\n  }\n}\nelse\n{\n  // do this\n}\n\n// but never do this within a function:\nreturn\n{\n  foo: 'bar'\n}\n")])])]),a("p",[t._v("As noted, you should never put "),a("code",[t._v("return")]),t._v(" on its own line followed by an object literal definition. Doing so will return an "),a("code",[t._v("undefined")]),t._v(" value rather than the object. See "),a("a",{attrs:{href:"http://encosia.com/in-javascript-curly-brace-placement-matters-an-example/",target:"_blank",rel:"noopener noreferrer"}},[t._v("this blog post"),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"http://www.amazon.com/dp/0596517742/?tag=stackoverfl08-20",target:"_blank",rel:"noopener noreferrer"}},[t._v("Crockford's JavaScript: The Good Parts"),a("OutboundLink")],1),t._v(" for more info.")]),t._v(" "),a("h3",{attrs:{id:"primitive-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#primitive-types"}},[t._v("#")]),t._v(" Primitive types")]),t._v(" "),a("p",[a("strong",[t._v("Concatenation")]),t._v("\nStrings concatenated using the + operator must always use a space be added before and after the + operator to improve readability:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" someString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'My name is '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" firstName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'and I am a developer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Primitive type construction")]),t._v("\nDo not use the primitive type object constructors unless you have a very clear reason for doing so.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Don't do this")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" test "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'My String'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"control-statements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#control-statements"}},[t._v("#")]),t._v(" Control statements")]),t._v(" "),a("p",[t._v("Switch statements have a single space before the opening parenthesis of the conditional statement and also a single space after the closing parenthesis. Switch statement content is indented with one tab. Content in each case is indented one tab as well:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("switch (someTest) {\n    case 1:\n        break;\n\n    case 2:\n        break;\n\n    default:\n        break;\n}\n")])])]),a("h3",{attrs:{id:"comments-and-documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comments-and-documentation"}},[t._v("#")]),t._v(" Comments and documentation")]),t._v(" "),a("p",[t._v("Single-line comments are required to reduce programmer error. However, specialized block commenting is preferred when documenting functions. Inline statement comments should be used at a minimum or not at all.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Calculate position using initial")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// and offset x coordinates.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" finalPos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" initPosX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" offsetPosX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {String} customerName Customer's full name.\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCustomer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("customerName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"references-and-further-reading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references-and-further-reading"}},[t._v("#")]),t._v(" References and further reading")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"http://javascript.crockford.com/code.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Douglas Crockford's JavaScript Code Conventions"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://google.github.io/styleguide/jsguide.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google's JavaScript Style Guide"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/appcelerator/eslint-config-axway",target:"_blank",rel:"noopener noreferrer"}},[t._v("Axway Appcelerator's ESLint Configuration"),a("OutboundLink")],1)])])]),t._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),a("p",[t._v("In this chapter, you learned the Appcelerator recommended best-practices for coding style, including naming conventions, code formatting, and commenting.")])])}),[],!1,null,null,null);e.default=n.exports}}]);