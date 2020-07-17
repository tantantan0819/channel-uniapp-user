<template>
	<view class="login">
		<view class="form wrp login_form">

			<view class="item ct mt30">
				<text>手机号</text>
				<input class="uni-input" placeholder="请输入手机号" v-model.number="mobile" />
			</view>
			<view class="login_item ct code_box">
				<text>验证码</text>
				<input class="uni-input" placeholder="请输入验证码" v-model="code" />
				<view class="code cc" @click="sendCode">发验证码</view>
			</view>
		</view>
		<view class="login_wrp cc">
			<view class="login_btn cc">
				<text @click="submit">确认更换</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile: '',
				code: ''
			}
		},

		methods: {
			submit() {
				// uni.navigateBack({
				// 	delta: 1
				// });
				if(!this.mobile){
					uni.showToast({
						title: '请填写您的手机号',
						icon: 'none'
					});
					return false;
				}
				if(!this.code){
					uni.showToast({
						title: '请填写您的手机验证码',
						icon: 'none'
					});
					return false;
				}
				
			},
			//发送验证码
			sendCode() {
				if (!this.mobile) {
					uni.showToast({
						title: '请输入您的手机号',
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
		}
	}
</script>

<style>

</style>
