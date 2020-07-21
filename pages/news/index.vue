<template>
	<view class="news wrp">
		<view class="item mt30 ct" v-for="(item,index) in list" :key="index" @click="link(item)">
			<view class="info ct">
				<text class="title">{{item.title}}</text>
				<text class="time">{{item.createdTime}}</text>
			</view>
			<image :src="item.imgUrl" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				page: 1,
				pageSize: 10,
				total: null
			}
		},
		mounted() {
			this.$post('/article/list',{page:this.page,pageSize:this.pageSize}).then(res=>{
				console.log(res,'res--')
				this.list = res.data.rows;
				this.total = res.data.total;
			})
		},
		methods: {
			link(item){
				uni.navigateTo({
					url:"/pages/news/detail?id="+item.id+'&&title='+item.title
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
