<template>
	<mt-header fixed isgrey title="过敏史">
		<mt-button icon="arr-left" slot="left" @click="backFun"></mt-button>
	</mt-header>
	<div class="leh-float-box">
		<mt-button :type="btn_color" @click="save">保存</mt-button>
	</div>

	<mt-content class="page-popup">
		<div class="allergic-list-box">
			<ul>
				<li class="allergic-list" v-for="items in irritability" track-by="$index"  v-if="items">
					<span class="iconfont icon-wx-reduce-round" @click="delIrritability($event)"></span>
					<input type="text" placeholder="请输入过敏原" :value="items" maxlength="10"/>
				</li>
				<li class="allergic-list" v-for="(ind, n) in m" v-if="{false: ind != 0}">
					<span class="iconfont icon-wx-reduce-round" @click="delIrritability($event)"></span>
					<input type="text" placeholder="请输入过敏原" maxlength="10" @input="doThat"/>
				</li>
			</ul>
		</div>
		<!--<div class="page-button-group">
			<button class="mint-button mint-button&#45;&#45;transparent mint-button&#45;&#45;large" @click="addIrritability">
				<span class="mint-button-icon">
					<span class="iconfont icon-wx-add-round leh-c-green allergic-list-add-btn"></span>
				</span>
				<label class="mint-button-text">
					新增过敏史
				</label>
			</button>
		</div>-->


		<div class="allergic-add-list">
			<ul>
				<li class="allergic-list" @click="addIrritability">
					<span class="iconfont icon-wx-add-round"></span>
					<input type="text" value="新增过敏史" readonly/>
				</li>
			</ul>
		</div>

	</mt-content>
	<div class="page-popup">
		<mt-popup v-show="show_popup" position="top" class="mint-popup-2" :modal="false">
			<p v-text="tips"></p>
		</mt-popup>
		<div v-show="show_popup" class="maskbox"></div>
	</div>
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtCell from '../../components/cell.vue'
	import MtButton from '../../components/button.vue'
	import MtPopup from '../../components/popup.vue'
	import MessageBox from 'vue-msgbox'
	import $ from 'zepto'

	export default{
		route: {
			data ({to, next}) {
				//this.irritability = to.query.info
				this.allHis = to.query.alllergicHis
				this.irritability = to.query.alllergicHis

				this.getgender = to.query.gender ;
				this.getbirthday = to.query.birthday ;
				this.getalllergicHis = to.query.alllergicHis ;
				this.getserverId = to.query.serverId ;
				this.getemail = to.query.email ;
				this.getphoto = to.query.photo ;
				this.getdisease = to.query.disease ;
				this.getdiseaseHis = to.query.diseaseHis ;
				this.getnativePlace = to.query.nativePlace ;

				if(this.irritability !== ''){
					this.irritability = this.irritability.split('、')
				}
				this.m = 0; //初始化为0

				this.btn_color = 'grey'
				this.isbutton = false

				next()
			}
		},

		data () {
			return{
				visible: false,
				province: '',
				city: '',
				m: 0,
				tips: '',
				show_popup: false,
				irritability: '',
				btn_color: 'grey',
				isbutton: false,
				changeinfo: false,
				kfc: '',
				diseaseInfo: '', // 病种
				allHis: '',
				getgender:'',
				getbirthday: '',
				getalllergicHis: '',
				getserverId: '',
				getemail: '',
				getphoto: '',
				getdisease: '',
				getdiseaseHis: '',
				getnativePlace: ''
			}
		},

		methods: {
			save () {

				//this.irritability = ''
				let alllergiVal = ''
				let inputs = $('.allergic-list-box').find('li input')

				if(!this.isbutton) return

				for(let i=0; i<inputs.length; i++) {
					let item = inputs[i]
					if($(item).val() === '') {
						this.show_popup = true
						this.tips = '请填写过敏原信息'
						return
					}

					alllergiVal += i>0 ? '、' + $(item).val() : $(item).val()
				}

				this.show_popup = true
				this.tips = '保存成功'
				var _self = this
				setTimeout(() => {

					window.location.href='http://wx.leerhuo.com/html/pay/vue_info.html?openID=2&gender='+
							_self.getgender +
							'&birthday='+
							_self.getbirthday +
							'&alllergicHis='+
							alllergiVal +
							'&photo='+
							_self.getphoto +
							'&serverId='+
							_self.getserverId +
							'&email='+
							_self.getemail +
							'&disease='+
							_self.getdisease +
							'&diseaseHis='+
							_self.getdiseaseHis +
							'&nativePlace='+ _self.getnativePlace;

				},2000)
			},

			showPicker () {
				this.visible = true
			},

			addIrritability () {
				this.btn_color = 'green'
				this.isbutton = true
				this.m = this.m + 1
			},
			delIrritability (e) {
				this.btn_color = 'green'
				this.isbutton = true
				$(e.target).parent().remove()
			},

			backFun () {
				let _self = this
				if(_self.isbutton){

					MessageBox({
						title: '提示',
						message: '过敏史已修改，是否保存',
						showCancelButton: true
					}).then(action => {
						if(action === 'confirm'){
							_self.save()
						}else {

							window.location.href='http://wx.leerhuo.com/html/pay/vue_info.html?openID=2&gender='+
									_self.getgender +
									'&birthday='+
									_self.getbirthday +
									'&alllergicHis='+
									_self.allHis +
									'&photo='+
									_self.getphoto +
									'&serverId='+
									_self.getserverId +
									'&email='+
									_self.getemail +
									'&disease='+
									_self.getdisease +
									'&diseaseHis='+
									_self.getdiseaseHis +
									'&nativePlace='+ _self.getnativePlace;

						}
					});
				}else{

					window.location.href='http://wx.leerhuo.com/html/pay/vue_info.html?openID=2&gender='+
							_self.getgender +
							'&birthday='+
							_self.getbirthday +
							'&alllergicHis='+
							_self.allHis +
							'&photo='+
							_self.getphoto +
							'&serverId='+
							_self.getserverId +
							'&email='+
							_self.getemail +
							'&disease='+
							_self.getdisease +
							'&diseaseHis='+
							_self.getdiseaseHis +
							'&nativePlace='+ _self.getnativePlace;

				}

			},

			doThat () {
				this.btn_color = 'green'
				this.isbutton = true
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
			MtCell,
			MtButton,
			MtPopup
		}
	}
</script>

<style>
	.allergic-list-box,.allergic-add-list{padding-left:37px;margin-bottom: 16px;}
	.allergic-list{padding:10px 10px 10px 0;border-bottom: 1px solid #e5e5e5;position: relative;margin-top: 12px;}
	.allergic-list-box input,.allergic-add-list input{width: 100%;border: 0;font-size: 14px;color: #363636;}
	.allergic-list .icon-wx-reduce-round,.allergic-list .icon-wx-add-round{position: absolute;top: 0;left:-37px;width: 37px;height: 39px;line-height: 39px;text-align: center;color: #ff6060;}
	.allergic-list .icon-wx-add-round{color: #1faa2b;}
	.allergic-add-list .allergic-list{border-bottom:0;}
</style>