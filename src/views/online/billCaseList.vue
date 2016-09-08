<template>
	<mt-header fixed isgrey title="我的病历">
		<mt-button v-link="'/online/bill'" icon="back" slot="left"></mt-button>
		<mt-button icon="more" slot="right" @click="showPopup"></mt-button>
	</mt-header>
	<mt-button-single v-el:conf>查看原图</mt-button-single>
	<mt-content class-name="page-popup">
		<div class="page-cell sick-title">
			<a class="mint-cell">
				<label class="mint-cell-title">
					<i class="mintui mintui-more leh-c-blue"></i>
					<span class="mint-cell-text">中山大学附属第三医院</span>
					<p>感染性疾病<span>林小小</span></p>
					<span class="mint-cell-label">2015年11月20日</span>
				</label>
				<div class="mint-cell-value"></div>
			</a>
		</div>
		<div class="leh-null-box"></div>
		<div class="page-cell sick-list">
			<a class="mint-cell">
				<span class="mint-cell-mask"></span>
				<label class="mint-cell-title">
					<span class="mint-cell-text">临床症状</span>
					<span class="mint-cell-label">临床症状临床症状临床症状临床症状临床症状临床症状临床症状临床症状临床症状</span>
				</label>
				<div class="mint-cell-value">
					<span></span>
				</div>
			</a>
			<a class="mint-cell">
				<span class="mint-cell-mask"></span>
				<label class="mint-cell-title">
					<span class="mint-cell-text">特征</span>
					<span class="mint-cell-label">临床症状临床症状临床症状临床症状临床症状临床症状临床症状临床症状临床症状</span>
				</label>
				<div class="mint-cell-value">
					<span></span>
				</div>
			</a>
			<a class="mint-cell">
				<span class="mint-cell-mask"></span>
				<label class="mint-cell-title">
					<span class="mint-cell-text">诊断结果</span>
					<span class="mint-cell-label">临床症状临床症状临床症状临床症状临床症状临床症状临床症状临床症状临床症状</span>
				</label>
				<div class="mint-cell-value">
					<span></span>
				</div>
			</a>
			<a class="mint-cell">
				<span class="mint-cell-mask"></span>
				<label class="mint-cell-title">
					<span class="mint-cell-text">处理意见</span>
					<span class="mint-cell-label">临床症状临床症状临床症状临床症状临床症状临床症状临床症状临床症状临床症状</span>
				</label>
				<div class="mint-cell-value">
					<span></span>
				</div>
			</a>
		</div>
		<div class="leh-null-box"></div>
		<div class="page-cell sick-list">
			<a class="mint-cell">
				<label class="mint-cell-title">
					<span class="mint-cell-text leh-c-green">处方</span>
				</label>
			</a>
		</div>
		<div class="page-cell sick-from-list">
			<a class="mint-cell ">
				<span class="mint-cell-mask"></span>
				<label class="mint-cell-title">
					<span class="mint-cell-text">复方安芬烷胺片（博路定）</span>
					<span class="mint-cell-label">
							<p>5ml*2瓶</p>
							<p>皮下注射，每周1次，每次180ug</p>
						</span>
				</label>
				<div class="mint-cell-value"></div>
			</a>
			<a class="mint-cell ">
				<span class="mint-cell-mask"></span>
				<label class="mint-cell-title">
					<span class="mint-cell-text">复方安芬烷胺片（博路定）</span>
					<span class="mint-cell-label">
							<p>5ml*2瓶</p>
							<p>皮下注射，每周1次，每次180ug</p>
						</span>
				</label>
				<div class="mint-cell-value"></div>
			</a>
		</div>
		<!-- 查看原图 -->
		<div class="check-photo-box page-swipe" v-show="viewpic" @click="closePic">
			<span class="check-photo-close">XX</span>

			<mt-swipe class="my-swipe" :auto="0">
				<mt-swipe-item class="slide1"><img src="http://upload.qianlong.com/2016/0906/1473129553587.jpg"/></mt-swipe-item>
				<mt-swipe-item class="slide2"><img src="http://upload.qianlong.com/2016/0906/1473129553587.jpg"/></mt-swipe-item>
				<mt-swipe-item class="slide3"><img src="http://upload.qianlong.com/2016/0906/1473129553587.jpg"/></mt-swipe-item>
			</mt-swipe>
		</div>

		<mt-popup v-show="popup_visible" position="right" class="mint-popup-3 sick-popup-box" :modal="false">
			<div class="leh-modal-transparent" @click="closePopup"></div>
			<div class="sick-popup-content">
				<div class="page-title">病历列表</div>
				<div class="page-cell">
					<mt-cell class-name="sick-popup-title" title="2016年" :istitle="true"></mt-cell>
					<mt-cell v-for="n in 4" title="2016年" value="感染性疾病科" :istitle="true" :reddot="true" :blackfont="true"></mt-cell>
				</div>
			</div>
		</mt-popup>
	</mt-content>
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtPicture from '../../components/picture.vue'
	import MtPicList from '../../components/picList.vue'
	import MtButtonSingle from '../../components/buttonSingle'
	import MtButton from '../../components/button.vue'
	import MtSwipe from '../../components/swipe.vue'
	import MtSwipeItem from '../../components/swipeItem.vue'
	import MtPopup from '../../components/popup.vue'
	import MtCell from '../../components/cell.vue'

	export default{
	  data () {
	    return{
		    viewpic: false,
		    popup_visible: false
	    }
	  },

		methods: {
			showPic (){
				this.viewpic =true;
			},

			closePic () {
				this.viewpic =false;
			},
			showPopup () {
				this.popup_visible = true;
			},
			closePopup () {
				this.popup_visible = false;
			}

		},

		events: {
			'single-button-event' () {
				this.showPic()
			}
		},

		watch: {
			popupVisible2(val) {
				if (val) {
					setTimeout(() => {
						this.popupVisible2 = false;
					}, 2000);
				}
			}
		},

		ready() {
			//this.buttonBottom = this.$els.button.getBoundingClientRect().bottom;
		},

		components: {
			MtContent,
			MtHeader,
			MtPicture,
			MtPicList,
			MtButtonSingle,
			MtButton,
			MtSwipe,
			MtSwipeItem,
			MtPopup,
			MtCell
		}
	}
</script>

<style>
	.sick-title .mint-cell:after,.sick-title .mint-cell:before{border: 0;}
	.sick-title .leh-c-blue{width: 25px;height: 25px;line-height: 25px;text-align: center;display: inline-block;float:left;margin-right:5px;border: 1px solid;border-radius: 50%;}
	.sick-title .mint-cell-text{line-height: 25px;}
	.sick-title p{padding-left: 30px;margin-top: 10px;}
	.sick-title p span{margin-left: 10px;}
	.sick-title span.mint-cell-label{margin-left: 30px;font-size: 14px;}
	.sick-list .mint-cell-label{line-height: 25px;}
	.sick-list .mint-cell:after,.sick-list .mint-cell:nth-last-of-type(1):before,.sick-from-list .mint-cell:nth-last-of-type(1):before{border: 0;}
	.sick-from-list .mint-cell-label p{line-height: 25px;}

	/*侧滑*/
	.sick-popup-box{z-index: 10;background-color: rgba(0,0,0,0.5) !important;}
	.sick-popup-content{width: 70%;z-index:10;position: fixed;right: 0;top: 0;bottom: 0;background-color: #fff;overflow: auto;}
	.sick-popup-title{background-color: #e5e5e5;margin: 0 !important;}
	.sick-popup-title span.mint-cell-text{font-size: 16px !important;}
	.sick-popup-content .mint-cell{margin-left: 7px;}
	.sick-popup-content .mint-cell:not(.sick-popup-title) .mint-cell-text{margin-left: 7px;}
	.sick-popup-content .mint-cell span{font-size: 14px;}
	.sick-popup-content .mint-cell:nth-last-of-type(1):before{border: 0;}
	.sick-popup-content .mint-cell:before{left: 17px;}
	.sick-popup-content .mint-cell .mint-cell-text:after{left: -13px;top: 4px;}

</style>