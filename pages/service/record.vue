<template>
	<view class="record">
		<view class="top wrp">
			<text class="num">邀请*人，可成为会员</text>
			<view class="info mt30 cs ct">
				<view class="invite">
					已邀请用户
					<text>（12）</text>
				</view>
				<text class="phone">手机号</text>
			</view>
		</view>
		<view class="con">
			<view class="uni-padding-wrap uni-common-mt ">
				<view>
					<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
					@scroll="scroll">
						<view class="scroll-view-item con_box cs ct" v-for="(item,index) in 30" :key="index">
							<view class="con_info ct">
								<image src="../../static/image/record.png" mode=""></image>
								<text>用户昵称</text>
							</view>
							<view class="tel">13912345678</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				params:{
					page: 1,
					pageSize: 10
				}
			}
		},
		onLoad() {
			this.getInfo();
		},
		methods: {
			getInfo(){
				this.$post('/getShareList',this.params).then(res=>{
					console.log(res,'000')
				})
			},
			scroll: function(e) {
				// console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
		}
	}
</script>

<style lang="scss">
	.con{
		background: #FFFFFF;
		padding: 0 30upx;
		.con_box{
			margin-bottom: 42upx;
			&:nth-child(1){
				margin-top: 32upx;
			}
			.con_info{
				image{
					width: 74upx;
					height: 74upx;
					margin-right: 32upx;
				}
				text{
					font-size:26upx;
					color:rgba(51,51,51,1);
				}
			}
		}
		.uni-padding-wrap {
				width: 100%;
				height: 100%;
				uni-view{
					height: 100%;
				}
			}
			.classify{
				display: flex;
			}
		.scroll-Y {
					height: 100vh;
				}
			.scroll-view_H {
				white-space: nowrap;
				width: 100%;
			}
		
			.scroll-view-item {
				width:100%;
				height:116upx;
				font-size:30upx;
				color:rgba(51,51,51,1);
			}
			
			.scroll-view-item_H {
				display: inline-block;
				width: 100%;
				height: 116upx;
				text-align: center;
			}
	}
	.top{
		background: #f7f7f7;
		padding: 22upx 84upx 22upx 34upx;
		.num{
			font-size:30upx;
			color:rgba(51,51,51,1);
		}
		
		.info{
			.invite{
				font-size:26upx;
				color:rgba(153,153,153,1);
				text{
					color:rgba(51,51,51,1)
				}
			}
			.phone{
				font-size:26upx;
				color:rgba(153,153,153,1);
			}
		}
	}
</style>
