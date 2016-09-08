<template>
	<button class="leh-float-box" @touchstart="handleClick">
		<div class="leh-float-btn" :class="classed"><slot></slot></div>
	</button>
</template>
<script>
	import cx from 'classnames'
	export default{
		props: {
			className: String
		},

	  data () {
	    return{
	      msg:'hello vue'
	    }
	  },

		computed: {
			classed () {
				return cx({
					[this.className]: !!this.className
				})
			}
		},

		methods: {
			handleClick($event) {
				$event.preventDefault();
				$event.stopPropagation();

				this.$dispatch('single-button-event',$event)
			}
		},

		components: {
		}
	}
</script>

<style>

</style>