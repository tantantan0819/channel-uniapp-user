<template>
	<view class="mine">
		<view class="mine_top">
			<image src="../../static/image/mine_bg.png" mode="" class="mine_bg"></image>
			<view class="user_info ct">
				<image :src="user.headurl" mode=""></image>
				<text>{{user.nickname}}</text>
			</view>
		</view>
		<view class="line-up">
			<view class="line-item mt20" v-for="(item,index) in mine" :key="index" @click="link(item.link,item.name)">
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
				user: {},
				headurl: '',//头像
				nickname:'',//昵称
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
						text: '',
						icon: '../../static/image/mine_icon3.png'
					},
					{
						link: '/pages/login/login',
						name: '安全退出',
						icon: '../../static/image/mine_icon4.png'
					},
				]
			}
		},
		
		onShow() {
			this.$post('/getInfo').then(res=>{
				this.user = res;
				this.mine[2].text = res.mobile;
				uni.setStorageSync('user', res);
			})
		},
		methods: {
			link(url,name){
				if(name=="安全退出"){
					uni.clearStorageSync();
				}
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
 