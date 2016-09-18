
import $ from 'zepto'

/*网页注入，使用JSAPI功能必须添加此部分代码*/
export function pageConfig() {

	var promise = $.ajax({
		url: 'http://wx.jk7.com/api/valid',
		type: 'GET',
		dataType: "json",
		contentType: 'application/x-www-form-urlencoded',
		data: {
			pageurl: window.location.href
		}
	});

	promise.done(function(result) {
		wxconfig(result);

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
		}
	});

	getopenid.done(function(result) {
		//openid 放入session,用openid获取用户信息
	});
}