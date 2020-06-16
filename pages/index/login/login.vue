<template>
	<view class="login wrp">
		<view class="logo cc">
			<image src="../../../static/image/logo.png" mode=""></image>
			<image src="../../../static/image/login_text.png" mode=""></image>
		</view>
		<view class="login_form">
			<view class="login_item ct">
				<text>手机号</text>
				 <input class="uni-input" focus placeholder="请输入手机号" />
			</view>
			<view class="login_item ct">
				<text>密码</text>
				 <input class="uni-input" password placeholder="请输入密码" />
			</view>
			<view class="forget">
				<text @click="login">忘记密码？</text>
			</view>
		</view>
		<view class="login_wrp cc">
			<view class="login_btn cc" @click="back()">
				<text>立即登录</text>
			</view>
		</view>
		<text class="login_code cc" @click="code">验证码登录 >></text>
		<text class="login_quick cc">快捷登录</text>
		<view class="login_method">
			<image src="../../../static/image/login_method1.png" mode=""></image>
			<image src="../../../static/image/login_method2.png" mode=""></image>
			<image src="../../../static/image/login_method3.png" mode=""></image>
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
			back(){
				uni.navigateBack({
				    delta: 1
				});
			},
			code(){
			uni.navigateTo({
				 url: '/pages/index/login/code'
			})
			}
		}
	}
</script>

<style lang="scss">
	.login_method{
		width: 424upx;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		image{
			width: 96upx;
			height: 96upx;
		}
	}
	.login_quick{
		font-size:26upx;
		color:rgba(153,153,153,1);
		margin: 96upx 0 70upx 0;
		position: relative;
		&::before{
			content: '';
			display: inline-block;
			width: 113upx;
			height: 2upx;
			background: url(../../../static/image/login_quick2.png);
			transform: rotate(180deg);
			position: absolute;
			top: 20upx;
			left: 160upx;
		}
		&::after{
			content: '';
			display: inline-block;
			width: 113upx;
			height: 2upx;
			background: url(../../../static/image/login_quick2.png);
			position: absolute;
			top: 20upx;
			right: 160upx;
		}
	}
	.login_code{
		font-size:26upx;
		color:rgba(51,51,51,1);
	}
</style>
