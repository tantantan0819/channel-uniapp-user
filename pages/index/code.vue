<template>
	<view class="login wrp">
		<view class="logo cc">
			<image src="../../static/image/logo.png" mode=""></image>
			<image src="../../static/image/login_text.png" mode=""></image>
		</view>
		<view class="login_form">
			<view class="login_item ct">
				<text>手机号</text>
				 <input class="uni-input" focus placeholder="请输入手机号" />
			</view>
			<view class="login_item ct code_box">
				<text>验证码</text>
				<input class="uni-input" placeholder="请输入验证码" />
				<view class="code cc">发验证码</view>
			</view>
		</view>
		<view class="login_wrp cc">
			<view class="login_btn cc" @click="back()">
				<text>立即登录</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			login(){
				uni.navigateTo({
					 url: '/pages/index/forget'
				})
			},
			back(){
				uni.navigateBack({
				    delta: 1
				});
			}
		}
	}
</script>

<style lang="scss">
	
</style>
