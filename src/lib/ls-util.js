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

export function getInterceptors () {
	Vue.http.interceptors.push((request, next) => {
		loader.show()
		next((response) => {
			loader.hide()
			return response
		});
	});
}

export function getJson(url, options, callback, self) {
	getInterceptors()

	if(typeof callback != "function" || (callback instanceof RegExp)){
		return alert("错误提示：请传入正确的回调函数");
	}

	return self.$http.get(SERVER + url, {
		params: options
	})
		.then(({data: {recode, msg, data}}) => {
			console.log(recode)
			console.log(msg)
			console.log(data)
			callback(data)
		})
}

export function postJson(url, options, callback, self) {
	getInterceptors()

	if(typeof callback != "function" || (callback instanceof RegExp)){
		return alert("错误提示：请传入正确的回调函数");
	}

	return self.$http.post(SERVER + url, options)
		.then(({data: {recode, msg, data}}) => {
			console.log(recode)
			console.log(msg)
			console.log(data)
			callback(data)
		})

}