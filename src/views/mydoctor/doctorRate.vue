<template>
	<div class="leh-wrap">
		<div class="evaluation-head">
			<span class="iconfont icon-wx-arr-left evaluation-head-arr" v-link="'/mydoctor/doctor'"></span>
			<div class="evaluation-head-title">患者评价</div>
			<div class="page-cell">
				<a class="mint-cell">
						<span class="mint-cell-mask">
							<div class="evaluation-head-img">
								<img src="../../assets/img/private.jpg"/>
							</div>
						</span>
					<label class="mint-cell-title">
							<span class="mint-cell-text">
								<span>张医生</span>
								<span class="leh-fs-fourteen">副主任医师</span>
								<span class="leh-fs-fourteen">消化内科</span>
							</span>
						<span class="mint-cell-label">中山大学附属第一医院</span>
					</label>
					<div class="mint-cell-value">
						<div>
							<span class="mint-cell-text">评价</span>
							<span class="mint-cell-label">1211</span>
						</div>
					</div>
				</a>
			</div>
		</div>
		<div class="evaluation-content">
			<div class="doctor-details-comment-list-box">
				<ul>
					<li class="doctor-details-comment-list" v-for="n in 4">
						<p class="leh-double-text-ellipsis">功能性消化不良，肠易激综合症、炎症性肠病及非酒精性脂肪肝、肝硬化扥那个中西结合治疗</p>
						<div class="doctor-details-comment-list-bd">
							<span class="fl">陈**</span>
							<span class="fr">2016-02-30</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
	  data () {
	    return{
	      msg:'hello vue'
	    }
	  },
		components: {
		}
	}
</script>

<style>
	.evaluation-head{height:125px;width:100%;position:fixed;top:0;left:0;background-color: #1faa2b;overflow: hidden;}
	.evaluation-head .mint-cell{background-color: transparent;}
	.evaluation-head .mint-cell span{color: #fff;}
	.evaluation-head .mint-cell:after,.evaluation-head .mint-cell:before{border: 0;}
	.evaluation-head .mint-cell-text span{margin-right: 5px;}
	.evaluation-head .mint-cell-value .mint-cell-label{margin-top: 5px;}
	.evaluation-head-arr{position: absolute;top: 0;left: 10px;width: 15%;height: 60px;display: inline-block;padding-top: 10px;color: #fff;}
	.evaluation-head-title{height: 40px;line-height: 40px;text-align: center;font-size: 16px;color: #fff;}
	.evaluation-head-img{width: 48px;height: 48px;overflow: hidden;border-radius: 50%;margin-right: 10px;}
	.evaluation-content{padding-top: 125px;}
	.doctor-details-comment-list-box{padding-left: 10px;}
	.doctor-details-comment-list{padding: 10px 10px 10px 0;overflow: hidden;border-bottom: 1px solid #e5e5e5;}
	.doctor-details-comment-list:nth-last-of-type(1){border-bottom: 0;}
	.doctor-details-comment-list p{font-size: 14px;line-height: 20px;color: #363636;}
	.doctor-details-comment-list-bd{margin-top: 10px;overflow: hidden;}
	.doctor-details-comment-list-bd span{color: #919191;font-size: 12px;}
</style>