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

			loader.hide()
			return response
		});
	});


}

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
			callback(data)
		})
}

export function postJson(url, options, callback, self) {
	loadInterceptors()

	if(typeof callback != "function" || (callback instanceof RegExp)){
		return alert("错误提示：请传入正确的回调函数");
	}

	return self.$http.post(SERVER + url, options)
		.then(({data: {recode, msg, data}}) => {
			callback(data)
		})

}