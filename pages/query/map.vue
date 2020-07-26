<template>
	<view>
		<view class="uni-common-mt">
			<view>
				<map :latitude="latitude" :longitude="longitude" >
				</map>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				latitude: null,
				longitude: null,
			}
		},
		onLoad(options) {
			if(options.lat || options.lng){
				this.latitude = options.lat;
				this.longitude = options.lng;
			}
		
		},
		methods: {

		}
	}
</script>
<style>
	map {
		width: 100%;
		height: 95vh;
	}
</style>
