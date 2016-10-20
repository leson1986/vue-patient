<template>
	<mt-content class="page-infinite">
		<div class="evaluation-head">
			<span class="iconfont icon-wx-arr-left evaluation-head-arr" v-link="{path: '/mydoctor/doctor', query: {todoctor: true, id: ids}, replace: true}"></span>
			<div class="evaluation-head-title">患者评价</div>
			<div class="page-cell">
				<a class="mint-cell">
						<span class="mint-cell-mask">
							<div class="evaluation-head-img">
								<img :src="doctorCommon.photo" v-if="doctorCommon.photo !== null"/>
								<img src="../../assets/img/private.jpg" v-if="doctorCommon.photo === null"/>
							</div>
						</span>
					<label class="mint-cell-title">
							<span class="mint-cell-text">
								<span>{{ doctorCommon.name }}</span>
								<span class="leh-fs-fourteen">{{ doctorCommon.title }}</span>
								<span class="leh-fs-fourteen">{{ doctorCommon.custName }}</span>
							</span>
						<span class="mint-cell-label">{{ doctorCommon.hosipitalName }}</span>
					</label>
					<div class="mint-cell-value">
						<div>
							<span class="mint-cell-text">评价</span>
							<span class="mint-cell-label" v-text="assess"></span>
						</div>
					</div>
				</a>
			</div>
		</div>
		<div class="evaluation-content">
			<div class="doctor-details-comment-list-box">
				<div class="page-infinite-list">
					<div class="leh-null-data" v-if="!doctorRateItems.length">暂无评价</div>
					<ul>
						<li class="doctor-details-comment-list" v-for="items in doctorRateItems">
							<p class="leh-double-text-ellipsis">{{ items.content || '暂无评价'}}</p>
							<div class="doctor-details-comment-list-bd">
								<span class="fl">{{ items.markName }}</span>
								<span class="fr">{{ items.createTime }}</span>
							</div>
						</li>
					</ul>
				</div>

				<div class="page-infinite-loading document-index-load-tap" v-if="pageDoctorRateNum*10 <= pageDoctorRateTotal">
					<mt-button size="large" type="transparent" icon="load" @click="moreDoctorRate" >点击加载更多</mt-button>
				</div>
			</div>
		</div>
	</mt-content>
</template>
<script>
	import MtContent from '../../components/content.vue'
	import MtButton from '../../components/button.vue'
	import {getJson} from 'util'

	export default{
		route: {
			data (transition) {

				let _self = this

				_self.ids = transition.to.query.id

				// 公共信息
				getJson('api/doctors/common/'+ _self.ids, '', (rsp)=>{
					_self.doctorCommon = rsp

					// 患者评价
					getJson('api/assess/'+ _self.ids +'?pageIndex=1&pageSize=10', '', (rsp_rate)=>{
						_self.doctorRateItems = rsp_rate.items
						_self.assess = rsp_rate.totalQty
						_self.pageDoctorRateTotal = rsp_rate.totalQty
					},_self)
				},_self)


			}
		},

	  data () {
	    return{
		    assess: '', // 评价总数
		    ids: '', // 医生ID
		    doctorRateItems: '', // 患者评价
		    pageDoctorRateTotal: 0, // 患者评价列表总数
		    pageDoctorRateNum: 1,  // 患者评价列表页码
		    doctorCommon: '', // 公共信息
	    }
	  },

		methods: {

			// 获取更多患者评价信息
			moreDoctorRate () {
				let _self = this

				if(_self.pageDoctorRateNum*10 >= _self.pageDoctorRateTotal) {
					return
				}
				_self.pageDoctorRateNum = _self.pageDoctorRateNum + 1
				getJson('api/assess/'+ _self.ids +'?pageIndex='+ _self.pageDoctorRateNum +'&pageSize=10', '', (rsp)=>{

					// 合并数组
					_self.doctorRateItems = _self.doctorRateItems.concat(rsp.items)
				},_self)
			}
		},

		components: {
			MtContent,
			MtButton
		}
	}
</script>

<style>
	.evaluation-head{height:125px;width:100%;position:absolute;top:0;left:0;background-color: #1faa2b;overflow: hidden;}
	.evaluation-head .mint-cell{background-color: transparent;}
	.evaluation-head .mint-cell span{color: #fff;}
	.evaluation-head .mint-cell:after,.evaluation-head .mint-cell:before{border: 0;}
	.evaluation-head .mint-cell-text span{margin-right: 5px;}
	.evaluation-head .mint-cell-value div{padding-top: 10px;text-align: center;}
	.evaluation-head .mint-cell-value div .mint-cell-text{font-size: 14px;}
	.evaluation-head .mint-cell-value .mint-cell-label{margin-top: 7px;}
	.evaluation-head-arr{position: absolute;top: 0;left: 10px;width: 15%;height: 60px;display: inline-block;padding-top: 13px;color: #fff;}
	.evaluation-head-title{height: 40px;line-height: 50px;text-align: center;font-size: 16px;color: #fff;}
	.evaluation-head-img{width: 48px;height: 48px;overflow: hidden;border-radius: 50%;margin-right: 10px;text-align: center;}
	.evaluation-head-img img{width: 100%;min-height: 100%;height: auto}
	.evaluation-content{position:absolute;top: 125px;bottom: 0;left:0;right:0;overflow-y: auto;overflow-x: hidden;}
	.doctor-details-comment-list-box{padding-left: 10px;}
	.doctor-details-comment-list{padding: 10px 10px 10px 0;overflow: hidden;border-bottom: 1px solid #e5e5e5;}
	.doctor-details-comment-list:nth-last-of-type(1){border-bottom: 0;}
	.doctor-details-comment-list p{font-size: 14px;line-height: 20px;color: #363636;}
	.doctor-details-comment-list-bd{margin-top: 10px;overflow: hidden;}
	.doctor-details-comment-list-bd span{color: #919191;font-size: 12px;}


	.document-index-load-tap .mint-button--transparent{text-align: center;}
</style>