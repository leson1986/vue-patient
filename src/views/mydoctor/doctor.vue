<template>
	<div class="leh-float-box">
		<mt-button type="green" v-link="'/mydoctor/doctorVisits'" reddot>门诊信息</mt-button>
		<mt-button type="blue" v-link="'/online/feedback'">在线留言</mt-button>
	</div>
	<div class="leh-wrap">
		<div class="doctor-details-head">
			<span class="iconfont icon-wx-arr-left doctor-details-head-arr" v-link="'/home'"></span>
			<div class="doctor-details-img">
				<img src="../../assets/img/private.jpg" />
			</div>
			<p>张医生<span> 主任医师</span></p>
		</div>
		<div class="doctor-details-content">
			<div class="doctor-details-list">
				<div class="doctor-details-list-title" @click="updown1 = !updown1">
					<span class="leh-c-green">执业地点</span>
					<span class="fr iconfont" :class="{ 'icon-wx-arr-up': !updown1, 'icon-wx-arr-down': updown1 }"></span>
				</div>
				<p :class="{ 'height-auto': updown1}">中山大学第三附属医院</p>
				<!--<p>中山大学第三附属医院<span>感染性疾病科</span></p>
				<p class="leh-double-text-ellipsis">广东省广州市天河区天河路100号</p>-->
			</div>
			<div class="leh-null-box"></div>
			<div class="doctor-details-list">
				<div class="doctor-details-list-title" @click="updown2 = !updown2">
					<span class="leh-c-green">医生擅长</span>
					<span class="fr iconfont" :class="{ 'icon-wx-arr-up': !updown2, 'icon-wx-arr-down': updown2 }"></span>
				</div>
				<p :class="{ 'height-auto': updown2}">暂无内容</p>
			</div>
			<div class="leh-null-box"></div>
			<div class="doctor-details-list">
				<div class="doctor-details-list-title" @click="updown3 = !updown3">
					<span class="leh-c-green">医生简介</span>
					<span class="fr iconfont" :class="{ 'icon-wx-arr-up': !updown3, 'icon-wx-arr-down': updown3 }"></span>
				</div>
				<p :class="{ 'height-auto': updown3}">功能性消化不良，肠易激综合症、炎症性肠病及非酒精性脂肪肝炎症性肠病及非酒精性脂肪肝、肝硬化扥那个中西结合治疗、肝硬化扥那个中西结合治疗</p>
			</div>
			<div class="leh-null-box"></div>
			<div class="page-cell">
				<a class="mint-cell" v-link="'/mydoctor/doctorRate'">
					<span class="mint-cell-mask"></span>
					<label class="mint-cell-title">
						<span class="mint-cell-text leh-c-green">患者评价</span>
					</label>
					<div class="mint-cell-value">
						<span>更多</span>
					</div>
					<span class="iconfont icon-wx-arr-right"></span>
				</a>
			</div>
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
	import MtContent from '../../components/content'
	import MtButton from '../../components/button.vue'
	export default{
	  data () {
	    return{
		    updown1: false,
		    updown2: false,
		    updown3: false
	    }
	  },
		components: {
			MtContent,
			MtButton
		}
	}
</script>

<style>
	.doctor-details-head{position: fixed;top: 0;bottom: 0;width: 100%;height: 130px;background-color: #1faa2b;padding:0 10px; z-index: 10;}
	.doctor-details-head-arr{position: absolute;top: 3px;left: 10px;width: 15%;height: 60px;display: inline-block;padding-top: 10px;color: #fff;}
	.doctor-details-img{width: 65px;height: 65px;margin: 20px auto 10px;border-radius:50%;overflow: hidden;}
	.doctor-details-head p{font-size: 14px;color: #fff;text-align: center;}
	.doctor-details-head p span{font-size: 12px;}
	.doctor-details-content{padding-top: 130px;}
	.doctor-details-list{padding: 15px 10px;overflow: hidden;color: #363636;}
	.doctor-details-list-title{overflow: hidden;margin-bottom: 10px;}
	.doctor-details-list-title span.fr{color: #aaa;}
	.doctor-details-list p{font-size: 14px;line-height: 20px; height: 20px; overflow: hidden}
	.doctor-details-list .height-auto{height: auto;}
	.doctor-details-list p span{margin-left: 10px;}
	.doctor-details-content .mint-cell:after{border: 0;}
	.doctor-details-content .mint-cell span{font-size: 14px;}
	.doctor-details-comment-list-box{padding-left: 10px;}
	.doctor-details-comment-list{padding: 10px 10px 10px 0;overflow: hidden;border-bottom: 1px solid #e5e5e5;}
	.doctor-details-comment-list:nth-last-of-type(1){border-bottom: 0;}
	.doctor-details-comment-list p{font-size: 14px;line-height: 20px;color: #363636;}
	.doctor-details-comment-list-bd{margin-top: 10px;overflow: hidden;}
	.doctor-details-comment-list-bd span{color: #919191;font-size: 12px;}
	.doctor-details-content .icon-wx-arr-right{font-size:12px;color: #fff;background-color: #e5e5e5;padding: 3px 0;margin-left: 5px;}
</style>