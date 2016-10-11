<template>

	<mt-header fixed isgrey title="拍照上传">
		<mt-button  v-link="{path: '/home', query: {name: true}, replace: true}" icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<div class="leh-float-box " :class="{'leh-guide': firstUpload}">
		<mt-button type="green" @click="uploadPic">上传</mt-button>
		<div class="photo-btn-tip-img-box">
			<img src="../../assets/img/photo-updata-btn.png"/>
		</div>
	</div>
	<mt-content>
		<div class="photo-img-box">
			<img src="../../assets/img/photo-img.png" />
		</div>
		<div class="photo-text-box">
			<p>1、请先绑定医生后再进行病历、检查单上传；</p>
			<p>2、上传照片后，符合标准的病历、检查单数据会直接录入系统；</p>
			<p>3、如需重新拍摄资料，APP会向您反馈信息；</p>
			<p>4、图片上传后，随访家园会在3-5个工作日内进行转换。</p>
			<p>5、上传成功后，您已经绑定的医生能立即关注到您的病历、检查单信息。</p>
		</div>
		<div class="leh-null-box"></div>
		<div class="photo-tap-box">
			<!--未上传-->
			<div class="photo-frist-tap" :class="{'leh-guide': firstIn}" @click="msgBox">
				<div class="photo-frist-ico-box">
					<span class="iconfont icon-wx-camera">
							<div class="photo-tip-img-box">
								<img src="../../assets/img/photo-updata-tip.png"/>
							</div>
					</span>
				</div>
				<p>点击上传图片</p>
			</div>
			<div class="leh-black-shade"></div>
			<!--上传-->
			<!--<div class="photo-tap">
				<div class="weui_cells weui_cells_form">
					<div class="weui_cell">
						<div class="weui_cell_bd weui_cell_primary">
							<div class="weui_uploader">
								<div class="weui_uploader_bd">
									<ul class="weui_uploader_files">
										<li @click="showPic" class="weui_uploader_file" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"></li>
										<li class="weui_uploader_file" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"></li>
										<li class="weui_uploader_file" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)">
											<span class="leh-img-del-btn iconfont icon-wx-reduce"></span>
										</li>
										<li class="weui_uploader_file weui_uploader_status" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)">
											<div class="weui_uploader_status_content">
												<i class="weui_icon_warn"></i>
											</div>
										</li>
										<li class="weui_uploader_file weui_uploader_status" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)">
											<div class="weui_uploader_status_content">50%</div>
										</li>
										<li class="weui_uploader_file weui_uploader_status">
												<img id="imgpath" />
										</li>
									</ul>
									<div class="weui_uploader_input_wrp" @click="addPic">
										<span class="iconfont icon-wx-add"></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>-->
			<div class="photo-tap">
				<mt-picture>
					<mt-pic-list v-for="items in picItems" :reddot="items.unread"  @click="showPic(items.id)">
						<img :src="items.url"/>
					</mt-pic-list>
					<div class="weui_uploader_input_wrp" @click="addPic">
						<span class="iconfont icon-wx-add"></span>
					</div>
				</mt-picture>
			</div>
		</div>

	</mt-content>
	<!-- 查看原图 -->
	<!-- 用于展示插件的容器 -->
	<div class="overlay" id="overlay"></div>
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtButton from '../../components/button.vue'
	import MtSwipe from '../../components/swipe.vue'
	import MtSwipeItem from '../../components/swipeItem.vue'
	import MtPicture from '../../components/picture.vue'
	import MtPicList from '../../components/picList.vue'
	import MessageBox from 'vue-msgbox'
	import {pageConfig, getOpenID} from 'wxconfig'
	import {getJson, wrapPic} from 'util'
	import $ from 'zepto'
	import wx from 'wx'

	export default{
		data () {
			return{
				viewpic: false,
				firstIn: false, // 是否第一次进入
				firstUpload: false, // 是否第一次上传
				picItems: [
					{
						'id': '112',
						'url': 'http://7jpp73.com1.z0.glb.clouddn.com/1.jpg',
						'unread': false
					},
					{
						'id': '112',
						'url': 'http://7jpp73.com1.z0.glb.clouddn.com/2.jpg',
						'unread': false
					},
					{
						'id': '112',
						'url': 'http://7jpp73.com1.z0.glb.clouddn.com/3.jpg',
						'unread': true
					},
					{
						'id': '112',
						'url': 'http://7jpp73.com1.z0.glb.clouddn.com/4.jpg',
						'unread': true
					},
					{
						'id': '112',
						'url': 'http://7jpp73.com1.z0.glb.clouddn.com/5.jpg',
						'unread': false
					}
				], // 图片数组
			}
		},

		ready () {

			let _self = this
			/*getJson('api/Handwriting', '', (rsp) => {

				_self.picItems  = rsp
			}, _self)*/




			// WX 上传图片接口
			pageConfig(this)
			getOpenID(this)
		},

		methods: {
			showPic (){
				this.viewpic =true;
			},

			closePic () {
				this.viewpic =false;
			},

			addPic () {

				wx.chooseImage({
					count: 1, // 默认9
					sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
					success: function(res) {
						var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片

						document.getElementById("imgpath").src = localIds;
					}
				});
			},

			showPic () {
				wrapPic(this.picItems, '拍照上传') // 查看图片
			},

			msgBox () {

				if(this.firstIn){

					this.firstIn = false
					this.firstUpload = true
				}else {

					this.firstUpload = false
					this.addPic()
					//MessageBox('提示', '一次只能添加9张图片');
				}
			},

			// 上传
			uploadPic () {

				let _self = this
				getJson('api/filecheck/upload', '', (rsp) => {
				}, _self)
			}
		},

		components: {
			MtContent,
			MtHeader,
			MtButton,
			MtSwipe,
			MtSwipeItem,
			MtPicture,
			MtPicList
		}
	}
</script>

<style>
	@import '../../assets/css/normalize.css';
	@import '../../assets/css/MPreview.mobile.css';

	.photo-img-box{margin: 20px auto;text-align: center;}
	.photo-text-box{padding: 0 10px 20px;}
	.photo-text-box p{font-size: 14px;line-height: 20px;color: #363636;}
	.photo-frist-ico-box{width: 107px;height: 107px;background-color: #f0f0f0;margin: 30px auto 10px;border-radius:5px;line-height: 107px;text-align: center;}
	.photo-frist-ico-box .icon-wx-camera{font-size: 60px;}
	.photo-frist-tap p{text-align: center;}
	.photo-tap .weui_cells:before,.photo-tap .weui_cells:after{border: 0;}
	.photo-tap .weui_uploader_input_wrp,.photo-tap .weui_uploader_file{margin-top: 8px;}

	.photo-tip-img-box{display:none;position: absolute;top:-260%;left:-110%;margin-left:-31%;z-index: 6;width: 400%;}
	.photo-frist-tap~.leh-black-shade{display: none;}
	.photo-btn-tip-img-box{
		display: none;
		position: absolute;
		bottom: 10px;
		left: 40%;
		z-index: 7;
		width: 60%;
	}
	.leh-guide .icon-wx-camera{position: relative;z-index: 7;color: #fff;}
	.leh-guide.leh-float-box{z-index: 99;}
	.leh-guide .mint-button--large{position: relative;overflow: visible;background-color: #1faa2b;}
	.leh-guide .photo-tip-img-box,
	.leh-guide~.leh-black-shade,
	.leh-guide.leh-float-box~.leh-wrap .leh-black-shade,
	.leh-guide .photo-btn-tip-img-box{display: block;}


	.img-list { list-style: none; padding: 0; margin: 0; }
	.img-list:after { display: table; content: " "; }
	.img-list > li { box-sizing: border-box; padding: 10px; position: relative; float: left; width: 50%; }
	.img-list > li img { width: 100%; height: 100%; vertical-align: top; }
	.img-list > li > a { display: block; }
	.img-list > li > span { font-size: 14px; padding: 0px 10px; position: absolute; bottom: 15px; right: 20px; border-radius: 3px; background: rgba(37,37,37,0.6); color: #fff; }
	.img-list > li:first-child { padding-right: 5px; }
	.img-list > li:last-child { padding-left: 5px; }
	.img-list > li:first-child span { right: 15px; }
	.overlay { background: #000; width: 100%; height: 100%; overflow: hidden; position: fixed; top: 0; left: 0; z-index: 99;
		-webkit-transition: all 300ms ease-in 0s;
		transition: all 300ms ease-in 0s;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		-webkit-transform: translate3d(100%, 0px, 0px);
		transform: translate3d(100%, 0px, 0px);
	}
	.overlay.in {
		-webkit-transform: translate3d(0px, 0px, 0px);
		transform: translate3d(0px, 0px, 0px);
	}
</style>