<template>
	<mt-header fixed isgrey title="个人信息">
		<mt-button v-link="'/home'" icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<div class="leh-float-box">
		<mt-button type="green" @click="save">保存</mt-button>
	</div>
	<div class="info-content">
		<div class="page-field info-box">
			<div class="page-part info-img-box">
				<div class="mint-field info-img-list">
					<a class="mint-cell mint-field-cell">
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
								<img src="../../assets/img/private.jpg" />
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
							<input readonly class="mint-field-core" placeholder="请输入姓名" type="text" value="ls.c">
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
							<div class="info-sex" :class="{'leh-active': sex}" @click="sex = 1">
								<span class="iconfont icon-wx-male"></span>
								<span>男</span>
							</div>
							<div class="info-sex" :class="{'leh-active': !sex}" @click="sex = 0">
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
							<input class="mint-field-core" placeholder="请输入生日" type="month" name="month">
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
							<input readonly class="mint-field-core" type="text" maxlength="10" @click="showPicker" :value="province + city">
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
							<input readonly class="mint-field-core" placeholder="请输入手机号" type="text" value="15800158000">
							<div class="mint-field-clear" style="display: none;">
								<i class="mintui mintui-field-error"></i>
							</div>
							<span class="mint-field-state is-default">
								<i class="mintui mintui-field-default"></i>
							</span>
						</div>
					</a>
				</div>
				<mt-field class="info-main-list" label="个人邮箱" placeholder="登录邮箱" istitle type="email" :attr="{ maxlength: 50 }"></mt-field>
			</div>
			<div class="leh-null-box"></div>
			<div class="page-part info-main-box">
				<div class="mint-field info-main-list">
					<a class="mint-cell mint-field-cell" v-link="{path: '/reg/disease', query: {'from': true}, replace: true}">
						<label class="mint-cell-title">
							<span class="mint-cell-text">所患疾病</span>
							<span class="leh-c-red">*</span>
						</label>
						<div class="mint-cell-value">
							<input class="mint-field-core leh-bg-white" type="text" disabled="disabled" v-model="disease">
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
							<input class="mint-field-core" placeholder="请输入日期" type="month" name="month">
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
					<a class="mint-cell mint-field-cell" v-link="{path: '/user/irritability', query: {'irritability': irritability}, replace: true}">
						<label class="mint-cell-title">
							<span class="mint-cell-text">过敏史</span>
						</label>
						<div class="mint-cell-value">
							<input class="mint-field-core leh-bg-white" type="text" disabled="disabled" v-model="irritability">
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
	import $ from 'zepto'

	export default{
		route: {
			data (transition) {

				if(transition.to.query.irritability !== undefined){
					this.irritability = transition.to.query.irritability
					if(this.irritability.length > 10) {
						this.irritability = this.irritability.substr(0,10) + '...'
					}
				}else{
					this.disease = transition.to.query.disease
				}
			}
		},

	  data () {
	    return{
		    visible: false,
		    province: '',
		    city: '',
		    sex: 1,
		    disease: '',
		    irritability: ''
	    }
	  },

		methods: {
			showPicker () {
				this.visible = true
			},
			handleChange(value) {
				this.province = value.province
				this.city = value.city
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
	.info-img{width: 37px;height: 37px;border-radius: 50%;overflow: hidden;position: absolute;right:10px;top:50%;margin-top: -18px}
	.info-main-list .mint-cell:before{left: 10px;}
	.info-sex{margin-right: 30px;font-size: 14px;color: #919191;height: 24px;line-height: 24px;}
	.info-sex.leh-active{color: #363636;}
	.info-sex .icon-wx-male,
	.info-sex .icon-wx-female{font-size: 14px;}
	.info-main-list .mint-cell-value .icon-wx-arr-right,
	.info-main-list .mint-cell-value .icon-wx-arr-down{color: #aaa;position: absolute;top:50%;right: 10px;margin-top: -8px}
</style>