<template>
	<mt-header fixed isgrey :title="title">
		<!--v-link="{path:'/online/remind', replace: true}"-->
		<mt-button icon="arr-left" slot="left" @click="backs()"></mt-button>
		<mt-button slot="right" v-show="is_visible" @click="saveEdit">保存</mt-button>
	</mt-header>

	<div class="leh-float-box">
		<mt-button :type="bgcolor" @click="save">{{active_name}}</mt-button>
	</div>

	<mt-content>
		<div class="page-cell reminders-add-title">
			<a class="mint-cell">
				<label class="mint-cell-title">
					<span class="mint-cell-text leh-c-green">药品名</span>
					<input type="text" placeholder="请输入药品名称" v-model="drugName"/>
				</label>
				<div class="mint-cell-value"></div>
			</a>
		</div>
		<div class="leh-null-box"></div>
		<!--时间-->
		<div class="reminders-add-picker-box">
			<!--白色到透明的遮罩-->
			<div class="reminders-add-picker-up-bg"></div>
			<div class="reminders-add-picker-down-bg"></div>
			<!--------->
			<mt-datetime-only :visible.sync="visible3" type="time" is-unit :value.sync="value" v-ref:times></mt-datetime-only>

		</div>

		<div class="page-cell reminders-add-tap-box">

			<mt-cell title="重复" :label="repeatVal" is-icon icons="triangle" istitle @click="repeat"></mt-cell>
			<mt-cell title="用量" :label="dosageVal" is-icon icons="triangle" istitle @click="dosage"></mt-cell>
		</div>
		<p class="reminders-add-txt">温馨提示：为提高用药依从性，如同一药品同一天需多次服药，只需在“重复”框填写次数即可，系统将根据科学的时间安排给出提醒时间。</p>

		<mt-popup-work title="重复" :visible.sync="visible1" class-name="repeat">
			<div class="reminders-add-again-box">
				<input type="number" v-model="days" />
				<span>天</span>
				<input type="number" v-model="repeatTime" />
				<span>次</span>
			</div>
		</mt-popup-work>
		<mt-popup-work title="用量" :visible.sync="visible2" class-name="dosage">
			<div class="reminders-add-dosage-ipt">
				<input type="number" v-model="useNum"/>
			</div>
			<ul class="reminders-add-dosage-ul">
				<li class="reminders-add-dosage-list" v-for="items in dosageList.dosage" :class="{'leh-active': dayUse === items}" @click="getDosageUtil(items)"><span>{{ items }}</span></li>
			</ul>
		</mt-popup-work>
	</mt-content>

	<div class="page-popup">
		<mt-popup v-show="show_popup" position="top" class="mint-popup-2" :modal="false">
			<p v-text="tips"></p>
		</mt-popup>
	</div>
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
	import MtDatetimeOnly from '../../components/datetime-only.vue'
	import MtPopupWork from '../../components/popupWork.vue'
	import MtSelectDrag from '../../components/selectDrag.vue'
	import MtPopup from '../../components/popup.vue'
	import MtLiItem from '../../components/liItem.vue'
	import {getJson, postJson, putJson, delJson} from 'util'
	import $ from 'zepto'

	export default{
		route: {
			data ({to, next}) {
				let _self = this

				// 初始化
				_self.drugDetail = []
				_self.ids = to.query.id || 0
				_self.startTime = ''
				_self.repeatTime = 1
				_self.dayUse = ''
				_self.useNum = 1
				_self.drugName = ''
				_self.days = 1

				// 是否新增
				_self.isEdit = to.query.isEdit
				if(_self.isEdit == 1){
					_self.title = '编辑提醒'
					_self.bgcolor = 'danger'
					_self.active_name = '删除提醒'
					_self.is_visible = true
					_self.getDrugDetail(_self.ids)

				}else if(_self.isEdit == 0){
					_self.repeatVal = ''
					_self.dosageVal = ''
					_self.value = '00:00'
					_self.title = '新增提醒'
					_self.bgcolor = 'green'
					_self.active_name = '保存'
					_self.is_visible = false
					//_self.getInit()
				}

				next()
			}
		},

		data () {
			return{
				is_visible: false,
				ispopup: false,
				visible1: false, //  重复弹框
				visible2: false, //  用量弹框
				show_popup: false, // 提示框
				tips: '', // 提示框内容
				title: '',
				bgcolor: '',
				active_name: '',
				value: '00:00',
				visible3: true,
				drug: '',
				isEdit: '',
				ids: 0, // 列表ID
				drugDetail: [], // 用药提醒明细
				repeatVal: '', // 重复数
				dosageVal: '', // 用量数
				startTime: '',
				repeatTime: '',
				dayUse: '',
				useNum: 1,
				drugName: '',
				days: '',
				dosageList: {'dosage':['克', '毫克', '丸', '支', '片', '毫升', '粒', '瓶' ]}
			}
		},

		methods: {
			getDosageUtil (val) {
				this.dayUse = val
			},
			save () {
				let _self = this
				let params = this.getDosageVal()
				let isNull = this.isDosageVal()
				if(!isNull){

					this.tips = '请填写完整再进行保存'
					this.show_popup = true
					return
				}
				if(_self.is_visible){
					delJson('api/drugAlter/'+ _self.ids, '', (rsp)=>{
						_self.value = null //"'00:00'"
						_self.$route.router.go({path:'/online/remind', replace: true})
					},_self)
				}else{
					postJson('api/drugAlter', params, (rsp)=>{
						_self.value = null //"'00:00'"
						_self.$route.router.go({path:'/online/remind', replace: true})
					},_self)
				}
			},
			saveEdit () {
				let _self = this
				let params = this.getDosageVal()
				let isNull = this.isDosageVal()
				if(!isNull){

					this.tips = '请填写完整再进行保存'
					this.show_popup = true
					return
				}
				putJson('api/drugAlter', params, (rsp)=>{
					_self.value = null //"'00:00'"
					_self.$route.router.go({path:'/online/remind', replace: true})
				},_self)
			},
			getDosageVal () {

				let _self = this
				let params = {
					"id"         : _self.ids,
					"startTime"  : _self.value,
					"repeatTime" : _self.repeatTime,
					"dayUse"     : _self.dayUse,
					"useNum"     : _self.useNum,
					"drugName"   : _self.drugName,
					"days"       : _self.days,
				}

				return params
			},
			isDosageVal () {

				if(this.drugName == '' || this.repeatVal == '' || this.dosageVal == '') {
					return false
				}else {
					return true
				}
			},
			repeat () {
				this.visible1 = true
			},
			dosage () {
				this.visible2 = true
			},
			backs(){
				this.value = null //"'00:00'"
				this.$route.router.go({path:'/online/remind', replace: true})
			},
			getDrugDetail (ids) {

				let _self = this
				getJson('api/drugAlter/'+ids, '', (rsp)=>{
					_self.drugDetail = rsp
					_self.value = rsp.startTime
					_self.ids = rsp.id
					_self.startTime = rsp.startTime
					_self.repeatTime = rsp.repeatTime
					_self.dayUse = rsp.dayUse
					_self.useNum = rsp.useNum
					_self.drugName = rsp.drugName
					_self.days = rsp.days

					_self.repeatVal = _self.days + '天' + _self.repeatTime + '次'
					_self.dosageVal = '1次' + _self.useNum + _self.dayUse
				},_self)
			}
		},

		events: {
			'popup-work' (e) {
				// 重复确定
				if(e.hasClass('repeat')) {
					if(this.days <= '0' || this.repeatTime <= '0') {
						this.tips = '请填写大于或等于1的正整数'
						this.show_popup = true
						return
					}
					if(this.days != '1' && this.repeatTime != '1'){

						this.tips = '格式为：一天几次或几天一次'
						this.show_popup = true
						return
					}else{

						this.repeatVal = this.days + '天' + this.repeatTime + '次'
						this.visible1 = false
					}
				}
				// 用量确定
				if(e.hasClass('dosage')) {
					if(this.useNum <= '0'){

						this.tips = '请填写大于或等于1的正整数'
						this.show_popup = true
						return
					}if(this.dayUse == ''){

						this.tips = '用量单位不能为空'
						this.show_popup = true
						return
					}else{

						this.dosageVal = '1次' + this.useNum + this.dayUse
						this.visible2 = false
					}
				}
			}
		},

		watch: {
			show_popup(val) {
				if (val) {
					setTimeout(() => {
						this.show_popup = false;
					}, 2000);
				}
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
			MtPopupBox,
			MtDatetimeOnly,
			MtPopupWork,
			MtPopup,
			MtSelectDrag,
			MtLiItem
		}
	}
</script>

<style>
	.reminders-add-title .mint-cell{overflow: visible;}
	.reminders-add-title .mint-cell:after,.reminders-add-title .mint-cell:before{border: 0;}
	.reminders-add-title .mint-cell-title{position: relative;}
	.reminders-add-title input{width: 100%;margin-top: 10px;font-size: 12px;border: 0;}
	.reminders-add-picker-box{padding: 20px 10px 0;position: relative;}
	.reminders-add-picker-box .mint-datetime-picker{border-bottom: 1px solid #e5e5e5;}
	.reminders-add-picker-box .picker-items{margin-bottom: 20px;}
	.reminders-add-picker-box .picker-item.picker-selected{height: 55px;line-height: 55px;font-size: 48px;color: #ff7559;}
	.reminders-add-picker-box .picker-center-highlight{height: 55px !important;}
	.reminders-add-picker-box .picker-center-highlight:after,
	.reminders-add-picker-box .picker-center-highlight:before{height: 0;}
	.reminders-add-picker-hour{position: absolute;top: 50%;left:50%;margin-left:50px;margin-top:8px;font-size: 12px;color: #ff7559;}
	.reminders-add-picker-min{position: absolute;top: 50%;left:50%;margin-left:20px;margin-top:8px;font-size: 12px;color: #ff7559;}
	.reminders-add-picker-up-bg{position: absolute;top: 10px;left: 0;width: 100%;height: 38px;z-index:2;background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%); }
	.reminders-add-picker-down-bg{position: absolute;bottom: 0px;left: 0;width: 100%;height: 38px;z-index:2;background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);}
	.reminders-add-tap-box{padding-right: 10px;}
	.reminders-add-tap-box .mint-cell{padding-right: 0;}
	.reminders-add-tap-box .mint-cell:after{border: 0;}
	.reminders-add-tap-box .mint-cell:before{left: 10px;}
	.reminders-add-tap-box .mint-cell-text{font-size: 14px;}
	.reminders-add-tap-box .mint-cell-label{font-size: 12px;}
	.reminders-add-tap-box .mint-cell-value span{margin-left: 10px;color: #aaa;font-size: 10px;}
	.reminders-add-dosage-ipt{padding: 0 10px;}
	.reminders-add-dosage-ipt input{width: 100%;border: 0;border-bottom: 1px solid #2eb039;font-size: 14px;text-align: center;}
	.reminders-add-dosage-ul{margin: 8px 0 0;overflow: hidden;}
	.reminders-add-dosage-list{width: 25%;float: left;margin: 8px 0;text-align: center;font-size: 12px;border-right: 1px solid #E5E5E5;margin-left: -1px;}
	.reminders-add-dosage-list.leh-active span{background-color: #e8ffea;color: #1faa2b;}
	.reminders-add-again-box{overflow: hidden;margin-bottom: 8px;}
	.reminders-add-again-box input{float: left;width: 27%;margin-left: 25px;border:0;border-bottom: 1px solid #1faa2b;text-align: center;}
	.reminders-add-again-box span{float: left;font-size: 14px;margin:0 5px;}
	.reminders-add-txt{padding: 10px;font-size: 12px;color: #919191;line-height: 20px;}
</style>
