<template>
	<mt-header fixed isgrey title="记录中心">
		<mt-button v-link="'/home'" icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<mt-content class-name="leh-bg-grey-body">
		<div class="note-box">
			<ul>
				<li class="note-list" v-link="{path: '/user/noteDetail', replace: true}">
					<p class="note-list-title leh-red-dot">
						<span class="iconfont icon-wx-ask-round"></span> 阿斯顿看见哈克斯都好看教案和开始的骄傲 啥课都会卡死好快的哈萨克觉得好快啊啊黄金时代哈 好多爱上的还看啥看的
					</p>
					<div class="page-cell note-content">
						<a class="mint-cell">
								<span class="mint-cell-mask">
									<div class="note-img">
										<img src="../../assets/img/private.jpg"/>
									</div>
								</span>
							<label class="mint-cell-title">
									<span class="mint-cell-text">
										<span>赵医生</span>丨
										<span class="leh-fs-fourteen">消化内科</span>
										<span class="fr leh-fs-fourteen leh-c-grey">11:20</span>
									</span>
								<span class="mint-cell-label">暂无回复暂无回复暂无回复暂无回复暂无回复暂无回复暂无回复暂无回复</span>
							</label>
							<div class="mint-cell-value">
								<span></span>
							</div>
						</a>
					</div>
				</li>
				<li class="note-list" v-link="{path: '/user/noteDetail', replace: true}">
					<p class="note-list-title">
						<span class="iconfont icon-wx-take-round"></span> 阿斯顿看见哈克斯都好看教案和开始的骄傲 啥课都会卡死好快的哈萨克觉得好快啊啊黄金时代哈 好多爱上的还看啥看的
					</p>
					<div class="page-cell note-content">
						<a class="mint-cell">
								<span class="mint-cell-mask">
									<div class="note-img">
										<img src="../../assets/img/private.jpg"/>
									</div>
								</span>
							<label class="mint-cell-title">
									<span class="mint-cell-text">
										<span>赵医生</span>丨
										<span class="leh-fs-fourteen">消化内科</span>
										<span class="fr leh-fs-fourteen leh-c-grey">前天</span>
									</span>
								<span class="mint-cell-label">暂无回复暂无回复暂无回复暂无回复暂无回复暂无回复暂无回复暂无回复</span>
							</label>
							<div class="mint-cell-value">
								<span></span>
							</div>
						</a>
					</div>
				</li>
			</ul>
		</div>
	</mt-content>
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtButton from '../../components/button.vue'

	export default{
		data () {
			return{
			}
		},
		components: {
			MtContent,
			MtHeader,
			MtButton
		}
	}
</script>

<style>
	.note-list{background-color: #fff; margin-bottom: 8px;}
	.note-list-title{padding: 10px 25px 10px 10px;overflow: hidden;text-overflow:ellipsis; white-space:nowrap;}
	.note-list-title .icon-wx-take-round,
	.note-list-title .icon-wx-ask-round{float: left;margin-right: 10px;}
	.note-list-title .icon-wx-ask-round{color: #f77a66;}
	.note-list-title .icon-wx-take-round{color: #47c688;}
	.note-list-title:after{right: 12px;top: 14px;}
	.note-content .mint-cell:before{border: 0;}
	.note-content .mint-cell-text{display: block;}
	.note-content .mint-cell-label{color: #363636;text-overflow:ellipsis; overflow:hidden; white-space:nowrap}
	.note-img{width: 49px;height: 49px;border-radius: 50%;overflow: hidden;margin-right: 10px;}
	.note-img img{width: auto;height: auto;max-height: 100%;max-width: 100%;}
</style>