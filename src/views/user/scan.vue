<template>
	<m-header :isindex="true">
		<m-nav path="/user/home" label="我的二维码"></m-nav>
	</m-header>
	<m-content class-name="qrcode-whitescreen">
		<div class="qrcode-titlebox">
			<div class="qrcode-title-imgbox">
				<img src="../../assets/img/littel-ico.png">
			</div>
			<div class="qrcode-title-txtbox">
				<p>刘医生</p>
				<p class="leh-text-ellipsis">
					<span>主任医师</span>
					<span>南方医院</span>
				</p>
			</div>
		</div>
		<div class="qrcode-rubbishbox"></div>
		<div class="qrcode-qrcodebox">
			<div class="qrcode-imgbox">
				<img src="../../assets/img/littel-ico.png" data-preview-src="" data-preview-group="1">
			</div>
			<p>随访家园</p>
			<p>有问题可致电：400-XXXX-XXXX</p>
		</div>
		<div class="qrcode-ftbox">
			<div class="qrcode-rubbishbox"></div>
			<div class="qrcode-sharebox">
				<span>分享到：</span>
				<div class="leh-icon qrcode-share-ico1"></div>
				<div class="leh-icon qrcode-share-ico2"></div>
				<div class="leh-icon qrcode-share-ico3"></div>
				<div class="leh-icon qrcode-share-ico4"></div>
			</div>
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
	body,html{height: 100%;}
	.qrcode-whitescreen{min-height: 100%;background-color: #fff;}
	.qrcode-titlebox{padding: 0.8rem;overflow: hidden;}
	.qrcode-title-imgbox{width: 3.4rem;height: 3.4rem;border-radius: 50%;overflow: hidden;float: left;margin-right: 0.8rem;}
	.qrcode-title-txtbox p{line-height: 1.6rem;}
	.qrcode-title-txtbox p:nth-of-type(1){font-size: 1.12rem;margin-top: 0.24rem;}
	.qrcode-title-txtbox p:nth-of-type(2){font-size: 0.96rem;color: #919191;}
	.qrcode-rubbishbox{height: 0.64rem;background-color: #f0f0f0;}
	.qrcode-qrcodebox{padding: 3.04rem 0 1.04rem;}
	.qrcode-imgbox{width: 11.2rem;height: 11.2rem;margin: 0 auto;border: 1px solid #e5e5e5;padding: 0.6rem;overflow: hidden;}
	.qrcode-imgbox img{width: 100%;}
	.qrcode-qrcodebox p{text-align: center;font-size: 0.96rem;}
	.qrcode-qrcodebox p:nth-of-type(1){font-size: 1.12rem;color: #1faa2b;margin: 2.2rem 0 1.04rem;}
	.qrcode-ftbox{position: fixed;bottom: 0;width: 100%; background-color: #fff;}
	.qrcode-sharebox{padding: 1.52rem 0.8rem;overflow: hidden;}
	.qrcode-sharebox span{float: left;font-size: 1.04rem;}
	.qrcode-share-ico1,.qrcode-share-ico2,.qrcode-share-ico3,.qrcode-share-ico4{width: 1.8rem;height: 1.6rem;float: left;margin-left: 1.04rem;}
	.qrcode-share-ico1{background-position:0 -1.92rem;}
	.qrcode-share-ico2{background-position:-2.28rem -1.92rem;}
	.qrcode-share-ico3{background-position:-4.56rem -1.92rem;}
	.qrcode-share-ico4{background-position:-6.72rem -1.92rem;}
</style>