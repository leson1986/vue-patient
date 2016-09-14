<template>
	<mt-header fixed isgrey title="留言详情">
		<mt-button v-link="'/home'" icon="arr-left" slot="left"></mt-button>
		<mt-button slot="right" v-if="!ismsg" @click="ispopup=true">关闭</mt-button>
	</mt-header>
	<div class="leh-float-box" v-if="ismsg">
		<mt-button type="green">给医生留言</mt-button>
	</div>
	<div class="msg-details-ft" v-if="!ismsg">
		<div class="msg-details-ft-type">
			<div class="msg-details-ft-left">
				<textarea v-model="msg" v-el:msgbox></textarea>
			</div>
			<div class="msg-details-ft-right">
				<span class="iconfont icon-wx-footer-add" v-if="!addpic" @click="addPic"></span>
				<div class="msg-details-ft-send" v-if="addpic" @click="reback">回复</div>
			</div>
		</div>
		<div class="msg-details-ft-content" v-if="showpic">
			<a class="mint-tab-item">
				<span class="iconfont icon-wx-image"></span>
				<div class="mint-tab-item-label">图片</div>
			</a>
		</div>
	</div>
		<mt-content class-name="leh-bg-grey-body" v-el:bodybox>
		<div class="page-cell msg-details-head">
			<a class="mint-cell">
				<span class="mint-cell-mask"></span>
				<label class="mint-cell-title">
					<span class="mint-cell-text">我的药品已经快要吃完了，但是最近却有点副作用，是因为药品而产生的吗？需要先停药吗？</span>
					<div class="msg-details-photo">
						<ul>
							<li class="msg-details-img leh-more">
								<img src="../../assets/img/login_quick.png"/>
							</li>
							<li class="msg-details-img leh-more">
								<img src="../../assets/img/login_quick.png"/>
							</li>
						</ul>
					</div>
					<span class="mint-cell-label">2015-12-11 10:11</span>
				</label>
				<div class="mint-cell-value"></div>
			</a>
		</div>
		<div class="page-cell msg-details-content">
			<a class="mint-cell">
				<span class="mint-cell-mask"></span>
				<label class="mint-cell-title">
					<div class="msg-details-content-title">
						<div class="msg-details-content-title-img">
							<img src="../../assets/img/private.jpg"/>
						</div>
						<span>张医生</span>
					</div>
					<span class="mint-cell-text">
							<p>爱上的开奖号安徽省开打机氨甲环酸的卡和思考打开按户口是的哈较好的卡萨何思达卡号</p>
						</span>
					<span class="mint-cell-label">2015-12-11 10:11</span>
				</label>
				<div class="mint-cell-value"></div>
			</a>
			<a class="mint-cell">
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
			</a>
		</div>

		<div class="page-cell msg-details-head">
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
		</div>

		<!-- 弹出窗 -->
		<mt-popup-box v-if="ispopup">
			<p slot="info">是否关闭本次留言，关闭后将不能继续留言</p>
			<div slot="button">
				<mt-button type="grey" size="small" @click="cancle">确定</mt-button>
				<mt-button type="blue" size="small" @click="conf">确定</mt-button>
			</div>
		</mt-popup-box>
	</mt-content>
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtButton from '../../components/button.vue'
	import MtCell from '../../components/cell.vue'
	import MtPopupBox from '../../components/popupBox.vue'
	import {getJson} from 'util'
	import $ from 'zepto'

	export default{
		data () {
			return{
				msg: '',
				ispopup: false,
				ismsg: false,
				addpic: false,
				showpic: false,
				message: [
					{
						"id": "0",
						"info": "第1位",
						"pic": [
							{
								"url": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2819504303,2145532625&fm=58",
								"title": "第一张图"
							},
							{
								"url": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2819504303,2145532625&fm=58",
								"title": "第二张图"
							},
							{
								"url": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2819504303,2145532625&fm=58",
								"title": "第三张图"
							}
						]
					}
				]
			}
		},

		methods: {
			cancle () {
				this.ispopup  = false
			},
			conf () {
				this.ispopup  = false
				this.ismsg = true
			},
			addPic () {

				let bdbox = $(this.$els.bodybox)
				this.showpic = !this.showpic
				if(this.showpic){
					bdbox.css('paddingBottom', '119px')
				}else{
					bdbox.css('paddingBottom', '58px')
				}
				// 主体内容跟着输入框的改变向上滚动
				bdbox[0].scrollTop = 100000
			},
			// 回复
			reback () {

				this.addpic = !this.addpic
				let msgBox = $(this.$els.msgbox)
				let bdbox = $(this.$els.bodybox)
				msgBox.val('')
				msgBox.height(30)

				getJson(this, '../../../../static/data/msg.json', '', (rsp)=>{
					this.$set('message', rsp)
					bdbox.css('paddingBottom', '58px')
					// 主体内容跟着输入框的改变向上滚动
					setTimeout(() => {
						bdbox[0].scrollTop = 100000
					},100)
				})

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
	.msg-details-head .mint-cell:after,.msg-details-content .mint-cell:after{border: 0;}
	.msg-details-head .mint-cell-text{line-height: 22px;}
	.msg-details-head .mint-cell-label,.msg-details-content .mint-cell-label{text-align: right;color: #aaa;}
	.msg-details-photo{overflow: hidden;padding: 20px 0;}
	.msg-details-img{text-align: center;width: 181px;height: 181px;line-height: 181px;margin: 0 auto;}
	.msg-details-photo .leh-more {width: 45px;height: 45px;overflow: hidden;float: left;margin-right: 10px;line-height: 0;}
	.msg-details-content .mint-cell:before{left: 10px;}
	.msg-details-content-title{overflow: hidden;margin-bottom: 5px;}
	.msg-details-content-title-img{width: 23px;height: 23px;border-radius: 50%;overflow: hidden;float: left;}
	.msg-details-content-title span{font-size: 16px;line-height: 23px;margin-left: 10px;}
	.msg-details-content .mint-cell-text p{padding-left: 33px;width:100%;line-height: 20px;font-size: 14px;float: left;overflow: hidden;margin: 10px 0;}
	.msg-details-ft~.leh-wrap{padding-bottom: 58px;}
	.msg-details-ft{width: 100%;background-color:#fff;position: fixed;z-index: 5;bottom: 0;left: 0;text-align: center;}
	.msg-details-ft-type{overflow:hidden;padding: 10px;}
	.msg-details-ft-left{float: left;width: 80%;}
	.msg-details-ft-left textarea{height: 30px;width: 100%;padding: 4px;background-color:#ebecee;border-color: #d3d3d3;border-radius: 5px;line-height: 20px;overflow-y: hidden}
	.msg-details-ft-right{float: left;width: 20%;text-align: center;}
	.msg-details-ft-right .icon-wx-footer-add{display: block;height: 100%;line-height: 30px;font-size: 22px;color: #aaa;}
	.msg-details-ft-send{display: inline-block;height: 30px;line-height:30px;width: 80%;border-radius:5px;background-color: #1faa2b;color:#fff;margin-left: 20%;}
	.msg-details-ft-content{overflow: hidden;width: 100%;padding:10px;border-top: 1px solid #e5e5e5;}
	.msg-details-ft-content .mint-tab-item{padding: 0;float: left;}
	.msg-details-ft-content .icon-wx-image{font-size: 20px;color: #aaa;padding: 3px;border: 1px solid #aaa; border-radius: 5px;}
	.msg-details-ft-content .mint-tab-item-label{margin-top: 5px;color: #aaa;text-align: center;}

</style>