<template>
	<view class="home">
		<view class="login ct">
			<image src="../../static/image/home_head.png" mode=""></image>
			<text>登录即可申请银行贷款</text>
			<view class="head cc">
				<image src="../../static/image/home_head2.png" mode=""></image>
			</view>
		</view>
		<view class="wrp hot">
			<view class="title cs">
				<text>热门推荐</text>
				<image src="../../static/image/home_search.png" mode=""></image>
			</view>
			<view class="hot_item mb30" v-for="(item,index) in hotNum" :key="index">
				<view class="hot_top">
					<view class="ct">
						<text>产品名称333333</text>
						<text>产品类型：产品类型</text>
					</view>
					<view class="ct">
						<text>最低月利率：<text>最低月利率</text></text>
						<text>最高额度：<text>最高额度</text></text>
					</view>
				</view>
				<view class="hot_bottom cs">
					<text>在线咨询：<text>立即联系</text></text>
					 <text class="cc">立即申请</text>
				</view>
			</view>
			<view class="hot_more cc " v-bind:class="{ active: isMore }">
				<text @click="more">{{isMore?'点击收起':'查看更多'}}</text>
				<image src="../../static/image/home_icon.png" mode=""></image>
			</view>
		</view>
		<view class="wrp product">
			<view class="title cs">
				<text>产品分类</text>
			</view>
			<view class="product_con">
				<view class="item" v-for="(item,index) in product" :key="index">
					<image :src="item.icon" mode=""></image>
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
		<v-tab></v-tab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isMore: false,
				hotNum: 2,
				product:[
					{
						icon: '../../static/image/product1.png',
						name: '快速查找',
						link: ''
					},	
					{
						icon: '../../static/image/product2.png',
						name: '信用卡',
						link: ''
					},
					{
						icon: '../../static/image/product1.png',
						name: '快速查找',
						link: ''
					},	
					{
						icon: '../../static/image/product2.png',
						name: '信用卡',
						link: ''
					},
				]
			}
		},
		onLoad() {
			
		},
		methods: {
			more(){
				this.isMore?this.hotNum--:this.hotNum++;
				this.isMore = !this.isMore;
			}
		}
	}
</script>

<style lang="scss">
	.home{
		padding-bottom: 168upx;
	}
	.product_con{
		background-color: #ffffff;
		border-radius: 20upx;
		padding: 30upx 40upx;
		display: flex;
		flex-wrap: wrap;
		.item{
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-right: 138upx;
			margin-bottom: 48upx;
			&:nth-child(3n+3){
				margin-right: 0;
			}
			&:nth-child(4){
				margin-bottom: 0;
			}
			&:nth-child(5){
				margin-bottom: 0;
			}
			image{
				width: 110upx;
				height: 110upx;
				margin-bottom: 24upx;
			}
			text{
				font-size: 26upx;
				line-height: 36upx;
				color: #333333;
				}
		}
	}
	.login{
		width: 750upx;
		height: 120upx;
		background-color: #ffffff;
		box-shadow: 0px 5upx 15upx 1px 
			rgba(0, 0, 0, 0.02);
		border-radius: 0px 0px 20upx 20upx;
		image{
			&:nth-child(1){
				width: 70upx;
				height: 70upx;
				border-radius: 50%;
				padding: 0 40upx 0 30upx;
			}
		}
		text{
			font-size: 26upx;
			color: #999999;
			letter-spacing: .2em;
		}
		.head{
			position: absolute;
			right: 0;
			width: 100upx;
			height: 120upx;
			background-color: #ffffff;
			box-shadow: -5px 0px 15px 1px 
				rgba(0, 0, 0, 0.02);
			border-radius: 0px 0px 20px 0px;
			image{
				width: 28upx!important;
				height: 34upx!important;
			}
		}
	
	}
	.hot_more{
		text{
			font-size: 26upx;
			color: #333333;
			margin-right: 15upx;
		}
		image{
			width: 24upx;
			height: 18upx;
			transition: all .2s ease-in-out;
		}
	}
	.active{
		image{
			transform: rotate(180deg);
		}
	}
	.hot_item{
		display: flex;
		flex-direction: column;
		width: 690upx;
		height: 211upx;
		background-color: #cbf3cc;
		box-shadow: 0px 7upx 5upx 1upx 
			rgba(0, 0, 0, 0.05);
		border-radius: 20upx;
		overflow: hidden;
		.hot_top{
			padding: 30upx 20upx;
			view{
				&:nth-child(1){
					text{
						&:nth-child(1){
							font-size: 28upx;
							line-height: 36upx;
							color: #333333;
							width: 134upx;
							overflow: hidden;
							text-overflow:ellipsis;
							white-space: nowrap;
						}
						&:nth-child(2){
							font-size: 24upx;
							line-height: 36upx;
							color: #999999;
							padding-left: 40upx;
						}
					}
				}
				&:nth-child(2){
					text{
						font-size: 24upx;
						line-height: 36upx;
						color: #999999;
						&:nth-child(2){
							padding-left: 40upx;
						}
						text{
							color: #fe9900;
						}
					}
				}
			}
		}
		.hot_bottom{
			flex:1;
			padding: 0 20upx;
			background: #FFFFFF;
			text{
				&:nth-child(1){
					font-size: 24upx;
					line-height: 36upx;
					color: #999999;
					text{
						color: #2c8aff;
					}	
				}
				&:nth-child(2){
					width: 150upx;
					height: 60upx;
					background-color: #fe9900;
					border-radius: 10upx;
					color: #FFFFFF;
					font-size: 24upx;;
				}
			}
		}
	}
</style>
