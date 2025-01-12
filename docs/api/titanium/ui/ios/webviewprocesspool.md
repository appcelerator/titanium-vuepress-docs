---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/iOS/WebViewProcessPool.yml
---
# Titanium.UI.iOS.WebViewProcessPool

<TypeHeader/>

## Overview

The process pool associated with a web view is specified by its web view configuration. Each web view 
is given its own Web Content process until an implementation-defined process limit is reached; after that,
web views with the same process pool end up sharing Web Content processes. Process pools do not take arguments, 
just pass the same reference to multiple web views. 

E.g.
``` js
var pool = Ti.UI.iOS.createWebViewProcessPool();

var config1 = Ti.UI.iOS.createWebViewConfiguration({
    processPool: pool
});

var config2 = Ti.UI.iOS.createWebViewConfiguration({
    processPool: pool
});

var firstWebView = Ti.UI.createWebView({
    top: 0,
    height: 250,
    configuration: config1,
    url: 'https://www.google.com'
});
var secondWebView = Ti.UI.createWebView({
    top: 250,
    configuration: config2,
    url: 'https://www.apple.com/'
});
var window = Ti.UI.createWindow();
window.add(firstWebView);
window.add(secondWebView);
window.open();
```

<ApiDocs/>
