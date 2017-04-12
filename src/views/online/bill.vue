<template>
	<mt-content>
		<div class="nav document-index-head leh-bg-green">
			<div class="mint-header-button is-left" @click="lehBack">
				<i class="iconfont icon-wx-arr-left leh-c-white"></i>
			</div>
			<mt-button size="small" @click.prevent="active = 'case'" :class="{'leh-active' : active === 'case'}">病历</mt-button>
			<mt-button size="small" @click.prevent="active = 'checked'" :class="{'leh-active' : active === 'checked'}">检查单</mt-button>
			<mt-button size="small" @click.prevent="active = 'turn'" :class="{'leh-active' : active === 'turn'}">转换中</mt-button>
		</div>
		<div class="page-tab-container">
			<mt-tab-container class="page-tabbar-tab-container" :active.sync="active">
				<mt-tab-container-item id="case">
					<div class="page-cell document-index-title">
						<a class="mint-cell" v-link="{path: '/online/billCase', query: {dates: summaryItems.updateTime}, replace: true}">
							<span class="mint-cell-mask"></span>
							<label class="mint-cell-title">
								<span class="mint-cell-text leh-c-green" :class="{'leh-red-dot': summaryItems.unread}">手写病历</span>
							</label>
							<div class="mint-cell-value">
								<span class="leh-c-black">{{ summaryItems.updateTime }}</span>
								<span class="iconfont icon-wx-arr-right"></span>
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
						<div class="leh-null-data" v-if="medicalItems.length <= 0">暂无数据</div>
						<a class="mint-cell" v-for="items in medicalItems" v-link="{path: '/online/billCaseList', query:{id: items.id}, replace: true}">
							<label class="mint-cell-title">
								<span class="mint-cell-text leh-text-ellipsis">{{ items.rcdResult }}</span>
								<p class="document-index-list-text leh-text-ellipsis">{{ items.custName }}</p>
							</label>
							<div class="mint-cell-value" :class="{'leh-red-dot': items.unread}">
								<span>{{ items.rcdTime }}</span>
							</div>
						</a>
						<div class="page-infinite-loading document-index-load-tap" v-if="pageMedicalNum*8 < pageMedicalTotal">
							<mt-button size="large" type="transparent" icon="load" @click="moreMedical" >点击加载更多</mt-button>
						</div>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="checked" :active.sync="active">
					<div class="leh-null-data" v-if="!chkItems.length">暂无数据</div>
					<a class="mint-cell document-index-check-list" v-for="items in chkItems" v-link="{path: '/online/billCheck', query:{gid: items.groupId, cid: items.chkTypeIds,chkName:items.groupName}, replace: true}">
						<span class="mint-cell-mask"></span>
						<label class="mint-cell-title">
							<span class="mint-cell-text" :class="{'leh-red-dot': items.unread}">{{ items.groupName }}</span>
						</label>
						<div class="mint-cell-value">
							<span>{{ items.reportTime }}</span>
						</div>
					</a>
					<div class="page-infinite-loading document-index-load-tap" v-if="pageChkNum*10 < pageChkTotal">
						<mt-button size="large" type="transparent" icon="load" @click="moreChk" >点击加载更多</mt-button>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="turn" :active.sync="active">
					<div class="leh-null-data" v-if="!fileCheckItems.length">暂无数据</div>
					<a class="mint-cell document-index-check-list" v-for="items in fileCheckItems" @click="toTurnUrl(items.date)">
						<!--<a class="mint-cell document-index-check-list" v-for="items in fileCheckItems" v-link="{path: '/online/billTurn', query:{date: items.date}, replace: true}">-->
						<span class="mint-cell-mask"></span>
						<label class="mint-cell-title">
							<span class="mint-cell-text" :class="{'leh-red-dot': items.unread}">{{ items.date }}</span>
						</label>
						<div class="mint-cell-value">
							<span>{{ items.processingQty }}个未转换</span>
						</div>
					</a>
					<div class="page-infinite-loading document-index-load-tap" v-if="pageFileCheckNum*10 < pageFileCheckTotal">
						<mt-button size="large" type="transparent" icon="load" @click="moreFileCheck" >点击加载更多</mt-button>
					</div>
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
	import {getJson} from 'util'
	import $ from 'zepto'

	export default{
		route: {
			data ({to, next}) {

				this.selected = ''
				this.active = ''
				this.selected = to.query.actives
				this.active = to.query.actives


				//this.isBillPage = to.query.tobill || false
				//if(this.isBillPage) return // 是否从列表页返回

				// 初始化数据
				this.pageMedicalNum = 1
				this.pageChkNum = 1
				this.pageFileCheckNum = 1
				this.getBillList()

				next()
			}
		},

		data () {
			return{
				active: '',
				selected: '',
				isBillPage: false,
				summaryItems: '', // 手写病历信息
				medicalItems: [],  // 病历列表
				chkItems: [],  // 检查单列表
				fileCheckItems: [],  // 转换中列表
				pageMedicalTotal: 0,  // 病历列表总数
				pageChkTotal: 0,  // 检查单列表总数
				pageFileCheckTotal: 0,   // 转换中列表总数
				pageMedicalNum: 1,  // 病历列表页码
				pageChkNum: 1,  // 检查单列表页码
				pageFileCheckNum: 1   // 转换中列表页码

			}
		},

		methods: {
			// 跳转到拍照页面
			toTurnUrl (dates) {
				window.location.href='http://wx.jk7.com/html/pay/vue_turn.html?dates='+ dates;
			},
			lehBack () {
				$(".leh-active").removeClass('leh-active')
				this.$route.router.go({path: '/home'})
			},

			// 更新数据
			getBillList () {


				let _self = this

				// 加载手写病历信息
				getJson('api/handwriting/summary', '', (rsp)=>{

					_self.summaryItems = rsp || []

					// 加载病历列表
					getJson('api/Medical?pageIndex=1&pageSize=8', '', (rsp_medical)=>{

						_self.medicalItems = rsp_medical.items
						_self.pageMedicalTotal = rsp_medical.totalQty

						// 加载检查单列表
						getJson('api/Chk?pageIndex=1&pageSize=10', '', (rsp_chk)=>{

							_self.chkItems = rsp_chk.items
							_self.pageChkTotal = rsp_chk.totalQty

							// 加载检查单列表
							getJson('api/FileCheck?pageIndex=1&pageSize=10', '', (rsp_file_check)=>{

								_self.fileCheckItems = rsp_file_check.items
								_self.pageFileCheckTotal = rsp_file_check.totalQty

							},_self)
						},_self)
				},_self)
				},_self)
			},

			// 点击加载更多--病历
			moreMedical () {

				let _self = this

				if(_self.pageMedicalNum*8 >= _self.pageMedicalTotal) {
					return
				}
				_self.pageMedicalNum = _self.pageMedicalNum + 1
				getJson('api/Medical?pageIndex='+ this.pageMedicalNum +'&pageSize=8', '', (rsp)=>{

					// 合并数组
					_self.medicalItems = _self.medicalItems.concat(rsp.items)

				},_self)
			},

			// 点击加载更多--检查单
			moreChk () {

				let _self = this

				if(_self.pageChkNum*10 >= _self.pageChkTotal) {
					return
				}
				_self.pageChkNum = _self.pageChkNum + 1
				getJson('api/Chk?pageIndex='+ _self.pageChkNum +'&pageSize=10', '', (rsp_chk)=>{

					// 合并数组
					_self.chkItems = _self.chkItems.concat(rsp_chk.items)
				},_self)
			},

			// 点击加载更多--转换中
			moreFileCheck () {

				let _self = this

				if(_self.pageFileCheckNum*10 >= _self.pageFileCheckTotal) {
					return
				}
				_self.pageFileCheckNum = _self.pageFileCheckNum + 1
				getJson('api/FileCheck?pageIndex='+ this.pageFileCheckNum +'&pageSize=10', '', (rsp_file_check)=>{

					// 合并数组
					_self.fileCheckItems = _self.fileCheckItems.concat(rsp_file_check.items)
				},_self)
			}
		},

		events: {
			'footer-button-event' (e) {
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
	.document-index-head{height: 40px;width: 100%;overflow: hidden;position: absolute;top: 0;left: 0;z-index: 10;}
	.document-index-head~.page-tab-container{position:absolute;top:40px;bottom:0;left:0;right:0;overflow-x:hidden;overflow-y: auto;}
	.document-index-head .mint-header-button{width: 18%;float: left;line-height: 40px;margin-left: 10px;}
	.document-index-head .mint-button--default{float: left;width:20%;padding:0;margin-top:5px;height:30px;border:1px solid #fff;background-color: transparent;border-radius: 0;box-shadow: 0 0 0 transparent;}
	.document-index-head .mint-button--default:nth-of-type(1){border-right: 0;}
	.document-index-head .mint-button--default:nth-of-type(3){border-left: 0;margin-left: -0.5px}
	.document-index-head .mint-button--default.leh-active{background-color: #fff;color: #1faa2b;}
	.document-index-head .mint-button--default.leh-active .mint-button-text{color: #1faa2b;}
	.document-index-head .mint-button--default:nth-of-type(1){border-bottom-left-radius: 5px;border-top-left-radius: 5px;overflow: hidden;}
	.document-index-head .mint-button--default:nth-of-type(3){border-bottom-right-radius: 5px;border-top-right-radius: 5px;overflow: hidden;}
	.document-index-head .mint-button--default .mint-button-text{color: #fff;}
	.document-index-title .mint-cell:after,.document-index-title:nth-of-type(1) .mint-cell:before,.document-index-list .mint-cell:nth-of-type(1):after{border: 0;}
	.document-index-list .mint-cell:nth-last-of-type(1):before{left: 10px;}
	.document-index-list .mint-cell-text{width: 120px;display: inline-block;}
	.document-index-list-text{font-size: 14px;color: #919191;margin-top: 10px;min-height: 14px;}
	.document-index-list .mint-cell-value span,.document-index-check-list .mint-cell-value span{font-size: 14px;}
	.document-index-list .mint-cell-value span{padding-top: 25px;display: block;position: relative}
	.document-index-list .mint-cell-value:after{right: 0;top: 4px;}
	.document-index-check-list:after{border: 0;}
	.document-index-check-list:nth-last-of-type(1):before{left: 10px;}
	.document-index-load-tap .mint-button--transparent{text-align: center;}
	.document-index-load-tap .icon-wx-load{color: #e5e5e5;}
	.document-index-load-tap .mint-button-text{font-size: 14px;}
	.document-index-title .mint-cell-value .icon-wx-arr-right{margin-left: 5px}

</style>
