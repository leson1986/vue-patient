<template>
	<mt-header fixed :title="selected" class-name="leh-bg-green"></mt-header>
	<mt-content class-name="page-tabbar">
		<div class="page-wrap consult-padding-bottom">
			<mt-tab-container :active.sync="selected">
				<mt-tab-container-item id="在线门诊">
					<div class="mint-tab-container-item">
						<div class="consult-tap-box">
							<mt-tab-item v-link="{path: '/online/photo', replace: true}">
								<span slot="icon">5</span>
								拍照上传
							</mt-tab-item>
							<mt-tab-item v-link="{path: '/online/remind', replace: true}">
								<span slot="icon">5</span>
								用药提醒
							</mt-tab-item>
							<mt-tab-item v-link="{path: '/online/feedback', replace: true}">
								<span slot="icon">5</span>
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
								<a class="mint-cell">
									<label class="mint-cell-title">
										<span>ii</span>
										<span class="mint-cell-text leh-red-dot">待转换</span>
									</label>
									<div class="consult-list-text">
										<span>转换中<span>20</span></span>
										<span class="leh-c-grey-tint">丨</span>
										<span>需处理<span>3</span></span>
									</div>
									<div class="mint-cell-value">
										<i class="mint-cell-allow-right"></i>
									</div>
								</a>
								<a class="mint-cell" v-link="{path: '/online/bill', replace: true}">
									<label class="mint-cell-title">
										<span>ii</span>
										<span class="mint-cell-text leh-red-dot">病历</span>
									</label>
									<div class="consult-list-text">
										<span>昨天转换<span>0</span></span>
									</div>
									<div class="mint-cell-value">
										<i class="mint-cell-allow-right"></i>
									</div>
								</a>
								<a class="mint-cell">
									<label class="mint-cell-title">
										<span>ii</span>
										<span class="mint-cell-text leh-red-dot">检查单</span>
									</label>
									<div class="consult-list-text">
										<span>昨天转换<span>0</span></span>
									</div>
									<div class="mint-cell-value">
										<i class="mint-cell-allow-right"></i>
									</div>
								</a>
							</div>
						</div>
						<div class="leh-null-box"></div>
						<div class="consult-list-box">
							<div class="page-cell consult-list-title">
								<a class="mint-cell">
									<span class="mint-cell-mask"></span>
									<label class="mint-cell-title">
										<span class="mint-cell-text leh-c-green">标题文字</span>
									</label>
									<div class="mint-cell-value">
										<span class="leh-c-red leh-fs-twelve">有新日程更新啦~点击→</span>
										<span>更多</span>
									</div>
									<i class="mint-cell-allow-right"></i>
								</a>
							</div>
							<!--无日程-->
							<div class="consult-list-not-task" style="display: none">
								<div class="breathe-btn">+</div>
								<p>暂无日程添加</p>
							</div>
							<!--有日程-->
							<div class="page-cell consult-list-main">
								<mt-cell v-for="list in daylist" :title="list.title" :value="list.value" :istitle="true" blackfont></mt-cell>
							</div>
						</div>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="我的医生">
					<mt-cell v-for="n in 5" :title="'订单 ' + $index" :istitle="true"></mt-cell>
				</mt-tab-container-item>
				<mt-tab-container-item id="个人中心">
					<mt-cell v-for="n in 7" :title="'发现 ' + $index" :istitle="true"></mt-cell>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
		<mt-tabbar :selected.sync="selected" class-name="consult-tabbar-box">
			<mt-tab-item id="在线门诊">
				<span slot="icon">5</span>
				在线门诊
			</mt-tab-item>
			<mt-tab-item id="我的医生">
				<span slot="icon">5</span>
				我的医生
			</mt-tab-item>
			<mt-tab-item id="个人中心">
				<span slot="icon">5</span>
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
	.consult-tap-box{display: flex;text-align: center;background-color:#fff;padding: 10px 0;}
	.consult-tap-box .mint-tab-item-icon{width: 33px;height: 33px;color:#fff;border-radius: 50%;overflow: hidden;line-height: 33px;}
	.consult-tap-box .mint-tab-item-label{font-size: 14px;}
	.consult-list-title .mint-cell:before,.consult-list-title .mint-cell:after{border: 0;}
	.consult-list-main .mint-cell{font-size: 14px;}
	.consult-list-main .mint-cell:after,.consult-list-main .mint-cell:before{border-color: #e5e5e5;}
	.consult-list-main .mint-cell:nth-last-of-type(1):before{border: 0;}
	.consult-list-text{flex: 2;}
	.consult-list-text span span{margin-left: 12px;}
	.consult-list-not-task{height: 141px;background-color: #fff;border-top: 1px solid #e5e5e5;}
	.consult-list-not-task p{text-align: center;font-size: 12px;color: #363636;}
	.consult-padding-bottom{padding-bottom: 55px;}

</style>
