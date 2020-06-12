<template>
	<view class="search wrp">
		<view class="keyword ct">
			 <input class="uni-input" focus placeholder="请输入关键字" />
			 <text class="cc">搜索</text>
		</view>
		<view class="search_title ct">
			<text>历史搜索</text>
			<text>清空</text>
		</view>
		<view class="search_box">
			<text @click="linkList" v-for="(item,index) in 6" :key="index">历史搜索内容1</text>
		</view>
		<view class="search_title ct">
			<text>热门搜索</text>
		</view>
		<view class="search_box">
			<text @click="linkList" v-for="(item,index) in 6" :key="index">热门搜索内容1</text>
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
			linkList(){
					uni.navigateTo({
						 url: '/pages/index/list'
					})
			}
		}
	}
</script>

<style lang="scss">
	.search{
		.search_box{
			display: flex;
			flex-wrap: wrap;
			text{
				margin: 0 30upx 24upx 0;
				padding: 16upx;
				font-size:24upx;
				color:rgba(153,153,153,1);
				background:rgba(234,234,234,1);
				border-radius:27upx;
			}
		}
		.search_title{
		    justify-content: space-between;
			padding: 23upx 0 40upx 0;
			text{
				&:nth-child(1){
					font-size:30upx;
					color:rgba(51,51,51,1);
				}
				&:nth-child(2){
				font-size:24upx;
				color:rgba(102,102,102,1);
				}
			}
		}
		
	}
</style>
