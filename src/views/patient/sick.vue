<template>
	<m-header :isindex="true">
		<m-nav path="/patient/details" label="其他疾病相关"></m-nav>
	</m-header>
	<m-content class-name="leh-bg-white">
		<ul class="leh-other-sick-box">
			<li class="personalother-list mui-table-view-cell" v-link="{path: '/patient/dangerous', replace: true}">
				<span class="iconfont icon-mui-icon-r-snak"></span>
				<span>高危因素</span>
				<span class="mui-icon mui-icon-forward"></span>
			</li>
			<li class="personalother-list mui-table-view-cell" v-link="{path: '/patient/blood', replace: true}">
				<span class="iconfont icon-mui-icon-r-ddi"></span>
				<span>血制品</span>
				<span class="mui-icon mui-icon-forward"></span>
			</li>
			<li class="personalother-list mui-table-view-cell" v-link="{path: '/patient/drug', replace: true}">
				<span class="iconfont icon-mui-icon-r-dping"></span>
				<span>吸毒</span>
				<span class="mui-icon mui-icon-forward"></span>
			</li>
			<li class="personalother-list mui-table-view-cell" v-link="{path: '/patient/liver', replace: true}">
				<span class="iconfont icon-mui-icon-r-gan"></span>
				<span>肝穿情况</span>
				<span class="mui-icon mui-icon-forward"></span>
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
	.personalother-list{padding: 0 0.8rem;height: 3.8rem;line-height: 3.8rem;overflow: hidden;}
	.personalother-list:after{left: 0.8rem;}
	.personalother-list .icon-mui-icon-r-snak{float: left;font-size: 1.4rem;color: #f7826f;margin-right: 0.64rem;}
	.personalother-list .icon-mui-icon-r-ddi{float: left;font-size: 1.4rem;color: #ea5555;margin-right: 0.64rem;}
	.personalother-list .icon-mui-icon-r-dping{float: left;font-size: 1.4rem;color: #22d1a2;margin-right: 0.64rem;}
	.personalother-list .icon-mui-icon-r-gan{float: left;font-size: 1.4rem;color: #b2675b;margin-right: 0.64rem;}
	.personalother-list span:nth-of-type(2){float: left;font-size: 1.04rem;}
	.personalother-list .mui-icon-forward{font-size: 1.4rem;float: right;line-height: 3.8rem;color: #aaa;}
	.leh-other-sick-box .mui-table-view-cell:after {height: 1px;}
</style>