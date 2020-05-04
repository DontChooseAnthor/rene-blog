```js
var Watcher = function Watcher(vm,expOrFn,cb,options) {
        this.vm = vm;
        vm._watchers.push(this);
        this.id = ++uid$2; // uid for batching
        this.deps = [];
        this.newDeps = [];
        this.depIds = new _Set();
        this.newDepIds = new _Set();
        // 将render函数赋值给getter
        this.getter = expOrFn;
        this.get()
}
Watcher.prototype.get = function get() {
        // 给Dep的target赋值为Watcher，为收集依赖做准备
        pushTarget(this);
        var value;
        var vm = this.vm;
        try {
            // 执行render，开始真正收集依赖
            value = this.getter.call(vm, vm);
        } catch (e) {
            if (this.user) {
                handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
            } else {
                throw e
            }
        } finally {
            // 重置Dep.target
            popTarget();
            // 在初次渲染完后触发set中的dep.notify()后
            // 再次触发watcher时去除没用的依赖收集新依赖
            this.cleanupDeps();
        }
        return value
    };
```

