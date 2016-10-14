<template>
	<mt-header fixed isgrey title="医生公告">
		<mt-button v-link="{path: '/home', query: {tohome: true}, replace: true}" icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<mt-content class="page-infinite">
		<div class="page-cell disease-list">
			<div class="page-infinite-list">

				<div class="leh-null-data" v-if="!noticeItems.length">暂无公告</div>
				<mt-cell v-for="items in noticeItems" :title="items.drName + '医生公告更新'" :reddot="items.unread" :value="items.updateTime" istitle v-link="{path: '/user/noticeDetail', query: {id: items.drId}, replace: true}"></mt-cell>
			</div>

			<div class="page-infinite-loading document-index-load-tap" v-if="pageNoticeNum*10 <= pageNoticeTotal">
				<mt-button size="large" type="transparent" icon="load" @click="moreNotice" >点击加载更多</mt-button>
			</div>
		</div>
	</mt-content>
</template>
<script>
	import MtHeader from '../../components/header.vue'
	import MtContent from '../../components/content.vue'
	import MtButton from '../../components/button.vue'
	import MtCell from '../../components/cell.vue'
	import MtSpinner from '../../components/spinner.vue'
	import {getJson} from 'util'

	export default{
		route: {
			data ({to, next}) {

				let _self = this
				_self.formPage = to.query.tonotice || false
				if(_self.formPage) return // 是否其他页面返回
				// 医生公告列表
				_self.pageNoticeNum = 1
				getJson('api/notices/index?pageIndex=1&pageSize=10', '', (rsp)=>{

					_self.noticeItems = rsp.items
					_self.pageNoticeTotal = rsp.totalQty
				},_self)

				next()
			}
		},

		data () {
			return{
				list: [],
				loading: false,
				allLoaded: false,
				wrapperHeight: 0,
				formPage: '', // 返回的页面
				noticeItems: [], // 公告列表
				pageNoticeNum: 1, //
				pageNoticeTotal: 0, //

			}
		},

		methods: {

			// 获取更多医生列表信息
			moreNotice () {
				let _self = this

				if(_self.pageNoticeNum*10 >= _self.pageNoticeTotal) {
					return
				}
				_self.pageNoticeNum = _self.pageNoticeNum + 1
				getJson('api/notices/index?pageIndex='+ this.pageNoticeNum +'&pageSize=10', '', (rsp)=>{

					// 合并数组
					_self.noticeItems = _self.noticeItems.concat(rsp.items)
				},_self)
			}
		},

		components: {
			MtHeader,
			MtContent,
			MtButton,
			MtCell,
			MtSpinner
		}
	}
</script>

<style>
	.notice-list .mint-cell:after{border: 0;}
	.notice-list .mint-cell:before{left: 0;}
</style>