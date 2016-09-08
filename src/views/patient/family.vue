<template>
	<m-header :isindex="true">
		<m-nav path="/patient/details" label="家族病史"></m-nav>
	</m-header>
	<m-content>
		<ul>
			<li class="personalfamily-list">
				<span class="fl">父亲</span>
				<span class="fr">乙肝大三阳</span>
				<div class="clearfix"></div>
				<p>就萨拉看见打死距啦数据库里多少级了肯德基爱丽丝</p>
			</li>
			<li class="personalfamily-list">
				<span class="fl">母亲</span>
				<span class="fr">乙肝大三阳</span>
				<div class="clearfix"></div>
				<p>暂无备注</p>
			</li>
			<li class="personalfamily-list">
				<span class="fl">外公</span>
				<span class="fr">乙肝大三阳</span>
				<div class="clearfix"></div>
				<p>就萨拉看见打死距啦数据库里多少级了肯德基爱丽丝</p>
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
	.personalfamily-list{padding: 0.96rem 0.8rem;background-color: #fff;overflow: hidden;margin-bottom: 0.56rem;}
	.personalfamily-list .fl{font-size: 1.12rem;}
	.personalfamily-list .fr{font-size: 1.04rem;}
	.personalfamily-list p{margin-top: 0.64rem;font-size: 0.96rem;color: #919191;}
</style>