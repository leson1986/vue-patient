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
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtButton from '../../components/button.vue'
	import MtCell from '../../components/cell.vue'
	import {optionData} from 'util'
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
		    disease: '',
		    lists: optionData().patientDisease,
		    item: [],
		    diseaseInfo: '', // 病种
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
				if(this.is_conf && this.is_info){
					this.$route.router.go({path: '/user/info', query: {'toinfo': true, 'disease': this.disease}})
				}if(this.is_conf && !this.is_info){
					this.$route.router.go('/home')
				}
			}
		},

		components: {
			MtContent,
			MtHeader,
			MtButton,
			MtCell
		}
	}
</script>

<style>
	.register-entity-box .mint-cell{line-height: 25px;}
	.register-entity-box .mint-cell:after{border-top: 0;}
	.register-entity-box .mint-cell:before{border-bottom-color: #e5e5e5;left: 0;}
	.register-entity-box .mint-cell.leh-active{color: #1faa2b;background-color: #f2f2f2;}
</style>