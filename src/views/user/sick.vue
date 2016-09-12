<template>
	<mt-header fixed isgrey title="疾病相关">
		<mt-button v-link="'/home'" icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<mt-content>
		<div class="page-cell disease-list">
			<mt-cell title="家族病史" icon="family" icons="arr-right" istitle is-icon></mt-cell>
			<mt-cell title="生活行为习惯" icon="flower" icons="arr-right" istitle is-icon></mt-cell>
			<mt-cell title="高危因素" icon="snak" icons="arr-right" istitle is-icon></mt-cell>
			<mt-cell title="血制品" icon="ddi" icons="arr-right" istitle is-icon></mt-cell>
			<mt-cell title="吸毒" icon="durg" icons="arr-right" istitle is-icon></mt-cell>
			<mt-cell title="肝穿情况" icon="gan" icons="arr-right" istitle is-icon></mt-cell>
		</div>
	</mt-content>
</template>
<script>
	import MtHeader from '../../components/header.vue'
	import MtContent from '../../components/content.vue'
	import MtButton from '../../components/button.vue'
	import MtCell from '../../components/cell.vue'

	export default{
	  data () {
	    return{
	      msg:'hello vue'
	    }
	  },
		components: {
			MtHeader,
			MtContent,
			MtButton,
			MtCell
		}
	}
</script>

<style>
	.disease-list .mint-cell:after{border: 0;}
	.disease-list .mint-cell:before{left: 10px;}
	.disease-list .icon-wx-family,
	.disease-list .icon-wx-ddi{font-size: 18px;}
	.disease-list .icon-wx-family{color: #1dadfe;}
	.disease-list .icon-wx-flower{color: #f9c42b;}
	.disease-list .icon-wx-snak{color: #f77a66;}
	.disease-list .icon-wx-ddi{color: #ea5555;}
	.disease-list .icon-wx-durg{color: #22d1a2;}
	.disease-list .icon-wx-gan{color: #b2675b;}
</style>