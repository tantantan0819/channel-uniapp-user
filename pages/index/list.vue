<template>
	<view class="list wrp">
		<view class="keyword ct">
			 <input class="uni-input" placeholder="请输入关键字" />
			 <text class="cc">搜索</text>
		</view>
		<view class="condition cs">
			<text>地区：请选择地区 </text>
			<text class="ct">利息 <image src="../../static/image/home_icon.png" mode=""></image></text>
			<text class="ct">额度 <image src="../../static/image/home_icon.png" mode=""></image></text>
			<text>最近查看</text>
		</view>
		<view class="hot_item mb30" v-for="(item,index) in 4" :key="index">
			<view class="hot_top" @click="detail">
				<view class="ct">
					<text>产品名称333333</text>
					<text>产品类型：产品类型</text>
				</view>
				<view class="ct">
					<text>最低月利率：<text>最低月利率</text></text>
					<text>最高额度：<text>最高额度</text></text>
				</view>
			</view>
			<view class="hot_bottom cs">
				<text>在线咨询：<text @click="customer">立即联系</text></text>
				 <text class="cc" @click="apply">立即申请</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			customer(){
				uni.navigateTo({
					 url: '/pages/index/customer'
				})
			},
			apply(){
				uni.navigateTo({
					 url: '/pages/index/apply'
				})
			},
			detail(){
				uni.navigateTo({
					 url: '/pages/index/detail'
				})
			}
		}
	}
</script>

<style lang="scss">
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
	}
</style>
