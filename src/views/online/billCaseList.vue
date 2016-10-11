<template>
	<mt-header fixed isgrey title="我的病历">
		<mt-button v-link="{path: '/online/bill', query: {actives: 'case'}, replace: true}" icon="arr-left" slot="left"></mt-button>
		<mt-button icon="meun" slot="right" @click="showPopup"></mt-button>
	</mt-header>
	<div class="leh-float-box">
		<mt-button type="green" @click="showPic">查看原图</mt-button>
	</div>
	<mt-content class-name="page-popup">
		<div class="page-cell sick-title">
			<a class="mint-cell">
				<label class="mint-cell-title">
					<i class="iconfont icon-wx-hospital leh-c-blue"></i>
					<span class="mint-cell-text">{{ medicalData.hispitalName }}</span>
					<p><span v-if="medicalData.custName">{{ medicalData.custName }}</span><span>{{ medicalData.drName }}</span></p>
					<span class="mint-cell-label">{{ medicalData.rcdTime }}</span>
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
					<span class="mint-cell-label">{{ medicalData.remark || '暂无内容' }}</span>
				</label>
				<div class="mint-cell-value">
					<span></span>
				</div>
			</a>
			<a class="mint-cell">
				<span class="mint-cell-mask"></span>
				<label class="mint-cell-title">
					<span class="mint-cell-text">特征</span>
					<span class="mint-cell-label">{{ medicalData.physicalSign || '暂无内容' }}</span>
				</label>
				<div class="mint-cell-value">
					<span></span>
				</div>
			</a>
			<a class="mint-cell">
				<span class="mint-cell-mask"></span>
				<label class="mint-cell-title">
					<span class="mint-cell-text">诊断结果</span>
					<span class="mint-cell-label">{{ medicalData.rcdResult || '暂无内容' }}</span>
				</label>
				<div class="mint-cell-value">
					<span></span>
				</div>
			</a>
			<a class="mint-cell">
				<span class="mint-cell-mask"></span>
				<label class="mint-cell-title">
					<span class="mint-cell-text">处理意见</span>
					<span class="mint-cell-label">{{ medicalData.suggestion || '暂无内容' }}</span>
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
			<div class="leh-null-data" v-if="!medicalData.recipeList.length">暂无数据</div>
			<a class="mint-cell" v-for="items in medicalData.recipeList">
				<span class="mint-cell-mask"></span>
				<label class="mint-cell-title">
					<span class="mint-cell-text">{{ items.drugName }}（{{ items.commonName }}）</span>
					<span class="mint-cell-label">
							<p>{{ items.useQty }}</p>
							<p>{{ items.useType }}，每{{ items.days }}{{ items.dayUse }}次，每次{{ items.dayUseNum }}{{ items.unit }}</p>
						</span>
				</label>
				<div class="mint-cell-value"></div>
			</a>
		</div>
		<!-- 查看原图 -->
		<!--<div class="check-photo-box page-swipe" v-show="viewpic" @click="closePic">
			<span class="check-photo-close">XX</span>

			<mt-swipe class="my-swipe" :auto="0">
				<mt-swipe-item class="slide1"><img src="http://upload.qianlong.com/2016/0906/1473129553587.jpg"/></mt-swipe-item>
				<mt-swipe-item class="slide2"><img src="http://upload.qianlong.com/2016/0906/1473129553587.jpg"/></mt-swipe-item>
				<mt-swipe-item class="slide3"><img src="http://upload.qianlong.com/2016/0906/1473129553587.jpg"/></mt-swipe-item>
			</mt-swipe>
		</div>-->

		<mt-popup v-show="popup_visible" position="right" class="mint-popup-3 sick-popup-box" :modal="false">
			<div class="leh-modal-transparent" @click="closePopup"></div>
			<div class="sick-popup-content">
				<div class="page-title">病历列表</div>
				<div class="page-cell" v-for="datas in indexList">
					<!--<mt-cell class-name="sick-popup-title" :title="datas.year.toString()" :istitle="true"></mt-cell>-->

					<a class="mint-cell sick-popup-title">
						<span class="mint-cell-mask"></span>
						<label class="mint-cell-title">
							<span class="mint-cell-text">{{ datas.year.toString() }}年</span>
						</label>
						<div class="mint-cell-value"></div>
					</a>
					<mt-cell v-for="items in datas.data" :title="items.rcdTime" :value="items.custName" :istitle="true" :reddot="items.unread" :blackfont="true" @click="getList(items.id)"></mt-cell>
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
	import MtButton from '../../components/button.vue'
	import MtSwipe from '../../components/swipe.vue'
	import MtSwipeItem from '../../components/swipeItem.vue'
	import MtPopup from '../../components/popup.vue'
	import MtCell from '../../components/cell.vue'
	import {getJson, postJson} from 'util'

	export default{
		route: {
			data (transition) {

				let _self = this
				_self.medicalId = transition.to.query.id

				_self.getList(_self.medicalId)

			}
		},

	  data () {
	    return{
	    	testxx: '',
		    viewpic: false,
		    popup_visible: false,
		    medicalId: '', // 病历ID
		    medicalData: '',  // 病历详情数据
		    indexList: [] // 病历索引列表
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
			},

			// 更新数据
			getList (ids) {

				let _self = this
				_self.closePopup()

				// 获取病历详情
				getJson('api/medical/' + ids, '', (rsp)=>{
					_self.medicalData = rsp

					// 消除红点
					postJson('api/medical/hasRead/' + ids, '', (rsp_read)=>{

						// 获取病历索引
						getJson('api/medical/index/', '', (rsp_index)=>{
							_self.indexList = _self.reGroupArr(rsp_index)

						},_self)
					},_self)
				},_self)
			},

			// 重组索引数组
			reGroupArr (arr) {
				var map = {},
						dest = [];
				for (var i = 0; i < arr.length; i++) {
					var ai = arr[i];
					if (!map[ai.year]) {
						dest.push({
							year: ai.year,
							data: [ai]
						});
						map[ai.year] = ai;
					} else {
						for (var j = 0; j < dest.length; j++) {
							var dj = dest[j];
							if (dj.year == ai.year) {
								dj.data.push(ai);
								break;
							}
						}
					}
				}

				return dest;
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
	.sick-title p span:first-child {margin-right: 10px}
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