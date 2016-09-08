<template xmlns:v-el="http://www.w3.org/1999/xhtml">
	<m-header :isindex="true">
		<m-nav path="/user/bank" label="添加银行卡" btn_name="保存" :is_btn="true"></m-nav>
	</m-header>
	<m-content class-name="profile-white">
		<ul class="card-add-box">
			<li class="card-add-list" @click="bank_name">
				<span class="fl">银行</span>
				<div class="card-add-bank leh-select-tap">
					<span v-el:bankname>工商银行</span>
					<span class="iconfont icon-mui-icon-r-btarr card-add-bank-select-ico"></span>
				</div>
			</li>
			<li class="card-add-list">
				<span class="fl">卡号</span>
				<input v-el:cardno type="number" placeholder="请输入银行卡卡号"/>
			</li>
			<li class="card-add-list">
				<span class="fl">开卡人</span>
				<input v-el:dridname type="text" placeholder="请输入开卡人真实姓名"/>
			</li>
		</ul>

		<m-popup type="button" v-el:savetips>
			<p>填写信息尚未保存，是否保存？</p>
		</m-popup>
		<m-popup type="noButton" v-el:inoftips>
			<span>填写信息不完整，请填写完整后再保存!</span>
		</m-popup>
		<m-popup type="noButton" v-el:popupbox>
			<ul>
				<li class="leh-select-tap-list">中国银行</li>
				<li class="leh-select-tap-list">工商银行</li>
				<li class="leh-select-tap-list">农商银行</li>
			</ul>
		</m-popup>
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
				console.log(this.$els.bankname.textContent,this.$els.cardno.value,this.$els.dridname.value)
				if(this.$els.bankname.textContent  === '' || this.$els.cardno.value === '' || this.$els.dridname.value === '') {
					this.$els.inoftips.style.display = 'block'
				}
			}
		},
		components: {
			MHeader,
			MNav,
			MContent,
			MPopup
		}
	}
</script>

<style>
	.card-add-box{padding: 0 0.8rem;overflow: hidden;}
	.card-add-list{overflow: hidden;margin-top: 2.4rem;}
	.card-add-list span.fl{font-size: 1.04rem;width: 18%;line-height: 1.92rem;}
	.card-add-bank{float: right;width: 82%;overflow: hidden;border-bottom: 1px solid #e5e5e5;padding: 0.36rem 0;font-size: 0.96rem;}
	.card-add-bank-select{float: left;width: 85%;font-size: 0.96rem;padding: 0.24rem 0;}
	.card-add-bank-select-ico{float: right;font-size: 0.8rem;}
	.card-add-list input{width: 82%;float: right;font-size: 0.96rem;height: auto;padding: 0.24rem;border: 0;border-bottom: 1px solid #e5e5e5;border-radius: 0;margin: 0;}
	.card-keep-box{position: fixed !important;top: 30% !important;left: 50% !important;width: 75%;padding: 1.4rem 1.2rem;margin-left: -37.5%;background-color: #fff;overflow: hidden;font-size: 1.04rem;}
	.profile-white {
		background-color: #fff;
		min-height: 100%;
	}
</style>