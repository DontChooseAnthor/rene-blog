```js
updateComponent = function () {
     vm._update(vm._render(), hydrating);
};
vm._watcher = new Watcher(vm, updateComponent, noop);
```

