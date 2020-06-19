<template>
	<view class="contact_box cc" @click="link">
		<image src="../static/image/contact_icon.png" mode=""></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			link(){
				uni.navigateTo({
					 url: '/pages/index/customer'
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact_box{
		width:100upx;
		height:100upx;
		background:rgba(255,255,255,1);
		box-shadow:0px 5px 15px 1px rgba(51,51,51,0.1);
		border-radius:50%;
		position: fixed;
		right: 34upx;
		bottom: 200upx;
		image{
			width: 52upx;
			height: 44upx;
		}
	}
</style>
