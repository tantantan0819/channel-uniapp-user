<template>
	<view class="service wrp">
	  <view class="uni-padding-wrap mt30 banner">
	            <view class="page-section swiper">
	                <view class="page-section-spacing">
	                    <swiper class="swiper" :indicator-dots="banner.indicatorDots" :autoplay="banner.autoplay" :interval="banner.interval" :duration="banner.duration">
	                        <swiper-item v-for="(item,index) in 3" :key="index" @click="link">
	                            <image src="../../static/image/service_banner.png" mode=""></image>
	                        </swiper-item>
	                    </swiper>
	                </view>
	            </view>
	        </view>
	<!-- 	<view class="title cs">
			<text>附近渠道商</text>
		</view> -->
		<view class="query_nav">
			<view class="nav_wrp cs ct">
				<text class="font-30 f-gray" :class="{'active':index == navIndex}" v-for="(item,index) in nav" @click="change(index)">{{item}}</text>
			</view>
		</view>
		<view class="query_item" v-for="(item,index) in 4" :key="index">
			<text class="title">渠道商名称{{navIndex+1}}</text>
			<view class="des cs">
				<text>渠道商地址渠道商地址渠道商地址...</text>
				<view class="info">
					<image src="../../static/image/query_icon1.png" mode="" @click="contact"></image>
					<image src="../../static/image/query_icon2.png" mode="" @click="map"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navIndex: 0,
				nav: ['公司服务门店','征信打印网点'],
				banner:{
					indicatorDots: true,
					autoplay: true,
					interval: 2000,
					duration: 500
				},
			}
		},
		methods: {
			link(){
				uni.navigateTo({
					 url: '/pages/query/finance'
				})
			},
			contact(){
				uni.navigateTo({
					 url: '/pages/index/customer'
				})
				
			},
			map(){
				uni.navigateTo({
					 url: '/pages/query/map'
				})
			},
			change(index){
				this.navIndex = index;
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.query_nav{
		padding: 40upx 0;
		.nav_wrp{
			width: 450upx;
			padding: 20upx 0;
		}
		.active{
			font-size: 36upx;
			font-weight: bold;
			color:rgba(51,51,51,1)!important;
			position: relative;
			&::before{
				content: '';
				display: inline-block;
				width:80upx;
				height:10upx;
				background:rgba(254,153,0,1);
				position: absolute;
				bottom: -20upx;
				left: 50%;
				transform: translateX(-50%);
			}
		}
	}
	.query_item{
		margin-top: 14upx;
		background:rgba(255,255,255,1);
		border-radius:10upx;
		padding: 30upx 27upx;
		.title{
			font-size:30upx;
			color:rgba(51,51,51,1);
		}
		.des{
			text{
				font-size:24upx;
				color:rgba(153,153,153,1);
			}
			.info{
				image{
					width: 37upx;
					height: 37upx;
					margin-left: 52upx;
				}
			}
		}
	}
	.service{
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
