<template>
	<mt-header fixed isgrey title="在线留言">
		<mt-button v-link="'/home'" icon="back" slot="left"></mt-button>
	</mt-header>
	<mt-content>
		<div class="page-cell online-msg-ipt-box">
			<a class="mint-cell">
				<label class="mint-cell-title">
					<span class="mint-cell-text leh-c-green">选择医生</span>
					<input type="text" />
				</label>
				<div class="mint-cell-value">
					<span>i</span>
				</div>
			</a>
			<a class="mint-cell">
				<label class="mint-cell-title">
					<span class="mint-cell-text leh-c-green">留言内容</span>
					<textarea rows="1" placeholder="请输入你需要留言的内容"></textarea>
				</label>
				<div class="mint-cell-value"></div>
			</a>
			<a class="mint-cell">
				<label class="mint-cell-title">
					<span class="mint-cell-text leh-c-green">上传图片</span>
				</label>
				<div class="mint-cell-value"></div>
			</a>
		</div>
		<div class="online-msg-tap-box">
			<div class="online-msg-tap">
				<div class="weui_cells weui_cells_form">
					<div class="weui_cell">
						<div class="weui_cell_bd weui_cell_primary">
							<div class="weui_uploader">
								<div class="weui_uploader_bd">
									<ul class="weui_uploader_files">
										<li class="weui_uploader_file" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"></li>
										<li class="weui_uploader_file" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"></li>
										<li class="weui_uploader_file" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)">
											<span class="online-msg-del-btn">-</span>
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
		<div class="leh-full-btn">
			<mt-button size="large" type="green">下一步</mt-button>
		</div>
	</mt-content>
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtButton from '../../components/button.vue'
	import MtTranslate from '../../components/translate.vue'
	import MtTranslateItem from '../../components/translateItem.vue'
	export default{
		data () {
			return{
				msg:'hello vue'
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
	.online-msg-ipt-box .mint-cell{padding-bottom: 10px;}
	.online-msg-ipt-box .mint-cell:after,.online-msg-ipt-box .mint-cell:nth-last-of-type(1):before{border: 0;}
	.online-msg-ipt-box .mint-cell:before{left: 10px;transform: scaleY(1);}
	.online-msg-ipt-box input,.online-msg-ipt-box textarea{width: 100%;margin-top: 15px;border: 0;font-size: 14px;}
	.online-msg-ipt-box .mint-cell .mint-cell-value span{margin-top: 35px;padding-left: 10px;}
	.online-msg-tap .weui_cells{margin-top: 0;}
	.online-msg-tap .weui_cells:before,.online-msg-tap .weui_cells:after{border: 0;}
	.online-msg-tap .weui_uploader_input_wrp,.online-msg-tap .weui_uploader_file{margin-top: 8px;}
	.online-msg-tap .weui_uploader_file{position: relative;}
	.online-msg-del-btn{position: absolute;right: -8px;top:-8px;width: 16px;height: 16px;line-height:16px;text-align: center;color:#fff;border-radius:50%;background-color: #ed2533;}

</style>