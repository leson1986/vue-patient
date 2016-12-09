<template>
	<mt-header fixed isgrey :title="title">
		<!--v-link="{path:'/online/remind', replace: true}"-->
		<mt-button icon="arr-left" slot="left" @click="backs()"></mt-button>
		<mt-button slot="right" v-show="is_visible">保存</mt-button>
	</mt-header>

	<div class="leh-float-box">
		<mt-button :type="bgcolor" @click="save">{{active_name}}</mt-button>
	</div>

	<mt-content>
		<div class="page-cell reminders-add-title">
			<a class="mint-cell">
				<label class="mint-cell-title">
					<span class="mint-cell-text leh-c-green">药品名</span>
					<input type="text" placeholder="请输入药品名称" v-model="drug"/>
					<mt-select-drag>
						<mt-li-item v-for="n in 3">adsf</mt-li-item>
					</mt-select-drag>
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
			<mt-datetime-only :visible.sync="visible3" type="time" is-unit @confirm="handleChange" :value="value" v-ref:times></mt-datetime-only>

		</div>

		<div class="page-cell reminders-add-tap-box">

			<mt-cell title="重复" label="仅一次" is-icon icons="triangle" istitle @click="repeat"></mt-cell>
			<mt-cell title="用量" label="3mg" is-icon icons="triangle" istitle @click="dosage"></mt-cell>
		</div>
		<p class="reminders-add-txt">温馨提示：为提高用药依从性，如同一药品同一天需多次服药，只需在“重复”框填写次数即可，系统将根据科学的时间安排给出提醒时间。</p>

		<mt-popup-work title="重复" :visible.sync="visible1" class-name="repeat">
			<div class="reminders-add-again-box">
				<input type="number" />
				<span>天</span>
				<input type="number" />
				<span>次</span>
			</div>
		</mt-popup-work>
		<mt-popup-work title="用量" :visible.sync="visible2" class-name="dosage">
			<div class="reminders-add-dosage-ipt">
				<input type="number"/>
			</div>
			<ul class="reminders-add-dosage-ul">
				<li class="reminders-add-dosage-list leh-active"><span>克</span></li>
				<li class="reminders-add-dosage-list"><span>毫克</span></li>
				<li class="reminders-add-dosage-list"><span>丸</span></li>
				<li class="reminders-add-dosage-list"><span>支</span></li>
				<li class="reminders-add-dosage-list"><span>片</span></li>
				<li class="reminders-add-dosage-list"><span>毫升</span></li>
				<li class="reminders-add-dosage-list"><span>粒</span></li>
				<li class="reminders-add-dosage-list"><span>瓶</span></li>
			</ul>
		</mt-popup-work>
		<!-- 弹出窗 -->
		<mt-popup-box v-if="ispopup">
			<p slot="info">是否删除此提醒？</p>
			<div slot="button">
				<mt-button type="grey" size="small" @click="cancle">确定</mt-button>
				<mt-button type="blue" size="small" @click="conf">确定</mt-button>
			</div>
		</mt-popup-box>
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
	import MtDatetimeOnly from '../../components/datetime-only.vue'
	import MtPopupWork from '../../components/popupWork.vue'
	import MtSelectDrag from '../../components/selectDrag.vue'
	import MtLiItem from '../../components/liItem.vue'
	import $ from 'zepto'

	export default{
		route: {
			data ({to, next}) {
				let _self = this

				_self.isEdit = to.query.isEdit
				if(_self.isEdit == 1){
					_self.value = '06:22'
					_self.title = '编辑提醒'
					_self.bgcolor = 'danger'
					_self.active_name = '删除提醒'
					_self.is_visible = true
					//_self.getEdit()
				}else if(_self.isEdit == 0){
					_self.value = '00:00'
					_self.title = '新增提醒'
					_self.bgcolor = 'green'
					_self.active_name = '保存'
					_self.is_visible = false
					//_self.getInit()
				}
				console.log(_self.is_visible)
				console.log(_self.value)

				next()
			}
		},

		data () {
			return{
				is_visible: false,
				ispopup: false,
				visible1: false,
				visible2: false,
				title: '',
				bgcolor: '',
				active_name: '',
				value: '00:00',
				visible3: true,
				drug: '',
				isEdit: ''
			}
		},

		ready () {
			$('#medicineName').focus( () => {
				console.log($('#medicineName').val())
			});

		},
		methods: {
			cancle () {
				this.ispopup  = false
			},
			conf () {
				alert(this.ids)
				this.ispopup  = false
			},
			save () {
				if(this.is_visible){
					alert('编辑')
				}else{
					//alert('保存')
					let _self = this
					console.log(_self.$refs.times.value) // 获取更改的时间，直接_self.value只能获取到00:00
					_self.value = null //"'00:00'"
					console.log(_self.value)
					_self.$route.router.go({path:'/online/remind', replace: true})
				}
			},
			handleChange(value) {
				Toast({
					message: '已选择 ' + value.toString(),
					position: 'bottom'
				});
			},
			repeat () {
				this.visible1 = true
			},
			dosage () {
				this.visible2 = true
			},
			backs(){
				let _self = this
				console.log(_self.value)
				_self.value = null //"'00:00'"
				console.log(_self.value)
				_self.$route.router.go({path:'/online/remind', replace: true})
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
			MtButtonSingle,
			MtCell,
			MtButton,
			MtTranslate,
			MtTranslateItem,
			MtPopupBox,
			MtDatetimeOnly,
			MtPopupWork,
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
	.reminders-add-dosage-ipt input{width: 100%;border: 0;border-bottom: 1px solid #2eb039;font-size: 14px;}
	.reminders-add-dosage-ul{margin: 8px 0 0;overflow: hidden;}
	.reminders-add-dosage-list{width: 25%;float: left;margin: 8px 0;text-align: center;font-size: 12px;border-right: 1px solid #E5E5E5;margin-left: -1px;}
	.reminders-add-dosage-list.leh-active span{background-color: #e8ffea;color: #1faa2b;}
	.reminders-add-again-box{overflow: hidden;margin-bottom: 8px;}
	.reminders-add-again-box input{float: left;width: 27%;margin-left: 25px;border:0;border-bottom: 1px solid #1faa2b;}
	.reminders-add-again-box span{float: left;font-size: 14px;margin:0 5px;}
	.reminders-add-txt{padding: 10px;font-size: 12px;color: #919191;line-height: 20px;}
</style>
