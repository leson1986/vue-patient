<template>
	<m-header :isindex="true">
		<m-nav path="/patient/details" label="手写病历"></m-nav>
	</m-header>
	<m-content class-name="leh-bg-white">
		<div class="sick-whitedata">
			更新日期：2016年3月12日
		</div>
		<ul class="sick-whitelistbox">
			<li class="sick-whitelist">
				<div class="sick-whitelistimgbox">
					<img src="../../assets/img/littel-ico.png" data-preview-src="" data-preview-group="1"/>
				</div>
				<span>20160605</span>
			</li>
			<li class="sick-whitelist">
				<div class="sick-whitelistimgbox">
					<img src="../../assets/img/littel-ico.png" data-preview-src="" data-preview-group="1"/>
				</div>
				<span>20160605</span>
			</li>
			<li class="sick-whitelist">
				<div class="sick-whitelistimgbox">
					<img src="../../assets/img/littel-ico.png" data-preview-src="" data-preview-group="1"/>
				</div>
				<span>20160605</span>
			</li>
			<li class="sick-whitelist">
				<div class="sick-whitelistimgbox">
					<img src="../../assets/img/littel-ico.png" data-preview-src="" data-preview-group="1"/>
				</div>
				<span>20160605</span>
			</li>
			<li class="sick-whitelist">
				<div class="sick-whitelistimgbox">
					<img src="../../assets/img/littel-ico.png" data-preview-src="" data-preview-group="1"/>
				</div>
				<span>20160605</span>
			</li>
			<li class="sick-whitelist">
				<div class="sick-whitelistimgbox">
					<img src="../../assets/img/littel-ico.png" data-preview-src="" data-preview-group="1"/>
				</div>
				<span>20160605</span>
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
	.sick-whitedata{height: 3.8rem;line-height: 3.8rem;background-color: #f6fbfe;padding: 0 0.8rem;font-size: 1.04rem;}
	.sick-whitelistbox{padding-top: 0.96rem;overflow: hidden;}
	.sick-whitelist{width: 33.33%;float: left;overflow: hidden;text-align: center;font-size: 0.88rem;margin-bottom: 1.68rem;}
	.sick-whitelistimgbox{width: 6.32rem;height: 7.92rem;background-color: #ededed;margin: 0 auto 0.72rem;overflow: hidden;}
	.sick-whitelistimgbox img{width: 100%;}
</style>