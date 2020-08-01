<template>
	<view class="wrp">
		<view class="linkBtn ct">
			<text class="orange cc" @click="apply">在线申请</text>
			<text class="blue cc" @click="order">预约上门办理</text>
		</view>
		<view class="tip">
			<text class="icon">提示</text>
			<text>1、提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示</text>
			<text>2、提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
			}
		},
		onLoad(options) {
			if(options.id){
				this.id = options.id
			}
			uni.setNavigationBarTitle({
			    title: options.title
			});
		},
		methods: {
			order(){
				uni.navigateTo({
					 url: '/pages/service/credit-order'
				})
			},
			apply(){
				uni.navigateTo({
					 url: '/pages/index/apply/apply?id='+this.id
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		padding-bottom: 0;
		margin-bottom: 0;
	}
	.linkBtn{
		margin-top: 70upx;
		flex-direction: column;
		text{
			width:520upx;
			height:90upx;
			border-radius:45px;
			font-size:30upx;
			color:rgba(255,255,255,1);
			&:nth-child(2){
				margin-top: 45upx;
			}
		}
		.orange{
			background:rgba(254,120,0,1);
		}
		.blue{
			background:rgba(85,169,255,1);
		}
	}
	.tip{
		display: flex;
		flex-direction: column;
		margin-top: 100upx;
		text{
			font-size:24upx;
			color:rgba(102,102,102,1);
			line-height:40upx;
		}
		.icon{
			font-size:30upx;
			color:rgba(51,51,51,1);
			padding-left: 62upx;
			position: relative;
			margin-bottom: 40upx;
			&::after{
				content: '';
				display: inline-block;
				width: 38upx;
				height: 37upx;
				background-image: url(../../static/image/credit_tip.png);
				background-size: 38upx 37upx;
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
			}
		}
	}
</style>
