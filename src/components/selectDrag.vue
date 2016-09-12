<template>
	<ul class="leh-select-drag-box" v-if="visible">
		<slot></slot>
	</ul>
</template>
<script>
	export default{
		props: {
			visible: {
				type: Boolean,
				default: false,
				require: true
			}
		},

	  data () {
	    return{
	      msg:'hello vue'
	    }
	  },

		components: {
		}
	}
</script>

<style>

</style>