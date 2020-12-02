(window.webpackJsonp=window.webpackJsonp||[]).push([[763],{1965:function(e,t,n){"use strict";n.r(t);var o=n(21),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"titanium-ui-windows-style"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-windows-style"}},[e._v("#")]),e._v(" Titanium.UI.Windows.Style")]),e._v(" "),n("TypeHeader"),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("Styles let you reuse control properties for a consistent appearance across multiple controls.\nUse "),n("type-link",{attrs:{type:"Titanium.UI.Windows.createStyle"}},[e._v("Titanium.UI.Windows.createStyle()")]),e._v(" method\nand use "),n("code",[e._v("source")]),e._v(" property to indicate where to load XAML template.")],1),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("var style = Ti.UI.Windows.createStyle({\n    source: 'ms-appx:///Styles.xaml'\n});\n")])])]),n("p",[e._v("In "),n("code",[e._v("Styles.xaml")]),e._v(", you can define a theme using "),n("code",[e._v("ResourceDictionary.ThemeDictionaries")]),e._v("\nand any "),n("code",[e._v("Style")]),e._v(" with unique key like below.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<ResourceDictionary\n    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation" \n    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">\n\n    <ResourceDictionary.ThemeDictionaries>\n        <ResourceDictionary x:Key="Light">\n            <SolidColorBrush x:Key="ButtonBorderBrush" Color="Blue"/>\n            <SolidColorBrush x:Key="ButtonBorderBrushPointerOver" Color="Pink"/>\n            <SolidColorBrush x:Key="ButtonBorderBrushPressed" Color="Yellow"/>\n        </ResourceDictionary>\n    </ResourceDictionary.ThemeDictionaries>\n    \n    <Style x:Key="ButtonStyle" TargetType="Button">\n        <Setter Property="BorderThickness" Value="2" />\n    </Style>\n</ResourceDictionary>\n')])])]),n("p",[e._v("Then, use "),n("code",[e._v("apply")]),e._v(" to apply style and theme to the component.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("//\n// Apply Theme and Style\n//\nvar button = Ti.UI.createButton({\n    title: 'Button with XAML Theme and Style'\n});\nstyle.apply(button, 'ButtonStyle');\n")])])]),n("p",[e._v("If you want to apply theme only and you don't need specific "),n("code",[e._v("Style")]),e._v(", you can omit second parameter in "),n("code",[e._v("apply")]),e._v(".")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("//\n// Apply Theme only\n//\nvar button = Ti.UI.createButton({\n    title: 'Button with XAML Theme'\n});\nstyle.apply(button);\n")])])]),n("p",[e._v("For more information about XAML Style and Theme,\nrefer to "),n("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/uwp/controls-and-patterns/xaml-styles",target:"_blank",rel:"noopener noreferrer"}},[e._v("XAML styles"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("ApiDocs")],1)}),[],!1,null,null,null);t.default=r.exports}}]);