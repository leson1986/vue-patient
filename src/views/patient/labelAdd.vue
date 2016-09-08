<template>
	<m-header :isindex="true">
		<m-nav path="/patient/labelList" label="新建标签"></m-nav>
	</m-header>
	<m-content class-name="label-whitescreen">
		<div class="label-labellist-title-box">
			<div class="label-labellist-title">
				<span class="fl">标签分类</span>
				<input type="text" class="label-naipt" id="naIpt" placeholder="请输入标签名字" :value="title"/>
			</div>
		</div>

		<div class="label-labellist-list-box">
			<div class="label-labellist-list-title">
				患者列表
			</div>
			<div class="label-labellist-list js-label-labellist-list">
				<div  style="overflow: hidden;">
					<ul>
						<li class="label-labellist-list-li">
							<div class="label-labellist-list-li-img-pos">
								<div class="label-labellist-list-li-img">
									<img src="../../assets/img/littel-ico.png"/>
								</div>
								<span class="label-del-badge" style="display: none;">-</span>
							</div>
							<span class="label-labellist-list-name">张三1</span>
						</li>
						<li class="label-labellist-list-li">
							<div class="label-labellist-list-li-img-pos">
								<div class="label-labellist-list-li-img">
									<img src="../../assets/img/littel-ico.png"/>
								</div>
								<span class="label-del-badge" style="display: none;">-</span>
							</div>
							<span class="label-labellist-list-name">张三2</span>
						</li>
						<li class="label-labellist-list-li">
							<div class="label-labellist-list-li-img-pos">
								<div class="label-labellist-list-li-img">
									<img src="../../assets/img/littel-ico.png"/>
								</div>
								<span class="label-del-badge" style="display: none;">-</span>
							</div>
							<span class="label-labellist-list-name">张三3</span>
						</li>
					</ul>
				</div>
				<!--添加删除按钮-->
				<ul>
					<li class="label-labellist-list-li-add">
						<div class="mui-icon mui-icon-plusempty label-labellist-list-li-add-btn" id="addBtn"></div>
					</li>
					<li class="label-labellist-list-li-del">
						<div class="label-labellist-list-li-del-btn" id="alldelBtn">—</div>
					</li>
				</ul>
			</div>
		</div>

		<div class="leh-float-btn" id="keepBtn">保存</div>

		<!--弹框-->
		<div class="leh-black-scancf js-leh-black-scancf" style="display: none;" id="keepBox">
			<div class="leh-tapbox" style="display: none;" id="writeBox">
				<p>
					本次编辑需设置标签名字后才能保存
				</p>
				<div class="leh-tapbtnbox">
					<div class="leh-offbtn">不保存</div>
					<div class="leh-onbtn" id="writeOn">马上填写</div>
				</div>
			</div>

			<div class="leh-tapbox" style="display: none;" id="yesBox">
				<p>
					保存本次编辑？
				</p>
				<div class="leh-tapbtnbox">
					<div class="leh-offbtn">不保存</div>
					<div class="leh-onbtn" id="keepOn">保存</div>
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
		route: {
			data: function (transition) {
				this.title = transition.to.query.title
			}
		},
		data () {
			return{
				title: '1'
			}
		},
		ready () {
		},
		events: {
			'footer-button-event' () {
				alert('完成')
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
	.label-whitescreen{background-color: #fff;min-height: 100%;padding-bottom: 2.8rem;}
	.label-labellist-title-box{padding-left:0.8rem;}
	.label-labellist-title{height: 3.84rem;line-height: 3.84rem;font-size: 1.04rem;border-bottom: 1px solid #e5e5e5;overflow: hidden;padding-right: 0.8rem;}
	.label-labellist-title-blue{margin-left: 10px;font-size: 24px;color: #1dadfe;}
	.label-labellist-list-box{}
	.label-labellist-list-title{height:3.4rem;line-height:3.4rem;padding: 0 0.8rem;font-size: 1.04rem;}
	.label-labellist-list{overflow: hidden;}
	.label-labellist-list-li{width: 25%;float: left;padding: 0.8rem 0;box-sizing: border-box;}
	.label-labellist-list-li-img{width: 3.8rem;height: 3.8rem;border-radius: 50%;overflow: hidden;margin: 0 auto;}
	.label-labellist-list-li-img img{display: block;width: 100%;}
	.label-labellist-list-name{text-align: center;width: 100%;float: left;margin-top:0.4rem;font-size: 0.88rem;}
	.label-labellist-list-li-add{width: 25%;float: left;padding: 0.8rem 0;}
	.label-labellist-list-li-add-btn{height: 3.8rem;line-height: 3.8rem;width: 100%;text-align: center;font-size: 3.4rem;font-weight: bold;color: #aaa;}
	.label-labellist-list-li-del{width: 25%;float: left;padding: 0.8rem 0;}
	.label-labellist-list-li-del-btn{height: 3.8rem;line-height: 3.8rem;width: 100%;text-align: center;font-size: 2.4rem;color: #aaa;}
	.label-labellist-list-li-img-pos{position: relative;}
	.label-del-badge{width: 1.04rem;height: 1.04rem;position: absolute;top: 0;right: 0.88rem;background-color: #ed2533;border-radius: 50%;overflow: hidden;line-height: 1.04rem;text-align: center;font-size: 1.24rem;color: #fff;}
	.label-naipt{width: 70% !important;float: right;height: 3.84rem !important;border: 0 !important;font-size:1.04rem;color: #1dadfe;text-align: right;margin: 0 !important;padding-right: 0 !important;}
	.label-labellist-title .fr{font-size: 1.04rem;color: #1dadfe;}
</style>