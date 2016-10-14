<template>
	<mt-header fixed isgrey title="在线留言">
		<mt-button v-link="{path: '/home', query: {tohome: true}}" icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<mt-content class="page-popup">
		<div class="page-cell online-msg-ipt-box">
			<a class="mint-cell">
				<label class="mint-cell-title">
					<span class="mint-cell-text leh-c-green">选择医生</span>
					<input type="text" v-model="name" :value="name" :id="doctor_id"/>
					<ul class="leh-select-drag-box" v-if="name && show_name">
						<li v-for="items in users | filterBy name in 'name'"  @click="getName(items.name)">{{ items.name }}</li>
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
				<!--<div class="weui_cells weui_cells_form">
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
									&lt;!&ndash;未上传图片时&ndash;&gt;
									<div class="weui_uploader_input_wrp" style="display: none;">
										<span class="iconfont icon-wx-camera"></span>
										<input class="weui_uploader_input" type="file" accept="image/*" multiple="">
									</div>
									&lt;!&ndash;已上传一张或一张以上图片时&ndash;&gt;
									<div class="weui_uploader_input_wrp">
										<span class="iconfont icon-wx-add"></span>
										<input class="weui_uploader_input" type="file" accept="image/*" multiple="">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>-->
				<div class="photo-tap">
					<mt-picture>
						<mt-pic-list v-for="items in picItems" :reddot="items.unread"  @click="showPic(items)">
							<img :src="items"/>
						</mt-pic-list>
						<div class="weui_uploader_input_wrp" style="">
							<span class="iconfont icon-wx-camera"></span>
							<input class="weui_uploader_input" type="file" accept="image/*" multiple="">
						</div>
						<div class="weui_uploader_input_wrp" @click="addPic">
							<span class="iconfont icon-wx-add"></span>
						</div>
					</mt-picture>
				</div>
			</div>
		</div>
		<div class="leh-full-btn">
			<mt-button size="large" type="green" @click="saveMsg">发布</mt-button>
		</div>

		<mt-popup v-show="show_popup" position="top" class="mint-popup-2" :modal="false">
			<p v-text="tips"></p>
		</mt-popup>
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
	import MtPopup from '../../components/popup.vue'
	import MtPicture from '../../components/picture.vue'
	import MtPicList from '../../components/picList.vue'
	import MessageBox from 'vue-msgbox'
	import {getJson, postJson, wrapPic} from 'util'

	export default{
		route: {
			data ({from,next}) {

				let _self = this
				_self.from_path = from.path
				next()
			}
		},

		data () {
			return{
				msg_val:'',
				tips: '请填写留言内容',
				show_popup: false,
				from_path: '',
				show_name: 1,
				name: '', // 医生名称
				doctor_id: '', // 医生ID
				old_name: '',
				users: [], // 医生列表
				picItems: [
						'http://7jpp73.com1.z0.glb.clouddn.com/1.jpg',

						'http://7jpp73.com1.z0.glb.clouddn.com/2.jpg',

						'http://7jpp73.com1.z0.glb.clouddn.com/3.jpg',

						'http://7jpp73.com1.z0.glb.clouddn.com/4.jpg',

						'http://7jpp73.com1.z0.glb.clouddn.com/5.jpg'

				], // 图片数组
			}
		},

		created () {

			let _self = this
			// 患者评价
			getJson('api/doctors/simple', '', (rsp)=>{
				_self.users = rsp
				_self.name = rsp[0].name
				_self.getName(_self.name)
			},_self)
		},

		methods: {
			msgBox () {
				MessageBox('提示', '一次只能添加5张图片');
			},

			// 在线留言
			saveMsg () {

				let _self = this
				if(_self.msg_val === '') {
					_self.show_popup = true
					return
				}
				let params = {
					"drId": 0,
					"content": _self.msg_val,
					"urls": [
						"string"
					]
				}

				postJson('api/PatientMessages', '', (rsp)=>{

					_self.$route.router.go({path: '/user/noteDetail', query: {id: rsp}})
				},_self)

			},

			getName (names) {
				this.name = names
				this.old_name = names
				this.show_name = !this.show_name
				console.log(this.show_name)
			},

			showPic () {
				wrapPic(this.picItems, '在线留言') // 查看图片
			},
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
			},

			name (val, oldVal) {

				if(val == this.old_name) {
					this.show_name = 0
				}else {
					this.show_name = 1
				}
			}
		},

		components: {
			MtContent,
			MtHeader,
			MtButton,
			MtTranslate,
			MtTranslateItem,
			MtPopup,
			MtPicture,
			MtPicList
		}
	}
</script>

<style>
	@import '../../assets/css/normalize.css';
	@import '../../assets/css/MPreview.mobile.css';


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