<template>
	<m-header :isindex="true">
		<m-nav path="/user/accountAdd" label="分配患者"></m-nav>
	</m-header>
	<m-content class-name="leh-bg-white">
		<div class="account-add-finish-title-box">
			<div class="account-add-finish-title mui-icon">
				<input id="search" type="text" placeholder="搜索" class="account-add-finish-title-ipt">
			</div>
		</div>
		<div class="qrcode-rubbishbox"></div>
		<ul>
			<li class="account-add-finish-list js-account-add-finish-list">
				<div class="account-add-finish-tip js-account-add-finish-tip">
					<span class="iconfont account-add-finish-ico js-account-add-finish-ico icon-mui-icon-r-btarr"></span>
					<span class="fl">乙肝</span>
				</div>
				<div class="account-add-finish-main mui-checkbox js-account-add-finish-main">
					<ul>
						<li class="account-add-finish-main-list">
							<label for="">
								<span class="fl">张三三</span>
								<input type="checkbox">
							</label>
						</li>
						<li class="account-add-finish-main-list">
							<label for="">
								<span class="fl">张三三</span>
								<input type="checkbox">
							</label>
						</li>
						<li class="account-add-finish-main-list">
							<label for="">
								<span class="fl">张三三</span>
								<input type="checkbox">
							</label>
						</li>
					</ul>
				</div>
			</li>
			<li class="account-add-finish-list js-account-add-finish-list">
				<div class="account-add-finish-tip js-account-add-finish-tip">
					<span class="iconfont icon-mui-icon-r-rgarr account-add-finish-ico js-account-add-finish-ico"></span>
					<span class="fl">丙肝</span>
				</div>
				<div class="account-add-finish-main mui-checkbox account-add-finish-disnone js-account-add-finish-main">
					<ul>
						<li class="account-add-finish-main-list">
							<label for="">
								<span class="fl">张三三</span>
								<input type="checkbox">
							</label>
						</li>
						<li class="account-add-finish-main-list">
							<label for="">
								<span class="fl">张三三</span>
								<input type="checkbox">
							</label>
						</li>
						<li class="account-add-finish-main-list">
							<label for="">
								<span class="fl">张三三</span>
								<input type="checkbox">
							</label>
						</li>
					</ul>
				</div>
			</li>
		</ul>
	</m-content>
	<m-footer-button>完成</m-footer-button>
</template>
<script>
	import MHeader from '../../components/mHeadBar'
	import MNav from '../../components/mNav'
	import MContent from '../../components/mContent'
	import MFooterButton from '../../components/mFooterButton'

	export default{
		data () {
			return{
			}
		},
		events: {
			'footer-button-event' () {
				alert('完成')
			}
		},
		components: {
			MHeader,
			MNav,
			MContent,
			MFooterButton
		}
	}
</script>

<style>
	.account-add-finish-title-box{padding: 0 0.8rem 0.8rem;}
	.account-add-finish-title{padding:0.8rem;border-bottom: 1px solid #e5e5e5;position: relative;width:100% !important;}
	.account-add-finish-title:after{content: '\e466';position: absolute;left: 0;top: 1.08rem;font-size: 1.28rem;color: #aaa;}
	.account-add-finish-title-ipt{line-height:1.84rem !important;height:1.84rem !important;font-size:0.96rem;border: 0 !important;padding:0 0 0 1.04rem !important;margin-bottom: 0 !important;}
	.account-add-finish-ico{font-size: 0.8rem;float:left;line-height: 3.4rem;margin-right: 0.4rem;color: #919191;}
	.account-add-finish-tip{height: 3.4rem;line-height: 3.4rem;padding: 0 0.8rem;overflow: hidden;border-bottom: 1px solid #e5e5e5;}
	.account-add-finish-tip span.fl{font-size: 1.12rem;}
	.account-add-finish-main{padding-left: 1.8rem;border-bottom: 1px solid #e5e5e5;}
	.account-add-finish-main input{position: static !important;float: right;line-height: 3.6rem;}
	.account-add-finish-main-list{overflow: hidden;height: 3.6rem;line-height: 3.6rem;border-bottom: 1px solid #e5e5e5;padding-right: 0.8rem;}
	.account-add-finish-main-list:nth-last-of-type(1){border-bottom: 0;}
	.account-add-finish-disnone{display: none;}
	.account-add-finish-main-list label{padding-right: 0;width: 100%;}
</style>