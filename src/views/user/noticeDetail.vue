<template>
	<mt-header fixed isgrey title="林医生公告">
		<mt-button v-link="'/user/notice'" icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<mt-content class-name="leh-bg-grey-body">
		<div class="page-cell notice-content-list">
			<mt-cell v-for="n in 5" title="标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题" label="描述信息" istitle></mt-cell>
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
</style>