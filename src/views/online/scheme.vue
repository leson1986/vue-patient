<template>
	<mt-header fixed isgrey title="随访日程">
		<mt-button v-link="'/home'" icon="arr-left" slot="left"></mt-button>
	</mt-header>
	<div class="leh-float-box">
		<mt-button type="green" v-link="'/online/schemeAdd'">新增日程</mt-button>
	</div>
	<mt-content>
		<!--无日程-->
		<div class="leh-not-apply" style="display: none;">暂无日程安排</div>
		<!--有日程-->
		<div class="schedule-apply">
			<div class="page-cell schedule-apply-title">
				<a class="mint-cell">
					<label class="mint-cell-title">
						<span class="mint-cell-text">2016.08</span>
					</label>
					<div class="mint-cell-value"></div>
				</a>
			</div>
			<mt-translate>
				<mt-translate-item
						class-name="schedule-apply-list"
						v-for="(index, item) in 3"
						:class="{'leh-active': index%2 == 0}"
						:name="index"

						delbtn>
					<a class="mint-cell">

						<span class="mint-cell-mask"></span>
						<label class="mint-cell-title">
							<span class="mint-cell-text leh-red-dot">08-12</span>
							<span class="mint-cell-label">9:00</span>
						</label>
						<div class="schedule-apply-txt">医院复诊</div>
						<div class="mint-cell-value">
							<span class="iconfont icon-wx-ling"></span>
						</div>
					</a>
				</mt-translate-item>
			</mt-translate>

			<!-- 弹出窗 -->
			<mt-popup-box v-if="ispopup">
				<p slot="info">是否删除此日程？</p>
				<div slot="button">
					<mt-button type="grey" size="small" @click="cancle">取消</mt-button>
					<mt-button type="blue" size="small" @click="conf">确定</mt-button>
				</div>
			</mt-popup-box>
		</div>
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
	import $ from 'zepto'

	export default{
		data () {
			return{
				is_visible: false,
				ispopup: false,
				ids: ''
			}
		},

		methods: {
			cancle () {
				this.ispopup  = false
			},
			conf () {
				this.ispopup  = false
			},
			remindAdd (id) {
				this.$route.router.go('/online/remindAdd')
			}
		},

		events: {
			'handle-del' (e) {
				this.ispopup  = true
				this.ids = $(e.target).attr('id')
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
	.schedule-apply-title .mint-cell{background-color: #f0f0f0;}
	.schedule-apply-title .mint-cell:after,.schedule-apply-title .mint-cell:before,.schedule-apply-list .mint-cell:after,.schedule-apply-list:nth-last-of-type(1) .mint-cell:before{border: 0;}
	.schedule-apply-list .sl-content{padding: 0 !important;}
	.schedule-apply-list .mint-cell span,.schedule-apply-list .mint-cell div{color: #919191;}
	.schedule-apply-list.leh-active .mint-cell span,.schedule-apply-list.leh-active .mint-cell div{color: #363636;}
	.schedule-apply-list.leh-active .mint-cell .mint-cell-text{color: #1faa2b;}
	.schedule-apply-list .mint-cell-value span{font-size: 22px;}
	.schedule-apply-list.leh-active .mint-cell-value span{color: #ff6060;}
	.schedule-apply-list .mint-cell:before{left: 10px;}
	.schedule-apply-list .mint-cell-text{font-size: 16px;}
	.schedule-apply-list .mint-cell-label{font-size: 22px;margin-top: 5px;}
	.schedule-apply-txt{flex: 4;border-left: 1px solid #e5e5e5;padding-left: 15px;height: 40px;line-height: 40px;font-size: 14px;}
</style>