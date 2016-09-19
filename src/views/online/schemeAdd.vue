<template>
	<mt-header fixed isgrey :title="title">
		<mt-button v-link="'/online/scheme'" icon="arr-left" slot="left"></mt-button>
		<mt-button slot="right" v-show="is_visible">保存</mt-button>
	</mt-header>

	<div class="leh-float-box">
		<mt-button :type="bgcolor" @click="save">{{active_name}}</mt-button>
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
				<span class="mint-cell-mask iconfont icon-wx-item"></span>
				<label class="mint-cell-title">
					<span class="mint-cell-text">提醒事项</span>
					<ul class="leh-select-drag-box" style="display: none">
						<li>博路定</li>
						<li>博路定</li>
						<li>博路定</li>
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
						<textarea placeholder="把容易忘记的事情做个备注呗！"></textarea>
					</p>
				</label>
				<div class="mint-cell-value"></div>
			</a>
		</div>
		<mt-datetime-picker
				:visible.sync="visible"
				:value.sync="value"
				:start-y=0
				@confirm="handleChange"
				:modal="true">
		</mt-datetime-picker>
	</mt-content>
	<mt-modal v-if="visible"></mt-modal>
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
	import $ from 'zepto'

	export default{
		route : {
			data (transition) {
				this.is_visible = transition.to.query.isEdit;
				if(transition.to.query.isEdit){
					this.title = '编辑日程'
					this.bgcolor = 'danger'
					this.active_name = '删除日程'
				}else {
					this.title = '新增提醒'
					this.bgcolor = 'green'
					this.active_name = '保存'
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
				date: '',
				time: ''
			}
		},

		created () {
			let date = new Date()
			this.date = this.formatDate(date)
			this.time = this.formatTime(date)
		},

		methods: {

			save () {
				if(this.is_visible){
					this.msgBox('编辑')
				}else{
					alert('保存')
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

			msgBox (ids) {

				MessageBox({
					title: '提示',
					message: '是否确认删除本日程?',
					showCancelButton: true
				}).then(action => {
					console.log('callback:', ids);
				});
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