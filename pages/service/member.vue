<template>
	<view class="member">
		<view class="show">
			<view class="top wrp ct">
				<text>{{days}}</text>
				<text>剩余会员时间（天）</text>
			</view>
		</view>
		<view class="recharge cs wrp">
			<view class="item cc" v-for="(item,index) in recharge" :key="index" :class="{'active':index == checked}" @click="change(index,item.id)">
				<text class="month">{{item.month}}个月</text>
				<view class="price mt20">
					<text>￥</text>
					<text>{{item.price}}</text>
				</view>
			</view>
		</view>
		<view class="tip wrp">
			<view class="title">会员事项</view>
			<text>1.开通会员后可享受尊贵VIP一对一服务</text>
			<text>2.开通会员后可优先处理，加快审核速度</text>
			<text>3.升级后会员时间将在当前会员时间基础上累加</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: null,
				days: '',
				recharge: [
					{
						month: '12个月',
						price:　'399'
					},
					{
						month: '3个月',
						price:　'199'
					},
					{
						month: '1个月',
						price:　'59'
					},
				]
			}
		},
		onLoad(){
			this.$get('/vip/getList').then(res=>{
				this.recharge = res.list;
				this.days = res.days;
			})
		},
		methods: {
			change(index,id){
				this.checked = index;
				this.$post('/vip/buy',{id:id}).then(res=>{
					uni.showToast({
						title: res.message,
						icon: 'none'
					});
				})
			}
		}
	}
</script>

<style lang="scss">
	.member{
		.tip{
			display: flex;
			flex-direction: column;
			margin-top: 80upx;
			.title{
				font-size:30upx;
				color:rgba(51,51,51,1);
				margin-bottom: 30upx;
			}
			text{
				font-size:26upx;
				line-height: 50upx;
				color:rgba(153,153,153,1);
			}
		}
		.recharge{
			padding-top: 30upx;
			.item{
				width:200upx;
				height:200upx;
				background:rgba(255,255,255,1);
				border:1upx solid rgba(217,217,217,1);
				border-radius:10upx;
				flex-direction: column;
				.month{
					font-size:24upx;
					color:rgba(91,100,108,1);
				}
				.price{
					display: flex;
					align-items: baseline;
					text{
						color:rgba(179,68,20,1);
						&:first-child{
							font-size:24upx;
						}
						&:nth-child(2){
							font-size:60upx;
						}
					}
				}
			}
			.active{
				background:rgba(255,250,242,1);
				border:1upx solid rgba(207,175,113,1);
			}
		}
		.show{
			padding: 60upx 30upx 20upx;
			background:linear-gradient(0deg,rgba(56,62,68,1) 0%,rgba(96,106,114,1) 100%);
			.top{
				background: url(../../static/image/member_bg.png);
				width: 690upx;
				height: 269upx;
				background-size: 690upx 269upx;
				flex-direction: column;
				justify-content: center;
				text{
					&:first-child{
						font-size:72upx;
						color:rgba(134,107,54,1);
						margin-bottom: 40upx;
					}
					&:nth-child(2){
						font-size:30upx;
						color:rgba(255,255,255,1);
					}
				}
			}
		}
	}
</style>
