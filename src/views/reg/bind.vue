<template>
	<mt-header fixed isgrey title="绑定手机"></mt-header>
	<mt-content class-name="leh-bg-grey-body page-popup">
		<div class="page-part register-bind-box">
			<mt-field placeholder="请输入手机号码" type="tel" :attr="{ maxlength: 11 }" v-ref:tels></mt-field>
			<mt-field placeholder="请输入验证码" type="tel" :attr="{ maxlength: 6 }" v-ref:codes>
				<span class="mint-field-state is-default register-bind-code" @click="getCode">
					<i class="mintui mintui-field-default"></i>
					<span class="leh-full-tip-btn leh-c-white" :class="{'leh-bg-grey-btn': setTimes,'leh-bg-green': !setTimes}" v-text="code_txt"></span>
				</span>
			</mt-field>
		</div>
		<div class="leh-full-btn">
			<mt-button size="large" type="green" @click="nextStep">下一步</mt-button>
		</div>
		<mt-popup v-show="show_popup" position="top" class="mint-popup-2" :modal="false">
			<p v-text="tips"></p>
		</mt-popup>
	</mt-content>
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtButton from '../../components/button.vue'
	import MtField from '../../components/field.vue'
	import MtPopup from '../../components/popup.vue'
	import {getJson,postJson} from 'util'
	import $ from 'zepto'

	export default{
	  data () {
	    return{
	    	tips: '',
		    tel_val: '',
		    code_val: '',
		    code_txt: '获取验证码',
		    code_request: false,
		    setTimes: 0,
		    show_popup: false
	    }
	  },

		methods: {
			// 获取验证码
			getCode () {
				let _self = this
				let tels = $(_self.$refs.tels)
				_self.tel_val = tels.val()
				let params = {
					'mobileNo': _self.tel_val
				}

				if(_self.tel_val === ''){

					_self.tips = '手机号码不能为空'
					_self.show_popup = true
					return

				}else if(new RegExp("^((1[0-9]))[0-9]{9,9}$").test(_self.tel_val) == false){

					_self.tips = '手机号码填写不正确'
					_self.show_popup = true
					return

				}

				if(!this.code_request){

					this.code_request = true
					this.setTimes = 60
					this.code_txt = '获取中 ' + this.setTimes + ' 秒'

					let codeInterval = setInterval(() => {

						if(this.setTimes > 1){

							this.setTimes = this.setTimes - 1
							this.code_txt = '获取中 ' + this.setTimes + ' 秒'
						}else {

							this.setTimes = 0
							this.code_txt = '获取验证码'
							this.code_request = false
							clearInterval(codeInterval)
						}

					}, 1000)

					getJson('api/Authenticate/sendcode', params, (rsp)=>{},this)
				}
			},

			nextStep () {

				let _self = this
				let tels = $(_self.$refs.tels)
				let codes = $(_self.$refs.codes)

				_self.tel_val = tels.val()
				_self.code_val = codes.val()

				let params = {
					'mobile': _self.tel_val,
					'code': _self.code_val,
					'weiXinToken': openID
				}
				if(_self.tel_val === ''){

					_self.tips = '手机号码不能为空'
					_self.show_popup = true
					return

				}else if(new RegExp("^((1[0-9]))[0-9]{9,9}$").test(_self.tel_val) == false){

					_self.tips = '手机号码填写不正确'
					_self.show_popup = true
					return

				}

				if(_self.code_val === ''){

					_self.tips = '验证码不能为空'
					_self.show_popup = true
					return

				}

				postJson('api/register/bind', params, (rsp, recode, msg)=>{

					if(recode === 1) {
						this.tips = msg
						this.show_popup = true
						return
					}else {

						if(rsp > 0) {

							_self.$route.router.go({path: '/home', replace: true})
						}else {

							_self.$route.router.go({path: '/reg/register', query: params, replace: true})
						}
					}
				},_self)

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
			MtField,
			MtPopup
		}
	}
</script>

<style>
	.register-bind-box{margin-bottom: 50px;}
	.register-bind-box .mint-cell:after{border-top: 0;}
	.register-bind-box .mint-cell:before{border-bottom-color: #e5e5e5;}
	.register-bind-box .mint-field:nth-last-of-type(1) .mint-cell:before{border-bottom:0;}
	.register-bind-code {background: #fff;padding: 10px;border-bottom: 1px solid #F2F2F2;margin: 0}

</style>