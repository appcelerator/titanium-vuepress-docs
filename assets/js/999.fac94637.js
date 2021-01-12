(window.webpackJsonp=window.webpackJsonp||[]).push([[999],{1227:function(e,t,i){"use strict";i.r(t);var a=i(21),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"ui-composite-layout-behavior-spec"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ui-composite-layout-behavior-spec"}},[e._v("#")]),e._v(" UI Composite Layout Behavior Spec")]),e._v(" "),i("h2",{attrs:{id:"contents"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),i("p",[e._v("Titanium's UI behavior has remained unspecified and fragmented across platforms, which makes cross-platform development difficult for users and designing tests to evaluate UI impractical. With proposed changes to the layout system, and more advanced testing frameworks, it has become necessary to explicitly define UI behavior in as many situations as possible.")]),e._v(" "),i("p",[e._v('This document is a codification of UI behavior (the "Composite" layout) for both Android and iOS platforms, including explicit specifications for unit types, order in which layout properties are valuated, "auto" behavior, and dealing with unset values.')]),e._v(" "),i("p",[e._v('The behavior for "Horizontal" and "Vertical" layouts will be specified in another document.')]),e._v(" "),i("h2",{attrs:{id:"backwards-compatibility-and-deprecation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility-and-deprecation"}},[e._v("#")]),e._v(" Backwards Compatibility and Deprecation")]),e._v(" "),i("p",[e._v('In Titanium Mobile 2.0, the value of any layout parameter on a View will always maintain that value, making it "static". The properties '),i("code",[e._v("size")]),e._v(", and "),i("code",[e._v("rect")]),e._v(', will now serve as the "dynamic" APIs that provide position and size. We will also maintain backwards compatibility with the current "immediate mode" layout scheme, but this behavior will be marked as '),i("strong",[e._v("DEPRECATED")]),e._v(". Moving forward, we will drop support for this method in favor of the the "),i("code",[e._v("startLayout")]),e._v(" / "),i("code",[e._v("finishLayout")]),e._v(", and "),i("code",[e._v("updateLayout")]),e._v(" semantics.")]),e._v(" "),i("h2",{attrs:{id:"definitions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[e._v("#")]),e._v(" Definitions")]),e._v(" "),i("ul",[i("li",[i("p",[e._v('dip : Density-independent pixels. A measurement which is translated natively to a corresponding pixel measure using a scale factor based on a platform-specific "default" density, and the device\'s physical density.')])]),e._v(" "),i("li",[i("p",[e._v("System unit : A platform-dependent unit which is the default for how the system presents its view information to the native layout system. On Android this is pixels; on iOS it is dip.")])])]),e._v(" "),i("h3",{attrs:{id:"layout-parameters"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#layout-parameters"}},[e._v("#")]),e._v(" Layout parameters")]),e._v(" "),i("p",[e._v('This is the list of Layout Parameters used by "Composite", "Horizontal", and "Vertical" layouts. Layout Parameters are discussed in more detail in the Layout specification, but these all correspond to existing layout settings.')]),e._v(" "),i("ul",[i("li",[i("p",[e._v("width : The width of the view")])]),e._v(" "),i("li",[i("p",[e._v("left : Pins left side of the view to this x position in the parent, measured from the parent's left bound.")])]),e._v(" "),i("li",[i("p",[e._v("right : Pins right side of the view to this x position in the parent, measured from the parent's right bound.")])]),e._v(" "),i("li",[i("p",[e._v("height : The height of the view")])]),e._v(" "),i("li",[i("p",[e._v("top : Pins top side of the view to this y position in the parent, measured from the parent's top bound.")])]),e._v(" "),i("li",[i("p",[e._v("bottom : Pins bottom side of the view to this y position in the parent, measured from the parent's bottom bound.")])]),e._v(" "),i("li",[i("p",[e._v("center : (x, y) : Pins the view's center to the specified point:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("center.x : The x-coordinate, measured from the parent's left bound")])]),e._v(" "),i("li",[i("p",[e._v("center.y : The y-coordinate, measured from the parent's top bound")])])])]),e._v(" "),i("li",[i("p",[e._v('layout : The layout type to use. The default value is for the "Composite" layout. Other valid values are "vertical" and "horizontal". This property is intended to be replaced by the new UI Layout API Spec')]),e._v(" "),i("ul",[i("li",[i("p",[e._v("'vertical' : Pinning happens vertically relative to other views inside the parent, using remaining space")])]),e._v(" "),i("li",[i("p",[e._v("'horizontal' : Pinning happens horizontally relative to other views inside the parent, using remaining space")])])])]),e._v(" "),i("li",[i("p",[e._v("zIndex : The stack order of the view inside its parent. Higher values are rendered towards the top.")])])]),e._v(" "),i("p",[e._v("When a child view's boundary exceeds that of the parent view, it should be clipped to the size of the parent view.")]),e._v(" "),i("h3",{attrs:{id:"available-units"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#available-units"}},[e._v("#")]),e._v(" Available units")]),e._v(" "),i("p",[e._v("A unit is a unit of measurement on the device screen or, for some types, a measurement relative to information from the parent view.")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Absolute measurements")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("px : pixels")])]),e._v(" "),i("li",[i("p",[e._v("mm : millimeters")])]),e._v(" "),i("li",[i("p",[e._v("cm : centimeters")])]),e._v(" "),i("li",[i("p",[e._v("in : inches")])]),e._v(" "),i("li",[i("p",[e._v("dp/dip : Density-independent pixels")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Android : px = dip * (screen density) / 160")])]),e._v(" "),i("li",[i("p",[e._v("iOS : px = dip * (screen density) / 163 (effectively; 1dip=1px on standard, 1dip=2px on retina)")])]),e._v(" "),i("li",[i("p",[e._v("Mobile Web: px = dip * (screen density) / 96 (effectively; 1dip=1px most browsers scale pages to 96dpi to make them consistent with desktops).")])])])])])]),e._v(" "),i("li",[i("p",[e._v("Relative measurements")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("% : Percentage of the size of the parent.")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("For x-axis values (width, left, right, center.x) this is relative to the parent's width")])]),e._v(" "),i("li",[i("p",[e._v("For y-axis values (height, top, bottom, center.y) this is relative to the parent's height.")])])])])])])]),e._v(" "),i("h3",{attrs:{id:"tiapp-xml-properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tiapp-xml-properties"}},[e._v("#")]),e._v(" tiapp.xml properties")]),e._v(" "),i("p",[e._v("We allow users to specify a default unit type to interpret untyped values. By default, this value is a special unit type only available to this property, 'system' (see "),i("a",{attrs:{href:"#definitions"}},[e._v("Definitions")]),e._v(", above).")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("ti.ui.defaultunit : String, the default unit to interpret values without a unit as.")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Generated in default tiapp.xml template (users can explicitly see default value)")])]),e._v(" "),i("li",[i("p",[e._v("Valid values: px, mm, cm, in, dp, dip, system")])])])])]),e._v(" "),i("p",[e._v("As of SDK 8.0.0, "),i("code",[e._v("dp")]),e._v(" starts supported for default unit on Windows. Since Windows default unit has been "),i("code",[e._v("px")]),e._v(" in previous versions this means this may cause breaking change. You might want to update your "),i("code",[e._v("tiapp.xml")]),e._v(" to use "),i("code",[e._v("px")]),e._v(" for default unit explicitly like "),i("code",[e._v('<property name="ti.ui.defaultunit" type="string">px</property>')]),e._v(" to keep consistency between previous SDK versions.")]),e._v(" "),i("h3",{attrs:{id:"precedence-of-layoutparams"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#precedence-of-layoutparams"}},[e._v("#")]),e._v(" Precedence of layoutParams")]),e._v(" "),i("p",[e._v("Certain parameters influence the calculation of others when they are unset (see "),i("a",{attrs:{href:"#undefined_behavior"}},[e._v("UNDEFINED behavior")]),e._v(" ). The purpose of establishing an order of precedence is only to determine when certain settings override others when there is an obvious conflict, or determine which properties are used for computing implicit values.")]),e._v(" "),i("p",[e._v("In order of precedence, from 'evaluated first' to 'evaluated last':")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("width : overrides implicit width calculations")])]),e._v(" "),i("li",[i("p",[e._v("left : overrides horizontal positioning determined by center.x, right")])]),e._v(" "),i("li",[i("p",[e._v("center.x : overrides horizontal positioning determined by other pins")])]),e._v(" "),i("li",[i("p",[e._v("right")])]),e._v(" "),i("li",[i("p",[e._v("height : overrides implicit height calculations")])]),e._v(" "),i("li",[i("p",[e._v("top : overrides vertical positioning determined by other pins")])]),e._v(" "),i("li",[i("p",[e._v("center.y : overrides vertical positioning determined by other pins")])]),e._v(" "),i("li",[i("p",[e._v("bottom")])])]),e._v(" "),i("p",[e._v("When a conflict occurs between the different layout params, the order of precedence will determine which params will be ignored. If a view has a width of 200, a left value of 100, and a right value of 10, then the view would be 200 wide, and 100 from the left of its parent view. The right value is ignored since it conflicts the width and left values, and has lower precedence.")]),e._v(" "),i("h3",{attrs:{id:"auto-size-behaviors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#auto-size-behaviors"}},[e._v("#")]),e._v(" Auto size behaviors")]),e._v(" "),i("p",[e._v('"auto" (sometimes refered to as "psychic") is a measurement specification for width/height which "sizes the view appropriately given the type of view and its contents." This is a vague descriptor, and has been broken up into two general specified behaviors: SIZE and FILL.')]),e._v(" "),i("p",[e._v('"auto" will be deprecated in 2.0.0, to be replaced with Ti.UI.SIZE and Ti.UI.FILL constants which represent explicit "auto" behavior. As a result, this section codifies existing "auto" behavior into these two subtypes, and declares which views use which type when their width or height is set to "auto" under the present system.')]),e._v(" "),i("h4",{attrs:{id:"scrollview-content-size"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#scrollview-content-size"}},[e._v("#")]),e._v(" ScrollView content size")]),e._v(" "),i("p",[e._v('In the case of ScrollView, contentWidth and contentHeight may also be set to "auto", and in those cases, this is the expected behavior:')]),e._v(" "),i("ul",[i("li",[i("p",[e._v("When "),i("strong",[i("em",[e._v("all")])]),e._v(" children views have FILL behavior, the content area of the scroll view will be clipped to the physical size of the scroll view")])]),e._v(" "),i("li",[i("p",[e._v("Otherwise, the content area will grow according to the bottom offset of the bottom-most View and the right offset of right-most View. In some cases the bottom-most and right-most View may be the same View.")])])]),e._v(" "),i("h3",{attrs:{id:"size-behavior"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#size-behavior"}},[e._v("#")]),e._v(" SIZE behavior")]),e._v(" "),i("p",[e._v("This behavior represents constraining a view size to fit its contents.")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("height only : Constrained by view's width, or if width is incalcuable (<2 horizontal pinning properties) and unset, then constrained by parent's width.")])]),e._v(" "),i("li",[i("p",[e._v("width only : Constrained by view's height, or if height is incalculable (<2 vertical pinning properties) and unset, then constrained by parent's height.")])]),e._v(" "),i("li",[i("p",[e._v("height + width : width constrained by parent width, height constraint by content height, i.e. grows to fill width first, and then sizes height to display content.")])])]),e._v(" "),i("h4",{attrs:{id:"scrollview-size"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#scrollview-size"}},[e._v("#")]),e._v(" ScrollView SIZE")]),e._v(" "),i("p",[e._v("Scrollview "),i("code",[e._v("contentWidth")]),e._v(" or "),i("code",[e._v("contentHeight")]),e._v(" can be set to "),i("code",[e._v("Ti.UI.SIZE")]),e._v(". This value behaves as "),i("code",[e._v("SIZE")]),e._v(" is described above, where the scrollview itself first sizes to contents, and then if those contents extend beyond the bounds of the scrollview, the content view sizes to fit the contents appropriately.")]),e._v(" "),i("h3",{attrs:{id:"fill-behavior"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fill-behavior"}},[e._v("#")]),e._v(" FILL behavior")]),e._v(" "),i("p",[e._v("This behavior represents growing a view size to fill its parent.")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("height only : Fills all available vertical space inside the parent")])]),e._v(" "),i("li",[i("p",[e._v("width only : Fills all available horizontal space inside the parent")])]),e._v(" "),i("li",[i("p",[e._v("height + width : Fills all available space inside the parent\\")])]),e._v(" "),i("li",[i("p",[e._v("NOTE: The fill behavior does not take any other views into account except for its parent. i.e. If the parent view has 2 children, the first with a static width/height and the second with fill behavior for both, the second view will still fill its parent.")])]),e._v(" "),i("li",[i("p",[e._v("If the parent does not have a height/width constraint (i.e. The parent has size behavior for width/height while the child has fill behavior), then the view will recursively go through the parents to find a width/height constraint and fill to that constraint.")])])]),e._v(" "),i("h4",{attrs:{id:"scrollview-fill"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#scrollview-fill"}},[e._v("#")]),e._v(" ScrollView FILL")]),e._v(" "),i("p",[e._v("Scrollview "),i("code",[e._v("contentWidth")]),e._v(" or "),i("code",[e._v("contentHeight")]),e._v(" can be set to "),i("code",[e._v("Ti.UI.FILL")]),e._v(". Regardless of contents, this behaves as described above, meaning that the content view bounds fill the scrollview. This has the side-effect that the scrollview does not scroll, so using this value is considered undesirable.")]),e._v(" "),i("h3",{attrs:{id:"view-auto-size-classification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#view-auto-size-classification"}},[e._v("#")]),e._v(" View auto size classification")]),e._v(" "),i("p",[e._v("Views are logically grouped into either SIZE or FILL for their auto behavior. Windows FILL the screen by default.")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("SIZE Views")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Button")])]),e._v(" "),i("li",[i("p",[e._v("Label")])]),e._v(" "),i("li",[i("p",[e._v("ImageView")])]),e._v(" "),i("li",[i("p",[e._v("ProgressBar")])]),e._v(" "),i("li",[i("p",[e._v("Switch")])]),e._v(" "),i("li",[i("p",[e._v("TextArea")])]),e._v(" "),i("li",[i("p",[e._v("TextField")])]),e._v(" "),i("li",[i("p",[e._v("Picker")])]),e._v(" "),i("li",[i("p",[e._v("SearchBar")]),e._v(" "),i("ul",[i("li",[e._v("height only, FILL width")])])]),e._v(" "),i("li",[i("p",[e._v("ButtonBar")])]),e._v(" "),i("li",[i("p",[e._v("TableViewSection")])])])]),e._v(" "),i("li",[i("p",[e._v("FILL Views")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("View")])]),e._v(" "),i("li",[i("p",[e._v("TabGroup")])]),e._v(" "),i("li",[i("p",[e._v("VideoView")])]),e._v(" "),i("li",[i("p",[e._v("Toolbar")]),e._v(" "),i("ul",[i("li",[e._v("width only, SIZE height")])])]),e._v(" "),i("li",[i("p",[e._v("TableView")])]),e._v(" "),i("li",[i("p",[e._v("TableViewRow")]),e._v(" "),i("ul",[i("li",[e._v("width only, SIZE height")])])]),e._v(" "),i("li",[i("p",[e._v("WebView")])]),e._v(" "),i("li",[i("p",[e._v("ScrollView")])]),e._v(" "),i("li",[i("p",[e._v("ScrollableView")])]),e._v(" "),i("li",[i("p",[e._v("Slider")]),e._v(" "),i("ul",[i("li",[e._v("width only, SIZE height")])])])])])]),e._v(" "),i("h3",{attrs:{id:"undefined-behavior"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#undefined-behavior"}},[e._v("#")]),e._v(" UNDEFINED behavior")]),e._v(" "),i("p",[e._v("If layout parameter values are undefined, then this means that they need to be computed based on existing values if possible, and if not, then have some sensible default.")]),e._v(" "),i("div",{staticClass:"warning custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),i("p",[i("strong",[e._v("The layout parameters themselves will not actually change value, the dynamic APIs")]),e._v(" "),i("code",[e._v("rect")]),e._v(" "),i("strong",[e._v("and")]),e._v(" "),i("code",[e._v("size")]),e._v(" "),i("strong",[e._v("will contain the actual system values.")])])]),e._v(" "),i("ul",[i("li",[i("p",[e._v("width : implicit based on horizontal pins (left, center.x, right)")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("If two (or more) horizontal pins are available, computed from these values")])]),e._v(" "),i("li",[i("p",[e._v('Otherwise, follows view\'s "auto" behavior')]),e._v(" "),i("ul",[i("li",[e._v('On "auto" deprecation, follows SIZE behavior')])])]),e._v(" "),i("li",[i("p",[e._v("If width is dependent on the parent (e.g. percentage), and the parent is set to SIZE, width is undefined")])])])]),e._v(" "),i("li",[i("p",[e._v("left : implicit based on other horizontal pins (center.x, right)")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("If no pinning properties are set : The view is centered horizontally in it's parent")])]),e._v(" "),i("li",[i("p",[e._v("Otherwise, no left side pinning")])])])]),e._v(" "),i("li",[i("p",[e._v("center.x : No center pinning (horizontal)")])]),e._v(" "),i("li",[i("p",[e._v("right : No right side pinning")])]),e._v(" "),i("li",[i("p",[e._v("height : implicit based on vertical pins (top, center.y, bottom)")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("If two (or more) vertical pins are available, computed from these values")])]),e._v(" "),i("li",[i("p",[e._v('Otherwise, follows view\'s "auto" behavior')]),e._v(" "),i("ul",[i("li",[e._v('On "auto" deprecation, follows SIZE behavior')])])]),e._v(" "),i("li",[i("p",[e._v("If height is dependent on the parent (e.g. percentage), and the parent is set to SIZE, height is undefined")])])])]),e._v(" "),i("li",[i("p",[e._v("top : implicit based on other vertical pins (center.y, bottom)")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("If no pinning properties are set : The view is centered vertically in it's parent")])]),e._v(" "),i("li",[i("p",[e._v("Otherwise, no top side pinning")])])])]),e._v(" "),i("li",[i("p",[e._v("center.y : No center pinning (vertical)")])]),e._v(" "),i("li",[i("p",[e._v("bottom : No bottom side pinning")])]),e._v(" "),i("li",[i("p",[e._v("zIndex: implementation treats as 0, but will still be undefined in the View's layout params. Views are stacked in order of being added to the parent based on their index.")])])]),e._v(" "),i("h4",{attrs:{id:"undefined-and-scrollview-contents"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#undefined-and-scrollview-contents"}},[e._v("#")]),e._v(" UNDEFINED and scrollview contents")]),e._v(" "),i("p",[e._v("For clarity, scrollview "),i("code",[e._v("contentWidth")]),e._v(" and "),i("code",[e._v("contentHeight")]),e._v(' behave as if they were set to "auto" when undefined. This is consistent with the behavior described above.')]),e._v(" "),i("h2",{attrs:{id:"code-examples"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#code-examples"}},[e._v("#")]),e._v(" Code Examples")]),e._v(" "),i("p",[e._v('Each of these examples contrast the way something is done today ("old") with the way it will be done with the new dynamic size / rect properties, and batch updating semantics ("new").')]),e._v(" "),i("p",[i("strong",[e._v("Updating Layout Parameters")])]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("// [old] changes the top and left of the view directly, re-layout twice\nview.top = 50;\nview.left = 50;\n\n// [new] change top and left, but only request a single layout\nview.startLayout();\nview.top = 50;\nview.left = 50;\nview.finishLayout();\n\n// [new] equivalent to above, but using batch update for convenience\nview.updateLayout({\n    top: 50, left: 50\n});\n")])])]),i("p",[i("strong",[e._v("Get Native and Model parameters")])]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v('view.width = 100;\n\n// [old] get the views\'s native width, but user supplied width is unavailable\n// view.width may not necessarily be 100 after being laid out\nTi.API.debug("view width = " + view.width);\n\n// [new] get the view\'s native width, and the user supplied width\n// view.rect, view.size, are the new dynamic/native APIs\n// view.X will always have the user-supplied layout params\nTi.API.debug("button width = " + view.rect.width + ", my width = " + view.width);\n')])])]),i("h2",{attrs:{id:"proposed-api"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#proposed-api"}},[e._v("#")]),e._v(" Proposed API")]),e._v(" "),i("h3",{attrs:{id:"dimension-duck-type"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#dimension-duck-type"}},[e._v("#")]),e._v(" Dimension (duck type)")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Properties")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("x : Number")])]),e._v(" "),i("li",[i("p",[e._v("y : Number")])]),e._v(" "),i("li",[i("p",[e._v("width : Number")])]),e._v(" "),i("li",[i("p",[e._v("height : Number")])])])])]),e._v(" "),i("h3",{attrs:{id:"ti-ui-view"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ti-ui-view"}},[e._v("#")]),e._v(" Ti.UI.View")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Properties")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("size : "),i("a",{attrs:{href:"#Dimension"}},[e._v("Dimension")]),e._v(", read-only, returns the bounds of the view in system units. x and y properties are always 0")])]),e._v(" "),i("li",[i("p",[e._v("rect : "),i("a",{attrs:{href:"#Dimension"}},[e._v("Dimension")]),e._v(", read-only, returns the frame of the view (position relative to parent bounds) in system units.")])]),e._v(" "),i("li",[i("p",[e._v("left : String or Number, the left bound of the view specified by the user")])]),e._v(" "),i("li",[i("p",[e._v("right : String or Number, the right bound of the view specified by the user")])]),e._v(" "),i("li",[i("p",[e._v("top : String or Number, the top bound of the view specified by the user")])]),e._v(" "),i("li",[i("p",[e._v("bottom : String or Number, the bottom bound of the view specified by the user")])]),e._v(" "),i("li",[i("p",[e._v("center : Object, the center point of the view specified by the user")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("x : String or Number, the x coordinate of the center point")])]),e._v(" "),i("li",[i("p",[e._v("y : String or Number, the y coordinate of the center point")])])])]),e._v(" "),i("li",[i("p",[e._v("width : String or Number, the width of the view specified by the user")])]),e._v(" "),i("li",[i("p",[e._v("height : String or Number, the height of the view specified by the user")])])])]),e._v(" "),i("li",[i("p",[e._v("Functions")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("startLayout() : void, starts a batch-update of the View's layout params")])]),e._v(" "),i("li",[i("p",[e._v("finishLayout() : void, finishes a batch-update of the View's layout params, and schedules a layout pass of the view tree")])]),e._v(" "),i("li",[i("p",[e._v("updateLayout(Object params) : void, performs a batch-update of all supplied layout params, and schedules a layout pass after they have been updated")])])])])]),e._v(" "),i("h3",{attrs:{id:"ti-ui"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ti-ui"}},[e._v("#")]),e._v(" Ti.UI")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Constants")]),e._v(" "),i("ul",[i("li",[i("p",[e._v('Ti.UI.SIZE : Sets a view\'s height/width to be that of "auto" SIZE')])]),e._v(" "),i("li",[i("p",[e._v('Ti.UI.FILL : Sets a view\'s height/width to be that of "auto" FILL')])]),e._v(" "),i("li",[i("p",[e._v("Ti.UI.UNIT_PX : px unit")])]),e._v(" "),i("li",[i("p",[e._v("Ti.UI.UNIT_MM : mm unit")])]),e._v(" "),i("li",[i("p",[e._v("Ti.UI.UNIT_CM : cm unit")])]),e._v(" "),i("li",[i("p",[e._v("Ti.UI.UNIT_IN : in unit")])]),e._v(" "),i("li",[i("p",[e._v("Ti.UI.UNIT_DIP : dip unit")])])])]),e._v(" "),i("li",[i("p",[e._v("Functions")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("convertUnits(String convertFromValue, String convertToUnits) : Number, the conversion of one unit type to another using the metrics of the main Display")]),e._v(" "),i("ul",[i("li",[i("p",[e._v('convertFromValue : A measurement and optional unit to convert from, i.e. 160, "120dip"')])]),e._v(" "),i("li",[i("p",[e._v("convertToUnits : The unit to convert to from one of the UNIT_* constants above")])]),e._v(" "),i("li",[i("p",[i("em",[e._v("NOTE")]),e._v(" we will need to accomodate for multiple displays in future revisions of this API")])]),e._v(" "),i("li",[i("p",[i("em",[e._v("NOTE")]),e._v(" because parent/self information is required for converting % values, there is no unit constant for '%' or conversions allowed to/from this value. If a percent value is passed in, this method returns 0.")])])])])])])]),e._v(" "),i("h3",{attrs:{id:"events"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),i("ul",[i("li",[e._v("'postlayout' : This event will be fired after a layout pass has occurred.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);