<template>
	<mt-header fixed isgrey title="留言详情">
		<mt-button v-link="{path: form_path, query: {tonote: true}, replace: true}" icon="arr-left" slot="left"></mt-button>
		<!--<mt-button slot="right" v-if="!ismsg" @click="closeMsg">关闭</mt-button>-->
	</mt-header>
	<div class="leh-float-box" v-if="isClose" @click="toFeedback">
		<mt-button type="green">给医生留言</mt-button>
	</div>
	<div class="msg-details-ft" v-if="!isClose">
		<div class="msg-details-ft-type">
			<div class="msg-details-ft-left">
				<textarea v-model="msg" v-el:msgbox></textarea>
			</div>
			<div class="msg-details-ft-right">
				<span class="iconfont icon-wx-footer-add" v-if="!addpic" @click="addPicFun"></span>
				<div class="msg-details-ft-send" v-if="addpic" @click="reback">回复</div>
			</div>
		</div>
		<div class="msg-details-ft-content" v-if="showpic">
			<a class="mint-tab-item" @click="addPic">
				<span class="iconfont icon-wx-image"></span>
				<div class="mint-tab-item-label">图片</div>
			</a>
		</div>
	</div>
	<mt-content class-name="leh-bg-grey-body" v-el:bodybox>
		<div class="page-cell msg-details-head">
			<a class="mint-cell">
				<label class="mint-cell-title">
					<span class="mint-cell-text">{{ noteDetails.contents }}</span>
					<div class="msg-details-photo leh-more" v-if="noteDetails.urls">
						<ul>
							<li class="msg-details-img" v-for="urls in noteDetails.urls" @click="showPic(noteDetails.urls)">
								<img :src="urls"/>
							</li>
						</ul>
					</div>
					<span class="mint-cell-label">{{ noteDetails.createtime }}</span>
				</label>
				<div class="mint-cell-value"></div>
			</a>
		</div>
		<div class="page-cell msg-details-content" v-if="noteDetails.replyList">
			<a class="mint-cell" v-for="items in noteDetails.replyList">
				<label class="mint-cell-title">
					<div class="msg-details-content-title">
						<div class="msg-details-content-title-img">
							<img :src="items.userPhoto" v-if="items.userPhoto !== null"/>
							<img src="../../assets/img/private.jpg" v-if="items.userPhoto === null"/>
						</div>
						<span>{{ items.userName }}</span>
					</div>
					<span class="mint-cell-text">
							<p v-if="!items.url">{{ items.content }}</p>
							<div class="msg-details-head-photo" v-if="items.url" @click="showPic(items.url)">
								<ul>
									<li class="msg-details-img">
										<img :src="items.url"/>
									</li>
								</ul>
							</div>
					</span>
					<span class="mint-cell-label">{{ items.createTime }}</span>
				</label>
				<div class="mint-cell-value"></div>
			</a>
			<!--<a class="mint-cell">
				<span class="mint-cell-mask"></span>
				<label class="mint-cell-title">
					<div class="msg-details-content-title">
						<div class="msg-details-content-title-img">
							<img src="../../assets/img/private.jpg"/>
						</div>
						<span>张医生</span>
					</div>
					<span class="mint-cell-text">
							<div class="msg-details-head-photo">
								<ul>
									<li class="msg-details-img">
										<img src="../../assets/img/login_quick.png"/>
									</li>
								</ul>
							</div>
						</span>
					<span class="mint-cell-label">2015-12-11 10:11</span>
				</label>
				<div class="mint-cell-value"></div>
			</a>-->
		</div>

		<!-- 暂时不删除 -->
		<!--<div class="page-cell msg-details-head">
			<a class="mint-cell" v-for="msg in message">
				<span class="mint-cell-mask"></span>
				<label class="mint-cell-title">
					<span class="mint-cell-text">{{ msg.info }}</span>
					<div class="msg-details-photo">
						<ul>
							<li class="msg-details-img" v-for="pics in msg.pic" :class="{'leh-more': msg.pic.length !== 1}">
								<img :src="pics.url"/>
							</li>
						</ul>
					</div>
					<span class="mint-cell-label">2015-12-11 10:11</span>
				</label>
				<div class="mint-cell-value"></div>
			</a>
		</div>-->

		<!-- 弹出窗 -->
		<!--<mt-popup-box v-if="ispopup">
			<p slot="info">是否关闭本次留言，关闭后将不能继续留言</p>
			<div slot="button">
				<mt-button type="grey" size="small" @click="cancle">确定</mt-button>
				<mt-button type="blue" size="small" @click="conf">确定</mt-button>
			</div>
		</mt-popup-box>-->
	</mt-content>
	<!-- 用于展示插件的容器 -->
	<div class="overlay" id="overlay"></div>
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtButton from '../../components/button.vue'
	import MtCell from '../../components/cell.vue'
	import MtPopupBox from '../../components/popupBox.vue'
	import MessageBox from 'vue-msgbox'
	import {getJson, postJson, wrapPic} from 'util'
	import {pageConfig} from 'wxconfig'
	import $ from 'zepto'

	export default{
		route: {
			data ({to, from, next}) {

				pageConfig()

				let _self =this
				_self.form_path = from.path
				_self.ids = to.query.id
				if(to.query.isclose === 'false'){
					_self.isClose = false
				}else {
					_self.isClose = true
				}

				// 初始化数据
				_self.noteDetails = '';
				getJson('api/patientMessages/'+ _self.ids, '', (rsp)=>{

					_self.noteDetails = rsp
				},_self)

				next()
			}
		},

		data () {
			return{
				msg: '', // 上传的内容
				url: '', // 上传的图片
				ispopup: false,
				ismsg: false,
				addpic: false,
				showpic: false,
				isClose: false, // 是否关闭留言
				form_path: '',
				ids: '', // 医生ID
				noteDetails: '', // 留言详情
				message: [],
				picItems: [], // 图片数组
				serverId: '', // 上传图片返回的serverId
			}
		},

		methods: {

			addPicFun () {

				let bdbox = $(this.$els.bodybox)

				this.msg =''
				this.showpic = !this.showpic
				if(this.showpic){
					bdbox.css('paddingBottom', '119px')
				}else{
					bdbox.css('paddingBottom', '58px')
				}
				// 主体内容跟着输入框的改变向上滚动
				bdbox[0].scrollTop = 100000
			},

			// 添加图片
			addPic () {

				let _self = this
				wx.chooseImage({
					count: 1, // 默认9
					sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
					success: function(res) {

						let localIds = res.localIds[0].toString(); // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
						_self.photo = localIds
						_self.uploadImage(localIds)

					},
					fail: function (res) {
						alert(JSON.stringify(res));
					}
				});
			},

			uploadImage (localIds) {

				let _self = this
				wx.uploadImage({
					localId: localIds, // 需要上传的图片的本地ID，由chooseImage接口获得
					isShowProgressTips: 1, // 默认为1，显示进度提示
					success: function (res) {
						_self.serverId = res.serverId; // 返回图片的服务器端ID
						_self.msg = ''
						_self.toJson()
					},
					fail: function(res) {
						alert(JSON.stringify(res));
					}
				});

			},

			// 回复
			reback () {

				let _self = this
				let msgBox = $(_self.$els.msgbox)
				let scrollH = msgBox[0].scrollHeight
				let bdbox = $(_self.$els.bodybox)

				_self.addpic = !_self.addpic
				msgBox.val('')  // ????
				msgBox.height(30)

				_self.serverId = ''
				_self.toJson()

				/*let params = {
					"messageId": _self.ids,
					"content": _self.msg,
					"url": _self.url
				}

				// 回复留言
				postJson('api/patientMessages/reply', params, (rsp)=>{

					// 刷新页面
					getJson('api/patientMessages/'+ _self.ids, '', (rsp_note)=>{

						_self.noteDetails = rsp_note
					},_self)
				},_self)*/

			},

			toJson () {

				let _self = this
				let params = {
					"messageId": _self.ids,
					"content": _self.msg,
					"serverId": _self.serverId
				}

				// 回复留言
				postJson('api/patientMessages/reply', params, (rsp)=>{
					alert(rsp)
					// 刷新页面
					getJson('api/patientMessages/'+ _self.ids, '', (rsp_note)=>{
						alert(rsp_note)
						_self.noteDetails = rsp_note
					},_self)
				},_self)
			},

			// 关闭
			closeMsg () {

				MessageBox({
					title: '提示',
					message: '是否关闭本次留言，关闭后将不能继续留言。',
					showCancelButton: true
				}).then(action => {
					if(action === 'confirm'){
						//this.save()
					}else {
						//this.$route.router.go({path: '/user/info'})
					}
				});
			},

			// 查看原图
			showPic (url){

				wrapPic(url, '留言详情') // 查看图片
			},

			// 返回留言中心
			toFeedback () {
				this.$route.router.go({path: '/online/feedback', replace: true})
			}
		},

		watch: {
			'msg' (newVal) {

				if(newVal !== ''){
					this.addpic = true
					this.showpic =false
				}else {
					this.addpic = false
				}

				// 输入框根据字符自动增高
				let msgBox = $(this.$els.msgbox)
				let scrollH = msgBox[0].scrollHeight
				let bdbox = $(this.$els.bodybox)

				msgBox.height(scrollH)

				/*
				 * 输入框默认高度 30px
				 * 外框高度为20px 灰边8px
				*/
				if(scrollH > 30){
					bdbox.css('paddingBottom', 28 + scrollH +'px')
				}else {
					bdbox.css('paddingBottom', '58px')
				}

				// 主体内容跟着输入框的改变向上滚动
				bdbox[0].scrollTop = 100000
			}
		},

		components: {
			MtContent,
			MtHeader,
			MtButton,
			MtCell,
			MtPopupBox
		}
	}
</script>

<style>
	@import '../../assets/css/normalize.css';
	@import '../../assets/css/MPreview.mobile.css';

	.msg-details-head .mint-cell:after,.msg-details-content .mint-cell:after{border: 0;}
	.msg-details-head .mint-cell-text{line-height: 22px;}
	.msg-details-head .mint-cell-label,.msg-details-content .mint-cell-label{text-align: right;color: #aaa;}
	.msg-details-photo{overflow: hidden;padding: 20px 0;}
	.msg-details-img{text-align: center;width: 181px;height: 181px;line-height: 181px;margin: 0 auto;}
	.msg-details-img img,.msg-details-content-title-img img{width: 100%;min-height: 100%;height: auto}
	.msg-details-photo.leh-more .msg-details-img {width: 45px;height: 45px;overflow: hidden;float: left;margin-right: 10px;line-height: 0;}
	.msg-details-content .mint-cell:before{left: 10px;}
	.msg-details-content-title{overflow: hidden;margin-bottom: 5px;}
	.msg-details-content-title-img{width: 23px;height: 23px;border-radius: 50%;overflow: hidden;float: left;text-align: center;}
	.msg-details-content-title span{font-size: 16px;line-height: 23px;margin-left: 10px;}
	.msg-details-content .mint-cell-text p{padding-left: 33px;width:100%;line-height: 20px;font-size: 14px;float: left;overflow: hidden;margin: 10px 0;}
	.msg-details-ft~.leh-wrap{padding-bottom: 58px;}
	.msg-details-ft{width: 100%;background-color:#fff;position: fixed;z-index: 5;bottom: 0;left: 0;text-align: center;}
	.msg-details-ft-type{overflow:hidden;padding: 10px;}
	.msg-details-ft-left{float: left;width: 80%;}
	.msg-details-ft-left textarea{height: 30px;width: 100%;padding: 4px;background-color:#ebecee;border-color: #d3d3d3;border-radius: 5px;line-height: 20px;}
	.msg-details-ft-right{float: left;width: 20%;text-align: center;}
	.msg-details-ft-right .icon-wx-footer-add{display: block;height: 100%;line-height: 30px;font-size: 22px;color: #aaa;}
	.msg-details-ft-send{display: inline-block;height: 30px;line-height:30px;width: 80%;border-radius:5px;background-color: #1faa2b;color:#fff;margin-left: 20%;}
	.msg-details-ft-content{overflow: hidden;width: 100%;padding:10px;border-top: 1px solid #e5e5e5;}
	.msg-details-ft-content .mint-tab-item{padding: 0;float: left;}
	.msg-details-ft-content .icon-wx-image{font-size: 20px;color: #aaa;padding: 3px;border: 1px solid #aaa; border-radius: 5px;}
	.msg-details-ft-content .mint-tab-item-label{margin-top: 5px;color: #aaa;text-align: center;}

	.msg-details-img img,.msg-details-content-title-img img{height: 100%;}


</style>