<template>
	<view class="home">
		<view class="login ct"  @click="login">
			<image src="../../static/image/home_head.png" mode=""></image>
			<text>登录即可申请银行贷款</text>
			<view class="head cc">
				<image src="../../static/image/home_head2.png" mode=""></image>
			</view>
		</view>
		<view class="wrp hot">
			<view class="title cs">
				<text>热门推荐</text>
				<image src="../../static/image/home_search.png" mode="" @click="search"></image>
			</view>
			<view class="hot_item mb30" v-for="(item,index) in hotNum" :key="index">
				<view class="hot_top" @click="detail">
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
					<text>在线咨询：<text @click="customer">立即联系</text></text>
					 <text class="cc" @click="apply">立即申请</text>
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
			search(){
				uni.navigateTo({
					 url: '/pages/index/search'
				})
			},
			more(){
				this.isMore?this.hotNum--:this.hotNum++;
				this.isMore = !this.isMore;
			},
			login(){
				uni.navigateTo({
					 url: '/pages/index/login/login'
				})
			},
			customer(){
				uni.navigateTo({
					 url: '/pages/index/customer'
				})
			},
			apply(){
				uni.navigateTo({
					 url: '/pages/index/apply/apply'
				})
			},
			detail(){
				uni.navigateTo({
					 url: '/pages/index/detail'
				})
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

</style>
