<template>
	<view class="login">
		<view class="form wrp login_form">
			<view class="item ct mt30">
				<text>姓名</text>
				<input class="uni-input" placeholder="请输入姓名" />
			</view>
			<view class="item ct mt30">
				<text>身份证</text>
				<input class="uni-input" placeholder="请输入身份证号" />
			</view>
			
			<view class="item ct mt30">
				<text>手机号</text>
				<input class="uni-input" placeholder="请输入手机号" />
			</view>
			<view class="login_item ct code_box">
				<text>验证码</text>
				<input class="uni-input" placeholder="请输入验证码" />
				<view class="code cc">发验证码</view>
			</view>
		</view>
		<view class="login_wrp cc">
			<view class="login_btn cc" >
				<text @click="submit">提交</text>
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
			  submit(){
				  uni.navigateTo({
				  	 url: '/pages/mine/realname-result'
				  })
			  }
		}
	}
</script>

<style>

</style>
