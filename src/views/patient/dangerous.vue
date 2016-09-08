<template>
	<m-header :isindex="true">
		<m-nav path="/patient/sick" label="高危因素"></m-nav>
	</m-header>
	<m-content class-name="leh-bg-white">
		<ul>
			<li class="patientdangerous-list">
				<span class="fl">不洁行为</span>
				<span class="iconfont patient-take"></span>
			</li>
			<li class="patientdangerous-list">
				<span class="fl">私人诊所打针</span>
				<span class="iconfont patient-take"></span>
			</li>
			<li class="patientdangerous-list">
				<span class="fl">输血</span>
				<span class="iconfont patient-take icon-mui-icon-r-gou"></span>
			</li>
			<li class="patientdangerous-list">
				<span class="fl">美容手术</span>
				<span class="iconfont patient-take"></span>
			</li>
			<li class="patientdangerous-list">
				<span class="fl">牙科手术</span>
				<span class="iconfont patient-take"></span>
			</li>
			<li class="patientdangerous-list">
				<span class="fl">手术</span>
				<span class="iconfont patient-take"></span>
			</li>
			<li class="patientdangerous-list">
				<span class="fl">扎耳孔环</span>
				<span class="iconfont patient-take"></span>
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
	.patientdangerous-list{padding:0 0.8rem;height: 3.8rem;line-height: 3.8rem;border-bottom: 1px solid #e5e5e5;overflow: hidden;}
	.patientdangerous-list:nth-last-of-type(1){border-bottom: 0;}
	.patientdangerous-list .fl{font-size: 1.04rem;}
	.patient-take{float: right;color: #22d1a2;font-size: 1.2rem;}
</style>