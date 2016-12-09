<template>
	<mt-header fixed isgrey title="用药提醒">
		<mt-button v-link="'/home'" icon="arr-left" slot="left"></mt-button>
	</mt-header>

	<div class="leh-float-box">
		<mt-button type="green" @click="remindAdd">新增提醒</mt-button>
	</div>

	<mt-content>
		<!--无提醒-->
		<div class="leh-not-apply" v-if="is_visible">暂无用药提醒</div>
		<!--有提醒-->
		<div class="reminds-apply" v-if="!is_visible">
			<mt-translate>
				<mt-translate-item
						class-name="reminds-apply-list"
						v-for="(index, item) in 3"
						:class="{'leh-active': index%2 == 0}"
						:name="index"

						delbtn>
					<a class="mint-cell">
						<label class="mint-cell-title" v-link="{path: '/online/remindAdd', query: {id: index, isEdit: 1}, replace: true}">
							<span class="mint-cell-text leh-red-dot">
								<span>{{index}}对乙酰氨基酚片</span>
							</span>
							<span class="mint-cell-label">
								<p>一天一次    一次一片</p>
								<p>8:00/14:30/22:30</p>
							</span>
						</label>
						<div class="mint-cell-value">
							<div class="reminds-apply-switch"></div>
						</div>
					</a>
				</mt-translate-item>
			</mt-translate>
		</div>

		<!-- 弹出窗 -->
		<mt-popup-box v-if="ispopup">
			<p slot="info">是否删除此提醒？</p>
			<div slot="button">
				<mt-button type="grey" size="small" @click="cancle">确定</mt-button>
				<mt-button type="blue" size="small" @click="conf">确定</mt-button>
			</div>
		</mt-popup-box>
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
		route: {
			data ({to, next}) {

				next()
			}
		},
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
			remindAdd () {
				this.$route.router.go({path:'/online/remindAdd',query:{ isEdit: 0}, replace: true})
			},
			msgBox (ids) {

				MessageBox({
					title: '提示',
					message: '是否删除此单据?',
					showCancelButton: true
				}).then(action => {
					console.log('callback:', ids);
				});
			}
		},

		events: {
			'handle-del' (e) {
				//this.ispopup  = true
				this.ids = $(e.target).attr('id')
				this.msgBox(this.ids)
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
	.reminds-apply-list .mint-cell:after,.reminds-apply-list .mint-cell:before{border: 0;}
	.reminds-apply-list .sl-content{padding: 0;}
	.reminds-apply-list .mint-cell-text span{width: 120px;display:inline-block;text-overflow:ellipsis; overflow:hidden; white-space:nowrap}
	.reminds-apply-list .mint-cell-label{margin-top: 8px;}
	.reminds-apply-list .mint-cell-label p{color: #363636;font-size: 12px;line-height: 20px;}
	.reminds-apply-switch{width: 32px;height: 14px;background: url(../../assets/img/switch-btn.png) no-repeat;background-size: 100% auto;}
	.reminds-apply-list.leh-active .mint-cell span,.reminds-apply-list.leh-active .mint-cell p{color: #919191;}
	.reminds-apply-list.leh-active .reminds-apply-switch{background-position: bottom center;}

</style>
