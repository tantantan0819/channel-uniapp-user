<template>
	<view class="detail wrp">
		<view class="show mt30">
			<view class="con">
				<view class="top cs">
					<text>产品名称产品名称产品名称aafff...</text>
					<text>点赞 268</text>
				</view>
				<text class="detail_con">产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情
				</text>
			</view>
			<view class="bottom cs">
				<text>(评论 34)</text>
				<text @click="complaint">投诉</text>
			</view>
		</view>
		<view class="comment">
			<view class="item cs">
				<image src="../../static/image/customer.png" mode=""></image>
				<view class="con">
					<text>用户昵称</text>
					 <text>评论内容评论内容评论内容评论内容评论内容 评论内容评论内容</text>
					 <text>2020/5/13 16:45</text>
				</view>
			</view>
			<view class="item cs">
				<image src="../../static/image/customer.png" mode=""></image>
				<view class="con">
					<text>用户昵称</text>
					 <text>评论内容评论内容评论内容评论内容评论内容 评论内容评论内容</text>
					 <text>2020/5/13 16:45</text>
				</view>
			</view>
		</view>
		<view class="write cc" @click="write">
			<image src="../../static/image/open.png" mode=""></image>
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
			complaint(){
				uni.navigateTo({
					 url: '/pages/index/complaint'
				})
			},
			write(){
				uni.navigateTo({
					 url: '/pages/index/write'
				})
			}
		}
	}
</script>

<style lang="scss">
	.write{
		width:100upx;
		height:100upx;
		background:rgba(255,255,255,1);
		box-shadow:0px 5upx 15upx 1upx rgba(51,51,51,0.1);
		border-radius:50%;
		position: fixed;
		right: 32upx;
		bottom: 442upx;
		image{
			width: 48upx;
			height: 45upx;
		}
	}
	.comment{
		padding: 40upx 15upx 50upx 24upx;
		width:690upx;
		background:rgba(255,255,255,1);
		border-radius:10upx;
		margin-top: 26upx;
		.item{
			image{
				width: 80upx;
				height: 80upx;
				border-radius: 50%;
				margin-right: 42upx;
			}
			.con{
				flex: 1;
				display: flex;
				flex-direction: column;
				text{
					&:nth-child(1){
						font-size:24upx;
						color:rgba(153,153,153,1);
						margin-bottom: 24upx;
					}
					&:nth-child(2){
						font-size:26upx;
						color:rgba(51,51,51,1);
						margin-bottom: 24upx;
					}
					&:nth-child(3){
						font-size:24upx;
						color:rgba(153,153,153,1);
					}
				}
			}
		}
	}
	.show{
		.bottom{
			width:690upx;
			height:80upx;
			background:rgba(234,234,234,1);
			border-radius:0upx 0upx 10upx 10upx;
			padding: 0 30upx 0 40upx;
			text{
				&:nth-child(1){
					font-size:26upx;
					color:rgba(51,51,51,1);
				}
				&:nth-child(2){
					font-size:26upx;
					color:rgba(153,153,153,1);
				}
			}
		}
		.con{
			padding: 34upx 30upx 44upx 40upx;
			background-color: #FFFFFF;
			.top{
				text{
					&:first-child{
						display: inline-block;
						width:500upx;
						font-size:42upx;
						font-weight:bold;
						color:rgba(51,51,51,1);
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					&:nth-child(2){
						font-size:26upx;
						color:rgba(254,120,0,1);
					}
				}
			}
			.detail_con{
				font-size:26upx;
				color:rgba(102,102,102,1);
			}
		}
	}
</style>
