<template>
	<mt-header fixed isgrey title="选择病种"></mt-header>

	<mt-content>
		<div class="page-cell register-entity-box">
			<mt-cell :istitle="true" v-for="list in lists" :title="list.name" @click="doList($event)"></mt-cell>
		</div>
	</mt-content>
	<mt-button-single class-name="leh-bg-grey-btn" v-el:conf>确定</mt-button-single>
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtButtonSingle from '../../components/buttonSingle'
	import MtCell from '../../components/cell.vue'
	import $ from 'zepto'

	export default{
	  data () {
	    return{
		    is_conf: false,
		    lists: [
		    		{
			        name: '乙肝'
				    },
				    {
					    name: '丙肝'
				    },
				    {
					    name: '乙肝'
				    },
				    {
					    name: '免疫性疾病'
				    }
			    ]
	    }
	  },

		events: {
			'single-button-event' () {
				if(this.is_conf){
					this.$route.router.go('/home')
				}
			}
		},

		methods: {
			// 切换病种选项
			doList (e) {
				if($(e.target).hasClass('mint-cell')) {
					$(e.target).siblings(".leh-active").removeClass('leh-active')
					$(e.target).addClass('leh-active')
				}else {
					$(e.target).parents('.mint-cell').siblings(".leh-active").removeClass('leh-active')
					$(e.target).parents('.mint-cell').addClass('leh-active')
				}

				// 激活按钮
				this.is_conf = true
				$(this.$els.conf).removeClass('leh-bg-grey-btn')
			}
		},

		components: {
			MtContent,
			MtHeader,
			MtButtonSingle,
			MtCell
		}
	}
</script>

<style>
	.register-entity-box .mint-cell{line-height: 25px;}
	.register-entity-box .mint-cell:after{border-top: 0;}
	.register-entity-box .mint-cell:before{border-bottom-color: #e5e5e5;left: 0;}
	.register-entity-box .mint-cell.leh-active{color: #1faa2b;background-color: #f2f2f2;}
</style>