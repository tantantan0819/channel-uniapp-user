<template>
	<view class="form wrp">
	
		<view class="item ct mt30 mulbox">
			<text>微粒贷</text>
			<view class="mul">
				<input class="uni-input" placeholder="请填写微粒贷已使用时间（单位/月）" />
				<input class="uni-input" placeholder="请填写微粒贷授信额度（单位/万元）" />
			</view>
		</view>
		<view class="item ct mt30">
			<text>芝麻信用</text>
			<input class="uni-input" placeholder="请填写芝麻信用分（单位/分）" />
		</view>
		<view class="item ct mt30">
			<text>借呗额度</text>
			<input class="uni-input" placeholder="请填写借呗额度（单位/万元）" />
		</view>
		<view class="item ct mt30 mulbox">
			<text>近6个月</text>
			<view class="mul">
				<input class="uni-input" placeholder="请填写近6个月是否有下款或上征信的贷款" />
				<input class="uni-input" placeholder="请填写近贷款额度（单位/万元）" />
			</view>
		</view>
		<view class="item ct mt30">
			<text>信用卡</text>
			<input class="uni-input" placeholder="请填写正常使用信用卡的时间（单位/月）" />
		</view>
		<view class="item ct mt30">
			<text>最高额度</text>
			<input class="uni-input" placeholder="请填写单张信用卡最高额度（单位/元）" />
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
