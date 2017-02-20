<template>
	<mt-header fixed isgrey title="指标趋势图">
		<mt-button v-link="{path: '/online/billCheck', query: {cid: typeid, gid: groupid, chkName: chkName}, replace: true}" icon="arr-left" slot="left"></mt-button>
		<mt-button icon="meun" slot="right" @click="showPopup"></mt-button>
	</mt-header>
	<mt-content class-name="page-popup">
		<div class="trend-title">
			<button class="mint-button mint-button--transparent mint-button--small" @click="getTrendItems(0)">
				<label class="mint-button-text":class="{'leh-active': islft}"></label>
			</button>
			<div class="trend-title-list-box">
				<ul>
					<li class="trend-title-list"  v-for="items in chk_list" :id="items.code"  :class="{'leh-active': items.code == codes}">
						<span>{{items.name}}</span>
						<span v-if="items.code">({{items.code}})</span>
					</li>
				</ul>
			</div>
			<button class="mint-button mint-button--transparent mint-button--small" @click="getTrendItems(1)">
				<label class="mint-button-text" :class="{'leh-active': isrgt}"></label>
			</button>
		</div>

		<div class="trend-nav">
			<ul>
				<li class="trend-nav-list" :class="{'leh-active': mounts == '3'}" @click="getTrend(codes, 3)">三个月</li>
				<li class="trend-nav-list" :class="{'leh-active': mounts == '6'}" @click="getTrend(codes, 6)">六个月</li>
				<li class="trend-nav-list" :class="{'leh-active': mounts == '12'}" @click="getTrend(codes, 12)">一年</li>
				<li class="trend-nav-list" :class="{'leh-active': mounts == ''}" @click="getTrend(codes, '')">全部</li>
			</ul>
		</div>
		<div class="trend-main">
			<span class="trend-main-text" v-show="show_trend">暂无数据</span>
			<div id="container" style="min-width:300px;height:400px" v-show="!show_trend"></div>
		</div>

		<!--侧滑内容-->
		<mt-popup v-show="popup_visible" position="right" class="mint-popup-3 sick-popup-box" :modal="false">
			<div class="leh-modal-transparent" @click="closePopup"></div>
			<div class="trend-popup-content">
				<div class="page-title">肝功能指标</div>
				<div class="page-cell">
					<a class="mint-cell" v-for="(indexs,items) in chk_list" :class="{'leh-active': items.code == codes}" @click="getListTrend(items.code, indexs)">
						<span class="mint-cell-mask"></span>
						<label class="mint-cell-title">
							<span class="mint-cell-text">{{items.name}}<span v-if="items.code">（{{items.code}}）</span></span>
						</label>
						<div class="mint-cell-value"></div>
					</a>
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
	import {getJson, postJson, wrapPic} from 'util'
	import $ from 'zepto'

	export default{
		route: {
			data ({to, next}) {

				let _self = this

				_self.typeid = to.query.typeid
				_self.groupid = to.query.groupid
				_self.chkName = to.query.chkName
				_self.getCheckList(_self.typeid)
				next()

			}
		},

		data () {
			return{
				show_trend: false, // 是否有趋势图数据
				li_active: true,
				popup_visible: false,
				show_popup: false,
				typeid: '', //
				groupid: '',
				chk_list: [], //
				trend_list:'', // 趋势图数据
				codes: '', // 指标代码
				mounts: '', // 月份
				lis: 0, // li 个数
				islft: false, // 是否存有数量
				isrgt: true, // 是否存有数量
				chkName:''
			}
		},

		methods: {
			showPopup () {
				this.popup_visible = true;
			},
			closePopup () {
				this.popup_visible = false;
			},
			getCheckList (typeid) {

				let _self = this

				// 获取检查单详情
				getJson('api/chk/demos/' + typeid, '', (rsp)=>{
					_self.chk_list = rsp
					_self.codes = rsp[0].code
					_self.getTrend(_self.codes, 12)

				},_self)
			},
			getTrend (code, mounts) {

				let _self = this
				_self.mounts = mounts

				// 获取检查单详情
				getJson('api/chk/trend/' + code +'/' + mounts, '', (rsp)=>{

					// 加载趋势图
					_self.getTrendData(rsp)
				},_self)
			},

			// 趋势图
			getTrendData (datas) {

				if(!datas){
					this.show_trend = true
				}else {
					this.show_trend = false
				}
				new Highcharts.Chart({
					chart: {
						renderTo: 'container'
					},
					data: {
						csv: datas
					},
					credits: {
						enabled: false
					},
					title: {
						text: null
					},
					subtitle: {
						text: ''
					},
					xAxis: {
						Labels: true,
						/*tickWidth: 0,*/
						type: 'datetime',
						labels: {
							step: 1,
							formatter: function () {
								return Highcharts.dateFormat('%Y-%m-%d', this.value);
							}
						}
					},
					yAxis: {
						title: {
							text: ''
						},
						lineWidth: 1
					},
					tooltip: {
						useHTML: true,
						xDateFormat: '%Y-%m-%d',
						shared: true
					},
					plotOptions: {

						series:
						{
							connectNulls : true,
						}
					}
				});

			},

			// 左右箭头点击事件
			getTrendItems (key) {

				let len = $('.trend-title-list').length

				// key: 0==>left; 1==>right
				if(key) {

					if(this.lis !== len-1) {
						this.lis++
						this.codes = $('li').eq(this.lis).attr('id')
						this.getTrend(this.codes, 12)
					}
				}else {
					if(this.lis !== 0) {
						this.lis--
						this.codes = $('li').eq(this.lis).attr('id')
						this.getTrend(this.codes, 12)
					}
				}

				if(this.lis > 0 && this.lis != len-1){
					this.islft = true
					this.isrgt = true
				}else {
					if(this.lis === 0){
						this.islft = false
						this.isrgt = true
					}
					if(this.lis === len-1){
						this.islft = true
						this.isrgt = false
					}
				}
			},

			// 侧滑列表点击事件
			getListTrend (codes, inds) {

				let len = $('.trend-title-list').length
				this.lis = inds
				if(this.lis > 0 && this.lis != len-1){
					this.islft = true
					this.isrgt = true
				}else {
					if(this.lis === 0){
						this.islft = false
						this.isrgt = true
					}
					if(this.lis === len-1){
						this.islft = true
						this.isrgt = false
					}
				}
				this.closePopup()
				this.codes = codes
				this.getTrend(codes, 12)
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
	.trend-title{background-color: #eeeeee;position: relative;height: 50px;}
	.trend-title button{width: 15%;text-align: center;height:50px;box-sizing: border-box;}
	.trend-title button:nth-of-type(1){position: absolute;left: 0;}
	.trend-title button:nth-of-type(2){position: absolute;right: 0;}
	.trend-title button .mint-button-text{display: inline-block;border-top:12px solid #727272;border-left:12px solid transparent;}
	.trend-title button .mint-button-text.leh-active{border-top-color: #0099ff;}
	.trend-title button:nth-of-type(1) .mint-button-text{transform: rotate(-135deg);-webkit-transform: rotate(-135deg);}
	.trend-title button:nth-of-type(2) .mint-button-text{transform: rotate(45deg);-webkit-transform: rotate(45deg);}
	.trend-title-list-box{position: absolute;left: 15%;width: 70%;height: 50px;top: 0;overflow: hidden;}
	.trend-title-list{height: 50px;line-height: 50px;text-align: center;font-size: 16px;display: none;}
	.trend-title-list.leh-active{display: block;}
	.trend-title-list span:nth-of-type(1){max-width: 112px;display:inline-block;position:relative;text-overflow:ellipsis; overflow:hidden; white-space:nowrap}
	.trend-title-list span:nth-of-type(2){display: inline-block;position: relative;top: -20px;}
	.trend-nav{border-bottom: 1px solid #1dadfe;border-top: 1px solid #1dadfe;overflow: hidden;}
	.trend-nav-list{float: left;width: 25%;text-align: center;font-size: 14px;line-height: 35px;border-left: 1px solid #1dadfe;}
	.trend-nav-list:nth-of-type(1){border-left: 0;}
	.trend-nav-list.leh-active{background-color: #1dadfe;color: #fff;}
	.trend-main{padding: 12px;}
	.trend-popup-box{z-index: 10;background-color: rgba(0,0,0,0.5) !important;}
	.trend-popup-content{width: 70%;z-index:10;position: fixed;right: 0;top: 0;bottom: 0;background-color: #fff;overflow: auto;}
	.trend-popup-content .mint-cell{padding-left: 20px;}
	.trend-popup-content .mint-cell:before{left: 15px;}
	.trend-popup-content .mint-cell:after{height: 1px;}
	.trend-popup-content .mint-cell:nth-last-of-type(1):before{border: 0;}
	.trend-popup-content .mint-cell .mint-cell-text{font-size: 14px;line-height: 20px;}
	.trend-popup-content .mint-cell.leh-active .mint-cell-text{color: #1dadfe;font-weight: bold;}


	.trend-main-text {text-align: center; line-height: 25px;display: block;}
</style>
