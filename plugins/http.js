import Config from './config.js'

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
		let isCode = url == '/getIdentifyingCode';
		var cfg = {
			url: isCode ? Config.code_host + url:Config.app_host + url,
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
		//请求头
		var header = {
			"content-type": "application/json",
		}
		let data = JSON.stringify(cfg.data)
		var res = await uni.request({
			url: cfg.url,
			data: data,
			method: cfg.method,
			dataType: 'json',
			responseType: 'text',
			header: header
		})
		return new Promise((resolve,reject)=>{
			if(res[1].data.code == 0){
				resolve(res[1].data)
			}else{
				reject(res[1].data.message)
			}
		})
	}
}

export default http;
