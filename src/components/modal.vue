<template>
	<div class="v-modal v-modal-enter" style="z-index: 4;" @click="closeModal"></div>
</template>
<script>
	import $ from 'zepto'

	export default{
		props: {
			visible: {
				type: Boolean,
				default: false
			}
		},

	  data () {
	    return{
	      msg:'hello vue'
	    }
	  },

		ready () {
			setTimeout(() => {
				$(this.$el).removeClass('v-modal-enter')
			},200)
		},

		components: {
		}
	}
</script>

<style>

</style>