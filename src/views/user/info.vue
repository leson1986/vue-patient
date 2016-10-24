<template>
	<mt-header fixed isgrey title="个人信息">
		<mt-button v-link="{path: '/home'}" icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<div class="leh-float-box">
		<mt-button type="green" @click="saveInfo">保存</mt-button>
	</div>
	<div class="info-content">
		<div class="page-field info-box">
			<div class="page-part info-img-box">
				<div class="mint-field info-img-list">
					<a class="mint-cell mint-field-cell" @click="editPic">
						<label class="mint-cell-title">
							<span class="mint-cell-text">头像</span>
						</label>
						<div class="mint-cell-value">
							<input class="mint-field-core leh-bg-white" type="text" disabled="disabled">
							<div class="mint-field-clear" style="display: none;">
								<i class="mintui mintui-field-error"></i>
							</div>
							<span class="mint-field-state is-default">
									<i class="mintui mintui-field-default"></i>
								</span>
							<div class="info-img">
								<img :src="photo" v-if="photo !== null"/>
								<img src="../../assets/img/private.jpg" v-if="photo === null"/>
							</div>
						</div>
					</a>
				</div>
			</div>
			<div class="leh-null-box"></div>
			<div class="page-part info-main-box">
				<div class="mint-field info-main-list">
					<a class="mint-cell mint-field-cell">
						<label class="mint-cell-title">
							<span class="mint-cell-text">用户名</span>
						</label>
						<div class="mint-cell-value">
							<input readonly class="mint-field-core" placeholder="请输入姓名" type="text" :value="name">
							<div class="mint-field-clear" style="display: none;">
								<i class="mintui mintui-field-error"></i>
							</div>
							<span class="mint-field-state is-default">
									<i class="mintui mintui-field-default"></i>
								</span>
						</div>
					</a>
				</div>
				<div class="mint-field info-main-list">
					<a class="mint-cell mint-field-cell">
						<label class="mint-cell-title">
							<span class="mint-cell-text">性别</span>
						</label>
						<div class="mint-cell-value">
							<div class="info-sex" :class="{'leh-active': gender === 1 }" @click="gender = 1">
								<span class="iconfont icon-wx-male"></span>
								<span>男</span>
							</div>
							<div class="info-sex" :class="{'leh-active': gender === 2}" @click="gender = 2">
								<span class="iconfont icon-wx-female"></span>
								<span>女</span>
							</div>
						</div>
					</a>
				</div>
				<div class="mint-field info-main-list">
					<a class="mint-cell mint-field-cell">
						<label class="mint-cell-title">
							<span class="mint-cell-text">生日</span>
						</label>
						<div class="mint-cell-value">
							<input class="mint-field-core" placeholder="请输入生日" type="date" v-model="birthday"  :value="birthday">
							<div class="mint-field-clear" style="display: none;">
								<i class="mintui mintui-field-error"></i>
							</div>
							<span class="mint-field-state is-default">
									<i class="mintui mintui-field-default"></i>
								</span>
							<span class="iconfont icon-wx-arr-down"></span>
						</div>
					</a>
				</div>
				<div class="mint-field info-main-list">
					<a class="mint-cell mint-field-cell">
						<label class="mint-cell-title">
							<span class="mint-cell-text">省市</span>
						</label>
						<div class="mint-cell-value">
							<input readonly class="mint-field-core" type="text" maxlength="10" @click="showPicker" :value="nativePlace">
							<div class="mint-field-clear" style="display: none;">
								<i class="mintui mintui-field-error"></i>
							</div>
							<span class="mint-field-state is-default">
									<i class="mintui mintui-field-default"></i>
								</span>
							<span class="iconfont icon-wx-arr-down"></span>
						</div>
					</a>
				</div>
				<div class="mint-field info-main-list">
					<a class="mint-cell mint-field-cell">
						<label class="mint-cell-title">
							<span class="mint-cell-text">手机号</span>
						</label>
						<div class="mint-cell-value">
							<input readonly class="mint-field-core" placeholder="请输入手机号" type="text"  :value="mobile">
							<div class="mint-field-clear" style="display: none;">
								<i class="mintui mintui-field-error"></i>
							</div>
							<span class="mint-field-state is-default">
								<i class="mintui mintui-field-default"></i>
							</span>
						</div>
					</a>
				</div>
				<div class="mint-field info-main-list">
					<a class="mint-cell mint-field-cell">
						<label class="mint-cell-title">
							<span class="mint-cell-text">个人邮箱</span>
						</label>
						<div class="mint-cell-value">
							<input class="mint-field-core" maxlength="50" placeholder="登录邮箱" type="email" v-model="email"  :value="email">
							<div class="mint-field-clear" style="display: none;">
								<i class="mintui mintui-field-error"></i>
							</div>
							<span class="mint-field-state is-default">
								<i class="mintui mintui-field-default"></i>
							</span>
						</div>
					</a>
				</div>
			</div>
			<div class="leh-null-box"></div>
			<div class="page-part info-main-box">
				<div class="mint-field info-main-list">
					<a class="mint-cell mint-field-cell" v-link="{path: '/reg/disease', query: {info: true, diseaseinfo: disease}, replace: true}">
						<label class="mint-cell-title">
							<span class="mint-cell-text">所患疾病</span>
							<span class="leh-c-red">*</span>
						</label>
						<div class="mint-cell-value">
							<input class="mint-field-core leh-bg-white" type="text" readonly v-model="disease" :value="disease">
							<div class="mint-field-clear" style="display: none;">
								<i class="mintui mintui-field-error"></i>
							</div>
							<span class="mint-field-state is-default">
									<i class="mintui mintui-field-default"></i>
								</span>
							<span class="iconfont icon-wx-arr-right"></span>
						</div>
					</a>
				</div>
				<div class="mint-field info-main-list">
					<a class="mint-cell mint-field-cell">
						<label class="mint-cell-title">
							<span class="mint-cell-text">患病起始年限</span>
						</label>
						<div class="mint-cell-value">
							<input class="mint-field-core" placeholder="请输入日期" type="month" name="month" v-model="diseaseHis" :value="diseaseHis">
							<div class="mint-field-clear" style="display: none;">
								<i class="mintui mintui-field-error"></i>
							</div>
							<span class="mint-field-state is-default">
									<i class="mintui mintui-field-default"></i>
								</span>
							<span class="iconfont icon-wx-arr-down"></span>
						</div>
					</a>
				</div>
				<div class="mint-field info-main-list">
					<a class="mint-cell mint-field-cell" v-link="{path: '/user/irritability', query: {info: notAlllergicHis}, replace: true}">
						<label class="mint-cell-title">
							<span class="mint-cell-text">过敏史</span>
						</label>
						<div class="mint-cell-value">
							<input class="mint-field-core leh-bg-white" type="text" readonly v-model="alllergicHis" :value="alllergicHis">
							<div class="mint-field-clear" style="display: none;">
								<i class="mintui mintui-field-error"></i>
							</div>
							<span class="mint-field-state is-default">
									<i class="mintui mintui-field-default"></i>
								</span>
							<span class="iconfont icon-wx-arr-right"></span>
						</div>
					</a>
				</div>
			</div>
		</div>

		<mt-address-picker :visible.sync="visible" @confirm="handleChange" :value.sync="value"></mt-address-picker>

	</div>
	<mt-modal v-if="visible"></mt-modal>
</template>
<script>
	import MtContent from '../../components/content.vue'
	import MtHeader from '../../components/header.vue'
	import MtCell from '../../components/cell.vue'
	import MtButton from '../../components/button.vue'
	import MtAddressPicker from '../../components/address-picker.vue'
	import MtModal from '../../components/modal.vue'
	import MtField from '../../components/field.vue'
	import MessageBox from 'vue-msgbox'
	import {getJson, putJson} from 'util'
	import {pageConfig} from 'wxconfig'
	import wx from 'wx'
	import $ from 'zepto'

	export default{
		route: {
			data ({to, next}) {

				pageConfig()

				let _self = this
				if(to.query.alllergicHis !== undefined){
					_self.alllergicHis = to.query.alllergicHis
					_self.notAlllergicHis = to.query.alllergicHis
					if(_self.alllergicHis.length > 10) {
						_self.alllergicHis = _self.alllergicHis.substr(0,10) + '...'
					}
				}else if(to.query.disease !== undefined){
					_self.disease = to.query.disease
				}

				_self.formPage = to.query.toinfo || false
				if(_self.formPage) return // 是否其他页面返回

				// 医院地址
				getJson('api/patient/myinfo', '', (rsp)=>{

					_self.name = rsp.name
					_self.mobile = rsp.mobile
					_self.gender = rsp.gender
					_self.birthday = rsp.birthday
					_self.notAlllergicHis = rsp.alllergicHis
					_self.photo = rsp.photo
					_self.email = rsp.email
					_self.disease = rsp.disease
					_self.diseaseHis = rsp.diseaseHis
					_self.nativePlace = rsp.nativePlace

					// 超过10个字加省略号
					if(_self.notAlllergicHis.length > 10) {
						_self.alllergicHis = _self.notAlllergicHis.substr(0,10) + '...'
					}else {
						_self.alllergicHis = _self.notAlllergicHis
					}

				},_self)
				next()
			}
		},

	  data () {
	    return{
		    visible: false,
		    province: '',
		    city: '',
		    sex: 1,
		    formPage: '', // 来自其他页面
		    infoItems: '', // 信息
		    name: '', // 姓名 ,
		    mobile: '', // 手机 ,
		    gender: '', // 性别 ,
		    birthday: '', // 生日 ,
		    alllergicHis: '', // 过敏史 ,
		    notAlllergicHis: '', // 未省略过的过敏史 ,
		    photo: '', // 头像 ,
		    serverId: '', // 上传图片返回的serverId
		    email: '', // 邮箱 ,
		    disease: '', // 所患疾病 ,
		    diseaseHis: '', // 患病年限 ,
		    nativePlace: '', // 省市
	    }

	  },

		methods: {
			showPicker () {
				this.visible = true
			},
			handleChange(value) {
				this.nativePlace = value.province + ' ' + value.city
				/*this.province = value.province
				this.city = value.city*/
			},

			// 保存
			saveInfo () {

				let _self = this
				let params = {
					"gender": _self.gender,
					"birthday": _self.birthday,
					"alllergicHis": _self.notAlllergicHis,
					"serverId": _self.serverId,
					"email": _self.email,
					"disease": _self.disease,
					"diseaseHis": _self.diseaseHis,
					"nativePlace": _self.nativePlace
				}

				putJson('api/patient/myinfo', params, (rsp)=>{
					MessageBox('提示','修改成功！')
				},_self)
			},

			// 修改头像
			editPic () {

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

					},
					fail: function(res) {
						alert(JSON.stringify(res));
					}
				});

			}
		},

		components: {
			MtContent,
			MtHeader,
			MtCell,
			MtButton,
			MtAddressPicker,
			MtModal,
			MtField
		}
	}
</script>

<style>
	.info-content {padding: 40px 0;}
	.info-box .mint-cell-text,.info-box input{font-size: 14px;background-color: transparent;}
	.info-img-box,.info-main-box{margin-bottom: 0;}
	.info-main-box:nth-last-of-type(1){margin-bottom: 0;}
	.info-img-list .mint-cell:after,
	.info-img-list .mint-cell:before,
	.info-main-list .mint-cell:after,
	.info-main-box .info-main-list:nth-last-of-type(1) .mint-cell:before{border: 0;}
	.info-main-list .mint-field-state{display: none}
	.info-main-box .mint-cell{padding: 15px 10px;}
	.info-img{width: 37px;height: 37px;border-radius: 50%;overflow: hidden;position: absolute;right:10px;top:50%;margin-top: -18px;text-align: center;}
	.info-img img{width: 100%;min-height: 100%;height: auto}
	.info-img-list .mint-cell-text{line-height: 37px}
	.info-main-list .mint-cell:before{left: 10px;}
	.info-sex{margin-right: 30px;font-size: 14px;color: #919191;height: 24px;line-height: 24px;}
	.info-sex.leh-active{color: #363636;}
	.info-sex .icon-wx-male,
	.info-sex .icon-wx-female{font-size: 14px;}
	.info-main-list .mint-cell-value .icon-wx-arr-right,
	.info-main-list .mint-cell-value .icon-wx-arr-down{color: #aaa;position: absolute;top:50%;right: 10px;margin-top: -8px}
	.info-main-list input{position: relative;display:block;}

</style>