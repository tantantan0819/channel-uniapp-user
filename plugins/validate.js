//验证手机
export const isPhone = /^1[345789]\d{9}$/;
//验证邮箱
export const isEmail = /^\w[_\w]+@\w+(?:\.\w+)+$/;
//验证身份证号
export const isIdcard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
//时间戳转时间
export function timeFormat(time) {
	var now = new Date(time);
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	var date = now.getDate();
	var hour = now.getHours()<10?'0'+now.getHours():now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	return year + "-" + month + "-" + date + "   " + hour + ":" + minute + ":" + second;
}
