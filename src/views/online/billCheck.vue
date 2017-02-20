<template>
	<mt-header fixed isgrey :title="chkName">
		<mt-button v-link="{path: '/online/bill', query: {actives: 'checked'}, replace: true}" icon="arr-left" slot="left"></mt-button>
		<mt-button icon="meun" slot="right" @click="showPopup" class="leh-ex">
			<span :class="{'leh-red-dot': chkUnread}"></span>
		</mt-button>
	</mt-header>

	<div class="leh-float-box">
		<mt-button type="green" @click="showPic">查看原图</mt-button>
		<mt-button type="blue" v-link="{path: '/online/billTrend', query: {typeid: chkTypeId, groupid: groupId, chkName: chkName}, replace: true}">趋势图</mt-button>
	</div>
	<mt-content class-name="page-popup">
		<div class="page-cell sick-title">
			<a class="mint-cell">
				<label class="mint-cell-title">
					<span class="iconfont icon-wx-hospital leh-c-blue"></span>
					<span class="mint-cell-text">{{ checkData.hispitalName }}</span>
					<p>检验目的：<span v-if="checkData.purpose != ''">{{ checkData.purpose }}</span><span v-else>暂无</span></p>
					<span class="mint-cell-label">{{ checkData.reportTime }}</span>
				</label>
				<div class="mint-cell-value"></div>
			</a>
		</div>
		<div class="leh-null-box"></div>
		<div class="page-cell check-list" :class="{'check-table-height-auto': tableHeight, 'check-table-height': !tableHeight}">
			<a class="mint-cell" v-for="items in checkData.result">
				<label class="mint-cell-title">
					<span class="mint-cell-text leh-text-ellipsis">{{ items.itemName }}</span>
					<span>({{ items.itemCode }})</span>
				</label>
				<div class="mint-cell-value">
					<span>{{ items.value }}</span>
					<span class="fr">{{ items.unit }}</span>
				</div>
			</a>
		</div>
		<div class="check-text-box" v-if="checkData.conclusion">
			<span class="leh-c-blue">结论</span>
			<p>{{ checkData.conclusion }}</p>
		</div>
		<div class="check-arr-btn" @click="tableHeight = !tableHeight">
			<span class="iconfont icon-wx-double-arr-down leh-c-grey-tint" :class="{'icon-wx-double-arr-up': tableHeight, 'icon-wx-double-arr-down': !tableHeight}"></span>
		</div>

		<!--侧滑内容-->
		<mt-popup v-show="popup_visible" position="right" class="mint-popup-3 sick-popup-box" :modal="false">
			<div class="leh-modal-transparent" @click="closePopup"></div>
			<div class="sick-popup-content">
				<div class="page-title">检查单列表</div>
				<div class="page-cell" v-for="datas in indexList">
					<!--<mt-cell class-name="sick-popup-title" :title="datas.year.toString()" :istitle="true"></mt-cell>-->
					<a class="mint-cell sick-popup-title">
						<span class="mint-cell-mask"></span>
						<label class="mint-cell-title">
							<span class="mint-cell-text">{{ datas.year.toString() }}年</span>
						</label>
						<div class="mint-cell-value"></div>
					</a>
					<mt-cell v-for="items in datas.data" :class="{'leh-active': groupId === items.groupId}" :title="items.reportTime" :istitle="true" :reddot="items.unread" :blackfont="true" @click="getCheckList(items.groupId,chkTypeId)"></mt-cell>
				</div>
			</div>
		</mt-popup>
	</mt-content>

	<!--// 提示框-->
	<div class="page-popup">
		<mt-popup v-show="show_popup" position="top" class="mint-popup-2" :modal="false">
			<p v-text="tips"></p>
		</mt-popup>
	</div>

	<!-- 用于展示插件的容器 -->
	<div class="maskbox" v-if="maskbox"></div>
	<div class="overlay" id="overlay"></div>
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
	import {getJson, postJson, wrapPic} from 'util'

	export default{
		route: {
			data ({to, next}) {

				let _self = this
				_self.groupId = to.query.gid
				_self.chkTypeId = to.query.cid
				_self.chkName = to.query.chkName
				_self.getCheckList(_self.groupId, _self.chkTypeId)
				next()

			}
		},

		data () {
			return{
				viewpic: false,
				popup_visible: false,
				tableHeight: false,
				show_popup: false,
				tips: '',
				checkData: '', // 检查单详情数据
				chkTypeId: '', // 检查单类型Id
				groupId: '', // 检查单ID
				indexList: [], // 检查单索引列表
				picUrls: [], // 图片
				maskbox: false, // 是否有查看大图遮罩
				chkName:'', //title名称
				chkUnread:false
			}
		},

		methods: {
			showPopup () {
				this.popup_visible = true;
			},
			closePopup () {
				this.popup_visible = false;
			},

			// 更新数据
			getCheckList (groupId, chkTypeIds) {

				let _self = this
				_self.groupId = groupId
				_self.closePopup()

				// 获取检查单详情
				getJson('api/chk/' + groupId, '', (rsp)=>{
					_self.checkData = rsp
					_self.picUrls = rsp.pictureList || []

					// 获取检查单索引
					getJson('api/chk/index/' + chkTypeIds, '', (rsp_index)=>{
							_self.indexList = _self.regroupArr(rsp_index)
							//判断此类别的检查单是否有未读信息
							_self.checkUnread(rsp_index)
					},_self)
				},_self)
			},

			// 重组索引数组
			regroupArr (arr) {
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
			},
			checkUnread(datas){
				let _self = this
				for(let i=0;i<datas.length;i++){
					if(datas[i].unread == true){
						_self.chkUnread = true
						return
					}else{
						_self.chkUnread = false
					}
				}
			},
			// 查看原图
			showPic (){

				if(this.picUrls.length === 0) {

					this.tips = '当前检查单没有对应的原图'
					this.show_popup = true
					return
				}
				this.maskbox = true
				wrapPic(this.picUrls, this.chkName, this, true)
			},

			goTrend () {
				// 趋势图
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
	@import '../../assets/css/normalize.css';
	@import '../../assets/css/MPreview.mobile.css';

	.sick-title .mint-cell:after,.sick-title .mint-cell:before{border: 0;}
	.sick-title .leh-c-blue{width: 25px;height: 25px;line-height: 25px;text-align: center;display: inline-block;float:left;margin-right:8px;border: 1px solid;border-radius: 50%;}
	.sick-title .mint-cell-text{line-height: 25px;}
	.sick-title p{padding-left: 33px;margin-top: 6px;}
	.sick-title p span{margin-right: 10px;}
	.sick-title span.mint-cell-label{margin-left: 33px;font-size: 13px;margin-top:10px;}

	.check-list .mint-cell{margin-right: 10px;}
	.check-list .mint-cell span{font-size: 14px;}
	.check-list .mint-cell:after{border: 0;}
	.check-list .mint-cell:before{left: 10px;}
	.check-list .mint-cell-title span.mint-cell-text{max-width: 120px;float: left;}
	.check-list .mint-cell-value span.fr{width: 60px;margin-left: 10px;}
	.check-text-box{padding: 20px 10px; padding-bottom: 0;overflow: hidden;}
	.check-text-box p{margin-top: 10px;padding: 8px;background-color:#f9f8f8;line-height: 25px;font-size:14px;border-radius: 5px;}
	.check-arr-btn{border: 0; padding-top: 20px;text-align: center;height: 40px;}
	.leh-ex.mint-button{overflow: visible;clear:both}
	.leh-ex.mint-button span.leh-red-dot:after{top: -5px;right: -9px;}
	.check-table-height {max-height: 200px; overflow: hidden}
	.check-table-height-auto {height: auto}

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

	.sick-popup-content .mint-cell.leh-active .mint-cell-text{color: #1dadfe;font-weight: bold;}
	.mint-header span.icon-wx-meun.leh-red-dot:after{top: -5px;}
</style>
