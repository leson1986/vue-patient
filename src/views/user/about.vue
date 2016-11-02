<template>
	<mt-header fixed isgrey title="关于随访家园">
		<mt-button v-link="'/home'" icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<mt-content class-name="leh-bg-grey-body">
		<div class="about-img">
			<img src="../../assets/img/login_quick.png" />
			<p v-text="version"></p>
		</div>
		<div class="page-cell about-list">
			<mt-cell title="注册条款" icons="arr-right" istitle is-icon v-link="{path: '/user/terms', replace: true}"></mt-cell>
			<mt-cell title="随访家园介绍" icons="arr-right" istitle is-icon v-link="{path: '/user/profile', replace: true}"></mt-cell>
		</div>
	</mt-content>
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtButton from '../../components/button.vue'
	import MtCell from '../../components/cell.vue'

	export default{
	  data () {
	    return{
	      version:'v1.0'
	    }
	  },
		components: {
			MtContent,
			MtHeader,
			MtButton,
			MtCell
		}
	}
</script>

<style>
	.about-img{text-align: center;padding: 30px 0;}
	.about-img img{width: 58px;height: 58px;}
	.about-img p{font-size: 16px;color: #919191;}
	.about-list .mint-cell:after,
	.about-list .mint-cell:nth-last-of-type(1):before{border: 0;}
	.about-list .mint-cell:before{left: 10px;}
	.about-list .mint-cell-text{font-size: 14px;}
</style>