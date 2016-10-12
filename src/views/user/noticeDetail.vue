<template>
	<mt-header fixed isgrey title="林医生公告">
		<mt-button v-link="{path: '/user/notice', query: {tonotice: true}}"  icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<mt-content class-name="leh-bg-grey-body">
		<div class="page-cell notice-content-list">
			<div class="leh-null-data" v-if="!noticesList.length">暂无公告信息</div>
			<mt-cell v-for="items in noticesList" :title="items.content || '暂无公告信息'" :label="items.createTime" istitle></mt-cell>
		</div>

		<div class="page-infinite-loading document-index-load-tap" v-if="pageNoticeListNum*10 <= pageNoticeListTotal">
			<mt-button size="large" type="transparent" icon="load" @click="moreNoticeList" >点击加载更多</mt-button>
		</div>
	</mt-content>
</template>
<script>
	import MtHeader from '../../components/header.vue'
	import MtContent from '../../components/content.vue'
	import MtButton from '../../components/button.vue'
	import MtCell from '../../components/cell.vue'
	import {getJson, postJson} from 'util'

	export default{
		route: {
			data ({to, next}) {

				let _self = this
				_self.ids = to.query.id

				// 医生公告详情列表
				_self.pageNoticeListNum = 1
				getJson('api/notices/'+ _self.ids +'?pageIndex=1&pageSize=10', '', (rsp)=>{

					_self.noticesList = rsp.items
					_self.pageNoticeListTotal = rsp.totalQty

					// 取消红点
					//postJson('api/notices/hasRead/'+ _self.ids, '', (rsp_hasRead)=>{},_self)
				},_self)

				next()
			}
		},

		data () {
			return{
				ids: '', // 医生ID
				noticesList: [], // 医生公告列表
				pageNoticeListNum: 1, // 医生公告页数
				pageNoticeListTotal: 0, // 医生公告总页数
			}
		},

		methods: {

			// 获取更多医生列表信息
			moreNoticeList () {
				let _self = this

				if(_self.pageNoticeListNum*10 >= _self.pageNoticeListTotal) {
					return
				}
				_self.pageNoticeListNum = _self.pageNoticeListNum + 1
				getJson('api/notices/'+ _self.ids +'?pageIndex='+ this.pageNoticeListNum +'&pageSize=10', '', (rsp)=>{

					// 合并数组
					_self.noticesList = _self.noticesList.concat(rsp.items)
				},_self)
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
	.document-index-load-tap .mint-button--transparent{text-align: center;}
</style>