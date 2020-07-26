<template>
	<view class="service wrp">
	  <view class="uni-padding-wrap mt30 banner">
	            <view class="page-section swiper">
	                <view class="page-section-spacing">
	                    <swiper class="swiper" :indicator-dots="banner.indicatorDots" :autoplay="banner.autoplay" :interval="banner.interval" :duration="banner.duration">
	                        <swiper-item v-for="(item,index) in bannerList" :key="index" @click="link(item.url)">
	                            <image :src="item.imgUrl" mode=""></image>
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
		<view class="query_item" v-for="(item,index) in list" :key="index">
			<text class="title">{{item.name}}</text>
			<view class="des cs">
				<text>{{item.meraddr}}</text>
				<view class="info">
					<image src="../../static/image/query_icon1.png" mode="" @click="contact"></image>
					<image src="../../static/image/query_icon2.png" mode="" @click="map(item.lat,item.lng)"></image>
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
				bannerList:[],//banner
				list:[],//门店列表
				apiUrl: ['/query/merchantList','/query/zhengxinList'],
				params:{
					lat: '',//纬度
					lng: '',//经度
					page: 1,//页数
					pageSize: 10,//每页条数
				},
				total: 0,//
				msg: 0
			}
		},
		//上拉加载
		onReachBottom(){
			if(this.total>this.list.length){
				this.params.pageSize += 10; 
				this.change(this.navIndex);
			}
		},
		onLoad(options) {
			this.getBanner();
			this.change(0);
			uni.getLocation({
				 type: 'wgs84',
				 success: function(res){
					 console.log(res,'localtion')
				 },
				 fail:function(error){
					 console.log(error,'失败')
				 }
			})
		},
		methods: {
			//获取banner
			getBanner(){
				this.$get('/query/main').then(res=>{
					this.bannerList = res.banners;
				})
			},
			//banner图跳转
			link(url){
				if(url){
					window.open(url,'_target')
				}
				
			},
			contact(){
				uni.navigateTo({
					 url: '/pages/index/customer'
				})
				
			},
			//查看位置
			map(lat,lng){
				uni.navigateTo({
					 url: '/pages/query/map?lat='+lat+'&lng='+lng
				})
			},
			//门店和网点
			change(index){
				this.navIndex = index;
				this.$post(this.apiUrl[index],this.params).then(res=>{
					this.list = res.data.rows;
					this.total = res.data.total;
				})
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
