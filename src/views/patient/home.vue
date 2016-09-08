<template>
	<m-header :isindex="true">
		<m-nav path="" label="我的病人"></m-nav>
	</m-header>
	<m-content>
		<div class="patient-title-box">
			<div class="mui-input-row mui-search">
				<input type="search" class="mui-input-clear" placeholder="名字/病种/地方">
			</div>
			<div class="patient-title-box-list">
				<div class="patient-label-box" v-link="{ path: '/patient/labelList', replace: true}">
					<div class="patient-label">
						<span class="iconfont icon-mui-icon-r-targettype patient-labelico"></span>
					</div>
					<span>标签分类</span>
				</div>
			</div>
		</div>

		<div class="patient-main">
			<ul class="mui-table-view patient-mainfirul">
				<li class="mui-table-view-cell mui-collapse paitent-main-lists js-paitent-main-lists">
					<a class="mui-navigate-right js-paitent-main-tap" href="#">
						<span class="iconfont icon-mui-icon-r-rgarr paitent-main-lists-ico js-paitent-main-lists-ico"></span>
						乙肝
						<span class="fr">10人</span>
					</a>
					<div class="mui-collapse-content js-mui-collapse-content">
						<ul class="mui-table-view paitentul">
							<li class="mui-table-view-cell paitent-main-list">
								<div class="mui-slider-right mui-disabled">
									<a class="mui-btn mui-btn-blue leh-bg-blue">标签</a>
								</div>
								<div class="mui-slider-handle mui-table" v-link="{ path: '/patient/details', query:{name: '张三三'}, replace: true}">
									<div class="mui-table-cell">
										<div class="paitent-main-list-img">
											<img src="../../assets/img/littel-ico.png" />
										</div>
										<div class="paitent-main-list-txt">
											<p>
												<span class="paitent-main-list-txt-hd1">张三三</span>
												<span class="paitent-main-list-txt-hd2">男</span>
												<span class="iconfont icon-mui-icon-r-scheme paitent-main-suifangico"></span>
												<span class="iconfont icon-mui-icon-r-target paitent-main-labelico"></span>
											</p>
										</div>
									</div>
								</div>
							</li>
							<li class="mui-table-view-cell paitent-main-list">
								<div class="mui-slider-right mui-disabled">
									<a class="mui-btn mui-btn-blue leh-bg-blue">标签</a>
								</div>
								<div class="mui-slider-handle mui-table" v-link="{ path: '/patient/details', query:{name: '李四四'}, replace: true}">
									<div class="mui-table-cell">
										<div class="paitent-main-list-img">
											<img src="../../assets/img/littel-ico.png" />
										</div>
										<div class="paitent-main-list-txt">
											<p>
												<span class="paitent-main-list-txt-hd1">李四四</span>
												<span class="paitent-main-list-txt-hd2">男</span>
												<span class="iconfont icon-mui-icon-r-scheme paitent-main-suifangico"></span>
											</p>
										</div>
									</div>
								</div>
							</li>
							<li class="mui-table-view-cell paitent-main-list">
								<div class="mui-slider-right mui-disabled">
									<a class="mui-btn mui-btn-blue leh-bg-blue">标签</a>
								</div>
								<div class="mui-slider-handle mui-table" v-link="{ path: '/patient/details', query:{name: '王五五'}, replace: true}">
									<div class="mui-table-cell">
										<div class="paitent-main-list-img">
											<img src="../../assets/img/littel-ico.png" />
										</div>
										<div class="paitent-main-list-txt">
											<p>
												<span class="paitent-main-list-txt-hd1">王五五</span>
												<span class="paitent-main-list-txt-hd2">男</span>
												<span class="iconfont icon-mui-icon-r-target paitent-main-labelico"></span>
											</p>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</m-content>
	<m-foot-bar></m-foot-bar>
</template>

<script>
	import MHeader from '../../components/mHeadBar'
	import MNav from '../../components/mNav'
	import MContent from '../../components/mContent'
	import MFootBar from '../../components/mFootBar'

	export default {
		route: {
			data () {

			}
		},
		data () {
			return {
			}
		},
		computed: {
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
	.patient-title-box {
		background-color: #fff;
		padding: 0.88rem 0 0.8rem;
		overflow: hidden;
	}

	.patient-title-box-list {
		padding: 0.88rem 1.6rem 0;
	}

	.patient-label-box {
		font-size: 0.96rem;
		text-align: center;
		float: left;
	}

	.patient-label {
		height: 3.6rem;
		width: 3.6rem;
		text-align: center;
		line-height: 3.6rem;
		background-color: #22d1a2;
		border-radius: 50%;
		margin-bottom: 0.56rem;
	}

	.patient-labelico {
		color: #fff;
		font-size: 1.64rem;
	}

	.patient-title-box .mui-search {
		width: 60%;
		margin: 0 auto;
	}
	.patient-title-box .mui-search .mui-input-clear {
		font-size: 0.98rem;
		padding-right: 1.8rem;
	}
	.patient-title-box .mui-search .mui-placeholder {
		font-size: 1.02rem;
	}

	.paitent-main-list {
		overflow: hidden;
	}

	.paitent-main-list:nth-of-type(1) {
		border-top: 0;
	}

	.paitent-main-list-img {
		width: 2.4rem;
		height: 2.4rem;
		border-radius: 50%;
		overflow: hidden;
		float: left;
		margin-top: 0.54rem;
	}

	.paitent-main-list-img img {
		width: 100%;
	}

	.paitent-main-list-txt {
		border-bottom: 1px solid #e5e5e5;
		padding: 0 0 0 3.2rem;
	}

	.paitent-main-list:nth-last-child(1) .paitent-main-list-txt {
		border-bottom: 0;
	}

	.paitent-main-list-txt p {
		line-height: 3.4rem;
		overflow: hidden;
		padding-right: 0.8rem;
	}

	.paitent-main-list-txt-hd1 {
		font-size: 1.04rem;
		color: #363636;
	}

	.paitent-main-list-txt-hd2 {
		font-size: 0.88rem;
		margin-left: 0.12rem;
		color: #919191;
	}

	.paitent-main-labelico {
		float: right;
		padding-right: 0.72rem;
		font-size: 1.4rem;
		color: #919191;
	}

	.paitent-main-suifangico {
		float: right;
		margin-right: 0.72rem;
		font-size: 1.4rem;
		color: #919191;
	}

	.paitent-main-list-txt-bd1 {
		font-size: 18px;
		color: #737373;
	}

	.paitent-main-list-txt-bd2 {
		font-size: 18px;
		color: #737373;
		margin-left: 25px;
	}
	.paitent-main-lists {
		border-top: 1px solid #e5e5e5;
		overflow: hidden;
	}
	.paitent-main-lists-ico{
		font-size: 0.8rem;
		float:left;
		line-height: 2.4rem;
		margin-right: 0.4rem;
		color: #919191;
	}
	.paitent-main-lists:nth-of-type(1) {
		border-top: 0;
	}
	.paitent-main-lists .fr {
		font-size: 0.96rem;
		color: #aaa;
	}
	.mui-table-view-cell.mui-collapse>.mui-navigate-right:after,
	.mui-table-view-cell.mui-collapse>.mui-push-right:after {
		display: none;
	}
	.patient-main {
		margin: 15px 0;
	}
	.patient-mainfirul {
		overflow: hidden;
		background-color: transparent;
	}
	.mui-table-view-cell.mui-collapse .mui-collapse-content {
		padding: 0 15px 0 0;
		background: #F8F8F8;
	}
	.mui-table-view-cell.mui-collapse {
		background-color: #fff;
	}
	.mui-table-view-cell.mui-collapse.mui-active {
		background-color: #fff;
		margin-top: 0 !important;
	}
	input[type=search] {
		background-color: #f0f0f0;
	}
	.mui-table-view-cell.mui-collapse .mui-table-view {
		margin-bottom: 0;
		margin-top: 0;
	}
	.patient-title-box .mui-search.mui-active:before {
		color: #919191;
		font-size: 1.4rem;
	}
	.mui-table-view-cell.mui-collapse .mui-table-view .mui-table-view-cell:after {
		height: 0;
	}
	.paitentul {
		margin-top: 0;
	}
	.paitentul .mui-table-view-cell {
		padding-top: 0;
		padding-bottom: 0;
		padding-right: 0;
	}

	.label {
		text-align: center;
	}
	.mui-navigate-right {
		font-size: 1.12rem;
		line-height: 2.4rem;
	}
	.mui-table-view:after {
		height: 0 !important;
	}
	.mui-navigate-right:after,
	.mui-push-left:after,
	.mui-push-right:after {
		color: #919191;
		font-size: 0.96rem;
	}
	.mui-search .mui-placeholder .mui-icon {
		color: #919191;
	}
	.paitentul .mui-table-view-cell>.mui-slider-left>.mui-btn{
		padding: 0 1.2rem;
	}

</style>
