<template>
	<view class="login">
		<view class="realname fail" v-if="status == 0">
			<image src="../../static/image/realname_fail.png" mode=""></image>
			<text>未认证，请重新填写</text>
		</view>
		<view class="realname " v-else-if="status==1">
			<image src="../../static/image/realname_success.png" mode=""></image>
			<text>待审核，请等待认证</text>
		</view>
		<view class="realname " v-else-if="status==1">
			<image src="../../static/image/realname_success.png" mode=""></image>
			<text>认证成功</text>
		</view>
		<view class="realname fail" v-else>
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
				status: null,//审核状态，0-未认证，1-已认证，2-认证失败
			}
		},
		onLoad() {
			this.$get('/getAuthStatus').then(res=>{
				this.status = res.status;
			})
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
		image{
			width: 230upx;
			height: 166upx;
		}
	}
	.success{
		text{
			color:rgba(51,51,51,1);
		}
	}
	.fail{
	
		text{
			color:rgba(230,0,18,1);
		}
	}
</style>
