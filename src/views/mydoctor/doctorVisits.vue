<template>
	<mt-header fixed isgrey title="出诊信息">
		<mt-button v-link="{path: '/mydoctor/doctor', query: {todoctor: true,id: ids}, replace: true}" icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<mt-content>
		<div class="page-cell call-info-advertisement">
			<a class="mint-cell">
				<span class="leh-c-orange iconfont icon-wx-notice"></span>
				<label class="mint-cell-title">
					<p :class="{'leh-text-ellipsis': !openmsg}">{{ lastNotice }}</p>
				</label>
				<div class="mint-cell-value" @click="openmsg = !openmsg">
					<span class="mint-cell-text">展开</span>
				</div>
			</a>
		</div>
		<div class="leh-null-box"></div>
		<div class="page-cell call-info-title">
			<a class="mint-cell">
				<label class="mint-cell-title">
					<span class="mint-cell-text leh-c-green">出诊时间</span>
				</label>
				<div class="mint-cell-value"></div>
			</a>
		</div>
		<div class="page-cell call-info-time-list" v-for="(index, items) in schedulesItems">

			<a class="mint-cell" @click="index = !index">
				<label class="mint-cell-title">
					<span class="mint-cell-text">{{ items.location }}</span>
				</label>
				<div class="mint-cell-value">
					<span class="iconfont" :class="{'icon-wx-arr-up': !index,'icon-wx-arr-down': index}"></span>
				</div>
			</a>
			<!--隐藏的内容-->
			<div class="call-info-time-box">
				<!--按周-->
				<div class="call-info-week-box" v-if="type === 1 && !index">
					<ul>
						<li class="call-info-week-list" v-for="weeks in items.data">
							<span class="fl">{{ weeks.weekDay }}</span>
							<span class="fl iconfont leh-c-grey" :class="{'icon-wx-morning': weeks.time == '上午','icon-wx-aftermoon': weeks.time == '下午'}"></span>
							<span class="fl leh-fs-twelve">{{ weeks.time }}</span>
							<span class="leh-min-tip-btn" :class="{'leh-c-orange': weeks.clinicType == '特需','leh-c-blue': weeks.clinicType != '特需'}">{{ weeks.clinicType }}</span>
							<span class="fr">{{ weeks.fee }}<span>元/次</span></span>
						</li>
					</ul>
				</div>


				<!--按月-->
				<div class="call-info-month-box" v-if="type === 2 && !index">
					<!--固定左边-->
					<div class="call-info-month-left">
						<ul>
							<li class="call-info-month-left-list">
								<span>Date</span>
							</li>
							<li class="call-info-month-left-list">
								<span class="iconfont icon-wx-morning"></span>
								<span class="leh-fs-twelve">上午</span>
							</li>
							<li class="call-info-month-left-list">
								<span class="iconfont icon-wx-aftermoon"></span>
								<span class="leh-fs-twelve">下午</span>
							</li>
							<li class="call-info-month-left-list">
								<span class="iconfont icon-wx-evening"></span>
								<span class="leh-fs-twelve">晚上</span>
							</li>
						</ul>
					</div>
					<!--右边滚动-->
					<div class="call-info-month-right">
						<ul style="width: 720px;">
							<li class="call-info-month-right-list" v-for="monthItems in items.months">
								<div class="call-info-month-right-item">
									<span>{{ monthItems.date }}</span>
									<p>{{ monthItems.weekDay }}</p>
								</div>
								<div class="call-info-month-right-item" v-for="months in monthItems.month">
									<span>{{ months.clinicType }}</span>
									<p>{{ months.fee }}元/次</p>
								</div>
								<!--<div class="call-info-month-right-item">
									<span v-if="months.time=='下午'">{{ months.clinicType }}</span>
									<p v-if="months.time=='下午'">{{ months.fee }}</p>
								</div>
								<div class="call-info-month-right-item">
									<span v-if="months.time=='晚上'">{{ months.clinicType }}</span>
									<p v-if="months.time=='晚上'">{{ months.fee }}</p>
								</div>-->
							</li>

						</ul>
					</div>
				</div>

			</div>
		</div>


		<div class="leh-null-box"></div>
		<div class="page-cell call-info-title">
			<a class="mint-cell">
				<label class="mint-cell-title">
					<span class="mint-cell-text leh-c-green">医院地址</span>
				</label>
				<div class="mint-cell-value"></div>
			</a>
		</div>
		<div class="page-cell call-info-time-list">
			<a class="mint-cell" v-for="items in workplacesItems">
				<span class="mint-cell-mask"></span>
				<label class="mint-cell-title">
					<span class="mint-cell-text">{{ items.hosipitalName }}</span>
					<span class="mint-cell-label">{{ items.hosipitalAddress }}</span>
				</label>
				<div class="mint-cell-value"></div>
			</a>
		</div>
		<div class="leh-null-box"></div>
		<div class="page-cell call-info-title">
			<a class="mint-cell">
				<label class="mint-cell-title">
					<span class="mint-cell-text leh-c-green">备注</span>
				</label>
				<div class="mint-cell-value"></div>
			</a>
		</div>
		<p class="call-info-txt">由于突发原因导致的出诊时间、出诊地点、门诊类型（普通、专家、特需等）一季挂号费的更改，均已医院方天公布为准，如有需要可拨打医院电话确认。</p>
	</mt-content>
</template>
<script>
	import MtContent from '../../components/content'
	import MtHeader from '../../components/header.vue'
	import MtButtonSingle from '../../components/buttonSingle'
	import MtCell from '../../components/cell.vue'
	import MtButton from '../../components/button.vue'
	import MtTranslate from '../../components/translate.vue'
	import MtTranslateItem from '../../components/translateItem.vue'
	import MtPopupBox from '../../components/popupBox.vue'
	import {getJson, postJson} from 'util'

	export default{
		route: {
			data ({to, next}) {

				let _self = this
				_self.ids = to.query.id

				// 出诊信息
				getJson('api/schedules/'+ _self.ids, '', (rsp)=>{

					if(rsp){
						_self.monthItems = _self.reGroupArr(rsp.items)
						_self.schedulesItems = _self.reGroupMonth(_self.monthItems)
						_self.type = rsp.type
					}
					/*console.log(JSON.stringify(_self.monthItems))
					console.log(_self.schedulesItems)*/


					// 获取最新公告
					getJson('api/notices/latest/'+ _self.ids, '', (rsp_last)=>{

						_self.lastNotice = rsp_last.content
						// 医院地址
						getJson('api/workplaces/'+ _self.ids, '', (rsp_address)=>{

							_self.workplacesItems = rsp_address

							// 取消红点
							//postJson('api/schedules/hasRead/'+ _self.ids, '', (rsp_hasRead)=>{},_self)
						},_self)
					},_self)
				},_self)

				next()

			}
		},

	  data () {
	    return{
	      openmsg: false,
		    ids: '', // 医生ID
		    workplacesItems: [], // 医院地址
		    schedulesItems: [], // 出诊信息
		    monthItems: [], // 月信息按日期分类
		    type: '', // 周/月
		    lastNotice: '', // 最新公告
	    }
	  },

		methods: {
			// 重组周数组
			reGroupArr (arr) {
				var map = {},
						dest = [];
				for (var i = 0; i < arr.length; i++) {
					var ai = arr[i];
					if (!map[ai.location]) {
						dest.push({
							location: ai.location,
							data: [ai],
							months: []
						});
						map[ai.location] = ai;
					} else {
						for (var j = 0; j < dest.length; j++) {
							var dj = dest[j];
							if (dj.location == ai.location) {
								dj.data.push(ai);
								break;
							}
						}
					}
				}

				return dest;
			},

			// 重组月份数组
			reGroupMonthArr (arr) {
				var map = {},
						dest = [];
				for (var i = 0; i < arr.length; i++) {
					var ai = arr[i];
					if (!map[ai.date]) {
						dest.push({
							date: ai.date,
							weekDay: ai.weekDay,
							location: ai.location,
							month: [ai]
						});
						map[ai.date] = ai;
					} else {
						for (var j = 0; j < dest.length; j++) {
							var dj = dest[j];
							if (dj.date == ai.date) {
								dj.month.push(ai);
								break;
							}
						}
					}
				}

				return dest;
			},

			// 重组同一天的数据
			reGroupMonth (arr) {
				let mData = arr
				for(let i = 0; i < mData.length; i++){
					let mi = mData[i]
					let mArr = this.reGroupMonthArr(mi.data)

					for(let k = 0; k < mArr.length; k++){
					  let mk = mArr[k]
						if(mi.location == mk.location) {
					  	mi.months.push(mk)
						}
					}
				}

				return mData;
			}

		},

		components: {
			MtContent,
			MtHeader,
			MtButtonSingle,
			MtCell,
			MtButton,
			MtTranslate,
			MtTranslateItem,
			MtPopupBox
		}
	}
</script>

<style>
	.call-info-advertisement .mint-cell{align-items: flex-start;background-color: #fefbec;}
	.call-info-advertisement .mint-cell:after,
	.call-info-advertisement .mint-cell:before,
	.call-info-title .mint-cell:after,
	.call-info-time-list .mint-cell:after,
	.call-info-week-list:nth-last-of-type(1),
	.call-info-time-list .page-cell:nth-last-of-type(1) .mint-cell:before,
	.call-info-month-left-list:nth-last-of-type(1):after,
	.call-info-month-right-item:nth-last-of-type(1):after{border: 0;}
	.call-info-time-list .mint-cell-text{font-size: 14px;}
	.call-info-advertisement .mint-cell p{color: #f9975c;font-size: 14px;line-height: 20px;}
	.call-info-advertisement .icon-wx-notice{padding-right: 8px;line-height: 20px;}
	.call-info-advertisement .mint-cell-value .mint-cell-text{font-size: 12px;padding-left: 10px;color: #919191;line-height: 20px;}
	.call-info-time-list .mint-cell-label{font-size: 12px;margin-top: 10px;}
	.call-info-time-list .mint-cell-value span{color: #aaa;}
	.call-info-week-box{background-color: #f6fcff;padding-left: 10px;position: relative;overflow: hidden}
	.call-info-week-box:before,.call-info-month-box:before{content:'';width:100%;position: absolute;top: -1px;border-top:1px solid #e5e5e5;}
	.call-info-week-box ul{padding-left: 20px;border-bottom: 1px solid #e5e5e5;}
	.call-info-week-list{height: 42px;line-height: 40px;padding-right: 10px;color: #363636;border-bottom: 1px dotted #e5e5e5;}
	.call-info-week-list span.fl{margin-right: 10px;}
	.call-info-week-list span.fr{font-size: 16px;}
	.call-info-week-list span.fr span{font-size: 12px;}
	.call-info-month-box{position: relative;overflow: hidden;height: 200px;}
	.call-info-month-box:before,
	.call-info-month-box:after,
	.call-info-month-left-list:after{left: 10px;}
	.call-info-month-box:after{content:'';width:100%;position: absolute;bottom: 0;border-bottom:1px solid #e5e5e5;}
	.call-info-month-left,.call-info-month-right{position: absolute;overflow: hidden;top: 0;}
	.call-info-month-left-list{height: 50px;line-height: 50px;width: 80px;padding-left: 10px;background-color: #f6fcff;position: relative;}
	.call-info-month-left-list:after{content:'';width:100%;position: absolute;bottom: 0px;border-bottom:1px dotted #e5e5e5;}
	.call-info-month-right-item:nth-of-type(1),
	.call-info-month-left-list:nth-of-type(1){background-color: #fff;}
	.call-info-month-left-list:nth-of-type(1):after,
	.call-info-month-right-item:nth-of-type(1):after,.call-info-month-right-item:nth-of-type(1){left: 0;border-bottom-style: solid;}
	.call-info-month-left-list .icon-wx-morning,
	.call-info-month-left-list .icon-wx-aftermoon,
	.call-info-month-left-list .icon-wx-evening{color: #aaa;margin-right: 8px;}
	.call-info-month-left-list:nth-of-type(1){font-size: 28px;color: #f3f2f2;}
	.call-info-month-right{left: 80px;right:0;overflow-x: auto;overflow-y: hidden;}
	.call-info-month-right-list{width: 80px;float: left;}
	.call-info-month-right-item{width: 100%;height: 50px;text-align: center;padding: 6px 0;background-color: #f6fcff;border-bottom: 1px dotted #e5e5e5}
	.call-info-month-right-item:after{left:0;}
	.call-info-month-right-item span{color: #76c0ff;}
	.call-info-month-right-item p{margin-top: 5px;font-size: 12px;}
	.call-info-month-right-item:nth-of-type(1) span{color: #a7a7a7;font-size: 12px;}
	.call-info-month-right-item:nth-of-type(1) p{font-size: 14px;}
	.call-info-txt{padding: 12px 10px;font-size: 12px;color: #363636;line-height: 20px;}

	.leh-grey-table .paddingleft {padding-left: 100px}
</style>