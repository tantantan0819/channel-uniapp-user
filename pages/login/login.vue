<template>
	<view class="login wrp">
		<v-login></v-login>
		<view class="login_form">
			<view class="login_item ct">
				<text>手机号</text>
				<input class="uni-input" focus placeholder="请输入手机号" v-model.number="mobile" />
			</view>
			<view class="login_item ct">
				<text>密码</text>
				<input class="uni-input" password placeholder="请输入密码" v-model="password" />
			</view>
			<view class="forget">
				<text @click="forget">忘记密码？</text>
			</view>
		</view>
		<view class="login_wrp cc">
			<view class="login_btn cc" @click="login()">
				<text>立即登录</text>
			</view>
		</view>
		<text class="login_code cc" @click="code">验证码登录 >></text>
		<text class="login_quick cc">快捷登录</text>
		<view class="login_method">
			<image src="../../static/image/login_method1.png" mode="" @click="weixin"></image>
			<image src="../../static/image/login_method2.png" mode=""></image>
			<image src="../../static/image/login_method3.png" mode=""></image>
		</view>

	</view>
</template>

<script>
	import Config from '@/plugins/config.js'
	import {isPhone} from '@/plugins/validate.js'
	export default {
		data() {
			return {
				mobile: '', //手机号
				password: '', //密码
				url: '', //内页跳转登录url，登录后立即返回跳转页面
			}
		},
		//立即注册
		onNavigationBarButtonTap: function(e) {
			uni.navigateTo({
				url: '/pages/login/register'
			})
		},
		mounted() {
			function getQueryObject(url) {
				url = url == null ? window.location.href : url;
				var search = url.substring(url.lastIndexOf("?") + 1);
				var obj = {};
				var reg = /([^?&=]+)=([^?&=]*)/g;
				search.replace(reg, function(rs, $1, $2) {
					var name = decodeURIComponent($1);
					var val = decodeURIComponent($2);
					val = String(val);
					obj[name] = val;
					return rs;
				});
				return obj;
			}
			let obj = getQueryObject();
 			if (obj.code) {
				this.$post('/webLogin', {
					code: obj.code
				}).then(res => {
					if (res.token) {
						uni.setStorageSync('isLogin', true);
						uni.setStorageSync('token', res.token);
						uni.showToast({
							title: '登录成功',
							icon: 'none'
						});
						if (!this.url) {
							setTimeout(function() {
								uni.switchTab({
									url: '/pages/index/index'
								});
							}, 600)
						} else {
							setTimeout(function() {
								uni.navigateBack({
									delta: 1
								});
							}, 600)
						}

					}
				})
			}
		},

		methods: {
			login() {
				let _this = this;
				if (!this.mobile) {
					uni.showToast({
						title: '请输入您的手机号',
						icon: 'none'
					});
					return false;
				}
				if (!isPhone.test(this.mobile)) {
					uni.showToast({
						title: '手机号格式不正确',
						icon: 'none'
					});
					return false;
				}
				if (!this.password) {
					uni.showToast({
						title: '请输入您的密码',
						icon: 'none'
					});
					return false;
				}
				this.$post('/login', {
					mobile: this.mobile,
					password: this.password
				}).then(res => {
					if (res.token) {
						uni.setStorageSync('isLogin', true);
						uni.setStorageSync('token', res.token);
						uni.showToast({
							title: '登录成功',
							icon: 'none'
						});
						if (!this.url) {
							setTimeout(function() {
								uni.switchTab({
									url: '/pages/index/index'
								});
							}, 600)
						} else {
							setTimeout(function() {
								uni.navigateBack({
									delta: 1
								});
							}, 600)
						}

					}

				})
			},
			//验证码登录
			code() {
				uni.navigateTo({
					url: '/pages/login/code'
				})
			},
			//忘记密码
			forget() {
				uni.navigateTo({
					url: '/pages/login/forget'
				})
			},
			//微信登陆
			weixin() {
				let appid = Config.appid;
				let redirect_url = encodeURIComponent(Config.redirect_host);
				let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + redirect_url +
					'&response_type=code&scope=snsapi_userinfo&state=&conn';
				window.open(url)
			}
		}
	}
</script>

<style lang="scss">
	.login_method {
		width: 424upx;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;

		image {
			width: 96upx;
			height: 96upx;
		}
	}

	.login_quick {
		font-size: 26upx;
		color: rgba(153, 153, 153, 1);
		margin: 96upx 0 70upx 0;
		position: relative;

		&::before {
			content: '';
			display: inline-block;
			width: 113upx;
			height: 2upx;
			background: url(../../static/image/login_quick2.png);
			transform: rotate(180deg);
			position: absolute;
			top: 20upx;
			left: 160upx;
		}

		&::after {
			content: '';
			display: inline-block;
			width: 113upx;
			height: 2upx;
			background: url(../../static/image/login_quick2.png);
			position: absolute;
			top: 20upx;
			right: 160upx;
		}
	}

	.login_code {
		font-size: 26upx;
		color: rgba(51, 51, 51, 1);
	}
</style>
