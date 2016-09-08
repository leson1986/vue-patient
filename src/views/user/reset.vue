<template>
	<m-header :isindex="true">
		<m-nav path="/user/home" label="设置"></m-nav>
	</m-header>
	<m-content>
		<div class="set-list-box">
			<ul>
				<li class="mui-table-view-cell" data-url="centerSetModifyPassword.html">
					<span class="fl">修改密码</span>
					<span class="mui-icon mui-icon-arrowright set-list-arr-ico"></span>
				</li>
				<li class="mui-table-view-cell" id="js-set-clearB">
					<span class="fl">清除缓存</span>
					<span class="mui-icon mui-icon-arrowright set-list-arr-ico"></span>
				</li>
			</ul>
		</div>
		<div class="set-list-box">
			<ul>
				<li class="mui-table-view-cell" data-url="centerSetHelpIndex.html">
					<span class="fl">帮助反馈</span>
					<span class="mui-icon mui-icon-arrowright set-list-arr-ico"></span>
				</li>
				<li class="mui-table-view-cell" data-url="centerSetAboutApp.html">
					<span class="fl">关于随访家园</span>
					<span class="mui-icon mui-icon-arrowright set-list-arr-ico"></span>
				</li>
			</ul>
		</div>

		<div class="set-out-app-box">
			<div class="set-out-app-btn">退出登录</div>
		</div>

		<!--弹框-->
		<div class="set-black-screen" style="display: none;" id="js-set-clearA">
			<div class="set-endmessang-box" id="js-set-clearBox">
				<p>确定清空随访家园本地缓存数据？（包含账户数据、图片和过期的语音缓存）</p>
				<div class="set-endmessang-endbtn" id="js-set-endBtn">取消</div>
				<div class="set-endmessang-goonbtn" id="js-set-goonBtn">确认</div>
			</div>
			<div class="set-clearbox" id="js-set-clearIng" style="display: none;">缓存清理中...</div>
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
	.set-list-box{margin-bottom: 0.64rem;background-color: #fff;}
	.set-list-box .mui-table-view-cell{padding: 0 0.8rem;height: 3.2rem;line-height: 3.2rem;overflow: hidden;}
	.set-list-box span.fl{font-size: 1.04rem;}
	.set-list-box .mui-table-view-cell:after{left: 0.8rem;}
	.set-list-arr-ico{float: right;line-height: 3.2rem;font-size: 1.4rem;color: #aaa;}
	.set-list-box .mui-table-view-cell span.fr{font-size: 0.96rem;color: #919191;margin-right: 0.64rem;}
	.set-black-screen{position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0,0,0,0.3);z-index: 9999;}
	.set-endmessang-box{padding: 2.08rem 1.88rem;background-color: #fff;position: fixed !important;border-radius:5px;top: 30% !important;left: 50% !important;width: 70%;margin-left: -35%;overflow: hidden;}
	.set-endmessang-box p{font-size: 0.88rem;color: #363636;margin-bottom: 1.8rem;}
	.set-endmessang-endbtn{height: 1.6rem;line-height: 1.6rem;float: left;width: 40%;text-align: center;background-color: #b4b4b4;font-size: 0.8rem;color: #fff;border-radius: 5px;}
	.set-endmessang-goonbtn{height: 1.6rem;line-height: 1.6rem;float: right;width: 40%;text-align: center;background-color: #1dadfe;font-size: 0.8rem;color: #fff;border-radius: 5px;}
	.set-clearbox{position: fixed;top: 40%;left: 50%;width: 8.4rem;margin-left: -4.2rem;background-color: #fff;height: 4rem;line-height: 4rem;text-align: center;border-radius: 5px;font-size: 1.04rem;}
	.set-out-app-box{padding: 2.4rem 0.8rem;}
	.set-out-app-btn{height: 2.4rem;line-height: 2.4rem;font-size: 0.96rem;text-align: center;background-color: #1dadfe;color: #fff;border-radius: 5px;}

</style>