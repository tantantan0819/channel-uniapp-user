<template>
	<view class="login wrp">
		<view class="logo cc">
			<image src="../../static/image/logo.png" mode=""></image>
			<image src="../../static/image/login_text.png" mode=""></image>
		</view>
		<view class="login_form">
			<view class="login_item ct">
				<text>手机号</text>
				 <input class="uni-input" focus placeholder="请输入手机号" />
			</view>
			<view class="login_item ct code_box">
				<text>验证码</text>
				<input class="uni-input" placeholder="请输入验证码" />
				<view class="code cc">发验证码</view>
			</view>
			<view class="login_item ct">
				<text>密码</text>
				 <input class="uni-input" password placeholder="请设置6-14位密码" />
			</view>
			<view class="login_item ct">
				<text>确认密码</text>
				 <input class="uni-input" password placeholder="请输入确认密码" />
			</view>
			<view class="forget">
				<text @click="login">忘记密码？</text>
			</view>
		</view>
		<view class="login_wrp cc">
			<view class="login_btn cc" @click="back()">
				<text>确认修改</text>
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
			login(){
				uni.navigateTo({
					 url: '/pages/index/forget'
				})
			},
			back(){
				uni.navigateBack({
				    delta: 1
				});
			}
		}
	}
</script>

<style lang="scss">
	.login_wrp{
		padding: 83upx 0 58upx 0;
		.login_btn{
			width:520upx;
			height:90upx;
			background:rgba(254,120,0,1);
			border-radius:45upx;
			text{
				font-size:30upx;
				color:rgba(255,255,255,1);
			}
		}
	}
	.login{
		.logo{
			padding: 66upx 0 50upx 0;
			flex-direction: column;
			image{
				&:nth-child(1){
					width:127upx;
					height:127upx;
					border-radius:20px;
				}
				&:nth-child(2){
					width:141upx;
					height:34upx;
					font-size:36upx;
					margin-top: 22upx;
				}
			}
		}
		.login_form{
			.forget{
				display: flex;
				justify-content: flex-end;
				text{
					font-size:26upx;
					color:rgba(153,153,153,1);
				}
			}
			.code_box{
				input{
					width: 320upx!important;
				}
			}
			.login_item{
				background:rgba(255,255,255,1);
				border-radius:10upx;
				padding: 38upx 28upx;
				margin-bottom: 22upx;
				text{
					width: 130upx;
					font-size:26upx;
					font-weight:bold;
					color:rgba(51,51,51,1);
				}
				input{
					font-size:26upx;
					width: 464upx;
				}
				position: relative;
				.code{
					width:182upx;
					height:108upx;
					background:rgba(254,120,0,1);
					border-radius:0px 10upx 10upx 0px;
					font-size:26upx;
					color:rgba(255,255,255,1);
					position: absolute;
					right: 0;
				}
			}
		}
	}
</style>
