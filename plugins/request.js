import config from './config.js'
function request(method,url,data){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:config.api_host+url,
			method:method.toLowerCase(),
			data:data,
			header:{},
			success:(res)=>{
				resolve(res)
			},
			fail:(error)=>{
				reject(error)
			}
		})
	})
}
export defalt function(method,url,data){
	return request(method,url,data);
};