```js
fetchItems({ commit }, { items }) {
	commit('clearItems');
	commit('addItems', items)
}
```

改写为:

```js
fetchItems({ commit }, { items, splitCount }) {
    commit('clearItems');
    //新建一个队列
    const queue = new JobQueue();
    splitArray(items, splitCount).forEach(chunk => queue.addJob(done => {
        // 分片
        requestAnimationFrame(() => {
            commit('addItems', chunk);
            done()
        });
    }));
    
    // 等待所有数据处理完毕
    awiat queue.start();
}
```

