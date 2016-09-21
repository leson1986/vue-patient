<template>
	<mt-content class="page-infinite">
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
								<span v-text="name"></span>
								<span class="leh-fs-fourteen" v-text="title"></span>
								<span class="leh-fs-fourteen" v-text="department"></span>
							</span>
						<span class="mint-cell-label" v-text="hospital"></span>
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
			<div class="doctor-details-comment-list-box page-infinite-wrapper" v-el:wrapper :style="{ height: wrapperHeight + 'px' }">
				<div class="page-infinite-list" v-infinite-scroll="loadMore()" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
					<ul>
						<li class="doctor-details-comment-list" v-for="item in list">
							<p class="leh-double-text-ellipsis">功能性消化不良，肠易激综合症、炎症性肠病及非酒精性脂肪肝、肝硬化扥那个中西结合治疗</p>
							<div class="doctor-details-comment-list-bd">
								<span class="fl">陈**</span>
								<span class="fr">2016-02-30</span>
							</div>
						</li>
					</ul>
				</div>
				<p v-show="loading" class="page-infinite-loading">
					<mt-spinner type="fading-circle"></mt-spinner>
					加载中...
				</p>
			</div>
		</div>
	</mt-content>
</template>
<script>
	import MtContent from '../../components/content.vue'
	import MtSpinner from '../../components/spinner.vue'

	export default{
	  data () {
	    return{
	      name:'张医生',
		    title: '副主任医师',
		    department: '消化内科',
		    hospital: '中山大学附属第三医院',
		    assess: '1002',
		    list: [],
		    loading: false,
		    allLoaded: false,
		    wrapperHeight: 0
	    }
	  },

		methods: {
			loadMore() {
				this.loading = true;
				setTimeout(() => {
					let last = this.list[this.list.length - 1];
					for (let i = 1; i <= 10; i++) {
						this.list.push(last + i);
					}
					this.loading = false;
				}, 2500);
			}
		},

		compiled() {
			for (let i = 1; i <= 10; i++) {
				this.list.push(i);
			}
		},

		ready() {
			this.wrapperHeight = document.documentElement.clientHeight - this.$els.wrapper.getBoundingClientRect().top;
		},

		components: {
			MtContent,
			MtSpinner
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