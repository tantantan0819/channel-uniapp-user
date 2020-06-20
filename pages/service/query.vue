<template>
	<view class="query">
		<view class="list wrp">
			<view class="keyword ct">
				 <input class="uni-input" placeholder="请输入关键字" />
				 <text class="cc">搜索</text>
			</view>
			<view class="condition cs">
				<text class="ct select">2020年6月1日</text>
			</view>
		</view>
		<view class="query_nav">
			<view class="item" v-for="(item,index) in nav" :key="index" :class="{'active':index == navIndex}" @click="change(index)">{{item}}</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navIndex: 0,
				nav: ['申请中','审核中','已通过','已拒绝']
			}
		},
		onNavigationBarButtonTap:function(e){
		         uni.navigateTo({
		         	url:'/pages/service/info'
		         })
		},
		methods: {
			change(index){
				this.navIndex = index;
			}
		}
	}
</script>


<style lang="scss">
	.query_nav{
		display: flex;
		justify-content: space-around;
		padding: 28upx 0;
		border:1px solid rgba(238,238,238,1);
		.item{
			font-size:26upx;
			color:rgba(51,51,51,1);
		}
		.active{
			position: relative;
			&::before{
				content: '';
				display: inline-block;
				width:26upx;
				height:6upx;
				background:rgba(254,153,0,1);
				position: absolute;
				left: 50%;
				bottom: -28upx;
				transform: translateX(-50%);
			}
		}
	}
	.condition{
		margin-bottom: 60upx;
		text{
			font-size:26upx;
			color:rgba(51,51,51,1);
			image{
				width:14upx;
				height:9upx;
				margin-left: 10upx;
			}
		}
		.select{
			position: relative;
			&::before{
				content: '';
				display: inline-block;
				width: 14upx;
				height: 9upx;
				background-image: url(../../static/image/list_icon.png);
				background-size: 14upx 9upx;
				position: absolute;
				top: 20upx;
				right: -20upx;
			}
		}
	}
</style>