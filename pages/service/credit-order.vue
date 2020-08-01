<template>
	<view class="form wrp">
		<view class="item ct mt30">
			<text>姓名</text>
			<input class="uni-input" placeholder="请填写姓名" v-model="params.name" />
		</view>
		<view class="item ct mt30">
			<text>身份证号</text>
			<input class="uni-input" placeholder="请填写身份证号" v-model="params.idcard" />
		</view>
		<view class="item ct mt30">
			<text>手机号</text>
			<input class="uni-input" placeholder="请填写手机号" v-model="params.mobile" />
		</view>
		<view class="item ct mt30">
			<text>地址</text>
			<input class="uni-input" placeholder="请填写地址" v-model="params.address" />
		</view>
		<view class="item ct mt30">
			<!-- <text>时间</text> -->
			<!-- <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
			        <view class="uni-input">{{date}}</view>
			 </picker> -->
			<picker mode="date" :value="date" @change="bindDateChange">
				<text>时间</text>
				<view class="uni-input">{{date}}</view>
			</picker>
			<!-- <input class="uni-input" placeholder="请选择时间" /> -->
		</view>
	</view>
</template>

<script>
	// import Vaildate from '@/plugins/validate.js'
	const isPhone = /^1[345789]\d{9}$/;
	const isIdcard = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				date: currentDate,
				params: {
					type: '', //0-信用卡，1-产品
					spuId: '', //产品id，type为0时可传0
					name: '', //姓名
					idcard: '', //身份证
					mobile: '', //手机
					address: '', //地址
					dropinTime: currentDate, //上门时间，格式yyyy-MM-dd HH:mm
				}
			}
		},
		onLoad(options) {
			if (options.id) {
				this.params.spuId = options.id;
				this.params.type = 1;
			} else {
				this.params.type = 0;
				this.params.spuId = 0;
			}
		},
		//提交
		onNavigationBarButtonTap: function(e) {
			if (!this.params.name) {
				uni.showToast({
					title: '请填写姓名',
					icon: 'none'
				});
				return false;
			}
			if (!this.params.idcard) {
				uni.showToast({
					title: '请填写身份证号',
					icon: 'none'
				});
				return false;
			}
			if (!isIdcard.test(this.params.idcard)) {
				uni.showToast({
					title: '身份证格式不正确',
					icon: 'none'
				});
				return false;
			}
			if (!this.params.mobile) {
				uni.showToast({
					title: '请填写手机号',
					icon: 'none'
				});
				return false;
			}
			if (!isPhone.test(this.params.mobile)) {
				uni.showToast({
					title: '手机格式不正确',
					icon: 'none'
				});
				return false;
			}
			if (!this.params.address) {
				uni.showToast({
					title: '请填写地址',
					icon: 'none'
				});
				return false;
			}
			this.$post('/product/dropinApply',this.params).then(res=>{
				uni.showToast({
					title: '预约成功',
					icon: 'none'
				});
				setTimeout(function() {
					uni.redirectTo({
						url:'/pages/service/credit'
					})
				}, 600)
			})
		},
		methods: {
			bindDateChange: function(e) {
				this.date = e.target.value
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

<style>

</style>
