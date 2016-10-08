<template>
	<mt-header fixed isgrey title="手写病历">
		<mt-button v-link="{path: '/online/bill', query: {actives: 'case'}, replace: true}" icon="arr-left" slot="left"></mt-button>
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
			<mt-pic-list v-for="items in handwritingItems" :reddot="items.unread"  @click="showPic(items.id)">
				<img :src="items.url"/>
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
			data (transition) {

				let _self = this
				_self.dates = transition.to.query.dates
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

		ready() {
			//wrapPic(this.handwritingItems, '手写病历') // 查看图片
		},

		methods: {
			showPic (ids){

				let _self = this

				// 取消红点
				postJson('api/handwriting/hasRead/'+ ids, '', (rsp) => {

					this.getHandwriting() // 刷新列表
					wrapPic(_self.handwritingItems, '手写病历') // 查看图片
				}, _self)
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
	.document-written-content .weui_uploader_file{background-color: #ededed;height: 130px;margin-top:10px;text-align: center;width: 90px;margin-right: 20px;}
	.document-written-content .weui_uploader_file img{width: auto;height: auto;max-height: 100%;max-width: 100%;}
	.document-written-content .weui_uploader_file:after{top: -6px;right: -6px;}

	.img-list { list-style: none; padding: 0; margin: 0; }
	.img-list:after { display: table; content: " "; }
	.img-list > li { box-sizing: border-box; padding: 10px; position: relative; float: left; width: 50%; }
	.img-list > li img { width: 100%; height: 100%; vertical-align: top; }
	.img-list > li > a { display: block; }
	.img-list > li > span { font-size: 14px; padding: 0px 10px; position: absolute; bottom: 15px; right: 20px; border-radius: 3px; background: rgba(37,37,37,0.6); color: #fff; }
	.img-list > li:first-child { padding-right: 5px; }
	.img-list > li:last-child { padding-left: 5px; }
	.img-list > li:first-child span { right: 15px; }
	.overlay { background: #000; width: 100%; height: 100%; overflow: hidden; position: fixed; top: 0; left: 0; z-index: 99;
		-webkit-transition: all 300ms ease-in 0s;
		transition: all 300ms ease-in 0s;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		-webkit-transform: translate3d(100%, 0px, 0px);
		transform: translate3d(100%, 0px, 0px);
	}
	.overlay.in {
		-webkit-transform: translate3d(0px, 0px, 0px);
		transform: translate3d(0px, 0px, 0px);
	}
</style>