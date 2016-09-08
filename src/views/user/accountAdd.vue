<template>
	<m-header :isindex="true">
		<m-nav path="/user/account" label="新建子帐号"></m-nav>
	</m-header>
	<m-content class-name="leh-bg-white">
		<ul>
			<li class="account-add-list">
				<span class="fl">名称</span>
				<input type="text" placeholder="请填写使用者的姓名">
			</li>
			<li class="account-add-list">
				<span class="fl">账号</span>
				<input type="number" placeholder="请填写使用者的电话号码">
			</li>
		</ul>
		<p class="account-add-txt">注：新建子账号密码默认与账号相同。</p>
		<!--弹框-->
		<div class="account-add-tap-box mui-popover">
			<p class="js-account-add-tap"></p>
		</div>
	</m-content>
	<m-footer-button>下一步</m-footer-button>
</template>
<script>
	import MHeader from '../../components/mHeadBar'
	import MNav from '../../components/mNav'
	import MContent from '../../components/mContent'
	import MFooterButton from '../../components/mFooterButton'

	export default{
		data () {
			return{
			}
		},
		events: {
			'footer-button-event' () {
				this.$route.router.go({path: '/user/accountAssign', replace: true})
			}
		},
		components: {
			MHeader,
			MNav,
			MContent,
			MFooterButton
		}
	}
</script>

<style>
	.account-add-list{padding:1.04rem 0.8rem;border-bottom: 1px solid #e5e5e5;overflow: hidden;}
	.account-add-list .fl{font-size: 1.04rem;}
	.account-add-list input{float: right;width: 80%;margin: 0;padding: 0;height: auto;font-size: 0.96rem;text-align: right;border: 0;}
	.account-add-txt{padding: 0.8rem;font-size: 0.96rem;color: #919191;}
	.account-add-tap-box{width: 72%;padding: 1.4rem 0;left: 50%;margin-left: -36%;}
	.account-add-tap-box p{font-size: 1.04rem;text-align: center;}
</style>