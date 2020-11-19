(window.webpackJsonp=window.webpackJsonp||[]).push([[799],{1292:function(a,t,e){"use strict";e.r(t);var s=e(21),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"alloy-tasks-with-the-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alloy-tasks-with-the-cli"}},[a._v("#")]),a._v(" Alloy Tasks with the CLI")]),a._v(" "),e("p",[a._v("Alloy provides a command-line interface to create a new projects, generate skeleton components, and compile Alloy code to Titanium code. See "),e("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Getting_Started/#command-line-interface-installation"}},[a._v("Command-Line Interface Installation")]),a._v(" for directions on installing the latest released Alloy CLI.")],1),a._v(" "),e("p",[a._v("Run "),e("code",[a._v("appc alloy --help")]),a._v(" to see all available target options or see the "),e("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_How-tos/Alloy_Reference_Guides/Alloy_Command-Line_Interface_Reference/"}},[a._v("Alloy Command-Line Interface Reference")]),a._v(".")],1),a._v(" "),e("h2",{attrs:{id:"creating-a-new-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-application"}},[a._v("#")]),a._v(" Creating a new application")]),a._v(" "),e("p",[a._v("To create an Alloy application, run the following command from your work space directory:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("appc new -t titanium\n")])])]),e("p",[a._v("You will be prompted to enter an application name and application ID.")]),a._v(" "),e("p",[a._v("A new skeleton Alloy project will be generated in the directory named after the application name.")]),a._v(" "),e("p",[a._v("A new Alloy project has a folder named "),e("code",[a._v("app")]),a._v(" that contains the skeleton Alloy application.")]),a._v(" "),e("h2",{attrs:{id:"creating-a-new-application-using-a-test-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-application-using-a-test-application"}},[a._v("#")]),a._v(" Creating a new application using a test application")]),a._v(" "),e("p",[a._v("You can generate a new Alloy project using a test application from the Alloy Github repo. (The source code is copied from the global or local install of the Alloy npm package.)")]),a._v(" "),e("p",[a._v("To create an Alloy application based on a test application, first create a skeleton Titanium project, then run the Alloy new command with the "),e("code",[a._v("--testapp <path_to_test_app>")]),a._v(" option. Pass the option the relative path to the test application after the "),e("code",[a._v("alloy/test/apps")]),a._v(" path.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("appc new -t titanium --classic -i com.appc.picker -n AlloyPicker\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" AlloyPicker\nappc alloy new --testapp ui/picker\n")])])]),e("h2",{attrs:{id:"generating-components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generating-components"}},[a._v("#")]),a._v(" Generating components")]),a._v(" "),e("p",[a._v("The CLI can generate skeleton controllers (with views and styles), models, database migrations and widgets. The following commands can be ran from the root folder of the project or the location of the project may be specified with the "),e("code",[a._v("-o")]),a._v(" command-line option. You can also create platform-specific views or controllers using the "),e("code",[a._v("--platform")]),a._v(" option. You can also create views, styles and controllers for a widget by specifying the "),e("code",[a._v("--widgetname")]),a._v(" option with the name of the widget.")]),a._v(" "),e("h3",{attrs:{id:"generating-a-controller"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generating-a-controller"}},[a._v("#")]),a._v(" Generating a controller")]),a._v(" "),e("p",[a._v("To generate a controller with a style and view, run the following command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("appc alloy generate controller "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--widgetname "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("widget_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-o path_to_project/app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--platform "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("platform"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("p",[a._v("This creates "),e("code",[a._v("app/controllers/<name>.js")]),a._v(", "),e("code",[a._v("app/styles/<name>.tss")]),a._v(", and "),e("code",[a._v("app/views/<name>.xml")]),a._v(".")]),a._v(" "),e("h3",{attrs:{id:"generating-a-view"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generating-a-view"}},[a._v("#")]),a._v(" Generating a view")]),a._v(" "),e("p",[a._v("To generate a view and style "),e("strong",[a._v("without")]),a._v(" a controller, run the following command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("appc alloy generate view "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--widgetname "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("widget_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-o path_to_project/app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--platform "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("platform"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("p",[a._v("This creates "),e("code",[a._v("app/styles/<name>.tss")]),a._v(" and "),e("code",[a._v("app/views/<name>.xml")]),a._v(".")]),a._v(" "),e("h3",{attrs:{id:"generating-a-style"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generating-a-style"}},[a._v("#")]),a._v(" Generating a style")]),a._v(" "),e("p",[a._v("To generate a style for a view-controller, run the following command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("appc alloy generate style "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--widgetname "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("widget_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("p",[a._v("Alloy uses the id and attribute names in the markup file to populate the skeleton style file. This creates "),e("code",[a._v("app/styles/<name>.tss")]),a._v(".")]),a._v(" "),e("p",[a._v("To generate style files for all view-controllers, run the following command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("appc alloy generate style --all\n")])])]),e("p",[a._v("If you add new id or class attributes to the markup file, running either of these commands updates the style file with the new attributes.")]),a._v(" "),e("h3",{attrs:{id:"generating-a-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generating-a-model"}},[a._v("#")]),a._v(" Generating a model")]),a._v(" "),e("p",[a._v("To generate a model, run the following command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("appc alloy generate model "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("adapter"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("col_name_"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("1")]),a._v(">")]),a._v(":"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("col_type_"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("1")]),a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("col_name_"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),a._v(":"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("col_type_"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-o path_to_project/app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("p",[a._v("The fourth parameter selects the adapter type, either "),e("code",[a._v("sql")]),a._v(" for SQLite engine (Android and iOS platforms) or "),e("code",[a._v("properties")]),a._v(" for storing models locally in Titanium SDK context.")]),a._v(" "),e("p",[a._v("The fifth parameter defines the table schema. This is required for 'sql' and 'properties' adapter types.")]),a._v(" "),e("p",[a._v("This creates "),e("code",[a._v("app/models/<name>.js")]),a._v(", and "),e("code",[a._v("app/migrations/DATETIME_<name>.js")]),a._v(" if the adapter type is 'sql'.")]),a._v(" "),e("h3",{attrs:{id:"generating-a-migration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generating-a-migration"}},[a._v("#")]),a._v(" Generating a migration")]),a._v(" "),e("p",[a._v("To generate a standalone migration for a specific model, run the following command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("appc alloy generate migration "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-o path_to_project/app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("p",[a._v("This creates a timestamp-ordered migration file for the model specified, that is, "),e("code",[a._v("app/migrations/DATETIME_<name>.js")])]),a._v(" "),e("h3",{attrs:{id:"generating-a-widget"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generating-a-widget"}},[a._v("#")]),a._v(" Generating a widget")]),a._v(" "),e("p",[a._v("To generate a basic widget, run the following command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("appc alloy generate widget "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-o path_to_project/app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("p",[a._v("This creates a default widget in the project's "),e("code",[a._v("app/widgets")]),a._v(" path, generating a configuration file, controller, style and view: "),e("code",[a._v("app/widgets/<name>/widget.json")]),a._v(", "),e("code",[a._v("app/widgets/<name>/controllers/widget.js")]),a._v(", "),e("code",[a._v("app/widgets/<name>/styles/widget.tss")]),a._v(", and "),e("code",[a._v("app/widgets/<name>/views/widget.xml")]),a._v(". The widget is automatically added as a dependency in the Alloy project's configuration file "),e("code",[a._v("config.json")]),a._v(".")]),a._v(" "),e("h3",{attrs:{id:"generating-alloy-jmk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generating-alloy-jmk"}},[a._v("#")]),a._v(" Generating alloy.jmk")]),a._v(" "),e("p",[a._v("To generate the build customization file "),e("code",[a._v("alloy.jmk")]),a._v(", run the following command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("appc alloy generate jmk "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-o path_to_project/app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("p",[a._v("This creates the JavaScript Makefile "),e("code",[a._v("app/alloy.jmk")]),a._v(" with a few task hooks in place. Refer to "),e("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_How-tos/Alloy_Reference_Guides/Build_Configuration_File_(alloy.jmk)/"}},[a._v("Build Configuration File (alloy.jmk)")]),a._v(" for more details.")],1),a._v(" "),e("h2",{attrs:{id:"extracting-localization-strings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extracting-localization-strings"}},[a._v("#")]),a._v(" Extracting localization strings")]),a._v(" "),e("p",[a._v("The "),e("code",[a._v("alloy extract-i18n")]),a._v(" command inspects your JS and TSS (since Alloy 1.2.0), and XML files (since Alloy 1.6.0) for instances of Titanium's localization functions and adds those strings to an i18n strings.xml file. The command has the following syntax:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("appc alloy extract-i18n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("language"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--apply"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("p",[e("strong",[a._v("Parameters")]),a._v(":")]),a._v(" "),e("ul",[e("li",[e("p",[e("code",[a._v("language")]),a._v(" – Optional. The two-letter language code ("),e("code",[a._v("en")]),a._v(" or "),e("code",[a._v("es")]),a._v(", for example) of the target language. If not specified, the default is "),e("code",[a._v("en")]),a._v(" (English).")])]),a._v(" "),e("li",[e("p",[e("code",[a._v("--apply")]),a._v(" – Optional. If present, the command writes new localization entries to the target language "),e("code",[a._v("strings.xml")]),a._v(" file. Existing i18n entries are left untouched. If the XML file doesn't exist, it is created for you. If this parameter is absent, a preview of the changes are displayed in the terminal window.")])])]),a._v(" "),e("p",[a._v("The following localization functions are supported:")]),a._v(" "),e("ul",[e("li",[e("p",[e("code",[a._v("Titanium.Locale.getString()")])])]),a._v(" "),e("li",[e("p",[e("code",[a._v("L()")])])])]),a._v(" "),e("p",[a._v("The command extracts the first parameter (the i18n key) from each localization function and, if it's a string, adds it to the target language "),e("code",[a._v("strings.xml")]),a._v(" file. For example, suppose a JavaScript file in your application contained the following code:")]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" name "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Locale"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("getString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'name'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" color "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Titanium"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Locale"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("getString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'color'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" currency "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("L")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'currency'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[a._v("To create an English language localization file, run the following command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("appc alloy extract-i18n --apply\n")])])]),e("p",[a._v("This generates "),e("code",[a._v("app/i18n/en/strings.xml")]),a._v(" or (before Alloy 1.8.0) "),e("code",[a._v("i18n/en/strings.xml")]),a._v(" in your project directory, if it doesn't exist. The contents of the generated XML file would appear as follows:")]),a._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("resources")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("string")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("name"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("string")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("color"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("color"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("string")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("currency"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("currency"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("resources")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),e("p",[a._v("If you later add more localization functions to your code and run the same command again, the new entries would be added to "),e("code",[a._v("strings.xml")]),a._v(". Existing entries are left untouched.")]),a._v(" "),e("p",[a._v("To generate a "),e("code",[a._v("strings.xml")]),a._v(" for a specific language, pass the two-letter language code as a parameter. For example, the following command creates a strings.xml file for Spanish language locales ("),e("code",[a._v("app/i18n/es/strings.xml")]),a._v(" or - before Alloy 1.8.0 - "),e("code",[a._v("i18n/es/strings.xml")]),a._v(" ):")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("appc alloy extract-i18n es --apply\n")])])]),e("p",[a._v("When called with "),e("code",[a._v("--apply")]),a._v(", the command only adds new i18n entries and leaves existing entries untouched. For this reason, "),e("code",[a._v("alloy extract-i18n --apply")]),a._v(" is a safe operation, but you can also preview changes in the terminal by calling the command without "),e("code",[a._v("--apply")]),a._v(" , as shown below.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("appc alloy extract-i18n\n")])])]),e("p",[a._v("The output of this command shows the content of the current "),e("code",[a._v("en/strings.xml")]),a._v(" file (before) and its content once you apply the changes (after) with "),e("code",[a._v("--apply")]),a._v(".")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('[INFO] ######## BEFORE ########\n<resources>\n  <string name="name">name</string>\n  <string name="color">color</string>\n  <string name="currency">currency</string>\n</resources>\n[INFO] ######## AFTER  ########\n<resources>\n  <string name="name">name</string>\n  <string name="color">color</string>\n  <string name="currency">currency</string>\n  <string name="test">test</string>\n</resources>\n')])])]),e("h2",{attrs:{id:"compiling-a-specific-view-controller"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compiling-a-specific-view-controller"}},[a._v("#")]),a._v(" Compiling a specific view-controller")]),a._v(" "),e("p",[a._v("You can select which Alloy view-controller to compile to Titanium code. Use the command to update the Titanium base code for incremental changes to the Alloy project. Pass the "),e("code",[a._v("file=<filename>")]),a._v(" to the "),e("code",[a._v("--config")]),a._v(" option when running the Alloy compile command.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("appc alloy compile --config "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("platform")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("platform"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(",file"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## Example")]),a._v("\nappc alloy compile --config "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("platform")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("android,file"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("app/controller/index.js\n")])])]),e("h2",{attrs:{id:"building-an-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#building-an-application"}},[a._v("#")]),a._v(" Building an application")]),a._v(" "),e("p",[a._v("To build and run an application, execute the following command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("appc run --platform "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("platform"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--project-dir "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("value"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--sdk "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("value"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("platform_build_options"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("p",[a._v("Running this from the root directory of the project compiles the files to the correct location automatically.")]),a._v(" "),e("p",[a._v("See the "),e("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_Command-Line_Interface_Reference/#build"}},[a._v("Titanium Command-Line Interface Reference guide")]),a._v(" for a complete explanation of the available options.")],1),a._v(" "),e("h2",{attrs:{id:"installing-special-project-components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-special-project-components"}},[a._v("#")]),a._v(" Installing special project components")]),a._v(" "),e("h3",{attrs:{id:"installing-the-compiler-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-compiler-plugin"}},[a._v("#")]),a._v(" Installing the compiler plugin")]),a._v(" "),e("p",[a._v("To install the compiler plugin that hooks the Alloy project to Studio, run the following command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("appc alloy "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" plugin "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("path_to_project"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("p",[a._v("Use this command to update the compiler plugin if your project was created using an older version of Alloy.")])])}),[],!1,null,null,null);t.default=n.exports}}]);