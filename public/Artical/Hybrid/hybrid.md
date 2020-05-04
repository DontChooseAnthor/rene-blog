```js
// Swift
webview.stringByEvaluatingJavaScriptFromString("alert('NativeCall')")

// Android loadUrl (4.4-)
// 调用js中的JSBridge.trigger方法
webView.loadUrl("javascript:JSBridge.trigger('NativeCall')")
// Android evaluateJavascript (4.4+)
mWebView.evaluateJavascript（"javascript:JSBridge.trigger('NativeCall')",new ValueCallback<String>() {
    @Override
    public void onReceiveValue(String value) {
        //此处为 js 返回的结果
    }
});
```

