<template>
	<view class="news_detail wrp ">
		<text class="title">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</text>
		<text class="time">2020/5/26 12:56</text>
		<image src="../../static/image/news_detail.png" mode=""></image>
		<text class="con">正文内容正文内容正文内容正文内容正文内容正文内容正文 内容正文内容正文内容正文内容正文内容正文内容正文内容 正文内容正文内容正文内容正文内容正文内容</text>
		<image src="../../static/image/news_detail.png" mode=""></image>
		<text class="con">正文内容正文内容正文内容正文内容正文内容正文内容正文 内容正文内容正文内容正文内容正文内容正文内容正文内容 正文内容正文内容正文内容正文内容正文内容</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: ''
			}
		},
		onLoad(options) {
			if(options.id){
				this.id = options.id
				uni.setNavigationBarTitle({
				    title: options.title
				});
			}
		
		},
		mounted() {
			this.$post('/article/view',{id:this.id}).then(res=>{
				console.log(res)
			})
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.news_detail{
		padding: 40upx 0;
		display: flex;
		flex-direction: column;
		.title{
			font-size:36upx;
			color:rgba(51,51,51,1);
		}
		.time{
			font-size:24upx;
			color:rgba(153,153,153,1);
		}
		image{
			margin: 30upx 0 45upx;
			width: 100%;
			height: 355upx;
		}
		.con{
			font-size:26upx;
			color:rgba(51,51,51,1);
		}
		
	}

</style>
