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
const SERVER = 'http://test.jk7.com/' //'http://wx.jk7.com/' //  'http://192.168.0.56:81/' //

// 请求完成前触发函数，类似于$.ajax->beforeSend回调
export function loadInterceptors () {

	Vue.http.interceptors.push((request, next) => {

		loader.show()
		let headers = {}
		let tokens = btoa(openID + ':')

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

// get请求
export function getJson(url, options, callback, self) {
	loadInterceptors()

	if(typeof callback != "function" || (callback instanceof RegExp)){
		return alert("错误提示：请传入正确的回调函数");
	}

	return self.$http.get(SERVER + url, {
		params: options
	})
		.then(({data: {recode, msg, data}}) => {
			callback(data, recode, msg)
		}, (response) => {

			if(response.status === 401){
				console.log(response.body)
				if(response.body === '2'){
					self.$route.router.go({path: '/reg/bind', replace: true})
				}else if(response.body === '3'){
					self.$route.router.go({path: '/reg/register', replace: true})
				}else if(response.body === '4'){
					self.$route.router.go({path: '/reg/disease', replace: true})
				}else {
					alert('非法访问')
				}

			}else {
				alert(response.status + '  ' +response.data.message)
			}
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

			if(response.status === 401) {
				if(response.body === '2'){
					self.$route.router.go({path: '/reg/bind', replace: true})
				}else if(response.body === '3'){
					self.$route.router.go({path: '/reg/register', replace: true})
				}else if(response.body === '4'){
					self.$route.router.go({path: '/reg/disease', replace: true})
				}else {
					alert('非法访问')
				}
			}else {
				alert(response.status + '  ' +response.data.message)
			}
		});

}

// put请求
export function putJson(url, options, callback, self) {
	loadInterceptors()

	if(typeof callback != "function" || (callback instanceof RegExp)){
		return alert("错误提示：请传入正确的回调函数");
	}

	return self.$http.put(SERVER + url, options)
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
/*
 * 查看大图
 * picArr => 数组， 格式：picArr[{url:'url_path'}...]
 * titName => 查看图片的标题, 默认值：查看图片
 * obj => 调用页对象，与固定变量“maskbox”一起用，主要用于隐藏遮罩层
 * isMask 是否有遮罩层
 *
 */
export function wrapPic(picArr, titName, obj, isMask) {
	console.log(typeof(picArr))
	let elem = document.querySelectorAll('ul > li'),
	    wrap = document.querySelector('#overlay')

		// for (var i = 0, len = elem.length; i < len; i++) {
			// elem[i].index = i;
		//	 elem[i].addEventListener('touchstart', function(e) {
		//		 e.preventDefault();

				 var //ext = this.index === 0 ? '' : 'M_',
				 title = titName || '查看图片',
				 data = [];

				 /*for (var i = 0; i < picArr.length; i++) {

				 	console.log(picArr)
					 data.push(picArr[i].url);
					 console.log(data)
				 }*/

				if(typeof(picArr) === 'string'){
					data.push(picArr)
				}else if(typeof(picArr) === 'object'){
					data = picArr
				}else {
					console.log('图片变量类型必须为string或object' + typeof(picArr))
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

							 if(isMask){
								  setTimeout(()=> {
									  obj.maskbox = false

								  },401)
							 }
							 wrap.className = wrap.className.replace(' in', '');

						 }
					 });
				 }, 400);

		//	 }, false);
		// }

}

// 公共配置信息
export function optionData() {
	let optionData = {
		"familyReltions": ["丈夫", "妻子", "父亲", "母亲", "儿子", "女儿", "姐妹", "兄弟", "奶奶", "爷爷", "外公", "外婆", "姑姐", "叔叔", "阿姨", "舅舅", "其他"],
		"familyDisease": ["甲肝", "乙肝", "慢性乙肝", "慢性丙肝", "肝癌（乙肝）", "肝癌（丙肝）", "肝硬化（乙肝）", "肝硬化（丙肝）", "原发性胆汁性肝硬化", "酒精肝", "脂肪肝", "急性肝炎", "重肝（乙型）", "黄疸性肝炎", "乙肝携带者", "自身免疫性肝炎", "其他"],
		"patientDisease": ["乙肝", "丙肝", "免疫性肝病", "代谢性肝病", "药物肝", "肝豆状核变性", "乙肝合并丙肝", "酒精肝", "脂肪肝", "肝炎"],
		"fishTypes": ["浅海鱼", "深海鱼"],
		"drinkTypes": ["白酒", "红酒", "啤酒", "洋酒", "自酿米酒"],
		"bloodProductTypes": ["全血", "白蛋白", "血浆", "血小板", "白细胞", "红细胞", "血清", "丙种球蛋白", "凝血因子", "纤维蛋白原", "凝血酶原复合物", "HBIg"],
		"inflammationTypes": ["G0", "G1", "G2", "G3", "G4"],
		"fibrosisTypes": ["S0", "S1", "S2", "S3", "S4"],
		"drugTypes": ["静脉注射", "其他方式"],
		"riskFactors": ["不洁性行为", "私人诊所打针", "输血", "美容手术", "牙科手术", "手术", "扎耳环孔", "纹身", "修足", "母婴传播", "共用卫生用具", "其他"]
	}

	return optionData
}

