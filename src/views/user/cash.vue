<template>
	<m-header :isindex="true">
		<m-nav path="/user/moneyBag" label="余额提现"></m-nav>
	</m-header>
	<m-content class-name="profile-white">
		<div class="balance-title">我的银行卡</div>
		<div class="balance-main">
			<div class="balance-main-img">
				<img src="../../assets/img/littel-ico.png"/>
			</div>
			<span class="fl">中国银行</span>
			<span class="mui-icon mui-icon-arrowright balance-main-arr"></span>
			<span class="fr">尾号5331储蓄卡</span>
		</div>
		<div class="balance-title">我的余额</div>
		<div class="balance-main">
			<span class="fl">可用余额</span>
			<span class="fr leh-c-red">10000</span>
		</div>
		<div class="balance-get-cash-box">
			<p>温馨提示：您的提现将在48小时内到账</p>
			<input type="number" v-model="cash_num"/>
			<div class="balance-get-cash-btn" :class="gery_btn">确认提现</div>
		</div>
	</m-content>
</template>
<script>
	import MHeader from '../../components/mHeadBar'
	import MNav from '../../components/mNav'
	import MContent from '../../components/mContent'

	export default{
		data () {
			return{
				cash_num: '',
				gery_btn: 'balance-bg-grey'
			}
		},
		ready () {
			this.$watch('cash_num',function (newVal, oldVal) {
				if(newVal === ''){
					this.gery_btn = 'balance-bg-grey'
				}else{
					this.gery_btn = ''
				}
			})
			
		},
		components: {
			MHeader,
			MNav,
			MContent
		}
	}
</script>

<style>
	.balance-title{height: 2.6rem;line-height: 2.6rem;padding: 0 0.8rem;font-size: 0.96rem;color: #919191;}
	.balance-main{height: 3.6rem;line-height: 3.6rem;background-color: #fff;overflow: hidden;padding: 0 0.8rem;}
	.balance-main-img{width: 1.4rem;height: 1.4rem;float: left;margin-right: 0.64rem;margin-top: 1.04rem;}
	.balance-main span.fl{font-size: 1.04rem;}
	.balance-main span.fr{font-size: 0.96rem;color: #919191;}
	.balance-main-arr{float: right;line-height: 3.6rem;font-size: 1.4rem;color: #aaa;}
	.balance-get-cash-box{padding: 2.8rem 0.8rem;overflow: hidden;}
	.balance-get-cash-box p{font-size: 0.96rem;color: #919191;}
	.balance-get-cash-box input{font-size: 0.96rem;border-color: #e5e5e5;margin: 0.8rem 0;}
	.balance-get-cash-btn{height: 2.6rem;line-height: 2.6rem;text-align: center;font-size: 0.96rem;color: #fff;background-color: #1dadfe;border-radius: 5px;margin-top: 0.64rem;}
	.balance-bg-grey{background-color: #afafaf;}
</style>