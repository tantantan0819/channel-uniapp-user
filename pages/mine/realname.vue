<template>
	<view class="login">
		<view class="form wrp login_form">
			<view class="item ct mt30">
				<text>姓名</text>
				<input class="uni-input" placeholder="请输入姓名"  v-model="params.username"/>
			</view>
			<view class="item ct mt30">
				<text>身份证</text>
				<input class="uni-input" placeholder="请输入身份证号" v-model="params.idCard"/>
			</view>
			
			<view class="item ct mt30">
				<text>手机号</text>
				<input class="uni-input" placeholder="请输入手机号" v-model="params.mobile"/>
			</view>
			<view class="login_item ct code_box">
				<text>验证码</text>
				<input class="uni-input" placeholder="请输入验证码" v-model="params.code"/>
				<view class="code cc" @click="send">发验证码</view>
			</view>
		</view>
		<view class="login_wrp cc">
			<view class="login_btn cc" @click="submit" >
				<text>提交</text>
			</view>
		</view>
	</view>
</template>

<script>
	const isPhone = /^1[345789]\d{9}$/;
	const isIdcard = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
	export default {
		data() {
			return {
			   params: {
				   username: '',//姓名
				   mobile: '',//手机号
				   code: '',//验证码
				   idCard: '',//身份证
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
			//提交
			  submit(){
				if (!this.params.username) {
					uni.showToast({
						title: '请填写姓名',
						icon: 'none'
					});
					return false;
				}
				if (!this.params.idCard) {
					uni.showToast({
						title: '请填写身份证号',
						icon: 'none'
					});
					return false;
				}
				if (!isIdcard.test(this.params.idcard)) {
					uni.showToast({
						title: '身份证格式不正确',
						icon: 'none'
					});
					return false;
				}
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
							 url: '/pages/mine/realname-result'
						})
					}, 600)
				})
			  }
		}
	}
</script>

<style>

</style>
