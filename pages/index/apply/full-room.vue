<template>
	<view class="form wrp">
		<view class="item ct mt30">
			<text>房产证</text>
			<radio-group @change="houseChange" class="cs">
				<label class="uni-list-cell uni-list-cell-pd ct" v-for="(item, index) in house" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === houseId" />
					</view>
					<view>{{item.name}}</view>
				</label>
			 </radio-group>
		</view>
		<view class="item ct mt30">
			<text>不动产证</text>
			<radio-group @change="realChange" class="cs">
				<label class="uni-list-cell uni-list-cell-pd ct" v-for="(item, index) in real" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === realId" />
					</view>
					<view>{{item.name}}</view>
				</label>
			 </radio-group>
		</view>
		<view class="item ct mt30">
			<text>土地性质</text>
			<radio-group @change="natureChange" class="cs">
				<label class="uni-list-cell uni-list-cell-pd ct" v-for="(item, index) in nature" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === natureId" />
					</view>
					<view>{{item.name}}</view>
				</label>
			 </radio-group>
		</view>
		<view class="item ct mt30 mulbox">
			<text>房屋性质</text>
			<radio-group @change="housingChange" class="cs">
				<label class="uni-list-cell uni-list-cell-pd ct" v-for="(item, index) in housing" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === housingId" />
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
			 <input class="uni-input" placeholder="请填写现房总价值（单位/万元）" />
		</view>
		<view class="item ct mt30">
			<text>购买时间</text>
			 <input class="uni-input" placeholder="请填写已购房时间（单位/月）" />
		</view>
		<view class="item ct mt30">
			<text>小区名字</text>
			 <input class="uni-input" placeholder="请填写小区名字" />
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
				house: [{
						value: '1',
						name: '有'
					},
					{
						value: '0',
						name: '无',
					},
				],
				real: [{
						value: '1',
						name: '有'
					},
					{
						value: '0',
						name: '无',
					},
				],
				nature: [{
						value: '1',
						name: '出让'
					},
					{
						value: '0',
						name: '规划',
					},
				],
				housing: [
					{
						value: '0',
						name: '商品房'
					},
					{
						value: '1',
						name: '商铺',
					},
					{
						value: '2',
						name: '公寓'
					},
					{
						value: '3',
						name: '商住两用',
					},
					{
						value: '4',
						name: '安置房'
					},
					{
						value: '5',
						name: '别墅',
					},
					{
						value: '6',
						name: '自建房',
					}
				],
			houseId: 0,
			realId: 0,	
			natureId: 0,
			}
		},
		onNavigationBarButtonTap:function(e){
		         uni.navigateBack({
		         	delta: 1
		         });
		},
		methods: {
			    houseChange: function(evt) {
					for (let i = 0; i < this.house.length; i++) {
						if (this.house[i].value === evt.target.value) {
							this.houseId = i;
							break;
						}
					}
				},
				realChange: function(evt) {
					for (let i = 0; i < this.real.length; i++) {
						if (this.real[i].value === evt.target.value) {
							this.realId = i;
							break;
						}
					}
				},
				natureChange: function(evt) {
					for (let i = 0; i < this.nature.length; i++) {
						if (this.nature[i].value === evt.target.value) {
							this.natureId = i;
							break;
						}
					}
				},
			
		}
	}
</script>

<style>

</style>
