//验证手机
export const isPhone = /^1[345789]\d{9}$/;
//验证邮箱
export const isEmail = /^\w[_\w]+@\w+(?:\.\w+)+$/;
//验证身份证号
export const isIdcard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;