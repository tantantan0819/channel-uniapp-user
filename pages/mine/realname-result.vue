<template>
	<view class="login">
		<view class="realname fail">
			<image src="../../static/image/realname_fail.png" mode=""></image>
			<text>认证失败，请重新填写</text>
		</view>
		<view class="login_form">
			<view class="login_wrp cc">
				<view class="login_btn cc" >
					<text @click="back()">返回</text>
				</view>
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
			back(){
				uni.navigateBack({
				    delta: 1
				});
			}
		}
	}
</script>

<style lang="scss">
	.realname{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 100upx;
		text{
			font-size:30upx;
			padding: 60upx 0 150upx 0;
		}
	}
	.success{
		text{
			color:rgba(51,51,51,1);
		}
	}
	.fail{
		image{
			width: 230upx;
			height: 166upx;
		}
		text{
			color:rgba(230,0,18,1);
		}
	}
</style>
