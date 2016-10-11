<template>
	<mt-header fixed isgrey :title="title">
		<mt-button v-link="{path: from_path}" icon="arr-left" slot="left"></mt-button>
		<mt-button slot="right" v-show="is_visible" @click="putDaily">保存</mt-button>
	</mt-header>

	<div class="leh-float-box">
		<mt-button :type="bgcolor" @click="saveAndDel">{{active_name}}</mt-button>
	</div>
	<mt-content class="page-popup">
		<div class="page-cell schedule-add-list">
			<a class="mint-cell" @click="visible = true">
				<label class="mint-cell-title">
					<span class="mint-cell-text" v-text="date"></span>
					<span class="mint-cell-label" v-text="time"></span>
				</label>
				<div class="mint-cell-value">
					<span class="iconfont icon-wx-arr-right"></span>
				</div>
			</a>
			<a class="mint-cell">
				<span class="mint-cell-mask iconfont icon-wx-item" @click="show_drag = !show_drag"></span>
				<label class="mint-cell-title">
					<span class="mint-cell-text" v-text="title_name"></span>
					<ul class="leh-select-drag-box" v-if="show_drag">
						<li v-for="items in dailyList" @click="getTitleName(items.name)">{{ items.name }}</li>
					</ul>
				</label>
				<div class="mint-cell-value">
					<span class="iconfont icon-wx-arr-right"></span>
				</div>
			</a>
			<a class="mint-cell">
				<label class="mint-cell-title">
					<span class="mint-cell-text iconfont icon-wx-writte"></span>
					<span class="mint-cell-text">备注</span>
					<p>
						<textarea placeholder="把容易忘记的事情做个备注呗！" v-model="remark">{{ dailys.remark }}</textarea>
					</p>
				</label>
				<div class="mint-cell-value"></div>
			</a>
		</div>
	</mt-content>
	<mt-modal v-if="visible"></mt-modal>
	<mt-datetime-picker
			:visible.sync="visible"
			:value.sync="value"
			:start-y=0
			@confirm="handleChange"
			:modal="true">
	</mt-datetime-picker>
</template>
<script>
	import MtContent from '../../components/content.vue'
	import MtHeader from '../../components/header.vue'
	import MtCell from '../../components/cell.vue'
	import MtButton from '../../components/button.vue'
	import MtTranslate from '../../components/translate.vue'
	import MtTranslateItem from '../../components/translateItem.vue'
	import MtPopupBox from '../../components/popupBox.vue'
	import MtDatetimePicker from '../../components/datetime-picker.vue'
	import MtPopupWork from '../../components/popupWork.vue'
	import MtSelectDrag from '../../components/selectDrag.vue'
	import MtLiItem from '../../components/liItem.vue'
	import MtModal from '../../components/modal.vue'
	import MessageBox from 'vue-msgbox'
	import {getJson, postJson, delJson, putJson} from 'util'
	import $ from 'zepto'

	export default{
		route : {
			data (transition) {

				let _self = this
				_self.from_path = transition.from.path
				_self.ids = transition.to.query.id
				_self.is_visible = transition.to.query.isEdit;

				if(_self.is_visible){

					_self.title = '编辑日程'
					_self.bgcolor = 'danger'
					_self.active_name = '删除日程'

					// 获取已有信息
					getJson('api/recheck/'+ _self.ids, '', (rsp)=>{

						_self.dailys = rsp
						_self.date = rsp.date
						_self.time = rsp.dayTime
						_self.title_name = rsp.recheckItem

						// 取消红点
						postJson('api/recheck/hasRead/'+ _self.ids, '', (rsp)=>{
						},_self)

					},_self)

				}else {

					_self.title = '新增提醒'
					_self.bgcolor = 'green'
					_self.active_name = '保存'
					_self.title_name = '提醒事项'
					_self.remark = ''
					_self.value = new Date()

				}
			}
		},

		data () {
			return{
				value: new Date(),
				is_visible: false,
				visible: false,
				title: '',
				bgcolor: '',
				active_name: '',
				visible3: true,
				drug: '',
				from_path: '', // 来源路径
				date: '', // 日期
				time: '', // 时间
				remark: '', // 备注
				show_drag: 0,
				ids: '',
				dailys: '', // 日程数据
				title_name: '提醒事项', // 提醒事项
				dailyList: [
					{ name: '回院复查' },
					{ name: '回院复诊' },
					{ name: '其他' }
				]
			}
		},

		created () {
			let date = new Date()
			this.date = this.formatDate(date)
			this.time = this.formatTime(date)
		},

		methods: {

			saveAndDel () {
				if(this.is_visible){
					this.msgBox()
				}else{
					// 修改
					let _self = this
					let params = {
						"date": _self.date,
						"dayTime": _self.time,
						"recheckItem": _self.title_name,
						"remark": _self.remark
					}

					postJson('api/Recheck', params, (rsp, recode, msg)=>{
						_self.$route.router.go('/online/scheme')
					},_self)
				}
			},

			handleChange(value) {
				this.date = value.slice(0,10)
				this.time = value.slice(11)
			},

			formatDate (date) {
				var y = date.getFullYear();
				var m = date.getMonth() + 1;
				m = m < 10 ? '0' + m : m;
				var d = date.getDate();
				d = d < 10 ? ('0' + d) : d;
				return y + '-' + m + '-' + d;
			},

			formatTime (date) {
				var h = date.getHours();
				h = h < 10 ? ('0' + h) : h;
				var minute = date.getMinutes();
				minute = minute < 10 ? ('0' + minute) : minute;
				return h+':'+minute;
			},

			msgBox () {

				let _self = this
				MessageBox({
					title: '提示',
					message: '是否确认删除本日程?',
					showCancelButton: true
				}).then(action => {

					if(action === 'confirm'){

						// 删除
						delJson('api/recheck/'+ _self.ids, '', (rsp)=>{
							_self.$route.router.go('/online/scheme')
						},_self)
					}
				});
			},

			getTitleName (titles) {
				this.title_name = titles
				this.show_drag = 0
			},

			putDaily () {

				// 修改
				let _self = this
				let params = {
					"date": _self.date,
					"dayTime": _self.time,
					"recheckItem": _self.title_name,
					"remark": _self.remark
				}

				putJson('api/recheck/'+ _self.ids, params, (rsp, recode, msg)=>{
						alert('修改成功')
				},_self)
			}
		},

		events: {
			'popup-work' (e) {
				let _self = e;
				if(_self.hasClass('repeat')) {
					console.log('repeat')
				}
				if(_self.hasClass('dosage')) {
					console.log('dosage')
				}
			}
		},

		watch: {
			drug (newVal) {
				console.log(newVal)
			}
		},

		components: {
			MtContent,
			MtHeader,
			MtCell,
			MtButton,
			MtTranslate,
			MtTranslateItem,
			MtPopupBox,
			MtDatetimePicker,
			MtPopupWork,
			MtSelectDrag,
			MtLiItem,
			MtModal
		}
	}
</script>

<style>
	.schedule-add-list .mint-cell:after,.schedule-add-list .mint-cell:nth-last-of-type(1):before{border:0;}
	.schedule-add-list .mint-cell:before{left:0;}
	.schedule-add-list .mint-cell .mint-cell-text,.schedule-add-list .mint-cell-mask{color: #919191;}
	.schedule-add-list .mint-cell:nth-of-type(1) .mint-cell-text{font-size: 14px;}
	.schedule-add-list .mint-cell:nth-of-type(1) .mint-cell-label{font-size: 26px;color: #363636;margin-top: 4px;}
	.schedule-add-list .mint-cell:nth-of-type(2) .mint-cell-title{line-height: 38px;}
	.schedule-add-list .mint-cell:nth-of-type(3) p{padding-left: 22px;}
	.schedule-add-list .mint-cell:nth-of-type(3) textarea{width: 100%;margin-top: 10px;border: 0;font-size: 14px;}
	.schedule-add-list .mint-cell-mask{margin-right: 10px;}
	.schedule-add-list .icon-wx-writte{margin-right: 7px;}
	.schedule-add-list .mint-cell{overflow: visible;}
	.schedule-add-list .mint-cell .leh-select-drag-box{padding: 0 5px;}
</style>