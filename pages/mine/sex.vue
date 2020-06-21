<template>
	<view class="sex">
		<view class="item ct" v-bind:class="{ active: item == select }" v-for="(item,index) in sex" :key="index" @click="selectSex(item)">
		  {{item}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				select: '男',
				sex:['男','女']
			}
		},
		onNavigationBarButtonTap:function(e){
		         uni.navigateBack({
		         	delta: 1
		         });
		},
		methods: {
			selectSex(sex){
				this.select = sex;
			}
		}
	}
</script>

<style lang="scss">
	.sex{
		margin: 40upx 30upx 0;
		width:690upx;
		height:198upx;
		background:rgba(255,255,255,1);
		border-radius:6upx;
		.item{
			height: 99upx;
			padding-left: 34upx;
			&:nth-child(1){
				border-bottom: 1px solid #EEEEEE;
			}
		}
		.active{
			position: relative;
			&::before{
				content: '';
				display: inline-block;
				width: 36upx;
				height: 28upx;
				background-image: url(../../static/image/sex_icon.png);
				background-size: 36upx 28upx;
				position: absolute;
				top: 26upx;
				right: 34upx;
			}
		}
	}
</style>
