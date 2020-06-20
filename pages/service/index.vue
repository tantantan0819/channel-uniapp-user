<template>
	<view class="service wrp">
	  <view class="uni-padding-wrap mt30 banner">
	            <view class="page-section swiper">
	                <view class="page-section-spacing">
	                    <swiper class="swiper" :indicator-dots="banner.indicatorDots" :autoplay="banner.autoplay" :interval="banner.interval" :duration="banner.duration">
	                        <swiper-item v-for="(item,index) in 3" :key="index">
	                            <image src="../../static/image/service_banner.png" mode=""></image>
	                        </swiper-item>
	                    </swiper>
	                </view>
	            </view>
	        </view>
			<view class="notice">
				<image src="../../static/image/notice.png" mode=""></image>
				<view class="uni-padding-wrap">
				          <view class="page-section swiper">
				              <view class="page-section-spacing">
				                  <swiper class="swiper" :indicator-dots="notice.indicatorDots" :autoplay="notice.autoplay" :interval="notice.interval" :duration="notice.duration" vertical="true">
				                      <swiper-item v-for="(item,index) in noticeArr" :key="index">
										  <text class="notice_con">{{item}}</text>
				                      </swiper-item>
				                  </swiper>
				              </view>
				          </view>
				      </view>
			</view>
		<view class="product mt30">
			<view class="item" v-for="(item,index) in product" :key="index" @click="link(item.link)">
				<image :src="item.icon" mode=""></image>
				<text>{{item.name}}</text>
			</view>
		</view>
		<view class="title cs">
			<text>申请流程</text>
		</view>
		<view class="process">
			<view class="row">
				<text class="icon">申请贷款/申请信用卡</text>
				<text class="icon">填写资料</text>
				<text class="icon match">确认匹配</text>
			</view>
			<view class="row">
				<text class="icon contrary">等待审核</text>
				<text class="icon contrary">提交申请</text>
				<text>选择想要申请的产品</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				product:[
					{
						name: '申请贷款',
						icon: '../../static/image/service_icon1.png',
						link: '/pages/service/credit?title='+'贷款申请'
					},
					{
						name: '申请信用卡',
						icon: '../../static/image/service_icon2.png',
						link: '/pages/service/credit?title='+'信用卡申请'
					},
					{
						name: '申请查询',
						icon: '../../static/image/service_icon3.png',
						link: '/pages/service/query'
					},
					{
						name: '产品查询',
						icon: '../../static/image/service_icon4.png',
						link: '/pages/index/list?title='+'产品查询'
					},
					{
						name: '升级会员',
						icon: '../../static/image/service_icon5.png',
						link: '/pages/service/member'
					},
					{
						name: '官方客服',
						icon: '../../static/image/service_icon6.png',
						link: '/pages/index/customer'
					},
					{
						name: '电话客服',
						icon: '../../static/image/service_icon7.png',
						link: 'phone'
					},
					{
						name: '分享',
						icon: '../../static/image/service_icon8.png',
						link: '/pages/service/share'
					},
				],
				banner:{
					indicatorDots: true,
					autoplay: true,
					interval: 2000,
					duration: 500
				},
				notice:{
					indicatorDots: false,
					autoplay: true,
					interval: 4000,
					duration: 500
				},
				noticeArr: [
					'1、通知内容通知内容通知内容通知内容通知内容...通知内容通知内容通知内容通知内容通知内容...',
				'2、通知内容通知内容通知内容通知内容通知内容...通知内容通知内容通知内容通知内容通知内容...',
				'3、通知内容通知内容通知内容通知内容通知内容...通知内容通知内容通知内容通知内容通知内容...',
				'4、通知内容通知内容通知内容通知内容通知内容...通知内容通知内容通知内容通知内容通知内容...'
				]
				          
			}
		},
		methods: {
			link(url){
				if(url=='phone'){
					console.log('000')
				}else{
					uni.navigateTo({
						 url: url
					})
				}
				
			}
			
		}
	}
</script>

<style lang="scss">
	.service{
		.process{
			background:rgba(255,255,255,1);
			border-radius:10upx;
			padding: 44upx 54upx 45upx 53upx;
			.row{
				display: flex;
				justify-content: space-between;
				&:first-child{
					padding-bottom: 70upx;
				}
				text{
					font-size:26upx;
					color:rgba(51,51,51,1);
					margin-right: 60upx;
					&:nth-child(3n+3){
						margin-right: 0;
					}
				}
				.icon{
					position: relative;
					&::after{
						content: '';
						display: inline-block;
						width: 14upx;
						height: 30upx;
						background: url(../../static/image/process.png);
						background-size: 14upx 30upx;
						transform: rotate(-90deg);
						position: absolute;
						top: 6upx;
						right: -38upx;
						
					}
				}
				.contrary{
					&::after{
						transform: rotate(90deg)!important;
					}
				}
				.match{
					&::after{
						transform: rotate(0deg)!important;
						top: 54upx;
						right: 10upx;
					}
				}
			}
			
		}
		.product{
			background:rgba(255,255,255,1);
			border-radius:10upx;
			padding: 44upx 0 0 42upx;
			display: flex;
			flex-wrap: wrap;
			.item{
				width: 130upx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin: 0 28upx 47upx 0;
				&:nth-child(4n+4){
					margin-right: 0;
				}
				image{
					width: 98upx;
					height: 98upx;
				}
				text{
					margin-top: 34upx;
					font-size:26upx;
					color:rgba(51,51,51,1);
				}
			}
		}
		.notice{
			padding: 22upx 26upx;
			background:rgba(255,255,255,1);
			border-radius:10upx;
			margin-top: 50upx;
			display: flex;
			align-items: center;
			image{
				width: 38upx;
				height: 36upx;
				margin-right: 30upx;
			}
		}
		.notice{
		uni-swiper-item{
			display: flex;
		}
			.page-section-spacing{
				height: 30upx;
				overflow: hidden;
			}
			.swiper{
				height: 30upx;
				overflow: hidden;
			}
			.page-section{
				height: 30upx;
				overflow: hidden;
			}
			.uni-padding-wrap{
				width:500upx;
				height:30upx;
			}
			.notice_con{
				width:500upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size:24upx;
				color:rgba(51,51,51,1);
			}
		}
		.banner{
			.uni-swiper-dots-horizontal{
				right: 20upx!important;
				left: auto;
			}
			uni-swiper .uni-swiper-dot-active{
				background-color: #FFFE9900;
			}
			.uni-padding-wrap{
				width:690upx;
				height:320upx;
				background:rgba(245,244,249,1);
				box-shadow:0px 7upx 29upx 3upx rgba(0, 0, 0, 0.1);
				border-radius:10upx;
			}
			swiper-item{
				image{
					width: 690upx;
					height: 320upx;
					border-radius:10upx;
					overflow: hidden;
				}
			}
		}
	}
</style>
