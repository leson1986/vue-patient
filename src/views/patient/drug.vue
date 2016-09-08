<template>
	<m-header :isindex="true">
		<m-nav path="/patient/sick" label="吸毒"></m-nav>
	</m-header>
	<m-content class-name="leh-bg-white">
		<ul>
			<li class="patientdrug-list">
				<span class="fl">开始时间</span>
				<span class="fr">2016-10-02</span>
			</li>
			<li class="patientdrug-list">
				<span class="fl">吸毒方式</span>
				<span class="fr">注射</span>
			</li>
			<li class="patientdrug-list">
				<span class="fl">共用注射器</span>
				<span class="iconfont patient-take icon-mui-icon-r-gou"></span>
			</li>
			<li class="patientdrug-list">
				<span class="fl">吸毒频率</span>
				<span class="fr">5<em>次/月</em></span>
			</li>
			<li class="patientdrug-list">
				<span class="fl">已戒毒</span>
				<span class="iconfont patient-take icon-mui-icon-r-gou"></span>
			</li>
			<li class="patientdrug-list">
				<span class="fl">备注</span>
				<p>四大皆空辣椒水劳动法吉林省激烈的</p>
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
	.patient-take{float: right;color: #22d1a2;font-size: 1.2rem;}
	.patientdrug-list{padding: 1.04rem 0.8rem;border-bottom: 1px solid #e5e5e5;overflow: hidden;font-size: 1.04rem;}
	.patientdrug-list .fr em{font-size: 0.8rem;color: #919191;margin-left: 0.24rem;}
	.patientdrug-list p{font-size: 1.04rem;float: right;max-width: 65%;}
</style>