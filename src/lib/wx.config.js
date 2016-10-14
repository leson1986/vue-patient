
import $ from 'zepto'
import wx from 'wx'

export function wxconfig (data){
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

/*网页注入，使用JSAPI功能必须添加此部分代码*/
export function pageConfig() {

	$.ajax({
		url: 'http://wx.jk7.com/api/valid',
		type: 'GET',
		dataType: "json",
		contentType: 'application/x-www-form-urlencoded',
		data: {
			pageurl: htmlSrc
		},
		success: function(data){
			wxconfig(data);
		}
	});
}


/*获取当前连接code，用code获取用户openid，进而获取patient_info信息*/
export function getOpenID() {

	var src = window.location.search;
	var a = src.indexOf('code');
	var b = src.indexOf('&state');
	var code = src.substr(a + 5, b - (a + 5));

	//获取openid
	var getopenid = $.ajax({
		url: 'http://wx.jk7.com/api/UserInfo',
		type: 'GET',
		dataType: "text",
		contentType: 'application/x-www-form-urlencoded',
		data: {
			code: code,
			state: "STATE"
		},
		success: function(data){
			tokensId = data
		}
	});
}