<template>
  <div class="page page-current">
      <!--<bar v-if="isIndex">
        <bar-item path="/home" label="首页" icon="home"></bar-item>
        <bar-item path="/tasks" label="任务" icon="tasks"></bar-item>
        <bar-item path="/list" label="列表" icon="mytask"></bar-item>
        <bar-item path="/user" label="我自己" icon="me"></bar-item>
        <bar-item path="/more" label="更多" icon="more"></bar-item>
      </bar>-->

      <router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
  </div>
</template>

<script>
import $ from 'zepto'
import wx from 'wx'

export default {
  ready () {
    // 微信配置
	  function wxconfig (data){
		  wx.config({
			  debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
			  appId: data.appId, // 必填，公众号的唯一标识
			  nonceStr: data.nonceStr, // 必填，生成签名的随机串
			  timestamp: data.timestamp, // 必填，生成签名的时间戳
			  signature: data.signature, // 必填，签名，见附录1
			  jsApiList: [
				  'checkJsApi',
				  'onMenuShareTimeline',
				  'onMenuShareAppMessage',
				  'onMenuShareQQ',
				  'onMenuShareWeibo',
				  'hideMenuItems',
				  'showMenuItems',
				  'hideAllNonBaseMenuItem',
				  'showAllNonBaseMenuItem',
				  'translateVoice',
				  'startRecord',
				  'stopRecord',
				  'onRecordEnd',
				  'playVoice',
				  'pauseVoice',
				  'stopVoice',
				  'uploadVoice',
				  'downloadVoice',
				  'chooseImage',
				  'previewImage',
				  'uploadImage',
				  'downloadImage',
				  'getNetworkType',
				  'openLocation',
				  'getLocation',
				  'hideOptionMenu',
				  'showOptionMenu',
				  'closeWindow',
				  'scanQRCode',
				  'chooseWXPay',
				  'openProductSpecificView',
				  'addCard',
				  'chooseCard',
				  'openCard'
			  ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
		  });
	  }

	  wx.hideMenuItems({
		  menuList: ["menuItem:share:appMessage","menuItem:share:timeline","menuItem:share:qq","menuItem:share:weiboApp","menuItem:share:facebook","menuItem:share:QZone","menuItem:copyUrl","menuItem:originPage","menuItem:openWithQQBrowser","menuItem:openWithSafari"] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
	  });
  },
  data () {
    return {
	    mtitle: '咨询中心',
	    isShow: true,
	    isBack: false,
	    isUrl: ''
    }
  },
	events: {
		setIsHead (data) {
		}
	},
  components: {
  }
}
</script>

<style>
	@import './assets/css/common.css';

	[v-cloak] {
	  display: none;
	}
	.fade-transition {
	  transition: opacity .3s ease;
	}
	.fade-enter, .fade-leave {
	  opacity: 0;
	}
</style>
