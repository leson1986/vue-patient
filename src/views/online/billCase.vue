<template>
	<mt-header fixed isgrey title="手写病历">
		<mt-button v-link="'/online/bill'" icon="back" slot="left"></mt-button>
		<mt-button icon="more" slot="right"></mt-button>
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
			<mt-pic-list reddot>
				<img src="http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/"/>
			</mt-pic-list>
			<mt-pic-list reddot>
				<img src="http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/"/>
			</mt-pic-list>
			<mt-pic-list>
				<img src="http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/"/>
			</mt-pic-list>
		</mt-picture>


		<div class="page-swipe">
			<swipe class="my-swipe">
				<swipe-item class="slide1">Slide1</swipe-item>
				<swipe-item class="slide2">Slide2</swipe-item>
				<swipe-item class="slide3">Slide3</swipe-item>
			</swipe>
			<swipe class="my-swipe" :auto="0">
				<swipe-item class="slide1">Slide1</swipe-item>
				<swipe-item class="slide2">Slide2</swipe-item>
				<swipe-item class="slide3">Slide3</swipe-item>
			</swipe>

			<br>

			<swipe class="my-swipe" :speed="900" :auto="0" :show-indicators="false">
				<swipe-item class="slide1">SINGLE SLIDE</swipe-item>
			</swipe>

			<br>

			<swipe class="my-swipe" :speed="900" :auto="0" :show-indicators="false" :no-drag="true">
				<swipe-item class="slide1">SINGLE SLIDE</swipe-item>
			</swipe>
		</div>
	</mt-content>
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtPicture from '../../components/picture.vue'
	import MtPicList from '../../components/picList.vue'
	import MtButton from '../../components/button.vue'
	import Swipe from '../../components/swipe.vue'
	import SwipeItem from '../../components/swipeItem.vue'

	export default{
	  data () {
	    return{
	      msg:'hello vue'
	    }
	  },

		ready() {

		},

		components: {
			MtContent,
			MtHeader,
			MtPicture,
			MtPicList,
			MtButton,
			Swipe,
			SwipeItem
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