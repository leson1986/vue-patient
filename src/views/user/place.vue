<template>
	<m-header :isindex="true">
		<m-nav path="/user/home" label="执业地点"></m-nav>
	</m-header>
	<m-content class-name="place-min-h">
		<p class="place-off" style="display: none;">暂无执业地点</p>
		<div class="place-on">
			<ul id="OA_task_1">
				<li class="mui-table-view-cell">
					<div class="mui-slider-right mui-disabled">
						<a class="mui-btn mui-btn-red">删除</a>
					</div>
					<div class="mui-slider-handle">
						<div class="place-on-list-hd">
							<span class="iconfont icon-mui-icon-r-capt place-on-list-hd-ico"></span>
							<p class="leh-text-ellipsis">中山大学附属第一医院</p>
						</div>
						<div class="place-on-list-bd">
							<span class="iconfont icon-mui-icon-r-dpos place-on-list-bd-ico"></span>
							<p class="leh-text-ellipsis">广东省广州市越秀区100号</p>
						</div>
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
	.place-min-h{min-height: 100%;}
	.place-off{height: 100%;background-color: #fff;position: absolute;top:0;padding-top: 60%;width: 100%;text-align: center;font-size: 1.04rem;}

	.place-on .mui-table-view-cell{padding: 1.04rem 0.8rem;background-color: #fff;}
	.place-on-list-hd,.place-on-list-bd{overflow: hidden;}
	.place-on-list-hd-ico{font-size: 1.2rem;float: left;margin-right: 0.4rem;color: #fa9696;}
	.place-on-list-hd p,.place-on-list-bd p{line-height: 1.6rem;font-size: 1.04rem;}
	.place-on-list-bd-ico{font-size: 1.2rem;float: left;margin-right: 0.4rem;color: #22d1a2;}
	.place-on-list-hd{margin-bottom: 0.96rem;}

	.place-add-box{padding: 0 0.8rem;overflow: hidden;}
	.place-add-list{overflow: hidden;margin-top: 2.4rem;}
	.place-add-list span.fl{font-size: 1.04rem;width: 25%;line-height: 1.92rem;}
	.place-add-bank{float: right;width: 75%;overflow: hidden;border-bottom: 1px solid #e5e5e5;}
	.place-add-bank-select{float: left;width: 85%;font-size: 0.96rem;padding: 0.24rem 0;}
	.place-add-bank-select-ico{float: right;font-size: 0.8rem;}
	.place-add-list input{width:75%;float: right;font-size: 0.96rem;height: auto;padding: 0.24rem;border: 0;border-bottom: 1px solid #e5e5e5;border-radius: 0;margin: 0;}
	.place-keep-box{position: fixed !important;top: 30% !important;left: 50% !important;width: 75%;padding: 1.4rem 1.2rem;margin-left: -37.5%;background-color: #fff;overflow: hidden;font-size: 1.04rem;}
	.place-add-list em{margin-left: 2.08rem;}
</style>