<template>
	<view class="news wrp">
		<view class="item mt30 ct" v-for="(item,index) in 6" :key="index" @click="link(index)">
			<view class="info ct">
				<text class="title">新闻标题新闻标题新闻标 题新闻标题新闻标题</text>
				<text class="time">2020/5/26 12:56</text>
			</view>
			<image src="../../static/image/news.png" mode=""></image>
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
			link(index){
				uni.navigateTo({
					url:"/pages/news/detail?title="+'新闻标题'+index
				})
			}
		}
	}
</script>

<style lang="scss">
	.news{
		.item{
			display: flex;
			background: #FFFFFF;
			border-radius:10upx;
			overflow: hidden;
			.title{
				font-size:30upx;
				color:rgba(51,51,51,1);
				padding: 0!important;
				margin-bottom: 26upx;
			}
			.time{
				font-size:24upx;
				color:rgba(153,153,153,1);
			}
			.info{
				flex: 1;
				flex-direction: column;
				align-items: baseline;
				margin-left: 24upx;
			}
			image{
				width: 286upx;
				height: 188upx;
				margin-left: 52upx;
			}
		}
	}
</style>
