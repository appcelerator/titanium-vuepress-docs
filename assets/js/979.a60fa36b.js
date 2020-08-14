(window.webpackJsonp=window.webpackJsonp||[]).push([[979],{1206:function(e,t,s){"use strict";s.r(t);var i=s(21),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"debugging-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debugging-overview"}},[e._v("#")]),e._v(" Debugging Overview")]),e._v(" "),s("h2",{attrs:{id:"objective"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[e._v("#")]),e._v(" Objective")]),e._v(" "),s("p",[e._v("In this section, we will define a common base of concepts that you'll need in the subsequent sections in this chapter.")]),e._v(" "),s("h2",{attrs:{id:"contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),s("p",[e._v("Debugging is a broad topic, and full coverage is beyond the scope of these guides. We'll take a very brief look at the following in this section:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Essential elements of debugging")])]),e._v(" "),s("li",[s("p",[e._v("Techniques")])]),e._v(" "),s("li",[s("p",[e._v("Debugging vs. testing")])])]),e._v(" "),s("p",[e._v("We'll cover the tools and specific procedures you'll follow in the subsequent sections.")]),e._v(" "),s("h3",{attrs:{id:"essential-elements-of-debugging"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#essential-elements-of-debugging"}},[e._v("#")]),e._v(" Essential elements of debugging")]),e._v(" "),s("p",[e._v("You investigate problems in very similar ways whether you're debugging a computer program, troubleshooting a network connectivity issue, or figuring out why your dishwasher is spilling dirty water all over the floor. The essential elements include:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Gather information – You'll need a clear, succinct, and accurate description of the problem to work from. Users sometimes provide good info. But more often, you'll need to investigate and document the issues yourself.")])]),e._v(" "),s("li",[s("p",[e._v("Reproduce the problem – You'll also need similarly clear, succinct, and accurate steps to reproduce the problem.")])]),e._v(" "),s("li",[s("p",[e._v("Deduce – Don't just guess at a solution. Examine the steps to reproduce the problem, do they point to a particular subcomponent of your app? Can you eliminate some aspect, say database interactions, based on the symptoms? Logical deduction will help you zero in on possible fixes.")])]),e._v(" "),s("li",[s("p",[e._v("Experiment iteratively – Try a fix. If it doesn't solve the problem, undo your changes and try something else. Keep track of every change you attempt so you don't repeat yourself.")])]),e._v(" "),s("li",[s("p",[e._v("Be tenacious – Bugs can be tough to find and fix. Stick with it. But be methodical. Haste makes waste (and further bugs) when it comes to troubleshooting.")])]),e._v(" "),s("li",[s("p",[e._v("Track your work – Keep track of the bugs you've found and fixed (as well as those you haven't fixed). Whether you publish this information to your users or not, a database of issues will help you find and fix future bugs. Document the solution as well as key non-fixes (so perhaps you won't get lost on similar dead-ends in future similar situations).")])])]),e._v(" "),s("h3",{attrs:{id:"debugging-techniques"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debugging-techniques"}},[e._v("#")]),e._v(" Debugging techniques")]),e._v(" "),s("p",[e._v("Debugging and testing books would fill a large shelf at a bookstore. We'll focus on just a few techniques, which include:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("print tracing (log statements)")])]),e._v(" "),s("li",[s("p",[e._v("crash log evaluation")])]),e._v(" "),s("li",[s("p",[e._v("interactive debugging")])])]),e._v(" "),s("p",[e._v("Print tracing involves adding "),s("code",[e._v("Ti.API.info()")]),e._v(" type statements to your app so that you can watch the app as it executes. You can catch many common bugs using this technique. Such logging doesn't add significant overhead to an app's execution. Still, you should remove such statements from your production app. Incidentally, log output on the device is available to knowledgable users. Take special care to remove logging statements if you use them to output sensitive information, such as user credentials, during testing.")]),e._v(" "),s("p",[e._v("Crash log evaluation includes looking at the build and runtime logs associated with the Titanium build scripts, native compilation steps, and runtime crash logging performed by the simulator/emulator or device. Error messages in those logs can help you track down the source of bugs.")]),e._v(" "),s("p",[e._v("Interactive debugging involves using a dedicated debugging tool or feature of your IDE to set breakpoints, then evaluate the state and values of variables during the execution of your program. Studio supports interactive debugging, with which you can set breakpoints at specific locations in your code, or set exception breakpoints to pause your program when a specific exception is raised.")]),e._v(" "),s("h3",{attrs:{id:"debugging-vs-software-testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debugging-vs-software-testing"}},[e._v("#")]),e._v(" Debugging vs. software testing")]),e._v(" "),s("p",[e._v("Debugging is a fundamentally different activity than testing. Testing comes before software is released to users. It involves confirming that features and functions work the way you say they're supposed to. Debugging comes later, after users have run your program and discovered a flaw. In a perfect world, testing would find bugs before you release the software. In reality, schedules, budgets, and other limitations prevent you from testing every possible permutation and use-case and some bugs will slip through. This guide doesn't cover testing.")]),e._v(" "),s("h3",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"http://www.ibm.com/developerworks/web/library/wa-debug/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn the essentials of debugging"),s("OutboundLink")],1),e._v(" (IBM)")])]),e._v(" "),s("li",[s("p",[s("a",{attrs:{href:"http://en.wikibooks.org/wiki/Computer_Programming_Principles/Maintaining/Debugging",target:"_blank",rel:"noopener noreferrer"}},[e._v("Debugging principles"),s("OutboundLink")],1),e._v(" (WikiBooks)")])])]),e._v(" "),s("h2",{attrs:{id:"summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),s("p",[e._v("In this section, you learned basic debugging concepts that you'll need in the subsequent sections in this chapter.")])])}),[],!1,null,null,null);t.default=o.exports}}]);