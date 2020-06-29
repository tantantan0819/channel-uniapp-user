<template>
	<view class="query">
		<view class="list wrp">
			<view class="keyword ct">
				 <input class="uni-input" placeholder="请输入关键字" />
				 <text class="cc">搜索</text>
			</view>
			<view class="condition cs">
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				       <view class="uni-input select data">{{date}}</view>
				</picker>
				<!-- <text class="ct select">2020年6月1日</text> -->
			</view>
		</view>
		<view class="query_nav">
			<view class="item" v-for="(item,index) in nav" :key="index" :class="{'active':index == navIndex}" @click="change(index)">{{item}}</view>
		</view>
		<view class="wrp hot">
			<view class="hot_item mt30" v-for="(item,index) in 2" :key="index">
				<view class="hot_top" @click="detail">
					<view class="ct cs">
						<text>产品名称333333</text>
						<text>产品类型：产品类型</text>
					</view>
					<view class="ct cs">
						<text>最低月利率：<text>最低月利率</text></text>
						<text>最高额度：<text>最高额度</text></text>
					</view>
				</view>
				<view class="hot_bottom cs hot_query">
					<text>在线咨询：<text @click="customer">立即联系</text></text>
					<text v-if="navIndex == 0">2020/5/13 16:45 提交申请</text>
					<text v-else-if="navIndex == 1">2020/5/13 16:45 开始审核</text>
					<text v-else-if="navIndex == 2">2020/5/13 16:45 通过申请</text>
					<text v-else>2020/5/13 16:45 拒绝申请</text>
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
				nav: ['申请中','审核中','已通过','已拒绝']
			}
		},
		onNavigationBarButtonTap:function(e){
		         uni.navigateTo({
		         	url:'/pages/service/info'
		         })
		},
		methods: {
			change(index){
				this.navIndex = index;
			},
			detail(){
				uni.navigateTo({
					 url: '/pages/index/detail'
				})
			},
			customer(){
				uni.navigateTo({
					 url: '/pages/index/customer'
				})
			},
			apply(){
				uni.navigateTo({
					 url: '/pages/service/credit?title='+'贷款申请'
				})
			},
			bindPickerChange: function(e) {
			            console.log('picker发送选择改变，携带值为', e.target.value)
			            this.index = e.target.value
			        },
			        bindDateChange: function(e) {
			            this.date = e.target.value
			        },
			        bindTimeChange: function(e) {
			            this.time = e.target.value
			        },
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
			        }
		}
	}
</script>


<style lang="scss" scoped>
	.data{
		font-size:26upx;
		color:rgba(51,51,51,1);
	}
	.hot_query{
		text{
			background: none!important;
			&:nth-child(2){
				width: auto!important;
				height: auto!important;
				background-color: transparent;
				color:rgba(153,153,153,1);
			}
		}
	}
	.query_nav{
		display: flex;
		justify-content: space-around;
		padding: 28upx 0;
		border:1px solid rgba(238,238,238,1);
		.item{
			font-size:26upx;
			color:rgba(51,51,51,1);
		}
		.active{
			position: relative;
			&::before{
				content: '';
				display: inline-block;
				width:26upx;
				height:6upx;
				background:rgba(254,153,0,1);
				position: absolute;
				left: 50%;
				bottom: -28upx;
				transform: translateX(-50%);
			}
		}
	}
	.condition{
		margin-bottom: 60upx;
		text{
			font-size:26upx;
			color:rgba(51,51,51,1);
			image{
				width:14upx;
				height:9upx;
				margin-left: 10upx;
			}
		}
		.select{
			position: relative;
			&::before{
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