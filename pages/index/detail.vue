<template>
	<view class="detail wrp">
		<view class="show mt30">
			<view class="con">
				<view class="top cs">
					<text>{{product.name}}</text>
					<text @click="thumbs">点赞 {{product.praiseNum}}</text>
				</view>
				<text class="detail_con" v-html="product.content"></text>
			</view>
			<view class="bottom cs">
				<text>(评论 {{product.commentNum}})</text>
				<text @click="complaint">投诉</text>
			</view>
		</view>
		<view class="comment" v-if="comment.length>0">
			<view class="item cs" v-for="(item,index) in comment" :key="index">
				<image :src="item.headurl" mode=""></image>
				<view class="con">
					<text>{{item.nickname}}</text>
					<text v-html="item.content"></text>
					<text>{{item.createdTime}}</text>
				</view>
			</view>
		</view>
		<view class="write cc" @click="write">
			<image src="../../static/image/open.png" mode=""></image>
		</view>
		
		<uni-popup ref="showtip" :type="type" :mask-click="false">
			<view class="uni-tip">
				<text class="uni-tip-content">{{msg}}</text>
				<view class="uni-tip-group-button">
					<text class="uni-tip-button" @click="cancel">取消</text>
					<text class="uni-tip-button" @click="sure">确定</text>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				type: 'center',//居中弹出
				id: '', //产品id
				product: {}, //产品详情
				comment: [], //评论列表
				token: '',//没有token重新登录
				path: '',//为登录的返回地址
				msg: '',
			}
		},
		onLoad(options) {
			if (options.id) {
				this.id = options.id;
				this.getDetail();
			}
			this.path = window.location.url;
		},
		onShow() {
			this.getComment();
			this.getDetail();
			this.token = uni.getStorageSync('token');
		},
		methods: {
			//获取产品详情
			getDetail() {
				this.$post('/product/view', {
					id: this.id
				}).then(res => {
					this.product = res.data;
				})
			},
			//获取评论
			getComment() {
				this.$post('/product/commentList', {
					id: this.id,
					page: 1,
					pageSize: 1
				}).then(res => {
					this.comment = res.data.rows;
				}).catch(error => {
					uni.showToast({
						title: error,
						icon: 'none'
					});
				})
			},
			//投诉
			complaint() {
				if(!this.token){
					this.msg = '登录后才能进行投诉，是否立即去登录？'
					this.$refs['showtip'].open();
				}else{
					uni.navigateTo({
						url: '/pages/index/complaint?id='+this.id
					})
				}
			
			},
			//写评论
			write() {
				if(!this.token){
					this.msg = '登录后才能进行评论，是否立即去登录？'
					this.$refs['showtip'].open();
				}else{
					uni.navigateTo({
						url: '/pages/index/write?id='+this.id
					})
				}
			},
			//取消登录
			cancel() {
				this.$refs['showtip'].close();
			},
			//确定登录
			sure(){
				this.$refs['showtip'].close();
				uni.navigateTo({
					url: '/pages/login/login?url='+this.path
				})
			},
			//点赞
			thumbs(){
				if(!this.token){
					this.msg = '登录后才能进行评论，是否立即去登录？'
					this.$refs['showtip'].open();
				}else{
					this.$post('/product/praise',{id:this.id}).then(re=>{
						uni.showToast({
							title: '点赞成功！',
							icon: 'none'
						});
						this.getDetail();
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.write {
		width: 100upx;
		height: 100upx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 5upx 15upx 1upx rgba(51, 51, 51, 0.1);
		border-radius: 50%;
		position: fixed;
		right: 32upx;
		bottom: 442upx;

		image {
			width: 48upx;
			height: 45upx;
		}
	}

	.comment {
		padding: 40upx 15upx 50upx 24upx;
		width: 690upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 10upx;
		margin-top: 26upx;

		.item {
			image {
				width: 80upx;
				height: 80upx;
				border-radius: 50%;
				margin-right: 42upx;
			}

			.con {
				flex: 1;
				display: flex;
				flex-direction: column;

				text {
					&:nth-child(1) {
						font-size: 24upx;
						color: rgba(153, 153, 153, 1);
						margin-bottom: 24upx;
					}

					&:nth-child(2) {
						font-size: 26upx;
						color: rgba(51, 51, 51, 1);
						margin-bottom: 24upx;
					}

					&:nth-child(3) {
						font-size: 24upx;
						color: rgba(153, 153, 153, 1);
					}
				}
			}
		}
	}

	.show {
		.bottom {
			width: 690upx;
			height: 80upx;
			background: rgba(234, 234, 234, 1);
			border-radius: 0upx 0upx 10upx 10upx;
			padding: 0 30upx 0 40upx;

			text {
				&:nth-child(1) {
					font-size: 26upx;
					color: rgba(51, 51, 51, 1);
				}

				&:nth-child(2) {
					font-size: 26upx;
					color: rgba(153, 153, 153, 1);
				}
			}
		}

		.con {
			padding: 34upx 30upx 44upx 40upx;
			background-color: #FFFFFF;

			.top {
				text {
					&:first-child {
						display: inline-block;
						width: 500upx;
						font-size: 42upx;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}

					&:nth-child(2) {
						font-size: 26upx;
						color: rgba(254, 120, 0, 1);
					}
				}
			}

			.detail_con {
				font-size: 26upx;
				color: rgba(102, 102, 102, 1);
			}
		}
	}
	/* 头条小程序组件内不能引入字体 */
		/* #ifdef MP-TOUTIAO */
		@font-face {
			font-family: uniicons;
			font-weight: normal;
			font-style: normal;
			src: url('~@/static/uni.ttf') format('truetype');
		}
	
		/* #endif */
	
		/* #ifndef APP-NVUE */
		page {
			display: flex;
			flex-direction: column;
			box-sizing: border-box;
			background-color: #efeff4;
			min-height: 100%;
			height: auto;
		}
	
		view {
			font-size: 14px;
			line-height: inherit;
		}
	
		.example {
			padding: 0 15px 15px;
		}
	
		.example-info {
			padding: 15px;
			color: #3b4144;
			background: #ffffff;
		}
	
		.example-body {
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
			padding: 0;
			font-size: 14px;
			background-color: #ffffff;
		}
	
		/* #endif */
		.example {
			padding: 0 15px;
		}
	
		.example-info {
			/* #ifndef APP-NVUE */
			display: block;
			/* #endif */
			padding: 15px;
			color: #3b4144;
			background-color: #ffffff;
			font-size: 14px;
			line-height: 20px;
		}
	
		.example-info-text {
			font-size: 14px;
			line-height: 20px;
			color: #3b4144;
		}
	
	
		.example-body {
			flex-direction: column;
			padding: 15px;
			background-color: #ffffff;
		}
	
		.word-btn-white {
			font-size: 18px;
			color: #FFFFFF;
		}
	
		.word-btn {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			align-items: center;
			justify-content: center;
			border-radius: 6px;
			height: 48px;
			margin: 15px;
			background-color: #007AFF;
		}
	
		.word-btn--hover {
			background-color: #4ca2ff;
		}
	
	
		.example-body {
			/* #ifndef APP-NVUE */
			display: block;
			/* #endif */
			padding: 5px 15px;
		}
	
		.button {
			flex: 1;
			margin: 10px 0;
		}
	
		.popup-content {
			/* #ifndef APP-NVUE */
			display: block;
			/* #endif */
			background-color: #fff;
			padding: 15px;
			font-size: 14px;
		}
	
		/* 提示窗口 */
		.uni-tip {
			/* #ifndef APP-NVUE */
			display: flex;
			flex-direction: column;
			/* #endif */
			padding: 15px;
			width: 300px;
			background-color: #fff;
			border-radius: 10px;
		}
	
		.uni-tip-title {
			margin-bottom: 10px;
			text-align: center;
			font-weight: bold;
			font-size: 16px;
			color: #333;
		}
	
		.uni-tip-content {
			/* padding: 15px;
	*/
			font-size: 14px;
			color: #666;
		}
	
		.uni-tip-group-button {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			margin-top: 20px;
		}
	
		.uni-tip-button {
			flex: 1;
			text-align: center;
			font-size: 14px;
			color: #3b4144;
		}
	
</style>
