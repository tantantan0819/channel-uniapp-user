<template>
	<view class="list wrp">
		<view class="keyword ct">
			<input class="uni-input" placeholder="请输入关键字" v-model="params.keywords" />
			<text class="cc" @click="getList">搜索</text>
		</view>
		<view class="condition cs">
			<view class="item ct" @click="popup_bottom">
				<text class="font">地区：{{area}}</text>
			</view>
			<view class="item ct">
				<picker @change="interestChange" :value="interestValue" :range="interest">
					<text class="font select">利息</text>
				</picker>
			</view>
			<view class="item ct">
				<picker @change="quotaChange" :value="quotaValue" :range="quota">
					<text class="font select">额度</text>
				</picker>
			</view>
			<view class="item ct">
				<text class="font" @click="lastView">最近查看</text>
			</view>
		</view>
		<view class="hot_item mb30" v-for="(item,index) in list" :key="index">
			<view class="hot_top"  @click="detail(item.id)">
				<view class="ct cs">
					<text>{{item.name}}</text>
					<text>产品类型：{{item.typeName}}</text>
				</view>
				<view class="ct cs">
					<text>最低月利率：<text>{{item.accrual}}</text></text>
					<text>最高额度：<text>{{item.amount}}</text></text>
				</view>
			</view>
			<view class="hot_bottom cs">
				<text>在线咨询：<text @click="customer">立即联系</text></text>
				<text class="cc" @click="apply">立即申请</text>
			</view>
		</view>
		<v-city ref="linkAddress" :height="height" @confirmCallback="confirmCallback()"></v-city>
		<view class="no_data font-24 f-gray cc" v-if="list.length<1">暂无数据……</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				height: '500px',
				area: '请选择', //选择地区
				list: [], //产品列表
				params: {
					typeId: -1, //类型id，全部传-1
					keywords: '', //查询关键词,不筛选传空字符串
					city: '', //地址，不筛选传空字符串
					accrualSort: true, //true-按照利息降序排序
					amountSort: true, //true-按照额度降序排序
					page: 1, //页数
					pageSize: 10 //每页条数
				}, //获取产品列表的参数
				areaValue: 0,
				quotaValue: 0,
				interestValue: 0,
				array: ['中国', '美国', '巴西', '日本'],
				interest: ['降序', '升序'],
				quota: ['降序', '升序']
			}
		},
		onLoad(options) {
			//设置导航栏
			let title = options.title ? options.title : '产品列表';
			this.params.keywords = options.keywords;
			uni.setNavigationBarTitle({
				title: title
			});
			//获取产品列表
			this.getList();
		},

		methods: {
			//获取产品列表
			getList() {
				this.$post('/product/getSpuList', this.params).then(res => {
					this.list = res.list;
					console.log(res.list, '产品列表')
				})
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.areaValue = e.target.value
			},
			interestChange: function(e) {
				this.interestValue = e.target.value;
				this.interestValue == 0 ? this.params.accrualSort = true : this.params.accrualSort = false;
				this.getList();
			},
			quotaChange: function(e) {
				this.quotaValue = e.target.value;
				this.quotaValue == 0 ? this.params.amountSort = true : this.params.amountSort = false;
				this.getList();
			},
			//立即联系
			customer() {
				uni.navigateTo({
					url: '/pages/index/customer'
				})
			},
			apply() {
				uni.navigateTo({
					url: '/pages/service/credit?title=' + '贷款申请'
				})
			},
			//查看产品详情
			detail(id) {
				uni.navigateTo({
					url: '/pages/index/detail?id='+id
				})
			},
			//确认选择地区
			confirmCallback: function(e) {
				let cityArr = uni.getStorageSync('city').split('-')
				this.area = cityArr[cityArr.length - 1];
				this.params.city = this.area;
				this.getList();
			},
			//点击弹出弹窗
			popup_bottom: function() {
				this.height = '550rpx';
				//显示
				this.show_popup();
			},
			//显示弹窗
			show_popup: function() {
				this.$refs.linkAddress.show();
			},
			//最近查看
			lastView() {
				
			}
		}
	}
</script>

<style lang="scss">
	.condition {
		margin-bottom: 60upx;
		align-items: baseline;

		.font {
			font-size: 26upx;
			color: rgba(51, 51, 51, 1);
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
				right: -20upx;
			}
		}
	}
</style>
