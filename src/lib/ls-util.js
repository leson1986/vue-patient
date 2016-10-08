/*
*
* self 当前对象this
* url 请求的API
* options 请求参数，对象，没有时，传‘’（空）
* callback 回调，回传结果到前端页面
*
 */

import Vue from 'vue'
import {loader} from '../util/util'
const SERVER = 'http://192.168.0.56:81/'

// 请求完成前触发函数，类似于$.ajax->beforeSend回调
export function loadInterceptors () {

	Vue.http.interceptors.push((request, next) => {

		loader.show()

		let headers = {}
		let tokens = 'MjM0NTY3Og=='//'MTIzNDU2Og=='(123456)   'MjM0NTY3Og=='(234567)
		headers.Authorization = 'Basic ' + tokens
		request.headers = headers

		next((response) => {
			if(!response.ok){
				console.log(response.status)
			}

			if(response.status === 401) {

			}

			loader.hide()
			return response
		});
	});


}

// get请求
export function getJson(url, options, callback, self) {

	loadInterceptors()

	//Vue.http.headers.common['Authorization'] = 'Basic MTIzNDU2Og==';

	if(typeof callback != "function" || (callback instanceof RegExp)){
		return alert("错误提示：请传入正确的回调函数");
	}

	return self.$http.get(SERVER + url, {
		params: options
	})
		.then(({data: {recode, msg, data}}) => {
			callback(data, recode, msg)
		}, (response) => {
			alert(response.status + '  ' +response.data.message)
	});
}

// post请求
export function postJson(url, options, callback, self) {
	loadInterceptors()

	if(typeof callback != "function" || (callback instanceof RegExp)){
		return alert("错误提示：请传入正确的回调函数");
	}

	return self.$http.post(SERVER + url, options)
		.then(({data: {recode, msg, data}}) => {
			callback(data, recode, msg)
		}, (response) => {
			alert(response.status + '  ' +response.data.message)
	});

}

// delete请求
export function delJson(url, options, callback, self) {
	loadInterceptors()

	if(typeof callback != "function" || (callback instanceof RegExp)){
		return alert("错误提示：请传入正确的回调函数");
	}

	return self.$http.delete(SERVER + url, options)
		.then(({data: {recode, msg}}) => {
			callback(recode, msg)
		}, (response) => {
			alert(response.status + '  ' +response.data.message)
		});

}


// 查看大图
export function wrapPic(picArr, titName) {

	let elem = document.querySelectorAll('ul > li'),
	    wrap = document.querySelector('#overlay')

		// for (var i = 0, len = elem.length; i < len; i++) {
			// elem[i].index = i;
		//	 elem[i].addEventListener('touchstart', function(e) {
		//		 e.preventDefault();

				 var //ext = this.index === 0 ? '' : 'M_',
				 title = titName,
				 data = [];

				 for (var i = 0; i < picArr.length; i++) {

				 data.push(picArr[i].url);
				 }

				 wrap.className = wrap.className + ' in';

				 // 延迟初始化插件是为了让CSS动画走完
				 setTimeout(function() {
					 MPreview({
						 data: data,
						 title: title,
						 direction: 'left',
						 wrap: '#overlay',
						 init: function() {
						 },
						 close: function() {
						  wrap.className = wrap.className.replace(' in', '');
						 }
					 });
				 }, 400);

		//	 }, false);
		// }

}