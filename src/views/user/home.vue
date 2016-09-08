<template>
	<m-header :isindex="false">
		<m-nav path="" label="个人中心"></m-nav>
	</m-header>
	<m-content>
		<div class="user-content"></div>
		<div class="user-money-bag-content"></div>
		<div class="user-money-bag-bank-content"></div>
		<div class="user-content"></div>
		<div class="center-headerbox">
			<div class="center-header-infobox js-center-header-infobox">
				<div class="center-header-imgbox">
					<img src="../../assets/img/littel-ico.png"/>
				</div>
				<p>刘医生</p>
				<p><span>消化内科</span>丨<span>主任医师</span></p>
			</div>
		</div>
		<div class="center-contentbox js-center-contentbox">
			<div class="center-m-list-box">
				<a class="mui-table-view-cell" v-link="{ path: '/user/moneyBag', replace: true}">
						<span class="iconfont icon-mui-icon-r-mbag center-content-ico1"></span>
						<span>我的钱包</span>
						<span class="mui-icon mui-icon-arrowright"></span>
				</a>
			</div>
			<div class="center-m-list-box">
				<a class="mui-table-view-cell" v-link="{ path: '/user/qualification', replace: true}">
					<span class="iconfont icon-mui-icon-r-dor center-content-ico2"></span>
					<span>执业资格</span>
					<span class="mui-icon mui-icon-arrowright"></span>
				</a>
				<a class="mui-table-view-cell" v-link="{ path: '/user/place', replace: true}">
					<span class="iconfont icon-mui-icon-r-pos center-content-ico3"></span>
					<span>执业地点</span>
					<span class="mui-icon mui-icon-arrowright"></span>
				</a>
			</div>
			<div class="center-m-list-box">
				<a class="mui-table-view-cell" v-link="{ path: '/user/notes', replace: true}">
					<span class="iconfont icon-mui-icon-r-edit center-content-ico4"></span>
					<span>记录中心</span>
					<span class="mui-icon mui-icon-arrowright"></span>
				</a>
				<a class="mui-table-view-cell" v-link="{ path: '/user/tasks', replace: true}">
					<span class="iconfont icon-mui-icon-r-write center-content-ico5"></span>
					<span>日程管理</span>
					<span class="mui-icon mui-icon-arrowright"></span>
				</a>
			</div>
			<div class="center-m-list-box">
				<a class="mui-table-view-cell" v-link="{ path: '/user/account', replace: true}">
					<span class="iconfont icon-mui-icon-r-keyw center-content-ico8"></span>
					<span>我的子账号</span>
					<span class="mui-icon mui-icon-arrowright"></span>
				</a>
				<a class="mui-table-view-cell" v-link="{ path: '/user/scan', replace: true}">
					<span class="iconfont icon-mui-icon-r-scanf center-content-ico6"></span>
					<span>我的二维码</span>
					<span class="mui-icon mui-icon-arrowright"></span>
				</a>
			</div>
			<div class="center-m-list-box">
				<a class="mui-table-view-cell" v-link="{ path: '/user/reset', replace: true}">
					<span class="iconfont icon-mui-icon-r-set center-content-ico7"></span>
					<span>设置</span>
					<span class="mui-icon mui-icon-arrowright"></span>
				</a>
			</div>
		</div>
	</m-content>
	<m-foot-bar></m-foot-bar>
</template>


<script>
	import MHeader from '../../components/mHeadBar'
	import MNav from '../../components/mNav'
	import MContent from '../../components/mContent'
	import MFootBar from '../../components/mFootBar'

	export default{
	  data () {
	    return{
	    }
	  },
		components: {
			MHeader,
			MNav,
			MContent,
			MFootBar
		}
	}
</script>

<style>
	.center-headerbox{height: 13.8rem;background:#2cb437;position: fixed;top: 0;width: 100%;left: 0;overflow: hidden;border-bottom: 1px solid #e5e5e5; z-index: 10;}
	.center-header-infobox{height: 9.28rem;position: absolute;width:120%;bottom: 0;left:-10.5%;background: #fff;border-radius: 50% 50% 0 0;}
	.center-header-imgbox{margin: -2.96rem auto 0;width: 6.2rem;height: 6.2rem;background-color: #fff;border-radius: 50%;overflow: hidden;}
	.center-header-imgbox img{width: 100%;}
	.center-header-infobox p{text-align: center;margin-top: 0.8rem;font-size: 0.96rem;color: #919191;}
	.center-header-infobox p:nth-of-type(1){font-size: 1.2rem;color: #363636;}
	.center-contentbox{padding-top: 13.8rem;}
	.center-contentbox .center-m-list-box{margin-bottom: 0.64rem;}
	.center-contentbox .mui-table-view-cell{padding: 0 0.8rem;height: 3.6rem;line-height: 3.6rem;font-size: 1.04rem;background-color: #fff;overflow: hidden;
		display: block;}
	.center-contentbox .mui-icon-arrowright{float: right;color: #aaa;font-size: 1.4rem;line-height: 3.6rem;}
	.center-contentbox .mui-table-view-cell:after{left: 0.8rem;}
	.center-content-ico3,.center-content-ico5,.center-content-ico6,.center-content-ico8{font-size: 1.2rem;margin-right: 0.56rem;}
	.center-content-ico2,.center-content-ico4,.center-content-ico7{font-size: 1.4rem;margin-right: 0.32rem;}
	.center-content-ico1{color: #f8bb0a;font-size: 1.32rem;margin-right: 0.42rem;}
	.center-content-ico2{color: #22d1a2;}
	.center-content-ico3{color: #f7826f;}
	.center-content-ico4{color: #f77a66;}
	.center-content-ico5{color: #ffae7c;}
	.center-content-ico6{color: #55c1fe;}
	.center-content-ico7{color: #f77a66;}
	.center-content-ico8{color: #24d0a2;}
</style>