```html
<template>
	<div :style="{opacity: number / 300 }">
        <ChildComp />
    </div>
</template>

<script>
	export default {
        props: ['number'],
        components: {
            ChilComp: {
                methods: {
                    heavy() {
                        // heavy task
                    }
                },
                render(h) {
                    return h('div', this.heavy())
                }
            }
        }
    }
</script>
```

