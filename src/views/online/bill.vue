<template>
	<mt-content>
		<div class="nav document-index-head leh-bg-green">
			<div class="mint-header-button is-left" @click="lehBack">
				<i class="iconfont icon-wx-arr-left leh-c-white"></i>
			</div>
			<mt-button size="small" @click.prevent="active = 'case'" :class="{'leh-active' : selected === 'case'}">病历</mt-button>
			<mt-button size="small" @click.prevent="active = 'checked'" :class="{'leh-active' : selected === 'checked'}">检查单</mt-button>
			<mt-button size="small" @click.prevent="active = 'turn'" :class="{'leh-active' : selected === 'turn'}">转换中</mt-button>
		</div>
		<div class="page-tab-container">
			<mt-tab-container class="page-tabbar-tab-container" :active.sync="active">
				<mt-tab-container-item id="case">
					<div class="page-cell document-index-title">
						<a class="mint-cell" v-link="{path: '/online/billCase', replace: true}">
							<span class="mint-cell-mask"></span>
							<label class="mint-cell-title">
								<span class="mint-cell-text leh-c-green leh-red-dot">手写病历</span>
							</label>
							<div class="mint-cell-value">
								<span class="leh-c-black">2016-10-05</span>
							</div>
						</a>
					</div>
					<div class="leh-null-box"></div>
					<div class="page-cell document-index-title">
						<a class="mint-cell">
							<span class="mint-cell-mask"></span>
							<label class="mint-cell-title">
								<span class="mint-cell-text leh-c-green">已转换</span>
							</label>
							<div class="mint-cell-value"></div>
						</a>
					</div>
					<div class="page-cell document-index-list">
						<a class="mint-cell" v-for="n in 5" v-link="{path: '/online/billCaseList', replace: true}">
							<label class="mint-cell-title">
								<span class="mint-cell-text leh-text-ellipsis">乙肝合并肝硬化</span>
								<p class="document-index-list-text leh-text-ellipsis">感染性疾病</p>
							</label>
							<div class="mint-cell-value leh-red-dot">
								<span>2016-04-03</span>
							</div>
						</a>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="checked" :active.sync="active">
					<a class="mint-cell document-index-check-list" v-for="n in 6" v-link="{path: '/online/billCheck', replace: true}">
						<span class="mint-cell-mask"></span>
						<label class="mint-cell-title">
							<span class="mint-cell-text leh-red-dot">血常规</span>
						</label>
						<div class="mint-cell-value">
							<span>2016-10-05</span>
						</div>
					</a>
				</mt-tab-container-item>
				<mt-tab-container-item id="turn" :active.sync="active">
					<a class="mint-cell document-index-check-list" v-for="n in 8" v-link="{path: '/online/billTurn', replace: true}">
						<span class="mint-cell-mask"></span>
						<label class="mint-cell-title">
							<span class="mint-cell-text leh-red-dot">2016-05-12</span>
						</label>
						<div class="mint-cell-value">
							<span>5个未转换</span>
						</div>
					</a>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
	</mt-content>
</template>
<script>
	import MtContent from '../../components/content.vue'
	import MtButton from '../../components/button.vue'
	import MtField from '../../components/field.vue'
	import MtTabContainer from '../../components/tab-container.vue'
	import MtTabContainerItem from '../../components/tab-container-item.vue'
	import MtCell from '../../components/cell.vue'
	import $ from 'zepto'

	export default{
		route: {
			data (transition) {
				this.selected = ''
				this.active = ''
				this.selected = transition.to.query.actives
				this.active = transition.to.query.actives
			}
		},

		data () {
			return{
				active: '',
				selected: ''
			}
		},

		methods: {
			lehBack () {
				$(".leh-active").removeClass('leh-active')
				this.$route.router.go('/home')
			}
		},

		events: {
			'footer-button-event' (e) {
				console.log(e.target)
					$(e.target).siblings(".leh-active").removeClass('leh-active')
					$(e.target).addClass('leh-active')
			}
		},

		components: {
			MtContent,
			MtButton,
			MtField,
			MtTabContainer,
			MtTabContainerItem,
			MtCell
		}
	}
</script>

<style>
	.document-index-head{height: 40px;overflow: hidden;}
	.document-index-head .mint-header-button{width: 18%;float: left;line-height: 40px;margin-left: 10px;}
	.document-index-head .mint-button--default{float: left;width:20%;padding:0;margin-top:5px;height:30px;border:1px solid #fff;background-color: transparent;border-radius: 0;box-shadow: 0 0 0 transparent;}
	.document-index-head .mint-button--default:nth-of-type(1){border-right: 0;}
	.document-index-head .mint-button--default:nth-of-type(3){border-left: 0;}
	.document-index-head .mint-button--default.leh-active{background-color: #fff;color: #1faa2b;}
	.document-index-head .mint-button--default.leh-active .mint-button-text{color: #1faa2b;}
	.document-index-head .mint-button--default:nth-of-type(1){border-bottom-left-radius: 5px;border-top-left-radius: 5px;overflow: hidden;}
	.document-index-head .mint-button--default:nth-of-type(3){border-bottom-right-radius: 5px;border-top-right-radius: 5px;overflow: hidden;}
	.document-index-head .mint-button--default .mint-button-text{color: #fff;}
	.document-index-title .mint-cell:after,.document-index-title .mint-cell:before{border: 0;}
	.document-index-list .mint-cell:nth-last-of-type(1):before{border: 0;}
	.document-index-list .mint-cell-text{width: 120px;display: inline-block;}
	.document-index-list-text{font-size: 14px;color: #919191;margin-top: 10px;}
	.document-index-list .mint-cell-value span,.document-index-check-list .mint-cell-value span{font-size: 14px;}
	.document-index-list .mint-cell-value span{padding-top: 25px;}
	.document-index-list .mint-cell-value:after{right: 0;top: 4px;}
	.document-index-check-list:after{border: 0;}
	.document-index-check-list:nth-last-of-type(1):before{left: 10px;}

</style>