/**
 * 配置类
 * User: tanhongyu
 * Date: 2020-07-08
 * Time: 15:00
 */

const config = {
	app_host: 'http://rcyxdk.net/treasure/m/customer',
	channel_host: 'http://rcyxdk.net/treasure/m/merchant',
	code_host: 'http://rcyxdk.net/treasure/m/sms',//发送验证码
	upload_host: 'http://rcyxdk.net/treasure/m/upload',//图片上传地址
	redirect_host: 'http://rcyxdk.net/channel_user/#/pages/login/login',//微信登陆回调地址
	appid: 'wx1948b5d4a0865712',
	ryKey: '8luwapkv84g2l', //融云key
	networkTip: '网络已断开链接，请稍后再试',
}

export default config;