<template>
	<header class="mint-header is-fixed leh-bg-grey-head">
		<div class="mint-header-button is-left">
			<span class="iconfont icon-wx-arr-left leh-c-green"></span>
		</div>
		<h1 class="mint-header-title leh-c-black">新增日程</h1>
		<div class="mint-header-button is-right">
			<span class="leh-c-green" style="display: none">保存</span>
		</div>
	</header>
	<div class="leh-float-box">
		<button class="mint-button mint-button--green mint-button--large">
			<label class="mint-button-text">保存</label>
		</button>
	</div>
	<div class="leh-wrap">
		<div class="page-cell schedule-add-list">
			<a class="mint-cell">
				<label class="mint-cell-title">
					<span class="mint-cell-text">2016-8-12</span>
					<span class="mint-cell-label">09:00</span>
				</label>
				<div class="mint-cell-value">
					<span class="iconfont icon-wx-arr-right"></span>
				</div>
			</a>
			<a class="mint-cell">
				<span class="mint-cell-mask iconfont icon-wx-item"></span>
				<label class="mint-cell-title">
					<span class="mint-cell-text">提醒事项</span>
					<ul class="leh-select-drag-box" style="display: none;">
						<li>博路定</li>
						<li>博路定</li>
						<li>博路定</li>
					</ul>
				</label>
				<div class="mint-cell-value">
					<span class="iconfont icon-wx-arr-right"></span>
				</div>
			</a>
			<a class="mint-cell">
				<label class="mint-cell-title">
					<span class="mint-cell-text iconfont icon-wx-writte"></span>
					<span class="mint-cell-text">备注</span>
					<p>
						<textarea placeholder="把容易忘记的事情做个备注呗！"></textarea>
					</p>
				</label>
				<div class="mint-cell-value"></div>
			</a>
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
	.schedule-add-list .mint-cell:after,.schedule-add-list .mint-cell:nth-last-of-type(1):before{border:0;}
	.schedule-add-list .mint-cell:before{left:0;}
	.schedule-add-list .mint-cell .mint-cell-text,.schedule-add-list .mint-cell-mask{color: #919191;}
	.schedule-add-list .mint-cell:nth-of-type(1) .mint-cell-text{font-size: 14px;}
	.schedule-add-list .mint-cell:nth-of-type(1) .mint-cell-label{font-size: 26px;color: #363636;margin-top: 4px;}
	.schedule-add-list .mint-cell:nth-of-type(2) .mint-cell-title{line-height: 38px;}
	.schedule-add-list .mint-cell:nth-of-type(3) p{padding-left: 22px;}
	.schedule-add-list .mint-cell:nth-of-type(3) textarea{width: 100%;margin-top: 10px;border: 0;font-size: 14px;}
	.schedule-add-list .mint-cell-mask{margin-right: 10px;}
	.schedule-add-list .icon-wx-writte{margin-right: 7px;}
	.schedule-add-list .mint-cell{overflow: visible;}
	.schedule-add-list .mint-cell .leh-select-drag-box{padding: 0 5px;}
</style>