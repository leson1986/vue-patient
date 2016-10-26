<template>

	<mt-content class-name="register-box ">
		<div class="register-title-img">
			<img src="../../assets/img/register-title-img.png" />
		</div>
		<div class="register-ipt-box">
			<div class="page-part">
				<mt-field label="姓名" placeholder="请输入用户名" type="text" :istitle="true" v-ref:name></mt-field>
				<!--<div class="mint-field">
					<a class="mint-cell mint-field-cell">
						<div class="mint-cell-title">
							<span class="mint-cell-text">姓名</span>
						</div>
						<div class="mint-cell-value">
							<input class="mint-field-core" value="" placeholder="请输入用户名" type="text">
							<div class="mint-field-clear" style="display: none;">
								<i class="mintui mintui-field-error"></i>
							</div>
							<span class="mint-field-state is-default">
					      <i class="mintui mintui-field-default"></i>
					    </span>
						</div>
					</a>
				</div>-->
				<div class="mint-field">
					<a class="mint-cell mint-field-cell">
						<div class="mint-cell-title">
							<span class="mint-cell-text">性别</span>
						</div>
						<div class="mint-cell-value register-mint-cell-value-hight">
							<div class="register-sex-box" :class="{'leh-active': !sex}" @click="sex = 0">
								<span class="iconfont icon-wx-male"></span>
								<span>男</span>
							</div>
							<div class="register-sex-box" :class="{'leh-active': sex}" @click="sex = 1">
								<span class="iconfont icon-wx-female"></span>
								<span>女</span>
							</div>
						</div>
					</a>
				</div>
				<mt-field label="出生日期" placeholder="请输入生日" type="date" :istitle="true" v-ref:birthday></mt-field>
				<mt-field label="患病起始年限" placeholder="请输入患病起始年限" type="date" :istitle="true" v-ref:patient_time></mt-field>
			</div>
			<p>注：用户注册时，请务必填写与将要上传的病历姓名匹配的名字，以便于医生能快速查找。</p>
			<div class="register-take-box">
				<span class="register-take iconfont" :class="{'icon-wx-take-shrill': is_reg}" @click="is_reg = !is_reg"></span>
				<span class="fl" v-link="{path: '/user/terms', replace: true}">同意随访家园  <span class="leh-c-yellow-green">注册条款</span></span>
			</div>
			<mt-button size="large" plain class-name="register-btn " :class="{'leh-active': is_reg}" @click="getRegister">注册</mt-button>
		</div>
	</mt-content>
	<div class="page-popup">
		<mt-popup v-show="show_popup" position="top" class="mint-popup-2" :modal="false">
			<p v-text="tips"></p>
		</mt-popup>
	</div>

</template>
<script>
	import MtContent from '../../components/content'
	import MtButton from '../../components/button.vue'
	import MtField from '../../components/field.vue'
	import MtPopup from '../../components/popup.vue'
	import {getJson,postJson} from 'util'
	import $ from 'zepto'

	export default{
		route: {
			data ({to, next}) {
				this.toQuery = to.query
				next()
			}
		},

	  data () {
	    return{
	      is_reg: 0,
		    sex: 0,
		    show_popup: false,
		    name_val: '',
		    tips: '请将姓名填写完整。',
		    info: [],
		    toQuery: [],
		    showLoading: false
	    }
	  },

		ready () {


		},

		methods: {
			getRegisterInfo () {
				let name = $(this.$refs.name)
				let birthday = $(this.$refs.birthday)
				let patientTime = $(this.$refs.patient_time)
				let sexy = this.sex? 2 : 1

				this.info = {
					'mobile': this.toQuery.mobile || '',
					'weiXinToken': openID,
					'code': this.toQuery.code || '',
					'name': name.val().replace(/^\s+|\s+$/g,""),
					'sex': sexy,
					'birthday': birthday.val(),
					'diseaseHistroy': patientTime.val()
				}
			},

			getRegister () {

				let _self = this
				let name = $(_self.$refs.name)
				_self.name_val = name.val()




				_self.getRegisterInfo()
				if(_self.is_reg){

					var names = _self.name_val;
					if(names == ""){
						_self.show_popup = true
						return;
					}else{
						names = names.replace(/(^\s*)/g, "");//去除开头空格
						var expression = new RegExp("^[\u4E00-\u9FA5A-Za-z ]+$");
						if(!expression.test(names)){

							_self.show_popup = true
							name.val('')
							return;
						}
					}

					postJson('api/register', _self.info, (rsp)=>{
						_self.$route.router.go({path: '/reg/disease'})
					},_self)
				}
			}
		},

		components: {
			MtContent,
			MtButton,
			MtField,
			MtPopup
		},

		watch: {
			show_popup(val) {
				if (val) {
					setTimeout(() => {
						this.show_popup = false;
					}, 2000);
				}
			}
		}
	}

</script>

<style>
	.register-box{background-color: #1faa2b;overflow: hidden;}
	.register-title-img{width: 50%;margin: 8% auto;text-align: center;}
	.register-ipt-box{width: 78%;margin: 0 auto;}
	.register-ipt-box .mint-cell{background-color: transparent;color: #fff;}
	.register-ipt-box .mint-cell:after{border-top: 0;}
	.register-ipt-box .mint-cell:before{border-bottom-color: rgba(255,255,255,0.5);}
	.register-ipt-box .mint-cell input{background-color: transparent;color: #fff;}
	.register-ipt-box .mint-cell-text{color: #fff;}
	.register-mint-cell-value-hight{height: 25px;}
	.register-ipt-box p{font-size: 12px;color: #fff;margin: 20px 0 40px;line-height: 20px;}
	.register-take-box{margin-bottom: 15px;color: #fff;font-size: 12px;overflow: hidden;position: relative;left: 50%;margin-left: -75px;line-height: 14px;display: inline-block;width: 150px;}
	.register-take{width: 12px;height: 12px;line-height: 12px;font-size:8px;border: 1px solid #fff;display: inline-block;float: left;text-align: center;margin-right: 10px;}
	.register-btn{border-color: #8fd595 !important;}
	.register-btn.leh-active{background-color: #8fd595;}
	.register-btn .mint-button-text{color: #fff;}
	.register-sex-box{float: left;margin-right: 20px;}
	.register-sex-box span{margin-right: 8px;color: rgba(255,255,255,0.5);}
	.register-sex-box.leh-active span{color: rgba(255,255,255,1);}
	.register-sex-box .icon-wx-male,
	.register-sex-box .icon-wx-female{font-size: 14px;}
</style>