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
			<view class="line-item mt20" @click="popup_bottom">
				<view class="line_left alone">
					<text>地区</text>
				</view>
				<view class="line-right ct">
					<text class="font ct">{{area}}</text>
					<image src="../../static/image/mine_icon.png" mode=""></image>
				</view>
			</view>
		</view>
		<v-area ref="linkAddress" :height="height" @confirmCallback="confirmCallback()"></v-area>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				provinceId: '',
				cityId: '',
				areaId: '',
				type: 4, //1-头像，2-性别，3-昵称，4-地区
				height: '500px',
				area:'',
				mine: [{
						link: '/pages/mine/nickname',
						name: '昵称',
						text: '吴亦凡'
					},
					{
						link: '/pages/mine/sex',
						name: '性别',
						text: '男'
					},
				]
			}
		},
		onNavigationBarButtonTap: function(e) {
			if(this.area){
				this.$post('/changeInfo', {
					type: this.type,
					provinceId: this.provinceId,
					cityId: this.cityId,
					areaId:this.areaId
				}).then(res => {
					uni.showToast({
						title: '保存成功',
						icon: 'none'
					});
					setTimeout(function() {
						uni.switchTab({
							url:'/pages/mine/index'
						})
					}, 600)
				})
			}else{
				uni.showToast({
					title: '请选择您的地址',
					icon: 'none'
				});
			}
		},
		methods: {
			link(url) {
				uni.navigateTo({
					url: url
				})
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
			//确认地区
			confirmCallback: function() {
				let area = uni.getStorageSync('area');
				this.provinceId = uni.getStorageSync('provinceId');
				this.cityId = uni.getStorageSync('cityId');
				this.areaId = uni.getStorageSync('areaId');
			    this.area = area.split('-').join(' ');
			}
		}
	}
</script>

<style>

</style>
