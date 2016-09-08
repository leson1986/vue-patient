<template>

	<mt-content class-name="register-box">
		<div class="register-title-img">
			<img src="../../assets/img/register-title-img.png" />
		</div>
		<div class="register-ipt-box">
			<div class="page-part">
				<mt-field label="姓名" placeholder="请输入用户名" type="text" :istitle="true"></mt-field>
				<div class="mint-field">
					<a class="mint-cell mint-field-cell">
						<label class="mint-cell-title">
							<span class="mint-cell-text">性别</span>
						</label>
						<div class="mint-cell-value register-mint-cell-value-hight">
							<div class="register-sex-box">
								<span>i</span>
								<span>男</span>
							</div>
							<div class="register-sex-box">
								<span>i</span>
								<span>女</span>
							</div>
						</div>
					</a>
				</div>
				<mt-field label="出生日期" placeholder="请输入生日" type="date" :istitle="true"></mt-field>
				<mt-field label="患病起始年限" placeholder="请输入患病起始年限" type="date" :istitle="true"></mt-field>
			</div>
			<p>注：用户注册时，请务必填写与将要上传的病历姓名匹配的名字，以便于医生能快速查找。</p>
			<div class="register-take-box" @click="isReg">
				<span class="register-take"></span>
				<span class="fl">同意随访家园  <span class="leh-c-yellow-green">注册条款</span></span>
			</div>
			<mt-button size="large" plain class-name="register-btn" v-el:regs>注册</mt-button>
		</div>
	</mt-content>
</template>
<script>
	import MtContent from '../../components/content'
	import MtButton from '../../components/button.vue'
	import MtField from '../../components/field.vue'
	export default{
	  data () {
	    return{
	      is_reg: false
	    }
	  },

		events: {
			'footer-button-event' () {
				if(this.is_reg){
					this.$route.router.go('/reg/info')
				}
			}
		},

		methods: {
			isReg () {
				if(this.is_reg) {
					this.$els.regs.classList.remove("leh-active")
					this.is_reg = false
					return
				}else{
					this.$els.regs.classList.add("leh-active")
					this.is_reg = true
				}
			}
		},

		components: {
			MtContent,
			MtButton,
			MtField
		}
	}
</script>

<style>
	.register-box{height: 100%;background-color: #1faa2b;overflow: hidden;}
	.register-title-img{width: 50%;margin: 10% auto 15%;text-align: center;}
	.register-ipt-box{width: 78%;margin: 0 auto;}
	.register-ipt-box .mint-cell{background-color: transparent;color: #fff;}
	.register-ipt-box .mint-cell:after{border-top: 0;}
	.register-ipt-box .mint-cell:before{border-bottom-color: rgba(255,255,255,0.5);}
	.register-ipt-box .mint-cell input{background-color: transparent;color: #fff;}
	.register-mint-cell-value-hight{height: 25px;}
	.register-ipt-box p{font-size: 12px;color: #fff;margin: 20px 0 60px;line-height: 20px;}
	.register-take-box{margin-bottom: 15px;color: #fff;font-size: 12px;overflow: hidden;position: relative;left: 50%;margin-left: -25%;line-height: 14px;}
	.register-take{width: 12px;height: 12px;border: 1px solid #fff;display: inline-block;float: left;line-height: 12px;text-align: center;margin-right: 10px;}
	.register-btn{border-color: #8fd595 !important;}
	.register-btn.leh-active{background-color: #8fd595;}
	.register-btn .mint-button-text{color: #fff;}
	.register-sex-box{float: left;margin-right: 20px;}
	.register-sex-box span{margin-right: 8px;color: #fff;}
</style>