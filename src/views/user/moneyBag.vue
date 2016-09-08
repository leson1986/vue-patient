<template>
	<m-header :isindex="true">
		<m-nav path="/user/home" label="我的钱包"></m-nav>
	</m-header>
	<m-content>
		<div class="mui-content">
			<div class="wallet-header-box">
				<div class="wallet-header-hd">
					<span class="iconfont icon-mui-icon-r-money wallet-header-ico"></span>
					<span>我的资产(元)</span>
				</div>
				<div class="wallet-header-bd">
					<span id="currentmoney">¥100.<em>00</em></span>
				</div>
			</div>
			<div class="set-list-box js-center-wallet-list">
				<a class="mui-table-view-cell" v-link="{path: '/user/bank', replace: true}" >
					<span class="fl">银行卡</span>
					<span class="mui-icon mui-icon-arrowright set-list-arr-ico"></span>
					<span id="count" class="fr">1张</span>
				</a>
				<a class="mui-table-view-cell" v-link="{path: '/user/cash', replace: true}">
					<span class="fl">提现</span>
					<span class="mui-icon mui-icon-arrowright set-list-arr-ico"></span>
				</a>
				<a class="mui-table-view-cell" v-link="{path: '/user/bill', replace: true}">
					<span class="fl">账单</span>
					<span class="mui-icon mui-icon-arrowright set-list-arr-ico"></span>
				</a>
			</div>
		</div>
	</m-content>
</template>
<script>
	import MHeader from '../../components/mHeadBar'
	import MNav from '../../components/mNav'
	import MContent from '../../components/mContent'

	export default{
		route: {
			data: function (transition) {
				let from_path = transition.from.path;
				if(from_path !== '/user/home'){

				}
				this.is_url = from_path;
			}
		},
	  data () {
	    return{
	    	is_url: '/user/home'
	    }
	  },
		components: {
			MHeader,
			MNav,
			MContent
		}
	}
</script>

<style>
	.wallet-header-box{padding: 1.04rem 0.8rem;background-color: #fff;overflow: hidden;margin-bottom: 0.64rem;}
	.wallet-header-hd{font-size: 1.12rem;}
	.wallet-header-ico{font-size: 1.4rem;color: #ff3144;float: left;margin-right: 0.4rem;}
	.wallet-header-bd{margin-top: 2.4rem;text-align: right;}
	.wallet-header-bd span{font-size: 1.44rem;color: #ff3144;}
	.wallet-header-bd span em{font-size: 0.88rem;}
	.set-list-box {
		margin-bottom: 0.64rem;
		background-color: #fff;
	}
	.set-list-box .mui-table-view-cell {
		padding: 0 0.8rem;
		height: 3.2rem;
		line-height: 3.2rem;
		overflow: hidden;
		display: block;
	}
	.set-list-arr-ico {
		float: right;
		line-height: 3.2rem;
		font-size: 1.4rem;
		color: #aaa;
	}
</style>