<template>
	<mt-header fixed isgrey title="出诊信息">
		<mt-button v-link="'/mydoctor/doctor'" icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<mt-content>
		<div class="page-cell call-info-advertisement">
			<a class="mint-cell">
				<span class="leh-c-orange iconfont icon-wx-notice"></span>
				<label class="mint-cell-title">
					<p :class="{'leh-text-ellipsis': !openmsg}">标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字</p>
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
		<div class="page-cell call-info-time-list" v-for="(index, n) in 4">

			<a class="mint-cell" @click="index = !index">
				<label class="mint-cell-title">
					<span class="mint-cell-text">天河院区</span>
				</label>
				<div class="mint-cell-value">
					<span class="iconfont" :class="{'icon-wx-arr-up': !index,'icon-wx-arr-down': index}"></span>
				</div>
			</a>
			<!--隐藏的内容-->
			<div class="call-info-time-box">
				<!--按周-->
				<div class="call-info-week-box" v-if="index">
					<ul>
						<li class="call-info-week-list">
							<span class="fl">周二</span>
							<span class="fl iconfont icon-wx-morning leh-c-grey"></span>
							<span class="fl leh-fs-twelve">上午</span>
							<span class="leh-min-tip-btn leh-c-orange">特需</span>
							<span class="fr">30<span>元/次</span></span>
						</li>
						<li class="call-info-week-list">
							<span class="fl">周二</span>
							<span class="fl iconfont icon-wx-aftermoon leh-c-grey"></span>
							<span class="fl leh-fs-twelve">下午</span>
							<span class="leh-min-tip-btn leh-c-blue">普通</span>
							<span class="fr">30<span>元/次</span></span>
						</li>
					</ul>
				</div>
				<!--按月-->
				<div class="call-info-month-box" v-if="index">
					<div>
						<div class="leh-table-responsive">
							<table class="leh-grey-table leh-table-bordered">
								<thead>
								<tr>
									<th>Date</th>
									<th v-for="(ind,dates) in arr2" :class="{'paddingleft': ind===0}">
										<span class="leh-c-grey">{{ dates.date }}</span>
										<p>{{ dates.week }}</p>
									</th>
								</tr>
								</thead>
								<tbody id="app">
								<tr class="active">
									<td>
										<span class="iconfont icon-wx-morning leh-c-grey"></span>
										<span>上午</span>
									</td>
									<td style="padding-left: 100px;">
										<span class="leh-c-blue">专家</span>
										<p class="leh-fs-twelve">50元/次</p>
									</td>
									<td>
										<span class="leh-c-blue">专家</span>
										<p class="leh-fs-twelve">50元/次</p>
									</td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr class="active">
									<td>
										<span class="iconfont icon-wx-aftermoon leh-c-grey"></span>
										<span>下午</span>
									</td>
									<td style="padding-left: 100px;"></td>
									<td></td>
									<td></td>
									<td>
										<span class="leh-c-blue">专家</span>
										<p class="leh-fs-twelve">50元/次</p>
									</td>
									<td></td>
								</tr>
								<tr class="active">
									<td>
										<span class="iconfont icon-wx-evening leh-c-grey"></span>
										<span>晚上</span>
									</td>
									<td style="padding-left: 100px;"></td>
									<td>
										<span class="leh-c-blue">专家</span>
										<p class="leh-fs-twelve">50元/次</p>
									</td>
									<td>
										<span class="leh-c-blue">专家</span>
										<p class="leh-fs-twelve">50元/次</p>
									</td>
									<td></td>
									<td></td>
								</tr>
								</tbody>
							</table>
						</div>
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
			<a class="mint-cell">
				<span class="mint-cell-mask"></span>
				<label class="mint-cell-title">
					<span class="mint-cell-text">中山大学附属第三医院</span>
					<span class="mint-cell-label">广东省广州市天河区天河路600号</span>
				</label>
				<div class="mint-cell-value"></div>
			</a>
			<a class="mint-cell">
				<span class="mint-cell-mask"></span>
				<label class="mint-cell-title">
					<span class="mint-cell-text">中山大学附属第三医院</span>
					<span class="mint-cell-label">广东省广州市天河区天河路600号</span>
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
	export default{
	  data () {
	    return{
	      openmsg: false,
		    arr2: [
			    {"date":"04-12","week":"周日","day":"上午","pos":"专家","times":"50"},
			    {"date":"04-12","week":"周日","day":"下午","pos":"专家","times":"40"},
			    {"date":"04-12","week":"周日","day":"晚上","pos":"专家","times":"30"},
			    {"date":"04-13","week":"周一","day":"上午","pos":"专家","times":"500"},
			    {"date":"04-13","week":"周一","day":"下午","pos":"专家","times":"510"},
			    {"date":"04-13","week":"周一","day":"晚上","pos":"专家","times":"520"},
			    {"date":"04-14","week":"周二","day":"下午","pos":"专家","times":"550"},
			    {"date":"04-14","week":"周二","day":"晚上","pos":"专家","times":"560"},
			    {"date":"04-15","week":"周三","day":"下午","pos":"专家","times":"550"},
			    {"date":"04-15","week":"周三","day":"晚上","pos":"专家","times":"560"},
			    {"date":"04-16","week":"周四","day":"下午","pos":"专家","times":"550"},
			    {"date":"04-16","week":"周四","day":"晚上","pos":"专家","times":"560"},
			    {"date":"04-17","week":"周五","day":"下午","pos":"专家","times":"550"},
			    {"date":"04-17","week":"周五","day":"晚上","pos":"专家","times":"560"},
			    {"date":"04-18","week":"周六","day":"下午","pos":"专家","times":"550"},
			    {"date":"04-18","week":"周六","day":"晚上","pos":"专家","times":"560"}
		    ]
	    }
	  },

		ready () {
	  	let _self = this
			function getArr(arr){
				var map = {},
						dest = [];
				for(var i = 0; i < arr.length; i++){
					var ai = arr[i];
					if(!map[ai.date]){
						dest.push({
							date: ai.date,
							week: ai.week,
							data: [ai]
						});
						map[ai.date] = ai;
					}else{
						for(var j = 0; j < dest.length; j++){
							var dj = dest[j];
							if(dj.date == ai.date){
								dj.data.push(ai);
								break;
							}
						}
					}
				}
				_self.arr2 = dest
				console.log(_self.arr2);
			}
			getArr(this.arr2)
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
	.call-info-week-list:nth-last-of-type(1){border: 0;}
	.call-info-time-list .mint-cell-text{font-size: 14px;}
	.call-info-advertisement .mint-cell p{color: #f9975c;font-size: 14px;}
	.call-info-advertisement .mint-cell-mask{padding-right: 8px;}
	.call-info-advertisement .mint-cell-value .mint-cell-text{font-size: 12px;padding-left: 10px;color: #919191;}

	.call-info-time-list .mint-cell-label{font-size: 12px;margin-top: 10px;}
	.call-info-week-box{background-color: #f6fcff;padding-left: 10px;position: relative;}
	.call-info-week-box:before{content:'';width:100%;position: absolute;top: -1px;border-top:1px solid #e5e5e5;}
	.call-info-week-box ul{padding-left: 20px;border-bottom: 1px solid #e5e5e5;}
	.call-info-week-list{height: 42px;line-height: 40px;padding-right: 10px;color: #363636;border-bottom: 1px dotted #e5e5e5;}
	.call-info-week-list span.fl{margin-right: 10px;}
	.call-info-week-list span.fr{font-size: 16px;}
	.call-info-week-list span.fr span{font-size: 12px;}
	.call-info-time-list .mint-cell-value span{color: #aaa;}
	.call-info-txt{padding: 12px 10px;font-size: 12px;color: #363636;line-height: 20px;}

	.leh-grey-table .paddingleft {padding-left: 100px}
</style>