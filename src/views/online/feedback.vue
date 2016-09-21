<template>
	<mt-header fixed isgrey title="在线留言">
		<mt-button v-link="{path: from_path}" icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<mt-content class="page-popup">
		<div class="page-cell online-msg-ipt-box">
			<a class="mint-cell">
				<label class="mint-cell-title">
					<span class="mint-cell-text leh-c-green">选择医生</span>
					<input type="text" v-model="doctorname"/>
					<ul class="leh-select-drag-box" style="display: none">
						<li>博路定</li>
						<li>博路定</li>
						<li>博路定</li>
					</ul>
				</label>
				<div class="mint-cell-value">
					<span class="iconfont icon-wx-arr-down"></span>
				</div>
			</a>
			<a class="mint-cell">
				<label class="mint-cell-title">
					<span class="mint-cell-text leh-c-green">留言内容</span>
					<textarea rows="1" placeholder="请输入你需要留言的内容" v-model="msg_val"></textarea>
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
									<!--未上传图片时-->
									<div class="weui_uploader_input_wrp" style="display: none;">
										<span class="iconfont icon-wx-camera"></span>
										<input class="weui_uploader_input" type="file" accept="image/*" multiple="">
									</div>
									<!--已上传一张或一张以上图片时-->
									<div class="weui_uploader_input_wrp">
										<span class="iconfont icon-wx-add"></span>
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
			<mt-button size="large" type="green" @click="nestStep">下一步</mt-button>
		</div>

		<mt-popup v-show="show_popup" position="top" class="mint-popup-2" :modal="false">
			<p v-text="tips"></p>
		</mt-popup>
	</mt-content>
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtButton from '../../components/button.vue'
	import MtTranslate from '../../components/translate.vue'
	import MtTranslateItem from '../../components/translateItem.vue'
	import MtPopup from '../../components/popup.vue'
	import MessageBox from 'vue-msgbox'

	export default{
		route: {
			data ({from,next}) {
				this.from_path = from.path
				next()
			}
		},

		data () {
			return{
				msg_val:'',
				tips: '请填写留言内容',
				show_popup: false,
				from_path: ''
			}
		},

		methods: {
			msgBox () {

				/*MessageBox({
				 title: 'I\'m a title',
				 message: 'I\'m a message',
				 showCancelButton: true
				 }).then(action => {
				 console.log('callback:', action);
				 });*/
				MessageBox('提示', '一次只能添加5张图片');
			},

			nestStep () {
				if(this.msg_val === '') {
					this.show_popup = true
					return
				}
				this.$route.router.go('/user/noteDetail')
			}
		},

		events: {
			'footer-button-event' () {

				/*let msg = $(this.$refs.msg)

				this.msg_val = msg.val()*/


			}
		},

		watch: {
			show_popup(val) {
				if (val) {
					setTimeout(() => {
						this.show_popup = false;
					}, 2000);
				}
			}
		},

		components: {
			MtContent,
			MtHeader,
			MtButton,
			MtTranslate,
			MtTranslateItem,
			MtPopup
		}
	}
</script>

<style>

	.online-msg-ipt-box {overflow: hidden}
	.online-msg-ipt-box .mint-cell{padding-bottom: 10px;overflow: visible;}
	.online-msg-ipt-box .mint-cell:after,.online-msg-ipt-box .mint-cell:nth-last-of-type(1):before{border: 0;}
	.online-msg-ipt-box .mint-cell:before{left: 10px;transform: scaleY(1);}
	.online-msg-ipt-box input,.online-msg-ipt-box textarea{width: 100%;margin-top: 15px;border: 0;font-size: 14px;}
	.online-msg-ipt-box .mint-cell .mint-cell-value span{margin-top: 35px;padding-left: 10px;color: #aaa;}
	.online-msg-ipt-box .mint-cell .leh-select-drag-box{padding: 0 5px;}
	.online-msg-tap .weui_cells{margin-top: 0;}
	.online-msg-tap .weui_cells:before,.online-msg-tap .weui_cells:after{border: 0;}
	.online-msg-tap .weui_uploader_input_wrp,.online-msg-tap .weui_uploader_file{margin-top: 8px;}

</style>