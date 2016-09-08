<template>
	<m-header :isindex="true">
		<m-nav path="/user/home" label="记录中心"></m-nav>
	</m-header>
	<m-content class-name="place-min-h">
		<ul class="message-index-ul">
			<li class="message-index-list-hd">
				<div class="message-index-list-half message-index-list-bdr js-center-notes-list" data-url="centerNotesConsultList.html">
					<div class="message-index-list-pos">
						<span class="iconfont icon-mui-icon-r-crecod message-index-ico1"></span>
						<span class="fl" style="line-height: 1.28rem;">
								<p>咨询</p>
								<p>预约记录</p>
							</span>
					</div>
				</div>
				<div class="message-index-list-half">
					<div class="message-index-list-pos js-center-notes-list" data-url="centerNotesMyMsgList.html">
						<span class="iconfont icon-mui-icon-r-mrecod message-index-ico2"></span>
						<span class="fl" style="line-height: 1.28rem;">
								<p>我的</p>
								<p>留言记录</p>
							</span>
					</div>
				</div>
			</li>
			<li class="message-index-list-bd">
				<div class="message-index-list-half message-index-list-bdr js-center-notes-list" data-url="centerNotesMsgList.html">
					<div class="message-index-list-pos">
						<span class="iconfont icon-mui-icon-r-precod message-index-ico3"></span>
						<span class="fl" style="line-height: 1.28rem;">
								<p>患者</p>
								<p>患者留言</p>
							</span>
					</div>
				</div>
				<div class="message-index-list-half">
					<div class="message-index-list-logo-bg leh-icon"></div>
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
	.message-index-ul{height: 100%;position: absolute;top: 0;left: 0;padding-top: 45px;width: 100%;}
	.message-index-list-hd{height: 50%;width: 100%;position: relative;box-sizing: border-box;border-bottom: 1px solid #e5e5e5;}
	.message-index-list-bdr{border-right:1px solid #e5e5e5 ;}
	.message-index-list-bd{height: 50%;width: 100%;position: relative;}
	.message-index-list-half{width: 50%;height: 100%;float: left;text-align: center;position: relative;overflow: hidden;}
	.message-index-list-pos{width: 8.8rem;position: absolute;height: 3.28rem;overflow: hidden;top: 50%;margin-top: -1.64rem;left: 50%;margin-left: -4.4rem;}
	.message-index-ico1,.message-index-ico2,.message-index-ico3{font-size: 2.8rem;line-height:3.28rem;float: left;margin-right: 0.64rem;}
	.message-index-list-pos p:nth-of-type(1){font-size: 0.96rem;color: #919191;margin-top: 0.24rem;}
	.message-index-list-pos p:nth-of-type(2){font-size: 1.12rem;}
	.message-index-ico1{color: #f77a66;}
	.message-index-ico2{color: #45bbfe;}
	.message-index-ico3{color: #f8bb0a;}
	.message-index-list-logo-bg{width: 7.8rem;height: 3.6rem;background-position:0 -15.4rem;position: absolute;top: 50%;left: 50%;margin-top: -1.8rem;margin-left: -3.04rem;}

</style>