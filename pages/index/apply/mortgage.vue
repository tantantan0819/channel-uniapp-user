<template>
	<view class="form wrp">
		<view class="item ct mt30">
			<text>还款期数</text>
			 <input class="uni-input" placeholder="请填写按揭车已还款期数（单位/期）" />
		</view>
		<view class="item ct mt30">
			<text>正常按揭</text>
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
			<text>分期</text>
			<radio-group @change="agiChange" class="cs">
				<label class="uni-list-cell uni-list-cell-pd ct" v-for="(item, index) in aging" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === agingId" />
					</view>
					<view>{{item.name}}</view>
				</label>
			 </radio-group>
		</view>
	
		<view class="item ct mt30">
			<text>月供金额</text>
			 <input class="uni-input" placeholder="请填写车贷月供金额（单位/元）" />
		</view>
		<view class="item ct mt30">
			<text>车损险</text>
			 <input class="uni-input" placeholder="请填写车损险保额（单位/万元）" />
		</view>
		<view class="item ct mt30">
			<text>购置价</text>
			 <input class="uni-input" placeholder="请填写车辆购置价（单位/万元）" />
		</view>
		<view class="item ct mt30">
			<text>车牌归顺</text>
			 <input class="uni-input" placeholder="请填写车牌归属地" />
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
				aging: [{
						value: '1',
						name: '是'
					},
					{
						value: '0',
						name: '否',
					},
				],
			mortgageId: 0,
			agingId: 0,
			}
		},
		  onNavigationBarButtonTap:function(e){
		           
					
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
				agiChange: function(evt) {
					for (let i = 0; i < this.aging.length; i++) {
						if (this.aging[i].value === evt.target.value) {
							this.agingId = i;
							break;
						}
					}
				},
			
		}
	}
</script>

<style>

</style>
