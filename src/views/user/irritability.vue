<template>
	<mt-header fixed isgrey title="过敏史">
		<mt-button v-link="'/user/info'" icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<div class="leh-float-box">
		<mt-button type="green" @click="save">保存</mt-button>
	</div>
	<mt-content>
		<div class="allergic-list-box">
			<ul>
				<li class="allergic-list" v-for="n in 4">
					<span class="iconfont icon-wx-reduce-round"></span>
					<input type="text" placeholder="请输入过敏源"/>
				</li>
			</ul>
		</div>
		<div class="page-button-group">
			<button class="mint-button mint-button--transparent mint-button--large">
				<span class="mint-button-icon">
					<span class="iconfont icon-wx-add-round leh-c-green allergic-list-add-btn"></span>
				</span>
				<label class="mint-button-text">
					新增过敏史
				</label>
			</button>
		</div>

		<mt-address-picker :visible.sync="visible" @confirm="handleChange" :value.sync="value"></mt-address-picker>

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
				visible: false,
				province: '',
				city: '',
				sex: 1
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
			MtAddressPicker
		}
	}
</script>

<style>
	.allergic-list-box{padding-left:37px;margin-bottom: 16px;}
	.allergic-list{padding:10px 10px 10px 0;border-bottom: 1px solid #e5e5e5;position: relative;margin-top: 12px;}
	.allergic-list-box input{width: 100%;border: 0;font-size: 14px;color: #363636;}
	.allergic-list .icon-wx-reduce-round{position: absolute;top: 0;left:-37px;width: 37px;height: 39px;line-height: 39px;text-align: center;color: #ff6060;}
	.allergic-list-add-btn{margin: 6px;}
	.mint-button--transparent {
		font-size: 16px;
		color: #363636;
		text-align: left;
		background-color: transparent;
	}
</style>