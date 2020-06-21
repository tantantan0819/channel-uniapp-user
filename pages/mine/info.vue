<template>
	<view class="info">
		<view class="line-up">
			<view class="line-item mt20" v-for="(item,index) in mine" :key="index" @click="link(item.link)">
				<view class="line_left alone">
					<text>{{item.name}}</text>
				</view>
				<view class="line-right">
					<text v-if="item.text">{{item.text}}</text>
					<image src="../../static/image/mine_icon.png" mode=""></image>
				</view>
			</view>
			<view class="line-item mt20">
				<view class="line_left alone">
					<text>地区</text>
				</view>
				<view class="line-right ct">
					<picker @change="bindPickerChange" :value="areaValue" :range="array">
					      <text class="font ct">四川 成都 高新区</text>
					 </picker>
					<image src="../../static/image/mine_icon.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				areaValue: 0,
				 array: ['中国', '美国', '巴西', '日本'],
				mine:[
					{   
						link: '/pages/mine/nickname',
						name: '昵称',
						text: '吴亦凡'
					},
					{
						link: '/pages/mine/sex',
						name: '性别',
						text: '男'
					},
					// {
					// 	name: '地区',
					// 	text: '四川 成都 高新区',
					// },
				]
			}
		},
		onNavigationBarButtonTap:function(e){
		       	uni.switchTab({
		       		url: '/pages/mine/index'
		       	})
		},
		methods: {
			bindPickerChange: function(e) {
			          console.log('picker发送选择改变，携带值为', e.target.value)
			          this.areaValue = e.target.value
			      },
			link(url){
				uni.navigateTo({
					 url: url
				})
			}
		}
	}
</script>

<style>

</style>
