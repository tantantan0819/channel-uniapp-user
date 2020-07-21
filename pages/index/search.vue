<template>
	<view class="search wrp">
		<view class="keyword ct">
			<input class="uni-input" focus placeholder="请输入关键字" v-model="keywords" />
			<text class="cc" @click="serch">搜索</text>
		</view>
		<view class="search_title ct" v-if="historyList.length>0">
			<text>历史搜索</text>
			<text @click="clearHistory">清空</text>
		</view>
		<view class="search_box" v-if="historyList.length>0">
			<text @click="linkList(item)" v-for="(item,index) in historyList" :key="index">{{item}}</text>
		</view>
		<view class="search_title ct">
			<text>热门搜索</text>
		</view>
		<view class="search_box">
			<text @click="detail(item.id)" v-for="(item,index) in hotList" :key="index">{{item.name}}1</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keywords: '', //搜索关键字
				historyList: [],//默认6个
				sortLen: 10,//历史保存记录长度
				hotList: [],//热门搜索
			}
		},
		onLoad() {
			this.$get('/main/getSearch').then(res=>{
				this.hotList = res.hot;
			})
		},
		onShow() {
			this.getHistory();
		},
		methods: {
			//获取搜索记录
			getHistory(){
				let historyArr = uni.getStorageSync('history');
				if(historyArr){
					historyArr.length<this.sortLen+1 ? this.historyList = historyArr : this.historyList = historyArr.slice(0,this.sortLen);
				}else{
					this.historyList = [];
				}
			},
			linkList(keywords) {
				console.log(keywords,'需要点击')
				uni.navigateTo({
					url: '/pages/index/list?keywords='+keywords
				})
			},
			//搜索跳转
			serch() {
				if(this.keywords){
					this.historyList.unshift(this.keywords);
					uni.setStorageSync('history', this.historyList);
				}
				uni.navigateTo({
					url: '/pages/index/list?keywords='+this.keywords
				})
			},
			//清空搜索记录
			clearHistory(){
				console.log('000')
				uni.removeStorageSync('history');
				this.getHistory();
			},
			//查看产品详情
			detail(id) {
				uni.navigateTo({
					url: '/pages/index/detail?id='+id
				})
			},
		}
	}
</script>

<style lang="scss">
	.search {
		.search_box {
			display: flex;
			flex-wrap: wrap;

			text {
				margin: 0 30upx 24upx 0;
				padding: 16upx;
				font-size: 24upx;
				color: rgba(153, 153, 153, 1);
				background: rgba(234, 234, 234, 1);
				border-radius: 27upx;
			}
		}

		.search_title {
			justify-content: space-between;
			padding: 23upx 0 40upx 0;

			text {
				&:nth-child(1) {
					font-size: 30upx;
					color: rgba(51, 51, 51, 1);
				}

				&:nth-child(2) {
					font-size: 24upx;
					color: rgba(102, 102, 102, 1);
				}
			}
		}

	}
</style>
