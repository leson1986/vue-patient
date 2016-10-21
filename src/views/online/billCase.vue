<template>
	<mt-header fixed isgrey title="手写病历">
		<mt-button v-link="{path: '/online/bill', query: {tobill: true, actives: 'case'}, replace: true}" icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<mt-content>
		<div class="page-cell">
			<a class="mint-cell document-written-title">
				<span class="mint-cell-mask"></span>
				<label class="mint-cell-title">
					<span class="mint-cell-text">手写病历</span>
				</label>
				<div class="mint-cell-value">
					<span class="leh-c-green">{{ dates }}</span>
				</div>
			</a>
		</div>
		<mt-picture class-name="document-written-content">
			<mt-pic-list v-for="items in handwritingItems" :reddot="items.unread"  @click="showPic(items.url)">
				<img :src="items.url"/>
				<p>{{ items.createTime }}</p>
			</mt-pic-list>
		</mt-picture>

	</mt-content>

	<!-- 用于展示插件的容器 -->
	<div class="overlay" id="overlay"></div>
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtPicture from '../../components/picture.vue'
	import MtPicList from '../../components/picList.vue'
	import MtButton from '../../components/button.vue'
	import {getJson, postJson, wrapPic} from 'util'

	export default{
		route: {
			data ({to, next}) {

				let _self = this
				_self.dates = to.query.dates

				next()
			}
		},

	  data () {
	    return{
	      isdot: false,
		    viewpic: false,
		    dates: '', // 手写病历日期
		    handwritingItems: [] // 手写病历信息列表

	    }
	  },

		created() {

	  	this.getHandwriting()
		},

		methods: {
			showPic (urls){

				wrapPic(urls, '手写病历') // 查看图片
			},

			closePic () {
				this.viewpic =false;
			},

			// 获取手写病历信息
			getHandwriting () {
				let _self = this
				getJson('api/Handwriting', '', (rsp) => {

					_self.handwritingItems  = rsp
				}, _self)
			}
		},

		components: {
			MtContent,
			MtHeader,
			MtPicture,
			MtPicList,
			MtButton
		}
	}
</script>

<style>
	@import '../../assets/css/normalize.css';
	@import '../../assets/css/MPreview.mobile.css';

	.document-written-title:after{border: 0;}
	.document-written-title .mint-cell-value span{font-size: 14px;}
	.document-written-content .weui_uploader_file{background-color: #ededed;height: 130px;width: 90px;text-align: center;margin-top:10px;margin-right: 20px;margin-bottom: 30px;position: relative;}
	.document-written-content .weui_uploader_file img{width: auto;height: auto;max-height: 100%;max-width: 100%;}
	.document-written-content .weui_uploader_file:after{top: -6px;right: -6px;}
	.document-written-content .weui_uploader_file p{width: 100%;position: absolute;bottom: -25px;font-size: 14px;}


</style>