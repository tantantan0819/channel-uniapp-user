<template>
	<view class="form wrp">
		<view class="item ct mt30">
			<text>姓名</text>
			 <input class="uni-input" placeholder="请填写姓名" />
		</view>
		<view class="item ct mt30">
			<text>身份证号</text>
			 <input class="uni-input" placeholder="请填写身份证号" />
		</view>
		<view class="item ct mt30">
			<text>手机号</text>
			 <input class="uni-input" placeholder="请填写手机号" />
		</view>
		<view class="item ct mt30">
			<text>地址</text>
			 <input class="uni-input" placeholder="请填写地址" />
		</view>
		<view class="item ct mt30">
			<text>时间</text>
			 <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
			        <view class="uni-input">{{date}}</view>
			 </picker>
			<!-- <input class="uni-input" placeholder="请选择时间" /> -->
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
			}
		},
		methods: {
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

<style>

</style>
