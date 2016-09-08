<template>
	<mt-header fixed isgrey title="绑定手机"></mt-header>
	<mt-content class-name="leh-bg-grey-body page-popup">
		<div class="page-part register-bind-box">
			<mt-field placeholder="请输入手机号码" type="tel" :attr="{ maxlength: 11 }" v-ref:tels></mt-field>
			<mt-field placeholder="请输入验证码" type="tel" :attr="{ maxlength: 6 }" v-ref:codes>
				<span class="mint-field-state is-default register-bind-code" @click="getCode">
					<i class="mintui mintui-field-default"></i>
					<span class="leh-full-tip-btn leh-bg-green leh-c-white">获取验证码</span>
				</span>
			</mt-field>
		</div>
		<div class="leh-full-btn">
			<mt-button size="large" type="green">下一步</mt-button>
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

	export default{
	  data () {
	    return{
	    	tips: '',
		    tel_val:'',
		    code_val:'',
		    show_popup: false
	    }
	  },

		events: {
			'footer-button-event' () {
				this.tel_val = this.$refs.tels.value;
				this.code_val = this.$refs.codes.value;


				if(this.tel_val === '' || this.code_val === ''){
					this.tips = '手机号码和验证码不能为空'
					this.show_popup = true
				}else {
					this.$route.router.go('/reg/register')
				}
			}
		},

		methods: {
			// 获取验证码
			getCode () {
				alert('获取验证码123456')
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