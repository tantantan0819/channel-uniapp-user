<template>
	<view class="news_detail wrp ">
		<text class="title">{{title}}</text>
		<text class="time">{{createdTime}}</text>
		<view class="con" v-html="content"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				title: '',
				createdTime: '',
				content: '',
			}
		},
		onLoad(options) {
			uni.setNavigationBarTitle({
			    title: options.title
			});
			this.id = options.id;
			this.getDetail();
		},
		methods: {
			getDetail(){
				this.$post('/article/view',{id:this.id}).then(res=>{
					this.createdTime = res.createdTime;
					this.title = res.title;
					this.content = res.content;
				})
			}
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
			padding: 20upx 0;
		}
		
	}

</style>
