<template>
	<view class="sex">
		<view class="item ct" v-bind:class="{ active: item.value == select }" v-for="(item,index) in sex" :key="index" @click="selectSex(item)">
		  {{item.text}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: '',
				select: '',
				sex: [
					{
						text: '男',
						value: '1'
					},
					{
						text: '女',
						value: '2'
					}
				],
				type: 2, //1-头像，2-性别，3-昵称，4-地区
			}
		},
		onShow(){
			this.user = uni.getStorageSync('user');
			this.select = this.user.gender;
		},
		onNavigationBarButtonTap:function(e){
		     if(!this.select){
				 uni.showToast({
				 	title: '请选择您的性别',
				 	icon: 'none'
				 });
			 }else{
				 this.$post('/changeInfo', {
				 	type: this.type,
				 	content: this.select,
				 }).then(res => {
					this.user.gender = this.select;
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
			selectSex(sex){
				this.select = sex.value;
			}
		}
	}
</script>

<style lang="scss">
	.sex{
		margin: 40upx 30upx 0;
		width:690upx;
		height:198upx;
		background:rgba(255,255,255,1);
		border-radius:6upx;
		.item{
			height: 99upx;
			padding-left: 34upx;
			&:nth-child(1){
				border-bottom: 1px solid #EEEEEE;
			}
		}
		.active{
			position: relative;
			&::before{
				content: '';
				display: inline-block;
				width: 36upx;
				height: 28upx;
				background-image: url(../../static/image/sex_icon.png);
				background-size: 36upx 28upx;
				position: absolute;
				top: 26upx;
				right: 34upx;
			}
		}
	}
</style>
