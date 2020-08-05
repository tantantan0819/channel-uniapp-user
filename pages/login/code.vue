<template>
	<view class="login wrp">
		<v-login></v-login>
		<view class="login_form">
			<view class="login_item ct">
				<text>手机号</text>
				<input class="uni-input" focus placeholder="请输入手机号" v-model.number="mobile" />
			</view>
			<view class="login_item ct code_box">
				<text>验证码</text>
				<input class="uni-input" placeholder="请输入验证码" v-model="code" />
				<view class="code cc" @click="sendCode">发验证码</view>
			</view>
		</view>
		<view class="login_wrp cc">
			<view class="login_btn cc" @click="login()">
				<text>立即登录</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {isPhone} from '@/plugins/validate.js'
	export default {
		data() {
			return {
				mobile: '', //手机号
				code: '', //手机验证码
			}
		},
		methods: {
			//发送验证码
			sendCode() {
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
				if (!this.code) {
					uni.showToast({
						title: '请输入您的手机验证码',
						icon: 'none'
					});
					return false;
					}
				this.$post('/getIdentifyingCode',{mobile:this.mobile}).then(res=>{
					uni.showToast({
						title: '发送成功',
						icon: 'none'
					});
				})
			},
			login() {
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
				if (!this.code) {
					uni.showToast({
						title: '请输入您的手机验证码',
						icon: 'none'
					});
					return false;
					}
				this.$post('/codeLogin',{mobile:this.mobile,code:this.code}).then(res=>{
					if (res.token) {
						uni.setStorageSync('isLogin', true);
						uni.setStorageSync('token', res.token);
						uni.showToast({
							title: '登录成功',
							icon: 'none'
						});
						setTimeout(function() {
							uni.switchTab({
								url: '/pages/index/index'
							});
						}, 600)
					}
				}).catch(error=>{
					uni.showToast({
						title: error,
						icon: 'none'
					});
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
