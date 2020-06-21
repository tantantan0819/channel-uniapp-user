<template>
	<view class="info_user">
		<view class="item mt40">
			<input type="text" value="吴亦凡" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onNavigationBarButtonTap:function(e){
		         uni.navigateBack({
		         	delta: 1
		         });
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
