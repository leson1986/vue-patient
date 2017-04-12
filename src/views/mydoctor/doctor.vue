<template>
	<!--<div class="leh-float-box">
		<mt-button type="green" v-link="{path: '/mydoctor/doctorVisits', query: {id: ids}, replace: true}" :reddot="doctorItems.unread">门诊信息</mt-button>
		<mt-button type="blue" @click="toMsgUrl">在线留言</mt-button>
	</div>-->
	<div class="leh-wrap">
		<div class="doctor-details-head">
			<span class="iconfont icon-wx-arr-left doctor-details-head-arr" v-link="{path: '/home', query: {tohome: true}, replace: true}"></span>
			<div class="doctor-details-img">
				<img :src="doctorItems.photo" v-if="doctorItems.photo !== null"/>
				<img src="../../assets/img/private.jpg" v-if="doctorItems.photo === null"/>
			</div>
			<p>{{ doctorItems.name }}<span> {{ doctorItems.title }}</span></p>
		</div>
		<div class="doctor-details-content">
			<div class="doctor-details-list">
				<div class="doctor-details-list-title" @click="updown1 = !updown1">
					<span class="leh-c-green">执业地点</span>
					<span class="fr iconfont" :class="{ 'icon-wx-arr-down': !updown1, 'icon-wx-arr-up': updown1 }"></span>
				</div>
				<div class="height-normal" :class="{ 'height-auto': updown1}">
					<div>{{ doctorItems.hosipitalName }} &nbsp;&nbsp; {{ doctorItems.custName }}</span></div>
					<div class="leh-double-text-ellipsis">{{ doctorItems.hosipitalAddress }}</div>
				</div>
			</div>
			<div class="leh-null-box"></div>
			<div class="doctor-details-list">
				<div class="doctor-details-list-title" @click="updown2 = !updown2">
					<span class="leh-c-green">医生擅长</span>
					<span class="fr iconfont" :class="{ 'icon-wx-arr-down': !updown2, 'icon-wx-arr-up': updown2 }"></span>
				</div>
				<div class="height-normal" :class="{ 'height-auto': updown2}">{{ doctorItems.remark || '暂无信息'  }}</div>
			</div>
			<div class="leh-null-box"></div>
			<div class="doctor-details-list">
				<div class="doctor-details-list-title" @click="updown3 = !updown3">
					<span class="leh-c-green">医生简介</span>
					<span class="fr iconfont" :class="{ 'icon-wx-arr-down': !updown3, 'icon-wx-arr-up': updown3 }"></span>
				</div>
				<p :class="{ 'height-auto': updown3}">{{ doctorItems.introduction || '暂无信息' }}</p>
			</div>
			<div class="leh-null-box"></div>
			<div class="page-cell">
				<a class="mint-cell" v-link="{path: '/mydoctor/doctorRate', query:{id: ids}, replace: true}">
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
				<div class="leh-null-data" v-if="!doctorRateItems.length">暂无评价</div>
				<ul>
					<li class="doctor-details-comment-list" v-for="items in doctorRateItems">
						<p class="leh-double-text-ellipsis">{{ items.content }}</p>
						<div class="doctor-details-comment-list-bd">
							<span class="fl">{{ items.markName }}</span>
							<span class="fr">{{ items.createTime }}</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<mt-tabbar class-name="doctor-tabbar-box">
			<mt-tab-item  v-link="{path: '/mydoctor/doctorVisits', query: {id: ids}, replace: true}">
				<span slot="icon"><span class="mint-tab-item-icon" :class="{'leh-red-dot':doctorItems.unread}"></span></span>
				门诊信息
			</mt-tab-item>
			<mt-tab-item  @click="toMsgUrl">
				<span slot="icon"><span class="mint-tab-item-icon"></span></span>
				在线留言
			</mt-tab-item>
			<mt-tab-item @click="toCallUrl">
				<span slot="icon"><span class="mint-tab-item-icon"></span></span>
				电话预约
			</mt-tab-item>
		</mt-tabbar>

	</div>
</template>
<script>
	import MtContent from '../../components/content'
	import MtButton from '../../components/button.vue'
	import MtTabbar from '../../components/tabbar.vue'
	import MtTabItem from '../../components/tab-item.vue'
	import {getJson} from 'util'

	export default{
		route: {
			data ({to, next}) {

				let _self = this
				_self.ids = to.query.id
				//_self.isRatePage = to.query.todoctor || false
				//if(_self.isRatePage) return // 是否其他页面返回


				// 医生详情
				getJson('api/doctors/detail/'+ _self.ids, '', (rsp)=>{
					_self.doctorItems = rsp

					// 患者评价
					getJson('api/assess/'+ _self.ids +'?pageIndex=1&pageSize=5', '', (rsp)=>{
						_self.doctorRateItems = rsp.items
					},_self)
				},_self)

				next()

			}
		},

	  data () {
	    return{
		    updown1: false,
		    updown2: false,
		    updown3: false,
		    ids: '', // ID
		    doctorItems: '', // 医生详情
		    doctorRateItems: '', // 患者评价
		    isRatePage: false, // 是否从列表页返回
	    }
	  },
		methods: {

			// 跳转到留言页面
			toMsgUrl () {
				window.location.href='http://wx.jk7.com/html/pay/vue_msg_v.html?openID='+ openID;
			},
			// 跳转到电话预约
			toCallUrl () {
				window.location.href='http://wx.jk7.com/html/pay/vue_call_v.html?id='+this.ids;
			}
		},
		components: {
			MtContent,
			MtButton,
			MtTabbar,
			MtTabItem
		}
	}
</script>

<style>
	.doctor-details-head{position: absolute;top: 0;bottom: 0;width: 100%;height: 130px;background-color: #1faa2b;padding:0 10px;}
	.doctor-details-head-arr{position: absolute;top: 3px;left: 10px;width: 15%;height: 60px;display: inline-block;padding-top: 10px;color: #fff;}
	.doctor-details-img{width: 65px;height: 65px;margin: 20px auto 10px;border-radius:50%;overflow: hidden;}
	.doctor-details-head p{font-size: 14px;color: #fff;text-align: center;}
	.doctor-details-head p span{font-size: 12px;}
	.doctor-details-content{position: absolute;top: 130px;bottom: 53px;left:0;right:0;overflow-y: auto;overflow-x: hidden;}
	.doctor-details-list{padding: 15px 10px;overflow: hidden;color: #363636;}
	.doctor-details-list div{word-wrap: break-word}
	.doctor-details-list-title{overflow: hidden;margin-bottom: 10px;}
	.doctor-details-list-title span.fr{color: #aaa;}
	.doctor-details-list .height-normal {font-size: 14px;line-height: 20px; height: 20px; overflow: hidden}
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

	.doctor-tabbar-box,.doctor-tabbar-box>.mint-tab-item:nth-last-of-type(1){border: 0 !important;background-color: #1faa2b;}
	.doctor-tabbar-box>.mint-tab-item,.doctor-tabbar-box>.mint-tab-item.is-selected{background-color: #1faa2b;margin: 7px 0;padding: 0;border-right: 1px solid rgba(255,255,255,0.6);}
	.doctor-tabbar-box>.mint-tab-item .mint-tab-item-label{color: #fff;}
	.doctor-tabbar-box>.mint-tab-item .mint-tab-item-icon{background: url(../../assets/img/doctor-nav.png) no-repeat;background-size: 75px auto;display: inline-block;margin-bottom: 0}
	.doctor-tabbar-box .mint-tab-item:nth-of-type(2) .mint-tab-item-icon{background-position:-26px 0;}
	.doctor-tabbar-box .mint-tab-item:nth-of-type(3) .mint-tab-item-icon{background-position:-53px 0;}

	.doctor-details-list .height-auto {height: auto; overflow: auto}

</style>
