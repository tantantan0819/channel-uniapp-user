<template>
	<view class="login">
		<view class="form wrp login_form">
			
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
				<text @click="submit">确认更换</text>
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
					uni.navigateBack({
						delta: 1
					});
			  }
		}
	}
</script>

<style>

</style>
