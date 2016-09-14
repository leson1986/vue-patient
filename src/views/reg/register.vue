<template>

	<mt-content class-name="register-box page-popup">
		<div class="register-title-img">
			<img src="../../assets/img/register-title-img.png" />
		</div>
		<div class="register-ipt-box">
			<div class="page-part">
				<mt-field label="姓名" placeholder="请输入用户名" type="text" :istitle="true" v-ref:name></mt-field>
				<div class="mint-field">
					<a class="mint-cell mint-field-cell">
						<label class="mint-cell-title">
							<span class="mint-cell-text">性别</span>
						</label>
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
			<mt-button size="large" plain class-name="register-btn " :class="{'leh-active': is_reg}">注册</mt-button>
		</div>
		<mt-popup v-show="show_popup" position="top" class="mint-popup-2" :modal="false">
			<p v-text="tips"></p>
		</mt-popup>
	</mt-content>
</template>
<script>
	import MtContent from '../../components/content'
	import MtButton from '../../components/button.vue'
	import MtField from '../../components/field.vue'
	import MtPopup from '../../components/popup.vue'
	import $ from 'zepto'

	export default{
	  data () {
	    return{
	      is_reg: 0,
		    sex: 0,
		    show_popup: false,
		    name_val: '',
		    tips: '请将姓名填写完整。',
		    info: []
	    }
	  },

		events: {
			'footer-button-event' () {
				let name = $(this.$refs.name)
				this.name_val = name.val()

				this.getRegisterInfo()
				if(this.is_reg){

					if(this.name_val === ''){
						this.show_popup = true
						return
					}
					this.getRegisterInfo()
					this.$route.router.go('/reg/info')
				}
			}
		},

		created () {

		},

		methods: {
			getRegisterInfo () {
				let name = $(this.$refs.name)
				let birthday = $(this.$refs.birthday)
				let patientTime = $(this.$refs.patient_time)
				let sexy = this.sex? '女' : '男'

				this.info.$set(0, {
					name: name.val(),
					sex: sexy,
					birthday: birthday.val(),
					patientTime: patientTime.val()
				})
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
	.register-take-box{margin-bottom: 15px;color: #fff;font-size: 12px;overflow: hidden;position: relative;left: 50%;margin-left: -25%;line-height: 14px;}
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