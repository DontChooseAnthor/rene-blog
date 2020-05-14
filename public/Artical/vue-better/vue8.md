```js
const data = items.map(item => optimizeItem(item));

function optimizeItem (item) {
	const itemData = {
		id: uid ++,
        vote: 0
	};
    Object.defineProperty(itemData, 'data', {
        // mark as non-reactive
        configurable: false,
        value: item
    });
    return itemData
}
```

