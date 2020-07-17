<template>
	<view class="home">
		<view class="login ct" @click="login">
			<view class="avatar" v-if="!isLogin || isLogin && !headurl">
				<image src="../../static/image/home_head.png" mode=""></image>
			</view>
			<view class="avatar" v-else>
				<image :src="headurl" mode=""></image>
			</view>
			<text v-if="!isLogin">登录即可申请银行贷款</text>
			<text v-else>{{nickname}}</text>
			<view class="head cc">
				<image src="../../static/image/home_head2.png" mode=""></image>
			</view>
		</view>
		<view class="wrp hot">
			<view class="title cs">
				<text>热门推荐</text>
				<image src="../../static/image/home_search.png" mode="" @click="search"></image>
			</view>
			<view class="hot_item mb30" v-for="(item,index) in showList" :key="index">
				<view class="hot_top" @click="detail(item.id)">
					<view class="ct cs">
						<text>{{item.name}}</text>
						<text>产品类型：{{item.typeName}}</text>
					</view>
					<view class="ct cs mt6">
						<text>最低月利率：<text>{{item.accrual}}</text></text>
						<text>最高额度：<text>{{item.amount}}</text></text>
					</view>
				</view>
				<view class="hot_bottom cs">
					<text>在线咨询：<text @click="customer">立即联系</text></text>
					<text class="cc" @click="apply">立即申请</text>
				</view>
			</view>
			<view class="hot_more cc " v-bind:class="{ active: isMore }" v-if="list.length>hotNum">
				<text @click="more">{{isMore?'点击收起':'查看更多'}}</text>
				<image src="../../static/image/home_icon.png" mode=""></image>
			</view>
		</view>
		<view class="wrp product">
			<view class="title cs">
				<text>产品分类</text>
			</view>
			<view class="product_con">
				<view class="item" v-for="(item,index) in product" :key="index" @click="link(item.link)">
					<image :src="item.icon" mode=""></image>
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
		<v-contact></v-contact>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin: false,//是否已登录
				isMore: false,//点击收起--查看更多
				hotNum: 4, //热门推荐默认展示几条
				headurl: '', //用户头像
				nickname: '', //用户昵称
				list: '',//产品列表
				showList: '',//产品列表--展示
				product: [{
						icon: '../../static/image/home1.png',
						name: '快速查找',
						link: '/pages/index/list'
					},
					{
						icon: '../../static/image/home2.png',
						name: '抵押贷款',
						link: '/pages/index/classify'
					},
					{
						icon: '../../static/image/home3.png',
						name: '信用贷款',
						link: '',
						link: '/pages/index/classify'
					},
					{
						icon: '../../static/image/home4.png',
						name: '信用卡',
						link: '/pages/service/credit?title=' + '信用卡申请'
					},
					{
						icon: '../../static/image/home5.png',
						name: '帮助',
						link: '/pages/index/help'
					},
				]
			}
		},
		onShow() {
			let _this = this;
			_this.isLogin = uni.getStorageSync('isLogin');
			_this.$get('/main/list').then(res=>{
				_this.headurl = res.headurl;
				_this.nickname = res.nickname;
				_this.list = res.list;
				_this.showList = res.list.slice(0,_this.hotNum);
				uni.setStorageSync('headurl', _this.headurl);
				uni.setStorageSync('nickname', _this.nickname);
			})
		},
		methods: {
			//跳转搜索页面
			search() {
				uni.navigateTo({
					url: '/pages/index/search'
				})
			},
			//更多热门产品
			more() {
				this.isMore = !this.isMore;
				this.isMore ? this.showList = this.list:this.showList = this.list.slice(0,this.hotNum)
			},
			//点击头部信息
			login() {
				if (this.isLogin) {
					uni.switchTab({
						url: '/pages/mine/index'
					});
				} else {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}
			},
			//在线客服
			customer() {
				uni.navigateTo({
					url: '/pages/index/customer'
				})
			},
			//产品立即申请
			apply() {
				uni.navigateTo({
					url: '/pages/service/credit?title=' + '贷款申请'
				})
			},
			//查看产品详情
			detail(id) {
				uni.navigateTo({
					url: '/pages/index/detail?id='+id
				})
			},
			//产品分类跳转
			link(url) {
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		padding-bottom: 168upx;
	}
	.product_con {
		background-color: #ffffff;
		border-radius: 20upx;
		padding: 30upx 40upx;
		display: flex;
		flex-wrap: wrap;

		.item {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-right: 138upx;
			margin-bottom: 48upx;

			&:nth-child(3n+3) {
				margin-right: 0;
			}

			&:nth-child(4) {
				margin-bottom: 0;
			}

			&:nth-child(5) {
				margin-bottom: 0;
			}

			image {
				width: 110upx;
				height: 110upx;
				margin-bottom: 24upx;
			}

			text {
				font-size: 26upx;
				line-height: 36upx;
				color: #333333;
			}
		}
	}

	.login {
		width: 750upx;
		height: 90upx;
		padding-bottom: 10upx;
		background-color: #ffffff;
		box-shadow: 0px 5upx 15upx 1px rgba(0, 0, 0, 0.02);
		border-radius: 0px 0px 20upx 20upx;

		.avatar {
			image {
				width: 70upx;
				height: 70upx;
				border-radius: 50%;
				margin: 0 40upx 0 30upx;
			}

		}

		text {
			font-size: 26upx;
			color: #999999;
			letter-spacing: .2em;
		}

		.head {
			position: absolute;
			right: 0;
			width: 100upx;
			height: 90upx;
			padding-bottom: 10upx;
			background-color: #ffffff;
			box-shadow: -5px 0px 15px 1px rgba(0, 0, 0, 0.02);
			border-radius: 0px 0px 20px 0px;

			image {
				width: 28upx !important;
				height: 34upx !important;
			}
		}

	}
</style>
