<template>
	<mt-header fixed isgrey title="转换中单据">
		<mt-button v-link="{path: '/online/bill', query: {actives: 'turn'}, replace: true}" icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<mt-content class="page-popup">
		<div class="transform-list-box">
			<mt-translate>
				<mt-translate-item
						v-for="items in turnDatas"
						:name="items.id"
						:delbtn="items.isFail">
					<div class="transform-list-img-box" @click="showPic(items.url)">
						<img :src="items.url"/>
						<span class="transform-img-ico iconfont icon-wx-close" v-if="items.isFail"></span>
					</div>
					<div class="transform-list-text" v-if="items.isFail" @click="addPic(items.id)">
						<p>图片过于模糊或无法识别</p>
						<p>点击重新上传</p>
					</div>
					<span class="fr" v-if="!items.isFail">
						转换中
					</span>
					<span class="fr leh-c-red" v-else>
						转换失败
					</span>
				</mt-translate-item>
			</mt-translate>
		</div>
	</mt-content>
	<!-- 用于展示插件的容器 -->
	<div class="overlay" id="overlay"></div>
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtButton from '../../components/button.vue'
	import MtTranslate from '../../components/translate.vue'
	import MtTranslateItem from '../../components/translateItem.vue'
	import MessageBox from 'vue-msgbox'
	import {getJson, putJson, delJson, wrapPic} from 'util'
	import {pageConfig} from 'wxconfig'

	export default{
		route: {
			data ({to, next}) {

				let _self = this
				pageConfig()
				_self.dates = to.query.date
				_self.getTurnList(_self.dates)

				next()

			}
		},

	  data () {
	    return{
	      msg:'hello vue',
		    ids: '',
		    dates: '', // 转换中日期
		    turnDatas: [], // 转换中数组,
		    turnTitle: '',
		    serverId: '', // 上传图片返回的serverId
		    photo: '' // 重新上传的图片
	    }
	  },

		methods: {

			msgBox (ids) {

				let _self = this
				MessageBox({
				 title: '提示',
				 message: '是否删除此单据?',
				 showCancelButton: true
				 }).then(action => {

					if(action === 'confirm'){

						delJson('api/filecheck/'+ ids,'',(rcodes, msgs) => {
							_self.getTurnList(_self.dates)

						}, _self)
					}
				 });
			},

			// 获取转换中详情
			getTurnList (dates) {

				let _self = this
				getJson('api/filecheck/'+ dates,'',(rsp) => {
					_self.turnDatas = rsp

				}, _self)
			},

			// 查看图片
			showPic (url){

				wrapPic(url, '转换中单据') // 查看图片
			},

			// 添加图片
			addPic (ids) {

				let _self = this
				wx.chooseImage({
					count: 1, // 默认9
					sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
					success: function(res) {

						let localIds = res.localIds[0].toString(); // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
						_self.photo = localIds
						_self.uploadImage(localIds, ids)

					},
					fail: function (res) {
						alterShowMessage("操作提示", JSON.stringify(res), "1", "确定", "", "", "");
					}
				});
			},

			// 上传图片
			uploadImage (localIds, id) {

				let _self = this
				wx.uploadImage({
					localId: localIds, // 需要上传的图片的本地ID，由chooseImage接口获得
					isShowProgressTips: 1, // 默认为1，显示进度提示
					success: function (res) {

						_self.serverId = res.serverId; // 返回图片的服务器端ID
						putJson('api/filecheck/reupload/'+ id + '/'+ res.serverId,'',(rsp) => {

							_self.getTurnList(_self.dates)
						}, _self)

					},
					fail: function(res) {
						alterShowMessage("操作提示", JSON.stringify(res), "1", "确定", "", "", "");
					}
				});

			},
		},

		events: {
			'handle-del' (e) {
				this.ids = $(e.target).attr('id')
				this.msgBox(this.ids)
			}
		},

		components: {
			MtContent,
			MtHeader,
			MtButton,
			MtTranslate,
			MtTranslateItem
		}
	}
</script>

<style>
	@import '../../assets/css/normalize.css';
	@import '../../assets/css/MPreview.mobile.css';

	.transform-list-img-box{width: 40px;height: 50px;background-color:#e5e5e5;float: left;text-align: center;position: relative;}
	.transform-list-img-box img{height: auto;width: auto;max-height: 100%;max-width: 100%;}
	.transform-list-text{float: left;padding-left: 20px;padding-top:5px;width: 65%;height: 50px;display: inline-block;overflow: hidden;}
	.transform-list-text p{font-size: 12px;color: #919191;line-height: 20px;}
	.transform-list-box span.fr{line-height: 50px;font-size: 14px;}
	.transform-img-ico{position: absolute;bottom: -7px;right: -7px;font-size: 14px;font-weight:bold;color: #ff6060;}

</style>