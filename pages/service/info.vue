<template>
	<view class="info wrp">
		<view class="item mt30" v-for="(item,index) in 5" :key="index" @click="link">
			<image src="../../static/image/atavar.png" mode=""></image>
			<view class="con">
				<view class="top cs">
					<text>渠道商名称</text>
					<text>20/5/23 12:34</text>
				</view>
				<text class="des mt20" :class="{'active':index == 0 || index == 1}">消息内容消息内容消息内容消息内容消息内容...</text>
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
			link(){
				uni.navigateTo({
					url:"/pages/index/customer"
				})
			}
		}
	}
</script>

<style lang="scss">
	.info{
		.item{
			padding: 23upx;
			background:rgba(255,255,255,1);
			border-radius:10upx;
			display: flex;
			image{
				width:98upx;
				height:98upx;
				border-radius:50%;
				margin-right: 37upx;
			}
			.con{
				width: 500upx;
				.top{
					text{
						&:first-child{
							font-size:30upx;
							color:rgba(51,51,51,1);
						}
						&:nth-child(2){
							font-size:24upx;
							color:rgba(153,153,153,1);
						}
					}
				}
			}
			.des{
				font-size:24upx;
				color:rgba(153,153,153,1);
				width: 500upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.active{
				position: relative;
				&::before{
					content: '';
					display: inline-block;
					position: absolute;
					top: 14upx;
					right: -16upx;
					width:12upx;
					height:12upx;
					background:rgba(255,0,0,1);
					border-radius:50%;
				}
			}
		}
	}
</style>
