<template>
	<mt-header fixed isgrey title="林医生公告">
		<mt-button v-link="'/user/notice'" icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<mt-content class-name="leh-bg-grey-body">
		<div class="page-cell notice-content-list">
			<mt-cell v-for="n in 5" title="医生公告写着你有病，要吃药了，不吃药就等伸直腿吧，哇咔咔！" label="2020-12-12" istitle></mt-cell>
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
	.notice-content-list .mint-cell:after,.notice-content-list .mint-cell:before{border: 0;}
	.notice-content-list .mint-cell{margin-bottom: 8px;}
	.notice-content-list .mint-cell-label{text-align: right;color: #363636;}
	.notice-content-list .mint-cell-text {line-height: 22px}
</style>