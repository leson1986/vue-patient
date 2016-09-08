<template>
	<m-header :isindex="true">
		<m-nav path="/user/home" label="执业资格" btn_name="保存" :is_btn="true"></m-nav>
	</m-header>
	<m-content class-name="profile-white">
		<div class="js-qualification-main">
			<div class="qualification-title">
				<span class="fl">正面</span>
				<span class="fr js-qualification-edit">编辑</span>
			</div>
			<div class="qualification-main">
				<div class="qualification-img-box">
				</div>
			</div>
		</div>
		<div class="qrcode-rubbishbox"></div>
		<div class="js-qualification-main">
			<div class="qualification-title">
				<span class="fl">反面</span>
				<span class="fr js-qualification-edit">编辑</span>
			</div>
			<div class="qualification-main">
				<div class="qualification-img-box">
				</div>
			</div>
		</div>
	</m-content>
</template>
<script>
	import MHeader from '../../components/mHeadBar'
	import MNav from '../../components/mNav'
	import MContent from '../../components/mContent'
	import MPopup from '../../components/mPopup'

	export default{
		data () {
			return{
				isSave: false,
				isTips: false,
				isChange: false
			}
		},
		methods: {
			bank_name () {
				this.$els.popupbox.style.display = 'block'
			}
		},
		events: {
			'child-event' () {
				// 事件回调内的 `this` 自动绑定到注册它的实例上
				alert('保存成功')
			}
		},
		components: {
			MHeader,
			MNav,
			MContent
		}
	}
</script>

<style>
	.qualification-title{height: 3.4rem;line-height: 3.4rem;padding: 0 0.8rem;border-bottom: 1px solid #e5e5e5;overflow: hidden;}
	.qualification-title span.fl{font-size: 1.04rem;}
	.qualification-title span.fr{font-size: 0.96rem;color: #919191;padding-left: 20%;}
	.qualification-main{padding:1.12rem 2.4rem;}
	.qualification-img-box{min-height: 12.32rem;border: 1px solid #e5e5e5;border-radius: 10px;overflow: hidden;}
	.qualification-img-box img{width: 100%;}
	.profile-white {background-color: #fff;}
</style>