<template>
	<view class="share">
		<view class="top ct">
			<image :src="user.headurl" mode="" class="avatar"></image>
			<view class="info">
				<view class="name ct">
					<text>{{user.nickname}}</text>
					<image src="../../static/image/male.png" mode="" v-if="true"></image>
					<image src="../../static/image/female.png" mode="" v-else></image>
				</view>
				<text class="address">{{user.addr}}</text>
			</view>
		</view>
		<view class="con cc">
			<image :src="user.qrcode" mode=""></image>
		</view>
		<view class="tip mt40 cc">扫描二维码，注册成为渠道宝典用户</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:{
					
				}
			}
		},
		onNavigationBarButtonTap:function(e){
		         uni.navigateTo({
		         	url: '/pages/service/record'
		         });
		},
		onLoad() {
			this.getInfo();
		},
		methods: {
			getInfo(){
				this.$get('/getShareInfo').then(res=>{
					this.user = res;
				})
			}
		}
	}
</script>

<style lang="scss">
	.tip{
		font-size:26upx;
		color:rgba(153,153,153,1);
	}
	.share{
		margin: 92upx 78upx;
		width:593upx;
		height:744upx;
		background:rgba(255,255,255,1);
		border-radius:10upx;
		.con{
			width: 100%;
			image{
				width: 407upx;
				height: 407upx;
			}
		}
		.top{
			display: flex;
			padding: 41upx 0 54upx 46upx;
			.avatar{
				width: 110upx;
				height: 110upx;
				margin-right: 44upx;
			}
			.info{
				.name{
					text{
						font-size:30upx;
						color:rgba(51,51,51,1);
						margin-right: 35upx;
					}
					image{
						width: 36upx;
						height: 36upx;
					}
				}
				.address{
					font-size:26upx;
					color:rgba(153,153,153,1);
				}
			}
		}
	}
</style>
