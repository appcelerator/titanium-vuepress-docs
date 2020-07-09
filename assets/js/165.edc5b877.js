(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{1881:function(e,t,a){"use strict";a.r(t);var r=a(21),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"setting-memory-levels"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setting-memory-levels"}},[e._v("#")]),e._v(" Setting Memory Levels")]),e._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("p",[e._v("Studio allows you to see your current memory usage and adjust the settings based on the types of projects with which you work.")]),e._v(" "),r("h2",{attrs:{id:"showing-your-current-memory-level"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#showing-your-current-memory-level"}},[e._v("#")]),e._v(" Showing your current memory level")]),e._v(" "),r("p",[e._v('In order to see your current memory levels, you may turn on a "Heap Status" indicator. This shows you your available memory and current usage.')]),e._v(" "),r("p",[e._v("To enable the memory status indicator, turn on "),r("strong",[e._v("Preferences > General : Show Heap Status")]),e._v(". You will see a small bar in the bottom right corner of your workspace, similar to the one below:")]),e._v(" "),r("p",[r("img",{attrs:{src:a(541),alt:"Screen_shot_2011-07-19_at_9.53.12_AM"}})]),e._v(" "),r("h2",{attrs:{id:"setting-your-memory-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setting-your-memory-configuration"}},[e._v("#")]),e._v(" Setting your memory configuration")]),e._v(" "),r("p",[e._v("By default, Studio allocates a certain amount of memory to start (the "),r("strong",[e._v("-Xms")]),e._v(" parameter) and uses a maximum amount (the "),r("strong",[e._v("-Xmx")]),e._v(" parameter) of Java heap memory, which is usually enough for most development tasks. However, depending on the JRE that you are running and if you are working with additional plugins and have many files open, you may need to increase your amount of memory. You may also find it helpful to increase the size of the permanent generation memory (the "),r("strong",[e._v("--launcher.XXMaxPermSize")]),e._v(" parameter).")]),e._v(" "),r("p",[e._v("In some situations, such as when you have many projects in your workspace or when a project under source control has many files, you may get better performance by increasing the maximum heap memory (the "),r("strong",[e._v("-Xmx")]),e._v(" parameter). However, setting the memory allocation larger than the available physical memory on your machine can cause issues with Java, which will severely degrade your computer's performance and should be avoided.")]),e._v(" "),r("p",[e._v("Memory usage configuration changes are made in the .ini file. Studio must be restarted for any changes to this file to take effect.")]),e._v(" "),r("p",[e._v("Certain parameters in the AptanaStudio3.ini or TitaniumStudio.ini file are platform-dependent; For example, only OS X needs the "),r("strong",[e._v("XstartOnFirstThread")]),e._v(" parameter.")]),e._v(" "),r("h2",{attrs:{id:"configuration-files-across-platforms"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files-across-platforms"}},[e._v("#")]),e._v(" Configuration files across platforms")]),e._v(" "),r("div",{staticClass:"warning custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),r("p",[e._v("Find your configuration file by following the steps here: "),r("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Updating_Studio/Modifying_Your_Configuration/"}},[e._v("Modifying Your Configuration")])],1)]),e._v(" "),r("h3",{attrs:{id:"windows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("--launcher.XXMaxPermSize\n256m\n--launcher.defaultAction\nopenFile\n-vmargs\n-Xms40m\n-Xmx384m\n-Declipse.p2.unsignedPolicy=allow\n-Djava.awt.headless=true\n")])])]),r("h3",{attrs:{id:"os-x"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#os-x"}},[e._v("#")]),e._v(" OS X")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("-startup\n../../../plugins/org.eclipse.equinox.launcher_1.1.1.R36x_v20101122_1400.jar\n--launcher.XXMaxPermSize\n256m\n--launcher.defaultAction\nopenFile\n-vmargs\n-Xms40m\n-Xmx384m\n-Declipse.p2.unsignedPolicy=allow\n-Xdock:icon=../Resources/aptana.icns\n-XstartOnFirstThread\n-Dorg.eclipse.swt.internal.carbon.smallFonts\n")])])])])}),[],!1,null,null,null);t.default=o.exports},541:function(e,t){e.exports="data:image/png;base64,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"}}]);