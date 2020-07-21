<template>
	<view class="classify">
		<view class="uni-padding-wrap uni-common-mt">
			<view>
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scroll="scroll">
					<view v-for="(item,index) in list" :key="index" class="scroll-view-item uni-bg-red cc" :class="{'active':activeId == item.id}" @click="check(item)">{{item.name}}</view>
				</scroll-view>
			</view>
		</view>
		<view class="classify_con">
			<view class="item" v-for="(item,index) in children" :key="index" @click="link">
				<image src="../../static/image/classify.png" mode=""></image>
				<text>{{item.name}}</text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				activeId: null,
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				list:[],
				children: [],
			}
		},
		onLoad(options) {
			this.$post('/product/getTypeList').then(res=>{
				this.list = res.list;
				console.log(res)
			    if(res.list.length>0){
					this.activeId  = res.list[0].id;
					this.children = res.list[0].children;
				}
			})
		},
		methods: {
			
			scroll: function(e) {
				// console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			check(item){
				this.activeId = item.id;
				this.children = item.children;
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