<template>
	<mt-header fixed isgrey title="记录中心">
		<mt-button v-link="{path: '/home'}" icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<mt-content class-name="leh-bg-grey-body">
		<div class="leh-null-data" v-if="!noteItems.length">暂无数据</div>
		<div class="note-box">
			<ul>
				<li class="note-list" v-for="items in noteItems" @click="toNoteUrl(items.id, items.isClose)">
				<!--<li class="note-list" v-for="items in noteItems" v-link="{path: '/user/noteDetail', query:{id: items.id, isclose: items.isClose}, replace: true}">-->
					<p class="note-list-title" :class="{'leh-red-dot': items.unread}">
						<span class="iconfont" :class="{'icon-wx-ask-round': !items.isClose, 'icon-wx-take-round': items.isClose}"></span>
						{{ items.contents }}
					</p>
					<div class="page-cell note-content">
						<a class="mint-cell">
								<span class="mint-cell-mask">
									<div class="note-img">
										<img :src="items.drPhoto" v-if="items.drPhoto !== null"/>
										<img src="../../assets/img/private.jpg" v-if="items.drPhoto === null"/>
									</div>
								</span>
							<label class="mint-cell-title" style="width: 80%;">
									<span class="mint-cell-text">
										<span>{{ items.drName }}</span>丨
										<span class="leh-fs-fourteen">{{ items.drCustName }}</span>
									</span>
								<span class="mint-cell-label">{{ items.lastReplyContent || '暂无回复' }}</span>
								<span class="leh-fs-fourteen leh-c-grey">{{ items.lastActiveTime }}</span>

							</label>
							<div class="mint-cell-value">
								<span></span>
							</div>
						</a>
					</div>
				</li>

			</ul>
		</div>

		<div class="page-infinite-loading document-index-load-tap" v-if="pageNoteNum*10 <= pageNoteTotal">
			<mt-button size="large" type="transparent" icon="load" @click="moreNote" >点击加载更多</mt-button>
		</div>
	</mt-content>
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtButton from '../../components/button.vue'
	import {getJson} from 'util'

	export default{
		route: {
			data ({to, next}) {

				let _self = this
				//_self.isNotePage = to.query.tonote || false
				//if(_self.isNotePage) return // 是否其他页面返回

				// 记录中心列表
				_self.pageNoteNum = 1
				getJson('api/patientMessages/index?pageIndex=1&pageSize=10', '', (rsp)=>{

					_self.noteItems = rsp.items
					_self.pageNoteTotal = rsp.totalQty
				},_self)

				next()
			}
		},

		data () {
			return{
				isNotePage: '', // 来自noteDetail.vue
				noteItems: [], // 公告列表
				pageNoteNum: 1, // 记录中心页数
				pageNoteTotal: 0, // 记录中心总页数
			}
		},

		methods: {
			toNoteUrl: function (ids, isclose) {
				window.location.href='http://wx.jk7.com/html/pay/vue_note_v.html?id='+ ids +'&isclose='+ isclose + '&openID='+ openID;
			},

			// 获取更多医生列表信息
			moreNote () {
				let _self = this

				if(_self.pageNoteNum*10 >= _self.pageNoteTotal) {
					return
				}
				_self.pageNoteNum = _self.pageNoteNum + 1
				getJson('api/patientMessages/index?pageIndex='+ this.pageNoteNum +'&pageSize=10', '', (rsp)=>{

					// 合并数组
					_self.noteItems = _self.noteItems.concat(rsp.items)
				},_self)
			}
		},

		components: {
			MtContent,
			MtHeader,
			MtButton
		}
	}
</script>

<style>
	.note-list{background-color: #fff; margin-bottom: 8px;}
	.note-list-title{padding: 10px 25px 10px 10px;overflow: hidden;text-overflow:ellipsis; white-space:nowrap;}
	.note-list-title .icon-wx-take-round,
	.note-list-title .icon-wx-ask-round{float: left;margin-right: 10px;}
	.note-list-title .icon-wx-ask-round{color: #f77a66;}
	.note-list-title .icon-wx-take-round{color: #47c688;}
	.note-list-title:after{right: 12px;top: 14px;}
	.note-content .mint-cell:before{border: 0;}
	.note-content .mint-cell-text{display: block;line-height: 22px}
	.note-content .mint-cell-label{color: #363636;text-overflow:ellipsis; overflow:hidden; white-space:nowrap; height: 16px;margin: 8px 0;}
	.note-img{width: 49px;height: 49px;border-radius: 50%;overflow: hidden;margin-right: 10px;text-align: center;}
	.note-img img{width: 100%;min-height: 100%;height: auto}

</style>