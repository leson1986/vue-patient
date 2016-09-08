<template>
	<m-header :isindex="true">
		<m-nav path="/patient/home" label="标签分类列表"></m-nav>
	</m-header>
	<m-content>
		<div class="label-humenbeingbox">
			<div class="label-humenbeingtitle" id="hbshowTap">
				<span class="iconfont icon-mui-icon-r-mentype label-humenbeingico"></span>
				<span class="fl">标化-人群分类</span>
				<span class="mui-icon mui-icon-arrowdown js-labelarr"></span>
			</div>
			<div class="label-humenbeingmain mui-checkbox" >
				<ul>
					<li class="label-humenbeing-mainlist js-label-humenbeing-mainlist">
						<div class="js-label-humenbeing-main-title clearfix">
							<span class="fl">乙肝</span>
							<span class="mui-icon mui-icon-arrowright label-humenbeing-main-list-ico js-label-humenbeing-main-ico"></span>
						</div>
						<ul class="js-label-humenbeing-main label-humenbeing-disnone">
							<li class="label-humenbeing-list js-label-target-list" data-type = "0">
								<label for="">
									<span class="fl">慢性HBV携带者</span>
									<input type="checkbox" class="label-humenbeing-ipt"/>
								</label>
							</li>
							<li class="label-humenbeing-list js-label-target-list" data-type = "0">
								<label for="">
									<span class="fl">慢性HBV携带者</span>
									<input type="checkbox" class="label-humenbeing-ipt"/>
								</label>
							</li>
						</ul>
					</li>
					<li class="label-humenbeing-mainlist js-label-humenbeing-mainlist">
						<div class="js-label-humenbeing-main-title clearfix">
							<span class="fl">丙肝</span>
							<span class="mui-icon mui-icon-arrowright label-humenbeing-main-list-ico js-label-humenbeing-main-ico"></span>
						</div>
						<ul class="js-label-humenbeing-main label-humenbeing-disnone">
							<li class="label-humenbeing-list js-label-target-list" data-type = "0">
								<label for="">
									<span class="fl">慢性HBV携带者</span>
									<input type="checkbox" class="label-humenbeing-ipt"/>
								</label>
							</li>
							<li class="label-humenbeing-list js-label-target-list" data-type = "0">
								<label for="">
									<span class="fl">慢性HBV携带者</span>
									<input type="checkbox" class="label-humenbeing-ipt"/>
								</label>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<div class="label-humenbeingbox">
			<div class="label-humenbeingtitle" @click="show_diy">
				<span class="iconfont icon-mui-icon-r-diytype label-customico"></span>
				<span class="fl">自定义分类</span>
				<span class="mui-icon mui-icon-arrowright js-labelcarr"></span>
			</div>
			<div class="label-humenbeingmain mui-checkbox" v-show="isDiy">
				<ul>
					<li class="label-humenbeing-mainlist">
						<label for="">
							<span class="fl">慢性HBV携带者</span>
							<input type="checkbox" class="label-humenbeing-ipt"/>
						</label>
					</li>
					<li class="label-humenbeing-mainlist">
						<label for="">
							<span class="fl">慢性HBV携带者</span>
							<input type="checkbox" class="label-humenbeing-ipt"/>
						</label>
					</li>
					<li class="label-humenbeing-mainlist">
						<label for="">
							<span class="fl">慢性HBV携带者</span>
							<input type="checkbox" class="label-humenbeing-ipt"/>
						</label>
					</li>
				</ul>
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
				isDiy: false
			}
		},
		events: {
			'footer-button-event' () {
				alert('完成')
			}
		},
		methods: {
			show_diy () {
				if(this.isDiy){
					this.isDiy = false;
					return;
				}
				this.isDiy = true;
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
	.label-humenbeingbox{padding: 0.12rem 0px 0.12rem 0.8rem;background-color: #fff;margin-bottom: 0.8rem;}
	.label-custombox{padding:0.12rem 0px;background-color: #fff;margin-bottom: 0.8rem;}
	.label-humenbeingtitle{height: 3.4rem;line-height: 3.4rem;font-size:1.12rem;color: #363636;overflow: hidden;padding-right: 0.8rem;}
	.label-custombox .label-humenbeingtitle{height: 3.4rem;line-height: 3.16rem;padding:0 0.8rem;}
	.label-humenbeingico{float: left;font-size: 1.4rem;color: #1dadfe;margin-right: 0.54rem;}
	.label-customico{float: left;font-size: 1.4rem;color: #22d1a2;margin-right: 0.54rem;}
	.label-humenbeingmain{padding-left: 0.8rem;}
	.label-humenbeing-mainlist{overflow: hidden;padding:1.12rem 0.8rem 1.12rem 0;border-bottom: 1px solid #e5e5e5;position: relative}
	.label-humenbeing-mainlist:nth-last-child(1){border-bottom: 0;}
	.label-humenbeing-mainlist .fl,.custom-mainlist .fl{font-size: 1.12rem;color: #363636;}
	.label-humenbeing-mainlist .fr,.custom-mainlist .fr{font-size: 0.96rem;color: #919191;}
	.label-custombox{margin-bottom: 0;padding-bottom: 0;}
	.label-custommain .mui-table-view-cell{padding: 0 0 0 1.6rem;}
	.label-custommain .mui-table-view-cell:after{height: 0;}
	.label-custom-mainlist:nth-last-child(1) .label-custom-mainlistline{border-bottom: 0;}
	.label-humenbeing-mainlist label{width: 100%;padding-right: 0;display: block;overflow: hidden;}
	.label-custom-mainlistline .fl{font-size: 1.04rem;}
	.label-custom-mainlistline .fr{font-size: 0.96rem;}
	.label-humenbeingtitle .mui-icon{float: right;line-height: 3.4rem;font-size: 1.36rem;color: #aaa;}
	.label-humenbeing-main-list-ico{float: right;font-size: 1.4rem;color: #aaa;}
	.label-humenbeing-list{padding: 1.12rem 0;overflow: hidden;border-bottom: 1px solid #e5e5e5;}
	.label-humenbeing-list:nth-last-of-type(1){padding-bottom: 0;border-bottom: 0;}
	.label-humenbeing-list span.fl{font-size: 1.04rem;color: #919191;}
	.label-humenbeing-disnone{display: none;}
	.mui-checkbox input[type='checkbox'] {top: 20px}
</style>