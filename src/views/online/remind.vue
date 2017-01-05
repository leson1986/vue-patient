<template>
	<mt-header fixed isgrey title="用药提醒">
		<mt-button v-link="'/home'" icon="arr-left" slot="left"></mt-button>
	</mt-header>

	<div class="leh-float-box">
		<mt-button type="green" @click="remindAdd">新增提醒</mt-button>
	</div>

	<mt-content>
		<!--无提醒-->
		<div class="leh-not-apply" v-if="!drugList.length">暂无用药提醒</div>
		<!--有提醒-->
		<div class="reminds-apply">
			<mt-translate>
				<mt-translate-item
						class-name="reminds-apply-list"
						v-for="(index, items) in drugList"
						:class="{'leh-active': items.openStatus*1}"
						:name="items.id"
						:delbtn="!!items.openStatus">
					<a class="mint-cell">
						<label class="mint-cell-title" v-link="{path: '/online/remindAdd', query: {id: items.id, isEdit: 1, startTime: items.startTime}, replace: true}">
							<span class="mint-cell-text" :class="{'leh-red-dot': items.unread}">
								<span>{{ items.drugName }}</span>
							</span>
							<span class="mint-cell-label">
								<p>{{items.days}}天{{items.repeatTime }}次 &nbsp;&nbsp; 1次{{items.useNum}}{{items.dayUse}}</p>
								<p v-if="items.alterTimes.length == 1">{{ items.alterTimes[0]}}</p>
								<p v-if="items.alterTimes.length == 2">{{ items.alterTimes[0]}} / {{ items.alterTimes[1]}}</p>
								<p v-if="items.alterTimes.length == 3">{{ items.alterTimes[0]}} / {{ items.alterTimes[1]}} / {{ items.alterTimes[2]}}</p>
							</span>
						</label>
						<div class="mint-cell-value" @click="putDrugAlter(items.id, items.openStatus)">
							<div class="reminds-apply-switch"></div>
						</div>
					</a>
				</mt-translate-item>
			</mt-translate>
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
	import {getJson, putJson, delJson} from 'util'
	import $ from 'zepto'

	export default{
		route: {
			data ({to, next}) {


				// 初始化数据
				this.getDrugAlter()

				next()
			}
		},
		data () {
			return{
				is_visible: false,
				ispopup: false,
				drugList: [], // 用药提醒列表
				alterTimes: [], // 时间列表
				ids: ''
			}
		},

		methods: {
			cancle () {
				this.ispopup  = false
			},
			conf () {
				this.ispopup  = false
			},
			remindAdd () {
				this.$route.router.go({path:'/online/remindAdd',query:{ isEdit: 0}, replace: true})
			},
			msgBox (ids) {

				let _self = this
				MessageBox({
					title: '提示',
					message: '是否删除此提醒?',
					showCancelButton: true
				}).then(action => {
					if(action === 'confirm'){
						// 删除
						delJson('api/drugAlter/'+ ids, '', (rsp)=>{
							_self.getDrugAlter()
						},_self)
					}
				});
			},
			getDrugAlter () {

				let _self = this
				getJson('api/drugAlter/index?pageIndex=0&pageSize=0', '', (rsp)=>{

					_self.drugList = rsp.items

				},_self)
			},
			// 修改状态
			putDrugAlter (ids, status) {

				let _self = this
				if(status === 1) {

					putJson('api/drugAlter/disable/'+ ids, '', (rsp)=>{

						_self.getDrugAlter()
					},_self)
				}else {

					putJson('api/drugAlter/enable/'+ ids, '', (rsp)=>{

						_self.getDrugAlter()
					},_self)
				}
			}
		},

		events: {
			'handle-del' (e) {
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
	.reminds-apply-list .mint-cell:after,.reminds-apply-list .mint-cell:before{border: 0;}
	.reminds-apply-list .sl-content{padding: 0;}
	.reminds-apply-list .mint-cell-text span{max-width: 120px;color: #919191;display:inline-block;text-overflow:ellipsis; overflow:hidden; white-space:nowrap}
	.reminds-apply-list .mint-cell-label{margin-top: 8px;}
	.reminds-apply-list .mint-cell-label p{color: #919191;font-size: 14px;line-height: 20px;}
	.reminds-apply-switch{width: 48px;height: 21px;background: url(../../assets/img/switch-btn.png) no-repeat bottom center;background-size: 100% auto;}
	.reminds-apply-list.leh-active .mint-cell span,.reminds-apply-list.leh-active .mint-cell p{color: #363636;}
	.reminds-apply-list.leh-active .reminds-apply-switch{background-position: top center;}


</style>
