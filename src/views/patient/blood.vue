<template>
	<m-header :isindex="true">
		<m-nav path="/patient/sick" label="血制品"></m-nav>
	</m-header>
	<m-content class-name="leh-bg-white">
		<div class="blood-box">
			<ul>
				<li class="patientblood-list mui-table-view-cell">
					<div class="patientblood-list-up">
						<span class="fl">白蛋白<em>100ml</em></span>
						<span class="fr">2016-3-15</span>
					</div>
					<p>暂无备注</p>
				</li>
				<li class="patientblood-list mui-table-view-cell">
					<div class="patientblood-list-up">
						<span class="fl">白蛋白<em>100ml</em></span>
						<span class="fr">2016-3-15</span>
					</div>
					<p>暂无备注</p>
				</li>
				<li class="patientblood-list mui-table-view-cell">
					<div class="patientblood-list-up">
						<span class="fl">白蛋白<em>100ml</em></span>
						<span class="fr">2016-3-15</span>
					</div>
					<p>暂无备注</p>
				</li>
				<li class="patientblood-list mui-table-view-cell">
					<div class="patientblood-list-up">
						<span class="fl">白蛋白<em>100ml</em></span>
						<span class="fr">2016-3-15</span>
					</div>
					<p>暂无备注</p>
				</li>
				<li class="patientblood-list mui-table-view-cell">
					<div class="patientblood-list-up">
						<span class="fl">白蛋白<em>100ml</em></span>
						<span class="fr">2016-3-15</span>
					</div>
					<p>暂无备注</p>
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
	.patientblood-list{padding: 0.96rem 0.8rem;background-color: #fff;overflow: hidden;}
	.patientblood-list:after{left: 0.8rem;}
	.patientblood-list-up{overflow: hidden;padding-bottom: 0.8rem;}
	.patientblood-list-up .fl{font-size: 1.2rem;}
	.patientblood-list-up .fl em{font-size: 0.8rem;color: #919191;margin-left: 0.64rem;}
	.patientblood-list-up .fr{font-size: 0.88rem;line-height: 1.2rem;}
	.patientblood-list p{font-size: 0.96rem;color: #363636;width: 100%;}
</style>