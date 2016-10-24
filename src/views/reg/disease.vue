<template>
	<mt-header fixed isgrey title="选择病种">
		<mt-button v-link="{path: '/user/info', query: {'toinfo': true}}" icon="arr-left" slot="left" v-if="is_info"></mt-button>
	</mt-header>

	<div class="leh-float-box">
		<mt-button type="green" :class="{'leh-bg-grey-btn': !is_conf}" @click="confirm">确定</mt-button>
	</div>

	<mt-content>
		<div class="page-cell register-entity-box">
			<mt-cell
					:istitle="true"
					v-for="list in lists"
					:title="list"
					@click="selected(list)"
					:class="{'leh-active': activeName == list}"
			></mt-cell>
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
	import MtButton from '../../components/button.vue'
	import MtCell from '../../components/cell.vue'
	import MtPopup from '../../components/popup.vue'
	import {putJson, optionData} from 'util'
	import $ from 'zepto'

	export default{
		route: {
			data ({to, next}) {
				this.is_info = to.query.info
				this.diseaseInfo = to.query.diseaseinfo

				if(this.diseaseInfo !== '') {
					this.selected(this.diseaseInfo)
				}

				next()
			}
		},

	  data () {
	    return{
		    is_conf: false,
		    is_info: false,
		    activeName: '',
		    disease: '', // 选取的值
		    lists: optionData().patientDisease, // 病种列表
		    item: [],
		    diseaseInfo: '', // 病种
		    show_popup: false, // 提示
		    tips: '', // 提示内容
	    }
	  },

		ready() {
		},

		events: {
		},

		methods: {
			// 切换病种选项
			selected: function(listName) {
				this.activeName = listName
				this.disease = listName
				// 激活按钮
				this.is_conf = true
			},

			confirm () {

				let _self = this
				if(_self.diseaseInfo === _self.disease){

					_self.show_popup = true
					_self.tips = '病种没修改'
					return
				}else {

					_self.show_popup = true
					_self.tips = '保存成功'
				}

				setTimeout(() => {

					if(_self.is_conf && _self.is_info){

						_self.$route.router.go({path: '/user/info', query: {'toinfo': true, 'disease': _self.disease}})
					}
					if(_self.is_conf && !_self.is_info){

						putJson('api/patient/disease/'+ _self.disease, '', (rsp)=>{
							_self.$route.router.go('/home')
						},_self)
					}
				},2000)


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
			MtCell,
			MtPopup
		}
	}
</script>

<style>
	.register-entity-box .mint-cell{line-height: 25px;}
	.register-entity-box .mint-cell:after{border-top: 0;}
	.register-entity-box .mint-cell:before{border-bottom-color: #e5e5e5;left: 0;}
	.register-entity-box .mint-cell.leh-active{color: #1faa2b;background-color: #f2f2f2;}
</style>