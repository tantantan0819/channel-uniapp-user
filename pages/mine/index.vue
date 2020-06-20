<template>
	<view class="mine">
		<view class="mine_top">
			<image src="../../static/image/mine_bg.png" mode="" class="mine_bg"></image>
			<view class="user_info ct">
				<image src="../../static/image/atavar.png" mode=""></image>
				<text>用户昵称,哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</text>
			</view>
		</view>
		<view class="line-up">
			<view class="line-item mt20" v-for="(item,index) in mine" :key="index" @click="link(item.link)">
				<view class="line_left">
					<view class="line-img info">
						<image :src="item.icon" mode=""></image>
					</view>
					<text>{{item.name}}</text>
				</view>
				<view class="line-right">
					<text v-if="item.text">{{item.text}}</text>
					<image src="../../static/image/mine_icon.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mine:[
					{   
						link: '/pages/mine/info',
						name: '个人信息',
						icon: '../../static/image/mine_icon1.png'
					},
					{
						link: '/pages/mine/realname',
						name: '实名认证',
						icon: '../../static/image/mine_icon2.png'
					},
					{   
						link: '/pages/mine/phone',
						name: '手机号',
						text: '18381007234',
						icon: '../../static/image/mine_icon3.png'
					},
					{
						link: '/pages/index/login/login',
						name: '安全退出',
						icon: '../../static/image/mine_icon4.png'
					},
				]
			}
		},
		methods: {
			link(url){
				uni.navigateTo({
					 url: url
				})
			}
		}
	}
</script>

<style lang="scss">
	.mine_top{
		position: relative;
		.mine_bg{
			width: 744upx;
			height: 254upx;
		}
		.user_info{
			position: absolute;
			top: 50%;
			left: 57upx;
			transform: translateY(-50%);
			text{
				width: 400upx;
				font-size:36upx;
				font-weight:bold;
				color:rgba(51,51,51,1);
				margin-left: 50upx;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			image{
				width: 136upx;
				height: 136upx;
				border-radius: 50%;
				border: 2upx solid #FFFFFF;
			}
		}
	}
  
</style>
 