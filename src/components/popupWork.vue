<template>
	<div class="leh-black-shade popup-work" :class="classed" v-if="visible">
		<div class="leh-remind-popup-box">
			<div class="leh-remind-popup-title" v-text="title"></div>
			<div class="leh-remind-popup-content">
				<slot></slot>
			</div>
			<div class="leh-remind-popup-footer">
				<mt-button istitle size="small" class-name="leh-remind-popup-cencel-btn" @click="cancle">取消</mt-button>
				<mt-button istitle size="small" class-name="leh-remind-popup-confirm-btn" @click="confirm">确定</mt-button>
			</div>
		</div>
	</div>

</template>
<script>
	import MtButton from '../components/button.vue'
	import cx from 'classnames'
	import $ from 'zepto'

	export default{
		props: {
			title: String,
			classed: String,
			visible: {
				type: Boolean,
				default: false,
				require: true
			},
			className: String
		},

	  data () {
	    return{
	      msg:'hello vue'
	    }
	  },

		methods: {
			cancle () {
				this.visible = false
			},
			confirm ($event) {
				let $parents = $($event.target).parents('.popup-work')
				this.$dispatch('popup-work',$parents)
				this.visible = false
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
			MtButton
		}
	}
</script>

<style>
	.leh-remind-popup-box{position: fixed;top: 30%;left: 50%;margin-left: -33%;background-color: #fff;width: 66%;border-radius: 5px;overflow: hidden;}
	.leh-remind-popup-title{line-height: 50px;text-align: center;font-size: 16px;}
	.leh-remind-popup-content{padding: 0 0 8px;}
	.leh-remind-popup-footer{overflow: hidden;width: 100%;}
	.leh-remind-popup-cencel-btn,.leh-remind-popup-confirm-btn{width: 50%;float: left;text-align: center;height: 40px;line-height: 40px;background-color: #f7f7f7;border-top: 1px solid #c8c8c8;border-radius: 0;}
	.leh-remind-popup-cencel-btn{color: #919191;border-right: 1px solid;}
	.leh-remind-popup-confirm-btn{color: #363636;}
</style>