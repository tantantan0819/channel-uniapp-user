<template>
	<view>
		<div class="map">
			<view class="map_map">
				<view>
					<map :latitude="latitude" :longitude="longitude" :markers="covers">
					</map>
				</view>
			</view>
			<div class="address_text" v-if="address">
				<text>{{address}}</text>
			</div>
		</div>
		
	</view>
</template>
<script>
	export default {
		data() {
			return {
				latitude: null,
				longitude: null,
				covers: [],
				address:''
			}
		},
		onLoad(options) {
			if (options.lat || options.lng) {
				this.latitude = options.lat;
				this.longitude = options.lng;
				let marker = {
					latitude: options.lat,
					longitude: options.lng,
					iconPath: '../../static/image/markers.png'
				}
				this.covers.push(marker)
			}
			if(options.address){
				this.address = options.address;
			}

		},
		methods: {

		}
	}
</script>
<style lang="scss">
	.map {
		map{
			width: 100%;
			height: 100vh;
		}
		.address_text{
			width: 100%;
			height: 140upx;
			background-color: #fff;
			position: fixed;
			bottom: 0;
			padding: 0 50upx;
			text{
				font-size: 30upx;
				line-height: 140upx;
			}
		}
	}
</style>
