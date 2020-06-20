<template>
	<view class="form wrp">
		<view class="item ct mt30">
			<text>还款期数</text>
			 <input class="uni-input" placeholder="请填写按揭房已还款期数（单位/期）" />
		</view>
		
		<view class="item ct mt30">
			<text>月供金额</text>
			 <input class="uni-input" placeholder="请填写房贷月供金额（单位/万元）" />
		</view>
		<view class="item ct mt30">
			<text>房贷结清</text>
			<radio-group @change="morChange" class="cs">
				<label class="uni-list-cell uni-list-cell-pd ct" v-for="(item, index) in mortgage" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === mortgageId" />
					</view>
					<view>{{item.name}}</view>
				</label>
			 </radio-group>
		</view>
		<view class="item ct mt30">
			<text>房屋面积</text>
			 <input class="uni-input" placeholder="请填写房屋面积（单位/平方米）" />
		</view>
		<view class="item ct mt30">
			<text>总价值</text>
			 <input class="uni-input" placeholder="请填写按揭房总价值（单位/万元）" />
		</view>
		<view class="item ct mt30">
			<text>小区位置</text>
			 <input class="uni-input" placeholder="请填写小区位置" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mortgage: [{
						value: '1',
						name: '是'
					},
					{
						value: '0',
						name: '否',
					},
				],
			mortgageId: 0,
			
			}
		},
		onNavigationBarButtonTap:function(e){
		         uni.navigateBack({
		         	delta: 1
		         });
		},
		methods: {
			    morChange: function(evt) {
					for (let i = 0; i < this.mortgage.length; i++) {
						if (this.mortgage[i].value === evt.target.value) {
							this.mortgageId = i;
							break;
						}
					}
				},
		}
	}
</script>

<style>

</style>
