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
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
					{
						name: '地区',
						text: '四川 成都 高新区',
					},
				]
			}
		},
		methods: {
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
