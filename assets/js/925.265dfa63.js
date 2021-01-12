(window.webpackJsonp=window.webpackJsonp||[]).push([[925],{1884:function(e,t,a){"use strict";a.r(t);var r=a(21),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"using-javascript-libraries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-javascript-libraries"}},[e._v("#")]),e._v(" Using JavaScript Libraries")]),e._v(" "),a("p",[e._v("This walkthrough will instruct you on how to create a new web project and get started with your coding using a pre-documented JavaScript library. For this example, we will use jQuery.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),a("p",[e._v("The library you are using must have either a "),a("a",{attrs:{href:"#undefined"}},[e._v("JSCA 1.0 Specification")]),e._v(" file, be documented using the "),a("a",{attrs:{href:"#undefined"}},[e._v("ScriptDoc")]),e._v(" spec, be documented using "),a("a",{attrs:{href:"http://weblogs.asp.net/bleroy/archive/2007/04/23/the-format-for-javascript-doc-comments.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSDoc"),a("OutboundLink")],1),e._v(" for JavaScript, or have an "),a("a",{attrs:{href:"#undefined"}},[e._v("Aptana Studio 2.X")]),e._v(" code assist XML file. If using the Studio 2.X XML code assist file, you need to change the file extension to .sdocml.")])]),e._v(" "),a("h2",{attrs:{id:"accessing-your-projects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-your-projects"}},[e._v("#")]),e._v(" Accessing your projects")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Click the "),a("strong",[e._v("Project Explorer")]),e._v(" tab to view your Studio projects.")])]),e._v(" "),a("li",[a("p",[e._v("Create a new Web project.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("From the Studio "),a("strong",[e._v("File")]),e._v(" menu, select "),a("strong",[e._v("New > Project...")]),e._v("\nThe "),a("strong",[e._v("New Project")]),e._v(" wizard opens.")])]),e._v(" "),a("li",[a("p",[e._v("On the "),a("strong",[e._v("New Project")]),e._v(" wizard, select "),a("strong",[e._v("Web Project")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Click the "),a("strong",[e._v("Next")]),e._v(" button.")])]),e._v(" "),a("li",[a("p",[e._v("In the "),a("strong",[e._v("Project name:")]),e._v(" field, type a name for your new project.")])]),e._v(" "),a("li",[a("p",[e._v("Click the "),a("strong",[e._v("Next")]),e._v(" button.")])]),e._v(" "),a("li",[a("p",[e._v("From the "),a("strong",[e._v("Project Template")]),e._v(" list, select a default template for the project if you like.")])]),e._v(" "),a("li",[a("p",[e._v("Click the "),a("strong",[e._v("Finish")]),e._v(" button. Studio creates a new web project, with several files, depending on the project template you selected.")])])])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("This will create a new web project, but unlike Studio 2, most templates do not drop in a default set of JavaScript files for library support, as they quickly become outdated. Instead, download the library you are interested in using and drag and drop the files into your project as appropriate.")])]),e._v(" "),a("h2",{attrs:{id:"adding-a-documented-library-for-code-assist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-documented-library-for-code-assist"}},[e._v("#")]),e._v(" Adding a documented library for code assist")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Find a library you are interested in. Some examples are listed here: "),a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Using_JavaScript_Libraries/JavaScript_Library_Support/"}},[e._v("JavaScript Library Support")])],1)]),e._v(" "),a("li",[a("p",[e._v("Save it to your disk, and then drag it into your project. It does not matter where in the project it sits, so you can create a new folder for files like this if you like.")])])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),a("p",[e._v("The project must be some web project: Web, PHP, Python, Ruby, Rails. You can confirm that here by checking the project nature: "),a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Basic_Concepts/Working_with_Projects/Importing_an_Existing_Project/"}},[e._v("Importing an Existing Project")])],1)]),e._v(" "),a("h2",{attrs:{id:"viewing-code-assist-using-jquery-as-an-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewing-code-assist-using-jquery-as-an-example"}},[e._v("#")]),e._v(" Viewing code assist (using jQuery as an example)")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Add the file from "),a("a",{attrs:{href:"https://raw.github.com/aptana/javascript-jquery.ruble/master/support/jquery.1.4.2.sdocml",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://raw.github.com/aptana/javascript-jquery.ruble/master/support/jquery.1.4.2.sdocml"),a("OutboundLink")],1),e._v(". Make sure to save it with the .sdocml extension.")])]),e._v(" "),a("li",[a("p",[e._v("If you do not have a JavaScript file in your project, create a new one by selecting the "),a("strong",[e._v("File")]),e._v(" menu, select "),a("strong",[e._v("New > File...")]),e._v(" and typing 'sample.js' or a different name if you prefer. Select "),a("strong",[e._v("Finish")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("In your "),a("strong",[e._v("sample.js")]),e._v(" file, add the following snippet:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$(document).ready(function(){});\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Inside that, add the following line: "),a("code",[e._v('$("p")')])]),e._v(" "),a("ol",[a("li",[e._v("While entering that selector you should have seen documentation come up for how to use the "),a("code",[e._v("$")]),e._v(" function.")])])]),e._v(" "),a("li",[a("p",[e._v('Now insert your cursor just after "'),a("code",[e._v('$("p")')]),e._v('" and type '),a("code",[e._v(".ad")]),e._v(" and press "),a("strong",[e._v("ctrl+space")]),e._v('.\nCode Assist displays a list of jQuery functions that begin with the letters "ad" (for example, add, addClass, and so forth). Use Code Assist to help you code.')])]),e._v(" "),a("li",[a("p",[e._v("Start coding.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("As you type, notice that Code Assist is now active for the jQuery objects and functions that you use.")])]),e._v(" "),a("li",[a("p",[e._v("Press "),a("strong",[e._v("ctrl+space")]),e._v(" at any time to activate Code Assist.")])])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);