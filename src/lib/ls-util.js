/*
*
* self 当前对象this
* url 请求的API
* options 请求参数，对象，没有时，传‘’（空）
* callback 回调，回传结果到前端页面
*
 */

export function getJson(self, url, options, callback) {

	if(typeof callback != "function" || (callback instanceof RegExp)){
		return alert("错误提示：请传入正确的回调函数");
	}

	return self.$http.get(url, options)
		.then(({data: {recode, msg, data}}) => {

			callback(data)
		})
}

export function postJson(self, url, options, callback) {

	if(typeof callback != "function" || (callback instanceof RegExp)){
		return alert("错误提示：请传入正确的回调函数");
	}

	return self.$http.post(url, options)
		.then(({data: {recode, msg, data}}) => {

			callback(data)
		})
}