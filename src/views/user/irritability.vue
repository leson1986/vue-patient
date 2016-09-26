<template>
	<mt-header fixed isgrey title="过敏史">
		<mt-button icon="arr-left" slot="left" @click="backFun"></mt-button>
	</mt-header>
	<div class="leh-float-box">
		<mt-button :type="btn_color" @click="save">保存</mt-button>
	</div>

	<mt-content class="page-popup">
		<div class="allergic-list-box">
			<ul>
				<li class="allergic-list" v-for="(ind,n) in m" v-if="{false: ind != 0}">
					<span class="iconfont icon-wx-reduce-round" @click="delIrritability($event)"></span>
					<input type="text" placeholder="请输入过敏原" maxlength="10" @input="doThat"/>
				</li>
			</ul>
		</div>
		<div class="page-button-group">
			<button class="mint-button mint-button--transparent mint-button--large" @click="addIrritability">
				<span class="mint-button-icon">
					<span class="iconfont icon-wx-add-round leh-c-green allergic-list-add-btn"></span>
				</span>
				<label class="mint-button-text">
					新增过敏史
				</label>
			</button>
		</div>

	</mt-content>
	<div class="page-popup">
		<mt-popup v-show="show_popup" position="top" class="mint-popup-2" :modal="false">
			<p v-text="tips"></p>
		</mt-popup>
		<div v-show="show_popup" class="maskbox"></div>
	</div>
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtCell from '../../components/cell.vue'
	import MtButton from '../../components/button.vue'
	import MtPopup from '../../components/popup.vue'
	import MessageBox from 'vue-msgbox'
	import $ from 'zepto'

	export default{
		route: {
			data (transition) {
				this.irritability = transition.to.query.irritability
				this.btn_color = 'grey'
				this.isbutton = false
			}
		},

		data () {
			return{
				visible: false,
				province: '',
				city: '',
				m: 0,
				sex: 1,
				tips: '',
				show_popup: false,
				irritability: '',
				btn_color: 'grey',
				isbutton: false,
				changeinfo: false,
				kfc: ''
			}
		},

		methods: {
			save () {

				this.irritability = ''
				let inputs = $('.allergic-list-box').find('li input')

				if(!this.isbutton) return

				for(let i=0; i<inputs.length; i++) {
					let item = inputs[i]
					if($(item).val() === '') {
						this.show_popup = true
						this.tips = '请填写过敏原信息'
						return
					}

					this.irritability += i>0 ? '、' + $(item).val() : $(item).val()
				}

				this.show_popup = true
				this.tips = '保存成功'
				setTimeout(() => {
					this.$route.router.go({path: '/user/info', query: {'irritability': this.irritability}})
				},2500)
			},

			showPicker () {
				this.visible = true
			},

			addIrritability () {
				this.btn_color = 'green'
				this.isbutton = true
				this.m = this.m + 1
			},
			delIrritability (e) {
				this.btn_color = 'green'
				this.isbutton = true
				$(e.target).parent().remove()
			},

			backFun () {
				if(this.isbutton){

					MessageBox({
						title: '提示',
						message: '过敏史已修改，是否保存',
						showCancelButton: true
					}).then(action => {
						if(action === 'confirm'){
							this.save()
						}else {
							this.$route.router.go({path: '/user/info'})
						}
					});
				}else{
					this.$route.router.go({path: '/user/info'})
				}

			},

			doThat () {
				this.btn_color = 'green'
				this.isbutton = true
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
			MtCell,
			MtButton,
			MtPopup
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