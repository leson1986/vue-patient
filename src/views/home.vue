<template>
	<mt-header fixed :title="selected" class-name="leh-bg-green" v-if="selected==='个人中心' ? false : true"></mt-header>
	<mt-content class-name="page-tabbar" :class="{'leh-bg-grey-body' : selected==='个人中心'}">
		<div class="page-wrap consult-padding-bottom">
			<mt-tab-container :active.sync="selected">
				<mt-tab-container-item id="在线门诊">
					<div class="mint-tab-container-item">
						<div class="consult-tap-box">
							<mt-tab-item v-link="{path: '/online/photo', replace: true}">
								<span slot="icon"><span class="mint-tab-item-icon"></span></span>
								拍照上传
							</mt-tab-item>
							<mt-tab-item v-link="{path: '/online/remind', replace: true}">
								<span slot="icon"><span class="mint-tab-item-icon"></span></span>
								用药提醒
							</mt-tab-item>
							<mt-tab-item v-link="{path: '/online/feedback', replace: true}">
								<span slot="icon"><span class="mint-tab-item-icon"></span></span>
								留言咨询
							</mt-tab-item>
						</div>
						<div class="leh-null-box"></div>
						<div class="consult-list-box">
							<div class="page-cell consult-list-title">
								<a class="mint-cell">
									<span class="mint-cell-mask"></span>
									<label class="mint-cell-title">
										<span class="mint-cell-text leh-c-green">我的单据</span>
									</label>
									<div class="mint-cell-value"></div>
								</a>
							</div>
							<div class="page-cell consult-list-main">
								<a class="mint-cell" v-link="{path: '/online/bill', query: {actives: 'turn'}, replace: true}">
									<span class="mint-cell-mask iconfont icon-wx-loading"></span>
									<label class="mint-cell-title">
										<span class="mint-cell-text leh-red-dot">待转换</span>
									</label>
									<div class="consult-list-text">
										<span>转换中<span>20</span></span>
										<span class="leh-c-grey-tint">丨</span>
										<span>需处理<span>3</span></span>
									</div>
									<div class="mint-cell-value">
										<span class="iconfont icon-wx-arr-right"></span>
									</div>
								</a>
								<a class="mint-cell" v-link="{path: '/online/bill', query: {actives: 'case'}, replace: true}">
									<span class="mint-cell-mask iconfont icon-wx-sick"></span>
									<label class="mint-cell-title">
										<span class="mint-cell-text leh-red-dot">病历</span>
									</label>
									<div class="consult-list-text">
										<span>昨天转换<span>0</span></span>
									</div>
									<div class="mint-cell-value">
										<span class="iconfont icon-wx-arr-right"></span>
									</div>
								</a>
								<a class="mint-cell" v-link="{path: '/online/bill', query: {actives: 'checked'}, replace: true}">
									<span class="mint-cell-mask iconfont icon-wx-check"></span>
									<label class="mint-cell-title">
										<span class="mint-cell-text leh-red-dot">检查单</span>
									</label>
									<div class="consult-list-text">
										<span>昨天转换<span>0</span></span>
									</div>
									<div class="mint-cell-value">
										<span class="iconfont icon-wx-arr-right"></span>
									</div>
								</a>
							</div>
						</div>
						<div class="leh-null-box"></div>
						<div class="consult-list-box">
							<div class="page-cell consult-list-title">
								<a class="mint-cell" v-link="{path: '/online/scheme', replace: true}">
									<span class="mint-cell-mask"></span>
									<label class="mint-cell-title">
										<span class="mint-cell-text leh-c-green">我的日程</span>
									</label>
									<div class="mint-cell-value">
										<span class="leh-c-red leh-fs-twelve">有新日程更新啦~点击→</span>
										<span>更多</span>
									</div>
									<span class="iconfont icon-wx-arr-right"></span>
								</a>
							</div>
							<!--无日程-->
							<div class="consult-list-not-task" style="display: none">
								<div class="breathe-btn">+</div>
								<p>暂无日程添加</p>
							</div>
							<!--有日程-->
							<div class="page-cell consult-list-main">
								<mt-cell
										v-for="list in daylist"
										:title="list.title"
										:value="list.value"
										:istitle="true"
										v-link="{path: '/online/scheme', query: {actives: 'checked'}, replace: true}"
										blackfont>
								</mt-cell>
							</div>
						</div>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="我的医生">
					<div class="page-cell doctor-index-box">
						<a class="mint-cell" v-for="n in 4" v-link="{path: '/mydoctor/doctor', replace: true}">
							<span class="mint-cell-mask leh-red-dot">
								<div class="doctor-img">
									<img src="../assets/img/private.jpg"/>
								</div>
							</span>
							<label class="mint-cell-title">
								<span class="mint-cell-text">
									<span>高志良</span>
									<span>主任医师</span>
									<span class="leh-c-green">感染科</span>
								</span>
								<span class="mint-cell-label leh-c-black">中山大学附属第三医院</span>
							</label>
							<div class="mint-cell-value"></div>
						</a>

					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="个人中心" class="consult-container-item-hight">
					<div class="center-head" v-link="'/user/info'">
						<div class="center-head-img">
							<img src="../assets/img/private.jpg" />
						</div>
						<p class="center-name">张某某</p>
					</div>
					<div class="center-content">
						<div class="page-cell">
							<mt-cell title="医生公告" icon="announcement" icons="arr-right" istitle is-icon reddot></mt-cell>
							<mt-cell title="记录中心" icon="note" icons="arr-right" istitle is-icon></mt-cell>
							<mt-cell title="疾病相关" icon="disease" icons="arr-right" istitle is-icon></mt-cell>
							<mt-cell title="关于随访家园" icon="link" icons="arr-right" istitle is-icon></mt-cell>
						</div>
					</div>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
		<mt-tabbar :selected.sync="selected" class-name="consult-tabbar-box">
			<mt-tab-item id="在线门诊">
				<span slot="icon"><span class="mint-tab-item-icon"></span></span>
				在线门诊
			</mt-tab-item>
			<mt-tab-item id="我的医生">
				<span slot="icon"><span class="mint-tab-item-icon"></span></span>
				我的医生
			</mt-tab-item>
			<mt-tab-item id="个人中心">
				<span slot="icon"><span class="mint-tab-item-icon"></span></span>
				个人中心
			</mt-tab-item>
		</mt-tabbar>
	</mt-content>
</template>

<script type="text/babel">

	import MtContent from '../components/content'
	import MtHeader from '../components/header.vue'
	import MtTabContainer from '../components/tab-container.vue'
	import MtTabContainerItem from '../components/tab-container-item.vue'
	import MtTabbar from '../components/tabbar.vue'
	import MtTabItem from '../components/tab-item.vue'
	import MtCell from '../components/cell.vue'

	export default{
		name: 'page-tabbar',
		data() {
			return {
				selected: '在线门诊',
				istitle: true,
				daylist: [
					{
						title: '8月15日',
						value: '医院复诊'
					},
					{
						title: '8月16日',
						value: '医院复诊'
					},
					{
						title: '8月17日',
						value: '医院复诊'
					},
					{
						title: '8月18日',
						value: '医院复诊'
					}
				]
			};
		},

		components: {
			MtContent,
			MtHeader,
			MtTabContainer,
			MtTabContainerItem,
			MtTabbar,
			MtTabItem,
			MtCell
		}
	}


</script>

<style>
	/** 在线门诊 **/
	.consult-tabbar-box>.mint-tab-item{background-color: #fff;}
	.consult-tabbar-box>.mint-tab-item.is-selected{background-color: #fff;color: #1faa2b;}
	.consult-tabbar-box>.mint-tab-item.is-selected .mint-tab-item-label{color: #1faa2b;}
	.consult-tabbar-box>.mint-tab-item .mint-tab-item-icon{background: url(../assets/img/index-nav.png) no-repeat;background-size: 75px auto;display: inline-block;}
	.consult-tabbar-box .mint-tab-item:nth-of-type(2) .mint-tab-item-icon{background-position:-26px 0;}
	.consult-tabbar-box .mint-tab-item:nth-of-type(3) .mint-tab-item-icon{background-position:-53px 0;}
	.consult-tabbar-box .mint-tab-item:nth-of-type(1).is-selected .mint-tab-item-icon{background-position:0 -28px;}
	.consult-tabbar-box .mint-tab-item:nth-of-type(2).is-selected .mint-tab-item-icon{background-position:-26px -28px;}
	.consult-tabbar-box .mint-tab-item:nth-of-type(3).is-selected .mint-tab-item-icon{background-position:-53px -28px;}
	.consult-tap-box{display: flex;text-align: center;background-color:#fff;padding: 10px 0;}
	.consult-tap-box .mint-tab-item-icon{width: 33px;height: 33px;display:inline-block;border-radius: 50%;overflow: hidden;background: url(../assets/img/consult-nav-ico.png) no-repeat;background-size: auto 33px;}
	.consult-tap-box .mint-tab-item:nth-of-type(2) .mint-tab-item-icon{background-position-x: -39px;}
	.consult-tap-box .mint-tab-item:nth-of-type(3) .mint-tab-item-icon{background-position-x: -79px;}
	.consult-tap-box .mint-tab-item-label{font-size: 14px;}
	.consult-list-title .mint-cell:before,.consult-list-title .mint-cell:after{border: 0;}
	.consult-list-title .mint-cell-value span:nth-of-type(2){font-size: 14px;margin-left: 5px;}
	.consult-list-main .mint-cell{font-size: 14px;}
	.consult-list-main .mint-cell:nth-last-of-type(1):before{border: 0;}
	.consult-list-main .mint-cell-mask{margin-right: 10px;}
	.consult-list-main .mint-cell-mask.icon-wx-loading{color: #fcdb57;}
	.consult-list-main .mint-cell-mask.icon-wx-sick{color: #faa28d;}
	.consult-list-main .mint-cell-mask.icon-wx-check{color: #81d9ff;}
	.consult-list-main .mint-cell-value .icon-wx-arr-right{color: #aaa;}
	.consult-list-text{flex: 2;}
	.consult-list-text span span{margin-left: 12px;}
	.consult-list-not-task{height: 141px;background-color: #fff;border-top: 1px solid #e5e5e5;}
	.consult-list-not-task p{text-align: center;font-size: 12px;color: #363636;}
	.consult-padding-bottom{padding-bottom: 55px;}
	.consult-padding-bottom .mint-tab-container-wrap,.consult-container-item-hight{height: 100%;}
	.consult-list-title .icon-wx-arr-right{color: #fff;background-color: #e5e5e5;font-size: 12px;padding: 2px 0;margin-left: 5px;}
	/*我的医生首页*/
	.doctor-index-box .mint-cell:after{border: 0;}
	.doctor-index-box .mint-cell:before{left: 10px;}
	.doctor-img{width: 50px;height: 50px;border-radius: 50%;overflow:hidden;margin-right: 10px;}
	.doctor-index-box .mint-cell-mask.leh-red-dot:before{content: '';position: absolute;top: 0px;right: 10px;width: 8px;height: 8px;border-radius: 50% 50% 50% 50%;background-color: #f92b2b;}
	.doctor-index-box .mint-cell-text span:nth-of-type(2){font-size: 12px;margin: 0 5px;}
	.doctor-index-box .mint-cell-text span:nth-of-type(3){font-size: 13px;}
	.doctor-index-box .mint-cell-label{font-size: 14px;}
	/*个人中心*/
	.center-head{height: 165px;width:100%;background-color:#1faa2b;position: fixed;left: 0;}
	.center-head-img{width: 55px;height: 55px;border: 1px solid #fff;border-radius: 50%;margin: 50px auto 15px;overflow: hidden;text-align: center;}
	.center-head-img img{width: 45px;height: 45px;border-radius: 50%;margin-top: 4px;}
	.center-name{text-align: center;font-size: 16px;color: #fff;}
	.center-content{padding-top: 165px;}
	.center-content .mint-cell:after,
	.center-content .mint-cell:nth-of-type(3):before,
	.center-content .mint-cell:nth-of-type(4):before{border: 0;}
	.center-content .mint-cell:nth-of-type(3){margin-bottom: 8px;}
	.center-content .mint-cell:before{left: 10px;}
	.center-content .mint-cell-text{font-size: 14px;}
	.center-content .mint-cell-mask{margin-right: 10px;}
	.center-content .icon-wx-announcement{color: #ff9992;}
	.center-content .icon-wx-note{color: #76c0ff;}
	.center-content .icon-wx-disease{color: #8ad650;}
	.center-content .icon-wx-link{color: #ffb67f;}
	.center-content .mint-cell-value .icon-wx-arr-right{color: #aaa;}
</style>
