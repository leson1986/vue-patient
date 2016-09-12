<template>
	<mt-header fixed isgrey title="医生公告">
		<mt-button v-link="'/home'" icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<mt-content>
		<div class="page-cell disease-list">
			<div class="page-cell notice-list">

				<mt-cell v-for="n in 4" title="林医生公告更新" value="2013-10-25" istitle reddot v-link="{path: '/user/noticeDetail', replace: true}"></mt-cell>
			</div>
		</div>
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
	.notice-list .mint-cell:after{border: 0;}
	.notice-list .mint-cell:before{left: 0;}
</style>