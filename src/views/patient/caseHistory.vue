<template>
	<m-header :isindex="true">
		<m-nav path="/patient/details" label="我的病历"></m-nav>
	</m-header>
	<m-content>
		<div class="sick-pos">
			<div>
				<div class="mui-scroll sick-padbot">
					<div class="sick-miantitlebox">
						<span class="iconfont icon-mui-icon-r-yyuan sick-miantitleico"></span>
						<div class="fl">
							<p class="leh-text-ellipsis">中山大学附属第三医院</p>
							<p>
								<span>感染性疾病科</span>
								<span>林小小</span>
							</p>
						</div>
						<div class="clearfix"></div>
						<p class="sick-miantitle-time">2016年2月15日</p>
					</div>
					<div class="sick-mianitembox">
						<ul>
							<li class="mui-table-view-cell">
								<span class="fl">病情描述</span>
								<p>按实际打款时间段里看见爱上了激烈的骄傲看来是基督教三楼</p>
							</li>
							<li class="mui-table-view-cell">
								<span class="fl">特<em class="sickmar1">征</em></span>
								<p>按实际打款时间</p>
							</li>
							<li class="mui-table-view-cell">
								<span class="fl">诊断结果</span>
								<p>按实际打款时</p>
							</li>
							<li class="mui-table-view-cell">
								<span class="fl">处理意见</span>
								<p>按实际打款时间段里看见爱上了激烈的骄傲看来是基督教三楼</p>
							</li>
						</ul>
					</div>
					<div class="sick-prescriptionbox">
						<div class="sick-prescriptiontitle">处方</div>
						<ul>
							<li class="mui-table-view-cell">
								<p>复方安芬烷胺片（博路定）</p>
								<p>5ml*2瓶</p>
								<p>皮下注射，每周1次，每次180ug</p>
							</li>
							<li class="mui-table-view-cell">
								<p>复方安芬烷胺片（博路定）</p>
								<p>5ml*2瓶</p>
								<p>皮下注射，每周1次，每次180ug</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</m-content>
	<m-footer-button>保存</m-footer-button>
</template>
<script>
	import MHeader from '../../components/mHeadBar'
	import MNav from '../../components/mNav'
	import MContent from '../../components/mContent'
	import MFooterButton from '../../components/mFooterButton'

	export default{
		data () {
			return{
			}
		},
		components: {
			MHeader,
			MNav,
			MContent,
			MFooterButton
		}
	}
</script>

<style>
	.sick-sidelist .mui-table-view-cell{padding: 0 0.8rem 0 2.08rem;height: 3.04rem;line-height: 3.04rem;overflow: hidden;font-size: 0.96rem;}
	.sick-sidelist .mui-table-view-cell:after{left: 2.08rem;}
	.sick-padbot{padding-bottom: 2.88rem;}
	.sick-miantitlebox{padding: 1.2rem 0.8rem 1.04rem;background-color: #f6fbfe;overflow: hidden;}
	.sick-miantitleico{float: left;margin-top:0.4rem;width: 2.48rem;height: 2.48rem;line-height: 2.48rem;text-align: center;border-radius: 50%;border: 1px solid #cdcdcd;color: #cdcdcd;font-size: 1.4rem;margin-right: 0.64rem;}
	.sick-miantitlebox div.fl{max-width: 70%;}
	.sick-miantitlebox div.fl p:nth-of-type(1){font-size: 1.2rem;color: #1dadfe;}
	.sick-miantitlebox div.fl p:nth-of-type(2).check-objective{font-size: 1.04rem;color: #363636;}
	.sick-miantitlebox div.fl p:nth-of-type(2){font-size: 1.04rem;color: #919191;margin-top: 0.48rem;}
	.sick-miantitlebox div.fl p:nth-of-type(2) span{margin-right: 0.64rem;}
	.sick-miantitle-time{text-align: right;margin-top: 0.48rem;color: #919191;font-size: 0.96rem;}
	.sick-mianitembox{overflow: hidden;background-color: #fff;margin-bottom: 0.4rem;}
	.sick-mianitembox .mui-table-view-cell{padding:1.2rem 0.8rem;font-size: 0.96rem;color: #919191;}
	.sick-mianitembox .mui-table-view-cell:after{left: 0.8rem;}
	.sick-mianitembox .mui-table-view-cell p{padding-left: 5.52rem;font-style: 1.04rem;}
	.sick-mianitembox em.sickmar1{margin-left: 1.92rem;}
	.sick-prescriptionbox{background-color: #fff;}
	.sick-prescriptiontitle{height: 3.2rem;line-height: 3.2rem;font-size: 1.28rem;text-align: center;border-bottom: 1px solid #e5e5e5;}
	.sick-prescriptionbox .mui-table-view-cell{padding: 0.8rem;overflow: hidden;}
	.sick-prescriptionbox .mui-table-view-cell:after{left: 0.8rem;}
	.sick-prescriptionbox .mui-table-view-cell p:nth-of-type(1){font-size: 1.12rem;color: #1dadfe;margin-bottom: 0.24rem;}
	.sick-prescriptionbox .mui-table-view-cell p:nth-of-type(2){font-size: 1.04rem;line-height: 1.6rem;}
	.sick-prescriptionbox .mui-table-view-cell p:nth-of-type(3){font-size: 1.04rem;line-height: 1.6rem;}
	.sick-pos{position: relative;height: 100%;}
	.sick-whitelistimgbox img{width: 100%;}
</style>