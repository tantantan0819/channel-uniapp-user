<template>
	<view class="list wrp">
		<view class="keyword ct">
			 <input class="uni-input" placeholder="请输入关键字" />
			 <text class="cc">搜索</text>
		</view>
		<view class="condition cs">
			<view class="item ct">
				  <picker @change="bindPickerChange" :value="areaValue" :range="array">
				        <text class="font">地区：请选择</text>
				   </picker>
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
				<text class="font">最近查看</text>
			</view>
		</view>
		<view class="hot_item mb30" v-for="(item,index) in 4" :key="index">
			<view class="hot_top" @click="detail">
				<view class="ct">
					<text>产品名称333333</text>
					<text>产品类型：产品类型</text>
				</view>
				<view class="ct">
					<text>最低月利率：<text>最低月利率</text></text>
					<text>最高额度：<text>最高额度</text></text>
				</view>
			</view>
			<view class="hot_bottom cs">
				<text>在线咨询：<text @click="customer">立即联系</text></text>
				 <text class="cc" @click="apply">立即申请</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return { 
				areaValue: 0,
				quotaValue: 0,
				interestValue: 0,
				 array: ['中国', '美国', '巴西', '日本'],
				 interest: ['高','低'],
				 quota: ['额度1','额度2']
			}
		},
		onLoad(options) {
			let title = options.title ? options.title : '产品列表'
			uni.setNavigationBarTitle({
			    title: title
			});
		},
		methods: {
			  bindPickerChange: function(e) {
			            console.log('picker发送选择改变，携带值为', e.target.value)
			            this.areaValue = e.target.value
			        },
					interestChange: function(e) {
					          this.interestValue = e.target.value
					      },
						  quotaChange: function(e) {
						            this.quotaValue = e.target.value
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
			detail(){
				uni.navigateTo({
					 url: '/pages/index/detail'
				})
			}
		}
	}
</script>

<style lang="scss">
	.condition{
		margin-bottom: 60upx;
		align-items: baseline;
		.font{
			font-size:26upx;
			color:rgba(51,51,51,1);
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
				right: -20upx;
			}
		}
	}
</style>
