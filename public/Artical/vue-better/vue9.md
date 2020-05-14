```html
<recycle-scroller
    class="item"
    :items="items"
    :item-size="24"              
>
	<template v-slot="{item}">
    	<FetchItemView :item="item" @vote="voteItem(item)"/>
 	</template>
</recycle-scroller>
```

