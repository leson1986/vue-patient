<template>
	<mt-header fixed isgrey title="手写病历">
		<mt-button v-link="{path: '/online/bill', query: {actives: 'case'}, replace: true}" icon="back" slot="left"></mt-button>
	</mt-header>
	<mt-content>
		<div class="page-cell">
			<a class="mint-cell document-written-title">
				<span class="mint-cell-mask"></span>
				<label class="mint-cell-title">
					<span class="mint-cell-text">手写病历</span>
				</label>
				<div class="mint-cell-value">
					<span class="leh-c-green">2016-10-05</span>
				</div>
			</a>
		</div>
		<mt-picture class-name="document-written-content">
			<mt-pic-list v-for="n in 4" :reddot="n===2" @click="showPic">
				<img src="http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/"/>
			</mt-pic-list>
		</mt-picture>


		<!-- 查看原图 -->
		<div class="check-photo-box page-swipe" v-show="viewpic" @click="closePic">
			<span class="check-photo-close">X</span>

			<mt-swipe class="my-swipe" :auto="0">
				<mt-swipe-item class="slide1"><img src="http://upload.qianlong.com/2016/0906/1473129553587.jpg"/></mt-swipe-item>
				<mt-swipe-item class="slide2"><img src="http://upload.qianlong.com/2016/0906/1473129553587.jpg"/></mt-swipe-item>
				<mt-swipe-item class="slide3"><img src="http://upload.qianlong.com/2016/0906/1473129553587.jpg"/></mt-swipe-item>
			</mt-swipe>
		</div>

	</mt-content>
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtPicture from '../../components/picture.vue'
	import MtPicList from '../../components/picList.vue'
	import MtButton from '../../components/button.vue'
	import MtSwipe from '../../components/swipe.vue'
	import MtSwipeItem from '../../components/swipeItem.vue'

	export default{
	  data () {
	    return{
	      isdot: false,
		    viewpic: false

	    }
	  },

		ready() {

		},

		methods: {
			showPic (){
				this.viewpic =true;
			},

			closePic () {
				this.viewpic =false;
			}
		},

		components: {
			MtContent,
			MtHeader,
			MtPicture,
			MtPicList,
			MtButton,
			MtSwipe,
			MtSwipeItem
		}
	}
</script>

<style>
	.document-written-title:after{border: 0;}
	.document-written-title .mint-cell-value span{font-size: 14px;}
	.document-written-content .weui_uploader_file{background-color: #ededed;height: 130px;margin-top:10px;text-align: center;width: 90px;margin-right: 20px;}
	.document-written-content .weui_uploader_file img{width: auto;height: auto;max-height: 100%;max-width: 100%;}
	.document-written-content .weui_uploader_file:after{top: -6px;right: -6px;}

	.my-swipe {
		height: 200px;
		color: #fff;
		font-size: 30px;
		text-align: center;
	}
	.slide1 {
		background-color: #0089dc;
		color: #fff;
	}
	.slide2 {
		background-color: #ffd705;
		color: #000;
	}
	.slide3 {
		background-color: #ff2d4b;
		color: #fff;
	}
</style>