<template>
		<li class="weui_uploader_file" :class="{'leh-red-dot': reddot}">
			<slot></slot>
		</li>
</template>
<script>
	import cx from 'classnames'

	export default{
		props: {
			reddot: Boolean
		},

		data () {
			return{
				msg:'hello vue'
			}
		},

		ready() {
			console.log(this.reddot)
		},

		components: {
		}
	}
</script>

<style>

</style>