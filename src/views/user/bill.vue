<template>
	<m-header :isindex="true">
		<m-nav path="/user/moneyBag" label="我的账单"></m-nav>
	</m-header>
	<m-content class-name="profile-white">
		<div class="bill-title">
			<span class="iconfont icon-mui-icon-r-money bill-title-ico"></span>
			<span class="fl">总金额</span>
			<span class="fr"><em>¥</em>1000</span>
		</div>
		<ul>
			<li class="bill-list">
				<div class="bill-list-imgbox">
					<img src="../../assets/img/littel-ico.png"/>
				</div>
				<div class="bill-list-hd">
					<span class="iconfont icon-mui-icon-r-user bill-list-hd-ico"></span>
					<span class="fl">张三</span>
					<span class="leh-min-tip-btn leh-c-orange">文字语音</span>
					<span class="fr">2015-12-13</span>
				</div>
				<div class="bill-list-bd">
					<span class="iconfont icon-mui-icon-r-mbag bill-list-bd-ico"></span>
					<span class="fl">300元</span>
				</div>
			</li>
			<li class="bill-list">
				<div class="bill-list-imgbox">
					<img src="../../assets/img/littel-ico.png"/>
				</div>
				<div class="bill-list-hd">
					<span class="iconfont icon-mui-icon-r-user bill-list-hd-ico"></span>
					<span class="fl">张三</span>
					<span class="leh-min-tip-btn leh-c-green">网络电话</span>
					<span class="fr">2015-12-13</span>
				</div>
				<div class="bill-list-bd">
					<span class="iconfont icon-mui-icon-r-mbag bill-list-bd-ico"></span>
					<span class="fl">300元</span>
				</div>
			</li>
		</ul>
	</m-content>
</template>
<script>
	import MHeader from '../../components/mHeadBar'
	import MNav from '../../components/mNav'
	import MContent from '../../components/mContent'

	export default{
		data () {
			return{
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
	.bill-title{height: 4.04rem;line-height: 4.04rem;padding: 0 0.8rem;overflow: hidden;background-color: #fff;margin-bottom: 0.64rem;}
	.bill-title-ico{font-size: 1.4rem;color: #ff3144;float: left;}
	.bill-title span.fl{font-size: 1.04rem;margin-left: 0.4rem;}
	.bill-title span.fr{font-size: 1.04rem;}
	.bill-title span.fr em{font-size: 0.8rem;}
	.bill-list{height: 6.2rem;padding-left: 5.6rem;background-color: #fff;position: relative;margin-bottom: 0.64rem;}
	.bill-list-imgbox{width: 3.92rem;height: 3.92rem;border-radius: 50%;overflow: hidden;position: absolute;top: 1.12rem;left: 0.8rem;}
	.bill-list-hd{overflow: hidden;box-sizing: border-box;border-bottom: 1px solid #e5e5e5;height: 3.12rem;line-height: 3.12rem;padding-right: 0.8rem;}
	.bill-list-hd-ico{float: left;font-size: 1.2rem;color: #1dadfe;}
	.bill-list-hd span.fl,.bill-list-bd span.fl{font-size: 1.04rem;margin: 0 0.4rem;}
	.bill-list-hd span.fr{font-size: 0.96rem;color: #919191;}
	.bill-list-bd{overflow: hidden;height: 3.08rem;line-height: 3.08rem;padding-right: 0.8rem;}
	.bill-list-bd-ico{float: left;color: #f8bb0a;font-size: 1.2rem;}
</style>