<template>
	<view class="info_user">
		<view class="item mt40">
			<input type="text" v-model="nickname" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:'',
				nickname: '',
				type: 3, //1-头像，2-性别，3-昵称，4-地区
			}
		},
		onShow(){
			this.user = uni.getStorageSync('user');
			this.nickname = this.user.nickname;
		},
		onNavigationBarButtonTap: function(e) {
			if(!this.nickname){
				uni.showToast({
					title: '请填写您的昵称',
					icon: 'none'
				});
			}else{
				this.$post('/changeInfo', {
					type: this.type,
					content: this.nickname
				}).then(res => {
					this.user.nickname = this.nickname;
					uni.setStorageSync('user', this.user);
					uni.showToast({
						title: '保存成功',
						icon: 'none'
					});
					setTimeout(function() {
						uni.redirectTo({
							url:'/pages/mine/info'
						});
					}, 600)
				})
			}
			
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
