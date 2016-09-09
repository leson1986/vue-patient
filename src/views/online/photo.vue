<template>
	<mt-header fixed isgrey title="拍照上传">
		<mt-button v-link="'/home'" icon="back" slot="left"></mt-button>
	</mt-header>
	<div class="leh-float-box">
		<mt-button type="green">上传</mt-button>
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
			<div class="photo-frist-tap">
				<div class="photo-frist-ico-box">i</div>
				<p>点击上传图片</p>
			</div>
			<!--上传-->
			<div class="photo-tap">
				<div class="weui_cells weui_cells_form">
					<div class="weui_cell">
						<div class="weui_cell_bd weui_cell_primary">
							<div class="weui_uploader">
								<div class="weui_uploader_bd">
									<ul class="weui_uploader_files">
										<li @click="showPic" class="weui_uploader_file" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"></li>
										<li class="weui_uploader_file" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"></li>
										<li class="weui_uploader_file" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)">
											<span class="photo-del-btn">-</span>
										</li>
										<li class="weui_uploader_file weui_uploader_status" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)">
											<div class="weui_uploader_status_content">
												<i class="weui_icon_warn"></i>
											</div>
										</li>
										<li class="weui_uploader_file weui_uploader_status" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)">
											<div class="weui_uploader_status_content">50%</div>
										</li>
									</ul>
									<div class="weui_uploader_input_wrp">
										<input class="weui_uploader_input" type="file" accept="image/*" multiple="">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- 查看原图 -->
		<div class="check-photo-box page-swipe" v-show="viewpic" @click="closePic">
			<span class="check-photo-close">X</span>

			<mt-swipe class="my-swipe" :auto="0">
				<mt-swipe-item class="slide1"><img src="http://upload.qianlong.com/2016/0906/1473129553587.jpg"/></mt-swipe-item>
				<mt-swipe-item class="slide2"><img src="http://upload.qianlong.com/2016/0906/1473129553587.jpg"/></mt-swipe-item>
				<mt-swipe-item class="slide3"><img src="http://upload.qianlong.com/2016/0906/1473129553587.jpg"/></mt-swipe-item>
			</mt-swipe>
		</div>

	</mt-content>
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtButton from '../../components/button.vue'
	import MtSwipe from '../../components/swipe.vue'
	import MtSwipeItem from '../../components/swipeItem.vue'

	export default{
		data () {
			return{
				viewpic: false
			}
		},

		methods: {
			showPic (){
				this.viewpic =true;
			},

			closePic () {
				this.viewpic =false;
			}
		},

		components: {
			MtContent,
			MtHeader,
			MtButton,
			MtSwipe,
			MtSwipeItem
		}
	}
</script>

<style>
	.photo-img-box{margin: 20px auto;text-align: center;}
	.photo-text-box{padding: 0 10px 20px;}
	.photo-text-box p{font-size: 14px;line-height: 20px;color: #363636;}
	.photo-frist-tap{overflow: hidden;}
	.photo-frist-ico-box{width: 107px;height: 107px;background-color: #f0f0f0;margin: 30px auto 10px;border-radius:5px;line-height: 107px;text-align: center;}
	.photo-frist-tap p{text-align: center;}
	.photo-tap .weui_cells:before,.photo-tap .weui_cells:after{border: 0;}
	.photo-tap .weui_uploader_input_wrp,.photo-tap .weui_uploader_file{margin-top: 8px;}
	.photo-tap .weui_uploader_file{position: relative;}
	.photo-del-btn{position: absolute;right: -8px;top:-8px;width: 16px;height: 16px;line-height:16px;text-align: center;color:#fff;border-radius:50%;background-color: #ed2533;}


</style>