<template>
	<mt-header fixed isgrey title="随访日程">
		<mt-button v-link="'/home'" icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<div class="leh-float-box">
		<mt-button type="green" v-link="'/online/schemeAdd'">新增日程</mt-button>
	</div>
	<mt-content class="leh-bg-grey-body">
		<!--无日程-->
		<div class="leh-not-apply" v-if="!dailyItems.length">暂无日程安排</div>
		<!--有日程-->
		<div class="schedule-apply" v-for="datas in dailyItems">
			<div class="page-cell schedule-apply-title">
				<a class="mint-cell">
					<label class="mint-cell-title">
						<span class="mint-cell-text">{{ datas.group }}</span>
					</label>
					<div class="mint-cell-value"></div>
				</a>
			</div>
			<mt-translate>
				<mt-translate-item
						class-name="schedule-apply-list"
						v-for="items in datas.data"
						:class="{'leh-active': items.status}"
						:name="items.id"
						:delbtn="!!!items.status">
					<a class="mint-cell">
						<label class="mint-cell-title" v-link="{path: '/online/schemeAdd', query: {id: items.id, isEdit: true}, replace: true}">
							<div class="schedule-apply-main">
								<span class="mint-cell-text" :class="{'leh-red-dot': items.unread}">{{ items.date.substring(5,10) }}</span>
								<span class="mint-cell-label">{{ items.dayTime }}</span>
							</div>
							<div class="schedule-apply-txt">{{ items.recheckItem }}</div>
						</label>
						<div class="mint-cell-value" @click="putStatus(items.id, items.status)">
							<span class="iconfont icon-wx-ling"></span>
						</div>
					</a>
				</mt-translate-item>
			</mt-translate>

			<!--<div class="page-infinite-loading document-index-load-tap" v-if="pageDailyNum*8 < pageDailyTotal">
				<mt-button size="large" type="transparent" icon="load" @click="moreDaily" >点击加载更多</mt-button>
			</div>-->

		</div>
	</mt-content>
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtButtonSingle from '../../components/buttonSingle'
	import MtCell from '../../components/cell.vue'
	import MtButton from '../../components/button.vue'
	import MtTranslate from '../../components/translate.vue'
	import MtTranslateItem from '../../components/translateItem.vue'
	import MtPopupBox from '../../components/popupBox.vue'
	import MessageBox from 'vue-msgbox'
	import {getJson, postJson, delJson} from 'util'
	import $ from 'zepto'

	export default{
		route: {
			data (transition) {

				// 初始化数据
				this.getDailyList()
			}
		},

		data () {
			return{
				is_visible: false,
				ispopup: false,
				ids: '',
				dailyItems: [], // 日程数组
				pageDailyNum: '', // 日程列表页码
				pageDailyTotal: '', // 日程列表总数
			}
		},

		methods: {

			cancle () {
				this.ispopup  = false
			},

			conf () {
				this.ispopup  = false
			},

			msgBox (ids) {

				let _self = this
				MessageBox({
					title: '提示',
					message: '是否确认删除本日程?',
					showCancelButton: true
				}).then(action => {
					if(action === 'confirm'){

						// 删除
						delJson('api/recheck/'+ ids, '', (rsp)=>{
							_self.getDailyList()
						},_self)
					}
				});
			},

			// 获取日程数据
			getDailyList () {

				let _self = this
				getJson('api/recheck/index', '', (rsp)=>{

					let reGroup = _self.reGroupArr(rsp.items)
					_self.dailyItems = reGroup
					_self.pageDailyTotal = rsp.totalQty

				},_self)
			},

			// 点击加载更多
			moreDaily () {

			/*	let _self = this

				if(_self.pageDailyNum*8 >= _self.pageDailyTotal) {
					return
				}
				_self.pageDailyNum = _self.pageDailyNum + 1
				getJson('api/recheck/index?pageIndex='+ this.pageDailyNum +'&pageSize=8', '', (rsp)=>{

					// 合并数组
					let reGroup = _self.reGroupArr(rsp.items)
					_self.dailyItems = _self.dailyItems.concat(reGroup)

				},_self)*/
			},

			// 重组索引数组
			reGroupArr (arr) {
				var map = {},
						dest = [];
				for (let i = 0; i < arr.length; i++) {
					let ai = arr[i];
					if (!map[ai.group]) {
						dest.push({
							group: ai.group,
							data: [ai]
						});
						map[ai.group] = ai;
					} else {
						for (let j = 0; j < dest.length; j++) {
							let dj = dest[j];
							if (dj.group == ai.group) {
								dj.data.push(ai);
								break;
							}
						}
					}
				}

				return dest;
			},

			// 修改状态
			putStatus (ids, status) {

				let _self = this
				if(status === 1) {

					postJson('api/recheck/disable/'+ ids, '', (rsp)=>{

						_self.getDailyList()
					},_self)
				}else {

					postJson('api/recheck/enable/'+ ids, '', (rsp)=>{

						_self.getDailyList()
					},_self)
				}
			}
		},

		events: {
			'handle-del' (e) {
				//this.ispopup  = true
				this.ids = $(e.target).attr('id')
				this.msgBox(this.ids)
			}
		},

		components: {
			MtContent,
			MtHeader,
			MtButtonSingle,
			MtCell,
			MtButton,
			MtTranslate,
			MtTranslateItem,
			MtPopupBox
		}
	}
</script>

<style>
	.schedule-apply-title .mint-cell{background-color: #f0f0f0;}
	.schedule-apply-title .mint-cell:after,.schedule-apply-title .mint-cell:before,.schedule-apply-list .mint-cell:after,.schedule-apply-list:nth-last-of-type(1) .mint-cell:before{border: 0;}
	.schedule-apply-list .sl-content{padding: 0 !important;}
	.schedule-apply-list .mint-cell span,.schedule-apply-list .mint-cell div{color: #919191;}
	.schedule-apply-list.leh-active .mint-cell span,.schedule-apply-list.leh-active .mint-cell div{color: #363636;}
	.schedule-apply-list.leh-active .mint-cell .mint-cell-text{color: #1faa2b;}
	.schedule-apply-list .mint-cell-value span{font-size: 22px;}
	.schedule-apply-list.leh-active .mint-cell-value span{color: #ff6060;}
	.schedule-apply-list .mint-cell:before{left: 10px;}
	.schedule-apply-main{width: 60px;float: left;border-right: 1px solid #e5e5e5;}
	.schedule-apply-list .mint-cell-text{font-size: 16px;}
	.schedule-apply-list .mint-cell-label{font-size: 22px;margin-top: 5px;}
	.schedule-apply-txt{float:left;padding-left: 15px;height: 40px;line-height: 40px;font-size: 16px;max-width: 80%;}


</style>