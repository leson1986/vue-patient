<template>
	<mt-header fixed isgrey title="选择病种">
		<mt-button v-link="{path: '/user/info', query: {'toinfo': true}}" icon="arr-left" slot="left" v-if="is_info"></mt-button>
	</mt-header>

	<div class="leh-float-box">
		<mt-button type="green" :class="{'leh-bg-grey-btn': !is_conf}" @click="confirm">确定</mt-button>
	</div>

	<mt-content>
		<div class="page-cell register-entity-box">
			<mt-cell
					:istitle="true"
					v-for="list in lists"
					:title="list"
					@click="selected(list)"
					:class="{'leh-active': activeName == list}"
			></mt-cell>
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
	import MtButton from '../../components/button.vue'
	import MtCell from '../../components/cell.vue'
	import MtPopup from '../../components/popup.vue'
	import {putJson, optionData} from 'util'
	import $ from 'zepto'

	export default{
		route: {
			data ({to, next}) {
				//this.allHis = to.query.allHis
				this.is_info = to.query.info
				this.diseaseInfo = to.query.disease

				this.getgender = to.query.gender ;
				this.getbirthday = to.query.birthday ;
				this.getalllergicHis = to.query.alllergicHis ;
				this.getserverId = to.query.serverId ;
				this.getemail = to.query.email ;
				this.getphoto = to.query.photo ;
				this.getdisease = to.query.disease ;
				this.getdiseaseHis = to.query.diseaseHis ;
				this.getnativePlace = to.query.nativePlace ;


				if(this.diseaseInfo !== '') {
					this.selected(this.diseaseInfo)
				}

				next()



			}
		},

	  data () {
	    return{
		    is_conf: false,
		    is_info: false,
		    activeName: '',
		    disease: '', // 选取的值
		    lists: optionData().patientDisease, // 病种列表
		    item: [],
		    diseaseInfo: '', // 病种
		    show_popup: false, // 提示
		    tips: '', // 提示内容
		    allHis: '', // 过敏源
		    infoMail: '',
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

		ready() {
		},

		events: {
		},

		methods: {
			// 切换病种选项
			selected: function(listName) {
				this.activeName = listName
				this.disease = listName
				// 激活按钮
				this.is_conf = true
			},

			confirm () {

				let _self = this
				if(_self.diseaseInfo === _self.disease){

					_self.show_popup = true
					_self.tips = '病种没修改'
					return
				}else if(_self.diseaseInfo !== ''){

					_self.show_popup = true
					_self.tips = '保存成功'
				}



					if(_self.is_conf && _self.is_info){

						_self.show_popup = true
						_self.tips = '保存成功'
						setTimeout(() => {
							window.location.href='http://test.jk7.com/vue_html/vue_info.html?openID=2&gender='+
									_self.getgender +
									'&birthday='+
									_self.getbirthday +
									'&alllergicHis='+
									_self.getalllergicHis +
									'&photo='+
									_self.getphoto +
									'&serverId='+
									_self.getserverId +
									'&email='+
									_self.getemail +
									'&disease='+
									_self.disease +
									'&diseaseHis='+
									_self.getdiseaseHis +
									'&nativePlace='+ _self.getnativePlace;


						//	window.location.href='http://test.jk7.com/vue_html/vue_info.html?alllergicHis='+_self.allHis+'&disease='+_self.disease+'&openID=2&infoMail='+_self.infoMail;
						//	_self.$route.router.go({path: '/user/info', query: {'toinfo': true, 'disease': _self.disease, 'alllergicHis': _self.allHis}, replace: true})
						},2000)
					}
					if(_self.is_conf && !_self.is_info){

						putJson('api/register/disease/'+ openID + '/'+ _self.disease, '', (rsp, recode, msg)=>{
							if(recode === 0){

								_self.show_popup = true
								_self.tips = '保存成功'
								setTimeout(() => {
									_self.$route.router.go({path: '/home', replace: true})
								},2000)

							}else{

								alert(msg)
							}
						},_self)
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
			MtButton,
			MtCell,
			MtPopup
		}
	}
</script>

<style>
	.register-entity-box .mint-cell{line-height: 25px;}
	.register-entity-box .mint-cell:after{border-top: 0;}
	.register-entity-box .mint-cell:before{border-bottom-color: #e5e5e5;left: 0;}
	.register-entity-box .mint-cell.leh-active{color: #1faa2b;background-color: #f2f2f2;}
</style>