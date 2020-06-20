<template>
	<view class="complaint wrp login">
		<view class="uni-textarea mt30">
			<textarea maxlength="1000" auto-height placeholder-style="color:#999" placeholder="写评论..."/>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
			
			}
		},
		onNavigationBarButtonTap:function(e){
		         uni.navigateBack({
		         	delta: 1
		         });
					
		},
		methods: {
			
			
		}
	}
</script>

<style lang="scss" scoped>
	textarea{
		width: 100%;
		min-height:236upx;
		background:rgba(255,255,255,1);
		border-radius:6upx;
		padding: 20upx;
		font-size: 26upx;
		line-height: 40upx;
	}
	.reason_title{
		font-size:30upx;
		color:rgba(51,51,51,1);
		padding-left: 40upx;
	}
	.reason{
		background:rgba(255,255,255,1);
		border-radius:10upx;
		.item{
			flex-direction: column;
			align-items: flex-start;
			width: 100%;
		}
		.title{
			width: 100%;
			font-size:26upx;
			color:rgba(153,153,153,1);
			padding-bottom: 40upx;
		}
		uni-radio-group{
			flex-direction: column;
			align-items: flex-start;
		}
		uni-label{
			margin-bottom: 40upx;
			}
	}
</style>
