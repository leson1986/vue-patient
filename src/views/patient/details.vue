<template>
	<header class="mui-bar mui-bar-nav">
		<a class="mui-icon mui-icon-left-nav mui-pull-left" @click="backto"></a>
		<div class="details-headerbox">
			<div id="segmentedControl" class="mui-segmented-control">
				<a class="mui-control-item mui-active" href="#idUserinfo"><span>个人资料</span></a>
				<a class="mui-control-item" href="#idSickcase"><span>　病历　</span></a>
				<a class="mui-control-item" href="#idCheck"><span>检查单</span></a>
			</div>
		</div>
		</div>
	</header>
	<m-content class-name="label-whitescreen">
		<div class="mui-control-content mui-active" id="idUserinfo">
			<div class="Userinfo-box">
				<div class="Userinfo-titlebox" id="">
					<div class="Userinfo-headerimg">
						<img src="../../assets/img/littel-ico.png"/>
					</div>
					<p v-text="name"></p>
					<p>男<em>31岁</em></p>
				</div>
				<div class="Userinfo-mainbox js-userinfo-main-box">
					<ul class="Userinfo-list">
						<li class="mui-table-view-cell" v-link="{path: '/patient/labelChoose', replace: true}">
							<span class="iconfont icon-mui-icon-r-targettype user-labelico fl"></span>
							<span class="leh-text-ellipsis leh-c-gray">暂无随访方案</span>
							<span class="mui-icon mui-icon-forward"></span>
						</li>
						<li class="mui-table-view-cell" data-url="../followPlan/followSetIndex.html">
							<span class="iconfont icon-mui-icon-r-scheme user-suifangico fl"></span>
							<span class="leh-text-ellipsis leh-c-36">乙肝随访方案</span>
							<span class="mui-icon mui-icon-forward"></span>
							<div class="Userinfo-suifangbox">
								<ul>
									<li class="Userinfo-suifanglist">
										<span class="fl">下次随访时间</span>
										<span class="fr">2016-03-15</span>
									</li>
									<li class="Userinfo-suifanglist">
										<span class="fl">上次随访执行率</span>
										<span class="fr">80%</span>
									</li>
									<li class="Userinfo-suifanglist">
										<span class="fl">下次随访时间</span>
										<span class="fr">血常规、乙肝三项、血常规、乙肝三项</span>
									</li>
								</ul>
							</div>
						</li>
					</ul>
					<ul class="Userinfo-list">
						<li class="mui-table-view-cell" v-link="{path: '/patient/family', replace: true}">
							<span class="iconfont icon-mui-icon-r-family user-familyico"></span>
							<span>家族病史</span>
							<span class="mui-icon mui-icon-forward"></span>
						</li>
						<li class="mui-table-view-cell" v-link="{path: '/patient/behavior', replace: true}">
							<span class="iconfont icon-mui-icon-r-flower user-lifeico"></span>
							<span>生活行为习惯</span>
							<span class="mui-icon mui-icon-forward"></span>
						</li>
						<li class="mui-table-view-cell" v-link="{path: '/patient/sick', replace: true}">
							<span class="iconfont icon-mui-icon-r-dir user-otherico"></span>
							<span>其他疾病相关</span>
							<span class="mui-icon mui-icon-forward"></span>
						</li>
					</ul>
				</div>

			</div>
		</div>
		<!--病历-->
		<div class="mui-control-content" id="idSickcase">
			<div class="sickcase-box">
				<div class="sickcase-writebox" v-link="{path: '/patient/writeHistory', replace: true}">
					<span class="iconfont icon-mui-icon-r-edit"></span>
					<span>手写病历</span>
					<span>2016-10-05</span>
				</div>
				<div class="sickcase-changeingtitle">
					<span class="iconfont icon-mui-icon-r-turn"></span>
					<span>已转换</span>
				</div>
				<ul class="js-sickcase-writebox-list">
					<li class="mui-table-view-cell" v-link="{path: '/patient/caseHistory', replace: true}">
						<p class="leh-text-ellipsis">乙肝乙肝乙肝乙肝乙肝乙肝乙</p>
						<p>
							<span class="fl">感染性疾病科</span>
							<span class="fr">2016-04-03</span>
						</p>
					</li>
					<li class="mui-table-view-cell" v-link="{path: '/patient/caseHistory', replace: true}">
						<p class="leh-text-ellipsis">乙肝乙肝乙肝乙肝乙肝乙肝乙</p>
						<p>
							<span class="fl">感染性疾病科</span>
							<span class="fr">2016-04-03</span>
						</p>
					</li>
				</ul>
			</div>
		</div>
		<!--检查单-->
		<div class="mui-control-content check-whitescreen" id="idCheck">
			<div class="check-box">
				<ul class="js-check-box-list">
					<li class="mui-table-view-cell" data-id="1">
						<span class="fl">血常规</span>
						<span class="fr">2016-04-03</span>
					</li>
					<li class="mui-table-view-cell" data-id="2">
						<span class="fl">肝功能</span>
						<span class="fr">2016-04-03</span>
					</li>
					<li class="mui-table-view-cell" data-id="3">
						<span class="fl">肾功能</span>
						<span class="fr">2016-04-03</span>
					</li>
					<li class="mui-table-view-cell" data-id="4">
						<span class="fl">乙肝两对半</span>
						<span class="fr">2016-04-03</span>
					</li>
				</ul>
			</div>
		</div>
	</m-content>
</template>
<script>
	import MContent from '../../components/mContent'

	export default{
		route: {
			data: function (transition) {
				this.name = transition.to.query.name
			}
		},
		data () {
			return{
				name: ''
			}
		},
		methods: {
			backto () {
				this.$route.router.go({path: '/patient/home', replace: true})
			}
		},
		components: {
			MContent
		}
	}
</script>

<style>
	.details-headerbox{padding: 8px 3.8rem 8px 4.2rem;}
	.details-headerbox .mui-segmented-control{border: 0;position: static;background-color:#199c24;border-radius: 15px;}
	.details-headerbox .mui-segmented-control .mui-control-item{line-height:29px;border: 0;background-color: transparent;color: #5fcb68;text-align: center;}
	.details-headerbox .mui-segmented-control .mui-control-item.mui-active{background-color: transparent;color: #fff;font-size: 1.04rem;overflow: hidden;}
	.details-headerbox .mui-segmented-control .mui-control-item.mui-active span{background-color: #1faa2b;padding: 0.12rem 0;border-radius: 15px;}
	.details-headerbox .mui-segmented-control .mui-control-item:nth-of-type(3) span{padding: 0.12rem 0.52rem;}
	.mui-bar-nav{box-shadow: 0 0 0 transparent;-webkit-box-shadow: 0 0 0 transparent;}
	.Userinfo-titlebox{background-color: #1faa2b;height:10.2rem;padding: 0.8rem 0;overflow: hidden;width: 100%;position: fixed;left: 0;z-index: 20;}
	.Userinfo-headerimg{height: 4.8rem;width: 4.8rem;overflow:hidden;background-color: #60c369;margin: 0 auto;border-radius: 50%;}
	.Userinfo-headerimg img{width: 100%;}
	.Userinfo-titlebox p:nth-of-type(1){text-align: center;line-height: 2.56rem;font-size: 1.04rem;color: #fff;}
	.Userinfo-titlebox p:nth-of-type(2){text-align: center;font-size: 0.88rem;color: #fff;}
	.Userinfo-titlebox p:nth-of-type(2) em{margin-left: 0.6rem;}
	.Userinfo-list{background-color: #fff;margin-bottom: 0.6rem;}
	.Userinfo-list .mui-table-view-cell{padding: 0 0.8rem;height: 3.6rem;line-height: 3.6rem;font-size: 1.04rem;}
	.Userinfo-list .mui-table-view-cell:after{left: 0.8rem;}
	.user-labelico{font-size: 1.04rem;color: #22d1a2;margin-right: 0.64rem;}
	.user-suifangico{font-size: 1.2rem;color: #f7826f;margin-right: 0.56rem;}
	.user-familyico{font-size: 1.4rem;color: #1dadfe;margin-right: 0.36rem;}
	.user-lifeico{font-size: 1.2rem;color: #f8bb0a;margin-right: 0.56rem;}
	.user-otherico{font-size: 1.2rem;color: #22d1a2;margin-right: 0.56rem;}
	.Userinfo-list .mui-icon-forward{font-size: 1.4rem;float: right;line-height: 3.6rem;color: #aaa;}
	.Userinfo-list:nth-of-type(1) .mui-table-view-cell:nth-of-type(1) span:nth-of-type(2){width: 60%;float: left; display: inline-block;}
	.Userinfo-list:nth-of-type(1) .mui-table-view-cell:nth-of-type(2){height: auto;line-height: normal;padding: 0.96rem 0.8rem;}
	.Userinfo-list:nth-of-type(1) .mui-table-view-cell:nth-of-type(2) .mui-icon-forward{line-height: normal;}
	.Userinfo-suifangbox{margin-top: 0.8rem;background-color: #fffad5;border-radius: 5px;overflow: hidden;padding: 0 0.8rem;}
	.Userinfo-suifanglist{padding: 0.8rem 0;overflow: hidden;border-bottom: 1px dotted #d3c13d;}
	.Userinfo-suifanglist:nth-last-of-type(1){border:0 ;}
	.Userinfo-suifanglist .fr{max-width: 55%;color:#363636 !important;}
	.Userinfo-mainbox{padding-top: 10.2rem;overflow: hidden;}
	/*病历*/
	.sickcase-writebox{height: 3.8rem;line-height: 3.8rem;padding: 0 0.8rem;background-color: #fff;}
	.sickcase-writebox span:nth-of-type(1){font-size: 1.32rem;color: #e1dcdc;margin-right: 0.32rem;}
	.sickcase-writebox span:nth-of-type(2){font-size: 1.12rem;color: #1dadfe;}
	.sickcase-writebox span:nth-of-type(3){font-size: 0.96rem;float: right;}
	.sickcase-changeingtitle{height: 2.8rem;line-height: 2.8rem;padding: 0 0.8rem;text-align: right;}
	.sickcase-changeingtitle span:nth-of-type(1){font-size: 1.04rem;color: #d5d5d5;}
	.sickcase-changeingtitle span:nth-of-type(2){font-size: 0.96rem;color: #919191;}
	.sickcase-box .mui-table-view-cell{padding: 0.8rem;background-color: #fff;}
	.sickcase-box .mui-table-view-cell:after{left: 0.8rem;}
	.sickcase-box .mui-table-view-cell p:nth-of-type(1){width: 57%;font-size: 1.04rem;}
	.sickcase-box .mui-table-view-cell p:nth-of-type(2){font-size: 0.96rem;color: #919191;margin-top: 0.56rem;overflow: hidden;}
	/*检查单*/
	.check-whitescreen{height: 100%;background-color: #fff;}
	.check-box .mui-table-view-cell{padding: 0 0.8rem;line-height: 3.8rem;overflow: hidden;}
	.check-box .mui-table-view-cell:after{left: 0.8rem;}
	.check-box .mui-table-view-cell .fl{font-size: 1.04rem;}
	.check-box .mui-table-view-cell .fr{font-size: 0.96rem;color: #919191;}
	.mui-control-content .mui-table-view-cell:after {height: 1px !important;}
</style>