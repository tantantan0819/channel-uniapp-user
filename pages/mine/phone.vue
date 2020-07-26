<template>
	<view class="login">
		<view class="form wrp login_form">
			<view class="item ct mt30">
				<text>手机号</text>
				<input class="uni-input" placeholder="请输入手机号" v-model="params.mobile"/>
			</view>
			<view class="login_item ct code_box">
				<text>验证码</text>
				<input class="uni-input" placeholder="请输入验证码" v-model="params.code">
				<view class="code cc" @click="send">发验证码</view>
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
	import {isPhone} from '@/plugins/validate.js'
	export default {
		data() {
			return {
				params:{
					mobile: '',
					code: ''
				}
				
			}
		},
		
		methods: {
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
			  submit(){
					if (!this.params.mobile) {
						uni.showToast({
							title: '请填写手机号',
							icon: 'none'
						});
						return false;
					}
					if (!isPhone.test(this.params.mobile)) {
						uni.showToast({
							title: '手机格式不正确',
							icon: 'none'
						});
						return false;
					}
					if (!this.params.code) {
						uni.showToast({
							title: '请填写手机验证码',
							icon: 'none'
						});
						return false;
					}
					this.$post('/auth',this.params).then(res=>{
						uni.showToast({
							title: '提交成功',
							icon: 'none'
						});
						setTimeout(function() {
							uni.navigateTo({
								 url: '/pages/login/login'
							})
						}, 600)
					})
			  }
		}
	}
</script>

<style>

</style>
