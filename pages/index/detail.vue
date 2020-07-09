<template>
	<view class="detail wrp">
		<view class="show mt30">
			<view class="con">
				<view class="top cs">
					<text>{{product.name}}</text>
					<text>点赞 {{product.praiseNum}}</text>
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '', //产品id
				product: {}, //产品详情
				comment: [], //评论列表
			}
		},
		onLoad(options) {
			if (options.id) {
				this.id = options.id;
				this.getDetail();
				this.getComment();
			}
		},
		onShow() {
			this.getComment();
		},
		methods: {
			//获取产品详情
			getDetail() {
				this.$post('/product/view', {
					id: this.id
				}).then(res => {
					this.product = res.data;
				}).catch(error => {
					uni.showToast({
						title: error,
						icon: 'none'
					});
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
				uni.navigateTo({
					url: '/pages/index/complaint'
				})
			},
			//写评论
			write() {
				uni.navigateTo({
					url: '/pages/index/write'
				})
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
</style>
