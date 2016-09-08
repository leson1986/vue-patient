<template>
	<m-header :isindex="true">
		<m-nav path="/user/home" label="我的子帐号"></m-nav>
	</m-header>
	<m-content class-name="leh-bg-white">
		<div class="account-title">
			<ul>
				<li class="account-title-list">子账号</li>
				<li class="account-title-list">管理人数</li>
				<li class="account-title-list">使用状态</li>
			</ul>
		</div>
		<div class="account-main">
			<ul>
				<li class="account-main-list js-account-main-list">
					<div class="account-main-list-left js-account-main-list-left">
						<div class="account-main-list-half">张先生</div>
						<div class="account-main-list-half">10</div>
					</div>
					<div class="account-main-list-right">
						<div class="mui-switch mui-switch-mini mui-active " data-switch="1">
							<div class="mui-switch-handle"></div>
						</div>
					</div>
				</li>

			</ul>
		</div>
	</m-content>
	<m-footer-button>新建子账号</m-footer-button>
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
				this.$route.router.go({path: '/user/accountAdd', replace: true})
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
	.account-title{background-color: #f6fcff;overflow: hidden;}
	.account-title-list{float: left;width: 33.33%;text-align: center;height: 2.6rem;line-height: 2.6rem;font-size: 1.04rem;color: #2cb2fe;}
	.account-main{overflow: hidden;}
	.account-main-list{border-bottom: 1px solid #e5e5e5;overflow: hidden;}
	.account-main-list-left{float: left;width: 66%;overflow: hidden;}
	.account-main-list-half{font-size: 1.04rem;text-align: center;width: 50%;float: left;line-height: 2.6rem;}
	.account-main-list-right{float: left;width: 34%;padding-top: 0.45rem;text-align: center;}
	.account-main-list-right .mui-switch-mini {height: 23px; width: 38px; display: -webkit-inline-box;}
	.account-main-list-right .mui-switch .mui-switch-handle {height: 20px; width: 20px;}
	.account-main-list-right .mui-switch.mui-active {border-color: #21D1A2;background-color: #21D1A2;}
	.account-main-list-bg-grey{background-color: #f6f6f6;}
	.account-main-list-bg-grey .account-main-list-flex{color: #aaa;}
</style>