<template>
	<m-header :isindex="true">
		<m-nav path="/user/moneyBag" label="我的银行卡" btn_name="添加" :is_btn="true"></m-nav>
	</m-header>
	<m-content>
		<!--无卡时-->
		<p class="mycard-off-box" style="display: none;">温馨提示：您还没有添加银行卡，请按右上角添加按钮进行添加。</p>
		<!--有卡时-->
		<div class="mycard-on-box">
			<ul>
				<li class="mui-table-view-cell">
					<div class="mui-slider-right mui-disabled">
						<a class="mui-btn mui-btn-red">删除</a>
					</div>
					<div class="mui-slider-handle">
						<div class="mycard-on-list-hd">
							<div class="mycard-on-list-hd-img">
								<img src="../../assets/img/littel-ico.png"/>
							</div>
							<span>中国银行</span>
							<span>储蓄卡</span>
						</div>
						<div class="mycard-on-list-bd">卡号：621220360200****</div>
					</div>
				</li>
				<li class="mui-table-view-cell">
					<div class="mui-slider-right mui-disabled">
						<a class="mui-btn mui-btn-red">删除</a>
					</div>
					<div class="mui-slider-handle">
						<div class="mycard-on-list-hd">
							<div class="mycard-on-list-hd-img">
								<img src="../../assets/img/littel-ico.png"/>
							</div>
							<span>中国银行</span>
							<span>储蓄卡</span>
						</div>
						<div class="mycard-on-list-bd">卡号：621220360200****</div>
					</div>
				</li>
				<li class="mui-table-view-cell">
					<div class="mui-slider-right mui-disabled">
						<a class="mui-btn mui-btn-red">删除</a>
					</div>
					<div class="mui-slider-handle">
						<div class="mycard-on-list-hd">
							<div class="mycard-on-list-hd-img">
								<img src="../../assets/img/littel-ico.png"/>
							</div>
							<span>中国银行</span>
							<span>储蓄卡</span>
						</div>
						<div class="mycard-on-list-bd">卡号：621220360200****</div>
					</div>
				</li>
			</ul>
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
				let from_path = transition.from.path
				this.is_url = from_path;
			}
		},
	  data () {
		  return{
			  is_url: '',
			  messages: []
		  }
	  },
		events: {
			'child-event': function () {
				// 事件回调内的 `this` 自动绑定到注册它的实例上
				this.$route.router.go({path: '/user/bankAdd', replace: true})
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
	.mycard-on-box .mui-table-view-cell {
		padding: 1.04rem 0.8rem;
		background-color: #fff;
		overflow: hidden;
		margin-bottom: 0.64rem;
	}
	.mycard-on-list-hd-img {
		width: 1.4rem;
		height: 1.4rem;
		float: left;
		margin-right: 0.64rem;
	}
	.mycard-on-list-hd span:nth-of-type(1) {
		font-size: 1.04rem;
	}
	.mycard-on-list-hd span:nth-of-type(2) {
		font-size: 0.88rem;
		color: #919191;
	}
	.mycard-on-list-bd {
		margin-top: 0.64rem;
		font-size: 0.96rem;
		padding-left: 2.04rem;
		color: #919191;
	}
</style>