<template>
	<view class="login wrp">
		<v-login></v-login>
		<view class="login_form">
			<view class="login_item ct">
				<text>手机号</text>
				 <input class="uni-input" type="number" focus placeholder="请输入手机号" v-model="params.mobile"/>
			</view>
			<view class="login_item ct code_box">
				<text>验证码</text>
				<input class="uni-input" placeholder="请输入验证码" v-model="params.code"/>
				<view class="code cc" @click="send">发验证码</view>
			</view>
			<view class="login_item ct">
				<text>密码</text>
				 <input class="uni-input" password placeholder="请设置6-14位密码" v-model="params.password"/>
			</view>
			<view class="login_item ct">
				<text>确认密码</text>
				 <input class="uni-input" password placeholder="请输入确认密码" v-model="rePassword"/>
			</view>
		</view>
		<view class="login_wrp cc">
			<view class="login_btn cc" @click="register()">
				<text>立即注册</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {isPhone} from '@/plugins/validate.js'
	export default {
		data() {
			return {
				rePassword: '',//确认密码
				params:{
					mobile: '',//手机号
					code: '',//验证码
					password: '',//密码
				}
			}
		},
		methods: {
			//注册
			register(){
				if (!this.params.mobile) {
					uni.showToast({
						title: '请输入您的手机号',
						icon: 'none'
					});
					return false;
				}
				if (!isPhone.test(this.params.mobile)) {
					uni.showToast({
						title: '手机号格式不正确',
						icon: 'none'
					});
					return false;
				}
				if (!this.params.code) {
					uni.showToast({
						title: '请输入您的手机验证码',
						icon: 'none'
					});
					return false;
					}
				if (!this.params.password) {
					uni.showToast({
						title: '请设置您的密码',
						icon: 'none'
					});
					return false;
				}
				if (!/^\w{6,14}$/.test(this.params.password)) {
					uni.showToast({
						title: '请设置6-14位密码',
						icon: 'none'
					});
					return false;
				}
				if (!this.rePassword) {
					uni.showToast({
						title: '请输入确认密码',
						icon: 'none'
					});
					return false;
				}
				if (this.rePassword != this.params.password) {
					uni.showToast({
						title: '密码不一致',
						icon: 'none'
					});
					return false;
				}
				this.$post('/register',this.params).then(res=>{
					uni.showToast({
						title: '注册成功',
						icon: 'none'
					});
					setTimeout(function() {
						uni.switchTab({
							url: '/pages/login/login'
						});
					}, 600)
				})
			},
			//发送验证码
			send(){
			    if (!this.params.mobile) {
			    	uni.showToast({
			    		title: '请输入您的手机号',
			    		icon: 'none'
			    	});
			    	return false;
			    }
			    if (!isPhone.test(this.params.mobile)) {
			    	uni.showToast({
			    		title: '手机号格式不正确',
			    		icon: 'none'
			    	});
			    	return false;
			    }
				this.$post('/getIdentifyingCode',{mobile:this.params.mobile}).then(res=>{
					uni.showToast({
						title: '发送成功',
						icon: 'none'
					});
				})
			},
			
		}
	}
</script>

<style lang="scss">
	
</style>
