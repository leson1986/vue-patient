<template>
	<div class="weui_cells weui_cells_form" :class="classed">
		<div class="weui_cell">
			<div class="weui_cell_bd weui_cell_primary">
				<div class="weui_uploader">
					<div class="weui_uploader_bd">

						<slot></slot>
						<div class="weui_uploader_input_wrp" v-if="uploader">
							<input class="weui_uploader_input" type="file" accept="image/*" multiple="">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import cx from 'classnames'

	export default{
		props: {
			uploader: Boolean,
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

		components: {
		}
	}
</script>

<style>

</style>