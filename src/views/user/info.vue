<template>
	<mt-header fixed isgrey title="个人信息">
		<mt-button v-link="'/home'" icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<div class="leh-float-box">
		<mt-button type="green" @click="save">保存</mt-button>
	</div>
	<mt-content class-name="leh-bg-grey-body">
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
			<div class="page-part info-main-box">
				<div class="mint-field info-main-list">
					<a class="mint-cell mint-field-cell">
						<label class="mint-cell-title">
							<span class="mint-cell-text">用户名</span>
						</label>
						<div class="mint-cell-value">
							<input class="mint-field-core" placeholder="请输入姓名" type="text" maxlength="10">
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
							<div class="info-sex leh-active">
								<span class="iconfont icon-wx-male"></span>
								<span>男</span>
							</div>
							<div class="info-sex">
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
							<input class="mint-field-core" placeholder="请输入生日" type="date">
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
							<input class="mint-field-core" type="text" maxlength="10">
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
							<span class="mint-cell-text">手机</span>
						</label>
						<div class="mint-cell-value">
							<input class="mint-field-core" placeholder="请输入手机号码" type="number">
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
					<a class="mint-cell mint-field-cell is-nolabel">
						<label class="mint-cell-title">
							<span class="mint-cell-text">个人邮箱</span>
						</label>
						<div class="mint-cell-value">
							<input class="mint-field-core" placeholder="登录邮箱" type="email">
							<div class="mint-field-clear" style="display: none;">
								<i class="mintui mintui-field-error"></i>
							</div> <span class="mint-field-state is-default">
									<i class="mintui mintui-field-default"></i>
								</span>
						</div>
					</a>
				</div>
			</div>
			<div class="page-part info-main-box">
				<div class="mint-field info-main-list">
					<a class="mint-cell mint-field-cell">
						<label class="mint-cell-title">
							<span class="mint-cell-text">所患疾病</span>
							<span class="leh-c-red">*</span>
						</label>
						<div class="mint-cell-value">
							<input class="mint-field-core leh-bg-white" type="text" disabled="disabled">
							<div class="mint-field-clear" style="display: none;">
								<i class="mintui mintui-field-error"></i>
							</div>
							<span class="mint-field-state is-default">
									<i class="mintui mintui-field-default"></i>
								</span>
							<span class="iconfont icon-wx-arr-right"></span>
						</div>
					</a>

					<div><p class="page-picker-desc">地址: {{ addressProvince }} {{ addressCity }}</p></div>
				<div class="mint-field info-main-list">
					<a class="mint-cell mint-field-cell">
						<label class="mint-cell-title">
							<span class="mint-cell-text">患病起始年限</span>
						</label>
						<div class="mint-cell-value">
							<input class="mint-field-core" placeholder="请输入日期" type="date">
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
							<span class="mint-cell-text">过敏史</span>
						</label>
						<div class="mint-cell-value">
							<input class="mint-field-core leh-bg-white" type="text" disabled="disabled">
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

		<mt-button @click="showPicker" size="large">设定初始值</mt-button>
		<mt-address-picker :visible.sync="visible"></mt-address-picker>
	</mt-content>
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtCell from '../../components/cell.vue'
	import MtButton from '../../components/button.vue'
	import MtAddressPicker from '../../components/address-picker.vue'
	import $ from 'zepto'

	export default{
	  data () {
	    return{
		    visible: false
	    }
	  },

		methods: {
			showPicker () {
				this.visible = true
				console.log(this.visible)
			},
			handleChange(value) {

			}
		},

		components: {
			MtContent,
			MtHeader,
			MtCell,
			MtButton,
			MtAddressPicker
		}
	}
</script>

<style>
	.info-box .mint-cell-text,.info-box input{font-size: 14px;}
	.info-img-box,.info-main-box{margin-bottom: 8px;}
	.info-main-box:nth-last-of-type(1){margin-bottom: 0;}
	.info-img-list .mint-cell:after,
	.info-img-list .mint-cell:before,
	.info-main-list .mint-cell:after,
	.info-main-box .info-main-list:nth-last-of-type(1) .mint-cell:before{border: 0;}
	.info-main-box .mint-cell{padding: 15px 10px;}
	.info-img{width: 37px;height: 37px;border-radius: 50%;overflow: hidden;float: right;}
	.info-main-list .mint-cell:before{left: 10px;}
	.info-sex{margin-right: 30px;font-size: 14px;color: #919191;height: 24px;line-height: 24px;}
	.info-sex.leh-active{color: #363636;}
	.info-sex .icon-wx-male,
	.info-sex .icon-wx-female{font-size: 14px;}
	.info-main-list .mint-cell-value .icon-wx-arr-right,
	.info-main-list .mint-cell-value .icon-wx-arr-down{color: #aaa;}
</style>