(window.webpackJsonp=window.webpackJsonp||[]).push([[1045],{1044:function(e,t,o){"use strict";o.r(t);var a=o(21),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"ios-module-project"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ios-module-project"}},[e._v("#")]),e._v(" iOS Module Project")]),e._v(" "),o("h2",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("This guide covers how to manage your module project as well as how to add third-party frameworks and bundle assets with your module.")]),e._v(" "),o("h2",{attrs:{id:"prerequisite"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite"}},[e._v("#")]),e._v(" Prerequisite")]),e._v(" "),o("p",[e._v("In order to develop iOS modules, you need to have your environment setup to build iOS applications with the Titanium SDK.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("To setup Titanium, see "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Setting_up_Studio/"}},[e._v("Setting up Studio")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[e._v("To setup your environment for iOS, see "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_iOS_SDK/"}},[e._v("Installing the iOS SDK")]),e._v(".")],1)])]),e._v(" "),o("h2",{attrs:{id:"project-structure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#project-structure"}},[e._v("#")]),e._v(" Project structure")]),e._v(" "),o("p",[e._v("When you create a new project, it generates the following directories and files. Titanium expects to find files in certain directories with a specific naming convention.")]),e._v(" "),o("table",{staticClass:"confluenceTable"},[o("thead",{staticClass:" "}),o("tfoot",{staticClass:" "}),o("tbody",{staticClass:" "},[o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("strong",{staticClass:" "},[e._v("Filename / Directory")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("strong",{staticClass:" "},[e._v("Description / Purpose")])])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v(".gitignore")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("A special "),o("code",[e._v(".gitignore")]),e._v(" file used by the revision control system git to instruct it to ignore certain temporary files and directories. This file is not distributed with your module. This file can be safely ignored if you are not using git.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("README")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("The file that gives a short explanation of the module project. This file is not distributed with your module.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("assets")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("The directory where you should place module assets, such as images.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("documentation")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("The directory where you should place your module documentation for end-users. The file "),o("code",[e._v("index.md")]),e._v(" is a Markdown-formatted template file that you should use when writing your module documentation. You may also write your documentation using the "),o("a",{staticClass:"document-link ",attrs:{href:"#!/guide/TDoc_Specification"}},[e._v("TDoc Specification")]),e._v(". You can safely ignore this directory if you do not intend to distribute your module.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("example")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("The directory where your module example(s) should go. The file "),o("code",[e._v("app.js")]),e._v(" will be generated to include a sample loading of your module in a test window. This file can be used for quickly testing your module as well as give an example to end-users on how to use your module. This directory is distributed with your module.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("ios/Classes")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("The directory where you Objective-C headers and implementation classes should go, used by the Xcode compiler. By default, when you create a new project, you are given a boiler plate module class ("),o("code",[e._v("ModuleIdModule.h")]),e._v(" and "),o("code",[e._v("ModuleIdModule.m")]),e._v(") and the auto-generated module assets class ("),o("code",[e._v("ModuleIdModuleAssets.h")]),e._v(" and "),o("code",[e._v("ModuleIdModuleAssets.m")]),e._v("). These files are not distributed with your module. For information about these files, see "),o("a",{staticClass:"document-link ",attrs:{href:"#!/guide/iOS_Module_Architecture"}},[e._v("iOS Module Architecture")]),e._v(".")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("ios/<MODULE_ID>_Prefix.pch")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("The pre-compiled header file used by the Xcode compiler. This file is not distributed with your module.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("del",{staticClass:" "},[o("code",[e._v("ios/build.py")])])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("del",{staticClass:" "},[e._v("This file is a script that will compile and package your module for usage and distribution.")]),e._v(" Usage of this script has been replaced with "),o("code",[e._v("appc run -p ios --build-only")]),e._v(".")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("ios/manifest")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("A special file that describes metadata about your module and used by the Titanium compiler. This file is required and is distributed with your module.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("ios/module.xcconfig")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("A special file used by Xcode when your module is compiled in an end-user Titanium application which references your module."),o("br"),e._v("This file is a Xcode configuration file which can setup special compiler and linker directives that are specific to your module. This file is distributed with your module.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("ios/platform")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Directory to place native frameworks and (static) libraries in. Examples are "),o("code",[e._v(".framework")]),e._v(" and "),o("code",[e._v(".a")]),e._v(" files.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("ios/Resources")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Directory for platform-specific assets. This is analogous to the "),o("code",[e._v("app/platform")]),e._v(" directory in a standard Titanium application project, and contains platform-specific assets that are not processed by Titanium but copied over to the module's package. For example, place any third-party frameworks or bundles you want to use with the module in this folder. "),o("i",{staticClass:" "},[e._v("Note")]),e._v(": This directory will only be recognized in Titanium Mobile 5.2.0.GA and later.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("ios/test.xcodeproj")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("The directory which contains your Xcode project. Open this directory to launch your module project in Xcode. This directory is not distributed with your module.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("ios/timodule.xml")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Titanium module configuration file. The format is described in "),o("a",{staticClass:"document-link ",attrs:{href:"#!/guide/tiapp.xml_and_timodule.xml_Reference"}},[e._v("tiapp.xml and timodule.xml Reference")]),e._v(". This file is not currently supported by iOS modules.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("code",[e._v("ios/titanium.xcconfig")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("A special file used by Xcode when your module is compiled when building your module. This file is a Xcode configuration file which can setup special compiler and linker directives that are specific to your module. This file is not distributed with your module and only used during module development.")])])])])]),e._v(" "),o("p",[e._v("The CLI generates a module project containing multiple platforms. The module contains platform-dependent folders, for example, "),o("code",[e._v("ios")]),e._v(" , that contain platform-specific resources and common folders for assets, documentation and examples.")]),e._v(" "),o("h3",{attrs:{id:"titanium-xcconfig-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#titanium-xcconfig-file"}},[e._v("#")]),e._v(" Titanium .xcconfig file")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("titanium.xcconfig")]),e._v(" file is used when compiling your module for packaging. It defines the following environment variables:")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("TITANIUM_SDK_VERSION")]),e._v(": Version of the Titanium SDK to build the module library.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("TITANIUM_SDK")]),e._v(": Path to the Titanium SDK.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("TITANIUM_BASE_SDK")]),e._v(": Path to the Titanium SDK iOS header files. Do not modify.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("TITANIUM_BASE_SDK2")]),e._v(": Path to the Titanium SDK iOS TiCore header files. Do not modify.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("TITANIUM_BASE_SDK3")]),e._v(": Path to the Titanium SDK iOS JavaScriptCore header files. Do not modify.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("HEADER_SEARCH_PATHS")]),e._v(": Path to the Titanium SDK header files. Do not modify.")])])]),e._v(" "),o("p",[e._v("Normally, you do not need to edit this file once it is created. If you delete the Titanium SDK referenced by the file, you need to update the "),o("code",[e._v("TITANIUM_SDK_VERSION")]),e._v(" and "),o("code",[e._v("TITANIUM_SDK")]),e._v(" variables to use another Titanium SDK to build the module.")]),e._v(" "),o("h3",{attrs:{id:"module-xcconfig-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#module-xcconfig-file"}},[e._v("#")]),e._v(" Module .xcconfig file")]),e._v(" "),o("p",[e._v("If your module needs a special Framework, other system library or special compiler directives, you can use the module's "),o("code",[e._v("xcconfig")]),e._v(" file to define them. The "),o("code",[e._v("module.xcconfig")]),e._v(" is used by the application compiler when the application is built and your module is referenced. This allows you to control the compiler directives used during this process.")]),e._v(" "),o("p",[e._v("For a list of variables you can add to this file, see "),o("a",{attrs:{href:"https://developer.apple.com/legacy/library/documentation/DeveloperTools/Reference/XcodeBuildSettingRef/1-Build_Setting_Reference/build_setting_ref.html#//apple_ref/doc/uid/TP40003931-CH3-SW105",target:"_blank",rel:"noopener noreferrer"}},[e._v("Xcode Build Setting Reference."),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("For example, if you include the iOS 11 "),o("code",[e._v("CoreML")]),e._v(" framework with your module, you need to modify the "),o("code",[e._v("OTHER_LDFLAGS")]),e._v(" variable to include the framework. To not overwrite the Titanium application's "),o("code",[e._v("OTHER_LDFLAGS")]),e._v(" variable, add "),o("code",[e._v("$(inherited)")]),e._v(".")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("OTHER_LDFLAGS=$(inherited) -framework CoreML\n")])])]),o("h3",{attrs:{id:"manifest-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#manifest-file"}},[e._v("#")]),e._v(" Manifest file")]),e._v(" "),o("p",[e._v("Titanium module metadata is described in a special text file named "),o("code",[e._v("manifest")]),e._v(". This file is a simple key/value property format.")]),e._v(" "),o("p",[e._v("Before you distribute your module, you must edit this manifest and change a few values. Some of the values are pre-generated and should not be edited. These are noted with the comment before them. In the manifest file, any line starting with a hash character (#) is ignored. The following are the descriptions of each entry in the manifest:")]),e._v(" "),o("table",{staticClass:"confluenceTable"},[o("thead",{staticClass:" "}),o("tfoot",{staticClass:" "}),o("tbody",{staticClass:" "},[o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("strong",{staticClass:" "},[e._v("Key")])])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[o("strong",{staticClass:" "},[e._v("Description/Purpose")])])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("version")])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("This is the version of your module. You should change this value each time you make major changes and distribute them. Version should be in the dotted notation (X.Y.Z) and must not contain any spaces or non-number characters.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("apiversion")])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("The internal module API version of the SDK that is required to build this module. Currently this is at version 2 for iOS modules which is supported by all recent versions of the Titanium SDK. By default, this will be automatically set to the module API version of the SDK that was used when creating your module.")]),o("p",[e._v("You only need to ever change this if a new SDK has internal breaking changes to the module API. In the rare event that the module API did change, you need to migrate the module to the new module API and then update this property to match the API version of the SDK you are trying to build with.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("architectures")])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("The binary architectures the module supports as a delimited list. Example: armv7 arm64 i386 x86_64")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("description")])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("This is a human-readable description of your module. It should be short and suitable for display next to your module name.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("author")])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v('This is a human-readable author name you want to display next to your module. It can simply be your personal name, such as "Jon Doe" or an organizational name such as "Axway Appcelerator".')])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("license")])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v('This is a human-readable name of your license. You should use a short description such as "Apache Public License", "MIT" or "Commercial".')])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("copyright")])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v('This is a human-readable copyright string for your module. For example, "Copyright (c) 2010-Present by Axway Appcelerator, Inc."')])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("name")])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("This is a read-only name of your module that is generated when you created your project. You must not edit this value.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("moduleid")])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("This is a read-only module id of your module that is generated when you created your project. You should not edit this value. NOTE: you must generate a unique id. We recommend using your reverse-DNS company name + module_name as a pattern to guarantee uniqueness. If you must edit this value, you must also edit the value in your module implementation file.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("guid")])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("This is a read-only unique module id for your module that is generated when you created your project. You must not edit this value.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("platform")])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("This is a read-only platform target of your module that is generated when you created your project. You must not edit this value.")])])]),o("tr",[o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("minsdk")])]),o("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[o("p",[e._v("Indicates the minimum version of the SDK your module is compatible with. Users of your module will need to build their app with the specified SDK version (or later versions). This will be set to the Titanium SDK version that was used when creating your module by default. Adjust this if you change your module later on and use features that were introduced in new versions of the Titanium SDK or you know that your module is compatible with older versions of Titanium SDK as well.")])])])])]),e._v(" "),o("h2",{attrs:{id:"cli-tasks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cli-tasks"}},[e._v("#")]),e._v(" CLI tasks")]),e._v(" "),o("h3",{attrs:{id:"create-a-new-module-project"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-module-project"}},[e._v("#")]),e._v(" Create a new module project")]),e._v(" "),o("p",[e._v("To create a new module project, run the following Titanium CLI command:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("appc new -d /"),o("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("PATH")]),e._v("/TO/WORKSPACE -n "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("MODULE_NAME"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --id "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("MODULE_ID"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v('### when prompted for the project type, select "Titanium Module"')]),e._v("\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("### Example")]),e._v("\n$ appc new -p ios -n "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v(" --id com.example.test\nAppcelerator Command-Line Interface, version "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("7.0")]),e._v(".2\nCopyright "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("c"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("2014")]),e._v("-2018, Appcelerator, Inc.  All Rights Reserved.\n? What "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("type")]),e._v(" of project are you creating?\n  Native App\n  Arrow App\n❯ Titanium Module\n  Apple Watch App\n")])])]),o("p",[e._v("If you omit any of the options, the CLI will prompt you to enter them.")]),e._v(" "),o("h3",{attrs:{id:"build-and-package-the-module"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#build-and-package-the-module"}},[e._v("#")]),e._v(" Build and package the module")]),e._v(" "),o("p",[e._v("To build and package a module, run the "),o("code",[e._v("appc run -p ios --build-only")]),e._v(" command inside the "),o("code",[e._v("ios")]),e._v(" directory.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("cd /<PATH_TO_MODULE_PROJECT>/<MODULE_NAME>/ios\nti build -p ios --build-only\n")])])]),o("p",[e._v("After the build completes, you should have a ZIP file in the "),o("code",[e._v("iphone")]),e._v(" directory and see the following message in the console:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("** BUILD SUCCEEDED **\n")])])]),o("p",[e._v("With the ZIP file, you can either:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Uncompress it in the Titanium SDK home path to install the module globally for all your Titanium applications")])]),e._v(" "),o("li",[o("p",[e._v("Uncompress it in a Titanium project's parent directory to install the module locally for that one Titanium application")])]),e._v(" "),o("li",[o("p",[e._v("Distribute the ZIP file")])])]),e._v(" "),o("h2",{attrs:{id:"studio-tasks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#studio-tasks"}},[e._v("#")]),e._v(" Studio tasks")]),e._v(" "),o("h3",{attrs:{id:"create-a-new-module-project-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-module-project-2"}},[e._v("#")]),e._v(" Create a new module project")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("From the menu, select "),o("strong",[e._v("File")]),e._v(" > "),o("strong",[e._v("New")]),e._v(" > "),o("strong",[e._v("Mobile Module Project")]),e._v(" to open the "),o("strong",[e._v("New Mobile Module Project")]),e._v(" dialog.")])]),e._v(" "),o("li",[o("p",[e._v("In the "),o("strong",[e._v("Project name")]),e._v(" field, enter a name for the module.")])]),e._v(" "),o("li",[o("p",[e._v("In the "),o("strong",[e._v("Module Id")]),e._v(" field, enter a module ID for the module.")])]),e._v(" "),o("li",[o("p",[e._v("In "),o("strong",[e._v("Deployment Targets")]),e._v(", select "),o("strong",[e._v("iOS")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Next.")])])]),e._v(" "),o("li",[o("p",[e._v("In the "),o("strong",[e._v("Module Manifest File")]),e._v(" page, enter information about your module, such as the license information, version number, etc. You can also edit this information in the "),o("code",[e._v("manifest")]),e._v(" file later.")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Finish")]),e._v(".")])])]),e._v(" "),o("h3",{attrs:{id:"build-and-package-the-module-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#build-and-package-the-module-2"}},[e._v("#")]),e._v(" Build and package the module")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Select your module folder in the "),o("strong",[e._v("Project Explorer")]),e._v(" view.")])]),e._v(" "),o("li",[o("p",[e._v("Verify "),o("strong",[e._v("Package")]),e._v(" and "),o("strong",[e._v("iOS Module")]),e._v(" are displayed in "),o("strong",[e._v("Launch Mode")]),e._v(" and "),o("strong",[e._v("Launch Target")]),e._v(", respectively.")])]),e._v(" "),o("li",[o("p",[e._v("Click the Package icon to open the "),o("strong",[e._v("Package iOS Module")]),e._v(" dialog.")])]),e._v(" "),o("li",[o("p",[e._v("In "),o("strong",[e._v("Output Location")]),e._v(", select either")]),e._v(" "),o("ol",[o("li",[o("p",[o("strong",[e._v("Titanium SDK")]),e._v(" to install the module in the Titanium SDK home path to be accessed by any Titanium application")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Mobile App Project")]),e._v(" and choose an application to install the module locally that can be accessed by one that Titanium application")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Location")]),e._v(" and enter a path to copy the ZIP file to for distribution")])])])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Finish")]),e._v(".")])])]),e._v(" "),o("h2",{attrs:{id:"test-the-module"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#test-the-module"}},[e._v("#")]),e._v(" Test the module")]),e._v(" "),o("p",[e._v("To test a module:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Create a new Titanium Classic or Alloy project.")])]),e._v(" "),o("li",[o("p",[e._v("Install the module to either the Titanium SDK home directory or in the project.")])]),e._v(" "),o("li",[o("p",[e._v("Add the module as a dependency to the project.")])]),e._v(" "),o("li",[o("p",[e._v("Load the module and make module API calls.")])])]),e._v(" "),o("h3",{attrs:{id:"link-the-test-application-and-the-module-projects"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#link-the-test-application-and-the-module-projects"}},[e._v("#")]),e._v(" Link the test application and the module projects")]),e._v(" "),o("p",[e._v("To make it easier to debug your module, you can link the module to the test application. Then you can run the test application, which will rebuild the module project. You need to build the test application and module project at least once before proceeding.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Close the module project if it is open in Xcode.")])]),e._v(" "),o("li",[o("p",[e._v("Open the test application's Xcode project ("),o("code",[e._v("PROJECT_NAME/build/iphone/PROJECT_NAME.xcodeproj")]),e._v(").")])]),e._v(" "),o("li",[o("p",[e._v("Expand the "),o("strong",[e._v("Frameworks")]),e._v(" folder, right-click the module library ("),o("code",[e._v("lib<MODULE_ID>.a")]),e._v(") and select "),o("strong",[e._v("Delete.")])])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Remove Reference")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Right-click the project name and select "),o("strong",[e._v("Add Files to PROJECT_NAME...")])])]),e._v(" "),o("li",[o("p",[e._v("In the dialog:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Locate your module's Xcode project and select it.")])]),e._v(" "),o("li",[o("p",[e._v("Uncheck "),o("strong",[e._v("Copy item if needed")]),e._v(" if it is checked.")])]),e._v(" "),o("li",[o("p",[e._v("Select all targets under "),o("strong",[e._v("Add to targets")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Add")]),e._v(".")])])])]),e._v(" "),o("li",[o("p",[e._v("In the project's "),o("strong",[e._v("Build Phases")]),e._v(":")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Under "),o("strong",[e._v("Target Dependencies")]),e._v(", click the "),o("strong",[e._v("Add")]),e._v(" button, then select the module and click "),o("strong",[e._v("Add.")])])]),e._v(" "),o("li",[o("p",[e._v("Under "),o("strong",[e._v("Link Binaries with Libraries")]),e._v(", click the "),o("strong",[e._v("Add")]),e._v(" button, then select the module library ("),o("code",[e._v("lib<MODULE_ID>.a")]),e._v(") and click "),o("strong",[e._v("Add")]),e._v(".")])])])]),e._v(" "),o("li",[o("p",[e._v("From the menu bar, select "),o("strong",[e._v("Product")]),e._v(" > "),o("strong",[e._v("Clean")]),e._v(".")])])]),e._v(" "),o("p",[e._v("After you are done, the module Xcode project should be under the test application Xcode project. Expand the module Xcode project. You can edit and work on your module project, then build the test application project to test the module.")]),e._v(" "),o("p",[e._v("If the module project appears under the test application project, but you cannot expand the module project, the module project was opened when you linked the two projects together. Exit Xcode, then reopen the test application Xcode project.")]),e._v(" "),o("h2",{attrs:{id:"add-a-third-party-framework"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-a-third-party-framework"}},[e._v("#")]),e._v(" Add a third-party framework")]),e._v(" "),o("p",[e._v("To use a third-party framework in your module, add the framework to the module's "),o("code",[e._v("platform")]),e._v(" directory, so it can be copied over during the module's build process and linked when building the application. Add and setup the framework in Xcode then code and build your project to verify the project compiles correctly.")]),e._v(" "),o("ol",[o("li",[o("p",[o("strong",[e._v("Copy the framework")]),e._v(" to the module project's "),o("code",[e._v("ios/platform")]),e._v(" directory.")])]),e._v(" "),o("li",[o("p",[e._v("Open the module project ("),o("code",[e._v("ios/<PROJECT_NAME>.xcodeproj)")]),e._v("in "),o("strong",[e._v("Xcode.")])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Add the framework")]),e._v(" to the project: Right-click the project name and select "),o("strong",[e._v("Add File to PROJECT_NAME...")])])])]),e._v(" "),o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("💡 Stripping unused architectures from dynamic frameworks")]),e._v(" "),o("p",[e._v("For a proper app store submission, all used dynamic frameworks in the final app need to be stripped of unused architectures. To do so, our SDK will automatically integrate Realm's popular "),o("a",{attrs:{href:"https://github.com/realm/realm-cocoa/blob/master/scripts/strip-frameworks.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("strip-frameworks.sh"),o("OutboundLink")],1),e._v(" script into the Xcode project. If any of the frameworks used in your module needs additional handling or scripts, you can instruct your users to create a custom script under "),o("code",[e._v("platform/ios/strip-frameworks.sh")]),e._v(" inside the app project. If this file is present, the pre-bundled script from Realm will be ignored and the script inside the project will be used instead.")])]),e._v(" "),o("h2",{attrs:{id:"bundle-module-assets"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bundle-module-assets"}},[e._v("#")]),e._v(" Bundle module assets")]),e._v(" "),o("p",[e._v("To distribute module assets with your module distribution, you must place them in the "),o("code",[e._v("assets")]),e._v(" directory of your project. Any assets within this folder (with the exception of JavaScript files) will be distributed and copied into the folder pattern "),o("code",[e._v("module/<moduleid>")]),e._v(' in the application bundle. You can then load them using this relative path from your Objective-C code. For example, assuming you had a module image named "foo.png". You could load that using the following example:')]),e._v(" "),o("div",{staticClass:"language-objectivec extra-class"},[o("pre",{pre:!0,attrs:{class:"language-objectivec"}},[o("code",[e._v("NSString "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("path "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("NSString stringWithFormat"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('@"modules/%@/foo.png"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("self")]),e._v(" moduleId"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nNSURL "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("url "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("TiUtils toURL"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("path proxy"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("self")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nUIImage "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("image "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("TiUtils image"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("url proxy"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("self")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),o("h2",{attrs:{id:"format-lint-source-code"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#format-lint-source-code"}},[e._v("#")]),e._v(" Format / Lint source-code")]),e._v(" "),o("p",[e._v("The Titanium SDK uses clang-format to have a unified code-style in its source-code (clang-format for iOS and Android, ESLint for the CLI). You can do the same by following the following few steps:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Copy the "),o("code",[e._v(".clang-format")]),e._v(" file from "),o("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/blob/master/iphone/.clang-format",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(' to the "'),o("code",[e._v("ios/")]),e._v('" directory of your module project, e.g. '),o("code",[e._v("<module-root>/ios/.clang-format")])])]),e._v(" "),o("li",[o("p",[e._v("Install the "),o("a",{attrs:{href:"https://clang.llvm.org/docs/ClangFormat.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("clang-format CLI"),o("OutboundLink")],1),e._v(": "),o("code",[e._v("npm install -g clang-format")])])]),e._v(" "),o("li",[o("p",[e._v("Optional: Ensure that you have your module project in Git to be able to restore the old files in case you do not like the predefined format")])]),e._v(" "),o("li",[o("p",[e._v("Format your source with: "),o("code",[e._v("clang-format -style=file -i Classes/*")])])]),e._v(" "),o("li",[o("p",[e._v("Thats it! All native files have been formatted.")])])]),e._v(" "),o("p",[e._v("Now that you have a format, you can also extend your .clang-format with more formatting rules or adjust existing ones to match your own code style.")])])}),[],!1,null,null,null);t.default=s.exports}}]);