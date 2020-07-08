import Config from './config.js'
// import {getToken} from './token.js'
// import {randomString,getUnixTime,createSign} from './util.js'
const http = {
	/**
	 * 检测网络状态
	 */
	networkState: async function() {
		let status = await new Promise((resolve, reject) => {
			uni.getNetworkType({
				success: function(res) {
					if (res.networkType === 'none') {
						reject(false)
					} else {
						resolve(true)
					}
				},
				fail: function(error) {
					reject(false)
				},
			});
		})
		return status;
	},
	
	/**
	 * 封装get请求
	 * @param {String} url 请求地址  
	 * @param {Object} data 请求参数
	 * @param {Function} onSucess 请求成功的回调函数
	 * @param {Function} onError 请求失败的回调函数
	 * @param {Number} retry 请求重试次数
	 * @param {Boolean} refresh 是否强制刷新Token
	 */
	get: function(url, data = {}, onSucess, onError, retry, refresh) {
		var cfg = {
			url: Config.app_host + url,
			data: data,
			method: 'GET',
		}
		return http.request(cfg, onSucess, onError, retry, refresh)
	},
	
	/**
	 * 封装post请求
	 * @param {String} url 请求地址  
	 * @param {Object} data 请求参数
	 * @param {Function} onSucess 请求成功的回调函数
	 * @param {Function} onError 请求失败的回调函数
	 * @param {Number} retry 请求重试次数
	 * @param {Boolean} refresh 是否强制刷新Token
	 */
	post: function(url, data = {}, onSucess, onError, retry, refresh) {
		var cfg = {
			url: Config.app_host + url,
			data: data,
			method: 'POST',
		}
		return http.request(cfg, onSucess, onError, retry, refresh)
	},
	
	/**
	 * 封装request请求
	 * @param {Object} cfg 请求配置 
	 * @param {Function} onSucess 请求成功的回调函数
	 * @param {Function} onError 请求失败的回调函数
	 * @param {Number} retry 请求重试次数
	 * @param {Boolean} refresh 是否强制刷新Token
	 */
	request: async function(cfg, onSucess, onError, retry, refresh) {

		//判断网络状态
		var status = await http.networkState();
		if (status == false) {
			uni.showToast({
				title: Config.networkTip,
			});
			return false;
		}
		// let salt = randomString(4);
		// let timestamp = getUnixTime();
		// let token = await getToken();
		//请求头
		var header = {
			"content-type": "application/json",
			// "api-appid": Config.app_id,
			// "api-salt": salt,
			// "api-timestamp": timestamp,
			// "api-token": token,
			// "api-sign": createSign(cfg.data,timestamp, salt),
		}
		let data = JSON.stringify(cfg.data)
		// console.log(cfg.data,'object格式')
		// console.log(data,'json格式')
		var res = await uni.request({
			url: cfg.url,
			data: data,
			method: cfg.method,
			dataType: 'json',
			responseType: 'text',
			header: header
		})
		return res
	}
}

export default http;
