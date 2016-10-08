<template>
	<mt-header fixed isgrey title="转换中单据">
		<mt-button v-link="{path: '/online/bill', query: {actives: 'turn'}, replace: true}" icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<mt-content>
		<div class="transform-list-box">
			<mt-translate>
				<mt-translate-item
						v-for="items in turnDatas"
						:name="items.id"
						:delbtn="items.isFail">
					<div class="transform-list-img-box">
						<img :src="items.url"/>
						<span class="transform-img-ico iconfont icon-wx-close" v-if="items.isFail"></span>
					</div>
					<div class="transform-list-text" v-if="items.isFail">
						<p>图片过于模糊或无法识别</p>
						<p>点击重新上传</p>
					</div>
					<span class="fr" v-if="!items.isFail">
						转换中
					</span>
					<span class="fr leh-c-red" v-else>
						转换失败
					</span>
				</mt-translate-item>
			</mt-translate>
		</div>
	</mt-content>
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtButton from '../../components/button.vue'
	import MtTranslate from '../../components/translate.vue'
	import MtTranslateItem from '../../components/translateItem.vue'
	import MessageBox from 'vue-msgbox'
	import {getJson, delJson} from 'util'

	export default{
		route: {
			data (transition) {

				let _self = this
				_self.dates = transition.to.query.date

				_self.getTurnList(_self.dates)

			}
		},

	  data () {
	    return{
	      msg:'hello vue',
		    ids: '',
		    dates: '', // 转换中日期
		    turnDatas: [], // 转换中数组,
		    turnTitle: '',
	    }
	  },

		methods: {

			msgBox (ids) {

				let _self = this
				MessageBox({
				 title: '提示',
				 message: '是否删除此单据?',
				 showCancelButton: true
				 }).then(action => {

					if(action === 'confirm'){

						delJson('api/filecheck/'+ ids,'',(rcodes, msgs) => {
							_self.getTurnList(_self.dates)

						}, _self)
					}
				 });
			},

			// 获取转换中详情
			getTurnList (dates) {

				let _self = this
				getJson('api/filecheck/'+ dates,'',(rsp) => {
					_self.turnDatas = rsp

				}, _self)
			}
		},

		events: {
			'handle-del' (e) {
				this.ids = $(e.target).attr('id')
				this.msgBox(this.ids)
			}
		},

		components: {
			MtContent,
			MtHeader,
			MtButton,
			MtTranslate,
			MtTranslateItem
		}
	}
</script>

<style>
	.transform-list-img-box{width: 40px;height: 50px;background-color:#e5e5e5;float: left;text-align: center;position: relative;}
	.transform-list-img-box img{height: auto;width: auto;max-height: 100%;max-width: 100%;}
	.transform-list-text{float: left;padding-top: 10px;padding-left: 20px;}
	.transform-list-text p{font-size: 12px;color: #919191;}
	.transform-list-box span.fr{line-height: 50px;font-size: 14px;}
	.transform-img-ico{position: absolute;bottom: -7px;right: -7px;font-size: 14px;font-weight:bold;color: #ff6060;}
</style>