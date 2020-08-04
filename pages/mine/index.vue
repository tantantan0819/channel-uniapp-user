<template>
	<view class="mine">
		<view class="mine_top">
			<image src="../../static/image/mine_bg.png" mode="" class="mine_bg"></image>
			<view class="user_info ct">
				<image :src="user.headurl" mode="" @click="changeImg"></image>
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
	import Config from '@/plugins/config.js'
	export default {
		data() {
			return {
				user: {},
				headurl: '',//头像
				nickname:'',//昵称
				type: 1, //1-头像，2-性别，3-昵称，4-地区
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
			},
			//更改头像
			changeImg(){
				let _this = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						const tempFilePaths = res.tempFilePaths;
						uni.uploadFile({
							url: Config.upload_host, //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name: 'file',
							formData: {
								'user': 'test'
							},
							success: (uploadFileRes) => {
								let imgUrl = JSON.parse(uploadFileRes.data).url;
								_this.$post('/changeInfo', {
									type: _this.type,
									content: imgUrl,
								}).then(res => {
									_this.user.headurl = imgUrl;
									uni.setStorageSync('user', _this.user);
									uni.showToast({
										title: '上传成功',
										icon: 'none'
									});
								})
							},
							fail() {
								uni.showToast({
									title: '上传失败',
									icon: 'none'
								});
							}
						});
					}
				});
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
 