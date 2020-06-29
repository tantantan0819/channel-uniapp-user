<template>
	<view class="classify">
		<view class="uni-padding-wrap uni-common-mt">
			<view>
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
				@scroll="scroll">
					<view v-for="(item,index) in nav" :key="index" class="scroll-view-item uni-bg-red cc" :class="{'active':activeIndex == index}" @click="check(index)">{{item}}</view>
				</scroll-view>
			</view>
		</view>
		<view class="classify_con">
			<view class="item" v-for="(item,index) in 20" :key="index" @click="link">
				<image src="../../static/image/classify.png" mode=""></image>
				<text>房屋贷</text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				activeIndex: 0,
				nav: ['抵押贷款','信用贷款','抵押贷款','信用贷款','抵押贷款','信用贷款','抵押贷款','信用贷款','抵押贷款','信用贷款','抵押贷款','信用贷款','抵押贷款','信用贷款','抵押贷款','信用贷款','抵押贷款','信用贷款','抵押贷款','信用贷款'],
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			}
		},
		onLoad(options) {
			  
		},
		methods: {
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				// console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			check(index){
				this.activeIndex = index;
			},
			link(index){
				uni.navigateTo({
					 url: '/pages/index/list'
				})
			}
		}
	}
</script>

<style>
	
		uni-page-body{
			padding: 0!important;
		}
	.uni-padding-wrap {
		width: 280upx;
		height: 100%;
		uni-view{
			height: 100%;
		}
	}
	.classify{
		display: flex;
	}
.scroll-Y {
			height: 100vh;
		}
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}

	.scroll-view-item {
		width:280upx;
		height:96upx;
		background:#cacaca;
		font-size:30upx;
		color:rgba(51,51,51,1);
	}
	.active{
		background: #f7f7f7;
	}
	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}
</style>