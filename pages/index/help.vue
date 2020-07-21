<template>
	<view class="wrp help" v-html="content"></view>
</template>

<script>
	export default {
		data() {
			return {
				content: ''
			}
		},
		onLoad() {
			this.$get('/main/getHelpContent').then(res=>{
				this.content = res.content;
			})
		},
		
	}
</script>

<style lang="scss">
	.help{
		display: flex;
		flex-direction: column;
		padding: 20upx;
		// .title{
		// 	font-size:36upx;
		// 	font-weight:bold;
		// 	color:rgba(51,51,51,1);
		// 	margin-top: 38upx;
		// }
		// .time{
		// 	font-size:24upx;
		// 	color:rgba(153,153,153,1);
		// }
		// .con{
		// 	font-size:26upx;
		// 	line-height: 50upx;
		// 	color:rgba(51,51,51,1);
		// }
		// image{
		// 	width: 692upx;
		// 	height: 355upx;
		// 	margin: 30upx 0 40upx 0;
		// 	position: relative;
		// 	&::before{
		// 		content: '';
		// 		width: 80upx;
		// 		height: 80upx;
		// 		background-image: url(../../static/image/help.png);
		// 		background-size: 80upx 80upx;
		// 		position: absolute;
		// 		top: 50%;
		// 		left: 50%;
		// 		transform: translate(-50%,-50%);
		// 	}
		// }
	}
</style>
