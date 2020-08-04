<template>
	<view class="query">
		<view class="list wrp">
			<view class="keyword ct">
				<input class="uni-input" placeholder="请输入关键字" v-model="params.keywords" />
				<text class="cc" @click="getList">搜索</text>
			</view>
			<view class="condition cs">
				<picker mode="date" :value="date" @change="bindDateChange">
					<view class="uni-input select data">{{date}}</view>
				</picker>
			</view>
		</view>
		<view class="query_nav">
			<view class="item" v-for="(item,index) in nav" :key="index" :class="{'active':index == navIndex}" @click="change(index)">{{item}}</view>
		</view>
		<view class="wrp hot">
			<view class="hot_item mt30" v-for="(item,index) in list" :key="index">
				<view class="hot_top" @click="detail(item.id,item)">
					<view class="ct cs">
						<text>{{item.name}}</text>
						<text>产品类型：{{item.typeName}}</text>
					</view>
					<view class="ct cs">
						<text>最低月利率：<text>{{item.accrual}}</text></text>
						<text>最高额度：<text>{{item.amount}}</text></text>
					</view>
				</view>
				<view class="hot_bottom cs hot_query">
					<text>在线咨询：<text @click="customer">立即联系</text></text>
					<text v-if="navIndex == 0">{{item.time}} 提交申请</text>
					<text v-else-if="navIndex == 1">{{item.time}} 开始审核</text>
					<text v-else-if="navIndex == 2">{{item.time}} 通过申请</text>
					<text v-else>{{item.time}} 拒绝申请</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				date: currentDate,
				navIndex: 0,
				total: 0,
				list: [],
				nav: ['申请中', '审核中', '已通过', '已拒绝'],
				params: {
					keywords: '', //关键字
					page: 1, //页数
					pageSize: 10, //每页条数
					date: currentDate, //时间，格式yyyy-MM-dd
					status: 0, //状态，0-待审核，1-初审通过，2-终审通过，3-驳回
				}
			}
		},
		onNavigationBarButtonTap: function(e) {
			//消息列表
			uni.navigateTo({
				url: '/pages/service/info'
			})
		},
		onLoad() {
			this.getList();
		},
		//上拉加载
		onReachBottom() {
			if (this.total > this.list.length) {
				this.params.pageSize += 10;
				this.getList();
			}
		},
		methods: {
			//更改申请状态
			change(index) {
				this.navIndex = index;
				this.params.status = index;
				this.getList();
			},
			//查看详情
			detail() {
				uni.navigateTo({
					url: '/pages/index/detail?id=' + id
				})
			},
			//在线客服
			customer() {
				uni.navigateTo({
					url: '/pages/index/customer'
				})
			},
			//在线申请
			apply() {
				uni.navigateTo({
					url: '/pages/service/credit?title=' + '贷款申请'
				})
			},
			//更改申请时间
			bindDateChange: function(e) {
				this.date = e.target.value;
				this.params.date = e.target.value;
				this.getList();
			},
			//获得目前的时间
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			//获取数据
			getList() {
				this.$post('/getApplyProduct', this.params).then(res => {
					this.total = res.data.total;
					this.list = res.data.rows;
				})
			}
		}
	}
</script>


<style lang="scss" scoped>
	.data {
		font-size: 26upx;
		color: rgba(51, 51, 51, 1);
	}

	.hot_query {
		text {
			background: none !important;

			&:nth-child(2) {
				width: auto !important;
				height: auto !important;
				background-color: transparent;
				color: rgba(153, 153, 153, 1);
			}
		}
	}

	.query_nav {
		display: flex;
		justify-content: space-around;
		padding: 28upx 0;
		border: 1px solid rgba(238, 238, 238, 1);

		.item {
			font-size: 26upx;
			color: rgba(51, 51, 51, 1);
		}

		.active {
			position: relative;

			&::before {
				content: '';
				display: inline-block;
				width: 26upx;
				height: 6upx;
				background: rgba(254, 153, 0, 1);
				position: absolute;
				left: 50%;
				bottom: -28upx;
				transform: translateX(-50%);
			}
		}
	}

	.condition {
		margin-bottom: 60upx;

		text {
			font-size: 26upx;
			color: rgba(51, 51, 51, 1);

			image {
				width: 14upx;
				height: 9upx;
				margin-left: 10upx;
			}
		}

		.select {
			position: relative;

			&::before {
				content: '';
				display: inline-block;
				width: 14upx;
				height: 9upx;
				background-image: url(../../static/image/list_icon.png);
				background-size: 14upx 9upx;
				position: absolute;
				top: 16upx;
				right: -22upx;
			}
		}
	}
</style>
